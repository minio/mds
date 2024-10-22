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

const ArrowUpFromDotIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.50505 0.838357C7.77842 0.56499 8.22164 0.56499 8.495 0.838357L13.1617 5.50502C13.435 5.77839 13.435 6.22161 13.1617 6.49497C12.8883 6.76834 12.4451 6.76834 12.1717 6.49497L8.70003 3.02328V10.6667C8.70003 11.0533 8.38663 11.3667 8.00003 11.3667C7.61343 11.3667 7.30003 11.0533 7.30003 10.6667V3.02328L3.82834 6.49497C3.55497 6.76834 3.11175 6.76834 2.83839 6.49497C2.56502 6.22161 2.56502 5.77839 2.83839 5.50502L7.50505 0.838357ZM8.00003 14.0333C8.01844 14.0333 8.03336 14.0184 8.03336 14C8.03336 13.9816 8.01844 13.9667 8.00003 13.9667C7.98162 13.9667 7.96669 13.9816 7.96669 14C7.96669 14.0184 7.98162 14.0333 8.00003 14.0333ZM6.63336 14C6.63336 13.2452 7.24524 12.6333 8.00003 12.6333C8.75482 12.6333 9.36669 13.2452 9.36669 14C9.36669 14.7548 8.75482 15.3667 8.00003 15.3667C7.24524 15.3667 6.63336 14.7548 6.63336 14Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowUpFromDotIcon;
