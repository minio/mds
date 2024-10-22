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

const SquareChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33334 2.70005C2.98356 2.70005 2.7 2.9836 2.7 3.33338V12.6667C2.7 13.0165 2.98356 13.3 3.33334 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H3.33334ZM1.3 3.33338C1.3 2.2104 2.21036 1.30005 3.33334 1.30005H12.6667C13.7896 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7896 14.7 12.6667 14.7H3.33334C2.21036 14.7 1.3 13.7897 1.3 12.6667V3.33338ZM4.83836 6.17174C5.11173 5.89837 5.55494 5.89837 5.82831 6.17174L8 8.34343L10.1717 6.17174C10.4451 5.89837 10.8883 5.89837 11.1616 6.17174C11.435 6.44511 11.435 6.88832 11.1616 7.16169L8.49498 9.82836C8.22161 10.1017 7.7784 10.1017 7.50503 9.82836L4.83836 7.16169C4.56499 6.88832 4.56499 6.44511 4.83836 6.17174Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareChevronDownIcon;
