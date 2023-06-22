// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

const ThumbsUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m198.32,245.59l-91.85-.87c-12.51,0-22.66-10.14-22.66-22.66v-122.37c0-2.19.31-4.37.94-6.46.68-3.64,1.82-7.18,3.39-10.53l25.36-54.39c8.93-19.14,21.43-20.11,34.93-8.66,10.55,8.95,6.17,36.6-.5,57.39h80.92c12.51,0,22.66,10.15,22.66,22.66l-19.21,110.63c0,12.26-18.22,35.29-33.04,35.3-.31,0-.62,0-.92-.03Zm-187.07-.87c-3.73,0-6.75-3.02-6.75-6.75V92.04c0-3.73,3.02-6.75,6.75-6.75h46.31c3.73,0,6.75,3.02,6.75,6.75v145.93c0,3.73-3.02,6.75-6.75,6.75H11.25Z" />
  </svg>
);

export default ThumbsUpIcon;
