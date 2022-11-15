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

export const breakPoints = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 };

export const fractionToPerc = (fraction: "auto" | number | boolean) => {
  if (fraction === "auto" || (typeof fraction === "boolean" && fraction)) {
    return "100%";
  } else if (fraction === false) {
    return "initial";
  }

  let fr = Math.floor(fraction);

  console.log(fr);

  if (fr > 12) {
    fr = 12;
    console.warn("Grid fraction cannot be greater than 12");
  } else if (fr < 1) {
    fr = 1;
    console.warn("Grid fraction cannot be smaller than 1");
  }

  const percCalculate = (fr * 100) / 12;

  return `${percCalculate}%`;
};
