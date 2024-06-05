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

const VolumeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.63656 2.7024C7.87909 2.81896 8.03333 3.06422 8.03333 3.33331V12.6666C8.03333 12.9357 7.87909 13.181 7.63656 13.2976C7.39404 13.4141 7.10616 13.3813 6.89604 13.2132L3.75445 10.7H1.33333C0.946732 10.7 0.633331 10.3866 0.633331 9.99997V5.99997C0.633331 5.61337 0.946732 5.29997 1.33333 5.29997H3.75445L6.89604 2.7867C7.10616 2.6186 7.39404 2.58583 7.63656 2.7024ZM6.63333 4.78974L4.43728 6.54658C4.31317 6.64588 4.15895 6.69997 4 6.69997H2.03333V9.29997H4C4.15895 9.29997 4.31317 9.35407 4.43728 9.45337L6.63333 11.2102V4.78974Z"
      fill="currentColor"
    />
  </svg>
);
export default VolumeIcon;
