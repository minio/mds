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

const BookOpenTextIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.633331 2C0.633331 1.6134 0.946732 1.3 1.33333 1.3H5.33333C6.22623 1.3 7.08255 1.6547 7.71392 2.28608C7.81673 2.38888 7.9122 2.49765 8 2.61157C8.08779 2.49765 8.18327 2.38888 8.28607 2.28608C8.91744 1.6547 9.77377 1.3 10.6667 1.3H14.6667C15.0533 1.3 15.3667 1.6134 15.3667 2V12C15.3667 12.3866 15.0533 12.7 14.6667 12.7H10C9.65522 12.7 9.32456 12.837 9.08076 13.0808C8.83696 13.3246 8.7 13.6552 8.7 14C8.7 14.3866 8.3866 14.7 8 14.7C7.6134 14.7 7.3 14.3866 7.3 14C7.3 13.6552 7.16303 13.3246 6.91924 13.0808C6.67544 12.837 6.34478 12.7 6 12.7H1.33333C0.946732 12.7 0.633331 12.3866 0.633331 12V2ZM7.3 11.6336C6.90515 11.4167 6.45859 11.3 6 11.3H2.03333V2.7H5.33333C5.85492 2.7 6.35515 2.9072 6.72397 3.27603C7.0928 3.64485 7.3 4.14508 7.3 4.66667V11.6336ZM8.7 11.6336C9.09485 11.4167 9.54141 11.3 10 11.3H13.9667V2.7H10.6667C10.1451 2.7 9.64484 2.9072 9.27602 3.27603C8.9072 3.64485 8.7 4.14508 8.7 4.66667V11.6336ZM3.3 5.33334C3.3 4.94674 3.6134 4.63334 4 4.63334H5.33333C5.71993 4.63334 6.03333 4.94674 6.03333 5.33334C6.03333 5.71994 5.71993 6.03334 5.33333 6.03334H4C3.6134 6.03334 3.3 5.71994 3.3 5.33334ZM9.96666 5.33334C9.96666 4.94674 10.2801 4.63334 10.6667 4.63334H12C12.3866 4.63334 12.7 4.94674 12.7 5.33334C12.7 5.71994 12.3866 6.03334 12 6.03334H10.6667C10.2801 6.03334 9.96666 5.71994 9.96666 5.33334ZM3.3 8C3.3 7.6134 3.6134 7.3 4 7.3H5.33333C5.71993 7.3 6.03333 7.6134 6.03333 8C6.03333 8.3866 5.71993 8.7 5.33333 8.7H4C3.6134 8.7 3.3 8.3866 3.3 8ZM9.96666 8C9.96666 7.6134 10.2801 7.3 10.6667 7.3H12C12.3866 7.3 12.7 7.6134 12.7 8C12.7 8.3866 12.3866 8.7 12 8.7H10.6667C10.2801 8.7 9.96666 8.3866 9.96666 8Z"
      fill="currentColor"
    />
  </svg>
);
export default BookOpenTextIcon;
