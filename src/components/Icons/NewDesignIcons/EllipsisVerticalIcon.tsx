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

const EllipsisVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M8 8.66666C8.36819 8.66666 8.66667 8.36818 8.66667 7.99999C8.66667 7.6318 8.36819 7.33332 8 7.33332C7.63181 7.33332 7.33333 7.6318 7.33333 7.99999C7.33333 8.36818 7.63181 8.66666 8 8.66666Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 3.99999C8.36819 3.99999 8.66667 3.70151 8.66667 3.33332C8.66667 2.96513 8.36819 2.66666 8 2.66666C7.63181 2.66666 7.33333 2.96513 7.33333 3.33332C7.33333 3.70151 7.63181 3.99999 8 3.99999Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 13.3333C8.36819 13.3333 8.66667 13.0348 8.66667 12.6667C8.66667 12.2985 8.36819 12 8 12C7.63181 12 7.33333 12.2985 7.33333 12.6667C7.33333 13.0348 7.63181 13.3333 8 13.3333Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EllipsisVerticalIcon;
