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

const MartiniIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.6959 1.71074C2.8094 1.46062 3.05868 1.29999 3.33334 1.29999H12.6667C12.9413 1.29999 13.1906 1.46062 13.3041 1.71074C13.4176 1.96085 13.3743 2.25424 13.1935 2.46094L8.70001 7.59634V13.9667H10.6667C11.0533 13.9667 11.3667 14.2801 11.3667 14.6667C11.3667 15.0533 11.0533 15.3667 10.6667 15.3667H5.33334C4.94674 15.3667 4.63334 15.0533 4.63334 14.6667C4.63334 14.2801 4.94674 13.9667 5.33334 13.9667H7.30001V7.59634L2.80654 2.46094C2.62567 2.25424 2.5824 1.96085 2.6959 1.71074ZM8.00001 6.27031L11.124 2.69999H4.87598L8.00001 6.27031Z"
      fill="currentColor"
    />
  </svg>
);
export default MartiniIcon;
