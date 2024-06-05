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

const RatioIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.3333 2.0333C4.98352 2.0333 4.69997 2.31685 4.69997 2.66663V3.29997H11.3V2.66663C11.3 2.31685 11.0164 2.0333 10.6666 2.0333H5.3333ZM12.7 3.29997V2.66663C12.7 1.54366 11.7896 0.633301 10.6666 0.633301H5.3333C4.21032 0.633301 3.29997 1.54366 3.29997 2.66663V3.29997H2.66663C1.54366 3.29997 0.633301 4.21032 0.633301 5.3333V10.6666C0.633301 11.7896 1.54366 12.7 2.66663 12.7H3.29997V13.3333C3.29997 14.4563 4.21032 15.3666 5.3333 15.3666H10.6666C11.7896 15.3666 12.7 14.4563 12.7 13.3333V12.7H13.3333C14.4563 12.7 15.3666 11.7896 15.3666 10.6666V5.3333C15.3666 4.21032 14.4563 3.29997 13.3333 3.29997H12.7ZM11.3 4.69997H4.69997V11.3H11.3V4.69997ZM12.7 11.3V4.69997H13.3333C13.6831 4.69997 13.9666 4.98352 13.9666 5.3333V10.6666C13.9666 11.0164 13.6831 11.3 13.3333 11.3H12.7ZM11.3 12.7H4.69997V13.3333C4.69997 13.6831 4.98352 13.9666 5.3333 13.9666H10.6666C11.0164 13.9666 11.3 13.6831 11.3 13.3333V12.7ZM3.29997 11.3V4.69997H2.66663C2.31685 4.69997 2.0333 4.98352 2.0333 5.3333V10.6666C2.0333 11.0164 2.31685 11.3 2.66663 11.3H3.29997Z"
      fill="currentColor"
    />
  </svg>
);
export default RatioIcon;
