"use strict";
exports.__esModule = true;
var fs_mod = require("fs");
var line_reader_mod = require("line-reader");
var isCodeBlock = false;
fs_mod.writeFile("sample_md.md", "Sample file", function (err) {
    console.log(err);
});
var checkLine = function (line) {
    if (line) {
        if (line.startsWith("//")) {
            if (isCodeBlock) {
                fs_mod.appendFile("sample_md.md", "\n```", function (err) {
                    console.log(err);
                });
                isCodeBlock = false;
            }
            console.log("Text");
            console.log(line.slice(2, line.length));
            fs_mod.appendFile("sample_md.md", "\n" + line.slice(2, line.length), function (err) {
                if (err) {
                    console.log(err);
                }
            });
        }
        else {
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
line_reader_mod.eachLine("sample_js_file.js", function (line, isLastLine) {
    console.log(line);
    console.log(isLastLine);
    checkLine(line);
    if (isLastLine) {
        if (isCodeBlock) {
            fs_mod.appendFile("sample_md.md", "\n```", function (err) {
                console.log(err);
            });
        }
    }
});
