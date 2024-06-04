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

const TrashIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.24502 2.24494C6.09327 2.3967 6.03338 2.56096 6.03338 2.66663V3.29997H9.96672V2.66663C9.96672 2.56096 9.90683 2.3967 9.75507 2.24494C9.60332 2.09318 9.43905 2.0333 9.33338 2.0333H6.66672C6.56104 2.0333 6.39678 2.09318 6.24502 2.24494ZM11.3667 3.29997V2.66663C11.3667 2.10564 11.0933 1.60323 10.745 1.25499C10.3968 0.906751 9.89438 0.633301 9.33338 0.633301H6.66672C6.10572 0.633301 5.60332 0.906751 5.25507 1.25499C4.90683 1.60323 4.63338 2.10564 4.63338 2.66663V3.29997H2.00005C1.61345 3.29997 1.30005 3.61337 1.30005 3.99997C1.30005 4.38657 1.61345 4.69997 2.00005 4.69997H2.63338V13.3333C2.63338 13.8943 2.90683 14.3967 3.25507 14.7449C3.60332 15.0932 4.10572 15.3666 4.66672 15.3666H11.3334C11.8944 15.3666 12.3968 15.0932 12.745 14.7449C13.0933 14.3967 13.3667 13.8943 13.3667 13.3333V4.69997H14C14.3866 4.69997 14.7 4.38657 14.7 3.99997C14.7 3.61337 14.3866 3.29997 14 3.29997H11.3667ZM4.03338 4.69997V13.3333C4.03338 13.439 4.09327 13.6032 4.24502 13.755C4.39678 13.9067 4.56104 13.9666 4.66672 13.9666H11.3334C11.4391 13.9666 11.6033 13.9067 11.7551 13.755C11.9068 13.6032 11.9667 13.439 11.9667 13.3333V4.69997H4.03338Z"
      fill="currentColor"
    />
  </svg>
);
export default TrashIcon;
