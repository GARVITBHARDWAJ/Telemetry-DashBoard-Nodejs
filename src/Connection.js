import React from "react";
import instance from "./api";
import { Link } from "react-router-dom";

const easyConnect = ({ type, data }) => {
  switch (type) {
    case "signin":
      return async () => {
        const { email, username } = data;
        try {
          const response = await instance.post("/signup", { email, username });
          console.log(response.data);
        } catch (err) {
          console.log("Error in signup", err);
        }
      };
    case "signup":
      return async () => {
        console.log(data);
        const {
          email,
          username,
          firstname,
          lastname,
          address,
          mobile,
          image,
          password,
        } = data;
        try {
          const response = await instance.post("/signin", {
            email,
            username,
            firstname,
            lastname,
            address,
            mobile,
            image,
            password,
          });
          console.log(response.data);
        } catch (err) {
          console.log("Error in signin" + err.message);
        }
      };
    case "signout":
      return <Link href={"/"} />;
  }
};
