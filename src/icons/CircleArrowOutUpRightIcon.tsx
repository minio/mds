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

const CircleArrowOutUpRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.03334C6.81988 2.03334 5.66628 2.38327 4.68507 3.0389C3.70386 3.69453 2.93909 4.62639 2.48749 5.71666C2.03589 6.80692 1.91773 8.00662 2.14795 9.16404C2.37818 10.3215 2.94645 11.3846 3.7809 12.2191C4.61535 13.0535 5.67851 13.6218 6.83593 13.852C7.99335 14.0822 9.19305 13.9641 10.2833 13.5125C11.3736 13.0609 12.3054 12.2961 12.9611 11.3149C13.6167 10.3337 13.9666 9.1801 13.9666 8C13.9666 7.6134 14.28 7.3 14.6666 7.3C15.0532 7.3 15.3666 7.6134 15.3666 8C15.3666 9.45699 14.9346 10.8813 14.1251 12.0927C13.3157 13.3041 12.1652 14.2483 10.8191 14.8059C9.47299 15.3635 7.9918 15.5094 6.56281 15.2251C5.13381 14.9409 3.8212 14.2393 2.79095 13.209C1.7607 12.1788 1.0591 10.8662 0.774853 9.43717C0.490608 8.00817 0.636493 6.52698 1.19406 5.1809C1.75162 3.83482 2.69583 2.6843 3.90727 1.87484C5.11871 1.06538 6.54298 0.633335 7.99997 0.633335C8.38657 0.633335 8.69997 0.946736 8.69997 1.33334C8.69997 1.71993 8.38657 2.03334 7.99997 2.03334ZM10.6666 2.03334C10.28 2.03334 9.96664 1.71993 9.96664 1.33334C9.96664 0.946736 10.28 0.633335 10.6666 0.633335H14.6666C15.0532 0.633335 15.3666 0.946736 15.3666 1.33334V5.33333C15.3666 5.71993 15.0532 6.03333 14.6666 6.03333C14.28 6.03333 13.9666 5.71993 13.9666 5.33333V3.02328L8.49495 8.49498C8.22158 8.76834 7.77836 8.76834 7.505 8.49498C7.23163 8.22161 7.23163 7.77839 7.505 7.50503L12.9767 2.03334H10.6666Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleArrowOutUpRightIcon;
