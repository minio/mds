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

const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M7.50503 13.1617C7.77839 13.435 8.22161 13.435 8.49498 13.1617C8.76834 12.8883 8.76834 12.4451 8.49498 12.1717L7.50503 13.1617ZM3.33334 8.00001L2.83836 7.50503C2.56499 7.7784 2.56499 8.22162 2.83836 8.49498L3.33334 8.00001ZM8.49498 3.82832C8.76834 3.55495 8.76834 3.11174 8.49498 2.83837C8.22161 2.565 7.77839 2.565 7.50503 2.83837L8.49498 3.82832ZM12.6667 8.70001C13.0533 8.70001 13.3667 8.38661 13.3667 8.00001C13.3667 7.61341 13.0533 7.30001 12.6667 7.30001V8.70001ZM8.49498 12.1717L3.82831 7.50503L2.83836 8.49498L7.50503 13.1617L8.49498 12.1717ZM3.82831 8.49498L8.49498 3.82832L7.50503 2.83837L2.83836 7.50503L3.82831 8.49498ZM12.6667 7.30001H3.33334V8.70001H12.6667V7.30001Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowLeftIcon;
