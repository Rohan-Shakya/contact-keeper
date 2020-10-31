import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

export const Alerts = () => {
  const alertContext = useContext(AlertContext);
  console.log(alertContext.alerts.length);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'></i> {alert.msg}
      </div>
    ))
  );
};
