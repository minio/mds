// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
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

import React from "react";
import { createGlobalStyle } from "styled-components";
import get from "lodash/get";

const LatoBlackWoff = require("../assets/fonts/Lato/Lato-Black.woff");
const LatoBlackItalicWoff = require("../assets/fonts/Lato/Lato-BlackItalic.woff");
const LatoBoldWoff = require("../assets/fonts/Lato/Lato-Bold.woff");
const LatoBoldItalicWoff = require("../assets/fonts/Lato/Lato-BoldItalic.woff");
const LatoHairlineWoff = require("../assets/fonts/Lato/Lato-Hairline.woff");
const LatoHairlineItalicWoff = require("../assets/fonts/Lato/Lato-HairlineItalic.woff");
const LatoItalicWoff = require("../assets/fonts/Lato/Lato-Italic.woff");
const LatoLightWoff = require("../assets/fonts/Lato/Lato-Light.woff");
const LatoLightItalicWoff = require("../assets/fonts/Lato/Lato-LightItalic.woff");
const LatoRegularWoff = require("../assets/fonts/Lato/Lato-Regular.woff");
const LatoThinWoff = require("../assets/fonts/Lato/Lato-Thin.woff");
const LatoBlackWoff2 = require("../assets/fonts/Lato/Lato-Black.woff2");
const LatoBlackItalicWoff2 = require("../assets/fonts/Lato/Lato-BlackItalic.woff2");
const LatoBoldWoff2 = require("../assets/fonts/Lato/Lato-Bold.woff2");
const LatoBoldItalicWoff2 = require("../assets/fonts/Lato/Lato-BoldItalic.woff2");
const LatoHairlineWoff2 = require("../assets/fonts/Lato/Lato-Hairline.woff2");
const LatoHairlineItalicWoff2 = require("../assets/fonts/Lato/Lato-HairlineItalic.woff2");
const LatoItalicWoff2 = require("../assets/fonts/Lato/Lato-Italic.woff2");
const LatoLightWoff2 = require("../assets/fonts/Lato/Lato-Light.woff2");
const LatoLightItalicWoff2 = require("../assets/fonts/Lato/Lato-LightItalic.woff2");
const LatoRegularWoff2 = require("../assets/fonts/Lato/Lato-Regular.woff2");
const LatoThinWoff2 = require("../assets/fonts/Lato/Lato-Thin.woff2");

const GlobalStyles = createGlobalStyle`
    ${({ theme }) => {
      return `
    /* Fonts */
    @font-face {
      font-family: "Lato";
      src: url(${LatoBlackItalicWoff2}) format("woff2"),
        url(${LatoBlackItalicWoff}) format("woff");
      font-weight: 900;
      font-style: italic;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Lato";
      src: url(${LatoBoldWoff2}) format("woff2"),
        url(${LatoBoldWoff}) format("woff");
      font-weight: bold;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Lato";
      src: url(${LatoBoldItalicWoff2}) format("woff2"),
        url(${LatoBoldItalicWoff}) format("woff");
      font-weight: bold;
      font-style: italic;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Lato";
      src: url(${LatoLightWoff2}) format("woff2"),
        url(${LatoLightWoff}) format("woff");
      font-weight: 300;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Lato";
      src: url(${LatoBlackWoff2}) format("woff2"),
        url(${LatoBlackWoff}) format("woff");
      font-weight: 900;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Lato";
      src: url(${LatoItalicWoff2}) format("woff2"),
        url(${LatoItalicWoff}) format("woff");
      font-weight: normal;
      font-style: italic;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Lato Hairline";
      src: url(${LatoHairlineWoff2}) format("woff2"),
        url(${LatoHairlineWoff}) format("woff");
      font-weight: 300;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Lato";
      src: url(${LatoRegularWoff2}) format("woff2"),
        url(${LatoRegularWoff}) format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Lato Hairline";
      src: url(${LatoHairlineItalicWoff2}) format("woff2"),
        url(${LatoHairlineItalicWoff}) format("woff");
      font-weight: 300;
      font-style: italic;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Lato";
      src: url(${LatoLightItalicWoff2}) format("woff2"),
        url(${LatoLightItalicWoff}) format("woff");
      font-weight: 300;
      font-style: italic;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Lato";
      src: url(${LatoThinWoff2}) format("woff2"),
        url(${LatoThinWoff}) format("woff");
      font-weight: 100;
      font-style: normal;
      font-display: swap;
    }
    
    /* Main Page styling */
    
    *, *::before, *::after {
       box-sizing: inherit;
       outline:0;
    }
    
    html {
        box-sizing: border-box;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    body {
        background-color: ${get(theme, "bgColor", "#fff")};
        color: ${get(theme, "fontColor", "#000")};
        height: 100vh;
        width: 100vw;
        font-family: 'Lato', sans-serif;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.5;
        transition: background-color 0s
    }
    
    fieldset, section {
        border: 1px solid ${get(theme, "borderColor", "#E2E2E2")};
        border-radius: 3px;
        background-color: transparent;
        padding: 25px;
    }
    
    hr {
        border-top: 0;
        border-left: 0;
        borderR-right: 0;
        border-color: ${get(theme, "borderColor", "#E2E2E2")};
        background-color: transparent;
    }
    
    ul {
        padding-left: 20px;
        list-style: none;
        
        li:not([class*="Mui"])::before {
          content: '￭';
          color: ${get(theme, "bulletColor", "#2781B0")};
          font-size: 20px;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }
        
        ul {
          list-style: none;
          li:not([class*="Mui"])::before {
            content: "￮";
            color: ${get(theme, "bulletColor", "#2781B0")},
            font-size: 20px;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
          }
        }
      }
      
    button:active, button:focus, input: active, input:focus {
        outline: 0;
    }
    
    .min-icon {
        width: 26px;
    }
    
    #root: {
        height: 100%;
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: stretch;
      }
    
    #preload {
      display: none;
    }
    
    #loader-block {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      justify-content: center;
      align-items: center;
    }
    `;
    }}
`;

export default GlobalStyles;
