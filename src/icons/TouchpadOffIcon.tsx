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

const TouchpadOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838357 0.838326C1.11172 0.564959 1.55494 0.564959 1.82831 0.838326L3.16148 2.1715C3.16137 2.17139 3.16159 2.17161 3.16148 2.1715L9.82799 8.83801C9.82778 8.8378 9.8282 8.83822 9.82799 8.83801L13.828 12.838C13.8278 12.8378 13.8282 12.8382 13.828 12.838L15.1616 14.1717C15.435 14.445 15.435 14.8882 15.1616 15.1616C14.8883 15.435 14.4451 15.435 14.1717 15.1616L13.0434 14.0333H2.66666C2.12739 14.0333 1.6102 13.8191 1.22888 13.4377C0.847557 13.0564 0.633331 12.5392 0.633331 12V3.99997C0.633331 3.46069 0.847557 2.94351 1.22888 2.56218C1.28656 2.5045 1.34735 2.45065 1.41086 2.40077L0.838357 1.82828C0.56499 1.55491 0.56499 1.11169 0.838357 0.838326ZM2.42474 3.41466C2.34845 3.44619 2.27833 3.49263 2.21883 3.55213C2.10006 3.67091 2.03333 3.832 2.03333 3.99997V8.6333H7.64338L2.42474 3.41466ZM7.3 10.0333H2.03333V12C2.03333 12.1679 2.10006 12.329 2.21883 12.4478C2.3376 12.5666 2.49869 12.6333 2.66666 12.6333H7.3V10.0333ZM8.7 12.6333H11.6434L9.04338 10.0333H8.7V12.6333ZM5.96666 2.66663C5.96666 2.28003 6.28006 1.96663 6.66666 1.96663H13.3333C13.8726 1.96663 14.3898 2.18086 14.7711 2.56218C15.1524 2.94351 15.3667 3.46069 15.3667 3.99997V10.6666C15.3667 11.0532 15.0533 11.3666 14.6667 11.3666C14.2801 11.3666 13.9667 11.0532 13.9667 10.6666V10.0333H13.3333C12.9467 10.0333 12.6333 9.7199 12.6333 9.3333C12.6333 8.9467 12.9467 8.6333 13.3333 8.6333H13.9667V3.99997C13.9667 3.832 13.8999 3.67091 13.7812 3.55213C13.6624 3.43336 13.5013 3.36663 13.3333 3.36663H6.66666C6.28006 3.36663 5.96666 3.05323 5.96666 2.66663Z"
      fill="currentColor"
    />
  </svg>
);
export default TouchpadOffIcon;
