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

const Clock1Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2.03333C4.7047 2.03333 2.03333 4.7047 2.03333 8C2.03333 11.2953 4.7047 13.9667 8 13.9667C11.2953 13.9667 13.9667 11.2953 13.9667 8C13.9667 4.7047 11.2953 2.03333 8 2.03333ZM0.633331 8C0.633331 3.9315 3.9315 0.633331 8 0.633331C12.0685 0.633331 15.3667 3.9315 15.3667 8C15.3667 12.0685 12.0685 15.3667 8 15.3667C3.9315 15.3667 0.633331 12.0685 0.633331 8ZM8 3.3C8.3866 3.3 8.7 3.6134 8.7 4V5.55924L9.07307 4.96233C9.27796 4.6345 9.70983 4.53484 10.0377 4.73973C10.3655 4.94463 10.4652 5.37649 10.2603 5.70433L8.5936 8.371C8.42809 8.63581 8.1072 8.75896 7.80702 8.67287C7.50684 8.58678 7.3 8.31227 7.3 8V4C7.3 3.6134 7.6134 3.3 8 3.3Z"
      fill="currentColor"
    />
  </svg>
);
export default Clock1Icon;
