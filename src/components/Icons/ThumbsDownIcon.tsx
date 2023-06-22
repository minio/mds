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

const ThumbsDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m113.5,227.69l-25.36-54.39c-1.57-3.35-2.71-6.89-3.39-10.53-.62-2.1-.94-4.28-.94-6.46V33.94c0-12.51,10.15-22.66,22.66-22.66,0,0,0,0,0,0l91.85-.87c14.98-.99,33.96,22.75,33.96,35.27l19.21,110.63c0,12.51-10.15,22.66-22.66,22.66h-80.92c6.68,20.79,11.05,48.44.5,57.39-5.67,4.81-11.16,7.43-16.29,7.43-7.08,0-13.46-4.99-18.63-16.09ZM11.25,170.71c-3.73,0-6.75-3.02-6.75-6.75V18.03c0-3.73,3.02-6.75,6.75-6.75h46.31c3.73,0,6.75,3.02,6.75,6.75v145.93c0,3.73-3.02,6.75-6.75,6.75H11.25Z" />
  </svg>
);

export default ThumbsDownIcon;
