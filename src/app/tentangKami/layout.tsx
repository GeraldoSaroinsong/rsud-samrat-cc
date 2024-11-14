import { Metadata } from "next";
import * as React from "react";

interface IAboutPageLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "RSUD Sam Ratulangi | Tentang Kami",
};

const AboutPageLayout: React.FunctionComponent<IAboutPageLayoutProps> = async ({
  children,
}) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return <div>{children}</div>;
};

export default AboutPageLayout;
