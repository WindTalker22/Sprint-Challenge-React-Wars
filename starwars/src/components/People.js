import React from "react";

const People = props => {
  const { people } = props;
  return (
    <div>
      {people.map(item => {
        console.log(item);
      })}
    </div>
  );
};
export default People;
