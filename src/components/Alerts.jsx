import { Alert } from "@mui/material";
import React from "react";
import { useContext } from "react";
import AlertsContext from "../contexts/alert";

function Alerts() {
  const [alerts, setAlerts] = useContext(AlertsContext);
  return (
    <section className="w-full flex flex-col items-center fixed space-y-1 pt-1">
      {alerts.map((alert, index) => (
        <Alert severity={alert.severity} key={`Alert_${index}`} className="w-2/5" onClose={() => {
          alerts.splice(index, 1)
          setAlerts([...alerts])
        }}>
          {alert.message}
        </Alert>
      ))}
    </section>
  );
}

export default Alerts;
