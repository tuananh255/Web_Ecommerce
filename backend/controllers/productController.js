const ProductModel = require('../models/productModel.js')
const asyncHandle = require('express-async-handler')
const slugify = require('slugify')
const userModel = require('../models/userModel.js')
const {cloudinaryUploadImg,cloudinaryDeleteImg} = require('../utils/cloudinaly.js')


// create new product
const createProduct = asyncHandle(async(req,res)=>{
    try {
        // 2:32
        if(req.body.title){
            req.body.slug = slugify(req.body.title)
        }
        const newProduct = await ProductModel.create(req.body)
        res.status(200).send({
            success : true,
            message : "create product success !",
            newProduct
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "create product error !"
        })
    }
})


// update product
const updateProduct = asyncHandle(async (req, res) => {
    const {_id} = req.params;
    try {
      if (req.body.title) {
        req.body.slug = slugify(req.body.title);
      }
      const updateProduct = await ProductModel.findOneAndUpdate({ _id }, req.body, {
        new: true,
      })
      res.status(200).send({
        success : true,
        message : "update product success !"
    })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "update product error !"
        })
    }
  });
  // delete product
const deleteProduct = asyncHandle(async (req, res) => {
    const {_id} = req.params;
    try {
      const deleteProduct = await ProductModel.findOneAndDelete({_id})
      res.status(200).send({
        success : false,
        message : "delete product success !",
        deleteProduct
    })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "delete product error !"
        })
    }
});

// get a product
const getaProduct = asyncHandle(async(req,res)=>{
    const {_id}= req.params
    try {
        const findProduct = await ProductModel.findById(_id)
        res.status(200).send({
            success : true,
            message : "get a product error !",
            findProduct
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "get a product error !"
        })
    }
})

// get all product
const getAllProduct = asyncHandle(async(req,res)=>{
    try {

        // filtering 
        const queryObj = {...req.query} //truy vấn của yêu cầu (req.query) bằng cách sử dụng toán tử spread (...)
        // Một mảng excludeFields được định nghĩa để loại bỏ các trường cụ thể khỏi các tham số truy vấn (page, sort, limit, fields).
        const excludeFiedls = ['page','sort','limit','fields'] // cho ban đầu 
        excludeFiedls.forEach(el =>delete queryObj[el]) // nếu có cái nào trùng với queryObj thì xóa đi

        let queryStr = JSON.stringify(queryObj)
        // Các tham số truy vấn còn lại được chuyển đổi thành một chuỗi JSON 
        // (queryStr) và sau đó được biến đổi bằng một biểu thức chính quy để thay thế một 
        // số toán tử so sánh cụ thể (gte, gt, lte, lt) bằng các giá trị tương ứng của MongoDB ($gte, $gt, $lte, $lt).
        // replace sử dụng để thay thế một chuỗi con cụ thể bằng một chuỗi mới
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) =>`$${match}`) 
        // Nếu match là "gte", thì chuỗi mới sẽ là "$gte".
        // Nếu match là "gt", thì chuỗi mới sẽ là "$gt".


        let query = ProductModel.find(JSON.parse(queryStr)) // tìm kiếm các từ khóa được trả về


        // sorting
        if(req.query.sort){
            const sortBy = req.query.sort.split(",").join(" ")
            query=query.sort(sortBy) // lấy hết những gì query.sort có
        }else{
            query = query.sort("-createdAt")
        }
        // liming the fields
        if(req.query.fields){ // truy vấn tất cả những gì mà người search trên url http://localhost:5000/api/product/getall-product?fields=title,price,category
            const fields = req.query.fields.split(",").join(" ")
            query=query.select(fields) // lấy hết những gì query.sort có
        }else{
            query = query.select("-__v")
        }

        // pagination
        const page = req.query.page
        const limit = req.query.limit
        const skip = (page - 1) * limit
        query = query.skip(skip).limit(limit)
        if(req.query.page){
            const productCount = await ProductModel.countDocuments()
            if(skip>= productCount){
                res.status(500).send({
                    success : false,
                    message : "This page does not exists !"
                })
            }
        }

        console.log(page,limit,skip)


        const findProduct = await query // trả về kết quả
        res.status(200).send({
            success : true,
            message : "get all product error !",
            findProduct
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "get all product error !"
        })
    }
})


