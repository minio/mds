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

const FileMinus2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.56226 1.22888C2.94359 0.847557 3.46078 0.633331 4.00005 0.633331H10C10.1857 0.633331 10.3637 0.707081 10.495 0.838357L13.8284 4.17169C13.9596 4.30297 14.0334 4.48101 14.0334 4.66666V13.3333C14.0334 13.8726 13.8192 14.3898 13.4378 14.7711C13.0565 15.1524 12.5393 15.3667 12 15.3667H2.66672C2.28012 15.3667 1.96672 15.0533 1.96672 14.6667C1.96672 14.2801 2.28012 13.9667 2.66672 13.9667H12C12.168 13.9667 12.3291 13.8999 12.4479 13.7812C12.5667 13.6624 12.6334 13.5013 12.6334 13.3333V6.03333H10.6667C10.1274 6.03333 9.61026 5.81911 9.22893 5.43778C8.84761 5.05646 8.63338 4.53927 8.63338 4V2.03333H4.00005C3.83208 2.03333 3.67099 2.10006 3.55221 2.21883C3.43344 2.3376 3.36672 2.49869 3.36672 2.66666V5.33333C3.36672 5.71993 3.05331 6.03333 2.66672 6.03333C2.28012 6.03333 1.96672 5.71993 1.96672 5.33333V2.66666C1.96672 2.12739 2.18094 1.6102 2.56226 1.22888ZM10.0334 2.35661V4C10.0334 4.16797 10.1001 4.32906 10.2189 4.44783C10.3377 4.56661 10.4987 4.63333 10.6667 4.63333H12.3101L10.0334 2.35661ZM1.30005 10C1.30005 9.6134 1.61345 9.3 2.00005 9.3H6.00005C6.38665 9.3 6.70005 9.6134 6.70005 10C6.70005 10.3866 6.38665 10.7 6.00005 10.7H2.00005C1.61345 10.7 1.30005 10.3866 1.30005 10Z"
      fill="currentColor"
    />
  </svg>
);
export default FileMinus2Icon;
