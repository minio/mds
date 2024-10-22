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

const SquareCheckIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33333 2.70005C2.98355 2.70005 2.7 2.9836 2.7 3.33338V12.6667C2.7 13.0165 2.98355 13.3 3.33333 13.3H12.6667C13.0164 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0164 2.70005 12.6667 2.70005H3.33333ZM1.3 3.33338C1.3 2.2104 2.21035 1.30005 3.33333 1.30005H12.6667C13.7896 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7896 14.7 12.6667 14.7H3.33333C2.21035 14.7 1.3 13.7897 1.3 12.6667V3.33338ZM10.495 6.17174C10.7683 6.44511 10.7683 6.88832 10.495 7.16169L7.82831 9.82836C7.55494 10.1017 7.11172 10.1017 6.83836 9.82836L5.50502 8.49502C5.23166 8.22166 5.23166 7.77844 5.50502 7.50507C5.77839 7.23171 6.22161 7.23171 6.49497 7.50507L7.33333 8.34343L9.50502 6.17174C9.77839 5.89837 10.2216 5.89837 10.495 6.17174Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareCheckIcon;
