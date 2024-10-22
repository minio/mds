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

const GalleryVerticalEndIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.96665 1.33336C3.96665 0.946762 4.28006 0.633362 4.66665 0.633362H11.3333C11.7199 0.633362 12.0333 0.946762 12.0333 1.33336C12.0333 1.71996 11.7199 2.03336 11.3333 2.03336H4.66665C4.28006 2.03336 3.96665 1.71996 3.96665 1.33336ZM2.63332 4.00003C2.63332 3.61343 2.94672 3.30003 3.33332 3.30003H12.6667C13.0533 3.30003 13.3667 3.61343 13.3667 4.00003C13.3667 4.38663 13.0533 4.70003 12.6667 4.70003H3.33332C2.94672 4.70003 2.63332 4.38663 2.63332 4.00003ZM3.33332 7.36669C2.98354 7.36669 2.69999 7.65025 2.69999 8.00003V13.3334C2.69999 13.6831 2.98354 13.9667 3.33332 13.9667H12.6667C13.0164 13.9667 13.3 13.6831 13.3 13.3334V8.00003C13.3 7.65025 13.0164 7.36669 12.6667 7.36669H3.33332ZM1.29999 8.00003C1.29999 6.87705 2.21034 5.96669 3.33332 5.96669H12.6667C13.7896 5.96669 14.7 6.87705 14.7 8.00003V13.3334C14.7 14.4563 13.7896 15.3667 12.6667 15.3667H3.33332C2.21034 15.3667 1.29999 14.4563 1.29999 13.3334V8.00003Z"
      fill="currentColor"
    />
  </svg>
);
export default GalleryVerticalEndIcon;
