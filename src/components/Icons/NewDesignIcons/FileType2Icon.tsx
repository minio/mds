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

const FileType2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.56221 1.22888C2.94354 0.847557 3.46072 0.633331 4 0.633331H10C10.1856 0.633331 10.3637 0.707081 10.495 0.838357L13.8283 4.17169C13.9596 4.30297 14.0333 4.48101 14.0333 4.66666V13.3333C14.0333 13.8726 13.8191 14.3898 13.4378 14.7711C13.0565 15.1524 12.5393 15.3667 12 15.3667H2.66666C2.28007 15.3667 1.96666 15.0533 1.96666 14.6667C1.96666 14.2801 2.28007 13.9667 2.66666 13.9667H12C12.168 13.9667 12.3291 13.8999 12.4478 13.7812C12.5666 13.6624 12.6333 13.5013 12.6333 13.3333V6.03333H10.6667C10.1274 6.03333 9.6102 5.81911 9.22888 5.43778C8.84756 5.05646 8.63333 4.53927 8.63333 4V2.03333H4C3.83203 2.03333 3.67094 2.10006 3.55216 2.21883C3.43339 2.3376 3.36666 2.49869 3.36666 2.66666V5.33333C3.36666 5.71993 3.05326 6.03333 2.66666 6.03333C2.28007 6.03333 1.96666 5.71993 1.96666 5.33333V2.66666C1.96666 2.12739 2.18089 1.6102 2.56221 1.22888ZM10.0333 2.35661V4C10.0333 4.16797 10.1001 4.32906 10.2188 4.44783C10.3376 4.56661 10.4987 4.63333 10.6667 4.63333H12.31L10.0333 2.35661ZM0.633331 8C0.633331 7.6134 0.946732 7.3 1.33333 7.3H5.33333C5.71993 7.3 6.03333 7.6134 6.03333 8V8.66666C6.03333 9.05326 5.71993 9.36666 5.33333 9.36666C4.95791 9.36666 4.65151 9.07112 4.63411 8.7H4.03333V11.3008C4.40445 11.3182 4.7 11.6246 4.7 12C4.7 12.3866 4.3866 12.7 4 12.7H2.66666C2.28007 12.7 1.96666 12.3866 1.96666 12C1.96666 11.6246 2.26221 11.3182 2.63333 11.3008V8.7H2.03255C2.01515 9.07112 1.70876 9.36666 1.33333 9.36666C0.946732 9.36666 0.633331 9.05326 0.633331 8.66666V8Z"
      fill="currentColor"
    />
  </svg>
);
export default FileType2Icon;
