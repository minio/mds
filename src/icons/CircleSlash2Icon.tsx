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

const CircleSlash2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.03333C4.70467 2.03333 2.0333 4.7047 2.0333 8C2.0333 9.39541 2.51232 10.6789 3.31488 11.6951L11.6951 3.31491C10.6789 2.51235 9.39538 2.03333 7.99997 2.03333ZM12.6906 2.31943C11.4165 1.26619 9.78214 0.633331 7.99997 0.633331C3.93147 0.633331 0.633301 3.9315 0.633301 8C0.633301 9.78217 1.26616 11.4165 2.3194 12.6906L0.838326 14.1717C0.564959 14.4451 0.564959 14.8883 0.838326 15.1616C1.11169 15.435 1.55491 15.435 1.82828 15.1616L3.30935 13.6806C4.58343 14.7338 6.21779 15.3667 7.99997 15.3667C12.0685 15.3667 15.3666 12.0685 15.3666 8C15.3666 6.21782 14.7338 4.58346 13.6805 3.30938L15.1616 1.82831C15.435 1.55494 15.435 1.11172 15.1616 0.838357C14.8882 0.56499 14.445 0.56499 14.1717 0.838357L12.6906 2.31943ZM12.6851 4.30486L4.30483 12.6851C5.32102 13.4876 6.60455 13.9667 7.99997 13.9667C11.2953 13.9667 13.9666 11.2953 13.9666 8C13.9666 6.60458 13.4876 5.32105 12.6851 4.30486Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleSlash2Icon;
