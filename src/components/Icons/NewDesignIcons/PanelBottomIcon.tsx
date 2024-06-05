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

const PanelBottomIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33332 2.70005C2.98354 2.70005 2.69999 2.9836 2.69999 3.33338V9.30005H13.3V3.33338C13.3 2.9836 13.0164 2.70005 12.6667 2.70005H3.33332ZM14.7 3.33338C14.7 2.2104 13.7896 1.30005 12.6667 1.30005H3.33332C2.21034 1.30005 1.29999 2.2104 1.29999 3.33338V12.6667C1.29999 13.7897 2.21034 14.7 3.33332 14.7H12.6667C13.7896 14.7 14.7 13.7897 14.7 12.6667V3.33338ZM13.3 10.7H2.69999V12.6667C2.69999 13.0165 2.98354 13.3 3.33332 13.3H12.6667C13.0164 13.3 13.3 13.0165 13.3 12.6667V10.7Z"
      fill="currentColor"
    />
  </svg>
);
export default PanelBottomIcon;
