
import Axios from 'axios';
import { Platform } from 'react-native';
// import {STORAGE_CONSTANT} from '../constants';
import { URLS } from '../constants/urls';
// eslint-disable-next-line import/no-cycle
import Utils from './Utils';
// eslint-disable-next-line import/no-cycle
// import utils from './utils';

Axios.defaults.baseURL = URLS.BASE_URL;

Axios.interceptors.request.use(async (config) => {

  const newConfig = {
    ...config,
  };

  newConfig.headers = {
    authorization: `Bearer ab9855583345f7886c83ac8d4afffe0832c7e975`,
    ...config.headers,
  };

  newConfig.timeout = 30000;
  newConfig.baseURL = URLS.BASE_URL;

  return newConfig;
});

export const postRequestApi = (url, data, headers) => {
  console.log("request..", url + ' ' + JSON.stringify(data))
  return new Promise((resolve, reject) => {
    Axios.post(url, data, {
      ...headers, 'Content-type': 'Application/json',

    })
      .then((response) => {
        console.log(`resolve...${JSON.stringify(response)}`)
        resolve(response?.data);
      })
      .catch(async (error) => {
        console.log(`reject...${JSON.stringify(error)}`)
        Utils.stopLoader();
        // reject(await getApiError(error));
      });
  });
};

export const postRequestWithFormDataApi = (url, data) => {
  return new Promise((resolve, reject) => {
    Axios.post(url, data, {
      'Content-Type': 'multipart/form-data;',
    })
      .then((response) => {
        resolve(response?.data);
      })
      .catch((error) => {
        reject(getApiError(error));
      });
  });
};

export const deleteRequestApi = (url, data, headers) => {
  return new Promise((resolve, reject) => {
    Axios.delete(url, { data, headers })
      .then((response) => {
        resolve(response?.data);
      })
      .catch(async (error) => {
        reject(await getApiError(error));
      });
  });
};

export const putRequestApi = (url, data, headers) => {
  return new Promise((resolve, reject) => {
    Axios.put(url, data, {
      headers,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch(async (error) => {
        reject(await getApiError(error));
      });
  });
};

export const patchRequestApi = (url, data, headers) => {
  return new Promise((resolve, reject) => {
    Axios.patch(url, data, {
      headers,
    })
      .then((response) => {
        resolve(response?.data);
      })
      .catch(async (error) => {
        reject(await getApiError(error));
      });
  });
};

export const getRequestApi = (url, params = undefined, isLoader = true) => {
  return new Promise((resolve, reject) => {
    Axios.get(params ? `${url}?${new URLSearchParams(params).toString()}` : url)
      .then((response) => {
        resolve(response?.data);
      })
      .catch(async (error) => {
        reject(await getApiError(error));
      })
      .then(() => {
      });
  });
};

export const getApiError = async (error) => {
  //   utils.reportError(error);

  if (!error?.response || error?.response?.status === 502) {
    return { message: 'Unknown Error', status: null, error: true };
  }
  if (error?.response?.status === 500) {
    return { message: 'Something Went Wrong.', status: 500, error: true };
  }
  if (error?.response?.status === 401) {
    // const token = await AsyncStorage.getItem(STORAGE_CONSTANT.JWT_TOKEN);
    
    return {
      message: 'Invalid username/password',
      status: 401,
      error: true,
    };
  }
  return {
    message: Array.isArray(error?.response?.data?.error)
      ? error.response.data.error[0]
      : error?.response?.data?.error,
    status: error?.response?.status,
    error: true,
  };
};
