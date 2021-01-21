import React, { FC, useState } from 'react';
import TopPanel from './TopPanel';
import RangeDrawer from './RangeDrawer';

const Layout: FC = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawerOpen = () => setDrawerOpen((prevState) => !prevState);

  return (
    <div>
      <TopPanel toggleDrawerOpen={toggleDrawerOpen} />
      <div className="h-16" />
      <RangeDrawer open={drawerOpen} />

      {children}
    </div>
  );
};

export default Layout;
