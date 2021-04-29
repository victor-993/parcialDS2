import { useState, useEffect } from "react";

const useApi = (api) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect( async () => {
    try {
      setLoading(true);
      setError(null)
      const res = await fetch(api);
      const response = await res.json();
      setData(response);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, [api]);

  return { data, error, loading };
};

export default useApi;