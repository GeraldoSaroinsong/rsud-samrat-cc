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

export interface TypeTipeLayananAsset {
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
