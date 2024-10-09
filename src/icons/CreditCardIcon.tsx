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

const CreditCardIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66667 4.03333C2.31689 4.03333 2.03333 4.31688 2.03333 4.66666V5.96666H13.9667V4.66666C13.9667 4.31688 13.6831 4.03333 13.3333 4.03333H2.66667ZM15.3667 4.66666C15.3667 3.54369 14.4563 2.63333 13.3333 2.63333H2.66667C1.54369 2.63333 0.633333 3.54369 0.633333 4.66666V11.3333C0.633333 12.4563 1.54369 13.3667 2.66667 13.3667H13.3333C14.4563 13.3667 15.3667 12.4563 15.3667 11.3333V4.66666ZM13.9667 7.36666H2.03333V11.3333C2.03333 11.6831 2.31689 11.9667 2.66667 11.9667H13.3333C13.6831 11.9667 13.9667 11.6831 13.9667 11.3333V7.36666Z"
      fill="currentColor"
    />
  </svg>
);
export default CreditCardIcon;
