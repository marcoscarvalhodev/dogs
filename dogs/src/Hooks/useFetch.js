import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options)=> {
    let response;
    let json;
    try {
      setError(null);//limpa o erro que foi criado anteriormente na próxima tentativa;
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if(!response.ok) {
      }
    } catch(err) {
      json = null;
      setError(err.message);
      
    } finally {
      setData(json);
      setLoading(false);
      return {response, json}
    }
  }, [])

  return {
    data,
    loading,
    error,
    request
  };
};

export default useFetch;
