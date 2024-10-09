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

const BedSingleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66672 3.36666C4.49874 3.36666 4.33765 3.43339 4.21888 3.55216C4.10011 3.67093 4.03338 3.83202 4.03338 3.99999V5.96666H11.9667V3.99999C11.9667 3.83202 11.9 3.67093 11.7812 3.55216C11.6624 3.43339 11.5014 3.36666 11.3334 3.36666H4.66672ZM13.3667 6.09095V3.99999C13.3667 3.46072 13.1525 2.94353 12.7712 2.56221C12.3898 2.18089 11.8727 1.96666 11.3334 1.96666H4.66672C4.12744 1.96666 3.61026 2.18088 3.22893 2.56221C2.84761 2.94353 2.63338 3.46072 2.63338 3.99999V6.09095C2.35875 6.19166 2.10641 6.3514 1.8956 6.56221C1.51427 6.94353 1.30005 7.46072 1.30005 7.99999V13.3333C1.30005 13.7199 1.61345 14.0333 2.00005 14.0333C2.38665 14.0333 2.70005 13.7199 2.70005 13.3333V12.7H13.3V13.3333C13.3 13.7199 13.6135 14.0333 14 14.0333C14.3866 14.0333 14.7 13.7199 14.7 13.3333V7.99999C14.7 7.46072 14.4858 6.94353 14.1045 6.56221C13.8937 6.3514 13.6414 6.19166 13.3667 6.09095ZM13.3 11.3V7.99999C13.3 7.83202 13.2333 7.67093 13.1145 7.55216C12.9958 7.43339 12.8347 7.36666 12.6667 7.36666H3.33338C3.16541 7.36666 3.00432 7.43339 2.88555 7.55216C2.76677 7.67093 2.70005 7.83202 2.70005 7.99999V11.3H13.3Z"
      fill="currentColor"
    />
  </svg>
);
export default BedSingleIcon;
