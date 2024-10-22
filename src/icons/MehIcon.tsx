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

const MehIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00003 2.03336C4.70473 2.03336 2.03336 4.70473 2.03336 8.00003C2.03336 11.2953 4.70473 13.9667 8.00003 13.9667C11.2953 13.9667 13.9667 11.2953 13.9667 8.00003C13.9667 4.70473 11.2953 2.03336 8.00003 2.03336ZM0.633362 8.00003C0.633362 3.93153 3.93153 0.633362 8.00003 0.633362C12.0685 0.633362 15.3667 3.93153 15.3667 8.00003C15.3667 12.0685 12.0685 15.3667 8.00003 15.3667C3.93153 15.3667 0.633362 12.0685 0.633362 8.00003ZM5.30003 6.00003C5.30003 5.61343 5.61343 5.30003 6.00003 5.30003H6.00669C6.39329 5.30003 6.70669 5.61343 6.70669 6.00003C6.70669 6.38663 6.39329 6.70003 6.00669 6.70003H6.00003C5.61343 6.70003 5.30003 6.38663 5.30003 6.00003ZM9.30003 6.00003C9.30003 5.61343 9.61343 5.30003 10 5.30003H10.0067C10.3933 5.30003 10.7067 5.61343 10.7067 6.00003C10.7067 6.38663 10.3933 6.70003 10.0067 6.70003H10C9.61343 6.70003 9.30003 6.38663 9.30003 6.00003ZM4.63336 10C4.63336 9.61343 4.94676 9.30003 5.33336 9.30003H10.6667C11.0533 9.30003 11.3667 9.61343 11.3667 10C11.3667 10.3866 11.0533 10.7 10.6667 10.7H5.33336C4.94676 10.7 4.63336 10.3866 4.63336 10Z"
      fill="currentColor"
    />
  </svg>
);
export default MehIcon;
