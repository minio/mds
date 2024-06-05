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

const FileCheck2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.5622 1.22888C2.94353 0.847557 3.46071 0.633331 3.99999 0.633331H9.99999C10.1856 0.633331 10.3637 0.707081 10.495 0.838357L13.8283 4.17169C13.9596 4.30297 14.0333 4.48101 14.0333 4.66666V13.3333C14.0333 13.8726 13.8191 14.3898 13.4378 14.7711C13.0564 15.1524 12.5393 15.3667 12 15.3667H2.66665C2.28006 15.3667 1.96665 15.0533 1.96665 14.6667C1.96665 14.2801 2.28006 13.9667 2.66665 13.9667H12C12.168 13.9667 12.329 13.8999 12.4478 13.7812C12.5666 13.6624 12.6333 13.5013 12.6333 13.3333V6.03333H10.6667C10.1274 6.03333 9.61019 5.81911 9.22887 5.43778C8.84755 5.05646 8.63332 4.53927 8.63332 4V2.03333H3.99999C3.83202 2.03333 3.67093 2.10006 3.55215 2.21883C3.43338 2.3376 3.36665 2.49869 3.36665 2.66666V5.33333C3.36665 5.71993 3.05325 6.03333 2.66665 6.03333C2.28006 6.03333 1.96665 5.71993 1.96665 5.33333V2.66666C1.96665 2.12739 2.18088 1.6102 2.5622 1.22888ZM10.0333 2.35661V4C10.0333 4.16797 10.1 4.32906 10.2188 4.44783C10.3376 4.56661 10.4987 4.63333 10.6667 4.63333H12.31L10.0333 2.35661ZM6.49496 8.17169C6.76833 8.44506 6.76833 8.88827 6.49496 9.16164L3.8283 11.8283C3.55493 12.1017 3.11171 12.1017 2.83835 11.8283L1.50501 10.495C1.23165 10.2216 1.23165 9.77839 1.50501 9.50502C1.77838 9.23166 2.2216 9.23166 2.49496 9.50502L3.33332 10.3434L5.50501 8.17169C5.77838 7.89832 6.2216 7.89832 6.49496 8.17169Z"
      fill="currentColor"
    />
  </svg>
);
export default FileCheck2Icon;
