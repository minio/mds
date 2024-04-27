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

const BucketIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M2.66666 5.33333V12.6667C2.66666 13.0203 2.80714 13.3594 3.05719 13.6095C3.30723 13.8595 3.64637 14 3.99999 14H12C12.3536 14 12.6928 13.8595 12.9428 13.6095C13.1929 13.3594 13.3333 13.0203 13.3333 12.6667V5.33333M4.66666 8H11.3333M4.66666 10.6667H11.3333M1.99999 2H14C14.3682 2 14.6667 2.29848 14.6667 2.66667V4.66667C14.6667 5.03486 14.3682 5.33333 14 5.33333H1.99999C1.63181 5.33333 1.33333 5.03486 1.33333 4.66667V2.66667C1.33333 2.29848 1.63181 2 1.99999 2Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BucketIcon;