const addToWishlist = asyncHandle(async(req,res)=>{
    const {id}= req.user // duoc tao o middleware
    const {proId}=req.body
    try {
        const user = await userModel.findById(id)
        const areadyadded = user.wishlist.find(id=>id.toString()===proId)
        if(areadyadded){
            let user = await userModel.findByIdAndUpdate(id,{
                $pull : {wishlist:proId}
            },{new:true})
            res.json(user)
        }
        else{
            let user = await userModel.findByIdAndUpdate(id,{
                $push : {wishlist:proId}
            },{new:true})
            res.json(user)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "addToWishlist error !"
        })
    }
})

// danh gai san pham
const rating = asyncHandle(async (req, res) => {
    // Trích xuất ID Người Dùng và Dữ Liệu Đánh Giá từ Request:
    const { _id } = req.user; // đăng nhập sẽ có 
    const { star, prodId, comment } = req.body; // người dùng truyền vào
    // /////////////////
    try {
      const product = await ProductModel.findById(prodId); // tìm kiếm sản phẩm có id
      // kiểm tra người dùng đã đánh giá chưa
      let alreadyRated = product?.ratings.find(
        // tìm kiếm mảng ratings
        (userId) => userId.postedby.toString() === _id.toString() // lấy id người dùng 
      );
      // nếu có tồn tại thì cập nhật lại bài đánh giá của họ
      if (alreadyRated) {
        const updateRating = await ProductModel.updateOne(
          {
            ratings: { $elemMatch: alreadyRated }, // $elemMatc (tìm kiếm) : alreadyRated ( mún tìm kiếm )
          },
          {
            // "ratings.$.star": Đây là cách xác định trường star bên trong mảng ratings của tài liệu MongoDB. 
            // Dấu $ là một placeholder cho chỉ số của phần tử mà bạn đang cập nhật
            $set: { "ratings.$.star": star, "ratings.$.comment": comment },
          },
          {
            new: true,
          }
        );
      }
      // thêm đánh giá nếu người dùng chưa đánh giá 
      else {
        const rateProduct = await ProductModel.findByIdAndUpdate(
          prodId, // lấy id sản phẩm mà người dùng rating
          {
            //đẩy vào mảng
            $push: { // toán tử thêm vào một mảng tài liệu
              ratings: {
                star: star,
                comment: comment,
                postedby: _id,
              },
            },
          },
          {
            new: true,
          }
        );
      }

      // tính toán điểm đánh giá tỏng cộng và cập nhật sản phẩm cuối cùng
      const getallratings = await ProductModel.findById(prodId);
      let totalRating = getallratings.ratings.length; // tổng số đánh giá
      let ratingsum = getallratings.ratings 
        .map((item) => item.star) // lạp qua các item.start
        // pre là value tích lũy , 0 là value khởi tạo mà pre chạy ban đầu
        .reduce((prev, curr) => prev + curr, 0); // prev + curr thêm value của phần tử hiện tại vào giá trị tích lũy
      let actualRating = Math.round(ratingsum / totalRating); //  tinh duoc ti le cua sao de  hien thi  sao
      let finalproduct = await ProductModel.findByIdAndUpdate(
        prodId, // id mà người dùng truyền 
        {
          totalrating: actualRating, // update lại tổng sao 
        },
        { new: true }
      );
      res.json(finalproduct); 
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "rating error !"
        })
    }
  });

  // tạo cloudinaly(utils) và uploadimg(middleware) trước
const uploadImages =asyncHandle(async(req,res)=>{
  // console.log(req.files)
  // const {id} = req.params
  try {
    const uploader = (path)=>cloudinaryUploadImg(path,'images')
    const urls =[]
    const files = req.files
    for(const file of files){
      const {path}= file
      const newPath = await uploader(path)
      urls.push(newPath)
    }

    const images = urls.map(file=>
    {
      return file
    },)
    res.json(images)


    // const findProduct  = await ProductModel.findByIdAndUpdate(id,{
    //   images:urls.map(file=>
    //   {
    //     return file
    //   },)
    // },{
    //   new:true
    // })
    // res.json(findProduct)
  } catch (error) {
    console.log(error)
        res.status(500).send({
            success : false,
            message : "upload product images error !"
        })
  }
})

const deleteImages =asyncHandle(async(req,res)=>{
  const {id}=req.params
  try {
    const deleteImg =cloudinaryDeleteImg(id,'images')
    res.json({message:"deleted"})
    


  } catch (error) {
    console.log(error)
        res.status(500).send({
            success : false,
            message : "upload product images error !"
        })
  }
})

module.exports = {createProduct ,getaProduct,getAllProduct
  ,updateProduct,deleteProduct,addToWishlist,rating,
  uploadImages,deleteImages}

