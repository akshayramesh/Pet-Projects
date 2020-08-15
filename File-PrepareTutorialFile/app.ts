import * as fs_mod from "fs";
import * as line_reader_mod from "line-reader";

let isCodeBlock: boolean = false;
fs_mod.writeFile("sample_md.md", "Sample file", function (err) {
  console.log(err);
});

const checkLine: (line: string) => void = function (line: string) {
  if (line) {
    if (line.startsWith("//")) {
      if (isCodeBlock) {
        fs_mod.appendFile("sample_md.md", "\n```", function (err) {
          console.log(err);
        });
        isCodeBlock = false
      }
      console.log("Text");
      console.log(line.slice(2, line.length));
      fs_mod.appendFile(
        "sample_md.md",
        "\n" + line.slice(2, line.length),
        function (err) {
          if (err) {
            console.log(err);
          }
        }
      );
    } else {
      console.log("Code");
      if (!isCodeBlock) {
        fs_mod.appendFile("sample_md.md", "\n```", function (err) {
          if (err) {
            console.log(err);
          }
        });
      }
      isCodeBlock = true;
      fs_mod.appendFile("sample_md.md", "\n" + line, function (err) {
        if (err) {
          console.log(err);
        }
      });
    }
  }
};

console.log("Reading a line at a time*****");
line_reader_mod.eachLine("sample_js_file.js", function (line: string, isLastLine: boolean) {
  console.log(line);
  console.log(isLastLine)
  checkLine(line);
  if(isLastLine){
    if(isCodeBlock){
        fs_mod.appendFile("sample_md.md", "\n```", function (err) {
            console.log(err);
          });
    }
  } 
});
