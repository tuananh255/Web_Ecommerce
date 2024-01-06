import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
const ProductCard = (props) => {
    const {grid} = props
    let location = useLocation()
    return (
        <>
            <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
            <Link className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link to='/'>
                        <img src="images/wish.svg" alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image">
                    <img src="images/watch.jpg" className='img-fluid' alt="product image" />
                    <img src="images/acc.jpg" className='img-fluid' alt="product image" />
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
                            <img src="images/prodcompare.svg" alt="prodcompare" />
                        </Link>
                        <Link to='/'>
                            <img src="images/view.svg" alt="view" />
                        </Link>
                        <Link to='/'>
                            <img src="images/add-cart.svg" alt="AddCart" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
        <div className={`${location.pathname == "/store" ?  `gr-${grid}` : "col-3"}`}>
            <Link className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link to='/'>
                        <img src="images/wish.svg" alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image">
                    <img src="images/watch.jpg" className='img-fluid' alt="product image" />
                    <img src="images/acc.jpg" className='img-fluid' alt="product image" />
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
                            <img src="images/prodcompare.svg" alt="prodcompare" />
                        </Link>
                        <Link to='/'>
                            <img src="images/view.svg" alt="view" />
                        </Link>
                        <Link to='/'>
                            <img src="images/add-cart.svg" alt="AddCart" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
        </>
    );
}

export default ProductCard;
