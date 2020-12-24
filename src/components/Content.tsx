import React from "react";
import ContentModel from "@models/components/ContentModel";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

const Content: React.FC<ContentModel> = ({ children }: ContentModel) => {
  const router = useRouter();
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          router.push({
            pathname: "/editar-rota/[id]",
            query: { id: children }
          })
        }
      >
        [edit]
      </button>
      <div>
        <ReactMarkdown source={children} />
      </div>
      <button
        type="button"
        onClick={() =>
          router.push({
            pathname: "/editar-rota/[id]",
            query: { id: children }
          })
        }
      >
        [edit]
      </button>
    </div>
  );
};

export default Content;
