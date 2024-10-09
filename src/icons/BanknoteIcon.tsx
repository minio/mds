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

const BanknoteIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.6667 4.7C2.31691 4.7 2.03336 4.98356 2.03336 5.33334V10.6667C2.03336 11.0164 2.31691 11.3 2.6667 11.3H13.3334C13.6831 11.3 13.9667 11.0165 13.9667 10.6667V5.33334C13.9667 4.98356 13.6831 4.7 13.3334 4.7H2.6667ZM0.633362 5.33334C0.633362 4.21036 1.54372 3.3 2.6667 3.3H13.3334C14.4563 3.3 15.3667 4.21036 15.3667 5.33334V10.6667C15.3667 11.7896 14.4563 12.7 13.3334 12.7H2.6667C1.54372 12.7 0.633362 11.7896 0.633362 10.6667V5.33334ZM8.00003 7.36667C7.65025 7.36667 7.36669 7.65022 7.36669 8C7.36669 8.34978 7.65025 8.63334 8.00003 8.63334C8.34981 8.63334 8.63336 8.34978 8.63336 8C8.63336 7.65022 8.34981 7.36667 8.00003 7.36667ZM5.96669 8C5.96669 6.87702 6.87705 5.96667 8.00003 5.96667C9.12301 5.96667 10.0334 6.87702 10.0334 8C10.0334 9.12298 9.12301 10.0333 8.00003 10.0333C6.87705 10.0333 5.96669 9.12298 5.96669 8ZM3.30003 8C3.30003 7.6134 3.61343 7.3 4.00003 7.3H4.0067C4.39329 7.3 4.7067 7.6134 4.7067 8C4.7067 8.3866 4.39329 8.7 4.0067 8.7H4.00003C3.61343 8.7 3.30003 8.3866 3.30003 8ZM11.3 8C11.3 7.6134 11.6134 7.3 12 7.3H12.0067C12.3933 7.3 12.7067 7.6134 12.7067 8C12.7067 8.3866 12.3933 8.7 12.0067 8.7H12C11.6134 8.7 11.3 8.3866 11.3 8Z"
      fill="currentColor"
    />
  </svg>
);
export default BanknoteIcon;
