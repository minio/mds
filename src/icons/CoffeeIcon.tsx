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

const CoffeeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 0.633331C4.3866 0.633331 4.7 0.946732 4.7 1.33333V2.66666C4.7 3.05326 4.3866 3.36666 4 3.36666C3.6134 3.36666 3.3 3.05326 3.3 2.66666V1.33333C3.3 0.946732 3.6134 0.633331 4 0.633331ZM6.66667 0.633331C7.05327 0.633331 7.36667 0.946732 7.36667 1.33333V2.66666C7.36667 3.05326 7.05327 3.36666 6.66667 3.36666C6.28007 3.36666 5.96667 3.05326 5.96667 2.66666V1.33333C5.96667 0.946732 6.28007 0.633331 6.66667 0.633331ZM9.33334 0.633331C9.71994 0.633331 10.0333 0.946732 10.0333 1.33333V2.66666C10.0333 3.05326 9.71994 3.36666 9.33334 3.36666C8.94674 3.36666 8.63334 3.05326 8.63334 2.66666V1.33333C8.63334 0.946732 8.94674 0.633331 9.33334 0.633331ZM1.3 5.33333C1.3 4.94673 1.6134 4.63333 2 4.63333H12C12.8929 4.63333 13.7492 4.98803 14.3806 5.6194C15.012 6.25078 15.3667 7.1071 15.3667 8C15.3667 8.89289 15.012 9.74922 14.3806 10.3806C13.757 11.0041 12.9141 11.3578 12.0332 11.3665C12.0245 12.2474 11.6708 13.0904 11.0473 13.7139C10.4159 14.3453 9.55957 14.7 8.66667 14.7H4.66667C3.77377 14.7 2.91745 14.3453 2.28608 13.7139C1.6547 13.0826 1.3 12.2262 1.3 11.3333V5.33333ZM12.0333 9.96638C12.5429 9.95776 13.0297 9.7516 13.3906 9.39064C13.7595 9.02182 13.9667 8.52159 13.9667 8C13.9667 7.47841 13.7595 6.97818 13.3906 6.60935C13.0297 6.2484 12.5429 6.04224 12.0333 6.03361V9.96638ZM10.6333 6.03333V11.3333C10.6333 11.8549 10.4261 12.3552 10.0573 12.724C9.68849 13.0928 9.18826 13.3 8.66667 13.3H4.66667C4.14508 13.3 3.64485 13.0928 3.27603 12.724C2.9072 12.3552 2.7 11.8549 2.7 11.3333V6.03333H10.6333Z"
      fill="currentColor"
    />
  </svg>
);
export default CoffeeIcon;
