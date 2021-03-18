import React, { FC } from 'react';
import '../src/index';

const Layout: FC = ({ children }) => {
  return (
    <div className="px-20 py-10">
      {children}
    </div>
  )
}

export default Layout;