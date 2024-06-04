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

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.8283 3.50502C14.1017 3.77839 14.1017 4.22161 13.8283 4.49497L6.49498 11.8283C6.22162 12.1017 5.7784 12.1017 5.50503 11.8283L2.1717 8.49497C1.89833 8.22161 1.89833 7.77839 2.1717 7.50502C2.44507 7.23166 2.88828 7.23166 3.16165 7.50502L6.00001 10.3434L12.8384 3.50502C13.1117 3.23166 13.5549 3.23166 13.8283 3.50502Z"
      fill="currentColor"
    />
  </svg>
);
export default CheckIcon;
