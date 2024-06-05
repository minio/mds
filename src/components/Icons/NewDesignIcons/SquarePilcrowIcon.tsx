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

const SquarePilcrowIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.70005C2.9836 2.70005 2.70005 2.9836 2.70005 3.33338V12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H3.33338ZM1.30005 3.33338C1.30005 2.2104 2.2104 1.30005 3.33338 1.30005H12.6667C13.7897 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7897 14.7 12.6667 14.7H3.33338C2.2104 14.7 1.30005 13.7897 1.30005 12.6667V3.33338ZM6.33338 5.36672C6.07701 5.36672 5.83113 5.46856 5.64985 5.64985C5.46856 5.83113 5.36672 6.07701 5.36672 6.33338C5.36672 6.58976 5.46856 6.83563 5.64985 7.01692C5.83113 7.1982 6.07701 7.30005 6.33338 7.30005H7.30005V5.36672H6.33338ZM6.33338 3.96672C5.7057 3.96672 5.10373 4.21606 4.6599 4.6599C4.21606 5.10373 3.96672 5.7057 3.96672 6.33338C3.96672 6.96106 4.21606 7.56303 4.6599 8.00687C5.10373 8.4507 5.7057 8.70005 6.33338 8.70005H7.30005V11.3334C7.30005 11.72 7.61345 12.0334 8.00005 12.0334C8.38665 12.0334 8.70005 11.72 8.70005 11.3334V5.36672H9.96672V11.3334C9.96672 11.72 10.2801 12.0334 10.6667 12.0334C11.0533 12.0334 11.3667 11.72 11.3667 11.3334V5.36594C11.7378 5.34854 12.0334 5.04214 12.0334 4.66672C12.0334 4.28012 11.72 3.96672 11.3334 3.96672H6.33338Z"
      fill="currentColor"
    />
  </svg>
);
export default SquarePilcrowIcon;
