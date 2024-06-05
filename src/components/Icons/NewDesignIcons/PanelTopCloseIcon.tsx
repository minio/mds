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

const PanelTopCloseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.70005C2.9836 2.70005 2.70005 2.9836 2.70005 3.33338V5.30005H13.3V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H3.33338ZM14.7 3.33338C14.7 2.2104 13.7897 1.30005 12.6667 1.30005H3.33338C2.2104 1.30005 1.30005 2.2104 1.30005 3.33338V12.6667C1.30005 13.7897 2.2104 14.7 3.33338 14.7H12.6667C13.7897 14.7 14.7 13.7897 14.7 12.6667V3.33338ZM13.3 6.70005H2.70005V12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V6.70005ZM7.50507 8.17174C7.77844 7.89837 8.22166 7.89837 8.49502 8.17174L10.495 10.1717C10.7684 10.4451 10.7684 10.8883 10.495 11.1617C10.2217 11.4351 9.77844 11.4351 9.50507 11.1617L8.00005 9.65667L6.49502 11.1617C6.22166 11.4351 5.77844 11.4351 5.50507 11.1617C5.23171 10.8883 5.23171 10.4451 5.50507 10.1717L7.50507 8.17174Z"
      fill="currentColor"
    />
  </svg>
);
export default PanelTopCloseIcon;
