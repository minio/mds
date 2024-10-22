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

const ClusterReplicationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M5.64995 1.39383C5.86653 1.26879 6.13337 1.26879 6.34995 1.39383L7.50465 2.0605C7.83946 2.2538 7.95417 2.68191 7.76087 3.01672C7.56757 3.35152 7.13946 3.46623 6.80466 3.27293L5.99995 2.80834L2.08115 5.07086V9.5959L2.88585 10.0605C3.22066 10.2538 3.33537 10.6819 3.14207 11.0167C2.94877 11.3515 2.52066 11.4662 2.18585 11.2729L1.03115 10.6063C0.814572 10.4812 0.681152 10.2501 0.681152 10V4.66672C0.681152 4.41663 0.814572 4.18554 1.03115 4.0605L5.64995 1.39383Z"
      fill="currentColor"
    />
    <path
      d="M10.6666 9.33333C10.6666 10.0697 10.0697 10.6667 9.3333 10.6667C8.59692 10.6667 7.99997 10.0697 7.99997 9.33333C7.99997 8.59695 8.59692 8 9.3333 8C10.0697 8 10.6666 8.59695 10.6666 9.33333Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.9833 3.39383C9.19988 3.26879 9.46672 3.26879 9.6833 3.39383L14.3021 6.0605C14.5187 6.18554 14.6521 6.41663 14.6521 6.66672V12C14.6521 12.2501 14.5187 12.4812 14.3021 12.6063L9.6833 15.2729C9.46672 15.398 9.19988 15.398 8.9833 15.2729L4.3645 12.6063C4.14792 12.4812 4.0145 12.2501 4.0145 12V6.66672C4.0145 6.41663 4.14792 6.18554 4.3645 6.0605L8.9833 3.39383ZM5.4145 7.07086V11.5959L9.3333 13.8584L13.2521 11.5959V7.07086L9.3333 4.80834L5.4145 7.07086Z"
      fill="currentColor"
    />
  </svg>
);
export default ClusterReplicationIcon;
