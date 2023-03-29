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

const TimeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m128,253.47c-69.18,0-125.47-56.28-125.47-125.47S58.82,2.53,128,2.53s125.47,56.28,125.47,125.47-56.28,125.47-125.47,125.47Zm0-232.94c-59.26,0-107.47,48.21-107.47,107.47s48.21,107.47,107.47,107.47,107.47-48.21,107.47-107.47S187.26,20.53,128,20.53Z" />
    <path d="m196.9,173.81c-1.37,0-2.76-.31-4.06-.97l-73.84-37.42V45c0-4.97,4.03-9,9-9s9,4.03,9,9v79.36l63.97,32.42c4.43,2.25,6.21,7.66,3.96,12.1-1.59,3.13-4.75,4.93-8.04,4.93Z" />
  </svg>
);

export default TimeIcon;
