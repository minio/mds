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

const MicrowaveIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66666 3.36667C2.31688 3.36667 2.03333 3.65023 2.03333 4.00001V11.3333C2.03333 11.6831 2.31688 11.9667 2.66666 11.9667H13.3333C13.6831 11.9667 13.9667 11.6831 13.9667 11.3333V4.00001C13.9667 3.65023 13.6831 3.36667 13.3333 3.36667H2.66666ZM12.7 13.3667H13.3333C14.4563 13.3667 15.3667 12.4563 15.3667 11.3333V4.00001C15.3667 2.87703 14.4563 1.96667 13.3333 1.96667H2.66666C1.54369 1.96667 0.633331 2.87703 0.633331 4.00001V11.3333C0.633331 12.4563 1.54369 13.3667 2.66666 13.3667H3.3V14C3.3 14.3866 3.6134 14.7 4 14.7C4.3866 14.7 4.7 14.3866 4.7 14V13.3667H11.3V14C11.3 14.3866 11.6134 14.7 12 14.7C12.3866 14.7 12.7 14.3866 12.7 14V13.3667ZM4.7 6.03334V9.30001H8.63333V6.03334H4.7ZM3.3 6.00001C3.3 5.24522 3.91188 4.63334 4.66666 4.63334H8.66666C9.42145 4.63334 10.0333 5.24522 10.0333 6.00001V9.33334C10.0333 10.0881 9.42145 10.7 8.66666 10.7H4.66666C3.91188 10.7 3.3 10.0881 3.3 9.33334V6.00001ZM12 4.63334C12.3866 4.63334 12.7 4.94674 12.7 5.33334V10C12.7 10.3866 12.3866 10.7 12 10.7C11.6134 10.7 11.3 10.3866 11.3 10V5.33334C11.3 4.94674 11.6134 4.63334 12 4.63334Z"
      fill="currentColor"
    />
  </svg>
);
export default MicrowaveIcon;
