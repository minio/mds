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

const FormatDriveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m217.35,144.9h24.15v-24.15h-24.15v24.15Zm0-108.67v60.38h24.15v-60.38h-24.15ZM96.6,0C43.23,0,0,43.23,0,96.6s43.23,96.6,96.6,96.6,96.6-43.23,96.6-96.6S149.97,0,96.6,0Zm0,120.75c-13.28,0-24.15-10.87-24.15-24.15s10.87-24.15,24.15-24.15,24.15,10.87,24.15,24.15-10.87,24.15-24.15,24.15Z" />
  </svg>
);

export default FormatDriveIcon;
