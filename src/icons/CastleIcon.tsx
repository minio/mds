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

const CastleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 0.633335C4.3866 0.633335 4.7 0.946736 4.7 1.33334V1.96667H5.96666V1.33334C5.96666 0.946736 6.28006 0.633335 6.66666 0.633335C7.05326 0.633335 7.36666 0.946736 7.36666 1.33334V1.96667H8.63333V1.33334C8.63333 0.946736 8.94673 0.633335 9.33333 0.633335C9.71993 0.633335 10.0333 0.946736 10.0333 1.33334V1.96667H11.3V1.33334C11.3 0.946736 11.6134 0.633335 12 0.633335C12.3866 0.633335 12.7 0.946736 12.7 1.33334V6.63333H13.9667V6C13.9667 5.6134 14.2801 5.3 14.6667 5.3C15.0533 5.3 15.3667 5.6134 15.3667 6V13.3333C15.3667 13.8726 15.1524 14.3898 14.7711 14.7711C14.3898 15.1524 13.8726 15.3667 13.3333 15.3667H2.66666C2.12739 15.3667 1.6102 15.1524 1.22888 14.7711C0.847557 14.3898 0.633331 13.8726 0.633331 13.3333V6C0.633331 5.6134 0.946732 5.3 1.33333 5.3C1.71993 5.3 2.03333 5.6134 2.03333 6V6.63333H3.3V1.33334C3.3 0.946736 3.6134 0.633335 4 0.633335ZM2.03333 8.03333V13.3333C2.03333 13.5013 2.10006 13.6624 2.21883 13.7812C2.3376 13.8999 2.49869 13.9667 2.66666 13.9667H5.3V12C5.3 11.2839 5.58446 10.5972 6.09081 10.0908C6.59716 9.58446 7.28391 9.3 8 9.3C8.71608 9.3 9.40284 9.58446 9.90919 10.0908C10.4155 10.5972 10.7 11.2839 10.7 12V13.9667H13.3333C13.5013 13.9667 13.6624 13.8999 13.7812 13.7812C13.8999 13.6624 13.9667 13.5013 13.9667 13.3333V8.03333H2.03333ZM11.3 6.63333H4.7V3.36667H11.3V6.63333ZM9.3 13.9667V12C9.3 11.6552 9.16303 11.3246 8.91924 11.0808C8.67544 10.837 8.34478 10.7 8 10.7C7.65522 10.7 7.32456 10.837 7.08076 11.0808C6.83696 11.3246 6.7 11.6552 6.7 12V13.9667H9.3Z"
      fill="currentColor"
    />
  </svg>
);
export default CastleIcon;
