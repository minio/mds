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

const ChevronsUpDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00001 1.96667C8.18566 1.96667 8.36371 2.04042 8.49498 2.17169L11.8283 5.50503C12.1017 5.77839 12.1017 6.22161 11.8283 6.49498C11.5549 6.76834 11.1117 6.76834 10.8384 6.49498L8.00001 3.65662L5.16165 6.49498C4.88828 6.76834 4.44507 6.76834 4.1717 6.49498C3.89833 6.22161 3.89833 5.77839 4.1717 5.50503L7.50503 2.17169C7.63631 2.04042 7.81436 1.96667 8.00001 1.96667ZM4.1717 9.50503C4.44507 9.23166 4.88828 9.23166 5.16165 9.50503L8.00001 12.3434L10.8384 9.50503C11.1117 9.23166 11.5549 9.23166 11.8283 9.50503C12.1017 9.77839 12.1017 10.2216 11.8283 10.495L8.49498 13.8283C8.36371 13.9596 8.18566 14.0333 8.00001 14.0333C7.81436 14.0333 7.63631 13.9596 7.50503 13.8283L4.1717 10.495C3.89833 10.2216 3.89833 9.77839 4.1717 9.50503Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronsUpDownIcon;
