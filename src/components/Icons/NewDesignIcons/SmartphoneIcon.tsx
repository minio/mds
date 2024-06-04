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

const SmartphoneIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66666 2.0333C4.31688 2.0333 4.03333 2.31685 4.03333 2.66663V13.3333C4.03333 13.6831 4.31688 13.9666 4.66666 13.9666H11.3333C11.6831 13.9666 11.9667 13.6831 11.9667 13.3333V2.66663C11.9667 2.31685 11.6831 2.0333 11.3333 2.0333H4.66666ZM2.63333 2.66663C2.63333 1.54366 3.54369 0.633301 4.66666 0.633301H11.3333C12.4563 0.633301 13.3667 1.54366 13.3667 2.66663V13.3333C13.3667 14.4563 12.4563 15.3666 11.3333 15.3666H4.66666C3.54369 15.3666 2.63333 14.4563 2.63333 13.3333V2.66663ZM7.3 12C7.3 11.6134 7.6134 11.3 8 11.3H8.00666C8.39326 11.3 8.70666 11.6134 8.70666 12C8.70666 12.3866 8.39326 12.7 8.00666 12.7H8C7.6134 12.7 7.3 12.3866 7.3 12Z"
      fill="currentColor"
    />
  </svg>
);
export default SmartphoneIcon;
