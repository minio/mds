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

const DropletIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 1.29999C8.33367 1.29999 8.62096 1.53551 8.6864 1.86271C8.98612 3.3613 9.8939 4.81867 11.104 5.78671C12.563 6.95397 13.3667 8.40724 13.3667 9.99999C13.3667 11.4233 12.8012 12.7883 11.7948 13.7948C10.7884 14.8012 9.42333 15.3667 8 15.3667C6.57667 15.3667 5.21164 14.8012 4.20519 13.7948C3.19875 12.7883 2.63333 11.4233 2.63333 9.99999C2.63333 8.40724 3.43697 6.95397 4.89604 5.78671C6.1061 4.81867 7.01387 3.3613 7.31359 1.86271C7.37903 1.53551 7.66632 1.29999 8 1.29999ZM8 4.11043C7.4618 5.18192 6.68857 6.14557 5.77062 6.87993C4.56302 7.84601 4.03333 8.92606 4.03333 9.99999C4.03333 11.052 4.45125 12.061 5.19514 12.8048C5.93903 13.5487 6.94797 13.9667 8 13.9667C9.05202 13.9667 10.061 13.5487 10.8049 12.8048C11.5487 12.061 11.9667 11.052 11.9667 9.99999C11.9667 8.92606 11.437 7.84601 10.2294 6.87993C9.31143 6.14557 8.5382 5.18192 8 4.11043Z"
      fill="currentColor"
    />
  </svg>
);
export default DropletIcon;
