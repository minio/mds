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

const FileVideoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="m165.77,74.69c-5.68.02-10.32-4.56-10.37-10.24V0H53.92c-14.21-.04-25.79,11.4-25.92,25.61v204.79c.13,14.21,11.71,25.65,25.92,25.61h151.17c14.21.04,25.79-11.4,25.92-25.61V74.69h-65.23Z"
      fill="#2746ae"
    />
    <path
      d="m165.04,74.61h65.96L155.48,0v65.16c.4,5.09,4.46,9.11,9.56,9.46"
      fill="#4463c9"
    />

    <path
      d="m157.63,168.72l-43.7,25.23c-6.1,3.53-13.91,1.44-17.43-4.66-1.12-1.94-1.71-4.14-1.71-6.38v-50.47c0-7.05,5.72-12.76,12.76-12.75,2.24,0,4.44.59,6.37,1.71l43.7,25.23c6.1,3.52,8.2,11.32,4.68,17.42-1.12,1.95-2.74,3.56-4.68,4.68"
      fill="#fff"
    />
  </svg>
);

export default FileVideoIcon;
