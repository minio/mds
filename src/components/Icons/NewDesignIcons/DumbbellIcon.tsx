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

const DumbbellIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.495 0.838357C4.76837 1.11172 4.76837 1.55494 4.495 1.82831L1.82834 4.49497C1.55497 4.76834 1.11175 4.76834 0.838387 4.49497C0.56502 4.22161 0.56502 3.77839 0.838387 3.50502L1.67675 2.66666L1.50505 2.49497C1.23169 2.22161 1.23169 1.77839 1.50505 1.50502C1.77842 1.23166 2.22164 1.23166 2.495 1.50502L2.6667 1.67672L3.50505 0.838357C3.77842 0.56499 4.22164 0.56499 4.495 0.838357ZM7.16167 1.50502C7.43504 1.77839 7.43504 2.22161 7.16167 2.49497L5.32331 4.33333L11.6667 10.6767L13.5051 8.83836C13.7784 8.56499 14.2216 8.56499 14.495 8.83836C14.7684 9.11172 14.7684 9.55494 14.495 9.82831L9.82834 14.495C9.55497 14.7683 9.11175 14.7683 8.83839 14.495C8.56502 14.2216 8.56502 13.7784 8.83839 13.505L10.6767 11.6667L4.33336 5.32328L2.495 7.16164C2.22164 7.43501 1.77842 7.43501 1.50505 7.16164C1.23169 6.88827 1.23169 6.44506 1.50505 6.17169L6.17172 1.50502C6.44509 1.23166 6.8883 1.23166 7.16167 1.50502ZM15.1617 11.505C15.435 11.7784 15.435 12.2216 15.1617 12.495L14.3233 13.3333L14.495 13.505C14.7684 13.7784 14.7684 14.2216 14.495 14.495C14.2216 14.7683 13.7784 14.7683 13.5051 14.495L13.3334 14.3233L12.495 15.1616C12.2216 15.435 11.7784 15.435 11.5051 15.1616C11.2317 14.8883 11.2317 14.4451 11.5051 14.1717L14.1717 11.505C14.4451 11.2317 14.8883 11.2317 15.1617 11.505Z"
      fill="currentColor"
    />
  </svg>
);
export default DumbbellIcon;
