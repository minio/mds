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

const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.99999 0.633301C8.26642 0.633301 8.50975 0.784551 8.62768 1.02346L10.525 4.86716L14.7679 5.48733C15.0315 5.52586 15.2504 5.71066 15.3325 5.96406C15.4147 6.21747 15.3459 6.49555 15.1551 6.68142L12.0855 9.67119L12.8099 13.895C12.855 14.1576 12.747 14.423 12.5314 14.5796C12.3158 14.7362 12.03 14.7569 11.7942 14.6329L7.99999 12.6375L4.2058 14.6329C3.96996 14.7569 3.68416 14.7362 3.46857 14.5796C3.25299 14.423 3.14502 14.1576 3.19006 13.895L3.91449 9.67119L0.844908 6.68142C0.654076 6.49555 0.585285 6.21747 0.667449 5.96406C0.749613 5.71066 0.968489 5.52586 1.23208 5.48733L5.475 4.86716L7.37229 1.02346C7.49022 0.784551 7.73355 0.633301 7.99999 0.633301ZM7.99999 2.91478L6.56768 5.81647C6.4658 6.02286 6.26898 6.16599 6.04123 6.19927L2.83721 6.66759L5.15507 8.92518C5.32018 9.086 5.39554 9.31779 5.35658 9.54496L4.80971 12.7335L7.67417 11.2271C7.87814 11.1198 8.12184 11.1198 8.3258 11.2271L11.1903 12.7335L10.6434 9.54496C10.6044 9.31779 10.6798 9.086 10.8449 8.92518L13.1628 6.66759L9.95875 6.19927C9.731 6.16599 9.53417 6.02286 9.43229 5.81647L7.99999 2.91478Z"
      fill="currentColor"
    />
  </svg>
);
export default StarIcon;
