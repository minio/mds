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

const ArrowUpRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66667 5.36667C4.28008 5.36667 3.96667 5.05327 3.96667 4.66667C3.96667 4.28008 4.28008 3.96667 4.66667 3.96667H11.3333C11.7199 3.96667 12.0333 4.28008 12.0333 4.66667V11.3333C12.0333 11.7199 11.7199 12.0333 11.3333 12.0333C10.9467 12.0333 10.6333 11.7199 10.6333 11.3333V6.35662L5.16165 11.8283C4.88828 12.1017 4.44507 12.1017 4.1717 11.8283C3.89833 11.5549 3.89833 11.1117 4.1717 10.8384L9.64339 5.36667H4.66667Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowUpRightIcon;
