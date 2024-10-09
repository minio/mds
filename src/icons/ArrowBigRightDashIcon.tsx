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

const ArrowBigRightDashIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.73209 2.68661C7.99366 2.57826 8.29474 2.63815 8.49494 2.83835L13.1616 7.50501C13.435 7.77838 13.435 8.2216 13.1616 8.49496L8.49494 13.1616C8.29474 13.3618 7.99366 13.4217 7.73209 13.3134C7.47052 13.205 7.29997 12.9498 7.29997 12.6667V10.7H5.99997C5.61337 10.7 5.29997 10.3866 5.29997 9.99999V5.99999C5.29997 5.61339 5.61337 5.29999 5.99997 5.29999H7.29997V3.33332C7.29997 3.0502 7.47052 2.79495 7.73209 2.68661ZM8.69997 5.02327V5.99999C8.69997 6.38659 8.38657 6.69999 7.99997 6.69999H6.69997V9.29999H7.99997C8.38657 9.29999 8.69997 9.61339 8.69997 9.99999V10.9767L11.6767 7.99999L8.69997 5.02327ZM3.3333 5.29999C3.7199 5.29999 4.0333 5.61339 4.0333 5.99999V9.99999C4.0333 10.3866 3.7199 10.7 3.3333 10.7C2.9467 10.7 2.6333 10.3866 2.6333 9.99999V5.99999C2.6333 5.61339 2.9467 5.29999 3.3333 5.29999Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowBigRightDashIcon;
