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

const PanelLeftCloseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33332 2.70005C2.98354 2.70005 2.69999 2.9836 2.69999 3.33338V12.6667C2.69999 13.0165 2.98354 13.3 3.33332 13.3H5.29999V2.70005H3.33332ZM3.33332 1.30005C2.21034 1.30005 1.29999 2.2104 1.29999 3.33338V12.6667C1.29999 13.7897 2.21034 14.7 3.33332 14.7H12.6667C13.7896 14.7 14.7 13.7897 14.7 12.6667V3.33338C14.7 2.2104 13.7896 1.30005 12.6667 1.30005H3.33332ZM6.69999 2.70005V13.3H12.6667C13.0164 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0164 2.70005 12.6667 2.70005H6.69999ZM11.1616 5.50507C11.435 5.77844 11.435 6.22166 11.1616 6.49502L9.6566 8.00005L11.1616 9.50507C11.435 9.77844 11.435 10.2217 11.1616 10.495C10.8883 10.7684 10.445 10.7684 10.1717 10.495L8.17168 8.49502C7.89831 8.22166 7.89831 7.77844 8.17168 7.50507L10.1717 5.50507C10.445 5.23171 10.8883 5.23171 11.1616 5.50507Z"
      fill="currentColor"
    />
  </svg>
);
export default PanelLeftCloseIcon;
