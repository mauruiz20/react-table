import { useState } from 'react'

import { ColumnMenu, Table } from '../../components'
import { ColumnInterface } from '../../components/Table/Table'
import { ClienteInterface } from '../../helpers/interfaces'
import './Landing.css'

const parseEmail = (name: string, surname: string): string =>
  `${name.toLowerCase()}.${surname.toLowerCase()}@gmail.com`

const CLIENTES: ClienteInterface[] = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
    phone: '123456789',
    state: 'active'
  },
  {
    id: 2,
    name: 'Jane',
    surname: 'Ryan',
    phone: '987654321',
    state: 'inactive'
  },
  {
    id: 3,
    name: 'Mike',
    surname: 'Smith',
    phone: '123456789',
    state: 'active'
  },
  {
    id: 4,
    name: 'Mary',
    surname: 'Williams',
    phone: '987654321',
    state: 'inactive'
  },
  {
    id: 5,
    name: 'James',
    surname: 'Brown',
    phone: '123456789',
    state: 'active'
  },
  {
    id: 6,
    name: 'David',
    surname: '',
    phone: '987654321',
    state: 'inactive'
  }
]

const INITIAL_COLUMNS: ColumnInterface<ClienteInterface>[] = [
  {
    field: 'id',
    label: 'ID',
    width: 10,
    visible: true
  },
  {
    field: 'name',
    label: 'Name',
    visible: true
  },
  {
    field: 'surname',
    label: 'Surname',
    visible: true
  },
  {
    field: 'email',
    label: 'Email',
    visible: true,
    renderCell: (row) => parseEmail(row.name.toString(), row.surname.toString())
  },
  {
    field: 'phone',
    label: 'Phone',
    visible: false
  },
  {
    field: 'state',
    label: 'State',
    align: 'center',
    width: 75,
    visible: true,
    renderCell: (row) => (
      <button className={`state state-${row.state}`}>
        {row.state.toString()[0]}
      </button>
    )
  },
  {
    field: 'actions',
    label: 'Actions',
    align: 'center',
    width: 200,
    visible: true,
    renderCell: () => (
      <div className='actions-column'>
        <button className='action-button action-edit'>Edit</button>
        <button className='action-button action-delete'>Delete</button>
      </div>
    )
  }
]

const Landing: React.FC = () => {
  const [columns, setColumns] = useState(INITIAL_COLUMNS)
  return (
    <div className='landing-container'>
      <div className='table-container'>
        <Table rows={CLIENTES} columns={columns} />
      </div>
      <ColumnMenu columns={columns} setColumns={setColumns} />
    </div>
  )
}

export default Landing
