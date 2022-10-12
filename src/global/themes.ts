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

export const lightColors = {
  white: "#fff",
  defaultFontColor: "#000",
  bulletColor: "#2781B0",
  borderColor: "#E2E2E2",
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
  divisorColor: "#E3E3E3",
};

export const darkColors = {
  dark: "#19202A",
  defaultFontColor: "#8E98A9",
  bulletColor: "#4B586A",
  borderColor: "#8E98A9",
  mainGrey: "#A2ADC0",
  disabledGrey: "#494A4D",
  hoverGrey: "#4B586A",
  borderPressedGrey: "#707988",
  pressedGrey: "#333D4B",
  mainWhite: "#E6ECEC",
  disabledWhite: "#B5BCBD",
  hoverWhite: "#EFEDED",
  pressedWhite: "#C3CBCB",
  mainRed: "#FF3958",
  hoverRed: "#4B586A",
  divisorColor: "#E3E3E3",
};

export const lightTheme = {
  bgColor: lightColors.white,
  fontColor: lightColors.defaultFontColor,
  borderColor: lightColors.borderColor,
  bulletColor: lightColors.bulletColor,
  logoColor: lightColors.mainRed,
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
  bgColor: darkColors.dark,
  fontColor: darkColors.defaultFontColor,
  borderColor: darkColors.borderColor,
  bulletColor: darkColors.bulletColor,
  logoColor: darkColors.mainRed,
  buttons: {
    regular: {
      enabled: {
        border: darkColors.mainGrey,
        text: darkColors.mainGrey,
        background: darkColors.dark,
        iconColor: darkColors.mainGrey,
      },
      disabled: {
        border: darkColors.disabledGrey,
        text: darkColors.mainGrey,
        background: darkColors.dark,
        iconColor: darkColors.mainGrey,
      },
      hover: {
        border: darkColors.mainGrey,
        text: darkColors.mainGrey,
        background: darkColors.hoverGrey,
        iconColor: darkColors.mainGrey,
      },
      pressed: {
        border: darkColors.borderPressedGrey,
        text: darkColors.borderPressedGrey,
        background: darkColors.pressedGrey,
        iconColor: darkColors.borderPressedGrey,
      },
    },
    callAction: {
      enabled: {
        border: darkColors.mainWhite,
        text: darkColors.dark,
        background: darkColors.mainWhite,
        iconColor: darkColors.dark,
      },
      disabled: {
        border: darkColors.disabledWhite,
        text: darkColors.dark,
        background: darkColors.disabledWhite,
        iconColor: darkColors.dark,
      },
      hover: {
        border: darkColors.hoverWhite,
        text: darkColors.dark,
        background: darkColors.hoverWhite,
        iconColor: darkColors.dark,
      },
      pressed: {
        border: darkColors.pressedWhite,
        text: darkColors.dark,
        background: darkColors.pressedWhite,
        iconColor: darkColors.dark,
      },
    },
    secondary: {
      enabled: {
        border: darkColors.mainRed,
        text: darkColors.mainRed,
        background: darkColors.dark,
        iconColor: darkColors.mainRed,
      },
      disabled: {
        border: darkColors.disabledGrey,
        text: darkColors.mainGrey,
        background: darkColors.dark,
        iconColor: darkColors.mainGrey,
      },
      hover: {
        border: darkColors.mainRed,
        text: darkColors.mainRed,
        background: darkColors.hoverRed,
        iconColor: darkColors.mainRed,
      },
      pressed: {
        border: darkColors.mainRed,
        text: darkColors.dark,
        background: darkColors.mainRed,
        iconColor: darkColors.dark,
      },
    },
  },
};
