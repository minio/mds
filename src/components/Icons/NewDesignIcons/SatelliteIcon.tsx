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

const SatelliteIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.50502 1.50507C5.77839 1.23171 6.22161 1.23171 6.49497 1.50507L8.66667 3.67677L8.83836 3.50507C9.11172 3.23171 9.55494 3.23171 9.82831 3.50507L10.6667 4.34343L12.1717 2.83841C12.4451 2.56504 12.8883 2.56504 13.1616 2.83841C13.435 3.11177 13.435 3.55499 13.1616 3.82836L11.6566 5.33338L12.495 6.17174C12.7683 6.44511 12.7683 6.88832 12.495 7.16169L12.3233 7.33338L14.495 9.50507C14.7683 9.77844 14.7683 10.2217 14.495 10.495L11.8283 13.1617C11.5549 13.4351 11.1117 13.4351 10.8384 13.1617L8.66667 10.99L8.49497 11.1617C8.22161 11.4351 7.77839 11.4351 7.50502 11.1617L4.83836 8.49502C4.56499 8.22166 4.56499 7.77844 4.83836 7.50507L5.01005 7.33338L2.83836 5.16169C2.56499 4.88832 2.56499 4.44511 2.83836 4.17174L5.50502 1.50507ZM6.49497 7.82836L6.32328 8.00005L8 9.67677L8.17149 9.50527L11.01 6.66672L10.1721 5.82878C10.172 5.82864 10.1723 5.82892 10.1721 5.82878C10.172 5.82864 10.1714 5.82807 10.1713 5.82793L9.33333 4.99L9.16196 5.16137L6.49497 7.82836ZM7.67672 4.66672L6 6.34343L4.32328 4.66672L6 2.99L7.67672 4.66672ZM11.3333 8.32333L9.65662 10L11.3333 11.6768L13.01 10L11.3333 8.32333ZM1.3 10C1.3 9.61345 1.6134 9.30005 2 9.30005C3.24652 9.30005 4.44198 9.79523 5.3234 10.6766C6.20482 11.5581 6.7 12.7535 6.7 14C6.7 14.3866 6.3866 14.7 6 14.7C5.6134 14.7 5.3 14.3866 5.3 14C5.3 13.1248 4.95232 12.2855 4.33345 11.6666C3.71458 11.0477 2.87521 10.7 2 10.7C1.6134 10.7 1.3 10.3866 1.3 10Z"
      fill="currentColor"
    />
  </svg>
);
export default SatelliteIcon;
