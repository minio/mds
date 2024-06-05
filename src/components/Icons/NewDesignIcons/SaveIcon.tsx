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

const SaveIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33334 2.70005C3.16537 2.70005 3.00428 2.76677 2.8855 2.88555C2.76673 3.00432 2.7 3.16541 2.7 3.33338V12.6667C2.7 12.8347 2.76673 12.9958 2.8855 13.1145C3.00428 13.2333 3.16537 13.3 3.33334 13.3H3.96667V8.66672C3.96667 8.28012 4.28007 7.96672 4.66667 7.96672H11.3333C11.7199 7.96672 12.0333 8.28012 12.0333 8.66672V13.3H12.6667C12.8346 13.3 12.9957 13.2333 13.1145 13.1145C13.2333 12.9958 13.3 12.8347 13.3 12.6667V5.62333L10.3767 2.70005H5.36667V4.63338H10C10.3866 4.63338 10.7 4.94678 10.7 5.33338C10.7 5.71998 10.3866 6.03338 10 6.03338H4.66667C4.28007 6.03338 3.96667 5.71998 3.96667 5.33338V2.70005H3.33334ZM3.33334 1.30005C2.79406 1.30005 2.27688 1.51427 1.89555 1.8956C1.51423 2.27692 1.3 2.79411 1.3 3.33338V12.6667C1.3 13.206 1.51423 13.7232 1.89555 14.1045C2.27688 14.4858 2.79406 14.7 3.33334 14.7H12.6667C13.2059 14.7 13.7231 14.4858 14.1045 14.1045C14.4858 13.7232 14.7 13.206 14.7 12.6667V5.33338C14.7 5.14773 14.6263 4.96968 14.495 4.83841L11.1616 1.50507C11.0304 1.3738 10.8523 1.30005 10.6667 1.30005H3.33334ZM10.6333 13.3V9.36672H5.36667V13.3H10.6333Z"
      fill="currentColor"
    />
  </svg>
);
export default SaveIcon;
