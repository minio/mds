// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

import React, { FC } from "react";
import get from "lodash/get";
import styled from "styled-components";
import CodeEditor from "@uiw/react-textarea-code-editor";
import HelpIcon from "../Icons/HelpIcon";
import Tooltip from "../Tooltip/Tooltip";
import Box from "../Box/Box";
import InputLabel from "../InputLabel/InputLabel";
import { CodeEditorBaseProps, CodeEditorProps } from "./CodeEditor.types";
import { lightColors } from "../../global/themes";

const CodeEditorBase = styled.div<CodeEditorBaseProps>(
  ({ theme, editorHeight, sx }) => ({
    "& .editorContainer": {
      maxHeight: editorHeight,
      overflow: "auto",
      border: `${get(theme, "borderColor", lightColors.borderColor)} 1px solid`,
    },
    "& .tooltipContainer": {
      marginLeft: 5,
      display: "flex",
      alignItems: "center",
      "& .min-icon": {
        width: 13,
      },
    },
    "& .mds-editor": {
      "&.w-tc-editor": {
        fontSize: 12,
        backgroundColor: get(
          theme,
          "codeEditor.backgroundColor",
          lightColors.white,
        ),
        color: get(theme, "codeEditor.textColor", lightColors.defaultFontColor),
        fontFamily:
          "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        minHeight: editorHeight || "initial",
        [`& code[class*="language-"] .token.cdata,
      & pre[class*="language-"] .token.cdata,
      & code[class*="language-"] .token.comment,
      & pre[class*="language-"] .token.comment,
      & code[class*="language-"] .token.doctype,
      & pre[class*="language-"] .token.doctype,
      & code[class*="language-"] .token.prolog,
      & pre[class*="language-"] .token.prolog`]: {
          color: get(
            theme,
            "codeEditor.comment",
            lightColors.codeEditorComment,
          ),
        },
        [`& code[class*="language-"] .token.punctuation,
& pre[class*="language-"] .token.punctuation`]: {
          color: get(
            theme,
            "codeEditor.sublimelinterGutterMark",
            lightColors.codeEditorSublimelinterGutterMark,
          ),
        },
        [`& code[class*="language-"] .namespace,
& pre[class*="language-"] .namespace`]: {
          opacity: 0.7,
        },
        [`& code[class*="language-"] .token.boolean,
& pre[class*="language-"] .token.boolean,
& code[class*="language-"] .token.constant,
& pre[class*="language-"] .token.constant,
& code[class*="language-"] .token.deleted,
& pre[class*="language-"] .token.deleted,
& code[class*="language-"] .token.number,
& pre[class*="language-"] .token.number,
& code[class*="language-"] .token.symbol,
& pre[class*="language-"] .token.symbol`]: {
          color: get(
            theme,
            "codeEditor.entityTag",
            lightColors.codeEditorEntityTag,
          ),
        },
        [`& code[class*="language-"] .token.builtin,
& pre[class*="language-"] .token.builtin,
& code[class*="language-"] .token.char,
& pre[class*="language-"] .token.char,
& code[class*="language-"] .token.inserted,
& pre[class*="language-"] .token.inserted,
& code[class*="language-"] .token.selector,
& pre[class*="language-"] .token.selector,
& code[class*="language-"] .token.string,
& pre[class*="language-"] .token.string`]: {
          color: get(
            theme,
            "codeEditor.constant",
            lightColors.codeEditorConstant,
          ),
        },
        [`& code[class*="language-"] .style .token.string,
& pre[class*="language-"] .style .token.string,
& code[class*="language-"] .token.entity,
& pre[class*="language-"] .token.entity,
& code[class*="language-"] .token.property,
& pre[class*="language-"] .token.property,
& code[class*="language-"] .token.operator,
& pre[class*="language-"] .token.operator,
& code[class*="language-"] .token.url,
& pre[class*="language-"] .token.url`]: {
          color: get(
            theme,
            "codeEditor.constant",
            lightColors.codeEditorConstant,
          ),
        },
        [`& code[class*="language-"] .token.atrule,
& pre[class*="language-"] .token.atrule,
& code[class*="language-"] .token.property-access .token.method,
& pre[class*="language-"] .token.property-access .token.method,
& code[class*="language-"] .token.keyword,
& pre[class*="language-"] .token.keyword`]: {
          color: get(
            theme,
            "codeEditor.keyword",
            lightColors.codeEditorKeyword,
          ),
        },
        [`& code[class*="language-"] .token.function,
& pre[class*="language-"] .token.function`]: {
          color: get(theme, "codeEditor.string", lightColors.codeEditorString),
        },

        [`& code[class*="language-"] .token.important,
& pre[class*="language-"] .token.important,
& code[class*="language-"] .token.regex,
& pre[class*="language-"] .token.regex,
& code[class*="language-"] .token.variable,
& pre[class*="language-"] .token.variable`]: {
          color: get(
            theme,
            "codeEditor.codeEditorRegexp",
            lightColors.codeEditorRegexp,
          ),
        },
        [`& code[class*="language-"] .token.bold,
& pre[class*="language-"] .token.bold,
& code[class*="language-"] .token.important,
& pre[class*="language-"] .token.important`]: {
          color: get(
            theme,
            "codeEditor.markupBold",
            lightColors.codeEditorMarkupBold,
          ),
        },
        [`& code[class*="language-"] .token.tag,
& pre[class*="language-"] .token.tag`]: {
          color: get(
            theme,
            "codeEditor.entityTag",
            lightColors.codeEditorEntityTag,
          ),
        },
        [`& code[class*="language-"] .token.attr-value,
& pre[class*="language-"] .token.attr-value,
& code[class*="language-"] .token.attr-name,
& pre[class*="language-"] .token.attr-name`]: {
          color: get(
            theme,
            "codeEditor.constant",
            lightColors.codeEditorConstant,
          ),
        },
        [`& code[class*="language-"] .token.selector .class,
& pre[class*="language-"] .token.selector .class,
& code[class*="language-"] .token.class-name,
& pre[class*="language-"] .token.class-name`]: {
          color: get(theme, "codeEditor.entity", lightColors.codeEditorEntity),
        },
      },
      "& .w-tc-editor-text, .w-tc-editor-preview": {
        minHeight: 16,
      },
      "& .w-tc-editor-preview pre": {
        margin: 0,
        padding: 0,
        whiteSpace: "inherit",
        fontFamily: "inherit",
        fontSize: "inherit",
      },
      "& .w-tc-editor-preview pre code": {
        fontFamily: "inherit",
      },
    },
    "& .actionsContainer": {
      display: "flex",
      alignItems: "center",
      background: get(
        theme,
        "codeEditor.helpToolsBarBG",
        lightColors.boxBackground,
      ),
      border: `${get(theme, "borderColor", lightColors.borderColor)} 1px solid`,
      borderTop: 0,
      padding: "2px",
      paddingRight: "5px",
      justifyContent: "flex-end",
      "& button": {
        height: "26px",
        width: "26px",
        padding: "2px",
        " .min-icon": {
          marginLeft: "0",
        },
      },
    },
    ...sx,
  }),
);

