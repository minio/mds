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

const BookCopyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66663 2.03333C2.49866 2.03333 2.33757 2.10006 2.2188 2.21883C2.10003 2.3376 2.0333 2.49869 2.0333 2.66666V8.73448C2.23588 8.66807 2.44946 8.63333 2.66663 8.63333H3.3333C3.7199 8.63333 4.0333 8.94673 4.0333 9.33333C4.0333 9.71993 3.7199 10.0333 3.3333 10.0333H2.66663C2.49866 10.0333 2.33757 10.1001 2.2188 10.2188C2.10003 10.3376 2.0333 10.4987 2.0333 10.6667C2.0333 10.8346 2.10003 10.9957 2.2188 11.1145C2.33757 11.2333 2.49866 11.3 2.66663 11.3H3.3333C3.7199 11.3 4.0333 11.6134 4.0333 12C4.0333 12.3866 3.7199 12.7 3.3333 12.7H2.66663C2.12736 12.7 1.61017 12.4858 1.22885 12.1044C0.847526 11.7231 0.633301 11.2059 0.633301 10.6667V2.66666C0.633301 2.12739 0.847526 1.6102 1.22885 1.22888C1.61017 0.847557 2.12736 0.633331 2.66663 0.633331H9.99997C10.3866 0.633331 10.7 0.946732 10.7 1.33333C10.7 1.71993 10.3866 2.03333 9.99997 2.03333H2.66663ZM5.89552 3.89555C6.27684 3.51422 6.79403 3.3 7.3333 3.3H14.6666C15.0532 3.3 15.3666 3.6134 15.3666 4V14.6667C15.3666 15.0533 15.0532 15.3667 14.6666 15.3667H7.3333C6.79403 15.3667 6.27684 15.1524 5.89552 14.7711C5.51419 14.3898 5.29997 13.8726 5.29997 13.3333V5.33333C5.29997 4.79406 5.51419 4.27687 5.89552 3.89555ZM6.69997 11.4011V5.33333C6.69997 5.16536 6.76669 5.00427 6.88547 4.8855C7.00424 4.76672 7.16533 4.7 7.3333 4.7H13.9666V11.3H7.3333C7.11613 11.3 6.90254 11.3347 6.69997 11.4011ZM13.9666 12.7H7.3333C7.16533 12.7 7.00424 12.7667 6.88547 12.8855C6.76669 13.0043 6.69997 13.1654 6.69997 13.3333C6.69997 13.5013 6.76669 13.6624 6.88547 13.7812C7.00424 13.8999 7.16533 13.9667 7.3333 13.9667H13.9666V12.7Z"
      fill="currentColor"
    />
  </svg>
);
export default BookCopyIcon;
