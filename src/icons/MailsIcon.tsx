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

const MailsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.33333 3.36667C4.98355 3.36667 4.7 3.65023 4.7 4.00001V4.24633L9.06055 6.56786C9.23577 6.65961 9.4309 6.65961 9.60612 6.56786C9.60651 6.56765 9.60691 6.56744 9.60731 6.56723L13.9667 4.24633V4.00001C13.9667 3.65023 13.6831 3.36667 13.3333 3.36667H5.33333ZM15.3667 4.65216V4.00001C15.3667 2.87703 14.4563 1.96667 13.3333 1.96667H5.33333C4.21035 1.96667 3.3 2.87703 3.3 4.00001V4.65216C3.29981 4.66145 3.29982 4.67072 3.3 4.67998V10C3.3 11.123 4.21035 12.0333 5.33333 12.0333H13.3333C14.4563 12.0333 15.3667 11.123 15.3667 10V4.67998C15.3668 4.67072 15.3669 4.66145 15.3667 4.65216ZM13.9667 5.83238L10.2594 7.80612C9.67528 8.11353 8.99139 8.11353 8.40731 7.80612L8.40437 7.80457L4.7 5.83238V10C4.7 10.3498 4.98355 10.6333 5.33333 10.6333H13.3333C13.6831 10.6333 13.9667 10.3498 13.9667 10V5.83238ZM1.33333 4.63334C1.71993 4.63334 2.03333 4.94674 2.03333 5.33334V12.6667C2.03333 13.0134 2.31993 13.3 2.66667 13.3H12C12.3866 13.3 12.7 13.6134 12.7 14C12.7 14.3866 12.3866 14.7 12 14.7H2.66667C1.54673 14.7 0.633333 13.7866 0.633333 12.6667V5.33334C0.633333 4.94674 0.946734 4.63334 1.33333 4.63334Z"
      fill="currentColor"
    />
  </svg>
);
export default MailsIcon;
