import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document as RichTextDocument } from "@contentful/rich-text-types";

type RichTextProps = {
  document: RichTextDocument | undefined;
};

const RichText = ({ document }: RichTextProps) => {
  if (!document) return null;
  return <>{documentToReactComponents(document)}</>;
};

export default RichText;
