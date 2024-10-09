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

const MicVocalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.3333 2.03336C9.87898 2.03336 8.7 3.21235 8.7 4.6667C8.7 6.12105 9.87898 7.30003 11.3333 7.30003C12.7877 7.30003 13.9667 6.12105 13.9667 4.6667C13.9667 3.21234 12.7877 2.03336 11.3333 2.03336ZM7.3 4.6667C7.3 2.43915 9.10578 0.633362 11.3333 0.633362C13.5609 0.633362 15.3667 2.43915 15.3667 4.6667C15.3667 6.89424 13.5609 8.70003 11.3333 8.70003C11.2116 8.70003 11.0911 8.69464 10.9721 8.68408L5.13587 14.5075C4.90595 14.7638 4.62699 14.9715 4.31539 15.1184C3.99641 15.2687 3.65 15.3521 3.29753 15.3633C2.94507 15.3745 2.59405 15.3134 2.26615 15.1836C1.93825 15.0539 1.64042 14.8583 1.39107 14.609C1.14172 14.3596 0.946129 14.0618 0.816383 13.7339C0.686637 13.406 0.625489 13.055 0.636714 12.7025C0.647939 12.35 0.7313 12.0036 0.881648 11.6846C1.02852 11.373 1.23626 11.0941 1.49256 10.8642L7.31595 5.02788C7.30539 4.90889 7.3 4.78842 7.3 4.6667ZM7.76894 6.55598L2.46885 11.8678C2.45817 11.8785 2.44715 11.8888 2.43581 11.8988C2.31473 12.0054 2.21679 12.1356 2.14803 12.2815C2.07926 12.4274 2.04114 12.5859 2.036 12.7471C2.03087 12.9083 2.05884 13.0688 2.11818 13.2188C2.17752 13.3687 2.26698 13.505 2.38102 13.619C2.49507 13.7331 2.63128 13.8225 2.78125 13.8818C2.93122 13.9412 3.09177 13.9692 3.25297 13.964C3.41417 13.9589 3.57261 13.9208 3.7185 13.852C3.86439 13.7832 3.99464 13.6853 4.1012 13.5642C4.11118 13.5529 4.12154 13.5419 4.13224 13.5312L9.44405 8.23109C8.73218 7.85298 8.14705 7.26785 7.76894 6.55598Z"
      fill="currentColor"
    />
  </svg>
);
export default MicVocalIcon;
