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

const ListChecksIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.49497 2.83839C6.76834 3.11175 6.76834 3.55497 6.49497 3.82834L3.82831 6.495C3.55494 6.76837 3.11172 6.76837 2.83836 6.495L1.50502 5.16167C1.23166 4.8883 1.23166 4.44509 1.50502 4.17172C1.77839 3.89835 2.22161 3.89835 2.49497 4.17172L3.33333 5.01008L5.50502 2.83839C5.77839 2.56502 6.22161 2.56502 6.49497 2.83839ZM7.96667 4.00003C7.96667 3.61343 8.28007 3.30003 8.66667 3.30003H14C14.3866 3.30003 14.7 3.61343 14.7 4.00003C14.7 4.38663 14.3866 4.70003 14 4.70003H8.66667C8.28007 4.70003 7.96667 4.38663 7.96667 4.00003ZM7.96667 8.00003C7.96667 7.61343 8.28007 7.30003 8.66667 7.30003H14C14.3866 7.30003 14.7 7.61343 14.7 8.00003C14.7 8.38663 14.3866 8.70003 14 8.70003H8.66667C8.28007 8.70003 7.96667 8.38663 7.96667 8.00003ZM6.49497 9.50505C6.76834 9.77842 6.76834 10.2216 6.49497 10.495L3.82831 13.1617C3.55494 13.435 3.11172 13.435 2.83836 13.1617L1.50502 11.8283C1.23166 11.555 1.23166 11.1118 1.50502 10.8384C1.77839 10.565 2.22161 10.565 2.49497 10.8384L3.33333 11.6767L5.50502 9.50505C5.77839 9.23169 6.22161 9.23169 6.49497 9.50505ZM7.96667 12C7.96667 11.6134 8.28007 11.3 8.66667 11.3H14C14.3866 11.3 14.7 11.6134 14.7 12C14.7 12.3866 14.3866 12.7 14 12.7H8.66667C8.28007 12.7 7.96667 12.3866 7.96667 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ListChecksIcon;
