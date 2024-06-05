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

const LaughIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.03336C4.70467 2.03336 2.0333 4.70473 2.0333 8.00003C2.0333 11.2953 4.70467 13.9667 7.99997 13.9667C11.2953 13.9667 13.9666 11.2953 13.9666 8.00003C13.9666 4.70473 11.2953 2.03336 7.99997 2.03336ZM0.633301 8.00003C0.633301 3.93153 3.93147 0.633362 7.99997 0.633362C12.0685 0.633362 15.3666 3.93153 15.3666 8.00003C15.3666 12.0685 12.0685 15.3667 7.99997 15.3667C3.93147 15.3667 0.633301 12.0685 0.633301 8.00003ZM5.29997 6.00003C5.29997 5.61343 5.61337 5.30003 5.99997 5.30003H6.00663C6.39323 5.30003 6.70663 5.61343 6.70663 6.00003C6.70663 6.38663 6.39323 6.70003 6.00663 6.70003H5.99997C5.61337 6.70003 5.29997 6.38663 5.29997 6.00003ZM9.29997 6.00003C9.29997 5.61343 9.61337 5.30003 9.99997 5.30003H10.0066C10.3932 5.30003 10.7066 5.61343 10.7066 6.00003C10.7066 6.38663 10.3932 6.70003 10.0066 6.70003H9.99997C9.61337 6.70003 9.29997 6.38663 9.29997 6.00003ZM3.46536 8.21482C3.59836 8.05746 3.79393 7.96669 3.99997 7.96669H12C12.206 7.96669 12.4016 8.05746 12.5346 8.21482C12.6676 8.37218 12.7245 8.58014 12.6902 8.78329C12.5033 9.88969 11.9267 10.8927 11.0647 11.6111C10.2052 12.3273 9.11849 12.7134 7.99997 12.7001C6.88144 12.7134 5.79472 12.3273 4.93522 11.6111C4.07322 10.8927 3.49665 9.88969 3.30975 8.78329C3.27543 8.58014 3.33235 8.37218 3.46536 8.21482ZM4.9402 9.36669C5.14416 9.8151 5.44748 10.2156 5.83148 10.5355C6.43671 11.0399 7.20242 11.3111 7.99019 11.3001H8.00975C8.79751 11.3111 9.56322 11.0399 10.1685 10.5355C10.5524 10.2156 10.8558 9.8151 11.0597 9.36669H4.9402Z"
      fill="currentColor"
    />
  </svg>
);
export default LaughIcon;
