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

import React, { FC, useRef } from "react";
import get from "lodash/get";
import styled from "styled-components";
import HelpIcon from "../Icons/HelpIcon";
import InputLabel from "../InputLabel/InputLabel";
import Tooltip from "../Tooltip/Tooltip";
import IconButton from "../IconButton/IconButton";
import AttachFileIcon from "../Icons/AttachFileIcon";
import Box from "../Box/Box";
import {
  FileSelectorConstructorProps,
  FileSelectorProps,
} from "./FileSelector.types";
import { fileProcess } from "./FileSelector.utils";
import { lightColors } from "../../global/themes";

const FileSelectorContainer = styled.div<FileSelectorConstructorProps>(
  ({ theme, error, sx }) => ({
    display: "flex",
    flexGrow: 1,
    width: "100%",
    "& .errorText": {
      fontSize: 12,
      color: get(theme, "inputBox.error", lightColors.mainRed),
      marginTop: 3,
    },
    "& .textBoxContainer": {
      width: "100%",
      flexGrow: 1,
      position: "relative",
      minWidth: 160,
    },
    "& .tooltipContainer": {
      marginLeft: 5,
      display: "flex",
      alignItems: "center",
      "& .min-icon": {
        width: 13,
      },
    },
    "& .overlayAction": {
      position: "absolute",
      right: 5,
      top: 6,
    },
    "& .inputLabel": {
      marginBottom: error ? 18 : 0,
    },
    "& .valueString": {
      maxWidth: 350,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      fontStyle: "italic",
      color: error
        ? get(theme, "inputBox.error", lightColors.mainRed)
        : get(theme, "mutedText", lightColors.mutedText),
    },
    "& .fileInputField": {
      display: "none",
      visibility: "hidden",
    },
    "& .fileReselect": {
      display: "flex",
      alignItems: "center",
      gap: 12,
    },
    ...sx,
  }),
);

const FileSelector: FC<FileSelectorProps> = ({
  label,
  onChange,
  id,
  name,
  disabled = false,
  tooltip = "",
  required,
  error = "",
  accept = "",
  value = "",
  className,
  noLabelMinWidth = false,
  returnEncodedData = false,
  sx,
  helpTip,
  helpTipPlacement,
}) => {
  const fileUpload = useRef<HTMLInputElement>(null);

  return (
    <FileSelectorContainer
      error={!!error && error !== ""}
      sx={sx}
      className={`inputItem ${className}`}
    >
      {label !== "" && (
        <InputLabel
          htmlFor={id}
          noMinWidth={noLabelMinWidth}
          className={"inputLabel"}
          helpTip={helpTip}
          helpTipPlacement={helpTipPlacement}
        >
          {label}
          {required ? "*" : ""}
          {tooltip !== "" && (
            <Box className={"tooltipContainer"}>
              <Tooltip tooltip={tooltip} placement="top">
                <Box className={tooltip}>
                  <HelpIcon />
                </Box>
              </Tooltip>
            </Box>
          )}
        </InputLabel>
      )}
      <Box>
        <input
          type="file"
          name={name}
          onChange={(e) => {
            const fileName = get(e, "target.files[0].name", "");
            if (returnEncodedData && fileName.trim() !== "") {
              fileProcess(e, (data: any) => {
                onChange(e, fileName, data);
              });

              return;
            }
            onChange(e, fileName);
          }}
          accept={accept}
          required={required}
          disabled={disabled}
          className={"fileInputField"}
          ref={fileUpload}
        />
        <Box className={"fileReselect"}>
          {value !== "" && <div className={"valueString"}>{value || ""}</div>}
          <IconButton
            type={"button"}
            color="primary"
            aria-label="upload picture"
            onClick={() => {
              if (fileUpload && fileUpload.current) {
                fileUpload.current.click();
              }
            }}
            size="small"
            disabled={disabled}
          >
            <AttachFileIcon />
          </IconButton>
        </Box>
        {error !== "" && <Box className={"errorText"}>{error}</Box>}
      </Box>
    </FileSelectorContainer>
  );
};

export default FileSelector;
