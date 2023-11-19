import './Table.css';

export interface RowInterface {
  id: number;
  [key: string]: string | number;
}

export interface ColumnInterface {
  field: string;
  label: string;
  visible: boolean;
  align?: 'left' | 'right' | 'center';
  width?: number;
  renderCell?: (row: RowInterface) => React.ReactNode;
}

interface TableInterface {
  rows: RowInterface[];
  columns: ColumnInterface[];
}

const Table: React.FC<TableInterface> = ({ rows, columns }) => {
  if (rows.length === 0) {
    return (
      <table className='table table-empty'>
        <tr>No data</tr>
      </table>
    );
  }

  return (
    <table className='table'>
      <thead className='table-header'>
        <tr className='table-row'>
          {columns.map(
            (column) =>
              column.visible && (
                <td
                  className='table-cell'
                  key={column.field}
                  style={{ textAlign: column.align, width: `${column.width}px` }}
                >
                  {column.label}
                </td>
              ),
          )}
        </tr>
      </thead>
      <tbody className='table-body'>
        {rows.map((row) => (
          <tr className='table-row' key={row.id}>
            {columns.map(
              (column) =>
                column.visible && (
                  <td className='table-cell' key={column.field} style={{ textAlign: column.align }}>
                    {column.renderCell ? column.renderCell(row) : row[column.field] || '-'}
                  </td>
                ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
