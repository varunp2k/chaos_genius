import {
  KPIEXPLORERREQUEST,
  KPIEXPLORERSUCCESS,
  KPIEXPLORERFAILURE,
  KPIEXPLORERFORMREQUEST,
  KPIEXPLORERFORMSUCCESS,
  KPIEXPLORERFORMFAILURE,
  KPIEXPLORERFIELDREQUEST,
  KPIEXPLORERFIELDSUCCESS,
  KPIEXPLORERFIELDFAILURE,
  KPIEXPLORERSUBMITREQUEST,
  KPIEXPLORERSUBMITSUCCESS,
  KPIEXPLORERSUBMITFAILURE,
  TESTQUERYREQUEST,
  TESTQUERYFAILURE,
  TESTQUERYSUCCESS,
  KPIDISABLEREQUEST,
  KPIDISABLEFAILURE,
  KPIDISABLESUCCESS,
  KPIFORMEDITREQUEST_META_INFO,
  KPIFORMEDITSUCCESS_META_INFO,
  KPIFORMEDITFAILURE_META_INFO,
  KPIEDITDATAREQUEST,
  KPIEDITDATASUCCESS,
  KPIEDITDATAFAILURE,
  KPIUPDATEREQUEST,
  KPIUPDATESUCCESS,
  KPIUPDATEFAILURE
} from './ActionConstants';

import {
  KPI_URL,
  CONNECTION_URL,
  KPI_FORM_OPTION_URL,
  TEST_QUERY_URL
} from '../../utils/url-helper';

import { getRequest, postRequest, putRequest } from '../../utils/http-helper';

export const getAllKpiExplorerRequested = () => {
  return {
    type: KPIEXPLORERREQUEST
  };
};

export const getAllKpiExplorerSuccess = (response) => {
  return {
    type: KPIEXPLORERSUCCESS,
    data: response
  };
};

export const getAllKpiExplorerFailure = () => {
  return {
    type: KPIEXPLORERFAILURE
  };
};

export const getAllKpiExplorer = () => {
  return async (dispatch) => {
    dispatch(getAllKpiExplorerRequested());
    const { data, error, status } = await getRequest({
      url: KPI_URL
    });
    if (error) {
      dispatch(getAllKpiExplorerFailure());
    } else if (data && status === 200) {
      dispatch(getAllKpiExplorerSuccess(data.data));
    }
  };
};

export const getAllKpiExplorerFormRequested = () => {
  return {
    type: KPIEXPLORERFORMREQUEST
  };
};

export const getAllKpiExplorerFormSuccess = (response) => {
  return {
    type: KPIEXPLORERFORMSUCCESS,
    data: response
  };
};

export const getAllKpiExplorerFormFailure = () => {
  return {
    type: KPIEXPLORERFORMFAILURE
  };
};

export const getAllKpiExplorerForm = () => {
  return async (dispatch) => {
    dispatch(getAllKpiExplorerFormRequested());
    const { data, error, status } = await getRequest({
      url: CONNECTION_URL
    });
    if (error) {
      dispatch(getAllKpiExplorerFormFailure());
    } else if (data && status === 200) {
      dispatch(getAllKpiExplorerFormSuccess(data));
    }
  };
};

export const getAllKpiExplorerFieldRequested = () => {
  return {
    type: KPIEXPLORERFIELDREQUEST
  };
};

export const getAllKpiExplorerFieldFailure = () => {
  return {
    type: KPIEXPLORERFIELDFAILURE
  };
};

export const getAllKpiExplorerFieldSuccess = (response) => {
  return {
    type: KPIEXPLORERFIELDSUCCESS,
    data: response
  };
};

export const getAllKpiExplorerField = (option) => {
  return async (dispatch) => {
    dispatch(getAllKpiExplorerFieldRequested());
    const { data, error, status } = await postRequest({
      url: KPI_FORM_OPTION_URL,
      data: option
    });
    if (error) {
      dispatch(getAllKpiExplorerFieldFailure());
    } else if (data && status === 200) {
      dispatch(getAllKpiExplorerFieldSuccess(data.data));
    }
  };
};

export const getAllKpiExplorerSubmitRequested = () => {
  return {
    type: KPIEXPLORERSUBMITREQUEST
  };
};

export const getAllKpiExplorerSubmitFailure = () => {
  return {
    type: KPIEXPLORERSUBMITFAILURE
  };
};

