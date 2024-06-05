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

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.57023 0.780815C7.82301 0.584211 8.17697 0.584211 8.42975 0.780815L14.4297 5.44748C14.6003 5.5801 14.7 5.78401 14.7 6.00003V13.3334C14.7 13.8726 14.4858 14.3898 14.1044 14.7711C13.7231 15.1525 13.2059 15.3667 12.6667 15.3667H3.33332C2.79405 15.3667 2.27686 15.1525 1.89554 14.7711C1.51421 14.3898 1.29999 13.8726 1.29999 13.3334V6.00003C1.29999 5.78401 1.39972 5.5801 1.57023 5.44748L7.57023 0.780815ZM6.69999 13.9667H9.29999V8.70003H6.69999V13.9667ZM10.7 13.9667V8.00003C10.7 7.61343 10.3866 7.30003 9.99999 7.30003H5.99999C5.61339 7.30003 5.29999 7.61343 5.29999 8.00003V13.9667H3.33332C3.16535 13.9667 3.00426 13.9 2.88549 13.7812C2.76671 13.6624 2.69999 13.5013 2.69999 13.3334V6.34239L7.99999 2.22016L13.3 6.34239V13.3334C13.3 13.5013 13.2333 13.6624 13.1145 13.7812C12.9957 13.9 12.8346 13.9667 12.6667 13.9667H10.7Z"
      fill="currentColor"
    />
  </svg>
);
export default HomeIcon;
