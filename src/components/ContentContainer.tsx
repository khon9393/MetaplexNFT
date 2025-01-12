
import Text from './Text';
import NavElement from './nav-element';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        aria-label="Toggle menu"
      />
      <div className="drawer drawer-mobile">
        {/* Main Content */}
        <div className="drawer-content flex flex-col justify-between items-center">
          {children}
        </div>

        {/* Sidebar / Drawer */}
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 gap-10">
            <li>
              <Text
                variant="heading"
                className="font-extrabold tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10"
              >
                Menu
              </Text>
            </li>
            <li>
              <NavElement label="Home" href="/" />
            </li>
            {/* Add more NavElements as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

