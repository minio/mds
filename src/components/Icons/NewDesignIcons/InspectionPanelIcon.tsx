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

const InspectionPanelIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.69999C2.9836 2.69999 2.70005 2.98354 2.70005 3.33332V12.6667C2.70005 13.0164 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0164 13.3 12.6667V3.33332C13.3 2.98354 13.0165 2.69999 12.6667 2.69999H3.33338ZM1.30005 3.33332C1.30005 2.21034 2.2104 1.29999 3.33338 1.29999H12.6667C13.7897 1.29999 14.7 2.21034 14.7 3.33332V12.6667C14.7 13.7896 13.7897 14.7 12.6667 14.7H3.33338C2.2104 14.7 1.30005 13.7896 1.30005 12.6667V3.33332ZM3.96672 4.66665C3.96672 4.28006 4.28012 3.96665 4.66672 3.96665H4.67338C5.05998 3.96665 5.37338 4.28006 5.37338 4.66665C5.37338 5.05325 5.05998 5.36665 4.67338 5.36665H4.66672C4.28012 5.36665 3.96672 5.05325 3.96672 4.66665ZM10.6334 4.66665C10.6334 4.28006 10.9468 3.96665 11.3334 3.96665H11.34C11.7266 3.96665 12.04 4.28006 12.04 4.66665C12.04 5.05325 11.7266 5.36665 11.34 5.36665H11.3334C10.9468 5.36665 10.6334 5.05325 10.6334 4.66665ZM3.96672 11.3333C3.96672 10.9467 4.28012 10.6333 4.66672 10.6333H4.67338C5.05998 10.6333 5.37338 10.9467 5.37338 11.3333C5.37338 11.7199 5.05998 12.0333 4.67338 12.0333H4.66672C4.28012 12.0333 3.96672 11.7199 3.96672 11.3333ZM10.6334 11.3333C10.6334 10.9467 10.9468 10.6333 11.3334 10.6333H11.34C11.7266 10.6333 12.04 10.9467 12.04 11.3333C12.04 11.7199 11.7266 12.0333 11.34 12.0333H11.3334C10.9468 12.0333 10.6334 11.7199 10.6334 11.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default InspectionPanelIcon;
