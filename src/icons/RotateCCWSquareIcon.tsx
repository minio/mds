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

const RotateCCWSquareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.495 0.838326C10.7683 1.11169 10.7683 1.55491 10.495 1.82828L9.68996 2.6333H12C12.5393 2.6333 13.0565 2.84753 13.4378 3.22885C13.8191 3.61017 14.0333 4.12736 14.0333 4.66663V5.99997C14.0333 6.38657 13.7199 6.69997 13.3333 6.69997C12.9467 6.69997 12.6333 6.38657 12.6333 5.99997V4.66663C12.6333 4.49866 12.5666 4.33757 12.4478 4.2188C12.3291 4.10003 12.168 4.0333 12 4.0333H9.68996L10.495 4.83833C10.7683 5.11169 10.7683 5.55491 10.495 5.82828C10.2216 6.10164 9.7784 6.10164 9.50503 5.82828L7.50503 3.82828C7.23167 3.55491 7.23167 3.11169 7.50503 2.83833L9.50503 0.838326C9.7784 0.564959 10.2216 0.564959 10.495 0.838326ZM4.00001 4.0333C3.83204 4.0333 3.67095 4.10003 3.55217 4.2188C3.4334 4.33757 3.36667 4.49866 3.36667 4.66663V12C3.36667 12.1679 3.4334 12.329 3.55217 12.4478C3.67095 12.5666 3.83204 12.6333 4.00001 12.6333H12C12.168 12.6333 12.3291 12.5666 12.4478 12.4478C12.5666 12.329 12.6333 12.1679 12.6333 12V8.66663C12.6333 8.28004 12.9467 7.96663 13.3333 7.96663C13.7199 7.96663 14.0333 8.28004 14.0333 8.66663V12C14.0333 12.5392 13.8191 13.0564 13.4378 13.4378C13.0565 13.8191 12.5393 14.0333 12 14.0333H4.00001C3.46073 14.0333 2.94355 13.8191 2.56222 13.4378C2.1809 13.0564 1.96667 12.5392 1.96667 12V4.66663C1.96667 4.12736 2.1809 3.61017 2.56222 3.22885C2.94355 2.84753 3.46073 2.6333 4.00001 2.6333H5.33334C5.71994 2.6333 6.03334 2.9467 6.03334 3.3333C6.03334 3.7199 5.71994 4.0333 5.33334 4.0333H4.00001Z"
      fill="currentColor"
    />
  </svg>
);
export default RotateCCWSquareIcon;
