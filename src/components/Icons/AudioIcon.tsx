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

const AudioIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <rect x="6" y="70.02" width="67.67" height="125.81" rx="12.39" ry="12.39" />
    <path d="m104.5,68.4L238.61,15.81c6.29,0,11.39,5.1,11.39,11.39,0,0,0,0,0,0v201.6c0,6.29-5.1,11.39-11.39,11.39h0l-134.1-43.83c-8.98-3.41-11.4-5.1-11.4-11.39v-105.18c0-6.29,5.17-8.93,11.39-11.39Z" />
  </svg>
);

export default AudioIcon;
