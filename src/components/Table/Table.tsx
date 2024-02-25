import './Table.css'

export interface RowInterface {
  id: number
}

export interface ColumnInterface<T> {
  field: string
  label: string
  visible: boolean
  align?: 'left' | 'right' | 'center'
  width?: number
  renderCell?: (row: T) => React.ReactNode
}

interface TableInterface<T> {
  rows: T[]
  columns: ColumnInterface<T>[]
}

const Table = <T,>({ rows, columns }: TableInterface<T & RowInterface>) => {
  if (rows.length === 0) {
    return (
      <table className='table table-empty'>
        <tr>No data</tr>
      </table>
    )
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
                  style={{
                    textAlign: column.align,
                    width: `${column.width}px`
                  }}
                >
                  {column.label}
                </td>
              )
          )}
        </tr>
      </thead>
      <tbody className='table-body'>
        {rows.map((row) => (
          <tr className='table-row' key={row.id}>
            {columns.map(
              (column) =>
                column.visible && (
                  <td
                    className='table-cell'
                    key={column.field}
                    style={{ textAlign: column.align }}
                  >
                    {column.renderCell
                      ? column.renderCell(row)
                      : (row[column.field as keyof T] as React.ReactNode) ||
                        '-'}
                  </td>
                )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
