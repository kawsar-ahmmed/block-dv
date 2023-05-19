import React from 'react';
import './Banner.css'
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../Assets/Hero image.png'

const Banner = ({handleBook}) => {
    return (
        <div>
            <Container>
                <div className="banner-full">
                    <Row>
                        <Col xs={7} className='banner-info'>
                            <h1><span>360° Degree</span> Solution for your NFT Business</h1>
                            <p>Create NFT Marketplace using revolutionary blockchain technology and the latest frameworks. We create customizable, whitelabel, unique and irreplaceable NFT Marketplaces
                                sldk fja dsjga ldjg asdgl.
                            </p>
                            <button onClick={handleBook}>BOOK FREE DISCOVERY CALL</button>
                        </Col>
                        <Col xs={5} className='banner-img'>
                            <img src={img} alt="" />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Banner;