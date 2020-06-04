import React from "react";
import { Redirect } from "react-router-dom";

export default ({ authfails }) => {
  if (!authfails) return <Redirect to="/" />;
};
