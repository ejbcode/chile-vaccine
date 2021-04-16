import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { COLUMNS } from "./columns";
import styles from "./Table.module.scss";

function InsideTable({ DATA }) {
  const columns = useMemo(() => COLUMNS, []);
  const dataWithOutTotal = DATA.filter((item) => item.Region !== "Total");

  const data = useMemo(() => dataWithOutTotal, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  return (
    <table className={styles.table} {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
              <td className={styles.mobileData}>
                {row.cells.map((cell, index) => {
                  return (
                    <span key={index}>
                      {`${headerGroups[0].headers[index].Header} - ${cell.value}`}
                    </span>
                  );
                })}
              </td>
            </tr>
          );
        })}
      </tbody>

      <tfoot>
        {footerGroups.map((group) => (
          <tr {...group.getFooterGroupProps()}>
            {group.headers.map((column) => (
              <td className={styles.totales} {...column.getFooterProps()}>
                {column.render("Footer")}
              </td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
}

export default InsideTable;
