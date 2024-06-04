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

const ArrowDownRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.1717 4.1717C4.44507 3.89833 4.88828 3.89833 5.16165 4.1717L10.6333 9.64339V4.66667C10.6333 4.28008 10.9467 3.96667 11.3333 3.96667C11.7199 3.96667 12.0333 4.28008 12.0333 4.66667V11.3333C12.0333 11.7199 11.7199 12.0333 11.3333 12.0333H4.66667C4.28008 12.0333 3.96667 11.7199 3.96667 11.3333C3.96667 10.9467 4.28008 10.6333 4.66667 10.6333H9.64339L4.1717 5.16165C3.89833 4.88828 3.89833 4.44507 4.1717 4.1717Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowDownRightIcon;
