import React from 'react';
import styled from 'styled-components';
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

const TreatmentCard: React.FunctionComponent = () => {
  return (
    <>
      <CardColumns>
        <Card>
          <CardImg
            height="10%"
            width="20%"
            src={require('../../Images/nail.jpg')}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>£20</CardSubtitle>
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
            height="10%"
            width="20%"
            src={require('../../Images/nail.jpg')}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>£30</CardSubtitle>
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
            height="10%"
            width="20%"
            src={require('../../Images/nail.jpg')}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>£40</CardSubtitle>
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
            height="10%"
            width="20%"
            src={require('../../Images/nail.jpg')}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>£8</CardSubtitle>
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
            height="10%"
            width="20%"
            src={require('../../Images/nail.jpg')}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>£45</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Book Now</Button>
          </CardBody>
        </Card>
      </CardColumns>
    </>
  );
};

export default TreatmentCard;
