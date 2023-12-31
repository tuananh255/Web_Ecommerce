import React from 'react';
import blog from '../images/blog-1.jpg'
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (
        // <div className='col-3'>
            <div className="blog-card">
                <div className="card-image">
                    <img className='img-fluid w-100' src={blog} alt="blog" />
                </div>
                <div className="blog-content">
                    <p className="date">1 Dec, 2022</p>
                    <h5 className="title">A beautiful sunday morning renaissance</h5>
                    <p className="desc">
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit.Alque quaerat accusamus officia
                    </p>
                    <Link to='/blog/:id' className='button'>Read More</Link>
                </div>
            </div>
        // </div>
    );
}

export default BlogCard;
