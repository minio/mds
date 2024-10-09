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

const PanelRightCloseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.70005C2.9836 2.70005 2.70005 2.9836 2.70005 3.33338V12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3H9.30005V2.70005H3.33338ZM3.33338 1.30005C2.2104 1.30005 1.30005 2.2104 1.30005 3.33338V12.6667C1.30005 13.7897 2.2104 14.7 3.33338 14.7H12.6667C13.7897 14.7 14.7 13.7897 14.7 12.6667V3.33338C14.7 2.2104 13.7897 1.30005 12.6667 1.30005H3.33338ZM10.7 2.70005V13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H10.7ZM4.83841 5.50507C5.11177 5.23171 5.55499 5.23171 5.82836 5.50507L7.82836 7.50507C8.10172 7.77844 8.10172 8.22166 7.82836 8.49502L5.82836 10.495C5.55499 10.7684 5.11177 10.7684 4.83841 10.495C4.56504 10.2217 4.56504 9.77844 4.83841 9.50507L6.34343 8.00005L4.83841 6.49502C4.56504 6.22166 4.56504 5.77844 4.83841 5.50507Z"
      fill="currentColor"
    />
  </svg>
);
export default PanelRightCloseIcon;
