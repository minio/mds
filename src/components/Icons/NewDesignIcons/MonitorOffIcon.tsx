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

const MonitorOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838326 0.838387C1.11169 0.56502 1.55491 0.56502 1.82828 0.838387L2.48339 1.4935C2.4912 1.50096 2.49886 1.50861 2.50636 1.51647L11.8279 10.838C11.8281 10.8383 11.8284 10.8385 11.8287 10.8388L15.1616 14.1717C15.435 14.4451 15.435 14.8883 15.1616 15.1617C14.8882 15.435 14.445 15.435 14.1717 15.1617L11.0434 12.0334H8.69997V13.3H10.6666C11.0532 13.3 11.3666 13.6134 11.3666 14C11.3666 14.3866 11.0532 14.7 10.6666 14.7H5.3333C4.9467 14.7 4.6333 14.3866 4.6333 14C4.6333 13.6134 4.9467 13.3 5.3333 13.3H7.29997V12.0334H2.66663C2.12736 12.0334 1.61017 11.8191 1.22885 11.4378C0.847526 11.0565 0.633301 10.5393 0.633301 10V3.33336C0.633301 2.75852 0.801059 2.31957 1.01215 2.00216L0.838326 1.82834C0.564959 1.55497 0.564959 1.11175 0.838326 0.838387ZM2.06289 3.0529C2.0448 3.13162 2.0333 3.22438 2.0333 3.33336V10C2.0333 10.168 2.10003 10.3291 2.2188 10.4479C2.33757 10.5666 2.49866 10.6334 2.66663 10.6334H9.64335L2.06289 3.0529ZM5.29997 2.00003C5.29997 1.61343 5.61337 1.30003 5.99997 1.30003H13.3333C13.8726 1.30003 14.3898 1.51425 14.7711 1.89558C15.1524 2.2769 15.3666 2.79409 15.3666 3.33336V10C15.3666 10.3866 15.0532 10.7 14.6666 10.7C14.28 10.7 13.9666 10.3866 13.9666 10V3.33336C13.9666 3.16539 13.8999 3.0043 13.7811 2.88553C13.6624 2.76675 13.5013 2.70003 13.3333 2.70003H5.99997C5.61337 2.70003 5.29997 2.38663 5.29997 2.00003Z"
      fill="currentColor"
    />
  </svg>
);
export default MonitorOffIcon;
