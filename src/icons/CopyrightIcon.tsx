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

const CopyrightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.03333C4.70467 2.03333 2.0333 4.7047 2.0333 8C2.0333 11.2953 4.70467 13.9667 7.99997 13.9667C11.2953 13.9667 13.9666 11.2953 13.9666 8C13.9666 4.7047 11.2953 2.03333 7.99997 2.03333ZM0.633301 8C0.633301 3.9315 3.93147 0.633331 7.99997 0.633331C12.0685 0.633331 15.3666 3.9315 15.3666 8C15.3666 12.0685 12.0685 15.3667 7.99997 15.3667C3.93147 15.3667 0.633301 12.0685 0.633301 8ZM8.38494 6.07096C8.0035 5.99525 7.60818 6.03433 7.24895 6.18324C6.88971 6.33216 6.58269 6.58423 6.36669 6.9076C6.15069 7.23097 6.0354 7.61112 6.0354 8C6.0354 8.38887 6.15069 8.76902 6.36669 9.09239C6.58269 9.41576 6.88971 9.66783 7.24895 9.81675C7.60818 9.96567 8.0035 10.0047 8.38494 9.92904C8.76637 9.85333 9.1168 9.66624 9.39193 9.39141C9.66545 9.1182 10.1087 9.11845 10.3819 9.39196C10.6551 9.66548 10.6549 10.1087 10.3813 10.3819C9.91035 10.8524 9.31046 11.1726 8.65749 11.3022C8.00452 11.4318 7.32779 11.365 6.71283 11.11C6.09787 10.8551 5.57229 10.4236 5.20252 9.87003C4.83276 9.31646 4.6354 8.6657 4.6354 8C4.6354 7.33429 4.83276 6.68353 5.20252 6.12997C5.57229 5.5764 6.09787 5.14489 6.71283 4.88996C7.32779 4.63504 8.00452 4.56815 8.65749 4.69775C9.31046 4.82735 9.91035 5.14762 10.3813 5.61808C10.6549 5.8913 10.6551 6.33451 10.3819 6.60803C10.1087 6.88155 9.66545 6.8818 9.39193 6.60858C9.1168 6.33376 8.76637 6.14667 8.38494 6.07096Z"
      fill="currentColor"
    />
  </svg>
);
export default CopyrightIcon;
