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

const RotateCWSquareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.50503 0.838326C5.7784 0.564959 6.22162 0.564959 6.49498 0.838326L8.49498 2.83833C8.76835 3.11169 8.76835 3.55491 8.49498 3.82828L6.49498 5.82828C6.22162 6.10164 5.7784 6.10164 5.50503 5.82828C5.23167 5.55491 5.23167 5.11169 5.50503 4.83833L6.31006 4.0333H4.00001C3.83204 4.0333 3.67095 4.10003 3.55217 4.2188C3.4334 4.33757 3.36667 4.49866 3.36667 4.66663V6.66663C3.36667 7.05323 3.05327 7.36663 2.66667 7.36663C2.28008 7.36663 1.96667 7.05323 1.96667 6.66663V4.66663C1.96667 4.12736 2.1809 3.61017 2.56222 3.22885C2.94355 2.84753 3.46073 2.6333 4.00001 2.6333H6.31006L5.50503 1.82828C5.23167 1.55491 5.23167 1.11169 5.50503 0.838326ZM9.96667 3.3333C9.96667 2.9467 10.2801 2.6333 10.6667 2.6333H12C12.5393 2.6333 13.0565 2.84753 13.4378 3.22885C13.8191 3.61017 14.0333 4.12736 14.0333 4.66663V12C14.0333 12.5392 13.8191 13.0564 13.4378 13.4378C13.0565 13.8191 12.5393 14.0333 12 14.0333H4.00001C3.46073 14.0333 2.94355 13.8191 2.56222 13.4378C2.1809 13.0564 1.96667 12.5392 1.96667 12V9.3333C1.96667 8.9467 2.28008 8.6333 2.66667 8.6333C3.05327 8.6333 3.36667 8.9467 3.36667 9.3333V12C3.36667 12.1679 3.4334 12.329 3.55217 12.4478C3.67095 12.5666 3.83204 12.6333 4.00001 12.6333H12C12.168 12.6333 12.3291 12.5666 12.4478 12.4478C12.5666 12.329 12.6333 12.1679 12.6333 12V4.66663C12.6333 4.49866 12.5666 4.33757 12.4478 4.2188C12.3291 4.10003 12.168 4.0333 12 4.0333H10.6667C10.2801 4.0333 9.96667 3.7199 9.96667 3.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default RotateCWSquareIcon;
