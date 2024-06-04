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

const StepBackIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.63657 2.03577C9.8791 2.15233 10.0333 2.3976 10.0333 2.66668V13.3333C10.0333 13.6024 9.8791 13.8477 9.63657 13.9643C9.39405 14.0808 9.10617 14.0481 8.89605 13.88L2.22939 8.54662C2.06334 8.41378 1.96667 8.21266 1.96667 8.00001C1.96667 7.78737 2.06334 7.58625 2.22939 7.45341L8.89605 2.12007C9.10617 1.95198 9.39405 1.91921 9.63657 2.03577ZM12 1.96668C12.3866 1.96668 12.7 2.28008 12.7 2.66668V13.3333C12.7 13.7199 12.3866 14.0333 12 14.0333C11.6134 14.0333 11.3 13.7199 11.3 13.3333V2.66668C11.3 2.28008 11.6134 1.96668 12 1.96668ZM3.78722 8.00001L8.63334 11.8769V4.12312L3.78722 8.00001Z"
      fill="currentColor"
    />
  </svg>
);
export default StepBackIcon;
