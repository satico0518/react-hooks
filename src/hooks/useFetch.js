import { useEffect, useState, useRef } from 'react';

export default (url) => {
  const isMounted = useRef(true);
  useEffect(() => () => (isMounted.current = false), []);
  const initialData = {
    data: [{quote: ''}],
    loading: true,
    error: null,
  };
  const [data, setData] = useState(initialData);

  const getData = async () => {
    setData(initialData);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (isMounted.current) setData({ data, loading: false, error: null });
    } catch (error) {
      setData({ ...data, error });
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return data;
};
