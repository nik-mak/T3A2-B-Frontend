import { useContext } from "react";
import AlertsContext from "../contexts/alert";
// Experimental Reducer that can manage all states on the front end!

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

