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

const StepForwardIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.36342 2.03577C6.60595 1.91921 6.89382 1.95198 7.10394 2.12007L13.7706 7.45341C13.9367 7.58625 14.0333 7.78737 14.0333 8.00001C14.0333 8.21266 13.9367 8.41378 13.7706 8.54662L7.10394 13.88C6.89382 14.0481 6.60595 14.0808 6.36342 13.9643C6.1209 13.8477 5.96665 13.6024 5.96665 13.3333V2.66668C5.96665 2.3976 6.1209 2.15233 6.36342 2.03577ZM3.99999 1.96668C4.38659 1.96668 4.69999 2.28008 4.69999 2.66668V13.3333C4.69999 13.7199 4.38659 14.0333 3.99999 14.0333C3.61339 14.0333 3.29999 13.7199 3.29999 13.3333V2.66668C3.29999 2.28008 3.61339 1.96668 3.99999 1.96668ZM7.36665 4.12312V11.8769L12.2128 8.00001L7.36665 4.12312Z"
      fill="currentColor"
    />
  </svg>
);
export default StepForwardIcon;
