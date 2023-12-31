const cloudinary = require("cloudinary")


// điều chỉnh config 
cloudinary.config({
    //bỏ vào .env
    cloud_name:"ddgdnyzcu",
    api_key:"274546815151551",
    api_secret : "XanUExfgVCov4KdVJYiHdvfpyqc"
})

// cho phép upload ảnh lên cloudinary
const cloudinaryUploadImg = async(fileToUpLoads)=>{
  return new Promise((resolve) => {
      cloudinary.uploader.upload(fileToUpLoads, (result) => {
        resolve(
          {
            url: result.secure_url,
            asset_id: result.asset_id,
            public_id: result.public_id,
          },
          {
            resource_type: "auto",
          }
        );
      });
    });
}

const cloudinaryDeleteImg = async(fileToDelete)=>{
  return new Promise((resolve) => {
      cloudinary.uploader.destroy(fileToDelete, (result) => {
        resolve(
          {
            url: result.secure_url,
            asset_id: result.asset_id,
            public_id: result.public_id,
          },
          {
            resource_type: "auto",
          }
        );
      });
    });
}


module.exports = {cloudinaryUploadImg,cloudinaryDeleteImg}