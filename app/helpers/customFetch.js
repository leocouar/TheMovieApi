export function fetchHelper() {
    const customFetch = async (url, options, handleSuccess, handleError) => {
      const defaultHeaders = {
        accept: "application/json",
      };
      const controller = new AbortController();
      options.signal = controller.signal;
      options.method = options.method || "GET";
      options.headers = options.headers
        ? { ...defaultHeaders, ...options.headers }
        : defaultHeaders;
  
      options.body = JSON.stringify(options.body) || false;
      if (!options.body) delete options.body;
  
      fetch(url, options).then(res => {
        const resJson = res.ok ? res.json() : Promise.reject(res);
        handleSuccess(resJson);
      }).catch(err => {
        console.error(err);
        let message = err.statusText || "Ocurrio un error al acceder a la API";
        handleError(message);
      })
    };
  
    const get = ({ url, options = {}, handleSuccess, handleError }) => {
      return customFetch(url, options, handleSuccess, handleError);
    }
  
    const post = ({ url, options = {}, handleSuccess, handleError }) => {
      options.method = "POST";
      return customFetch(url, options, handleSuccess, handleError);
    };
  
    const put = ({ url, options = {}, handleSuccess, handleError }) => {
      options.method = "PUT";
      return customFetch(url, options, handleSuccess, handleError);
    };
  
    const del = ({ url, options = {}, handleSuccess, handleError }) => {
      options.method = "DELETE";
      return customFetch(url, options, handleSuccess, handleError);
    };
  
    return {
      get,
      post,
      put,
      del,
    };
  }
  