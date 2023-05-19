import React from 'react';
import { Col } from 'react-bootstrap';
import './ServiceItem.css'

const ServiceItem = ({ service }) => {
    const { name, description } = service;

    return (

        <Col lg={4} md={4} sm={12}>
            <div className="service-item">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </Col>
    );
};

export default ServiceItem;