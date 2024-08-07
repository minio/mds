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

const ClusterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.64999 0.727083C7.86657 0.60204 8.13341 0.60204 8.34999 0.727083L14.1235 4.06042C14.3401 4.18546 14.4735 4.41655 14.4735 4.66663V11.3333C14.4735 11.5834 14.3401 11.8145 14.1235 11.9395L8.34999 15.2729C8.13341 15.3979 7.86657 15.3979 7.64999 15.2729L1.87649 11.9395C1.65991 11.8145 1.52649 11.5834 1.52649 11.3333V4.66663C1.52649 4.41655 1.65991 4.18546 1.87649 4.06042L7.64999 0.727083ZM2.92649 5.07078V10.9292L7.99999 13.8583L13.0735 10.9292V5.07078L7.99999 2.14159L2.92649 5.07078Z"
      fill="currentColor"
    />
  </svg>
);
export default ClusterIcon;
