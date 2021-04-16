import React, { useMemo } from "react";

export const COLUMNS = [
  {
    Header: "Region",
    accessor: "Region",
    Footer: "Total",
  },
  {
    Header: "1era Dosis",
    accessor: "firstDose",
    Footer: (data) => {
      const total = useMemo(
        () => data.rows.reduce((sum, row) => row.values.firstDose + sum, 0),
        [data.rows]
      );

      return <>{total}</>;
    },
  },
  {
    Header: "Población Objetivo",
    accessor: "objectPopulation",
    Footer: (info) => {
      const total = useMemo(
        () =>
          info.rows.reduce((sum, row) => row.values.objectPopulation + sum, 0),
        [info.rows]
      );

      return <>{total}</>;
    },
  },
  {
    Header: "2da Dosis",
    accessor: "secondDose",
    Footer: (info) => {
      const total = useMemo(
        () => info.rows.reduce((sum, row) => row.values.secondDose + sum, 0),
        [info.rows]
      );

      return <>{total}</>;
    },
  },
];
