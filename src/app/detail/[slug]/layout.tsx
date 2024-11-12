import * as React from "react";
import contentfulClient from "@/lib/contentfulClient";
import { TypeBlogPostSkeleton } from "@/types/project-cc.type";
import type { Metadata } from "next";

interface IBlogDetailLayout {
  children: React.ReactNode;
}

// Dynamic data
export const generateMetadata = async (): Promise<Metadata> => {
  const blog = await contentfulClient.getEntries<TypeBlogPostSkeleton>({
    content_type: "blogPost",
  });
  return {
    title: `Blog | ${blog.items[0].fields.title}`,
  };
};

const BlogDetailLayout: React.FunctionComponent<IBlogDetailLayout> = async ({
  children,
}) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return <div>{children}</div>;
};

export default BlogDetailLayout;
