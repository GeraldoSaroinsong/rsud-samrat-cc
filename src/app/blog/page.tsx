import contentfulClient from "@/lib/contentfulClient";
import { TypeBlogPostSkeleton, TypeMediaAsset } from "@/types/project-cc.type";
import Image from "next/image";
import Link from "next/link";

const getBlogs = async () => {
  try {
    const blog = await contentfulClient.getEntries<TypeBlogPostSkeleton>({
      content_type: "blogPost",
    });
    return blog;
  } catch (error) {
    console.log(error);
  }
};

const BlogPage = async () => {
  const blog = await getBlogs();
  return (
    <div className="py-[15vh]">
      <div className="m-auto flex w-[90%] flex-col gap-5 md:w-[50%]">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold text-lime-500">Blog</h1>
          <p className="text-sm text-gray-600">
            Baca artikel-artikel{" "}
            <span className="text-lime-500">kesehatan</span> yang kami sediakan
            hanya untuk anda
          </p>
        </div>
        <hr className="h-2 rounded-full border-none bg-lime-500" />
        <div className="flex flex-col gap-10">
          {blog &&
            blog.items?.map((blogItem, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col overflow-hidden rounded-xl bg-slate-100 shadow-md md:flex-row md:items-center"
                >
                  <Image
                    src={`https:${(blogItem.fields.image as TypeMediaAsset)?.fields.file.url}`}
                    className="md:w-1/3"
                    alt="blog"
                    width={500}
                    height={500}
                  />
                  <div className="flex w-full flex-col gap-2 p-4">
                    <h1 className="text-lg font-bold text-lime-500">
                      {blogItem.fields.title}
                    </h1>
                    <p className="pb-4 text-justify text-xs font-extralight tracking-wide">
                      {blogItem.fields.preview}
                    </p>
                    <Link
                      href={`../detail/${blogItem.fields.slug}`}
                      className="w-full rounded-md border-2 border-lime-500 bg-transparent p-2 text-center text-lg font-semibold tracking-wide text-lime-500 transition duration-200 hover:bg-lime-500 hover:text-white"
                    >
                      Lanjut Baca
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
