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

const MessageCirclePlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.05964 2.57973C5.35025 1.63935 6.93429 1.19084 8.52632 1.31504C10.1184 1.43924 11.6137 2.12798 12.7428 3.25713C13.872 4.38629 14.5607 5.88161 14.6849 7.47364C14.8091 9.06567 14.3606 10.6497 13.4202 11.9403C12.4799 13.2309 11.1094 14.1432 9.55593 14.5128C8.10088 14.859 6.57484 14.7077 5.21981 14.0883L1.55805 15.3296C1.30573 15.4151 1.02673 15.35 0.838345 15.1616C0.649957 14.9732 0.584842 14.6942 0.670374 14.4419L1.91165 10.7802C1.29222 9.42513 1.14097 7.89909 1.48714 6.44404C1.85674 4.89053 2.76903 3.52011 4.05964 2.57973ZM8.41744 2.7108C7.15807 2.61256 5.90502 2.96734 4.88409 3.71123C3.86316 4.45511 3.14149 5.53917 2.84913 6.76807C2.55676 7.99696 2.71293 9.28987 3.28949 10.4138C3.37593 10.5823 3.3904 10.7787 3.3296 10.958L2.45148 13.5485L5.04193 12.6704C5.22129 12.6096 5.41764 12.624 5.58615 12.7105C6.71009 13.287 8.003 13.4432 9.2319 13.1508C10.4608 12.8585 11.5449 12.1368 12.2887 11.1159C13.0326 10.0949 13.3874 8.8419 13.2892 7.58253C13.1909 6.32316 12.6461 5.1403 11.7529 4.24708C10.8597 3.35387 9.6768 2.80905 8.41744 2.7108ZM7.99999 4.63331C8.38659 4.63331 8.69999 4.94671 8.69999 5.33331V7.29998H10.6667C11.0533 7.29998 11.3667 7.61338 11.3667 7.99998C11.3667 8.38658 11.0533 8.69998 10.6667 8.69998H8.69999V10.6666C8.69999 11.0532 8.38659 11.3666 7.99999 11.3666C7.61339 11.3666 7.29999 11.0532 7.29999 10.6666V8.69998H5.33332C4.94672 8.69998 4.63332 8.38658 4.63332 7.99998C4.63332 7.61338 4.94672 7.29998 5.33332 7.29998H7.29999V5.33331C7.29999 4.94671 7.61339 4.63331 7.99999 4.63331Z"
      fill="currentColor"
    />
  </svg>
);
export default MessageCirclePlusIcon;
