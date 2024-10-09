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

const CornerLeftDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.28608 2.95273C6.91745 2.32136 7.77378 1.96666 8.66667 1.96666H13.3333C13.7199 1.96666 14.0333 2.28006 14.0333 2.66666C14.0333 3.05326 13.7199 3.36666 13.3333 3.36666H8.66667C8.14508 3.36666 7.64485 3.57386 7.27603 3.94268C6.90721 4.3115 6.70001 4.81173 6.70001 5.33333V11.6434L8.83837 9.50502C9.11173 9.23165 9.55495 9.23165 9.82832 9.50502C10.1017 9.77839 10.1017 10.2216 9.82832 10.495L6.49498 13.8283C6.22162 14.1017 5.7784 14.1017 5.50503 13.8283L2.1717 10.495C1.89833 10.2216 1.89833 9.77839 2.1717 9.50502C2.44507 9.23165 2.88828 9.23165 3.16165 9.50502L5.30001 11.6434V5.33333C5.30001 4.44043 5.65471 3.58411 6.28608 2.95273Z"
      fill="currentColor"
    />
  </svg>
);
export default CornerLeftDownIcon;
