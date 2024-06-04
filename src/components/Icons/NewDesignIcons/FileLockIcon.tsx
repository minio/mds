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

const FileLockIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.56222 1.22888C2.94355 0.847557 3.46073 0.633331 4.00001 0.633331H10C10.1857 0.633331 10.3637 0.707081 10.495 0.838357L13.8283 4.17169C13.9596 4.30297 14.0333 4.48101 14.0333 4.66666V13.3333C14.0333 13.8726 13.8191 14.3898 13.4378 14.7711C13.0565 15.1524 12.5393 15.3667 12 15.3667H4.00001C3.46073 15.3667 2.94355 15.1524 2.56222 14.7711C2.1809 14.3898 1.96667 13.8726 1.96667 13.3333V2.66666C1.96667 2.12739 2.1809 1.6102 2.56222 1.22888ZM4.00001 2.03333C3.83204 2.03333 3.67095 2.10006 3.55217 2.21883C3.4334 2.3376 3.36667 2.49869 3.36667 2.66666V13.3333C3.36667 13.5013 3.4334 13.6624 3.55217 13.7812C3.67095 13.8999 3.83204 13.9667 4.00001 13.9667H12C12.168 13.9667 12.3291 13.8999 12.4478 13.7812C12.5666 13.6624 12.6333 13.5013 12.6333 13.3333V4.95661L9.71006 2.03333H4.00001ZM8.00001 6.03333C7.83204 6.03333 7.67095 6.10006 7.55217 6.21883C7.4334 6.3376 7.36667 6.49869 7.36667 6.66666V7.3H8.63334V6.66666C8.63334 6.49869 8.56662 6.3376 8.44784 6.21883C8.32907 6.10006 8.16798 6.03333 8.00001 6.03333ZM10.0333 7.3004V6.66666C10.0333 6.12739 9.81912 5.6102 9.43779 5.22888C9.05647 4.84756 8.53928 4.63333 8.00001 4.63333C7.46073 4.63333 6.94355 4.84756 6.56222 5.22888C6.1809 5.6102 5.96667 6.12739 5.96667 6.66666V7.3004C5.22729 7.31809 4.63334 7.92302 4.63334 8.66666V11.3333C4.63334 12.0881 5.24522 12.7 6.00001 12.7H10C10.7548 12.7 11.3667 12.0881 11.3667 11.3333V8.66666C11.3667 7.92302 10.7727 7.31809 10.0333 7.3004ZM6.03334 8.7V11.3H9.96667V8.7H6.03334Z"
      fill="currentColor"
    />
  </svg>
);
export default FileLockIcon;
