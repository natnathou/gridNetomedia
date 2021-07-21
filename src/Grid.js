import React, { useMemo } from 'react';

const Grid = ({ config, data }) => {
  const headerRendering = () => config.map(({ title }) => <th key={title}>{title}</th>);

  const bodyRendering = useMemo(
    () => () => data.map((row) => <tr key={row.imdbID}>{rowRendering(row)}</tr>),
    [data]
  );
  const rowRendering = (rowData) =>
    config.map(({ field, title, component }) => (
      <td key={field}>
        {title !== 'trailer' ? rowData[field] : component({ data: rowData[field] })}
      </td>
    ));

  const tableRendering = () => (
    <table>
      <thead>
        <tr>{headerRendering()}</tr>
      </thead>
      <tbody>{bodyRendering()}</tbody>
    </table>
  );

  return <>{tableRendering()}</>;
};

export default Grid;
