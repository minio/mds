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

const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.03336C4.70467 2.03336 2.0333 4.70473 2.0333 8.00003C2.0333 11.2953 4.70467 13.9667 7.99997 13.9667C11.2953 13.9667 13.9666 11.2953 13.9666 8.00003C13.9666 4.70473 11.2953 2.03336 7.99997 2.03336ZM0.633301 8.00003C0.633301 3.93153 3.93147 0.633362 7.99997 0.633362C12.0685 0.633362 15.3666 3.93153 15.3666 8.00003C15.3666 12.0685 12.0685 15.3667 7.99997 15.3667C3.93147 15.3667 0.633301 12.0685 0.633301 8.00003ZM7.29997 5.33336C7.29997 4.94676 7.61337 4.63336 7.99997 4.63336H8.00663C8.39323 4.63336 8.70663 4.94676 8.70663 5.33336C8.70663 5.71996 8.39323 6.03336 8.00663 6.03336H7.99997C7.61337 6.03336 7.29997 5.71996 7.29997 5.33336ZM7.99997 7.30003C8.38657 7.30003 8.69997 7.61343 8.69997 8.00003V10.6667C8.69997 11.0533 8.38657 11.3667 7.99997 11.3667C7.61337 11.3667 7.29997 11.0533 7.29997 10.6667V8.00003C7.29997 7.61343 7.61337 7.30003 7.99997 7.30003Z"
      fill="currentColor"
    />
  </svg>
);
export default InfoIcon;
