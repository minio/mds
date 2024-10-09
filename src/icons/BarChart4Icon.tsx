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

const BarChart4Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.99999 1.3C2.38659 1.3 2.69999 1.6134 2.69999 2V13.3H14C14.3866 13.3 14.7 13.6134 14.7 14C14.7 14.3866 14.3866 14.7 14 14.7H1.99999C1.61339 14.7 1.29999 14.3866 1.29999 14V2C1.29999 1.6134 1.61339 1.3 1.99999 1.3ZM12 2.63334C12.3866 2.63334 12.7 2.94674 12.7 3.33334V11.3333C12.7 11.7199 12.3866 12.0333 12 12.0333C11.6134 12.0333 11.3 11.7199 11.3 11.3333V3.33334C11.3 2.94674 11.6134 2.63334 12 2.63334ZM8.66665 5.3C9.05325 5.3 9.36665 5.6134 9.36665 6V11.3333C9.36665 11.7199 9.05325 12.0333 8.66665 12.0333C8.28006 12.0333 7.96665 11.7199 7.96665 11.3333V6C7.96665 5.6134 8.28006 5.3 8.66665 5.3ZM5.33332 8.63334C5.71992 8.63334 6.03332 8.94674 6.03332 9.33334V11.3333C6.03332 11.7199 5.71992 12.0333 5.33332 12.0333C4.94672 12.0333 4.63332 11.7199 4.63332 11.3333V9.33334C4.63332 8.94674 4.94672 8.63334 5.33332 8.63334Z"
      fill="currentColor"
    />
  </svg>
);
export default BarChart4Icon;
