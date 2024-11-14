import { Metadata } from "next";
import * as React from "react";

interface ILayananPageLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "RSUD Sam Ratulangi | Layanan",
};

const LayananPageLayout: React.FunctionComponent<
  ILayananPageLayoutProps
> = async ({ children }) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return <div>{children}</div>;
};

export default LayananPageLayout;
