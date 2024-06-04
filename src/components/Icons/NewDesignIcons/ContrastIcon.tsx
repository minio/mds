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

const ContrastIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.03333C4.70467 2.03333 2.0333 4.7047 2.0333 8C2.0333 11.2953 4.70467 13.9667 7.99997 13.9667C11.2953 13.9667 13.9666 11.2953 13.9666 8C13.9666 4.7047 11.2953 2.03333 7.99997 2.03333ZM0.633301 8C0.633301 3.9315 3.93147 0.633331 7.99997 0.633331C12.0685 0.633331 15.3666 3.9315 15.3666 8C15.3666 12.0685 12.0685 15.3667 7.99997 15.3667C3.93147 15.3667 0.633301 12.0685 0.633301 8ZM7.50499 3.50502C7.63627 3.37375 7.81432 3.3 7.99997 3.3C9.24648 3.3 10.4419 3.79518 11.3234 4.6766C12.2048 5.55802 12.7 6.75348 12.7 8C12.7 9.24651 12.2048 10.442 11.3234 11.3234C10.4419 12.2048 9.24648 12.7 7.99997 12.7C7.61337 12.7 7.29997 12.3866 7.29997 12V4C7.29997 3.81435 7.37372 3.6363 7.50499 3.50502ZM8.69997 4.77508V11.2249C9.31394 11.0916 9.88227 10.7846 10.3334 10.3335C10.9523 9.71458 11.3 8.87521 11.3 8C11.3 7.12478 10.9523 6.28542 10.3334 5.66655C9.88227 5.21539 9.31394 4.90836 8.69997 4.77508Z"
      fill="currentColor"
    />
  </svg>
);
export default ContrastIcon;
