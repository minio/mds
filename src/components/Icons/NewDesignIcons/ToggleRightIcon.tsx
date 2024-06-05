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

const ToggleRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.33333 4.70005C3.51079 4.70005 2.03333 6.17751 2.03333 8.00005C2.03333 9.82259 3.51079 11.3 5.33333 11.3H10.6667C12.4892 11.3 13.9667 9.82259 13.9667 8.00005C13.9667 6.17751 12.4892 4.70005 10.6667 4.70005H5.33333ZM0.633331 8.00005C0.633331 5.40431 2.73759 3.30005 5.33333 3.30005H10.6667C13.2624 3.30005 15.3667 5.40431 15.3667 8.00005C15.3667 10.5958 13.2624 12.7 10.6667 12.7H5.33333C2.73759 12.7 0.633331 10.5958 0.633331 8.00005ZM10.6667 7.36672C10.3169 7.36672 10.0333 7.65027 10.0333 8.00005C10.0333 8.34983 10.3169 8.63338 10.6667 8.63338C11.0164 8.63338 11.3 8.34983 11.3 8.00005C11.3 7.65027 11.0164 7.36672 10.6667 7.36672ZM8.63333 8.00005C8.63333 6.87707 9.54368 5.96672 10.6667 5.96672C11.7896 5.96672 12.7 6.87707 12.7 8.00005C12.7 9.12303 11.7896 10.0334 10.6667 10.0334C9.54368 10.0334 8.63333 9.12303 8.63333 8.00005Z"
      fill="currentColor"
    />
  </svg>
);
export default ToggleRightIcon;
