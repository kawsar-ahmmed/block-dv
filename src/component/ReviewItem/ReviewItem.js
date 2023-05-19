import React from 'react';
import { Col } from 'react-bootstrap';
import './ReviewItem.css'

const ReviewItem = ({ review }) => {
    const { name, description, rating } = review;
    return (
        <Col lg={4}>
            <div className="review-item">
                <h3>{name}</h3>
                <p>{description}</p>
                <h5>{rating} Stars</h5>
            </div>
        </Col>
    );
};

export default ReviewItem;