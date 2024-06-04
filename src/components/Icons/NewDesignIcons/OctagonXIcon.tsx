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

const OctagonXIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.74499 0.838326C4.87627 0.707051 5.05432 0.633301 5.23997 0.633301H10.76C10.9456 0.633301 11.1237 0.707051 11.2549 0.838326L15.1616 4.74499C15.2929 4.87627 15.3666 5.05432 15.3666 5.23997V10.76C15.3666 10.9456 15.2929 11.1237 15.1616 11.2549L11.2549 15.1616C11.1237 15.2929 10.9456 15.3666 10.76 15.3666H5.23997C5.05432 15.3666 4.87627 15.2929 4.74499 15.1616L0.838326 11.2549C0.707051 11.1237 0.633301 10.9456 0.633301 10.76V5.23997C0.633301 5.05432 0.707051 4.87627 0.838326 4.74499L4.74499 0.838326ZM5.52992 2.0333L2.0333 5.52992V10.47L5.52992 13.9666H10.47L13.9666 10.47V5.52992L10.47 2.0333H5.52992ZM5.50499 5.50499C5.77836 5.23163 6.22157 5.23163 6.49494 5.50499L7.99997 7.01002L9.50499 5.50499C9.77836 5.23163 10.2216 5.23163 10.4949 5.50499C10.7683 5.77836 10.7683 6.22157 10.4949 6.49494L8.98992 7.99997L10.4949 9.50499C10.7683 9.77836 10.7683 10.2216 10.4949 10.4949C10.2216 10.7683 9.77836 10.7683 9.50499 10.4949L7.99997 8.98992L6.49494 10.4949C6.22157 10.7683 5.77836 10.7683 5.50499 10.4949C5.23163 10.2216 5.23163 9.77836 5.50499 9.50499L7.01002 7.99997L5.50499 6.49494C5.23163 6.22157 5.23163 5.77836 5.50499 5.50499Z"
      fill="currentColor"
    />
  </svg>
);
export default OctagonXIcon;
