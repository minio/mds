// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
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

import * as React from "react";
import { SVGProps } from "react";

const TabletsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.66666 2.0333C3.21231 2.0333 2.03333 3.21228 2.03333 4.66663C2.03333 5.13958 2.15801 5.58342 2.3763 5.96705L5.96708 2.37627C5.58345 2.15798 5.13962 2.0333 4.66666 2.0333ZM7.45798 1.75522C6.73338 1.06032 5.74989 0.633301 4.66666 0.633301C2.43912 0.633301 0.633331 2.43909 0.633331 4.66663C0.633331 5.74986 1.06035 6.73335 1.75525 7.45795C1.77255 7.48002 1.79136 7.50128 1.81169 7.52161C1.83202 7.54193 1.85328 7.56075 1.87534 7.57805C2.59994 8.27294 3.58344 8.69997 4.66666 8.69997C6.89421 8.69997 8.7 6.89418 8.7 4.66663C8.7 3.58341 8.27297 2.59991 7.57808 1.87531C7.56078 1.85325 7.54197 1.83199 7.52164 1.81166C7.50131 1.79133 7.48005 1.77252 7.45798 1.75522ZM6.95703 3.36622L3.36625 6.957C3.74988 7.17528 4.19371 7.29997 4.66666 7.29997C6.12101 7.29997 7.3 6.12098 7.3 4.66663C7.3 4.19368 7.17532 3.74985 6.95703 3.36622ZM8.79405 10.6333H13.8726C13.566 9.51873 12.5453 8.69997 11.3333 8.69997C10.1214 8.69997 9.10061 9.51873 8.79405 10.6333ZM13.8726 12.0333H8.79405C9.10061 13.1479 10.1214 13.9666 11.3333 13.9666C12.5453 13.9666 13.566 13.1479 13.8726 12.0333ZM7.3 11.3333C7.3 9.10575 9.10578 7.29997 11.3333 7.29997C13.5609 7.29997 15.3667 9.10575 15.3667 11.3333C15.3667 13.5608 13.5609 15.3666 11.3333 15.3666C9.10578 15.3666 7.3 13.5608 7.3 11.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default TabletsIcon;
