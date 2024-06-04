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

const SquareUserIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33333 2.70005C2.98355 2.70005 2.7 2.9836 2.7 3.33338V12.6667C2.7 13.0165 2.98355 13.3 3.33333 13.3H3.96667V12.6667C3.96667 12.1274 4.18089 11.6103 4.56222 11.2289C4.94354 10.8476 5.46073 10.6334 6 10.6334H10C10.5393 10.6334 11.0565 10.8476 11.4378 11.2289C11.8191 11.6103 12.0333 12.1274 12.0333 12.6667V13.3H12.6667C13.0164 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0164 2.70005 12.6667 2.70005H3.33333ZM12.6667 14.7C13.7896 14.7 14.7 13.7897 14.7 12.6667V3.33338C14.7 2.2104 13.7896 1.30005 12.6667 1.30005H3.33333C2.21035 1.30005 1.3 2.2104 1.3 3.33338V12.6667C1.3 13.7897 2.21035 14.7 3.33333 14.7H12.6667ZM10.6333 13.3V12.6667C10.6333 12.4987 10.5666 12.3377 10.4478 12.2189C10.3291 12.1001 10.168 12.0334 10 12.0334H6C5.83203 12.0334 5.67094 12.1001 5.55217 12.2189C5.43339 12.3377 5.36667 12.4987 5.36667 12.6667V13.3H10.6333ZM8 5.36672C7.28203 5.36672 6.7 5.94875 6.7 6.66672C6.7 7.38469 7.28203 7.96672 8 7.96672C8.71797 7.96672 9.3 7.38469 9.3 6.66672C9.3 5.94875 8.71797 5.36672 8 5.36672ZM5.3 6.66672C5.3 5.17555 6.50883 3.96672 8 3.96672C9.49117 3.96672 10.7 5.17555 10.7 6.66672C10.7 8.15788 9.49117 9.36672 8 9.36672C6.50883 9.36672 5.3 8.15788 5.3 6.66672Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareUserIcon;
