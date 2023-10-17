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

const LoginIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M135.5,105c-9.4-26.8-34.9-45.9-64.9-45.9C32.5,59.1,1.6,90,1.6,128s30.9,68.9,68.9,68.9c30,0,55.5-19.2,64.9-45.9h50v45.9
	h45.9V151h23V105H135.5z M70.6,151c-12.6,0-23-10.3-23-23s10.3-23,23-23s23,10.3,23,23S83.2,151,70.6,151z"
    />
  </svg>
);

export default LoginIcon;
