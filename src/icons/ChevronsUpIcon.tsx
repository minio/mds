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

const ChevronsUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00001 3.3C8.18566 3.3 8.36371 3.37375 8.49498 3.50502L11.8283 6.83836C12.1017 7.11173 12.1017 7.55494 11.8283 7.82831C11.5549 8.10167 11.1117 8.10167 10.8384 7.82831L8.00001 4.98995L5.16165 7.82831C4.88828 8.10167 4.44507 8.10167 4.1717 7.82831C3.89833 7.55494 3.89833 7.11173 4.1717 6.83836L7.50503 3.50502C7.63631 3.37375 7.81436 3.3 8.00001 3.3ZM8.00001 7.96667C8.18566 7.96667 8.36371 8.04042 8.49498 8.17169L11.8283 11.505C12.1017 11.7784 12.1017 12.2216 11.8283 12.495C11.5549 12.7683 11.1117 12.7683 10.8384 12.495L8.00001 9.65662L5.16165 12.495C4.88828 12.7683 4.44507 12.7683 4.1717 12.495C3.89833 12.2216 3.89833 11.7784 4.1717 11.505L7.50503 8.17169C7.63631 8.04042 7.81436 7.96667 8.00001 7.96667Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronsUpIcon;
