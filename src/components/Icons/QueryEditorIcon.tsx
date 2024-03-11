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

const QueryEditorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.9,46.3c-6.4,0-11.6,5.2-11.6,11.7v140c0,6.4,5.2,11.7,11.6,11.7h186.2c6.4,0,11.6-5.2,11.6-11.7V58
	c0-6.4-5.2-11.7-11.6-11.7H34.9z M0,58c0-19.3,15.6-35,34.9-35h186.2c19.3,0,34.9,15.7,34.9,35v140c0,19.3-15.6,35-34.9,35H34.9
	C15.6,233,0,217.3,0,198V58z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M46.5,81.3c0-6.4,5.2-11.7,11.6-11.7h0.1c6.4,0,11.6,5.2,11.6,11.7c0,6.4-5.2,11.7-11.6,11.7h-0.1
	C51.8,93,46.5,87.8,46.5,81.3z M93.1,81.3c0-6.4,5.2-11.7,11.6-11.7h0.1c6.4,0,11.6,5.2,11.6,11.7c0,6.4-5.2,11.7-11.6,11.7h-0.1
	C98.3,93,93.1,87.8,93.1,81.3z M139.6,81.3c0-6.4,5.2-11.7,11.6-11.7h0.1c6.4,0,11.6,5.2,11.6,11.7c0,6.4-5.2,11.7-11.6,11.7h-0.1
	C144.8,93,139.6,87.8,139.6,81.3z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M193.3,114.5c-1-0.4-2-0.5-3-0.5c-1,0-2,0.3-3,0.7c-0.9,0.5-1.7,1.1-2.4,1.9c-0.1,0.1-0.1,0.2-0.2,0.2l-5.2,5.2
	l10.3,10.3l5.2-5.2c0.1-0.1,0.2-0.2,0.3-0.3c0.8-0.7,1.4-1.5,1.9-2.4c0.5-0.9,0.7-1.9,0.8-2.9c0-1-0.1-2-0.5-3
	c-0.4-0.9-0.9-1.8-1.6-2.5C195.2,115.4,194.3,114.9,193.3,114.5z M184.2,138l-10.3-10.3l-42.4,42.4l-3.9,14.2l14.2-3.9L184.2,138z
	 M125.2,165.2c-0.5,0.5-0.8,1.1-1,1.8l-6,22c-0.4,1.4,0,2.9,1,3.9c1,1,2.5,1.4,3.9,1l22-6c0.7-0.2,1.3-0.5,1.8-1l53.8-53.8
	c1.6-1.3,2.9-3,3.8-4.8c1-1.9,1.5-4,1.6-6.1c0.1-2.1-0.2-4.3-1-6.2c-0.8-2-1.9-3.8-3.4-5.3c-1.5-1.5-3.3-2.7-5.3-3.5
	c-2-0.8-4.1-1.1-6.2-1s-4.2,0.6-6.1,1.6c-1.9,0.9-3.5,2.2-4.9,3.8L125.2,165.2z"
    />
  </svg>
);

export default QueryEditorIcon;
