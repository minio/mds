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

const CandlestickChartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.00005 1.3C2.38665 1.3 2.70005 1.6134 2.70005 2V13.3H14C14.3866 13.3 14.7 13.6134 14.7 14C14.7 14.3866 14.3866 14.7 14 14.7H2.00005C1.61345 14.7 1.30005 14.3866 1.30005 14V2C1.30005 1.6134 1.61345 1.3 2.00005 1.3ZM11.3334 1.3C11.72 1.3 12.0334 1.6134 12.0334 2V2.63373C12.7728 2.65143 13.3667 3.25635 13.3667 4V8C13.3667 8.74365 12.7728 9.34857 12.0334 9.36627V10.6667C12.0334 11.0533 11.72 11.3667 11.3334 11.3667C10.9468 11.3667 10.6334 11.0533 10.6334 10.6667V9.36627C9.89399 9.34857 9.30005 8.74365 9.30005 8V4C9.30005 3.25635 9.89399 2.65143 10.6334 2.63373V2C10.6334 1.6134 10.9468 1.3 11.3334 1.3ZM10.7 4.03333V7.96667H11.9667V4.03333H10.7ZM6.00005 2.63333C6.38665 2.63333 6.70005 2.94673 6.70005 3.33333V5.3004C7.43944 5.3181 8.03338 5.92302 8.03338 6.66667V9.33333C8.03338 10.077 7.43944 10.6819 6.70005 10.6996V11.3333C6.70005 11.7199 6.38665 12.0333 6.00005 12.0333C5.61345 12.0333 5.30005 11.7199 5.30005 11.3333V10.6996C4.56066 10.6819 3.96672 10.077 3.96672 9.33333V6.66667C3.96672 5.92302 4.56066 5.3181 5.30005 5.3004V3.33333C5.30005 2.94673 5.61345 2.63333 6.00005 2.63333ZM5.36672 6.7V9.3H6.63338V6.7H5.36672Z"
      fill="currentColor"
    />
  </svg>
);
export default CandlestickChartIcon;
