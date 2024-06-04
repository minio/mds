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

const CrossIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.89555 1.22888C6.27687 0.847557 6.79406 0.633331 7.33333 0.633331H8.66666C9.20594 0.633331 9.72312 0.847557 10.1044 1.22888C10.4858 1.6102 10.7 2.12739 10.7 2.66666V5.3H13.3333C13.8726 5.3 14.3898 5.51422 14.7711 5.89555C15.1524 6.27687 15.3667 6.79406 15.3667 7.33333V8.66666C15.3667 9.20594 15.1524 9.72312 14.7711 10.1044C14.3898 10.4858 13.8726 10.7 13.3333 10.7H10.7V13.3333C10.7 13.8726 10.4858 14.3898 10.1044 14.7711C9.72312 15.1524 9.20594 15.3667 8.66666 15.3667H7.33333C6.2134 15.3667 5.3 14.4533 5.3 13.3333V10.7H2.66666C1.54673 10.7 0.633331 9.7866 0.633331 8.66666V7.33333C0.633331 6.79406 0.847557 6.27687 1.22888 5.89555C1.6102 5.51422 2.12739 5.3 2.66666 5.3H5.3V2.66666C5.3 2.12739 5.51422 1.6102 5.89555 1.22888ZM7.33333 2.03333C7.16536 2.03333 7.00427 2.10006 6.8855 2.21883C6.76672 2.3376 6.7 2.49869 6.7 2.66666V6C6.7 6.3866 6.3866 6.7 6 6.7H2.66666C2.49869 6.7 2.3376 6.76672 2.21883 6.8855C2.10006 7.00427 2.03333 7.16536 2.03333 7.33333V8.66666C2.03333 9.0134 2.31993 9.3 2.66666 9.3H6C6.3866 9.3 6.7 9.6134 6.7 10V13.3333C6.7 13.6801 6.9866 13.9667 7.33333 13.9667H8.66666C8.83463 13.9667 8.99572 13.8999 9.1145 13.7812C9.23327 13.6624 9.3 13.5013 9.3 13.3333V10C9.3 9.6134 9.6134 9.3 10 9.3H13.3333C13.5013 9.3 13.6624 9.23327 13.7812 9.1145C13.8999 8.99572 13.9667 8.83463 13.9667 8.66666V7.33333C13.9667 7.16536 13.8999 7.00427 13.7812 6.8855C13.6624 6.76672 13.5013 6.7 13.3333 6.7H10C9.6134 6.7 9.3 6.3866 9.3 6V2.66666C9.3 2.49869 9.23327 2.3376 9.1145 2.21883C8.99573 2.10006 8.83463 2.03333 8.66666 2.03333H7.33333Z"
      fill="currentColor"
    />
  </svg>
);
export default CrossIcon;
