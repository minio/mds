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

const SmartphoneChargingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66666 2.0333C4.31688 2.0333 4.03333 2.31685 4.03333 2.66663V13.3333C4.03333 13.6831 4.31688 13.9666 4.66666 13.9666H11.3333C11.6831 13.9666 11.9667 13.6831 11.9667 13.3333V2.66663C11.9667 2.31685 11.6831 2.0333 11.3333 2.0333H4.66666ZM2.63333 2.66663C2.63333 1.54366 3.54369 0.633301 4.66666 0.633301H11.3333C12.4563 0.633301 13.3667 1.54366 13.3667 2.66663V13.3333C13.3667 14.4563 12.4563 15.3666 11.3333 15.3666H4.66666C3.54369 15.3666 2.63333 14.4563 2.63333 13.3333V2.66663ZM8.83299 4.75089C9.15465 4.96535 9.24154 5.39997 9.02708 5.72162L7.97472 7.29997H9.33333C9.59149 7.29997 9.8287 7.44206 9.95051 7.66968C10.0723 7.8973 10.059 8.17349 9.91574 8.38829L8.13774 11.055C7.92328 11.3766 7.48867 11.4635 7.16701 11.249C6.84535 11.0346 6.75845 10.6 6.97292 10.2783L8.02528 8.69997H6.66666C6.4085 8.69997 6.17129 8.55787 6.04948 8.33025C5.92767 8.10263 5.94104 7.82644 6.08425 7.61164L7.86225 4.94498C8.07672 4.62332 8.51133 4.53642 8.83299 4.75089Z"
      fill="currentColor"
    />
  </svg>
);
export default SmartphoneChargingIcon;
