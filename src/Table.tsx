import React from 'react'
import { parse } from "papaparse";
import UseAxios from './utils/UseAxios'

export default function Table() {

  const URL = "https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto76/vacunacion.csv";
  const { data, error, loading } = UseAxios({ URL });

  if (error) {
    return <p>Error</p>;
  }

  if (loading) {
    return <p>Loading</p>;
  }

  const dataParse = parse(data)
  console.log(dataParse.data[1].slice(-1));


  return (
    <div>
      Table
    </div>
  )
}
