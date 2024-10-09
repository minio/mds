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

const CableCarIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.63334 1.33333C8.63334 0.946734 8.94674 0.633333 9.33334 0.633333H9.34C9.7266 0.633333 10.04 0.946734 10.04 1.33333C10.04 1.71993 9.7266 2.03333 9.34 2.03333H9.33334C8.94674 2.03333 8.63334 1.71993 8.63334 1.33333ZM5.96667 2C5.96667 1.6134 6.28007 1.3 6.66667 1.3H6.67334C7.05994 1.3 7.37334 1.6134 7.37334 2C7.37334 2.3866 7.05994 2.7 6.67334 2.7H6.66667C6.28007 2.7 5.96667 2.3866 5.96667 2ZM15.3458 2.49689C15.4395 2.87195 15.2115 3.252 14.8364 3.34577L8.7 4.87988V7.3H11.3333C12.8245 7.3 14.0333 8.50883 14.0333 10V12.6667C14.0333 14.1578 12.8245 15.3667 11.3333 15.3667H4.66667C3.1755 15.3667 1.96667 14.1578 1.96667 12.6667V10C1.96667 8.50883 3.1755 7.3 4.66667 7.3H7.3V5.22988L1.50311 6.6791C1.12806 6.77286 0.748001 6.54483 0.654237 6.16977C0.560473 5.79472 0.788505 5.41466 1.16356 5.3209L7.81499 3.65804C7.82472 3.65538 7.83454 3.65293 7.84444 3.65068L14.4969 1.98757C14.872 1.8938 15.252 2.12183 15.3458 2.49689ZM6.7 8.7V10.6333H9.3V8.7H6.7ZM10.7 8.7V10.6333H12.6333V10C12.6333 9.28203 12.0513 8.7 11.3333 8.7H10.7ZM12.6333 12.0333H3.36667V12.6667C3.36667 13.3846 3.9487 13.9667 4.66667 13.9667H11.3333C12.0513 13.9667 12.6333 13.3846 12.6333 12.6667V12.0333ZM3.36667 10.6333H5.3V8.7H4.66667C3.9487 8.7 3.36667 9.28203 3.36667 10V10.6333Z"
      fill="currentColor"
    />
  </svg>
);
export default CableCarIcon;
