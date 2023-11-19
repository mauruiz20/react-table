import { PropsWithChildren } from 'react';

import './layout.css';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='layout-container'>{children}</div>;
};

export default Layout;
