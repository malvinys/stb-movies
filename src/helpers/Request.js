import axios from 'axios';
import Api from '../configs/Api';

const backend = async (method, url, data, appendHeaders = {}) => {
  const headers = {
    ...appendHeaders,
  };
  try {
    const response = await axios({
      method,
      url: `${Api.baseUrl}${url}`,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export default {
  backend,
};
