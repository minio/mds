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

const MilestoneIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99999 1.29999C8.38659 1.29999 8.69999 1.61339 8.69999 1.99999V3.29999H12C12.1695 3.29999 12.3333 3.36153 12.4609 3.47318L15.1276 5.80652C15.2795 5.93944 15.3667 6.13147 15.3667 6.33332C15.3667 6.53517 15.2795 6.7272 15.1276 6.86012L12.4609 9.19346C12.3333 9.30511 12.1695 9.36665 12 9.36665H8.69999V14C8.69999 14.3866 8.38659 14.7 7.99999 14.7C7.61339 14.7 7.29999 14.3866 7.29999 14V9.36665H3.33332C2.79405 9.36665 2.27686 9.15243 1.89554 8.7711C1.51421 8.38978 1.29999 7.87259 1.29999 7.33332V5.33332C1.29999 4.79405 1.51421 4.27686 1.89554 3.89554C2.27686 3.51421 2.79405 3.29999 3.33332 3.29999H7.29999V1.99999C7.29999 1.61339 7.61339 1.29999 7.99999 1.29999ZM3.33332 4.69999C3.16535 4.69999 3.00426 4.76671 2.88549 4.88549C2.76671 5.00426 2.69999 5.16535 2.69999 5.33332V7.33332C2.69999 7.50129 2.76671 7.66238 2.88549 7.78116C3.00426 7.89993 3.16535 7.96665 3.33332 7.96665H11.737L13.6036 6.33332L11.737 4.69999H3.33332Z"
      fill="currentColor"
    />
  </svg>
);
export default MilestoneIcon;
