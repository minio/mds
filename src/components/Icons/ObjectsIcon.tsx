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

const ObjectsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M128,28.5l-40.4,64H168L128,28.5z M127.3,0c3.7-0.1,7.3,0.7,10.6,2.4c3.3,1.7,6.1,4.2,8.1,7.3l0.1,0.2
	l46.5,74.5c2.1,3.1,3.3,6.8,3.6,10.5c0.3,3.9-0.6,7.8-2.4,11.2c-1.8,3.5-4.5,6.4-7.9,8.4c-3.3,2-7.2,3.1-11.1,3.1h0H81.6
	c-3.8,0.1-7.6-0.7-10.9-2.6c-3.5-1.9-6.4-4.7-8.3-8.1c-2-3.4-3-7.3-2.9-11.2c0.1-3.9,1.3-7.7,3.4-11l46.7-74.2
	c1.8-3.1,4.3-5.6,7.3-7.5C120,1.2,123.6,0.1,127.3,0z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2,168c0-13.9,11.3-25.1,25.2-25.1h63c13.9,0,25.2,11.3,25.2,25.1v62.9c0,13.9-11.3,25.1-25.2,25.1h-63
	C13.3,256,2,244.7,2,230.9V168z M90.1,168h-63v62.9h63V168z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M197.1,168c-17.4,0-31.5,14.1-31.5,31.4c0,17.4,14.1,31.4,31.5,31.4c17.4,0,31.5-14.1,31.5-31.4
	C228.6,182.1,214.5,168,197.1,168z M140.5,199.4c0-31.2,25.4-56.6,56.7-56.6c31.3,0,56.7,25.3,56.7,56.6S228.4,256,197.1,256
	C165.9,256,140.5,230.7,140.5,199.4z"
    />
  </svg>
);

export default ObjectsIcon;
