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

const AntennaIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.97971 0.707233C5.3255 0.880126 5.46566 1.3006 5.29276 1.64638L4.13262 3.96667H5.90071L7.3739 1.02028C7.54679 0.674498 7.96726 0.534341 8.31305 0.707233C8.65883 0.880126 8.79899 1.3006 8.6261 1.64638L7.46596 3.96667H9.23404L10.7072 1.02028C10.8801 0.674498 11.3006 0.534341 11.6464 0.707233C11.9922 0.880126 12.1323 1.3006 11.9594 1.64638L10.7993 3.96667H12.5674L14.0406 1.02028C14.2135 0.674498 14.6339 0.534341 14.9797 0.707233C15.3255 0.880126 15.4657 1.3006 15.2928 1.64638L13.6329 4.96616C13.6287 4.97498 13.6243 4.98369 13.6198 4.9923L11.9594 8.31305C11.7865 8.65883 11.3661 8.79899 11.0203 8.6261C10.6745 8.45321 10.5343 8.03273 10.7072 7.68695L11.8674 5.36667H10.0993L8.6261 8.31305C8.45321 8.65883 8.03273 8.79899 7.68695 8.6261C7.34116 8.45321 7.20101 8.03273 7.3739 7.68695L8.53404 5.36667H6.76596L5.29276 8.31305C5.11987 8.65883 4.6994 8.79899 4.35362 8.6261C4.00783 8.45321 3.86767 8.03273 4.04057 7.68695L5.20071 5.36667H3.43262L1.95943 8.31305C1.78654 8.65883 1.36607 8.79899 1.02028 8.6261C0.674498 8.45321 0.534341 8.03273 0.707233 7.68695L2.36712 4.36718C2.3713 4.35836 2.37566 4.34963 2.3802 4.34102L4.04057 1.02028C4.21346 0.674498 4.63393 0.534341 4.97971 0.707233ZM8 9.96667C8.3866 9.96667 8.7 10.2801 8.7 10.6667V14.6667C8.7 15.0533 8.3866 15.3667 8 15.3667C7.6134 15.3667 7.3 15.0533 7.3 14.6667V10.6667C7.3 10.2801 7.6134 9.96667 8 9.96667Z"
      fill="currentColor"
    />
  </svg>
);
export default AntennaIcon;
