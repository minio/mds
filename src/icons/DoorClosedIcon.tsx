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

const DoorClosedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.89552 2.56222C4.27684 2.1809 4.79403 1.96667 5.3333 1.96667H10.6666C11.2059 1.96667 11.7231 2.1809 12.1044 2.56222C12.4857 2.94355 12.7 3.46073 12.7 4.00001V12.6333H14.6666C15.0532 12.6333 15.3666 12.9467 15.3666 13.3333C15.3666 13.7199 15.0532 14.0333 14.6666 14.0333H1.3333C0.946701 14.0333 0.633301 13.7199 0.633301 13.3333C0.633301 12.9467 0.946701 12.6333 1.3333 12.6333H3.29997V4.00001C3.29997 3.46073 3.51419 2.94355 3.89552 2.56222ZM4.69997 12.6333H11.3V4.00001C11.3 3.83204 11.2332 3.67095 11.1145 3.55217C10.9957 3.4334 10.8346 3.36667 10.6666 3.36667H5.3333C5.16533 3.36667 5.00424 3.4334 4.88547 3.55217C4.76669 3.67095 4.69997 3.83204 4.69997 4.00001V12.6333ZM9.3333 7.30001C9.7199 7.30001 10.0333 7.61341 10.0333 8.00001V8.00667C10.0333 8.39327 9.7199 8.70668 9.3333 8.70668C8.9467 8.70668 8.6333 8.39327 8.6333 8.00667V8.00001C8.6333 7.61341 8.9467 7.30001 9.3333 7.30001Z"
      fill="currentColor"
    />
  </svg>
);
export default DoorClosedIcon;
