import { useGlobalContext } from "../Context/Context";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { marked } from "marked";
import DOMPurify from "dompurify";
const Preview = () => {
  const {
    fullScreenArrows,
    editorExpanded,
    previewExpanded,
    handlePreviewExpansion,
    editorContent,
  } = useGlobalContext();
  console.log(editorContent);
  marked.setOptions({ breaks: true });
  const html = marked.parse(editorContent);
  const clean = DOMPurify.sanitize(html);
  return (
    <div
      className="preview"
      style={
        !editorExpanded && !previewExpanded
          ? { minHeight: "20vh" }
          : previewExpanded && !editorExpanded
          ? { height: "100vh" }
          : { height: 0, padding: 0, overflow: "hidden" }
      }
    >
      <div className="preview-bar">
        <h3>
          <i className="preview-icon">
            <HiOutlineDocumentMagnifyingGlass />
          </i>
          Preview
        </h3>
        <i className="expand-button" onClick={handlePreviewExpansion}>
          {fullScreenArrows}
        </i>
      </div>
      <div
        id="preview"
        className="preview-content"
        style={
          !editorExpanded && !previewExpanded
            ? { minHeight: "20vh" }
            : previewExpanded === true && !editorExpanded
            ? { height: "100%" }
            : { height: 0, padding: 0 }
        }
        dangerouslySetInnerHTML={{ __html: clean }}
      >
        {}
      </div>
    </div>
  );
};
export default Preview;
