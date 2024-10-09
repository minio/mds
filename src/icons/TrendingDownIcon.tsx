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

const TrendingDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838326 4.1717C1.11169 3.89833 1.55491 3.89833 1.82828 4.1717L5.66663 8.01006L8.50499 5.1717C8.77836 4.89833 9.22157 4.89833 9.49494 5.1717L13.9666 9.64339V7.33334C13.9666 6.94674 14.28 6.63334 14.6666 6.63334C15.0532 6.63334 15.3666 6.94674 15.3666 7.33334V11.3333C15.3666 11.7199 15.0532 12.0333 14.6666 12.0333H10.6666C10.28 12.0333 9.96663 11.7199 9.96663 11.3333C9.96663 10.9467 10.28 10.6333 10.6666 10.6333H12.9767L8.99997 6.65662L6.16161 9.49498C5.88824 9.76835 5.44503 9.76835 5.17166 9.49498L0.838326 5.16165C0.564959 4.88828 0.564959 4.44507 0.838326 4.1717Z"
      fill="currentColor"
    />
  </svg>
);
export default TrendingDownIcon;
