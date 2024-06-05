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

const LocateOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838326 0.838387C1.11169 0.56502 1.55491 0.56502 1.82828 0.838387L5.23477 4.24488L15.1616 14.1717C15.435 14.4451 15.435 14.8883 15.1616 15.1617C14.8882 15.435 14.445 15.435 14.1717 15.1617L11.2304 12.2204C10.51 12.7861 9.64857 13.1845 8.69997 13.3178V14.6667C8.69997 15.0533 8.38657 15.3667 7.99997 15.3667C7.61337 15.3667 7.29997 15.0533 7.29997 14.6667V13.3216C4.89389 13.0089 2.99107 11.1061 2.67842 8.70003H1.3333C0.946701 8.70003 0.633301 8.38663 0.633301 8.00003C0.633301 7.61343 0.946701 7.30003 1.3333 7.30003H2.68217C2.81554 6.35142 3.21392 5.49003 3.77955 4.76956L0.838326 1.82834C0.564959 1.55497 0.564959 1.11175 0.838326 0.838387ZM4.77884 5.76886C4.30954 6.41702 4.0333 7.18243 4.0333 8.00003C4.0333 10.1934 5.80657 11.9667 7.99997 11.9667C8.81756 11.9667 9.58298 11.6905 10.2311 11.2211L4.77884 5.76886ZM7.99997 0.633362C8.38657 0.633362 8.69997 0.946762 8.69997 1.33336V2.67848C11.106 2.99114 13.0089 4.89395 13.3215 7.30003H14.6666C15.0532 7.30003 15.3666 7.61343 15.3666 8.00003C15.3666 8.38663 15.0532 8.70003 14.6666 8.70003H13.3193C13.282 8.97498 13.2229 9.2454 13.1435 9.50881C13.0319 9.87895 12.6413 10.0885 12.2712 9.97688C11.901 9.86525 11.6915 9.47471 11.8031 9.10458C11.9104 8.74894 11.9666 8.37699 11.9666 8.00003C11.9666 5.80663 10.1934 4.03336 7.99997 4.03336C7.623 4.03336 7.25106 4.08962 6.89542 4.19688C6.52529 4.30851 6.13474 4.09895 6.02312 3.72881C5.91149 3.35868 6.12105 2.96814 6.49118 2.85651C6.75459 2.77707 7.02501 2.71804 7.29997 2.68071V1.33336C7.29997 0.946762 7.61337 0.633362 7.99997 0.633362Z"
      fill="currentColor"
    />
  </svg>
);
export default LocateOffIcon;
