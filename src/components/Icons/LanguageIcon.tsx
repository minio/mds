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

const LanguageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M127.9,0C57.2,0,0,57.3,0,128s57.2,128,127.9,128c70.8,0,128.1-57.3,128.1-128S198.7,0,127.9,0z M216.6,76.8h-37.8
	c-4.1-16-10-31.4-17.7-45.6C184.7,39.3,204.3,55.7,216.6,76.8z M128,26.1c10.6,15.4,18.9,32.4,24.4,50.7h-48.9
	C109.1,58.5,117.4,41.5,128,26.1z M28.9,153.6c-2-8.2-3.3-16.8-3.3-25.6s1.3-17.4,3.3-25.6h43.3c-1,8.4-1.8,16.9-1.8,25.6
	s0.8,17.2,1.8,25.6H28.9z M39.4,179.2h37.8c4.1,16,10,31.4,17.7,45.6C71.3,216.7,51.7,200.4,39.4,179.2z M77.2,76.8H39.4
	c12.3-21.2,31.9-37.5,55.4-45.6C87.2,45.4,81.3,60.8,77.2,76.8z M128,229.9c-10.6-15.4-18.9-32.4-24.4-50.7h48.9
	C146.9,197.5,138.6,214.5,128,229.9z M158,153.6H98c-1.2-8.4-2-16.9-2-25.6s0.9-17.3,2-25.6H158c1.2,8.3,2,16.9,2,25.6
	S159.1,145.2,158,153.6z M161.2,224.8c7.7-14.2,13.6-29.6,17.7-45.6h37.8C204.3,200.3,184.7,216.7,161.2,224.8z M183.8,153.6
	c1-8.4,1.8-16.9,1.8-25.6s-0.8-17.2-1.8-25.6h43.3c2,8.2,3.3,16.8,3.3,25.6s-1.3,17.4-3.3,25.6H183.8z"
    />
  </svg>
);

export default LanguageIcon;
