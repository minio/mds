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

const ClipboardMinusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.03322 2.03333V3.3H9.96655V2.03333H6.03322ZM11.3662 1.96666C11.3485 1.22728 10.7435 0.633331 9.99989 0.633331H5.99989C5.25624 0.633331 4.65132 1.22728 4.63362 1.96666H3.99989C3.46061 1.96666 2.94343 2.18089 2.5621 2.56221C2.18078 2.94354 1.96655 3.46072 1.96655 4V13.3333C1.96655 13.8726 2.18078 14.3898 2.5621 14.7711C2.94343 15.1524 3.46061 15.3667 3.99989 15.3667H11.9999C12.5392 15.3667 13.0563 15.1524 13.4377 14.7711C13.819 14.3898 14.0332 13.8726 14.0332 13.3333V4C14.0332 3.46072 13.819 2.94354 13.4377 2.56221C13.0563 2.18089 12.5392 1.96666 11.9999 1.96666H11.3662ZM11.3662 3.36666C11.3485 4.10605 10.7435 4.7 9.99989 4.7H5.99989C5.25624 4.7 4.65132 4.10605 4.63362 3.36666H3.99989C3.83192 3.36666 3.67082 3.43339 3.55205 3.55216C3.43328 3.67094 3.36655 3.83203 3.36655 4V13.3333C3.36655 13.5013 3.43328 13.6624 3.55205 13.7812C3.67083 13.8999 3.83192 13.9667 3.99989 13.9667H11.9999C12.1679 13.9667 12.3289 13.8999 12.4477 13.7812C12.5665 13.6624 12.6332 13.5013 12.6332 13.3333V4C12.6332 3.83203 12.5665 3.67094 12.4477 3.55216C12.3289 3.43339 12.1679 3.36666 11.9999 3.36666H11.3662ZM5.29989 9.33333C5.29989 8.94673 5.61329 8.63333 5.99989 8.63333H9.99989C10.3865 8.63333 10.6999 8.94673 10.6999 9.33333C10.6999 9.71993 10.3865 10.0333 9.99989 10.0333H5.99989C5.61329 10.0333 5.29989 9.71993 5.29989 9.33333Z"
      fill="currentColor"
    />
  </svg>
);
export default ClipboardMinusIcon;
