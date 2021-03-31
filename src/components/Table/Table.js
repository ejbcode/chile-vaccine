import React from "react";
import UseAxios from "../../utils/UseAxios";
import csvjson from "./csvjson.json";
import csvtojson from "csvtojson";
import csvToJSON from "../../utils/csvToJSON";
import transformCsvToJson from "./converting";
const { populationOver18 } = require("./bbdd.json");

const Table = () => {
  const URL =
    "https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto76/vacunacion.csv";
  const { data, error, loading } = UseAxios({ URL });

  if (error) {
    return <p>Error</p>;
  }

  if (loading) {
    return <p>Loading</p>;
  }

  const dataInJson = csvToJSON(data);
  const newData = transformCsvToJson(dataInJson);
  console.log(newData);

  return <div>Table</div>;
};

export default Table;
