import { TechGroupInterface, TechInterface } from '../../helpers/interfaces'
import Table, { ColumnInterface } from '../Table/Table'

const TECHS: TechGroupInterface[] = [
  {
    id: 1,
    name: 'Tech Group 1',
    rows: [
      {
        id: 1,
        name: 'Tech 1',
        price: 100
      },
      {
        id: 2,
        name: 'Tech 2',
        price: 200
      }
    ]
  },
  {
    id: 2,
    name: 'Tech Group 2',
    rows: [
      {
        id: 3,
        name: 'Tech 3',
        price: 300
      },
      {
        id: 4,
        name: 'Tech 4',
        price: 400
      }
    ]
  }
]

const COLUMNS: ColumnInterface<TechInterface>[] = [
  {
    field: 'name',
    label: 'Name',
    visible: true
  },
  {
    field: 'price',
    label: 'Price',
    visible: true
  }
]

const TechTable: React.FC = () => {
  return (
    <div className='table-container'>
      <Table rows={TECHS} columns={COLUMNS} />
    </div>
  )
}

export default TechTable
