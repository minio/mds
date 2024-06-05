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

const ALargeSmallIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 3.96667C5.26514 3.96667 5.50753 4.11648 5.6261 4.35363L7.6198 8.34102C7.62434 8.34964 7.6287 8.35837 7.63289 8.3672L8.6261 10.3536C8.799 10.6994 8.65884 11.1199 8.31305 11.2928C7.96727 11.4657 7.5468 11.3255 7.37391 10.9797L6.56738 9.36667H3.43263L2.6261 10.9797C2.45321 11.3255 2.03274 11.4657 1.68695 11.2928C1.34117 11.1199 1.20101 10.6994 1.3739 10.3536L2.36712 8.36719C2.3713 8.35837 2.37567 8.34964 2.3802 8.34103L4.3739 4.35363C4.49248 4.11648 4.73486 3.96667 5 3.96667ZM4.13263 7.96667H5.86738L5 6.23192L4.13263 7.96667ZM12.3333 7.36667C12.077 7.36667 11.8311 7.46852 11.6498 7.64981C11.4685 7.83109 11.3667 8.07697 11.3667 8.33334V8.63334H13.3V8.33334C13.3 8.07697 13.1982 7.83109 13.0169 7.64981C12.8356 7.46852 12.5897 7.36667 12.3333 7.36667ZM14.7 8.33334C14.7 7.70566 14.4507 7.10369 14.0068 6.65986C13.563 6.21602 12.961 5.96667 12.3333 5.96667C11.7057 5.96667 11.1037 6.21602 10.6599 6.65986C10.216 7.10369 9.96667 7.70566 9.96667 8.33334V10.6667C9.96667 11.0533 10.2801 11.3667 10.6667 11.3667C11.0533 11.3667 11.3667 11.0533 11.3667 10.6667V10.0333H13.3V10.6667C13.3 11.0533 13.6134 11.3667 14 11.3667C14.3866 11.3667 14.7 11.0533 14.7 10.6667V8.33334Z"
      fill="currentColor"
    />
  </svg>
);
export default ALargeSmallIcon;
