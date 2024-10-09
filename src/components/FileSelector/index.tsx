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

import React, { FC, useMemo, useRef } from "react";
import { css, useTheme } from "@emotion/react";
import get from "lodash/get";

import { overridePropsParse } from "../../global/utils";
import CircleHelpIcon from "../../icons/CircleHelpIcon";
import PaperclipIcon from "../../icons/PaperclipIcon";
import Box from "../Box";
import IconButton from "../IconButton";
import InputHelper from "../InputHelper";
import InputLabel from "../InputLabel";
import Tooltip from "../Tooltip";
import { fileSelectorContainerStyles } from "./FileSelector.styles";
import { FileSelectorProps } from "./FileSelector.types";
import { fileProcess } from "./FileSelector.utils";

const FileSelector: FC<FileSelectorProps> = ({
  label,
  onChange,
  id,
  name,
  disabled = false,
  tooltip = "",
  required,
  helper,
  state = "normal",
  accept = "",
  value = "",
  className,
  returnEncodedData = false,
  noLabelMinWidth = false,
  sx,
}) => {
  const theme = useTheme();

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const fileSelectorContainer = fileSelectorContainerStyles(theme);

  const fileUpload = useRef<HTMLInputElement>(null);

  return (
    <div
      css={[fileSelectorContainer, overrideThemes]}
      className={`inputItem ${className}`}
    >
      {label !== "" && (
        <InputLabel
          htmlFor={id}
          className={"inputLabel"}
          inputSizeMode={"small"}
          noMinWidth={noLabelMinWidth}
        >
          {label}
          {required ? "*" : ""}
          {tooltip !== "" && (
            <Box className={"tooltipContainer"}>
              <Tooltip tooltip={tooltip} placement="top">
                <Box className={tooltip}>
                  <CircleHelpIcon />
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
            id={`file-selector-ac-${id}`}
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
            <PaperclipIcon />
          </IconButton>
        </Box>
        {helper !== undefined && (
          <InputHelper state={state}>{helper}</InputHelper>
        )}
      </Box>
    </div>
  );
};

export default FileSelector;