const CodeMirrorWrapper: FC<CodeEditorProps> = ({
  value,
  label = "",
  tooltip = "",
  mode = "json",
  onChange,
  editorHeight = 250,
  sx,
  helpTools,
  className,
  helpTip,
  helpTipPlacement,
}) => {
  return (
    <CodeEditorBase
      sx={sx}
      editorHeight={editorHeight}
      className={`codeEditor inputItem ${className}`}
    >
      <InputLabel
        sx={{ marginBottom: "10px", display: "flex", alignItems: "center" }}
        helpTip={helpTip}
        helpTipPlacement={helpTipPlacement}
      >
        <span>{label}</span>
        {tooltip !== "" && (
          <Box className={"tooltipContainer"}>
            <Tooltip tooltip={tooltip} placement="top">
              <HelpIcon />
            </Tooltip>
          </Box>
        )}
      </InputLabel>
      <Box className={"editorContainer"}>
        <CodeEditor
          value={value}
          language={mode}
          onChange={(evn) => {
            onChange(evn.target.value);
          }}
          id={"code_wrapper"}
          padding={15}
          className={"mds-editor"}
        />
      </Box>
      {helpTools && <Box className={"actionsContainer"}>{helpTools}</Box>}
    </CodeEditorBase>
  );
};

export default CodeMirrorWrapper;
