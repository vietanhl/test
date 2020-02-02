import React from 'react';
import styled from 'styled-components';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from 'reactstrap';

const Container = styled.div`
  font-family: 'Courier New', Courier, monospace;
`;

const TreatmentCard: React.FunctionComponent = () => {
  return (
    <Container>
      <CardDeck>
        <Card>
          <CardImg
            height="30%"
            width="20%"
            src={require('../../Images/nail.jpg')}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Book Now</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            height="30%"
            width="20%"
            src={require('../../Images/nail.jpg')}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Book Now</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            height="30%"
            width="20%"
            src={require('../../Images/nail.jpg')}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Book Now</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            height="30%"
            width="20%"
            src={require('../../Images/nail.jpg')}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Book Now</Button>
          </CardBody>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default TreatmentCard;
