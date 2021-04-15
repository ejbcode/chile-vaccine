import React, { useState, useEffect } from 'react'
import axios from "axios";
import { parse } from "papaparse";
import csvToJSON from '../utils/csvToJSON';
import joinJsonintoDataForTable from '../utils/JSONToRegionTable';

const PlayGround = () => {
  const [stats, setStats] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const URL = "https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto76/vacunacion.csv";

  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios(URL);
        setStats(data);
        console.log(stats);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    console.log(stats);


    fetchData();
  }, [URL]);
  if (error) {
    return <p>Error</p>;
  }

  if (loading) {
    return <p>Loading</p>;
  }
  console.log(stats);

  const dataInJson = csvToJSON(stats);
  console.log(dataInJson);

  const newData = joinJsonintoDataForTable(dataInJson);
  console.log(newData);

  // console.log(data);



  return (
    <div>
      play
    </div>
  )
}

export default PlayGround
