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

const PaintRollerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66666 2.0333C2.31688 2.0333 2.03333 2.31685 2.03333 2.66663V3.99997C2.03333 4.34975 2.31688 4.6333 2.66666 4.6333H10.6667C11.0164 4.6333 11.3 4.34975 11.3 3.99997V2.66663C11.3 2.31685 11.0164 2.0333 10.6667 2.0333H2.66666ZM12.6997 2.6333C12.6819 1.5257 11.7785 0.633301 10.6667 0.633301H2.66666C1.54369 0.633301 0.633331 1.54366 0.633331 2.66663V3.99997C0.633331 5.12295 1.54369 6.0333 2.66666 6.0333H10.6667C11.7785 6.0333 12.6819 5.14091 12.6997 4.0333H13.3333C13.5013 4.0333 13.6624 4.10003 13.7812 4.2188C13.8999 4.33757 13.9667 4.49866 13.9667 4.66663V6.66663C13.9667 6.8346 13.8999 6.99569 13.7812 7.11447C13.6624 7.23324 13.5013 7.29997 13.3333 7.29997H8C7.46072 7.29997 6.94354 7.51419 6.56221 7.89552C6.18089 8.27684 5.96666 8.79403 5.96666 9.3333V9.96703C5.22728 9.98473 4.63333 10.5897 4.63333 11.3333V14C4.63333 14.7548 5.24521 15.3666 6 15.3666H7.33333C8.08812 15.3666 8.7 14.7548 8.7 14V11.3333C8.7 10.5897 8.10605 9.98473 7.36666 9.96703V9.3333C7.36666 9.16533 7.43339 9.00424 7.55216 8.88547C7.67094 8.76669 7.83203 8.69997 8 8.69997H13.3333C13.8726 8.69997 14.3898 8.48574 14.7711 8.10442C15.1524 7.72309 15.3667 7.20591 15.3667 6.66663V4.66663C15.3667 4.12736 15.1524 3.61017 14.7711 3.22885C14.3898 2.84753 13.8726 2.6333 13.3333 2.6333H12.6997ZM6.03333 11.3666V13.9666H7.3V11.3666H6.03333Z"
      fill="currentColor"
    />
  </svg>
);
export default PaintRollerIcon;
