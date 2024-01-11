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

const LightModeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={"min-icon"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M113.8,241.7v-27c0-7.7,6.2-13.9,13.9-13.9c7.7,0,13.9,6.2,13.9,13.9l0,0v27c0,7.7-6.2,13.9-13.9,13.9
	C120,255.6,113.8,249.4,113.8,241.7L113.8,241.7z M198.3,218.2l-19.1-19.1c-5.4-5.4-5.4-14.2,0-19.6c5.4-5.4,14.2-5.4,19.6,0
	l19.1,19.1c5.4,5.4,5.4,14.2,0,19.6C212.4,223.6,203.7,223.6,198.3,218.2L198.3,218.2L198.3,218.2z M37.4,218.2
	c-5.4-5.4-5.4-14.2,0-19.6l19.1-19.1c5.4-5.4,14.2-5.4,19.6,0s5.4,14.2,0,19.6l0,0L57,218.2C51.6,223.6,42.8,223.6,37.4,218.2
	L37.4,218.2z M72.1,128c0-29.9,24.3-54.1,54.1-54.1c6,0,11.9,1,17.5,2.9c28.2,8.9,43.9,39,35,67.3c-5.3,16.7-18.4,29.8-35.1,35
	c-28.3,9.7-59-5.4-68.7-33.7C73.1,139.9,72.1,134,72.1,128L72.1,128z M214.4,142.6c-8.1,0-14.6-6.6-14.6-14.6s6.6-14.6,14.6-14.6
	l0,0h27c8.1,0,14.6,6.6,14.6,14.6s-6.6,14.6-14.6,14.6H214.4z M13.9,141.9c-7.7,0.1-13.9-6.1-14-13.7c-0.1-7.7,6.1-13.9,13.7-14
	c0.1,0,0.2,0,0.2,0h27c7.7-0.1,13.9,6.1,14,13.7s-6.1,13.9-13.7,14c-0.1,0-0.2,0-0.2,0H13.9z M179.1,76.5c-5.4-5.4-5.4-14.2,0-19.6
	l19.1-19.1c5.4-5.4,14.2-5.4,19.6,0c5.4,5.4,5.4,14.2,0,19.6l-19.1,19.1C193.3,81.9,184.6,81.9,179.1,76.5L179.1,76.5z M56.5,76.5
	L37.4,57.4c-5.4-5.4-5.4-14.2,0-19.6s14.2-5.4,19.6,0l19.1,19.1c5.4,5.4,5.4,14.2,0,19.6c-2.6,2.6-6.1,4.1-9.8,4.1
	C62.6,80.5,59.1,79.1,56.5,76.5z M113.8,41.3v-27c0-7.7,6.2-13.9,13.9-13.9c7.7,0,13.9,6.2,13.9,13.9v27c0,7.7-6.2,13.9-13.9,13.9
	C120,55.2,113.8,48.9,113.8,41.3z"
      fill={"currentcolor"}
    />
  </svg>
);

export default LightModeIcon;
