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

const BanIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.31494 4.30486C2.51238 5.32105 2.03336 6.60458 2.03336 8C2.03336 11.2953 4.70473 13.9667 8.00003 13.9667C9.39544 13.9667 10.679 13.4876 11.6952 12.6851L3.31494 4.30486ZM2.64901 2.93693C1.3996 4.25695 0.633362 6.03899 0.633362 8C0.633362 12.0685 3.93153 15.3667 8.00003 15.3667C9.96104 15.3667 11.7431 14.6004 13.0631 13.351C13.1225 13.3193 13.1783 13.2784 13.2283 13.2283C13.2784 13.1782 13.3193 13.1225 13.351 13.0631C14.6005 11.743 15.3667 9.96101 15.3667 8C15.3667 3.9315 12.0685 0.633331 8.00003 0.633331C6.03902 0.633331 4.25698 1.39957 2.93696 2.64898C2.87757 2.68071 2.8218 2.72161 2.77172 2.77169C2.72164 2.82177 2.68074 2.87754 2.64901 2.93693ZM4.30489 3.31491L12.6851 11.6951C13.4877 10.6789 13.9667 9.39541 13.9667 8C13.9667 4.7047 11.2953 2.03333 8.00003 2.03333C6.60461 2.03333 5.32108 2.51235 4.30489 3.31491Z"
      fill="currentColor"
    />
  </svg>
);
export default BanIcon;
