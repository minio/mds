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

const Disc2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.03333C4.70467 2.03333 2.0333 4.7047 2.0333 8C2.0333 11.2953 4.70467 13.9667 7.99997 13.9667C11.2953 13.9667 13.9666 11.2953 13.9666 8C13.9666 4.7047 11.2953 2.03333 7.99997 2.03333ZM0.633301 8C0.633301 3.9315 3.93147 0.633331 7.99997 0.633331C12.0685 0.633331 15.3666 3.9315 15.3666 8C15.3666 12.0685 12.0685 15.3667 7.99997 15.3667C3.93147 15.3667 0.633301 12.0685 0.633301 8ZM7.99997 6.03333C6.91381 6.03333 6.0333 6.91384 6.0333 8C6.0333 9.08616 6.91381 9.96666 7.99997 9.96666C9.08613 9.96666 9.96663 9.08616 9.96663 8C9.96663 6.91384 9.08613 6.03333 7.99997 6.03333ZM4.6333 8C4.6333 6.14064 6.14061 4.63333 7.99997 4.63333C9.85933 4.63333 11.3666 6.14064 11.3666 8C11.3666 9.85936 9.85933 11.3667 7.99997 11.3667C6.14061 11.3667 4.6333 9.85936 4.6333 8ZM7.29997 8C7.29997 7.6134 7.61337 7.3 7.99997 7.3H8.00663C8.39323 7.3 8.70663 7.6134 8.70663 8C8.70663 8.3866 8.39323 8.7 8.00663 8.7H7.99997C7.61337 8.7 7.29997 8.3866 7.29997 8Z"
      fill="currentColor"
    />
  </svg>
);
export default Disc2Icon;
