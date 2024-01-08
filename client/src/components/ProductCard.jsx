import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodCompare from '../images/prodcompare.svg';
import wish from '../images/wish.svg';
import watch from '../images/watch.jpg';
import acc from '../images/acc.jpg';
import addcart from '../images/view.svg';
import view from '../images/add-cart.svg';

const ProductCard = (props) => {
    const {grid} = props
    console.log(grid)
    let location = useLocation()
    return (
        <>
            <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
                <Link to={`${
                    location.pathname=='/' 
                    ?'/product/:id'
                     : location.pathname=='/product/:id'
                     ?"/product/:id"
                     :':id'
                    }`} className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'>
                            <img src={wish} alt="wishlist" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img src={watch} className='img-fluid' alt="product image" />
                        <img src={acc} className='img-fluid' alt="product image" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4} 
                            edit={false} // không cho chỉnh sửa
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>
                            At vero eos et accusamus et iusto odio dignissmos ducimus qui balndtidtii paesentinum voluptatum 
                        </p>
                        <p className="price">
                            $100.00
                        </p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className='border-0 bg-transparent'>
                                <img src={prodCompare} alt="prodcompare" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt="view" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addcart} alt="AddCart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
                <Link to={`${
                    location.pathname=='/' 
                    ?'/product/:id' 
                    : location.pathname=='/product/:id'
                    ?"/product/:id"
                    :':id'}`} className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link to='/'>
                            <img src={wish} alt="wishlist" />
                        </Link>
                    </div>
                    <div className="product-image">
                        <img src={watch} className='img-fluid' alt="product image" />
                        <img src={acc} className='img-fluid' alt="product image" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4} 
                            edit={false} // không cho chỉnh sửa
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>
                            At vero eos et accusamus et iusto odio dignissmos ducimus qui balndtidtii paesentinum voluptatum 
                        </p>
                        <p className="price">
                            $100.00
                        </p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link to='/'>
                                <img src={prodCompare} alt="prodcompare" />
                            </Link>
                            <Link to='/'>
                                <img src={view} alt="view" />
                            </Link>
                            <Link to='/'>
                                <img src={addcart} alt="AddCart" />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default ProductCard;
