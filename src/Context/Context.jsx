import { useContext, useState } from "react";
import { createContext } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [showContext, setShowContext] = useState("CONTEXT CONNECTED");
  const [editorExpanded, setEditorExpanded] = useState(false);
  const [previewExpanded, setPreviewExpanded] = useState(false);
  const [editorContent, setEditorContent] = useState(`
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  
  `);
  const fullScreenArrows = <BsArrowsFullscreen />;

  const handleEditorExpansion = () => {
    if (!editorExpanded) {
      setEditorExpanded(!editorExpanded);
      setPreviewExpanded(false);
    } else {
      setEditorExpanded(false);
      setPreviewExpanded(false);
    }
  };
  const handlePreviewExpansion = () => {
    if (!previewExpanded) {
      setPreviewExpanded(true);
      setEditorExpanded(false);
    } else {
      setPreviewExpanded(!previewExpanded);
      setEditorExpanded(false);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setEditorContent(e.target.value);
  };
  return (
    <GlobalContext.Provider
      value={{
        showContext,
        setShowContext,
        editorExpanded,
        setEditorExpanded,
        previewExpanded,
        setPreviewExpanded,
        editorContent,
        setEditorContent,
        handleEditorExpansion,
        handlePreviewExpansion,
        handleChange,
        fullScreenArrows,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
