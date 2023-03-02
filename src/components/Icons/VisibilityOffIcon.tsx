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
    <path d="m128,66.5c30.9,0,56,25.1,56,56,0,7.3-1.5,14.1-4,20.5l32.7,32.7c16.9-14.1,30.2-32.3,38.4-53.2-19.4-49.1-67.1-83.9-123.1-83.9-15.7,0-30.7,2.8-44.5,7.8l24.2,24.2c6.2-2.7,13-4.1,20.3-4.1ZM16.1,35.9l25.5,25.5,5.1,5.1c-18.6,14.5-33.1,33.7-41.8,55.9,19.4,49.1,67.1,83.9,123.1,83.9,17.3,0,33.9-3.4,49-9.4l4.7,4.7,32.8,32.7,14.2-14.2L30.3,21.7l-14.2,14.2Zm61.8,61.9l17.3,17.3c-.6,2.3-.9,4.8-.9,7.3,0,18.6,15,33.6,33.6,33.6,2.5,0,4.9-.3,7.3-.9l17.3,17.3c-7.5,3.7-15.8,5.9-24.6,5.9-30.9,0-56-25.1-56-56,.1-8.7,2.3-17,6-24.5Zm48.3-8.7l35.2,35.2.2-1.8c0-18.6-15-33.6-33.6-33.6l-1.8.2Z" />
  </svg>
);

export default ViewColumnIcon;
