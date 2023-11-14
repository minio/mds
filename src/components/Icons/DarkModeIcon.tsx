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

const DarkModeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={"min-icon"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="m130.3,2.55C61.02,1.05,3.64,56,2.14,125.29c-1.5,69.28,53.45,126.66,122.74,128.16,69.28,1.5,126.66-53.45,128.16-122.74.26-11.86-1.17-23.7-4.24-35.16-6.83,6.56-14.16,12.59-21.91,18.04-15.04,10.85-32.05,18.68-50.08,23.04-16.84,5.8-35.48,2.56-49.37-8.59-11.15-13.89-14.39-32.53-8.59-49.37,4.37-18.02,12.2-35.03,23.04-50.08,5.45-7.75,11.48-15.07,18.04-21.91-9.68-2.54-19.62-3.93-29.62-4.12Zm68.21,196.64c15.14-15.08,25.06-34.62,28.29-55.75-44.55,25.69-91.32,28.22-117.09,2.44-25.78-25.78-23.24-72.54,2.44-117.09-54.84,8.54-92.37,59.91-83.83,114.75,8.54,54.84,59.91,92.37,114.75,83.83,20.99-3.27,40.41-13.11,55.46-28.11l-.02-.07Z"
      fill={"currentcolor"}
      style={{
        fillRule: "evenodd",
        strokeWidth: 0,
      }}
    />
  </svg>
);

export default DarkModeIcon;
