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

const ToggleLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.33333 4.70005C3.51079 4.70005 2.03333 6.17751 2.03333 8.00005C2.03333 9.82259 3.51079 11.3 5.33333 11.3H10.6667C12.4892 11.3 13.9667 9.82259 13.9667 8.00005C13.9667 6.17751 12.4892 4.70005 10.6667 4.70005H5.33333ZM0.633331 8.00005C0.633331 5.40431 2.73759 3.30005 5.33333 3.30005H10.6667C13.2624 3.30005 15.3667 5.40431 15.3667 8.00005C15.3667 10.5958 13.2624 12.7 10.6667 12.7H5.33333C2.73759 12.7 0.633331 10.5958 0.633331 8.00005ZM5.33333 7.36672C4.98355 7.36672 4.7 7.65027 4.7 8.00005C4.7 8.34983 4.98355 8.63338 5.33333 8.63338C5.68311 8.63338 5.96666 8.34983 5.96666 8.00005C5.96666 7.65027 5.68311 7.36672 5.33333 7.36672ZM3.3 8.00005C3.3 6.87707 4.21035 5.96672 5.33333 5.96672C6.45631 5.96672 7.36666 6.87707 7.36666 8.00005C7.36666 9.12303 6.45631 10.0334 5.33333 10.0334C4.21035 10.0334 3.3 9.12303 3.3 8.00005Z"
      fill="currentColor"
    />
  </svg>
);
export default ToggleLeftIcon;
