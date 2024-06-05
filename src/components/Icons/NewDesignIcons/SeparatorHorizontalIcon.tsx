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

const SeparatorHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.50507 2.1717C7.77844 1.89833 8.22166 1.89833 8.49502 2.1717L11.1617 4.83837C11.4351 5.11173 11.4351 5.55495 11.1617 5.82832C10.8883 6.10168 10.4451 6.10168 10.1717 5.82832L8.00005 3.65662L5.82836 5.82832C5.55499 6.10168 5.11177 6.10168 4.83841 5.82832C4.56504 5.55495 4.56504 5.11173 4.83841 4.83837L7.50507 2.1717ZM1.30005 8.00001C1.30005 7.61341 1.61345 7.30001 2.00005 7.30001H14C14.3866 7.30001 14.7 7.61341 14.7 8.00001C14.7 8.38661 14.3866 8.70001 14 8.70001H2.00005C1.61345 8.70001 1.30005 8.38661 1.30005 8.00001ZM4.83841 10.1717C5.11177 9.89833 5.55499 9.89833 5.82836 10.1717L8.00005 12.3434L10.1717 10.1717C10.4451 9.89833 10.8883 9.89833 11.1617 10.1717C11.4351 10.4451 11.4351 10.8883 11.1617 11.1616L8.49502 13.8283C8.22166 14.1017 7.77844 14.1017 7.50507 13.8283L4.83841 11.1616C4.56504 10.8883 4.56504 10.4451 4.83841 10.1717Z"
      fill="currentColor"
    />
  </svg>
);
export default SeparatorHorizontalIcon;
