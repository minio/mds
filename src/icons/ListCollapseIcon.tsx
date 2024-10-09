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

const ListCollapseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.50503 2.83839C1.7784 2.56502 2.22161 2.56502 2.49498 2.83839L4.16164 4.50505C4.29292 4.63633 4.36667 4.81438 4.36667 5.00003C4.36667 5.18568 4.29292 5.36373 4.16164 5.495L2.49498 7.16167C2.22161 7.43504 1.7784 7.43504 1.50503 7.16167C1.23166 6.8883 1.23166 6.44509 1.50503 6.17172L2.67672 5.00003L1.50503 3.82834C1.23166 3.55497 1.23166 3.11175 1.50503 2.83839ZM5.96667 4.00003C5.96667 3.61343 6.28007 3.30003 6.66667 3.30003H14C14.3866 3.30003 14.7 3.61343 14.7 4.00003C14.7 4.38663 14.3866 4.70003 14 4.70003H6.66667C6.28007 4.70003 5.96667 4.38663 5.96667 4.00003ZM5.96667 8.00003C5.96667 7.61343 6.28007 7.30003 6.66667 7.30003H14C14.3866 7.30003 14.7 7.61343 14.7 8.00003C14.7 8.38663 14.3866 8.70003 14 8.70003H6.66667C6.28007 8.70003 5.96667 8.38663 5.96667 8.00003ZM1.50503 8.83839C1.7784 8.56502 2.22161 8.56502 2.49498 8.83839L4.16164 10.5051C4.29292 10.6363 4.36667 10.8144 4.36667 11C4.36667 11.1857 4.29292 11.3637 4.16164 11.495L2.49498 13.1617C2.22161 13.435 1.7784 13.435 1.50503 13.1617C1.23166 12.8883 1.23166 12.4451 1.50503 12.1717L2.67672 11L1.50503 9.82834C1.23166 9.55497 1.23166 9.11175 1.50503 8.83839ZM5.96667 12C5.96667 11.6134 6.28007 11.3 6.66667 11.3H14C14.3866 11.3 14.7 11.6134 14.7 12C14.7 12.3866 14.3866 12.7 14 12.7H6.66667C6.28007 12.7 5.96667 12.3866 5.96667 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ListCollapseIcon;
