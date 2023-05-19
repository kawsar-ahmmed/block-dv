import React from 'react';
import './Service.css'
import { Container, Row } from 'react-bootstrap';
import useService from '../../hooks/useService';
import ServiceItem from '../ServiceItem/ServiceItem';

const Service = () => {
    const [service, setService] = useService();
    return (
        <Container className='service-container' fluid>
            <Container>
                <div className="service-heading">
                    <h2>Our Services</h2>
                </div>
                <Row>
                    {
                        service.map(service => <ServiceItem
                            service={service}
                        ></ServiceItem>)
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default Service;