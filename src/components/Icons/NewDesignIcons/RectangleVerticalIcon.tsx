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

const RectangleVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.33338 2.0333C4.9836 2.0333 4.70005 2.31685 4.70005 2.66663V13.3333C4.70005 13.6831 4.9836 13.9666 5.33338 13.9666H10.6667C11.0165 13.9666 11.3 13.6831 11.3 13.3333V2.66663C11.3 2.31685 11.0165 2.0333 10.6667 2.0333H5.33338ZM3.30005 2.66663C3.30005 1.54366 4.2104 0.633301 5.33338 0.633301H10.6667C11.7897 0.633301 12.7 1.54366 12.7 2.66663V13.3333C12.7 14.4563 11.7897 15.3666 10.6667 15.3666H5.33338C4.2104 15.3666 3.30005 14.4563 3.30005 13.3333V2.66663Z"
      fill="currentColor"
    />
  </svg>
);
export default RectangleVerticalIcon;
