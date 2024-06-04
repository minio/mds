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

const WorkflowIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.70005C2.9836 2.70005 2.70005 2.9836 2.70005 3.33338V6.00005C2.70005 6.34983 2.9836 6.63338 3.33338 6.63338H6.00005C6.34983 6.63338 6.63338 6.34983 6.63338 6.00005V3.33338C6.63338 2.9836 6.34983 2.70005 6.00005 2.70005H3.33338ZM5.36672 8.03338H6.00005C7.12303 8.03338 8.03338 7.12303 8.03338 6.00005V3.33338C8.03338 2.2104 7.12303 1.30005 6.00005 1.30005H3.33338C2.2104 1.30005 1.30005 2.2104 1.30005 3.33338V6.00005C1.30005 7.12303 2.2104 8.03338 3.33338 8.03338H3.96672V10C3.96672 10.5393 4.18094 11.0565 4.56227 11.4378C4.94359 11.8192 5.46077 12.0334 6.00005 12.0334H7.96672V12.6667C7.96672 13.7897 8.87707 14.7 10 14.7H12.6667C13.7897 14.7 14.7 13.7897 14.7 12.6667V10C14.7 8.87707 13.7897 7.96672 12.6667 7.96672H10C8.87707 7.96672 7.96672 8.87707 7.96672 10V10.6334H6.00005C5.83208 10.6334 5.67099 10.5667 5.55221 10.4479C5.43344 10.3291 5.36672 10.168 5.36672 10V8.03338ZM9.36672 12.6667C9.36672 13.0165 9.65027 13.3 10 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V10C13.3 9.65027 13.0165 9.36672 12.6667 9.36672H10C9.65027 9.36672 9.36672 9.65027 9.36672 10V12.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default WorkflowIcon;
