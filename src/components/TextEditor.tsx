import React from "react";
import ReactMarkdown from "react-markdown";

const TextEditor = ({ children }) => {
  const [editorStatus, setEditorStatus] = React.useState(false);
  const [content, setContent] = React.useState();

  const renderParsed = () => {
    return <div>{content}</div>;
  };

  const renderEdited = () => {
    return (
      <textarea
        width="400px"
        heigth="400px"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
    );
  };

  const renderControl = () => {
    console.log(editorStatus);
    if (editorStatus) return renderEdited();
    return renderParsed();
  };

  return (
    <div>
      <button type="button" onClick={() => setEditorStatus(!editorStatus)}>
        view parsed
      </button>
      {renderControl()}
    </div>
  );
};

export default TextEditor;
