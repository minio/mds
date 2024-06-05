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

const HeadingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.00005 1.96667C4.38665 1.96667 4.70005 2.28008 4.70005 2.66667V7.30001H11.3V2.66667C11.3 2.28008 11.6134 1.96667 12 1.96667C12.3866 1.96667 12.7 2.28008 12.7 2.66667V13.3333C12.7 13.7199 12.3866 14.0333 12 14.0333C11.6134 14.0333 11.3 13.7199 11.3 13.3333V8.70001H4.70005V13.3333C4.70005 13.7199 4.38665 14.0333 4.00005 14.0333C3.61345 14.0333 3.30005 13.7199 3.30005 13.3333V2.66667C3.30005 2.28008 3.61345 1.96667 4.00005 1.96667Z"
      fill="currentColor"
    />
  </svg>
);
export default HeadingIcon;
