import { Fragment } from 'react'
import './Table.css'

export interface RowInterface<T> {
  id: number
  name?: string
  rows?: RowInterface<T>[]
}

export interface ColumnInterface<T> {
  field: string
  label: string
  visible: boolean
  align?: 'left' | 'right' | 'center'
  width?: number
  renderCell?: (row: T) => React.ReactNode
}

interface TableInterface<T, J = T> {
  rows: T[]
  columns: ColumnInterface<J>[]
}

const Table = <T, J>({
  rows,
  columns
}: TableInterface<T & RowInterface<T>, J & RowInterface<T>>) => {
  if (rows.length === 0) {
    return (
      <table className='table table-empty'>
        <tr>No data</tr>
      </table>
    )
  }

  const isGrouped = rows[0].rows !== undefined

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
        {!isGrouped
          ? rows.map((row) => (
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
                          ? column.renderCell(row as J as J & RowInterface<T>)
                          : (row[column.field as keyof T] as React.ReactNode) ||
                            '-'}
                      </td>
                    )
                )}
              </tr>
            ))
          : rows.map(
              (group) =>
                group.rows && (
                  <Fragment>
                    <h4>{group.name}</h4>
                    {group.rows.map((row) => (
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
                                  ? column.renderCell(
                                      row as J as J & RowInterface<T>
                                    )
                                  : (row[
                                      column.field as keyof RowInterface<T>
                                    ] as React.ReactNode) || '-'}
                              </td>
                            )
                        )}
                      </tr>
                    ))}
                  </Fragment>
                )
            )}
      </tbody>
    </table>
  )
}

export default Table
