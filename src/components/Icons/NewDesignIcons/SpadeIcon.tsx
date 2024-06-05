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

const SpadeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.50505 0.838326C7.77842 0.564959 8.22164 0.564959 8.495 0.838326L13.1617 5.50499C14.1513 6.49462 15.3667 7.8143 15.3667 9.66663C15.3667 10.2401 15.2537 10.8079 15.0343 11.3377C14.8149 11.8675 14.4932 12.3489 14.0877 12.7543C13.6822 13.1598 13.2009 13.4815 12.6711 13.7009C12.1413 13.9204 11.5735 14.0333 11 14.0333C10.3316 14.0333 9.73022 13.9399 9.14386 13.6827C8.99224 13.6162 8.84476 13.5401 8.70003 13.4544V14.6666C8.70003 15.0532 8.38663 15.3666 8.00003 15.3666C7.61343 15.3666 7.30003 15.0532 7.30003 14.6666V13.4544C7.1553 13.5401 7.00781 13.6162 6.85619 13.6827C6.26983 13.9399 5.66847 14.0333 5.00003 14.0333C3.84192 14.0333 2.73124 13.5732 1.91233 12.7543C1.50685 12.3489 1.1852 11.8675 0.965754 11.3377C0.746309 10.8079 0.633362 10.2401 0.633362 9.66663C0.633362 7.8143 1.84876 6.49462 2.83839 5.50499L7.50505 0.838326ZM8.00003 2.32325L3.82834 6.49494C2.81797 7.50531 2.03336 8.4523 2.03336 9.66663C2.03336 10.0562 2.1101 10.442 2.25919 10.8019C2.40827 11.1619 2.6268 11.4889 2.90228 11.7644C3.45864 12.3207 4.21322 12.6333 5.00003 12.6333C5.53158 12.6333 5.93022 12.5601 6.29386 12.4006C6.66267 12.2388 7.04222 11.9678 7.50505 11.505C7.77842 11.2316 8.22164 11.2316 8.495 11.505C8.95784 11.9678 9.33738 12.2388 9.70619 12.4006C10.0698 12.5601 10.4685 12.6333 11 12.6333C11.3896 12.6333 11.7754 12.5566 12.1353 12.4075C12.4953 12.2584 12.8223 12.0399 13.0978 11.7644C13.3733 11.4889 13.5918 11.1619 13.7409 10.8019C13.89 10.442 13.9667 10.0562 13.9667 9.66663C13.9667 8.4523 13.1821 7.50531 12.1717 6.49494L8.00003 2.32325Z"
      fill="currentColor"
    />
  </svg>
);
export default SpadeIcon;
