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

const ListTodoIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.69999 4.03336V6.63336H5.29999V4.03336H2.69999ZM1.29999 4.00003C1.29999 3.24524 1.91187 2.63336 2.66665 2.63336H5.33332C6.08811 2.63336 6.69999 3.24524 6.69999 4.00003V6.66669C6.69999 7.42148 6.08811 8.03336 5.33332 8.03336H2.66665C1.91187 8.03336 1.29999 7.42148 1.29999 6.66669V4.00003ZM7.96665 4.00003C7.96665 3.61343 8.28006 3.30003 8.66665 3.30003H14C14.3866 3.30003 14.7 3.61343 14.7 4.00003C14.7 4.38663 14.3866 4.70003 14 4.70003H8.66665C8.28006 4.70003 7.96665 4.38663 7.96665 4.00003ZM7.96665 8.00003C7.96665 7.61343 8.28006 7.30003 8.66665 7.30003H14C14.3866 7.30003 14.7 7.61343 14.7 8.00003C14.7 8.38663 14.3866 8.70003 14 8.70003H8.66665C8.28006 8.70003 7.96665 8.38663 7.96665 8.00003ZM6.49496 9.50505C6.76833 9.77842 6.76833 10.2216 6.49496 10.495L3.8283 13.1617C3.55493 13.435 3.11171 13.435 2.83835 13.1617L1.50501 11.8283C1.23165 11.555 1.23165 11.1118 1.50501 10.8384C1.77838 10.565 2.2216 10.565 2.49496 10.8384L3.33332 11.6767L5.50501 9.50505C5.77838 9.23169 6.2216 9.23169 6.49496 9.50505ZM7.96665 12C7.96665 11.6134 8.28006 11.3 8.66665 11.3H14C14.3866 11.3 14.7 11.6134 14.7 12C14.7 12.3866 14.3866 12.7 14 12.7H8.66665C8.28006 12.7 7.96665 12.3866 7.96665 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ListTodoIcon;
