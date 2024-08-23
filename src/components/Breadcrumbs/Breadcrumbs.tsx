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

import React, { FC, Fragment } from "react";
import get from "lodash/get";
import styled from "styled-components";

import { themeColors } from "../../global/themeColors";
import { overridePropsParse } from "../../global/utils";
import Box from "../Box/Box";
import Button from "../Button/Button";
import ExpandMenu from "../ExpandMenu/ExpandMenu";
import ExpandMenuOption from "../ExpandMenu/ExpandMenuOption";
import ChevronLeftIcon from "../Icons/NewDesignIcons/ChevronLeftIcon";
import EllipsisIcon from "../Icons/NewDesignIcons/EllipsisIcon";
import BreadcrumbButton from "./BreadcrumbButton";
import {
  BreadcrumbsContainerProps,
  BreadcrumbsOption,
  BreadcrumbsProps,
} from "./Breadcrumbs.types";

const BoxParent = styled.div<BreadcrumbsContainerProps>(({ theme, sx }) => {
  return {
    boxSizing: "border-box",
    flexBasis: "100%",
    width: "100%",
    fontSize: 12,
    fontWeight: "bold",
    height: 38,
    display: "flex",
    alignItems: "center",
    marginRight: 10,
    "& .breadcrumbsList": {
      display: "flex",
      flexWrap: "nowrap",
      flexGrow: 1,
      textAlign: "left" as const,
      marginLeft: 15,
      marginRight: 10,
      overflow: "hidden",
      userSelect: "none",
      "& .divider": {
        boxSizing: "content-box",
        display: "inline-flex",
        justifyContent: "center",
        width: 12,
        minWidth: 12,
        color: get(
          theme,
          "elementsColor",
          themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
        ),
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "16px",
        letterSpacing: "0.5px",
        padding: "2px 4px",
      },
      "& svg": {
        color: get(
          theme,
          "elementsColor",
          themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
        ),
        "&:hover": {
          color: get(
            theme,
            "hoverColor",
            themeColors["Color/Brand/Control/colorBgHover"].lightMode,
          ),
        },
      },
      "& .last": {
        pointerEvents: "none",
      },
    },
    "& .slashSpacingStyle": {
      margin: "0 5px",
    },
    ...overridePropsParse(sx, theme),
  };
});

const Breadcrumbs: FC<BreadcrumbsProps> = ({
  sx,
  goBackFunction,
  options,
  displayLastItems = false,
  onClickOption,
  markCurrentItem = false,
  children,
}) => {
  const hasCollapsedOpts =
    typeof displayLastItems === "number" &&
    options.length - 1 > displayLastItems &&
    options.length > 0;

  let collapsedOptions = null;

  const clickFunction = (option: BreadcrumbsOption) => {
    if (onClickOption) {
      onClickOption(option.to);
    }

    if (option.onClick) {
      option.onClick(option.to);
    }
  };

  const Divider = () => {
    return <Box className={"divider"}>/</Box>;
  };

  // Collapsed options
  if (hasCollapsedOpts && options.length > displayLastItems - 1) {
    const colOpts = options.slice(1, displayLastItems * -1);

    collapsedOptions = (
      <ExpandMenu
        id={"breadcrumbs-expand"}
        className={"breadcrumbElement"}
        icon={<EllipsisIcon />}
        variant={"secondary-ghost"}
        sx={{
          height: 20,
          padding: "2px 4px",
          borderRadius: 2,
        }}
        dropArrow={false}
        compact
      >
        {colOpts.map((option, index) => (
          <ExpandMenuOption
            key={`expandOption-${option.label}-${index}`}
            id={`expandOption-${option.label}`}
            onClick={() => clickFunction(option)}
          >
            {option.label}
          </ExpandMenuOption>
        ))}
      </ExpandMenu>
    );
  }

  const itSlide = hasCollapsedOpts
    ? options.slice(displayLastItems * -1)
    : options;

  return (
    <BoxParent className={"breadcrumbs-bar"} sx={sx}>
      {goBackFunction && (
        <Button
          id={"back-button"}
          icon={<ChevronLeftIcon />}
          onClick={goBackFunction}
          iconLocation={"start"}
          compact
          sx={{
            width: 28,
            height: 28,
          }}
        />
      )}
      <Box className={"breadcrumbsList"}>
        {hasCollapsedOpts ? (
          <Fragment>
            <BreadcrumbButton
              id={`breadcrumb-option-${options[0].label}`}
              onClick={() => clickFunction(options[0])}
              onClickOption={onClickOption}
              icon={options[0].icon!}
            >
              {options[0].label}
            </BreadcrumbButton>
            <Divider />
            {collapsedOptions}
            <Divider />
            {itSlide.map((itm, index) => {
              const lastItem = index === itSlide.length - 1;

              return (
                <Fragment key={`expandOption-${itm.label}-${index}`}>
                  {index !== 0 && <Divider />}
                  <BreadcrumbButton
                    id={`breadcrumb-option-${itm.label}`}
                    onClick={() => clickFunction(itm)}
                    onClickOption={onClickOption}
                    className={`${lastItem && !itm.subOptions ? "last" : ""}`}
                    icon={itm.icon!}
                    current={lastItem && markCurrentItem}
                    label={itm.label}
                  />
                </Fragment>
              );
            })}
          </Fragment>
        ) : (
          <Fragment>
            {itSlide.map((itm, index) => {
              const lastItem = index === options.length - 1;

              return (
                <Fragment key={`expandOption-${itm.label}-${index}`}>
                  {index !== 0 && <Divider />}
                  <BreadcrumbButton
                    id={`breadcrumb-option-${itm.label}`}
                    onClick={() => {
                      clickFunction(itm);
                    }}
                    onClickOption={onClickOption}
                    className={`${lastItem && !itm.subOptions ? "last" : ""}`}
                    icon={itm.icon!}
                    current={lastItem && markCurrentItem}
                    subOptions={itm.subOptions}
                    label={itm.label}
                  />
                </Fragment>
              );
            })}
            {children!}
          </Fragment>
        )}
      </Box>
    </BoxParent>
  );
};

export default Breadcrumbs;
