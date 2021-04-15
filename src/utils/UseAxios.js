import axios from "axios";
import {useEffect, useState} from "react";
import { parse } from "papaparse";


export default function UseAxios({URL}) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const {data} = await axios(URL);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [URL]);

  return {error, loading, data};
}
