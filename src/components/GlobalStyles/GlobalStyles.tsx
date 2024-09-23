/* eslint-disable @typescript-eslint/no-require-imports */

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

import get from "lodash/get";
import { createGlobalStyle } from "styled-components";

import { lightColors, lightV2 } from "../../global/themes";

const GeistBlackWoff2 = require("../assets/fonts/Geist/Geist-Black.woff2");
const GeistBoldWoff2 = require("../assets/fonts/Geist/Geist-Bold.woff2");
const GeistLightWoff2 = require("../assets/fonts/Geist/Geist-Light.woff2");
const GeistRegularWoff2 = require("../assets/fonts/Geist/Geist-Regular.woff2");
const GeistThinWoff2 = require("../assets/fonts/Geist/Geist-Thin.woff2");
const GeistSemiBoldWoff2 = require("../assets/fonts/Geist/Geist-SemiBold.woff2");
const GeistMediumWoff2 = require("../assets/fonts/Geist/Geist-Medium.woff2");
const GeistUltraLightWoff2 = require("../assets/fonts/Geist/Geist-UltraLight.woff2");

const GlobalStyles = createGlobalStyle`
    ${({ theme }) => {
      return `
    /* Fonts */
    @font-face {
      font-family: "Geist";
      src: url(${GeistBoldWoff2}) format("woff2");
      font-weight: bold;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Geist";
      src: url(${GeistMediumWoff2}) format("woff2");
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Geist";
      src: url(${GeistSemiBoldWoff2}) format("woff2");
      font-weight: 600;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Geist";
      src: url(${GeistLightWoff2}) format("woff2");
      font-weight: 300;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Geist";
      src: url(${GeistUltraLightWoff2}) format("woff2");
      font-weight: 200;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Geist";
      src: url(${GeistBlackWoff2}) format("woff2");
      font-weight: 900;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Geist";
      src: url(${GeistRegularWoff2}) format("woff2");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Geist";
      src: url(${GeistThinWoff2}) format("woff2");
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
        background-color: ${get(theme, "bgColor", lightV2.mainBackgroundColor)};
        color: ${get(theme, "fontColor", lightV2.fontColor)};
        minHeight: 100vh;
        font-family: 'Geist', sans-serif;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.5;
        transition: background-color 0s
    }
    
    fieldset, section {
        border: 1px solid ${get(theme, "borderColor", lightV2.borderColor)};
        border-radius: 3px;
        background-color: transparent;
        padding: 25px;
    }
    
    a {
        color: ${get(theme, "linkColor", lightV2.linkColor)};
    }
    
    a:hover {
        color: ${get(theme, "linkColor", lightV2.linkColor)};
    }
    
    hr {
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-bottom: 1px solid ${get(theme, "borderColor", lightV2.borderColor)};
        background-color: transparent;
    }
    
    ul {
        padding-left: 20px;
        list-style: none;
        
        li:not([class*="Mui"])::before {
          content: '￭';
          color: ${get(theme, "bulletColor", lightColors.bulletColor)};
          font-size: 20px;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }
        
        ul {
          list-style: none;
          li:not([class*="Mui"])::before {
            content: "￮";
            color: ${get(theme, "bulletColor", lightColors.bulletColor)},
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
    
    .muted {
        color: ${get(theme, "mutedText", lightV2.mutedText)};
        font-size: 14px;
    }
    
    .error {
        color: ${get(theme, "signalColors.danger", lightV2.danger)};
    }
    
    /* Text Vars */
    .SM_Normal {
        font-family: 'Geist', sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
    }
    .SM_Strong {
        font-family: 'Geist', sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 16px;
    }
    .Base_Normal {
        font-family: 'Geist', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
    }
    .Base_Strong {
        font-family: 'Geist', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; 
        letter-spacing: 0.16px;
    }
    .LG_Normal {
        font-family: 'Geist', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
    }
    .LG_Strong {
        font-family: 'Geist', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0.16px;
    }
    .XL_Normal {
        font-family: 'Geist', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
    }
    .XL_Strong {
        font-family: 'Geist', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px;
    }
    `;
    }}
`;

export default GlobalStyles;
