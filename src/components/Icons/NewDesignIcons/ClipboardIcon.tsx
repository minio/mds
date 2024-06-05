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

const ClipboardIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.03333 2.03333V3.3H9.96666V2.03333H6.03333ZM11.3663 1.96666C11.3486 1.22728 10.7436 0.633331 9.99999 0.633331H5.99999C5.25635 0.633331 4.65142 1.22728 4.63372 1.96666H3.99999C3.46072 1.96666 2.94353 2.18089 2.56221 2.56221C2.18089 2.94354 1.96666 3.46072 1.96666 4V13.3333C1.96666 13.8726 2.18089 14.3898 2.56221 14.7711C2.94353 15.1524 3.46072 15.3667 3.99999 15.3667H12C12.5393 15.3667 13.0565 15.1524 13.4378 14.7711C13.8191 14.3898 14.0333 13.8726 14.0333 13.3333V4C14.0333 3.46072 13.8191 2.94354 13.4378 2.56221C13.0565 2.18089 12.5393 1.96666 12 1.96666H11.3663ZM11.3663 3.36666C11.3486 4.10605 10.7436 4.7 9.99999 4.7H5.99999C5.25635 4.7 4.65142 4.10605 4.63372 3.36666H3.99999C3.83202 3.36666 3.67093 3.43339 3.55216 3.55216C3.43339 3.67094 3.36666 3.83203 3.36666 4V13.3333C3.36666 13.5013 3.43339 13.6624 3.55216 13.7812C3.67093 13.8999 3.83202 13.9667 3.99999 13.9667H12C12.168 13.9667 12.3291 13.8999 12.4478 13.7812C12.5666 13.6624 12.6333 13.5013 12.6333 13.3333V4C12.6333 3.83203 12.5666 3.67094 12.4478 3.55216C12.3291 3.43339 12.168 3.36666 12 3.36666H11.3663Z"
      fill="currentColor"
    />
  </svg>
);
export default ClipboardIcon;
