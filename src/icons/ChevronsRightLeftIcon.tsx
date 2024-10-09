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

const ChevronsRightLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.1717 4.17169C2.44507 3.89833 2.88828 3.89833 3.16165 4.17169L6.49498 7.50503C6.62626 7.6363 6.70001 7.81435 6.70001 8C6.70001 8.18565 6.62626 8.3637 6.49498 8.49498L3.16165 11.8283C2.88828 12.1017 2.44507 12.1017 2.1717 11.8283C1.89833 11.5549 1.89833 11.1117 2.1717 10.8384L5.01006 8L2.1717 5.16164C1.89833 4.88827 1.89833 4.44506 2.1717 4.17169ZM13.8283 4.17169C14.1017 4.44506 14.1017 4.88827 13.8283 5.16164L10.99 8L13.8283 10.8384C14.1017 11.1117 14.1017 11.5549 13.8283 11.8283C13.5549 12.1017 13.1117 12.1017 12.8384 11.8283L9.50503 8.49498C9.37376 8.3637 9.30001 8.18565 9.30001 8C9.30001 7.81435 9.37376 7.6363 9.50503 7.50503L12.8384 4.17169C13.1117 3.89833 13.5549 3.89833 13.8283 4.17169Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronsRightLeftIcon;
