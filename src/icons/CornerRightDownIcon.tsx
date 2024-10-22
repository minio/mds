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

const CornerRightDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.96655 2.66666C1.96655 2.28006 2.27995 1.96666 2.66655 1.96666H7.33322C8.22611 1.96666 9.08244 2.32136 9.71381 2.95273C10.3452 3.58411 10.6999 4.44043 10.6999 5.33333V11.6434L12.8382 9.50502C13.1116 9.23165 13.5548 9.23165 13.8282 9.50502C14.1016 9.77839 14.1016 10.2216 13.8282 10.495L10.4949 13.8283C10.2215 14.1017 9.77828 14.1017 9.50491 13.8283L6.17158 10.495C5.89821 10.2216 5.89821 9.77839 6.17158 9.50502C6.44494 9.23165 6.88816 9.23165 7.16153 9.50502L9.29989 11.6434V5.33333C9.29989 4.81173 9.09268 4.3115 8.72386 3.94268C8.35504 3.57386 7.85481 3.36666 7.33322 3.36666H2.66655C2.27995 3.36666 1.96655 3.05326 1.96655 2.66666Z"
      fill="currentColor"
    />
  </svg>
);
export default CornerRightDownIcon;
