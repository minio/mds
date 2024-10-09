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

const LaptopIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.99999 2.79999C2.78496 2.79999 1.79999 3.78496 1.79999 4.99999V10.3864L1.0553 12.6205C0.796285 13.3976 1.37465 14.2 2.19372 14.2H13.8063C14.6254 14.2 15.2037 13.3976 14.9447 12.6205L14.2 10.3863V4.99999C14.2 3.78496 13.215 2.79999 12 2.79999H3.99999ZM12.9955 11.2H3.00454L2.4712 12.8H13.5288L12.9955 11.2ZM12.8 9.79999V4.99999C12.8 4.55816 12.4418 4.19999 12 4.19999H3.99999C3.55816 4.19999 3.19999 4.55816 3.19999 4.99999V9.79999H12.8Z"
      fill="currentColor"
    />
  </svg>
);
export default LaptopIcon;
