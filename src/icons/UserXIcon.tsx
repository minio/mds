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

const UserXIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.99997 2.70005C4.91381 2.70005 4.0333 3.58056 4.0333 4.66672C4.0333 5.75288 4.91381 6.63338 5.99997 6.63338C7.08613 6.63338 7.96663 5.75288 7.96663 4.66672C7.96663 3.58056 7.08613 2.70005 5.99997 2.70005ZM2.6333 4.66672C2.6333 2.80736 4.14061 1.30005 5.99997 1.30005C7.85933 1.30005 9.36663 2.80736 9.36663 4.66672C9.36663 6.52607 7.85933 8.03338 5.99997 8.03338C4.14061 8.03338 2.6333 6.52607 2.6333 4.66672ZM10.8383 4.83841C11.1117 4.56504 11.5549 4.56504 11.8283 4.83841L13 6.0101L14.1717 4.83841C14.445 4.56504 14.8882 4.56504 15.1616 4.83841C15.435 5.11177 15.435 5.55499 15.1616 5.82836L13.9899 7.00005L15.1616 8.17174C15.435 8.44511 15.435 8.88832 15.1616 9.16169C14.8882 9.43506 14.445 9.43506 14.1717 9.16169L13 7.99L11.8283 9.16169C11.5549 9.43506 11.1117 9.43506 10.8383 9.16169C10.565 8.88832 10.565 8.44511 10.8383 8.17174L12.01 7.00005L10.8383 5.82836C10.565 5.55499 10.565 5.11177 10.8383 4.83841ZM1.61937 10.2861C2.25075 9.65475 3.10707 9.30005 3.99997 9.30005H7.99997C8.89286 9.30005 9.74919 9.65475 10.3806 10.2861C11.0119 10.9175 11.3666 11.7738 11.3666 12.6667V14C11.3666 14.3866 11.0532 14.7 10.6666 14.7C10.28 14.7 9.96663 14.3866 9.96663 14V12.6667C9.96663 12.1451 9.75943 11.6449 9.39061 11.2761C9.02179 10.9073 8.52156 10.7 7.99997 10.7H3.99997C3.47838 10.7 2.97815 10.9073 2.60932 11.2761C2.2405 11.6449 2.0333 12.1451 2.0333 12.6667V14C2.0333 14.3866 1.7199 14.7 1.3333 14.7C0.946701 14.7 0.633301 14.3866 0.633301 14V12.6667C0.633301 11.7738 0.988002 10.9175 1.61937 10.2861Z"
      fill="currentColor"
    />
  </svg>
);
export default UserXIcon;
