import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAlerts from "../hooks/useAlerts";

/**
 * PageNotFound is a component called whenever the user tries to access a URL outside of the websites scope and will redirect the user home and return a 404 error alert. 
 * 
 * @return {HTML} a button this is automatically clicked and navigates the user back home
 */
function PageNotFound() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  const { addAlert } = useAlerts();
  useEffect(() => {
    addAlert({ severity: "warning", message: "Error 404: Page Not Found" });
  }, []);

  return (
    <div>
      <button onClick={navigateToHome()}>Going Home...</button>
    </div>
  );
}

export default PageNotFound;
