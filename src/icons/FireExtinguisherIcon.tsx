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

const FireExtinguisherIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.03359 1.03362C7.28989 0.777319 7.6375 0.633331 7.99997 0.633331H9.3333C9.69576 0.633331 10.0434 0.777319 10.2997 1.03362C10.3802 1.11418 10.4497 1.20377 10.5071 1.3H12C12.3866 1.3 12.7 1.6134 12.7 2C12.7 2.3866 12.3866 2.7 12 2.7H10.7V3.98337C10.8218 4.0757 10.9379 4.17674 11.0472 4.28607C11.6786 4.91744 12.0333 5.77377 12.0333 6.66666V13.3333C12.0333 13.8726 11.8191 14.3898 11.4378 14.7711C11.0564 15.1524 10.5392 15.3667 9.99997 15.3667H7.3333C6.79403 15.3667 6.27684 15.1524 5.89552 14.7711C5.51419 14.3898 5.29997 13.8726 5.29997 13.3333V9.36666H4.0333V13.3333C4.0333 13.7199 3.7199 14.0333 3.3333 14.0333C2.9467 14.0333 2.6333 13.7199 2.6333 13.3333V6C2.6333 4.75348 3.12848 3.55802 4.0099 2.6766C4.76689 1.9196 5.75552 1.4475 6.80919 1.3293C6.86967 1.22192 6.94491 1.1223 7.03359 1.03362ZM6.6333 2.77508C6.01933 2.90836 5.451 3.21539 4.99985 3.66655C4.38098 4.28542 4.0333 5.12478 4.0333 6V7.96666H5.29997V6.66666C5.29997 5.77377 5.65467 4.91744 6.28604 4.28607C6.39538 4.17674 6.51145 4.0757 6.6333 3.98337V2.77508ZM8.0333 3.36009C8.24058 3.32039 8.45256 3.3 8.66663 3.3C8.88071 3.3 9.09269 3.32039 9.29997 3.36009V2.03333H8.0333V3.36009ZM6.69997 11.3H10.6333V6.66666C10.6333 6.14507 10.4261 5.64484 10.0573 5.27602C9.68846 4.9072 9.18823 4.7 8.66663 4.7C8.14504 4.7 7.64481 4.9072 7.27599 5.27602C6.90717 5.64484 6.69997 6.14507 6.69997 6.66666V11.3ZM10.6333 12.7H6.69997V13.3333C6.69997 13.5013 6.76669 13.6624 6.88547 13.7812C7.00424 13.8999 7.16533 13.9667 7.3333 13.9667H9.99997C10.1679 13.9667 10.329 13.8999 10.4478 13.7812C10.5666 13.6624 10.6333 13.5013 10.6333 13.3333V12.7Z"
      fill="currentColor"
    />
  </svg>
);
export default FireExtinguisherIcon;
