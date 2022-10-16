import { useEffect, useState } from "react";
import Record from "./Components/Records";
import Annotation from "./Components/Annotations";
import Highlighter from "web-highlighter";
new Highlighter().run();

function App() {
  const [onLoadFile, setOnLoadFile] = useState("");
  const [file, setFile] = useState("");
  const fileInput = document.getElementById("inputfile");
  const preview = document.getElementById("output");
  useEffect(() => {
    const fileInput = document.getElementById("inputfile");
    const preview = document.getElementById("output");
    if (fileInput) {
      fileInput.addEventListener("change", () => {
        const fr = new FileReader();
        fr.readAsText(fileInput.files[0]);
        setFile(fileInput.files[0]);
        fr.addEventListener("load", () => {
          preview.textContent = fr.result;
        });
      });
    }
  }, [onLoadFile]);
  return (
    <section className="mainContainer">
      <Record file={file} />
      <main className="currentText newBackground">
        <nav className="navbar">
          <div className="uploadFile">
            <input
              type="file"
              id="inputfile"
              onChange={(e) => {
                setFile(e.target.value);
              }}
            />
          </div>
        </nav>

        <div className="mainText">
          <div id="output"></div>
        </div>
      </main>
      <Annotation />
    </section>
  );
}

export default App;
