import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (


    <main className="flex text-black min-h-screen flex-col">
      {children}
    </main>
  );
};

export default Layout;
