import { Alert } from "@mui/material";
import React from "react";
import useAlerts from "../hooks/useAlerts";

// Alerts component that handles rendering and closing error messages
function Alerts() {
  const { alerts, removeAlert } = useAlerts();
  return (
    <section className="fixed z-50 flex w-full flex-col items-center space-y-1 pt-1">
      {alerts.map((alert, index) => (
        <Alert
          severity={alert.severity}
          key={`Alert_${index}`}
          className="w-2/5 z-50"
          onClose={() => {
            removeAlert(index);
          }}
        >
          {alert.message}
        </Alert>
      ))}
    </section>
  );
}

export default Alerts;
