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

const SwissFrancIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.96672 2.00005C5.96672 1.61345 6.28012 1.30005 6.66672 1.30005H12C12.3866 1.30005 12.7 1.61345 12.7 2.00005C12.7 2.38665 12.3866 2.70005 12 2.70005H7.36672V5.63338H11.3334C11.72 5.63338 12.0334 5.94678 12.0334 6.33338C12.0334 6.71998 11.72 7.03338 11.3334 7.03338H7.36672V9.96672H10C10.3866 9.96672 10.7 10.2801 10.7 10.6667C10.7 11.0533 10.3866 11.3667 10 11.3667H7.36672V14C7.36672 14.3866 7.05331 14.7 6.66672 14.7C6.28012 14.7 5.96672 14.3866 5.96672 14V11.3667H4.00005C3.61345 11.3667 3.30005 11.0533 3.30005 10.6667C3.30005 10.2801 3.61345 9.96672 4.00005 9.96672H5.96672V2.00005Z"
      fill="currentColor"
    />
  </svg>
);
export default SwissFrancIcon;
