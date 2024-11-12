import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeTipeLayananFields {
  title: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
}

export type TypeTipeLayananSkeleton = EntrySkeletonType<
  TypeTipeLayananFields,
  "tipeLayanan"
>;
export type TypeTipeLayanan<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeTipeLayananSkeleton, Modifiers, Locales>;

export interface TypeMediaAsset {
  sys: { id: string };
  fields: {
    file: {
      url: string;
      details?: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName?: string;
      contentType?: string;
    };
  };
}

export interface TypeBlogPostFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  body: EntryFieldTypes.RichText;
  image: EntryFieldTypes.AssetLink;
  preview: EntryFieldTypes.Symbol;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  "blogPost"
>;
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;

export interface TypePuskesmasFields {
  title: EntryFieldTypes.Symbol;
  namaPuskesmas: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type TypePuskesmasSkeleton = EntrySkeletonType<
  TypePuskesmasFields,
  "puskesmas"
>;
export type TypePuskesmas<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypePuskesmasSkeleton, Modifiers, Locales>;
