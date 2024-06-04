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

const CaravanIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.61937 3.61941C2.25075 2.98803 3.10707 2.63333 3.99997 2.63333H9.3333C10.2262 2.63333 11.0825 2.98803 11.7139 3.61941C12.3453 4.25078 12.7 5.1071 12.7 6V11.9667H13.9666V11.3333C13.9666 10.9467 14.28 10.6333 14.6666 10.6333C15.0532 10.6333 15.3666 10.9467 15.3666 11.3333V12.6667C15.3666 13.0533 15.0532 13.3667 14.6666 13.3667H7.24293C6.95762 14.1448 6.2103 14.7 5.3333 14.7C4.4563 14.7 3.70898 14.1448 3.42367 13.3667H2.66663C2.12736 13.3667 1.61017 13.1524 1.22885 12.7711C0.847526 12.3898 0.633301 11.8726 0.633301 11.3333V6C0.633301 5.1071 0.988002 4.25078 1.61937 3.61941ZM2.0333 9.36667V11.3333C2.0333 11.5013 2.10003 11.6624 2.2188 11.7812C2.33757 11.8999 2.49866 11.9667 2.66663 11.9667H3.42367C3.70898 11.1886 4.4563 10.6333 5.3333 10.6333C5.55443 10.6333 5.76732 10.6686 5.96663 10.7339V6C5.96663 5.6134 6.28003 5.3 6.66663 5.3H9.3333C9.7199 5.3 10.0333 5.6134 10.0333 6V11.9667H11.3V6C11.3 5.47841 11.0928 4.97818 10.7239 4.60936C10.3551 4.24053 9.85489 4.03333 9.3333 4.03333H3.99997C3.47837 4.03333 2.97815 4.24054 2.60932 4.60936C2.41131 4.80737 2.25988 5.04326 2.16209 5.3H3.99997C4.38657 5.3 4.69997 5.6134 4.69997 6V8.66667C4.69997 9.05327 4.38657 9.36667 3.99997 9.36667H2.0333ZM8.6333 11.9667V6.7H7.36663V11.9667H8.6333ZM5.96663 12.6667C5.96663 12.3169 5.68308 12.0333 5.3333 12.0333C4.98352 12.0333 4.69997 12.3169 4.69997 12.6667C4.69997 13.0164 4.98352 13.3 5.3333 13.3C5.68308 13.3 5.96663 13.0164 5.96663 12.6667ZM3.29997 6.7H2.0333V7.96667H3.29997V6.7Z"
      fill="currentColor"
    />
  </svg>
);
export default CaravanIcon;
