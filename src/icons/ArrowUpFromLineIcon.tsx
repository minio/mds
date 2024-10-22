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

const ArrowUpFromLineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00003 1.29999C8.18568 1.29999 8.36373 1.37374 8.495 1.50501L12.495 5.50501C12.7684 5.77838 12.7684 6.2216 12.495 6.49496C12.2216 6.76833 11.7784 6.76833 11.5051 6.49496L8.70003 3.68994V11.3333C8.70003 11.7199 8.38663 12.0333 8.00003 12.0333C7.61343 12.0333 7.30003 11.7199 7.30003 11.3333V3.68994L4.495 6.49496C4.22164 6.76833 3.77842 6.76833 3.50505 6.49496C3.23169 6.2216 3.23169 5.77838 3.50505 5.50501L7.50505 1.50501C7.63633 1.37374 7.81438 1.29999 8.00003 1.29999ZM2.63336 14C2.63336 13.6134 2.94676 13.3 3.33336 13.3H12.6667C13.0533 13.3 13.3667 13.6134 13.3667 14C13.3667 14.3866 13.0533 14.7 12.6667 14.7H3.33336C2.94676 14.7 2.63336 14.3866 2.63336 14Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowUpFromLineIcon;
