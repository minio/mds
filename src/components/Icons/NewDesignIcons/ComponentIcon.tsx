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

const ComponentIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.50505 0.838357C7.77842 0.56499 8.22164 0.56499 8.495 0.838357L10.8283 3.17169C11.1017 3.44506 11.1017 3.88827 10.8283 4.16164L8.495 6.49497C8.22164 6.76834 7.77842 6.76834 7.50505 6.49497L5.17172 4.16164C4.89835 3.88827 4.89835 3.44506 5.17172 3.17169L7.50505 0.838357ZM6.65664 3.66666L8.00003 5.01005L9.34341 3.66666L8.00003 2.32328L6.65664 3.66666ZM3.17172 5.17169C3.44509 4.89832 3.8883 4.89832 4.16167 5.17169L6.495 7.50502C6.76837 7.77839 6.76837 8.22161 6.495 8.49497L4.16167 10.8283C3.8883 11.1017 3.44509 11.1017 3.17172 10.8283L0.838387 8.49497C0.56502 8.22161 0.56502 7.77839 0.838387 7.50502L3.17172 5.17169ZM11.8384 5.17169C12.1118 4.89832 12.555 4.89832 12.8283 5.17169L15.1617 7.50502C15.435 7.77839 15.435 8.22161 15.1617 8.49497L12.8283 10.8283C12.555 11.1017 12.1118 11.1017 11.8384 10.8283L9.50505 8.49497C9.23169 8.22161 9.23169 7.77839 9.50505 7.50502L11.8384 5.17169ZM2.32331 8L3.66669 9.34338L5.01008 8L3.66669 6.65661L2.32331 8ZM10.99 8L12.3334 9.34338L13.6767 8L12.3334 6.65661L10.99 8ZM6.65664 12.3333L8.00003 13.6767L9.34341 12.3333L8.00003 10.9899L6.65664 12.3333ZM7.50505 9.50502C7.77842 9.23166 8.22164 9.23166 8.495 9.50502L10.8283 11.8384C11.1017 12.1117 11.1017 12.5549 10.8283 12.8283L8.495 15.1616C8.22164 15.435 7.77842 15.435 7.50505 15.1616L5.17172 12.8283C4.89835 12.5549 4.89835 12.1117 5.17172 11.8384L7.50505 9.50502Z"
      fill="currentColor"
    />
  </svg>
);
export default ComponentIcon;
