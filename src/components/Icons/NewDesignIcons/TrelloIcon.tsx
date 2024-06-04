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

const TrelloIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.70005C2.9836 2.70005 2.70005 2.9836 2.70005 3.33338V12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H3.33338ZM1.30005 3.33338C1.30005 2.2104 2.2104 1.30005 3.33338 1.30005H12.6667C13.7897 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7897 14.7 12.6667 14.7H3.33338C2.2104 14.7 1.30005 13.7897 1.30005 12.6667V3.33338ZM3.96672 4.66672C3.96672 4.28012 4.28012 3.96672 4.66672 3.96672H6.66672C7.05331 3.96672 7.36672 4.28012 7.36672 4.66672V10.6667C7.36672 11.0533 7.05331 11.3667 6.66672 11.3667H4.66672C4.28012 11.3667 3.96672 11.0533 3.96672 10.6667V4.66672ZM5.36672 5.36672V9.96672H5.96672V5.36672H5.36672ZM8.63338 4.66672C8.63338 4.28012 8.94678 3.96672 9.33338 3.96672H11.3334C11.72 3.96672 12.0334 4.28012 12.0334 4.66672V8.00005C12.0334 8.38665 11.72 8.70005 11.3334 8.70005H9.33338C8.94678 8.70005 8.63338 8.38665 8.63338 8.00005V4.66672ZM10.0334 5.36672V7.30005H10.6334V5.36672H10.0334Z"
      fill="currentColor"
    />
  </svg>
);
export default TrelloIcon;
