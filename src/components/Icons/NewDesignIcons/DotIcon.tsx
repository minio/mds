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

const DotIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.06667 8.10001C8.08508 8.10001 8.1 8.08509 8.1 8.06668C8.1 8.04827 8.08508 8.03335 8.06667 8.03335C8.04826 8.03335 8.03333 8.04827 8.03333 8.06668C8.03333 8.08509 8.04826 8.10001 8.06667 8.10001ZM6.7 8.06668C6.7 7.31189 7.31188 6.70001 8.06667 6.70001C8.82146 6.70001 9.43333 7.31189 9.43333 8.06668C9.43333 8.82147 8.82146 9.43335 8.06667 9.43335C7.31188 9.43335 6.7 8.82147 6.7 8.06668Z"
      fill="currentColor"
    />
  </svg>
);
export default DotIcon;
