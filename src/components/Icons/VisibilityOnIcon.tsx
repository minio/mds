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

const ViewColumnIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m127.98,44.38c-55.8,0-103.5,34.8-122.9,83.8,19.3,49,67,83.8,122.9,83.8s103.5-34.8,122.9-83.8c-19.4-49-67.1-83.8-122.9-83.8Zm0,139.6c-30.8,0-55.8-25-55.8-55.8s25-55.8,55.8-55.8,55.8,25,55.8,55.8-25,55.8-55.8,55.8Zm0-89.3c-18.5,0-33.5,15-33.5,33.5s15,33.5,33.5,33.5,33.5-15,33.5-33.5-15-33.5-33.5-33.5Z" />
  </svg>
);

export default ViewColumnIcon;
