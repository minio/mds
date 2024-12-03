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

const PlotSeriesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M15.94,8.99h-3.97v-1.99h3.97v1.99Z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      d="M4.03,8.99H.06v-1.99h3.97v1.99Z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      d="M8,3.03c-2.74,0-4.97,2.22-4.97,4.97s2.22,4.97,4.97,4.97,4.97-2.22,4.97-4.97-2.22-4.97-4.97-4.97ZM8,10.98c-1.65,0-2.98-1.33-2.98-2.98s1.33-2.98,2.98-2.98,2.98,1.33,2.98,2.98-1.33,2.98-2.98,2.98Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
export default PlotSeriesIcon;
