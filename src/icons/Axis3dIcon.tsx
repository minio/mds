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

const Axis3dIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66667 1.96667C3.05327 1.96667 3.36667 2.28008 3.36667 2.66667V11.6434L6.83837 8.1717C7.11173 7.89833 7.55495 7.89833 7.82832 8.1717C8.10168 8.44507 8.10168 8.88828 7.82832 9.16165L4.35662 12.6333H13.3333C13.7199 12.6333 14.0333 12.9467 14.0333 13.3333C14.0333 13.7199 13.7199 14.0333 13.3333 14.0333H2.66667C2.28008 14.0333 1.96667 13.7199 1.96667 13.3333V2.66667C1.96667 2.28008 2.28008 1.96667 2.66667 1.96667Z"
      fill="currentColor"
    />
  </svg>
);
export default Axis3dIcon;
