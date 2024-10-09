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

const FileInputIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.56218 1.22888C2.94351 0.847557 3.46069 0.633331 3.99997 0.633331H9.99997C10.1856 0.633331 10.3637 0.707081 10.4949 0.838357L13.8283 4.17169C13.9596 4.30297 14.0333 4.48101 14.0333 4.66666V13.3333C14.0333 13.8726 13.8191 14.3898 13.4378 14.7711C13.0564 15.1524 12.5392 15.3667 12 15.3667H2.66663C2.28003 15.3667 1.96663 15.0533 1.96663 14.6667C1.96663 14.2801 2.28003 13.9667 2.66663 13.9667H12C12.1679 13.9667 12.329 13.8999 12.4478 13.7812C12.5666 13.6624 12.6333 13.5013 12.6333 13.3333V6.03333H10.6666C10.1274 6.03333 9.61017 5.81911 9.22885 5.43778C8.84753 5.05646 8.6333 4.53927 8.6333 4V2.03333H3.99997C3.832 2.03333 3.67091 2.10006 3.55213 2.21883C3.43336 2.3376 3.36663 2.49869 3.36663 2.66666V5.33333C3.36663 5.71993 3.05323 6.03333 2.66663 6.03333C2.28003 6.03333 1.96663 5.71993 1.96663 5.33333V2.66666C1.96663 2.12739 2.18086 1.6102 2.56218 1.22888ZM10.0333 2.35661V4C10.0333 4.16797 10.1 4.32906 10.2188 4.44783C10.3376 4.56661 10.4987 4.63333 10.6666 4.63333H12.31L10.0333 2.35661ZM5.50499 7.50502C5.77836 7.23166 6.22158 7.23166 6.49494 7.50502L8.49494 9.50502C8.62622 9.6363 8.69997 9.81435 8.69997 10C8.69997 10.1856 8.62622 10.3637 8.49494 10.495L6.49494 12.495C6.22158 12.7683 5.77836 12.7683 5.50499 12.495C5.23163 12.2216 5.23163 11.7784 5.50499 11.505L6.31002 10.7H1.3333C0.946701 10.7 0.633301 10.3866 0.633301 10C0.633301 9.6134 0.946701 9.3 1.3333 9.3H6.31002L5.50499 8.49497C5.23163 8.22161 5.23163 7.77839 5.50499 7.50502Z"
      fill="currentColor"
    />
  </svg>
);
export default FileInputIcon;
