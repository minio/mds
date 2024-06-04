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

const BookOpenCheckIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.633333 2C0.633333 1.6134 0.946734 1.3 1.33333 1.3H5.33333C6.41636 1.3 7.38332 1.81684 8 2.61631C8.61669 1.81684 9.58364 1.3 10.6667 1.3H14.6667C15.0533 1.3 15.3667 1.6134 15.3667 2V4C15.3667 4.3866 15.0533 4.7 14.6667 4.7C14.2801 4.7 13.9667 4.3866 13.9667 4V2.7H10.6667C9.5866 2.7 8.7 3.5866 8.7 4.66667V11.6202C9.08302 11.4153 9.52491 11.3 10 11.3H13.9667V10.4667C13.9667 10.0801 14.2801 9.76667 14.6667 9.76667C15.0533 9.76667 15.3667 10.0801 15.3667 10.4667V12C15.3667 12.3866 15.0533 12.7 14.6667 12.7H10C9.25327 12.7 8.7 13.2533 8.7 14C8.7 14.3866 8.3866 14.7 8 14.7C7.6134 14.7 7.3 14.3866 7.3 14C7.3 13.2533 6.74673 12.7 6 12.7H1.33333C0.946734 12.7 0.633333 12.3866 0.633333 12V2ZM7.3 11.6202C6.91698 11.4153 6.47509 11.3 6 11.3H2.03333V2.7H5.33333C6.4134 2.7 7.3 3.5866 7.3 4.66667V11.6202ZM15.1616 6.17169C15.435 6.44506 15.435 6.88828 15.1616 7.16164L12.495 9.82831C12.3637 9.95959 12.1857 10.0333 12 10.0333C11.8143 10.0333 11.6363 9.95959 11.505 9.82831L10.1717 8.49498C9.89832 8.22161 9.89832 7.7784 10.1717 7.50503C10.4451 7.23166 10.8883 7.23166 11.1616 7.50503L12 8.34339L14.1717 6.17169C14.4451 5.89833 14.8883 5.89833 15.1616 6.17169Z"
      fill="currentColor"
    />
  </svg>
);
export default BookOpenCheckIcon;
