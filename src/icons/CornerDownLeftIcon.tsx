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

const CornerDownLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.3333 1.96666C13.7199 1.96666 14.0333 2.28006 14.0333 2.66666V7.33333C14.0333 8.22622 13.6786 9.08255 13.0473 9.71392C12.4159 10.3453 11.5596 10.7 10.6667 10.7H4.35662L6.49498 12.8384C6.76835 13.1117 6.76835 13.5549 6.49498 13.8283C6.22162 14.1017 5.7784 14.1017 5.50503 13.8283L2.1717 10.495C1.89833 10.2216 1.89833 9.77839 2.1717 9.50502L5.50503 6.17168C5.7784 5.89832 6.22162 5.89832 6.49498 6.17168C6.76835 6.44505 6.76835 6.88827 6.49498 7.16163L4.35662 9.29999H10.6667C11.1883 9.29999 11.6885 9.09279 12.0573 8.72397C12.4261 8.35515 12.6333 7.85492 12.6333 7.33333V2.66666C12.6333 2.28006 12.9467 1.96666 13.3333 1.96666Z"
      fill="currentColor"
    />
  </svg>
);
export default CornerDownLeftIcon;
