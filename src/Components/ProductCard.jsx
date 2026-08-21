import React from 'react'
import Card from 'react-bootstrap/Card';



export const ProductCard = ({id,title,price,thumbnail}) => {
  return (
        <Card style={{width: '28rem'}} key={id}>
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {price}
                </Card.Text>
            </Card.Body>
        </Card>
  )
}

export default ProductCard