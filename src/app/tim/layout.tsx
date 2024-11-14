import { Metadata } from "next";
import * as React from "react";

interface ITeamPageLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "RSUD Sam Ratulangi | Tim",
};

const TeamPageLayout: React.FunctionComponent<ITeamPageLayoutProps> = async ({
  children,
}) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return <div>{children}</div>;
};

export default TeamPageLayout;
