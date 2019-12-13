import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const People = props => {
  const { people } = props;
  return (
    <div>
      {people.map(item => {
        console.log(item);

        return (
          <div className="Person">
            <Card
              style={{ width: "50%", backgroundColor: "lightgray" }}
              className="mt-4"
            >
              <CardBody color="secondary">
                <CardTitle>{item.name}</CardTitle>
                <CardSubtitle>Height: {item.height}cm</CardSubtitle>
                <CardSubtitle>Weight: {item.mass}kg</CardSubtitle>
                <CardSubtitle>Hair Color: {item.hair_color}</CardSubtitle>
                <CardSubtitle>Skin Color: {item.skin_color}</CardSubtitle>
                <CardSubtitle>Birth Year: {item.birth_year}</CardSubtitle>
                <CardText></CardText>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
export default People;
