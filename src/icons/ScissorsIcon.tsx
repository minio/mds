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

const ScissorsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.99999 2.70005C3.28202 2.70005 2.69999 3.28208 2.69999 4.00005C2.69999 4.71802 3.28202 5.30005 3.99999 5.30005C4.34678 5.30005 4.66186 5.16426 4.89495 4.94294C4.90251 4.93462 4.91031 4.92644 4.91835 4.91841C4.92638 4.91037 4.93456 4.90258 4.94288 4.89501C5.16419 4.66192 5.29999 4.34684 5.29999 4.00005C5.29999 3.28208 4.71796 2.70005 3.99999 2.70005ZM6.3392 5.34931C6.56867 4.95235 6.69999 4.49153 6.69999 4.00005C6.69999 2.50888 5.49116 1.30005 3.99999 1.30005C2.50882 1.30005 1.29999 2.50888 1.29999 4.00005C1.29999 5.49122 2.50882 6.70005 3.99999 6.70005C4.49147 6.70005 4.95228 6.56873 5.34925 6.33926L7.01004 8.00005L5.34925 9.66084C4.95228 9.43137 4.49147 9.30005 3.99999 9.30005C2.50882 9.30005 1.29999 10.5089 1.29999 12C1.29999 13.4912 2.50882 14.7 3.99999 14.7C5.49116 14.7 6.69999 13.4912 6.69999 12C6.69999 11.5086 6.56867 11.0478 6.3392 10.6508L13.8283 3.16169C14.1017 2.88832 14.1017 2.44511 13.8283 2.17174C13.5549 1.89837 13.1117 1.89837 12.8383 2.17174L7.99999 7.0101L6.3392 5.34931ZM4.89495 11.0572C4.90251 11.0655 4.91031 11.0737 4.91835 11.0817C4.92638 11.0897 4.93456 11.0975 4.94288 11.1051C5.1642 11.3382 5.29999 11.6533 5.29999 12C5.29999 12.718 4.71796 13.3 3.99999 13.3C3.28202 13.3 2.69999 12.718 2.69999 12C2.69999 11.2821 3.28202 10.7 3.99999 10.7C4.34678 10.7 4.66186 10.8358 4.89495 11.0572ZM9.37168 9.37174C9.64505 9.09837 10.0883 9.09837 10.3616 9.37174L13.8283 12.8384C14.1017 13.1118 14.1017 13.555 13.8283 13.8284C13.5549 14.1017 13.1117 14.1017 12.8383 13.8284L9.37168 10.3617C9.09831 10.0883 9.09831 9.64511 9.37168 9.37174Z"
      fill="currentColor"
    />
  </svg>
);
export default ScissorsIcon;
