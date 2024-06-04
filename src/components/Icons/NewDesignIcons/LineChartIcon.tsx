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

const LineChartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.00005 1.29999C2.38665 1.29999 2.70005 1.61339 2.70005 1.99999V13.3H14C14.3866 13.3 14.7 13.6134 14.7 14C14.7 14.3866 14.3866 14.7 14 14.7H2.00005C1.61345 14.7 1.30005 14.3866 1.30005 14V1.99999C1.30005 1.61339 1.61345 1.29999 2.00005 1.29999ZM13.1617 5.50501C13.4351 5.77838 13.4351 6.2216 13.1617 6.49496L9.82836 9.8283C9.55499 10.1017 9.11177 10.1017 8.83841 9.8283L6.66672 7.6566L5.16169 9.16163C4.88832 9.435 4.44511 9.435 4.17174 9.16163C3.89837 8.88826 3.89837 8.44505 4.17174 8.17168L6.17174 6.17168C6.44511 5.89831 6.88832 5.89831 7.16169 6.17168L9.33338 8.34337L12.1717 5.50501C12.4451 5.23165 12.8883 5.23165 13.1617 5.50501Z"
      fill="currentColor"
    />
  </svg>
);
export default LineChartIcon;
