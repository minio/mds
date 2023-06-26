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
    "& .editor": {
      fontSize: 12,
      fontFamily:
        "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
      minHeight: editorHeight || "initial",
      backgroundColor: get(
        theme,
        "codeEditor.backgroundColor",
        lightColors.white
      ),
      color: get(theme, "codeEditor.textColor", lightColors.defaultFontColor),
    },
    "& .actionsContainer": {
      display: "flex",
      alignItems: "center",
      background: get(
        theme,
        "codeEditor.helpToolsBarBG",
        lightColors.boxBackground
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
  })
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
}) => {
  return (
    <CodeEditorBase
      sx={sx}
      editorHeight={editorHeight}
      className={`inputItem ${className}`}
    >
      <InputLabel
        sx={{ marginBottom: "10px", display: "flex", alignItems: "center" }}
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
          className={"editor"}
        />
      </Box>
      {helpTools && <Box className={"actionsContainer"}>{helpTools}</Box>}
    </CodeEditorBase>
  );
};

export default CodeMirrorWrapper;
