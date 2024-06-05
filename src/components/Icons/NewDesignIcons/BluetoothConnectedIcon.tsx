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

const BluetoothConnectedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.73217 0.686621C7.99374 0.578274 8.29483 0.638163 8.49502 0.838362L11.8284 4.17169C11.9596 4.30297 12.0334 4.48102 12.0334 4.66667C12.0334 4.85232 11.9596 5.03037 11.8284 5.16164L8.99 8L11.8284 10.8384C11.9596 10.9696 12.0334 11.1477 12.0334 11.3333C12.0334 11.519 11.9596 11.697 11.8284 11.8283L8.49502 15.1616C8.29483 15.3618 7.99374 15.4217 7.73217 15.3134C7.4706 15.205 7.30005 14.9498 7.30005 14.6667V9.68995L5.16169 11.8283C4.88832 12.1017 4.44511 12.1017 4.17174 11.8283C3.89837 11.5549 3.89837 11.1117 4.17174 10.8384L7.0101 8L4.17174 5.16164C3.89837 4.88828 3.89837 4.44506 4.17174 4.17169C4.44511 3.89833 4.88832 3.89833 5.16169 4.17169L7.30005 6.31005V1.33334C7.30005 1.05021 7.4706 0.794968 7.73217 0.686621ZM8.70005 9.68995L10.3434 11.3333L8.70005 12.9767V9.68995ZM8.70005 6.31005V3.02329L10.3434 4.66667L8.70005 6.31005ZM1.30005 8C1.30005 7.6134 1.61345 7.3 2.00005 7.3H4.00005C4.38665 7.3 4.70005 7.6134 4.70005 8C4.70005 8.3866 4.38665 8.7 4.00005 8.7H2.00005C1.61345 8.7 1.30005 8.3866 1.30005 8ZM11.3 8C11.3 7.6134 11.6135 7.3 12 7.3H14C14.3866 7.3 14.7 7.6134 14.7 8C14.7 8.3866 14.3866 8.7 14 8.7H12C11.6135 8.7 11.3 8.3866 11.3 8Z"
      fill="currentColor"
    />
  </svg>
);
export default BluetoothConnectedIcon;
