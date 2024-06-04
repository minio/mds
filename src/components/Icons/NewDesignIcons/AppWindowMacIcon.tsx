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

const AppWindowMacIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.6667 3.36667C2.31691 3.36667 2.03336 3.65023 2.03336 4.00001V12C2.03336 12.3498 2.31691 12.6333 2.6667 12.6333H13.3334C13.6831 12.6333 13.9667 12.3498 13.9667 12V4.00001C13.9667 3.65023 13.6831 3.36667 13.3334 3.36667H2.6667ZM0.633362 4.00001C0.633362 2.87703 1.54372 1.96667 2.6667 1.96667H13.3334C14.4563 1.96667 15.3667 2.87703 15.3667 4.00001V12C15.3667 13.123 14.4563 14.0333 13.3334 14.0333H2.6667C1.54372 14.0333 0.633362 13.123 0.633362 12V4.00001ZM3.30003 5.33334C3.30003 4.94674 3.61343 4.63334 4.00003 4.63334H4.0067C4.39329 4.63334 4.7067 4.94674 4.7067 5.33334C4.7067 5.71994 4.39329 6.03334 4.0067 6.03334H4.00003C3.61343 6.03334 3.30003 5.71994 3.30003 5.33334ZM5.96669 5.33334C5.96669 4.94674 6.2801 4.63334 6.66669 4.63334H6.67336C7.05996 4.63334 7.37336 4.94674 7.37336 5.33334C7.37336 5.71994 7.05996 6.03334 6.67336 6.03334H6.66669C6.2801 6.03334 5.96669 5.71994 5.96669 5.33334ZM8.63336 5.33334C8.63336 4.94674 8.94676 4.63334 9.33336 4.63334H9.34003C9.72663 4.63334 10.04 4.94674 10.04 5.33334C10.04 5.71994 9.72663 6.03334 9.34003 6.03334H9.33336C8.94676 6.03334 8.63336 5.71994 8.63336 5.33334Z"
      fill="currentColor"
    />
  </svg>
);
export default AppWindowMacIcon;
