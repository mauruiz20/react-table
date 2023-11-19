import { useState } from 'react';

import { ColumnInterface } from '../Table/Table';
import './ColumnMenu.css';

interface ColumnMenuInterface {
  columns: ColumnInterface[];
  setColumns: (columns: ColumnInterface[]) => void;
}

const ColumnMenu: React.FC<ColumnMenuInterface> = ({ columns, setColumns }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  const handleCheck = (name: string) => {
    const newColumns = columns.map((column) => {
      if (column.field === name) {
        return { ...column, visible: !column.visible };
      }
      return column;
    });
    setColumns(newColumns);
  };

  const handleReset = () => {
    const newColumns = columns.map((column) => ({ ...column, visible: true }));
    setColumns(newColumns);
  };

  return (
    <div className='col-menu-container' style={{ height: isOpen ? '400px' : '60px' }}>
      <div className='col-menu-title'>
        <div className='col-menu-title-btn' onClick={handleOpen}>
          <div className='horizontal-line'></div>
          <div
            className='vertical-line'
            style={{ transform: isOpen ? 'rotate(90deg)' : 'translateX(-50%) rotate(0deg)' }}
          ></div>
        </div>
        <h4>Columns</h4>
      </div>
      <div className='col-menu-content'>
        <div className='col-menu-item-container'>
          {columns.map((column) => (
            <div
              className='col-menu-item'
              key={column.field}
              onClick={() => handleCheck(column.field)}
            >
              <input
                type='checkbox'
                checked={column.visible}
                name={column.field}
                disabled={columns.length === 1}
              />
              <span>{column.label}</span>
            </div>
          ))}
        </div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default ColumnMenu;
