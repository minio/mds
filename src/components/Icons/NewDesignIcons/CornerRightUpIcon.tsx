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

const CornerRightUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.50491 2.17168C9.77828 1.89832 10.2215 1.89832 10.4949 2.17168L13.8282 5.50502C14.1016 5.77839 14.1016 6.2216 13.8282 6.49497C13.5548 6.76833 13.1116 6.76833 12.8382 6.49497L10.6999 4.35661V10.6667C10.6999 11.5596 10.3452 12.4159 9.71381 13.0473C9.08244 13.6786 8.22612 14.0333 7.33322 14.0333H2.66655C2.27995 14.0333 1.96655 13.7199 1.96655 13.3333C1.96655 12.9467 2.27995 12.6333 2.66655 12.6333H7.33322C7.85481 12.6333 8.35504 12.4261 8.72386 12.0573C9.09268 11.6885 9.29989 11.1883 9.29989 10.6667V4.35661L7.16153 6.49497C6.88816 6.76833 6.44494 6.76833 6.17158 6.49497C5.89821 6.2216 5.89821 5.77839 6.17158 5.50502L9.50491 2.17168Z"
      fill="currentColor"
    />
  </svg>
);
export default CornerRightUpIcon;
