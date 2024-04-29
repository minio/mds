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

const SquareStackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M2.66665 6.66668C1.93331 6.66668 1.33331 6.06668 1.33331 5.33334V2.66668C1.33331 1.93334 1.93331 1.33334 2.66665 1.33334H5.33331C6.06665 1.33334 6.66665 1.93334 6.66665 2.66668M6.66665 10.6667C5.93331 10.6667 5.33331 10.0667 5.33331 9.33334V6.66668C5.33331 5.93334 5.93331 5.33334 6.66665 5.33334H9.33331C10.0666 5.33334 10.6666 5.93334 10.6666 6.66668M10.6666 9.33334H13.3333C14.0697 9.33334 14.6666 9.9303 14.6666 10.6667V13.3333C14.6666 14.0697 14.0697 14.6667 13.3333 14.6667H10.6666C9.93027 14.6667 9.33331 14.0697 9.33331 13.3333V10.6667C9.33331 9.9303 9.93027 9.33334 10.6666 9.33334Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SquareStackIcon;
