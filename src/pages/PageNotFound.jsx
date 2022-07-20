import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAlerts from "../hooks/useAlerts";

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
      <button onClick={navigateToHome()}>Go Home?</button>
    </div>
  );
}

export default PageNotFound;
