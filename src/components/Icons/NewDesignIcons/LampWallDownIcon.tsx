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

const LampWallDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.96667 1.99999C1.96667 1.61339 2.28008 1.29999 2.66667 1.29999H4.00001C4.53928 1.29999 5.05647 1.51421 5.43779 1.89554C5.81125 2.269 6.02444 2.77277 6.03307 3.29999H8.00001C8.53928 3.29999 9.05647 3.51421 9.43779 3.89554C9.81912 4.27686 10.0333 4.79405 10.0333 5.33332V7.96665H11.3333C11.6134 7.96665 11.8664 8.13353 11.9767 8.39091L13.9767 13.0576C14.0694 13.2739 14.0473 13.5222 13.9177 13.7187C13.7882 13.9151 13.5686 14.0333 13.3333 14.0333H5.33334C5.09804 14.0333 4.87848 13.9151 4.74895 13.7187C4.61942 13.5222 4.59725 13.2739 4.68994 13.0576L6.68994 8.39091C6.80025 8.13353 7.05332 7.96665 7.33334 7.96665H8.63334V5.33332C8.63334 5.16535 8.56662 5.00426 8.44784 4.88549C8.32907 4.76671 8.16798 4.69999 8.00001 4.69999H6.03307C6.02444 5.2272 5.81125 5.73098 5.43779 6.10444C5.05647 6.48576 4.53928 6.69999 4.00001 6.69999H2.66667C2.28008 6.69999 1.96667 6.38659 1.96667 5.99999V1.99999ZM4.63334 3.33332C4.63334 3.16535 4.56662 3.00426 4.44784 2.88549C4.32907 2.76671 4.16798 2.69999 4.00001 2.69999H3.36667V5.29999H4.00001C4.16798 5.29999 4.32907 5.23326 4.44784 5.11449C4.56662 4.99572 4.63334 4.83462 4.63334 4.66665V3.33332ZM7.79492 9.36665L6.39492 12.6333H12.2718L10.8718 9.36665H7.79492Z"
      fill="currentColor"
    />
  </svg>
);
export default LampWallDownIcon;
