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

const ArrowBigLeftDashIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.26785 2.68661C8.52942 2.79495 8.69997 3.0502 8.69997 3.33332V5.29999H9.99997C10.3866 5.29999 10.7 5.61339 10.7 5.99999V9.99999C10.7 10.3866 10.3866 10.7 9.99997 10.7H8.69997V12.6667C8.69997 12.9498 8.52942 13.205 8.26785 13.3134C8.00627 13.4217 7.70519 13.3618 7.50499 13.1616L2.83833 8.49496C2.56496 8.2216 2.56496 7.77838 2.83833 7.50501L7.50499 2.83835C7.70519 2.63815 8.00627 2.57826 8.26785 2.68661ZM4.32325 7.99999L7.29997 10.9767V9.99999C7.29997 9.61339 7.61337 9.29999 7.99997 9.29999H9.29997V6.69999H7.99997C7.61337 6.69999 7.29997 6.38659 7.29997 5.99999V5.02327L4.32325 7.99999ZM12.6666 5.29999C13.0532 5.29999 13.3666 5.61339 13.3666 5.99999V9.99999C13.3666 10.3866 13.0532 10.7 12.6666 10.7C12.28 10.7 11.9666 10.3866 11.9666 9.99999V5.99999C11.9666 5.61339 12.28 5.29999 12.6666 5.29999Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowBigLeftDashIcon;
