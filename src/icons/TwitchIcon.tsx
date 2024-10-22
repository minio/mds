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

const TwitchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.30005 1.3333C1.30005 0.946701 1.61345 0.633301 2.00005 0.633301H14C14.3866 0.633301 14.7 0.946701 14.7 1.3333V9.3333C14.7 9.51895 14.6263 9.697 14.495 9.82827L11.8284 12.4949C11.6971 12.6262 11.519 12.7 11.3334 12.7H8.29L5.82836 15.1616C5.62816 15.3618 5.32708 15.4217 5.0655 15.3133C4.80393 15.205 4.63338 14.9498 4.63338 14.6666V12.7H2.00005C1.61345 12.7 1.30005 12.3866 1.30005 12V1.3333ZM2.70005 2.0333V11.3H5.33338C5.71998 11.3 6.03338 11.6134 6.03338 12V12.9767L7.50507 11.505C7.63635 11.3737 7.8144 11.3 8.00005 11.3H11.0434L13.3 9.04335V2.0333H2.70005ZM7.33338 3.96663C7.71998 3.96663 8.03338 4.28003 8.03338 4.66663V7.3333C8.03338 7.7199 7.71998 8.0333 7.33338 8.0333C6.94678 8.0333 6.63338 7.7199 6.63338 7.3333V4.66663C6.63338 4.28003 6.94678 3.96663 7.33338 3.96663ZM10.6667 3.96663C11.0533 3.96663 11.3667 4.28003 11.3667 4.66663V7.3333C11.3667 7.7199 11.0533 8.0333 10.6667 8.0333C10.2801 8.0333 9.96672 7.7199 9.96672 7.3333V4.66663C9.96672 4.28003 10.2801 3.96663 10.6667 3.96663Z"
      fill="currentColor"
    />
  </svg>
);
export default TwitchIcon;
