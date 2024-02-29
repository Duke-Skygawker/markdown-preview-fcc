import "./App.css";
import Editor from "./Editor/Editor.jsx";
import Preview from "./Preview/Preview.jsx";
import { useGlobalContext } from "./Context/Context";
function App() {
  const { showContext } = useGlobalContext();
  return (
    <main>
      <Editor />
      <Preview />
    </main>
  );
}

export default App;
