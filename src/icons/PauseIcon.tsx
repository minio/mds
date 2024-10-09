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

const PauseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.30005 2.66667C3.30005 2.28008 3.61345 1.96667 4.00005 1.96667H6.66672C7.05331 1.96667 7.36672 2.28008 7.36672 2.66667V13.3333C7.36672 13.7199 7.05331 14.0333 6.66672 14.0333H4.00005C3.61345 14.0333 3.30005 13.7199 3.30005 13.3333V2.66667ZM4.70005 3.36667V12.6333H5.96672V3.36667H4.70005ZM8.63338 2.66667C8.63338 2.28008 8.94678 1.96667 9.33338 1.96667H12C12.3866 1.96667 12.7 2.28008 12.7 2.66667V13.3333C12.7 13.7199 12.3866 14.0333 12 14.0333H9.33338C8.94678 14.0333 8.63338 13.7199 8.63338 13.3333V2.66667ZM10.0334 3.36667V12.6333H11.3V3.36667H10.0334Z"
      fill="currentColor"
    />
  </svg>
);
export default PauseIcon;
