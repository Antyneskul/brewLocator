import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const breweries = await res.json();

      setData(breweries.data);
    })();
  }, [url]);

  return data;
};

export default useFetch;