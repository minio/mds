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

const EuroIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.19791 1.96664L9.19791 1.96668C10.6541 1.96231 12.0593 2.50277 13.1373 3.48183C13.4235 3.74175 13.4448 4.18445 13.1849 4.47063C12.9249 4.75682 12.4822 4.77811 12.196 4.51819C11.3776 3.77485 10.311 3.36418 9.20546 3.36666C8.60688 3.37463 8.01571 3.50021 7.46557 3.73626C6.9144 3.97275 6.41521 4.3155 5.99651 4.74493C5.64712 5.10329 5.35948 5.51615 5.14456 5.96667H10.6667C11.0533 5.96667 11.3667 6.28007 11.3667 6.66667C11.3667 7.05327 11.0533 7.36667 10.6667 7.36667H4.73482C4.709 7.57332 4.69729 7.78194 4.69995 7.99109L4.70006 8.00001H4.70001C4.70001 8.2149 4.71432 8.42632 4.74198 8.63334H8.66667C9.05327 8.63334 9.36667 8.94674 9.36667 9.33334C9.36667 9.71994 9.05327 10.0333 8.66667 10.0333H5.15816C5.89444 11.5746 7.4383 12.6333 9.20001 12.6333C10.3411 12.6333 11.3842 12.1773 12.2111 11.4685C12.5046 11.2169 12.9466 11.2509 13.1982 11.5445C13.4497 11.838 13.4158 12.2799 13.1222 12.5315C12.0825 13.4227 10.7256 14.0333 9.20001 14.0333C6.63416 14.0333 4.4628 12.3525 3.64628 10.0333H2.66667C2.28008 10.0333 1.96667 9.71994 1.96667 9.33334C1.96667 8.94674 2.28008 8.63334 2.66667 8.63334H3.3325C3.31117 8.42646 3.30016 8.21664 3.30001 8.00446C3.29745 7.79113 3.30634 7.57824 3.32651 7.36667H2.66667C2.28008 7.36667 1.96667 7.05327 1.96667 6.66667C1.96667 6.28007 2.28008 5.96667 2.66667 5.96667H3.63287C3.6618 5.88378 3.69259 5.80145 3.72522 5.71976C4.01589 4.99202 4.44706 4.32867 4.99411 3.76759C5.54117 3.20651 6.19339 2.75868 6.91353 2.44969C7.63368 2.1407 8.40763 1.97658 9.1912 1.96673L9.19791 1.96664Z"
      fill="currentColor"
    />
  </svg>
);
export default EuroIcon;
