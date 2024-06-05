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

const ArrowBigDownDashIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.29999 3.33333C5.29999 2.94673 5.61339 2.63333 5.99999 2.63333H9.99999C10.3866 2.63333 10.7 2.94673 10.7 3.33333C10.7 3.71993 10.3866 4.03333 9.99999 4.03333H5.99999C5.61339 4.03333 5.29999 3.71993 5.29999 3.33333ZM5.29999 6C5.29999 5.6134 5.61339 5.3 5.99999 5.3H9.99999C10.3866 5.3 10.7 5.6134 10.7 6V7.3H12.6667C12.9498 7.3 13.205 7.47055 13.3134 7.73212C13.4217 7.99369 13.3618 8.29477 13.1616 8.49497L8.49496 13.1616C8.2216 13.435 7.77838 13.435 7.50501 13.1616L2.83835 8.49497C2.63815 8.29477 2.57826 7.99369 2.68661 7.73212C2.79495 7.47055 3.0502 7.3 3.33332 7.3H5.29999V6ZM6.69999 6.7V8C6.69999 8.3866 6.38659 8.7 5.99999 8.7H5.02327L7.99999 11.6767L10.9767 8.7H9.99999C9.61339 8.7 9.29999 8.3866 9.29999 8V6.7H6.69999Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowBigDownDashIcon;
