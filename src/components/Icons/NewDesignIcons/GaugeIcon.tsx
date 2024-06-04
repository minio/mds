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

const GaugeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00003 3.36637C6.95263 3.36637 5.92369 3.64208 5.01663 4.16579C4.10957 4.6895 3.35634 5.44275 2.83267 6.34983C2.30899 7.25692 2.03332 8.28587 2.03336 9.33326C2.0334 10.3807 2.30915 11.4096 2.8329 12.3166C3.02621 12.6514 2.91152 13.0795 2.57673 13.2729C2.24193 13.4662 1.81381 13.3515 1.6205 13.0167C0.973862 11.8968 0.633411 10.6265 0.633362 9.33332C0.633313 8.04016 0.973667 6.76978 1.62021 5.64986C2.26676 4.52995 3.19672 3.59995 4.31661 2.95336C5.43651 2.30677 6.70688 1.96637 8.00003 1.96637C9.29318 1.96637 10.5635 2.30677 11.6834 2.95336C12.8033 3.59995 13.7333 4.52995 14.3798 5.64986C15.0264 6.76978 15.3667 8.04016 15.3667 9.33332C15.3666 10.6265 15.0262 11.8968 14.3796 13.0167C14.1862 13.3515 13.7581 13.4662 13.4233 13.2729C13.0885 13.0795 12.9738 12.6514 13.1672 12.3166C13.6909 11.4096 13.9667 10.3807 13.9667 9.33326C13.9667 8.28587 13.6911 7.25692 13.1674 6.34983C12.6437 5.44275 11.8905 4.6895 10.9834 4.16579C10.0764 3.64208 9.04742 3.36637 8.00003 3.36637ZM11.1617 6.17169C11.435 6.44505 11.435 6.88827 11.1617 7.16164L8.495 9.8283C8.22164 10.1017 7.77842 10.1017 7.50505 9.8283C7.23169 9.55494 7.23169 9.11172 7.50505 8.83835L10.1717 6.17169C10.4451 5.89832 10.8883 5.89832 11.1617 6.17169Z"
      fill="currentColor"
    />
  </svg>
);
export default GaugeIcon;
