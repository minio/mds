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

const PrinterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.3 1.3333C3.3 0.946701 3.6134 0.633301 4 0.633301H12C12.3866 0.633301 12.7 0.946701 12.7 1.3333V5.29997H13.3333C13.8726 5.29997 14.3898 5.51419 14.7711 5.89552C15.1524 6.27684 15.3667 6.79403 15.3667 7.3333V10.6666C15.3667 11.2059 15.1524 11.7231 14.7711 12.1044C14.3898 12.4857 13.8726 12.7 13.3333 12.7H12.7V14.6666C12.7 15.0532 12.3866 15.3666 12 15.3666H4C3.6134 15.3666 3.3 15.0532 3.3 14.6666V12.7H2.66666C2.12739 12.7 1.6102 12.4857 1.22888 12.1044C0.847557 11.7231 0.633331 11.2059 0.633331 10.6666V7.3333C0.633331 6.79403 0.847557 6.27684 1.22888 5.89552C1.6102 5.51419 2.12739 5.29997 2.66666 5.29997H3.3V1.3333ZM2.66666 6.69997C2.49869 6.69997 2.3376 6.76669 2.21883 6.88547C2.10006 7.00424 2.03333 7.16533 2.03333 7.3333V10.6666C2.03333 10.8346 2.10006 10.9957 2.21883 11.1145C2.3376 11.2332 2.49869 11.3 2.66666 11.3H3.3V9.3333C3.3 8.9467 3.6134 8.6333 4 8.6333H12C12.3866 8.6333 12.7 8.9467 12.7 9.3333V11.3H13.3333C13.5013 11.3 13.6624 11.2332 13.7812 11.1145C13.8999 10.9957 13.9667 10.8346 13.9667 10.6666V7.3333C13.9667 7.16533 13.8999 7.00424 13.7812 6.88547C13.6624 6.76669 13.5013 6.69997 13.3333 6.69997H2.66666ZM11.3 5.29997H4.7V2.0333H11.3V5.29997ZM11.3 10.0333H4.7V13.9666H11.3V10.0333Z"
      fill="currentColor"
    />
  </svg>
);
export default PrinterIcon;
