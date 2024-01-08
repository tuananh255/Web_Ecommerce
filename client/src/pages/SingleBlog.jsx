import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import blog from '../images/blog-1.jpg'
import Container from '../components/Container';

const SingleBlog = () => {
    return (
        <>
            <Meta title="Dynamic Blog Name"/>
            <BreadCrumb title="Dynamic Blog Name"/>   

            <Container className="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to='/blogs' className='d-flex align-items-center gap-10'>
                                <FaArrowLeft />
                                Go back to Blogs
                            </Link>
                            <h3 className="title">
                                A Beautiful Sunday Morning Renaissance
                            </h3>
                            <img className='img-fluid w-100 my-4' src={blog} alt="blog" />
                            <p>
                                you're only as good as your last collection, which is an 
                                enormous pressure.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default SingleBlog;
