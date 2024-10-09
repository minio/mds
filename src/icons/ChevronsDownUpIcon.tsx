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

const ChevronsDownUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.1717 2.17169C4.44507 1.89833 4.88828 1.89833 5.16165 2.17169L8.00001 5.01005L10.8384 2.17169C11.1117 1.89833 11.5549 1.89833 11.8283 2.17169C12.1017 2.44506 12.1017 2.88827 11.8283 3.16164L8.49498 6.49498C8.36371 6.62625 8.18566 6.7 8.00001 6.7C7.81436 6.7 7.63631 6.62625 7.50503 6.49498L4.1717 3.16164C3.89833 2.88827 3.89833 2.44506 4.1717 2.17169ZM8.00001 9.3C8.18566 9.3 8.36371 9.37375 8.49498 9.50503L11.8283 12.8384C12.1017 13.1117 12.1017 13.5549 11.8283 13.8283C11.5549 14.1017 11.1117 14.1017 10.8384 13.8283L8.00001 10.99L5.16165 13.8283C4.88828 14.1017 4.44507 14.1017 4.1717 13.8283C3.89833 13.5549 3.89833 13.1117 4.1717 12.8384L7.50503 9.50503C7.63631 9.37375 7.81436 9.3 8.00001 9.3Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronsDownUpIcon;
