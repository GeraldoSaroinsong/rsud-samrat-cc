import { Metadata } from "next";
import * as React from "react";

interface IBlogPageLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "RSUD Sam Ratulangi | Blog",
};

const BlogPageLayout: React.FunctionComponent<IBlogPageLayoutProps> = async ({
  children,
}) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return <div>{children}</div>;
};

export default BlogPageLayout;
