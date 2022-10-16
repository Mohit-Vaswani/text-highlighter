// import Navbar from "./Nav";
import { useEffect, useState } from "react";
import Highlighter from "web-highlighter";
new Highlighter().run();

function Main() {
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
        fr.addEventListener("load", () => {
          preview.textContent = fr.result;
        });
      });
    }
  }, [file]);
  // if (fileInput) {
  //   fileInput.addEventListener("change", () => {
  //     const fr = new FileReader();
  //     console.log(fr);
  //     fr.readAsText(fileInput.files[0]);
  //     fr.addEventListener("load", () => {
  //       preview.textContent = fr.result;
  //     });
  //   });
  // }

  return (
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
  );
}

export default Main;
