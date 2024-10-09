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

const AirplayIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66666 2.69999C2.49869 2.69999 2.3376 2.76671 2.21883 2.88549C2.10006 3.00426 2.03333 3.16535 2.03333 3.33332V9.99999C2.03333 10.168 2.10006 10.329 2.21883 10.4478C2.3376 10.5666 2.49869 10.6333 2.66666 10.6333H3.33333C3.71993 10.6333 4.03333 10.9467 4.03333 11.3333C4.03333 11.7199 3.71993 12.0333 3.33333 12.0333H2.66666C2.12739 12.0333 1.6102 11.8191 1.22888 11.4378C0.847557 11.0564 0.633331 10.5393 0.633331 9.99999V3.33332C0.633331 2.79405 0.847557 2.27686 1.22888 1.89554C1.6102 1.51421 2.12739 1.29999 2.66666 1.29999H13.3333C13.8726 1.29999 14.3898 1.51421 14.7711 1.89554C15.1524 2.27686 15.3667 2.79405 15.3667 3.33332V9.99999C15.3667 10.5393 15.1524 11.0564 14.7711 11.4378C14.3898 11.8191 13.8726 12.0333 13.3333 12.0333H12.6667C12.2801 12.0333 11.9667 11.7199 11.9667 11.3333C11.9667 10.9467 12.2801 10.6333 12.6667 10.6333H13.3333C13.5013 10.6333 13.6624 10.5666 13.7812 10.4478C13.8999 10.329 13.9667 10.168 13.9667 9.99999V3.33332C13.9667 3.16535 13.8999 3.00426 13.7812 2.88549C13.6624 2.76671 13.5013 2.69999 13.3333 2.69999H2.66666ZM8 9.29999C8.20774 9.29999 8.40476 9.39226 8.53775 9.55186L11.8711 13.5519C12.045 13.7605 12.0824 14.0509 11.9672 14.2969C11.852 14.5429 11.6049 14.7 11.3333 14.7H4.66666C4.39505 14.7 4.14796 14.5429 4.03275 14.2969C3.91755 14.0509 3.95503 13.7605 4.12891 13.5519L7.46224 9.55186C7.59524 9.39226 7.79225 9.29999 8 9.29999ZM6.16119 13.3H9.8388L8 11.0934L6.16119 13.3Z"
      fill="currentColor"
    />
  </svg>
);
export default AirplayIcon;
