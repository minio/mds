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

const CornerLeftUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.50491 2.17168C5.77828 1.89832 6.22149 1.89832 6.49486 2.17168L9.82819 5.50502C10.1016 5.77839 10.1016 6.2216 9.82819 6.49497C9.55483 6.76833 9.11161 6.76833 8.83824 6.49497L6.69989 4.35661V10.6667C6.69989 11.1883 6.90709 11.6885 7.27591 12.0573C7.64473 12.4261 8.14496 12.6333 8.66655 12.6333H13.3332C13.7198 12.6333 14.0332 12.9467 14.0332 13.3333C14.0332 13.7199 13.7198 14.0333 13.3332 14.0333H8.66655C7.77366 14.0333 6.91733 13.6786 6.28596 13.0473C5.65459 12.4159 5.29989 11.5596 5.29989 10.6667V4.35661L3.16153 6.49497C2.88816 6.76833 2.44494 6.76833 2.17158 6.49497C1.89821 6.2216 1.89821 5.77839 2.17158 5.50502L5.50491 2.17168Z"
      fill="currentColor"
    />
  </svg>
);
export default CornerLeftUpIcon;
