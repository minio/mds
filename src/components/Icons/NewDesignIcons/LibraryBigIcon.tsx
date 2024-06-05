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

const LibraryBigIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.70005 2.69999V13.3H3.96672V2.69999H2.70005ZM2.66672 1.29999C1.91193 1.29999 1.30005 1.91187 1.30005 2.66665V13.3333C1.30005 14.0881 1.91193 14.7 2.66672 14.7H6.66672C7.4215 14.7 8.03338 14.0881 8.03338 13.3333V7.20759L10.4085 13.7715C10.4111 13.7788 10.4139 13.7861 10.4168 13.7933C10.6737 14.4357 11.4486 14.874 12.1828 14.5874L13.442 14.1235L13.46 14.1166C14.1018 13.8599 14.5398 13.0864 14.255 12.3528L10.5916 2.22848C10.589 2.22117 10.5862 2.2139 10.5833 2.20668C10.3264 1.56427 9.55153 1.12598 8.81731 1.41255L7.7332 1.81195C7.48273 1.49982 7.09806 1.29999 6.66672 1.29999H2.66672ZM5.36672 2.69999V13.3H6.63338V2.69999H5.36672ZM8.06542 3.18155L11.715 13.2678L12.9347 12.8184L9.28505 2.73221L8.06542 3.18155ZM9.32669 2.71659C9.32561 2.71702 9.32455 2.71743 9.32349 2.71782L9.32669 2.71659Z"
      fill="currentColor"
    />
  </svg>
);
export default LibraryBigIcon;
