import React from 'react';
import useReview from '../../hooks/UseReview';
import ReviewItem from '../ReviewItem/ReviewItem';
import { Container, Row } from 'react-bootstrap';
import './Review.css'

const Review = () => {
    const [review, setReview] = useReview();
    return (
        <Container>
            <div className="review-heading">
                <h1>Review is wirokd</h1>
            </div>
            <Row>
                {
                    review.map(review => <ReviewItem
                        review={review}
                    ></ReviewItem>)
                }
            </Row>
        </Container>
    );
};

export default Review;