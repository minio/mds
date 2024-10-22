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

const LockOpenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.56186 2.54313C9.03608 2.15581 8.38514 1.97768 7.7354 2.04331C7.08567 2.10894 6.48349 2.41365 6.04578 2.89829C5.60808 3.38292 5.36606 4.01291 5.36671 4.66595L5.36672 6.63332H12.6667C13.7897 6.63332 14.7 7.54368 14.7 8.66666V13.3333C14.7 14.4563 13.7897 15.3667 12.6667 15.3667H3.33338C2.2104 15.3667 1.30005 14.4563 1.30005 13.3333V8.66666C1.30005 7.54368 2.2104 6.63332 3.33338 6.63332H3.96672V4.66699M3.33338 8.03332C2.9836 8.03332 2.70005 8.31688 2.70005 8.66666V13.3333C2.70005 13.6831 2.9836 13.9667 3.33338 13.9667H12.6667C13.0165 13.9667 13.3 13.6831 13.3 13.3333V8.66666C13.3 8.31688 13.0165 8.03332 12.6667 8.03332H3.33338Z"
      fill="currentColor"
    />
  </svg>
);
export default LockOpenIcon;
