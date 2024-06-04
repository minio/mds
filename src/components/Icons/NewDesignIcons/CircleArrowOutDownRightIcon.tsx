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

const CircleArrowOutDownRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.2833 2.48752C9.19305 2.03592 7.99335 1.91776 6.83593 2.14798C5.67851 2.37821 4.61535 2.94648 3.7809 3.78093C2.94645 4.61538 2.37818 5.67854 2.14795 6.83596C1.91773 7.99338 2.03589 9.19308 2.48749 10.2833C2.93909 11.3736 3.70386 12.3055 4.68507 12.9611C5.66628 13.6167 6.81988 13.9667 7.99997 13.9667C8.38657 13.9667 8.69997 14.2801 8.69997 14.6667C8.69997 15.0533 8.38657 15.3667 7.99997 15.3667C6.54298 15.3667 5.11871 14.9346 3.90727 14.1252C2.69583 13.3157 1.75162 12.1652 1.19406 10.8191C0.636493 9.47302 0.490608 7.99183 0.774853 6.56284C1.0591 5.13384 1.7607 3.82123 2.79095 2.79098C3.8212 1.76073 5.13381 1.05913 6.56281 0.774883C7.9918 0.490639 9.47299 0.636523 10.8191 1.19409C12.1652 1.75165 13.3157 2.69586 14.1251 3.9073C14.9346 5.11874 15.3666 6.54301 15.3666 8C15.3666 8.3866 15.0532 8.7 14.6666 8.7C14.28 8.7 13.9666 8.3866 13.9666 8C13.9666 6.81991 13.6167 5.66631 12.9611 4.6851C12.3054 3.70389 11.3736 2.93912 10.2833 2.48752ZM7.505 7.50503C7.77836 7.23166 8.22158 7.23166 8.49495 7.50503L13.9666 12.9767V10.6667C13.9666 10.2801 14.28 9.96667 14.6666 9.96667C15.0532 9.96667 15.3666 10.2801 15.3666 10.6667V14.6667C15.3666 15.0533 15.0532 15.3667 14.6666 15.3667H10.6666C10.28 15.3667 9.96664 15.0533 9.96664 14.6667C9.96664 14.2801 10.28 13.9667 10.6666 13.9667H12.9767L7.505 8.49498C7.23163 8.22161 7.23163 7.77839 7.505 7.50503Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleArrowOutDownRightIcon;
