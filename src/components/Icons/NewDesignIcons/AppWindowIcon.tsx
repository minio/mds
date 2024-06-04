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

const AppWindowIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.6667 3.36667C2.31691 3.36667 2.03336 3.65023 2.03336 4.00001V4.63334H3.30003V3.36667H2.6667ZM2.6667 1.96667C1.54372 1.96667 0.633362 2.87703 0.633362 4.00001V12C0.633362 13.123 1.54372 14.0333 2.6667 14.0333H13.3334C14.4563 14.0333 15.3667 13.123 15.3667 12V4.00001C15.3667 2.87703 14.4563 1.96667 13.3334 1.96667H2.6667ZM4.70003 3.36667V4.63334H5.96669V3.36667H4.70003ZM7.36669 3.36667V4.63334H13.9667V4.00001C13.9667 3.65023 13.6831 3.36667 13.3334 3.36667H7.36669ZM13.9667 6.03334H2.03336V12C2.03336 12.3498 2.31691 12.6333 2.6667 12.6333H13.3334C13.6831 12.6333 13.9667 12.3498 13.9667 12V6.03334Z"
      fill="currentColor"
    />
  </svg>
);
export default AppWindowIcon;