export const getAllKpiExplorerSubmitSuccess = (response) => {
  return {
    type: KPIEXPLORERSUBMITSUCCESS,
    data: response
  };
};

export const getAllKpiExplorerSubmit = (payload) => {
  return async (dispatch) => {
    dispatch(getAllKpiExplorerSubmitRequested());
    const { data, error, status } = await postRequest({
      url: KPI_URL + '/',
      data: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      noAuth: true
    });
    if (error) {
      dispatch(getAllKpiExplorerSubmitFailure());
    } else if (data && status === 200) {
      dispatch(getAllKpiExplorerSubmitSuccess(data));
    }
  };
};

export const getTestQueryRequested = () => {
  return {
    type: TESTQUERYREQUEST
  };
};

export const getTestQueryFailure = () => {
  return {
    type: TESTQUERYFAILURE
  };
};

export const getTestQuerySuccess = (response) => {
  return {
    type: TESTQUERYSUCCESS,
    data: response
  };
};

export const getTestQuery = (payload) => {
  return async (dispatch) => {
    dispatch(getTestQueryRequested());
    const { data, error, status } = await postRequest({
      url: TEST_QUERY_URL,
      data: payload
    });
    if (error) {
      dispatch(getTestQueryFailure());
    } else if (data && status === 200) {
      dispatch(getTestQuerySuccess(data));
    }
  };
};

export const kpiDisableRequest = () => {
  return {
    type: KPIDISABLEREQUEST
  };
};

export const kpiDisableFailure = () => {
  return {
    type: KPIDISABLEFAILURE
  };
};

export const kpiDisableSuccess = (response) => {
  return {
    type: KPIDISABLESUCCESS,
    data: response
  };
};

export const kpiDisable = (id) => {
  return async (dispatch) => {
    dispatch(kpiDisableRequest());
    const { data, error, status } = await getRequest({
      url: `${KPI_URL}/${id}/disable`
    });
    if (error) {
      dispatch(kpiDisableFailure());
    } else if (data && status === 200) {
      dispatch(kpiDisableSuccess(data));
    }
  };
};

export const getEditMetaInfoRequest = () => {
  return {
    type: KPIFORMEDITREQUEST_META_INFO
  };
};

export const getEditMetaInfoSuccess = (response) => {
  return {
    type: KPIFORMEDITSUCCESS_META_INFO,
    data: response
  };
};

export const getEditMetaInfoFailure = () => {
  return {
    type: KPIFORMEDITFAILURE_META_INFO
  };
};

export const getEditMetaInfo = (id) => {
  return async (dispatch) => {
    dispatch(getEditMetaInfoRequest());
    const { data, error, status } = await getRequest({
      url: `${KPI_URL}/meta-info`
    });
    if (error) {
      dispatch(getEditMetaInfoFailure());
    } else if (data && status === 200) {
      dispatch(getEditMetaInfoSuccess(data.data));
    }
  };
};

export const getKpibyIdRequest = () => {
  return {
    type: KPIEDITDATAREQUEST
  };
};
export const getKpibyIdSuccess = (response) => {
  return {
    type: KPIEDITDATASUCCESS,
    data: response
  };
};
export const getKpibyIdFailure = () => {
  return {
    type: KPIEDITDATAFAILURE
  };
};

export const getKpibyId = (id) => {
  return async (dispatch) => {
    dispatch(getKpibyIdRequest());
    const { data, error, status } = await getRequest({
      url: `${KPI_URL}/${id}`
    });
    if (error) {
      dispatch(getKpibyIdFailure());
    } else if (data && status === 200) {
      dispatch(getKpibyIdSuccess(data.data));
    }
  };
};

export const getUpdateKpiRequest = () => {
  return {
    type: KPIUPDATEREQUEST
  };
};
export const getUpdateKpiSuccess = (response) => {
  return {
    type: KPIUPDATESUCCESS,
    data: response
  };
};
export const getUpdateKpiFailure = () => {
  return {
    type: KPIUPDATEFAILURE
  };
};

export const getUpdatekpi = (id, updateData) => {
  return async (dispatch) => {
    dispatch(getUpdateKpiRequest());
    const { data, error, status } = await putRequest({
      url: `${KPI_URL}/${id}/update`,
      data: JSON.stringify(updateData),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      noAuth: true
    });
    if (error) {
      dispatch(getUpdateKpiFailure());
    } else if (data && status === 200) {
      dispatch(getUpdateKpiSuccess(data));
    }
  };
};