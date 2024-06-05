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

const TimerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.96666 1.3333C5.96666 0.946701 6.28006 0.633301 6.66666 0.633301H9.33333C9.71993 0.633301 10.0333 0.946701 10.0333 1.3333C10.0333 1.7199 9.71993 2.0333 9.33333 2.0333H6.66666C6.28006 2.0333 5.96666 1.7199 5.96666 1.3333ZM7.99999 4.69997C5.44107 4.69997 3.36666 6.77438 3.36666 9.3333C3.36666 11.8922 5.44107 13.9666 7.99999 13.9666C10.5589 13.9666 12.6333 11.8922 12.6333 9.3333C12.6333 6.77438 10.5589 4.69997 7.99999 4.69997ZM1.96666 9.3333C1.96666 6.00118 4.66787 3.29997 7.99999 3.29997C11.3321 3.29997 14.0333 6.00118 14.0333 9.3333C14.0333 12.6654 11.3321 15.3666 7.99999 15.3666C4.66787 15.3666 1.96666 12.6654 1.96666 9.3333ZM10.495 6.83833C10.7683 7.11169 10.7683 7.55491 10.495 7.82828L8.49497 9.82827C8.2216 10.1016 7.77839 10.1016 7.50502 9.82827C7.23165 9.55491 7.23165 9.11169 7.50502 8.83833L9.50502 6.83833C9.77839 6.56496 10.2216 6.56496 10.495 6.83833Z"
      fill="currentColor"
    />
  </svg>
);
export default TimerIcon;
