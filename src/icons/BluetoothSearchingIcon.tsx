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

const BluetoothSearchingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.73213 0.686621C7.9937 0.578274 8.29478 0.638163 8.49498 0.838362L11.8283 4.17169C11.9596 4.30297 12.0333 4.48102 12.0333 4.66667C12.0333 4.85232 11.9596 5.03037 11.8283 5.16164L8.98996 8L11.8283 10.8384C11.9596 10.9696 12.0333 11.1477 12.0333 11.3333C12.0333 11.519 11.9596 11.697 11.8283 11.8283L8.49498 15.1616C8.29478 15.3618 7.9937 15.4217 7.73213 15.3134C7.47056 15.205 7.30001 14.9498 7.30001 14.6667V9.68995L5.16165 11.8283C4.88828 12.1017 4.44507 12.1017 4.1717 11.8283C3.89833 11.5549 3.89833 11.1117 4.1717 10.8384L7.01006 8L4.1717 5.16164C3.89833 4.88828 3.89833 4.44506 4.1717 4.17169C4.44507 3.89833 4.88828 3.89833 5.16165 4.17169L7.30001 6.31005V1.33334C7.30001 1.05021 7.47056 0.794968 7.73213 0.686621ZM8.70001 9.68995L10.3434 11.3333L8.70001 12.9767V9.68995ZM8.70001 6.31005V3.02329L10.3434 4.66667L8.70001 6.31005ZM13.3914 5.61864C13.6646 5.34512 14.1079 5.34487 14.3814 5.61809C14.6944 5.93076 14.9427 6.30206 15.1121 6.71077C15.2816 7.11948 15.3688 7.55757 15.3688 8C15.3688 8.44244 15.2816 8.88053 15.1121 9.28924C14.9427 9.69794 14.6944 10.0692 14.3814 10.3819C14.1079 10.6551 13.6646 10.6549 13.3914 10.3814C13.1182 10.1079 13.1185 9.66463 13.392 9.39142C13.5748 9.20877 13.7199 8.99187 13.8189 8.75312C13.9178 8.51437 13.9688 8.25845 13.9688 8C13.9688 7.74155 13.9178 7.48564 13.8189 7.24689C13.7199 7.00814 13.5748 6.79124 13.392 6.60859C13.1185 6.33537 13.1182 5.89216 13.3914 5.61864ZM11.3 8C11.3 7.6134 11.6134 7.3 12 7.3H12.0067C12.3933 7.3 12.7067 7.6134 12.7067 8C12.7067 8.3866 12.3933 8.7 12.0067 8.7H12C11.6134 8.7 11.3 8.3866 11.3 8Z"
      fill="currentColor"
    />
  </svg>
);
export default BluetoothSearchingIcon;
