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

const ArrowLeftToLineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 2.63333C2.3866 2.63333 2.7 2.94673 2.7 3.33333V12.6667C2.7 13.0533 2.3866 13.3667 2 13.3667C1.6134 13.3667 1.3 13.0533 1.3 12.6667V3.33333C1.3 2.94673 1.6134 2.63333 2 2.63333ZM9.16164 3.50502C9.43501 3.77839 9.43501 4.22161 9.16164 4.49497L6.35662 7.3H14C14.3866 7.3 14.7 7.6134 14.7 8C14.7 8.3866 14.3866 8.7 14 8.7H6.35662L9.16164 11.505C9.43501 11.7784 9.43501 12.2216 9.16164 12.495C8.88828 12.7683 8.44506 12.7683 8.1717 12.495L4.1717 8.49497C4.04042 8.3637 3.96667 8.18565 3.96667 8C3.96667 7.81435 4.04042 7.6363 4.1717 7.50502L8.1717 3.50502C8.44506 3.23166 8.88828 3.23166 9.16164 3.50502Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowLeftToLineIcon;
