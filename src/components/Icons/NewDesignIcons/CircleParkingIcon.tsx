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

const CircleParkingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.03333C4.70467 2.03333 2.0333 4.7047 2.0333 8C2.0333 11.2953 4.70467 13.9667 7.99997 13.9667C11.2953 13.9667 13.9666 11.2953 13.9666 8C13.9666 4.7047 11.2953 2.03333 7.99997 2.03333ZM0.633301 8C0.633301 3.9315 3.93147 0.633331 7.99997 0.633331C12.0685 0.633331 15.3666 3.9315 15.3666 8C15.3666 12.0685 12.0685 15.3667 7.99997 15.3667C3.93147 15.3667 0.633301 12.0685 0.633301 8ZM5.29997 4.66666C5.29997 4.28006 5.61337 3.96666 5.99997 3.96666H8.66663C9.38272 3.96666 10.0695 4.25113 10.5758 4.75748C11.0822 5.26382 11.3666 5.95058 11.3666 6.66666C11.3666 7.38275 11.0822 8.0695 10.5758 8.57585C10.0695 9.0822 9.38272 9.36666 8.66663 9.36666H6.69997V11.3333C6.69997 11.7199 6.38657 12.0333 5.99997 12.0333C5.61337 12.0333 5.29997 11.7199 5.29997 11.3333V4.66666ZM6.69997 7.96666H8.66663C9.01142 7.96666 9.34208 7.8297 9.58587 7.5859C9.82967 7.34211 9.96663 7.01145 9.96663 6.66666C9.96663 6.32188 9.82967 5.99122 9.58587 5.74743C9.34208 5.50363 9.01142 5.36666 8.66663 5.36666H6.69997V7.96666Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleParkingIcon;
