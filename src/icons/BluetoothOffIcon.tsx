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

const BluetoothOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.73209 0.686621C7.99366 0.578274 8.29474 0.638163 8.49494 0.838362L11.8283 4.17169C12.1016 4.44506 12.1016 4.88828 11.8283 5.16164L10.1616 6.82831C9.88824 7.10168 9.44503 7.10168 9.17166 6.82831C8.89829 6.55494 8.89829 6.11173 9.17166 5.83836L10.3434 4.66667L8.69997 3.02329V4.33334C8.69997 4.71994 8.38657 5.03334 7.99997 5.03334C7.61337 5.03334 7.29997 4.71994 7.29997 4.33334V1.33334C7.29997 1.05021 7.47052 0.794968 7.73209 0.686621ZM0.838326 0.838362C1.11169 0.564995 1.55491 0.564995 1.82828 0.838362L8.49103 7.50112C8.49359 7.50363 8.49612 7.50617 8.49864 7.50872L15.1616 14.1717C15.435 14.4451 15.435 14.8883 15.1616 15.1616C14.8882 15.435 14.445 15.435 14.1717 15.1616L11.3333 12.3233L8.49494 15.1616C8.29474 15.3618 7.99366 15.4217 7.73209 15.3134C7.47052 15.205 7.29997 14.9498 7.29997 14.6667V9.68995L5.16161 11.8283C4.88824 12.1017 4.44503 12.1017 4.17166 11.8283C3.89829 11.5549 3.89829 11.1117 4.17166 10.8384L7.01002 8L0.838326 1.82831C0.564959 1.55494 0.564959 1.11173 0.838326 0.838362ZM8.69997 9.68995V12.9767L10.3434 11.3333L8.69997 9.68995Z"
      fill="currentColor"
    />
  </svg>
);
export default BluetoothOffIcon;
