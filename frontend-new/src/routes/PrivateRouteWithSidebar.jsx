import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Route, withRouter } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

// import { Redirect } from 'react-router-dom';
// import { isAuthenticated } from '../utils/user-helper';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import { getConnectionType } from '../redux/actions';

const PrivateRouteWithSidebar = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const { connectionType } = useSelector((state) => state.dataSource);

  useEffect(() => {
    dispatchGetConnectionType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatchGetConnectionType = () => {
    dispatch(getConnectionType());
  };

  useEffect(() => {
    if (connectionType && connectionType.length !== 0) {
      localStorage.setItem('connectionType', JSON.stringify(connectionType));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectionType]);

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <div className="container-wrapper">
            <Sidebar />
            <main>
              <Navbar />
              <div className="body-container">
                <Component {...props} />
              </div>
            </main>
            <ToastContainer
              position={toast.POSITION.BOTTOM_RIGHT}
              autoClose={5000}
            />
          </div>
        </>
      )}
    />
  );
};

export default withRouter(PrivateRouteWithSidebar);