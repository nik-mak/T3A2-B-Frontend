import { useContext } from "react";
import AlertsContext from "../contexts/alert";

 /**
   * useAlerts hook that is used to add and remove Alerts
   *
   * @return {Object} an object containing the alerts state and the addAlerts and removeAlert functions
   */
export default function useAlerts() {
  const [alerts, setAlerts] = useContext(AlertsContext)

  function addAlert(alert) {
    setAlerts(alerts => [...alerts, alert])
  }

  function removeAlert(index) {
    alerts.splice(index, 1)
    setAlerts([...alerts])
  }
  return {alerts, addAlert, removeAlert}
}

