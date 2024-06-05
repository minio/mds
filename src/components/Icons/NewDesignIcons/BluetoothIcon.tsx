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

const BluetoothIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.73213 0.686621C7.9937 0.578274 8.29478 0.638163 8.49498 0.838362L11.8283 4.17169C12.1017 4.44506 12.1017 4.88828 11.8283 5.16164L8.98996 8L11.8283 10.8384C12.1017 11.1117 12.1017 11.5549 11.8283 11.8283L8.49498 15.1616C8.29478 15.3618 7.9937 15.4217 7.73213 15.3134C7.47056 15.205 7.30001 14.9498 7.30001 14.6667V9.68995L5.16165 11.8283C4.88828 12.1017 4.44507 12.1017 4.1717 11.8283C3.89833 11.5549 3.89833 11.1117 4.1717 10.8384L7.01006 8L4.1717 5.16164C3.89833 4.88828 3.89833 4.44506 4.1717 4.17169C4.44507 3.89833 4.88828 3.89833 5.16165 4.17169L7.30001 6.31005V1.33334C7.30001 1.05021 7.47056 0.794968 7.73213 0.686621ZM8.70001 9.68995L10.3434 11.3333L8.70001 12.9767V9.68995ZM8.70001 6.31005V3.02329L10.3434 4.66667L8.70001 6.31005Z"
      fill="currentColor"
    />
  </svg>
);
export default BluetoothIcon;
