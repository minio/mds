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

interface IVarPropVals {
  lightMode?: string;
  darkMode?: string;
}

interface IVarsCollection {
  [key: string]: IVarPropVals;
}

const lightModeID = `153:0`;
const darkModeID = `153:1`;

const namesRGB = ["r", "g", "b"];

function RGBToWebRGB(color: RGBA | RGB) {
  const rgb = [];

  namesRGB.forEach((e, i) => {
    rgb[i] = Math.round(color[e as keyof RGB] * 255);
  });

  if ("a" in color) {
    if (color.a !== undefined) rgb[3] = Math.round(color.a * 100) / 100;
  }
  return rgb;
}

function figmaColorToHex(color: RGB | RGBA): string {
  let hex = "#";

  const rgb = RGBToWebRGB(color);
  hex += ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2])
    .toString(16)
    .slice(1);

  if (rgb[3] !== undefined) {
    const a = Math.round(rgb[3] * 255).toString(16);
    if (a.length == 1) {
      hex += "0" + a;
    } else {
      if (a !== "ff") hex += a;
    }
  }
  return hex;
}

const getVarCollections = async () => {
  return await figma.variables.getLocalVariablesAsync();
};

const lookForFilteredColorID = (
  idColorToLookUp: string,
  colorsList: Variable[],
  modeID: string,
): string => {
  const findColor = colorsList.find(
    (colorElm) => colorElm.id === idColorToLookUp,
  );

  if (findColor) {
    // This is an anidate color
    const valuesByMode = findColor.valuesByMode[modeID] as
      | RGB
      | RGBA
      | VariableAlias;

    if ("type" in valuesByMode) {
      return lookForFilteredColorID(valuesByMode.id, colorsList, modeID);
    }

    return findColor.id;
  }

  return "";
};

getVarCollections()
  .then((data) => {
    // Filter colors only.
    const filterColors = data.filter((item) => item.name.startsWith("Color"));

    if (filterColors.length > 0) {
      //Basic Color consts
      const colorConsts: IVarsCollection = {};

      // We get color variables only (not aliases)
      filterColors.forEach((filterC) => {
        const lightVar = filterC.valuesByMode[lightModeID] as
          | RGB
          | RGBA
          | VariableAlias;
        const darkVar = filterC.valuesByMode[darkModeID] as
          | RGB
          | RGBA
          | VariableAlias;
        const id = filterC.id;

        // This is basic variable
        if (!("type" in lightVar) && !("type" in darkVar)) {
          colorConsts[id] = {
            darkMode: figmaColorToHex(lightVar as RGBA | RGB),
            lightMode: figmaColorToHex(darkVar as RGBA | RGB),
          };
        }
      });

      const retItem: IVarsCollection = {};
      filterColors.forEach((dataProc) => {
        const lightVar = dataProc.valuesByMode[lightModeID] as
          | RGB
          | RGBA
          | VariableAlias;
        const darkVar = dataProc.valuesByMode[darkModeID] as
          | RGB
          | RGBA
          | VariableAlias;

        retItem[dataProc.name] = {
          lightMode:
            "type" in lightVar
              ? colorConsts[
                  lookForFilteredColorID(lightVar.id, filterColors, lightModeID)
                ]?.lightMode || ""
              : colorConsts[
                  lookForFilteredColorID(dataProc.id, filterColors, lightModeID)
                ].lightMode,
          darkMode:
            "type" in darkVar
              ? colorConsts[
                  lookForFilteredColorID(darkVar.id, filterColors, darkModeID)
                ]?.darkMode || ""
              : colorConsts[
                  lookForFilteredColorID(dataProc.id, filterColors, darkModeID)
                ].darkMode,
        };
      });

      // Need to verify a way to start a download of this JSON
      const jsonObject = JSON.stringify(retItem);
      console.log(jsonObject);
    }
    figma.closePlugin();
  })
  .catch(() => {
    console.error("");

    figma.notify("Error while getting collection", {
      error: true,
      timeout: 5000,
    });

    figma.closePlugin();
  });
