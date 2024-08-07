#!/usr/bin/node

// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

// Usage: `node app.js [inputDir] [outputDir]`

const fs = require("fs");
const convert = require("xml-js");

const inputDir = process.argv[2];
const outputDir = process.argv[3];

function kebabToPascal(kebabString) {
  const firstString = kebabString.replace(/(-\w)/g, (m) => m[1].toUpperCase());

  return firstString.charAt(0).toUpperCase() + firstString.slice(1);
}

let includeFiles = "";
let stories = "";

fs.readdirSync(inputDir).forEach((file) => {
  const copyright = fs.readFileSync(`./COPYRIGHT`, {
    encoding: "utf-8",
    flag: "r",
  });

  let writeFile =
    `${copyright} \n\n` +
    'import * as React from "react";\n' +
    'import { SVGProps } from "react";\n\n';

  if (file.endsWith(".svg")) {
    const name = `${kebabToPascal(file.split(".")[0])}Icon`;

    const fileInfo = fs.readFileSync(`${inputDir}/${file}`, {
      encoding: "utf-8",
      flag: "r",
    });

    const nodes = JSON.parse(
      convert.xml2json(fileInfo, { compact: true, spaces: 4 }),
    );

    if (nodes.svg) {
      const mainAttributes = nodes.svg._attributes;

      writeFile += `const ${name} = (props: SVGProps<SVGSVGElement>) => (`;

      writeFile += `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="${mainAttributes.viewBox ? mainAttributes.viewBox : "0 0 16 16"}"
    fill="none"
    className={\`min-icon\`}
    {...props}
  >`;

      let svgContent = fileInfo
        .replace(/<svg(.*?)>/g, "") // Remove old svg header
        .replaceAll(/fill-opacity=\"(.*?)\"/g, "") // Remove hardcoded opacity
        .replaceAll("fill-rule=", "fillRule=") // Change fillRule
        .replaceAll("clip-rule=", "clipRule=") // change clipRule
        .replaceAll(/fill=\"(.*?)\"/g, 'fill="currentColor"'); // Change fill to match currentColor

      if (svgContent.includes("clipPath")) {
        // We remove clipPaths
        svgContent = svgContent
          .replaceAll(/<defs>((.|\n)*)<\/defs>/g, "")
          .replaceAll(/<g clip-path=\"(.*?)\">/g, "")
          .replaceAll("</g>", "");
      }

      writeFile += `${svgContent}); export default ${name};`;

      fs.writeFile(`${outputDir}/${name}.tsx`, writeFile, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Wrote:", name);
        }
      });

      includeFiles += `export { default as ${name} } from "./${name}";`;
      stories += `<div className="story-icon">
              <cicons.${name} />
              <br />
              ${name}
            </div>`;
    }
  }
});

console.log(includeFiles);

fs.writeFile(`${outputDir}/index.ts`, includeFiles, (err) => {
  if (err) {
    console.error(err);
  }
});

fs.writeFile(`${outputDir}/icons.stories.tsx`, stories, (err) => {
  if (err) {
    console.error(err);
  }
});
