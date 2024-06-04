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

const AreaChartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.99999 1.29999C2.38659 1.29999 2.69999 1.61339 2.69999 1.99999V13.3H14C14.3866 13.3 14.7 13.6134 14.7 14C14.7 14.3866 14.3866 14.7 14 14.7H1.99999C1.61339 14.7 1.29999 14.3866 1.29999 14V1.99999C1.29999 1.61339 1.61339 1.29999 1.99999 1.29999ZM12.9345 4.68661C13.1961 4.79495 13.3667 5.0502 13.3667 5.33332V11.3333C13.3667 11.7199 13.0533 12.0333 12.6667 12.0333H4.66665C4.28006 12.0333 3.96665 11.7199 3.96665 11.3333V7.99999C3.96665 7.81434 4.0404 7.63629 4.17168 7.50501L6.17168 5.50501C6.44505 5.23165 6.88826 5.23165 7.16163 5.50501L9.33332 7.6767L12.1717 4.83835C12.3719 4.63815 12.673 4.57826 12.9345 4.68661ZM11.9667 7.02327L9.8283 9.16163C9.55493 9.435 9.11171 9.435 8.83835 9.16163L6.66665 6.98994L5.36665 8.28994V10.6333H11.9667V7.02327Z"
      fill="currentColor"
    />
  </svg>
);
export default AreaChartIcon;
