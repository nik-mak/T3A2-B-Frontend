import { Alert } from "@mui/material";
import React from "react";
import useAlerts from "../hooks/useAlerts";

/**
 * Alerts component handles rendering and closing modals
 *
 *
 * @returns {HTML} a collection of alerts
 */
function Alerts() {
  const { alerts, removeAlert } = useAlerts();
  return (
    <section className="fixed z-50 flex w-full flex-col items-center space-y-1 pt-1">
      {/* Maps over each alert in the alerts state and prints it see reducer useAlerts for more info */}
      {alerts.map((alert, index) => (
        <Alert
          severity={alert.severity}
          key={`Alert_${index}`}
          className="sm:w-2/5 z-50 w-full"
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
