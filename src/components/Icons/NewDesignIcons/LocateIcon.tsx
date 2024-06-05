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

const LocateIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 0.633362C8.38657 0.633362 8.69997 0.946762 8.69997 1.33336V2.6786C11.104 2.99176 13.0082 4.89595 13.3214 7.30003H14.6666C15.0532 7.30003 15.3666 7.61343 15.3666 8.00003C15.3666 8.38663 15.0532 8.70003 14.6666 8.70003H13.3214C13.0082 11.1041 11.104 13.0083 8.69997 13.3215V14.6667C8.69997 15.0533 8.38657 15.3667 7.99997 15.3667C7.61337 15.3667 7.29997 15.0533 7.29997 14.6667V13.3215C4.89589 13.0083 2.9917 11.1041 2.67854 8.70003H1.3333C0.946701 8.70003 0.633301 8.38663 0.633301 8.00003C0.633301 7.61343 0.946701 7.30003 1.3333 7.30003H2.67854C2.9917 4.89595 4.89589 2.99176 7.29997 2.6786V1.33336C7.29997 0.946762 7.61337 0.633362 7.99997 0.633362ZM7.99997 4.03336C5.80924 4.03336 4.0333 5.8093 4.0333 8.00003C4.0333 10.1908 5.80924 11.9667 7.99997 11.9667C10.1907 11.9667 11.9666 10.1908 11.9666 8.00003C11.9666 5.8093 10.1907 4.03336 7.99997 4.03336Z"
      fill="currentColor"
    />
  </svg>
);
export default LocateIcon;
