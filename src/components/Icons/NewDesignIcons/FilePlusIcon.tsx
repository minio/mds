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

const FilePlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.5621 1.22888C2.94343 0.847557 3.46061 0.633331 3.99989 0.633331H9.99989C10.1855 0.633331 10.3636 0.707081 10.4949 0.838357L13.8282 4.17169C13.9595 4.30297 14.0332 4.48101 14.0332 4.66666V13.3333C14.0332 13.8726 13.819 14.3898 13.4377 14.7711C13.0563 15.1524 12.5392 15.3667 11.9999 15.3667H3.99989C3.46061 15.3667 2.94343 15.1524 2.5621 14.7711C2.18078 14.3898 1.96655 13.8726 1.96655 13.3333V2.66666C1.96655 2.12739 2.18078 1.6102 2.5621 1.22888ZM12.3099 4.63333L10.0332 2.35661V4C10.0332 4.16797 10.0999 4.32906 10.2187 4.44783C10.3375 4.56661 10.4986 4.63333 10.6666 4.63333H12.3099ZM8.63322 2.03333V4C8.63322 4.53927 8.84745 5.05646 9.22877 5.43778C9.61009 5.81911 10.1273 6.03333 10.6666 6.03333H12.6332V13.3333C12.6332 13.5013 12.5665 13.6624 12.4477 13.7812C12.3289 13.8999 12.1679 13.9667 11.9999 13.9667H3.99989C3.83192 13.9667 3.67083 13.8999 3.55205 13.7812C3.43328 13.6624 3.36655 13.5013 3.36655 13.3333V2.66666C3.36655 2.49869 3.43328 2.3376 3.55205 2.21883C3.67082 2.10006 3.83192 2.03333 3.99989 2.03333H8.63322ZM7.99989 7.3C8.38649 7.3 8.69989 7.6134 8.69989 8V9.3H9.99989C10.3865 9.3 10.6999 9.6134 10.6999 10C10.6999 10.3866 10.3865 10.7 9.99989 10.7H8.69989V12C8.69989 12.3866 8.38649 12.7 7.99989 12.7C7.61329 12.7 7.29989 12.3866 7.29989 12V10.7H5.99989C5.61329 10.7 5.29989 10.3866 5.29989 10C5.29989 9.6134 5.61329 9.3 5.99989 9.3H7.29989V8C7.29989 7.6134 7.61329 7.3 7.99989 7.3Z"
      fill="currentColor"
    />
  </svg>
);
export default FilePlusIcon;
