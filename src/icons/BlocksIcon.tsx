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

const BlocksIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.0334 2.7V5.96667H13.3V2.7H10.0334ZM8.63338 2.66667C8.63338 1.91188 9.24526 1.3 10 1.3H13.3334C14.0882 1.3 14.7 1.91188 14.7 2.66667V6C14.7 6.75479 14.0882 7.36667 13.3334 7.36667H10C9.24526 7.36667 8.63338 6.75479 8.63338 6V2.66667ZM1.70034 4.36696C1.95664 4.11066 2.30425 3.96667 2.66672 3.96667H6.00005C6.36251 3.96667 6.71013 4.11066 6.96643 4.36696C7.22273 4.62326 7.36672 4.97087 7.36672 5.33334V8.63334H10.6667C11.0292 8.63334 11.3768 8.77732 11.6331 9.03362C11.8894 9.28992 12.0334 9.63754 12.0334 10V13.3333C12.0334 13.6958 11.8894 14.0434 11.6331 14.2997C11.3768 14.556 11.0292 14.7 10.6667 14.7H2.66672C2.30425 14.7 1.95664 14.556 1.70034 14.2997C1.44404 14.0434 1.30005 13.6958 1.30005 13.3333V5.33334C1.30005 4.97087 1.44404 4.62326 1.70034 4.36696ZM2.70005 10.0333V13.3H5.96672V10.0333H2.70005ZM5.96672 8.63334H2.70005V5.36667H5.96672V8.63334ZM7.36672 10.0333V13.3H10.6334V10.0333H7.36672Z"
      fill="currentColor"
    />
  </svg>
);
export default BlocksIcon;
