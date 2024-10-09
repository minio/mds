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

const BatteryIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66663 5.36666C2.31685 5.36666 2.0333 5.65021 2.0333 5.99999V9.99999C2.0333 10.3498 2.31685 10.6333 2.66663 10.6333H10.6666C11.0164 10.6333 11.3 10.3498 11.3 9.99999V5.99999C11.3 5.65021 11.0164 5.36666 10.6666 5.36666H2.66663ZM0.633301 5.99999C0.633301 4.87701 1.54366 3.96666 2.66663 3.96666H10.6666C11.7896 3.96666 12.7 4.87701 12.7 5.99999V9.99999C12.7 11.123 11.7896 12.0333 10.6666 12.0333H2.66663C1.54366 12.0333 0.633301 11.123 0.633301 9.99999V5.99999ZM14.6666 6.63333C15.0532 6.63333 15.3666 6.94673 15.3666 7.33333V8.66666C15.3666 9.05326 15.0532 9.36666 14.6666 9.36666C14.28 9.36666 13.9666 9.05326 13.9666 8.66666V7.33333C13.9666 6.94673 14.28 6.63333 14.6666 6.63333Z"
      fill="currentColor"
    />
  </svg>
);
export default BatteryIcon;
