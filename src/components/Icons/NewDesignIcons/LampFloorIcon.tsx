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

const LampFloorIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.35659 1.05762C5.46689 0.80024 5.71997 0.633362 5.99999 0.633362H9.99999C10.28 0.633362 10.5331 0.80024 10.6434 1.05762L12.6434 5.72428C12.7361 5.94056 12.7139 6.18893 12.5844 6.38537C12.4548 6.58181 12.2353 6.70003 12 6.70003H8.69999V13.9667H9.99999C10.3866 13.9667 10.7 14.2801 10.7 14.6667C10.7 15.0533 10.3866 15.3667 9.99999 15.3667H5.99999C5.61339 15.3667 5.29999 15.0533 5.29999 14.6667C5.29999 14.2801 5.61339 13.9667 5.99999 13.9667H7.29999V6.70003H3.99999C3.76469 6.70003 3.54513 6.58181 3.4156 6.38537C3.28607 6.18893 3.2639 5.94056 3.35659 5.72428L5.35659 1.05762ZM10.9384 5.30003L9.53841 2.03336H6.46157L5.06157 5.30003H10.9384Z"
      fill="currentColor"
    />
  </svg>
);
export default LampFloorIcon;
