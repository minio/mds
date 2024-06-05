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

const ChevronLastIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.1717 3.50502C4.44507 3.23166 4.88828 3.23166 5.16165 3.50502L9.16165 7.50502C9.43502 7.77839 9.43502 8.22161 9.16165 8.49497L5.16165 12.495C4.88828 12.7683 4.44507 12.7683 4.1717 12.495C3.89833 12.2216 3.89833 11.7784 4.1717 11.505L7.67673 8L4.1717 4.49497C3.89833 4.22161 3.89833 3.77839 4.1717 3.50502ZM11.3333 3.3C11.7199 3.3 12.0333 3.6134 12.0333 4V12C12.0333 12.3866 11.7199 12.7 11.3333 12.7C10.9467 12.7 10.6333 12.3866 10.6333 12V4C10.6333 3.6134 10.9467 3.3 11.3333 3.3Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronLastIcon;
