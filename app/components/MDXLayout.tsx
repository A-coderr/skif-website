import React from "react";

function MDXLayout({ children }: { children: React.ReactNode }) {
  return <div className="max-w-7xl mx-auto px-4 py-20 prose">{children}</div>;
}

export default MDXLayout;
