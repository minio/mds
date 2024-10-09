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

const TorusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 3.36667C4.59371 3.36667 2.03333 5.69268 2.03333 8.33334C2.03333 10.974 4.59371 13.3 8 13.3C11.4063 13.3 13.9667 10.974 13.9667 8.33334C13.9667 5.69268 11.4063 3.36667 8 3.36667ZM0.633331 8.33334C0.633331 4.71477 4.04249 1.96667 8 1.96667C11.9575 1.96667 15.3667 4.71477 15.3667 8.33334C15.3667 11.9519 11.9575 14.7 8 14.7C4.04249 14.7 0.633331 11.9519 0.633331 8.33334ZM6.97407 6.97297C6.73729 7.13082 6.7 7.27202 6.7 7.33334C6.7 7.39466 6.73729 7.53586 6.97407 7.69371C7.20596 7.84831 7.56663 7.96667 8 7.96667C8.43336 7.96667 8.79403 7.84831 9.02592 7.69371C9.2627 7.53586 9.3 7.39466 9.3 7.33334C9.3 7.27202 9.2627 7.13082 9.02592 6.97297C8.79403 6.81838 8.43336 6.70001 8 6.70001C7.56663 6.70001 7.20596 6.81838 6.97407 6.97297ZM6.19749 5.8081C6.68946 5.48012 7.32879 5.30001 8 5.30001C8.6712 5.30001 9.31053 5.48012 9.8025 5.8081C10.2896 6.13282 10.7 6.65828 10.7 7.33334C10.7 8.0084 10.2896 8.53387 9.8025 8.85859C9.31053 9.18657 8.6712 9.36667 8 9.36667C7.32879 9.36667 6.68946 9.18657 6.19749 8.85859C5.71042 8.53387 5.3 8.0084 5.3 7.33334C5.3 6.65828 5.71042 6.13282 6.19749 5.8081Z"
      fill="currentColor"
    />
  </svg>
);
export default TorusIcon;
