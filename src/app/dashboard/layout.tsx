import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>This is the layout for dash</div>
      {children}
    </div>
  );
};

export default Layout;
