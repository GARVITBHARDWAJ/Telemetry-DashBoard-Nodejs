import React from "react";
import { Jumbotron, Image } from "react-bootstrap";
const User = ({ data }) => {
  console.log(data);
  const image = data.image;

  return (
    <div style={{ display: "flex" }}>
      <Jumbotron>
        <ul style={{ listStyle: "none" }}>
          <li>Email : {data.email}</li>
          <li>
            Name : {data.firstname} {data.lastname}
          </li>
          <li>Username: {data.username}</li>
          <li>Mobile : {data.mobile}</li>
          <li>Address: {data.address}</li>
        </ul>
      </Jumbotron>
      <Image src={image} style={{ height: 100, width: 100 }} />
    </div>
  );
};

export default User;
