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

const LayoutListIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.70005 2.69999V5.96665H5.96672V2.69999H2.70005ZM1.30005 2.66665C1.30005 1.91187 1.91193 1.29999 2.66672 1.29999H6.00005C6.75484 1.29999 7.36672 1.91187 7.36672 2.66665V5.99999C7.36672 6.75478 6.75484 7.36665 6.00005 7.36665H2.66672C1.91193 7.36665 1.30005 6.75478 1.30005 5.99999V2.66665ZM8.63338 2.66665C8.63338 2.28006 8.94678 1.96665 9.33338 1.96665H14C14.3866 1.96665 14.7 2.28006 14.7 2.66665C14.7 3.05325 14.3866 3.36665 14 3.36665H9.33338C8.94678 3.36665 8.63338 3.05325 8.63338 2.66665ZM8.63338 5.99999C8.63338 5.61339 8.94678 5.29999 9.33338 5.29999H14C14.3866 5.29999 14.7 5.61339 14.7 5.99999C14.7 6.38659 14.3866 6.69999 14 6.69999H9.33338C8.94678 6.69999 8.63338 6.38659 8.63338 5.99999ZM2.70005 10.0333V13.3H5.96672V10.0333H2.70005ZM1.30005 9.99999C1.30005 9.2452 1.91193 8.63332 2.66672 8.63332H6.00005C6.75484 8.63332 7.36672 9.2452 7.36672 9.99999V13.3333C7.36672 14.0881 6.75484 14.7 6.00005 14.7H2.66672C1.91193 14.7 1.30005 14.0881 1.30005 13.3333V9.99999ZM8.63338 9.99999C8.63338 9.61339 8.94678 9.29999 9.33338 9.29999H14C14.3866 9.29999 14.7 9.61339 14.7 9.99999C14.7 10.3866 14.3866 10.7 14 10.7H9.33338C8.94678 10.7 8.63338 10.3866 8.63338 9.99999ZM8.63338 13.3333C8.63338 12.9467 8.94678 12.6333 9.33338 12.6333H14C14.3866 12.6333 14.7 12.9467 14.7 13.3333C14.7 13.7199 14.3866 14.0333 14 14.0333H9.33338C8.94678 14.0333 8.63338 13.7199 8.63338 13.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default LayoutListIcon;
