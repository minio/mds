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

const lightColors = {
  white: "#fff",
  mainGrey: "#5B5C5C",
  disabledGrey: "#E6EBEB",
  hoverGrey: "#E6EAEB",
  pressedGrey: "#D5D7D8",
  actionDisabledGrey: "#E7EAEB",
  mainBlue: "#07193E",
  hoverBlue: "#0D2453",
  pressedBlue: "#05132F",
  mainRed: "#C51B3F",
  hoverRed: "#FCF2F4",
  lightRed: "#C83B51",
};

export const lightTheme = {
  bgColor: lightColors.white,
  buttons: {
    regular: {
      enabled: {
        border: lightColors.mainGrey,
        text: lightColors.mainGrey,
        background: lightColors.white,
        iconColor: lightColors.mainGrey,
      },
      disabled: {
        border: lightColors.disabledGrey,
        text: lightColors.pressedGrey,
        background: lightColors.white,
        iconColor: lightColors.mainGrey,
      },
      hover: {
        border: lightColors.mainGrey,
        text: lightColors.mainGrey,
        background: lightColors.hoverGrey,
        iconColor: lightColors.mainGrey,
      },
      pressed: {
        border: lightColors.mainGrey,
        text: lightColors.mainGrey,
        background: lightColors.pressedGrey,
        iconColor: lightColors.mainGrey,
      },
    },
    callAction: {
      enabled: {
        border: lightColors.mainBlue,
        text: lightColors.white,
        background: lightColors.mainBlue,
        iconColor: lightColors.white,
      },
      disabled: {
        border: lightColors.actionDisabledGrey,
        text: lightColors.mainGrey,
        background: lightColors.actionDisabledGrey,
        iconColor: lightColors.mainGrey,
      },
      hover: {
        border: lightColors.hoverBlue,
        text: lightColors.white,
        background: lightColors.hoverBlue,
        iconColor: lightColors.white,
      },
      pressed: {
        border: lightColors.pressedBlue,
        text: lightColors.white,
        background: lightColors.pressedBlue,
        iconColor: lightColors.white,
      },
    },
    secondary: {
      enabled: {
        border: lightColors.mainRed,
        text: lightColors.mainRed,
        background: lightColors.white,
        iconColor: lightColors.mainRed,
      },
      disabled: {
        border: lightColors.disabledGrey,
        text: lightColors.mainGrey,
        background: lightColors.white,
        iconColor: lightColors.mainGrey,
      },
      hover: {
        border: lightColors.lightRed,
        text: lightColors.mainRed,
        background: lightColors.hoverRed,
        iconColor: lightColors.mainRed,
      },
      pressed: {
        border: lightColors.mainRed,
        text: lightColors.white,
        background: lightColors.mainRed,
        iconColor: lightColors.white,
      },
    },
  },
};

export const darkTheme = {
  bgColor: "#181F2A",
};
