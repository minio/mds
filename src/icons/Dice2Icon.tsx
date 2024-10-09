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

const Dice2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.69999C2.9836 2.69999 2.70005 2.98354 2.70005 3.33332V12.6667C2.70005 13.0164 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0164 13.3 12.6667V3.33332C13.3 2.98354 13.0165 2.69999 12.6667 2.69999H3.33338ZM1.30005 3.33332C1.30005 2.21034 2.2104 1.29999 3.33338 1.29999H12.6667C13.7897 1.29999 14.7 2.21034 14.7 3.33332V12.6667C14.7 13.7896 13.7897 14.7 12.6667 14.7H3.33338C2.2104 14.7 1.30005 13.7896 1.30005 12.6667V3.33332ZM9.30005 5.99999C9.30005 5.61339 9.61345 5.29999 10 5.29999H10.0067C10.3933 5.29999 10.7067 5.61339 10.7067 5.99999C10.7067 6.38659 10.3933 6.69999 10.0067 6.69999H10C9.61345 6.69999 9.30005 6.38659 9.30005 5.99999ZM5.30005 9.99999C5.30005 9.61339 5.61345 9.29999 6.00005 9.29999H6.00672C6.39331 9.29999 6.70672 9.61339 6.70672 9.99999C6.70672 10.3866 6.39331 10.7 6.00672 10.7H6.00005C5.61345 10.7 5.30005 10.3866 5.30005 9.99999Z"
      fill="currentColor"
    />
  </svg>
);
export default Dice2Icon;
