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

const MessageSquareOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838326 0.838387C1.11169 0.56502 1.55491 0.56502 1.82828 0.838387L2.88643 1.89654C2.89176 1.9017 2.89703 1.90697 2.90222 1.91233L11.8279 10.838C11.8281 10.8383 11.8284 10.8385 11.8287 10.8388L15.1616 14.1717C15.435 14.4451 15.435 14.8883 15.1616 15.1617C14.8882 15.435 14.445 15.435 14.1717 15.1617L11.0434 12.0334H4.95658L2.49494 14.495C2.29474 14.6952 1.99366 14.7551 1.73209 14.6467C1.47052 14.5384 1.29997 14.2832 1.29997 14V3.33336C1.29997 3.04077 1.35307 2.74047 1.47772 2.46774L0.838326 1.82834C0.564959 1.55497 0.564959 1.11175 0.838326 0.838387ZM2.69997 3.68998V12.3101L4.17166 10.8384C4.30293 10.7071 4.48098 10.6334 4.66663 10.6334H9.64335L2.69997 3.68998ZM5.29997 2.00003C5.29997 1.61343 5.61337 1.30003 5.99997 1.30003H12.6666C13.2059 1.30003 13.7231 1.51425 14.1044 1.89558C14.4857 2.2769 14.7 2.79409 14.7 3.33336V10C14.7 10.3866 14.3866 10.7 14 10.7C13.6134 10.7 13.3 10.3866 13.3 10V3.33336C13.3 3.16539 13.2332 3.0043 13.1145 2.88553C12.9957 2.76675 12.8346 2.70003 12.6666 2.70003H5.99997C5.61337 2.70003 5.29997 2.38663 5.29997 2.00003Z"
      fill="currentColor"
    />
  </svg>
);
export default MessageSquareOffIcon;
