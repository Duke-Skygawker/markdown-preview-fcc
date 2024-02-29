import { useGlobalContext } from "../Context/Context";
import { FaEdit } from "react-icons/fa";
const Editor = () => {
  const {
    fullScreenArrows,
    editorExpanded,
    previewExpanded,
    handleEditorExpansion,
    handleChange,
    editorContent,
  } = useGlobalContext();
  return (
    <div
      className="editor"
      style={
        !editorExpanded && !previewExpanded
          ? { minHeight: "20vh" }
          : !previewExpanded && editorExpanded
          ? { height: "100vh" }
          : { height: "0rem", display: "none" }
      }
    >
      <div className="editor-bar">
        <h3>
          <i className="editor-icon">
            <FaEdit />
          </i>
          Editor
        </h3>
        <i className="expand-button" onClick={handleEditorExpansion}>
          {fullScreenArrows}
        </i>
      </div>
      <div
        className="editor-content"
        style={
          !editorExpanded && !previewExpanded
            ? { minHeight: "20vh" }
            : !previewExpanded && editorExpanded
            ? { height: "100vh" }
            : { height: "0rem", display: "none" }
        }
      >
        <textarea
          className="editor-input"
          name="editor"
          id="editor"
          onChange={handleChange}
          value={editorContent}
          style={editorExpanded ? { height: "100%" } : {}}
        ></textarea>
      </div>
    </div>
  );
};
export default Editor;
