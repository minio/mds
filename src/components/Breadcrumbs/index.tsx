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

import { FC, Fragment, useMemo } from "react";
import { css, useTheme } from "@emotion/react";

import { overridePropsParse } from "../../global/utils";
import ChevronLeftIcon from "../../icons/ChevronLeftIcon";
import EllipsisIcon from "../../icons/EllipsisIcon";
import Box from "../Box";
import Button from "../Button";
import ExpandMenu from "../ExpandMenu";
import ExpandMenuOption from "../ExpandMenu/ExpandMenuOption";
import BreadcrumbButton from "./BreadcrumbButton";
import { breadcrumbsTheme } from "./Breadcrumbs.styles";
import { BreadcrumbsOption, BreadcrumbsProps } from "./Breadcrumbs.types";

const Breadcrumbs: FC<BreadcrumbsProps> = ({
  sx,
  goBackFunction,
  options,
  displayLastItems = false,
  onClickOption,
  markCurrentItem = false,
  children,
  pathActions,
}) => {
  const theme = useTheme();

  const mainTheme = breadcrumbsTheme(theme);

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

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
    <div className={"breadcrumbs-bar"} css={[mainTheme, overrideThemes]}>
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
      {pathActions && <Box>{pathActions}</Box>}
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
    </div>
  );
};

export default Breadcrumbs;
