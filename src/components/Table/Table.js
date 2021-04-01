import React from "react";
import UseAxios from "../../utils/UseAxios";
import csvjson from "./csvjson.json";
import csvtojson from "csvtojson";
import csvToJSON from "../../utils/csvToJSON";
import joinJsonintoDataForTable from "../../utils/JSONToRegionTable";
import { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import InsideTable from "./InsideTable";

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
  const newData = joinJsonintoDataForTable(dataInJson);
  console.log(newData);

  return <InsideTable MOCK_DATA={newData} />;
};

export default Table;
