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

const VoicemailIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 6.0333C2.91384 6.0333 2.03333 6.91381 2.03333 7.99997C2.03333 9.08613 2.91384 9.96663 4 9.96663C5.08616 9.96663 5.96666 9.08613 5.96666 7.99997C5.96666 6.91381 5.08616 6.0333 4 6.0333ZM6.73283 9.96663C7.13168 9.41337 7.36666 8.73411 7.36666 7.99997C7.36666 6.14061 5.85936 4.6333 4 4.6333C2.14064 4.6333 0.633331 6.14061 0.633331 7.99997C0.633331 9.85933 2.14064 11.3666 4 11.3666H12C13.8594 11.3666 15.3667 9.85933 15.3667 7.99997C15.3667 6.14061 13.8594 4.6333 12 4.6333C10.1406 4.6333 8.63333 6.14061 8.63333 7.99997C8.63333 8.73411 8.86831 9.41337 9.26717 9.96663H6.73283ZM12 9.96663C13.0862 9.96663 13.9667 9.08613 13.9667 7.99997C13.9667 6.91381 13.0862 6.0333 12 6.0333C10.9138 6.0333 10.0333 6.91381 10.0333 7.99997C10.0333 9.08613 10.9138 9.96663 12 9.96663Z"
      fill="currentColor"
    />
  </svg>
);
export default VoicemailIcon;
