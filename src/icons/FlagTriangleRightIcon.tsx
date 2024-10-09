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

const FlagTriangleRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.29869 0.737877C4.50507 0.610332 4.76276 0.598737 4.97976 0.707233L11.6464 4.04057C11.8836 4.15914 12.0334 4.40152 12.0334 4.66667C12.0334 4.93181 11.8836 5.17419 11.6464 5.29276L5.36671 8.43262V14.6667C5.36671 15.0533 5.05331 15.3667 4.66671 15.3667C4.28011 15.3667 3.96671 15.0533 3.96671 14.6667V8.01516C3.9665 8.0054 3.9665 7.99565 3.96671 7.98592V1.33333C3.96671 1.09073 4.09232 0.865421 4.29869 0.737877ZM5.36671 6.86737L9.76813 4.66667L5.36671 2.46596V6.86737Z"
      fill="currentColor"
    />
  </svg>
);
export default FlagTriangleRightIcon;
