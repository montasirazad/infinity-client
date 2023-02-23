import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Product = (props) => {
    const { name, volume, material, type, use, img,id } = props.product
    return (
        <div className='my-4 mx-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Volume:{volume} <br />
                        Use:{use} <br />
                        Type:{type} <br />
                        Material:{material}

                    </Card.Text>
                    <Button variant="primary">Buy now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;