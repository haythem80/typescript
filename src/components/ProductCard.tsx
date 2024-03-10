import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
interface Player{
    item:{
        imageUrl: string;
        name: string;
        team: string;
        nationality: string;
        jerseyNumber: string;  
    }
}

const ProductCard:React.FC<Player> = ({item}) => {
    // console.log(item)
  return (
    <div className='cards'>
         <div className='cards'>
              <Card  style={{  margin:'20px' }} id="carte">
              <Card.Img variant="top" src={item.imageUrl} className="img" />
              <Card.Body>
              <Card.Title className='title'>{item.name}</Card.Title>
              <Card.Text className='text'>{item.team}</Card.Text>
              <Card.Text className='text1'>{item.nationality}</Card.Text>
              <Card.Text className='text2'>{item.jerseyNumber}</Card.Text>
              </Card.Body>
              </Card>
              
        </div>
    </div>
  )
}

export default ProductCard