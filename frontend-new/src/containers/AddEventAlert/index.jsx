import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import rightarrow from '../../assets/images/rightarrow.svg';

import EventAlertForm from '../../components/EventAlertForm';

//import KpiAlertDestinationForm from '../../components/KpiAlertDestinationForm';

const AddEventAlert = () => {
  const [steps, setSteps] = useState(1);
  return (
    <>
      <div className="page-navigation">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/alerts/new">Alerts / New Alert</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {steps === 2 ? 'Alert Destination' : 'Event Alert'}
            </li>
          </ol>
        </nav>
        {/* Back */}
        <div className="backnavigation">
          <Link to="/alerts/new">
            <img src={rightarrow} alt="Back" />
            <span>{steps === 2 ? 'Alert Destination' : 'Event Alert'}</span>
          </Link>
        </div>
      </div>
      <div className="onboarding-steps">
        <ul>
          <li className={steps > 1 ? 'selected' : 'active'}>
            Alert Configuration
          </li>
          <li className={steps === 2 ? 'active' : ''}>Alert Destination</li>
        </ul>
      </div>
      <div className="add-form-container">
        {steps === 1 ? (
          <EventAlertForm setSteps={setSteps} />
        ) : (
          <></>
          // <KpiAlertDestinationForm event setEventSteps={setSteps} />
        )}
      </div>
    </>
  );
};
export default AddEventAlert;