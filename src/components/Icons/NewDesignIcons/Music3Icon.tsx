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

const Music3Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.6667 0.633301C11.0533 0.633301 11.3667 0.946701 11.3667 1.3333V12C11.3667 13.8593 9.85939 15.3666 8.00003 15.3666C6.14067 15.3666 4.63336 13.8593 4.63336 12C4.63336 10.1406 6.14067 8.6333 8.00003 8.6333C8.73417 8.6333 9.41343 8.86828 9.9667 9.26714V1.3333C9.9667 0.946701 10.2801 0.633301 10.6667 0.633301ZM9.9667 12C9.9667 10.9138 9.08619 10.0333 8.00003 10.0333C6.91387 10.0333 6.03336 10.9138 6.03336 12C6.03336 13.0861 6.91387 13.9666 8.00003 13.9666C9.08619 13.9666 9.9667 13.0861 9.9667 12Z"
      fill="currentColor"
    />
  </svg>
);
export default Music3Icon;
