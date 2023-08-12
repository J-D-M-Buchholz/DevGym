import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Content_Explanation from "../content/content_mongodb/Content_Explanation";

//@ts-ignore

export default function MarkDownViewer({ content }: { content: string }) {
  return (
    <ReactMarkdown 
    className="prose lg:prose-xl" 
    remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
    >
    {content}
    </ReactMarkdown>
  );
}