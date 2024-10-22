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

const ReplyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.49498 4.1717C6.76835 4.44507 6.76835 4.88828 6.49498 5.16165L4.35662 7.30001H10.6667C11.5596 7.30001 12.4159 7.65471 13.0473 8.28608C13.6786 8.91745 14.0333 9.77378 14.0333 10.6667V12C14.0333 12.3866 13.7199 12.7 13.3333 12.7C12.9467 12.7 12.6333 12.3866 12.6333 12V10.6667C12.6333 10.1451 12.4261 9.64485 12.0573 9.27603C11.6885 8.90721 11.1883 8.70001 10.6667 8.70001H4.35662L6.49498 10.8384C6.76835 11.1117 6.76835 11.5549 6.49498 11.8283C6.22162 12.1017 5.7784 12.1017 5.50503 11.8283L2.1717 8.49498C1.89833 8.22162 1.89833 7.7784 2.1717 7.50503L5.50503 4.1717C5.7784 3.89833 6.22162 3.89833 6.49498 4.1717Z"
      fill="currentColor"
    />
  </svg>
);
export default ReplyIcon;
