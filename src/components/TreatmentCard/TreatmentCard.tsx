import React, { useState, useEffect } from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  CardColumns,
} from 'reactstrap';
import BookButton from '../BookButton';

const TreatmentCard: React.FunctionComponent = (props: any) => {
  //TODO: Add treatment id to book button
  const title = 'Title';
  const price = '£20';
  const description = 'this is a description of the product';
  const cardObject = { title: title, price: price, description: description };

  const testObject = [
    <Card>
      <CardImg
        height="10%"
        width="20%"
        src={require('../../Images/nail.jpg')}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>{cardObject.title}</CardTitle>
        <CardSubtitle>{cardObject.price}</CardSubtitle>
        <CardText>{cardObject.description}</CardText>
        <BookButton {...props}>Book Now</BookButton>
      </CardBody>
    </Card>,
  ];

  const [arrayOfCards, setArrayOfCards] = useState([testObject]);
  useEffect(() => {
    repeatCards();
  }, []);
  const repeatCards = () => {
    var newArrayOfCards = [...arrayOfCards];
    for (let i = 0; i < 5; i++) {
      newArrayOfCards.push(testObject);
    }
    setArrayOfCards(newArrayOfCards);
  };

  return (
    <>
      <CardColumns>{arrayOfCards}</CardColumns>
    </>
  );
};

export default TreatmentCard;
