import * as React from "react";
import RichText from "@/components/richText";
import contentfulClient from "@/lib/contentfulClient";
import { TypeBlogPostSkeleton, TypeMediaAsset } from "@/types/project-cc.type";

interface IDetailPageProps {
  params: Promise<{ slug: string }>;
}

const getBlogs = async (slug: string) => {
  try {
    const blog = await contentfulClient.getEntries<TypeBlogPostSkeleton>({
      content_type: "blogPost",
      "fields.slug[match]": slug,
    });
    return blog.items[0];
  } catch (error) {
    console.log(error);
  }
};

const DetailPage: React.FC<IDetailPageProps> = async ({
  params,
}: IDetailPageProps) => {
  const slug = (await params).slug;
  const blog = await getBlogs(slug);
  return (
    <div className="m-auto flex w-[90%] flex-col gap-5 py-[15vh] md:w-[50%]">
      <h1 className="text-4xl font-semibold text-lime-500">
        {blog?.fields.title}
      </h1>
      <div className="flex flex-col gap-4 md:block">
        <img
          src={`https:${(blog?.fields.image as TypeMediaAsset)?.fields.file.url}`}
          className="rounded-xl shadow-md md:float-right md:mb-4 md:ml-4 md:w-[50%]"
        />
        <div className="text-justify">
          <RichText document={blog?.fields.body} />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
