import React, {useMemo} from 'react';

import {formatingNumber} from '../../utils/formatingNumber';

export const COLUMNS = [
  {
    Header: 'Region',
    accessor: 'Region',
    Footer: 'Total',
  },
  {
    Header: '1era Dosis',
    accessor: 'firstDose',
    Footer: function Foot(data) {
      const total = useMemo(() => data.rows.reduce((sum, row) => row.values.firstDose + sum, 0), [
        data.rows,
      ]);

      return <>{formatingNumber(total)}</>;
    },
  },
  {
    Header: 'Población Objetivo',
    accessor: 'objectPopulation',
    Footer: function Foot(data) {
      const total = useMemo(
        () => data.rows.reduce((sum, row) => row.values.objectPopulation + sum, 0),
        [data.rows],
      );

      return <>{total}</>;
    },
  },
  {
    Header: '2da Dosis',
    accessor: 'secondDose',
    Footer: function Foot(data) {
      const total = useMemo(() => data.rows.reduce((sum, row) => row.values.secondDose + sum, 0), [
        data.rows,
      ]);

      return <>{total}</>;
    },
  },
];
