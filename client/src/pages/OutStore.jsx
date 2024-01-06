import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
// import {Helmet} from "react-helmet";
import ReactStars from "react-rating-stars-component";

import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
const OutStore = () => {
    const [grid,setGrid] = useState(4)
    // const gridSetter = (i)=>{

    // }
    return (
        <>
            <Meta title="Our Store"/>
            <BreadCrumb title="Our Store"/>
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Shop by Categories
                                </h3>
                                <div className="">
                                    <ul className="ps-0">
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Filter By
                                </h3>
                                <div className="">
                                    <h5 className="sub-title">Availablity</h5>
                                    <div className="">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                In Stock (1)
                                            </label>
                                            <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue"/>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                Out of Stock (0)
                                            </label>
                                            <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue"/>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Price</h5>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="From"/>
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="To"/>
                                            <label htmlFor="floatingInput1">To</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Color</h5>
                                    <div className="">
                                        <ul className="colors ps-0 d-flex flex-wrap gap-10">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <h5 className="sub-title">Size</h5>
                                    <div className="">
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor='color-1'>
                                               S (2)
                                            </label>
                                            <input type="checkbox" className="form-check-input" name="" id="color-1" value="checkedValue"/>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor='color-2'>
                                               M (2)
                                            </label>
                                            <input type="checkbox" className="form-check-input" name="" id="color-2" value="checkedValue"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Product Tags
                                </h3>
                                <div className="">
                                    <div className="products-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge text-secondary bg-light rounded-3 px-3 py-2">HeadPhone</span>
                                        <span className="badge text-secondary bg-light rounded-3 px-3 py-2">Laptop</span>
                                        <span className="badge text-secondary bg-light rounded-3 px-3 py-2">Mobile</span>
                                        <span className="badge text-secondary bg-light rounded-3 px-3 py-2">Tablet</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Random Product
                                </h3>
                                <div className="">
                                    <div className="radom-products mb-3 d-flex">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" className='img-fluid' alt="Watch" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Kid HeadPhone bulk 10 pack multi colored for student</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3} 
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 300</b>
                                        </div>
                                    </div>
                                    <div className="radom-products d-flex">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" className='img-fluid' alt="Watch" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Kid HeadPhone bulk 10 pack multi colored for student</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3} 
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 300</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className='mb-0 d-block' style={{width:"100px"}}>Sort By:</p>
                                        <select name="sort_by" className='form-control form-select' id="SortBy">
                                            <option value="manual">Featured</option>
                                            <option value="best-selling">Best Selling</option>
                                            <option value="title-ascending">Alphabetically, A-Z</option>
                                            <option value="title-descending">Alphabetically, Z-A</option>
                                            <option value="rice-ascending">Price,low to high</option>
                                            <option value="price-descending">Price,high to low</option>
                                            <option value="created-descending">Date, old to new</option>
                                            <option value="created-descending">Date, new to old</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 grid">
                                        <p className="totalproducts mb-0">21 Products</p>
                                        <div className="d-flex gap-10 align-items-center">
                                            <img onClick={()=>{
                                                setGrid(3)
                                            }} src="images/gr4.svg" 
                                            className='d-block img-fluid' alt="grid" />
                                            <img onClick={()=>{
                                                setGrid(4)
                                            }} src="images/gr3.svg" 
                                            className='d-block img-fluid' alt="grid" />
                                            <img onClick={()=>{
                                                setGrid(6)
                                            }} src="images/gr2.svg" 
                                            className='d-block img-fluid' alt="grid" />
                                            <img onClick={()=>{
                                                setGrid(12)
                                            }} src="images/gr.svg" 
                                            className='d-block img-fluid' alt="grid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products-list pd-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    <ProductCard grid={grid}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OutStore;
