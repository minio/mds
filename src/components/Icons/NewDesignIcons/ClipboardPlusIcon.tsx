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

const ClipboardPlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.03333 2.03333V3.3H9.96667V2.03333H6.03333ZM11.3663 1.96666C11.3486 1.22728 10.7436 0.633331 10 0.633331H6C5.25635 0.633331 4.65143 1.22728 4.63373 1.96666H4C3.46073 1.96666 2.94354 2.18089 2.56222 2.56221C2.18089 2.94354 1.96667 3.46072 1.96667 4V13.3333C1.96667 13.8726 2.18089 14.3898 2.56222 14.7711C2.94354 15.1524 3.46073 15.3667 4 15.3667H12C12.5393 15.3667 13.0565 15.1524 13.4378 14.7711C13.8191 14.3898 14.0333 13.8726 14.0333 13.3333V4C14.0333 3.46072 13.8191 2.94354 13.4378 2.56221C13.0565 2.18089 12.5393 1.96666 12 1.96666H11.3663ZM11.3663 3.36666C11.3486 4.10605 10.7436 4.7 10 4.7H6C5.25635 4.7 4.65143 4.10605 4.63373 3.36666H4C3.83203 3.36666 3.67094 3.43339 3.55217 3.55216C3.43339 3.67094 3.36667 3.83203 3.36667 4V13.3333C3.36667 13.5013 3.43339 13.6624 3.55217 13.7812C3.67094 13.8999 3.83203 13.9667 4 13.9667H12C12.168 13.9667 12.3291 13.8999 12.4478 13.7812C12.5666 13.6624 12.6333 13.5013 12.6333 13.3333V4C12.6333 3.83203 12.5666 3.67094 12.4478 3.55216C12.3291 3.43339 12.168 3.36666 12 3.36666H11.3663ZM8 6.63333C8.3866 6.63333 8.7 6.94673 8.7 7.33333V8.63333H10C10.3866 8.63333 10.7 8.94673 10.7 9.33333C10.7 9.71993 10.3866 10.0333 10 10.0333H8.7V11.3333C8.7 11.7199 8.3866 12.0333 8 12.0333C7.6134 12.0333 7.3 11.7199 7.3 11.3333V10.0333H6C5.6134 10.0333 5.3 9.71993 5.3 9.33333C5.3 8.94673 5.6134 8.63333 6 8.63333H7.3V7.33333C7.3 6.94673 7.6134 6.63333 8 6.63333Z"
      fill="currentColor"
    />
  </svg>
);
export default ClipboardPlusIcon;
