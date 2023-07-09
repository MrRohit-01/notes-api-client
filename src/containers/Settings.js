import { LinkContainer } from "react-router-bootstrap";
import LoaderButton from "../components/LoaderButton";
import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { useHistory } from "react-router-dom";
import "./Settings.css";


export default function Settings() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  function billUser(details) {
    return API.post("notes", "/billing", {
      body: details,
    });
  }
  return (
    <div className="Settings">
    <LinkContainer to="/settings/email">
    <LoaderButton className="change button-65" block bsSize="large">
    Change Email
    </LoaderButton>
    </LinkContainer>
    <LinkContainer to="/settings/password">
    <LoaderButton className="change button-65 chpassword"  bsSize="large">
    Change Password
    </LoaderButton>
    </LinkContainer>
</div>
);
}