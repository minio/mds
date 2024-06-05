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

const TabletIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.99999 2.0333C3.65021 2.0333 3.36666 2.31685 3.36666 2.66663V13.3333C3.36666 13.6831 3.65021 13.9666 3.99999 13.9666H12C12.3498 13.9666 12.6333 13.6831 12.6333 13.3333V2.66663C12.6333 2.31685 12.3498 2.0333 12 2.0333H3.99999ZM1.96666 2.66663C1.96666 1.54366 2.87701 0.633301 3.99999 0.633301H12C13.123 0.633301 14.0333 1.54366 14.0333 2.66663V13.3333C14.0333 14.4563 13.123 15.3666 12 15.3666H3.99999C2.87701 15.3666 1.96666 14.4563 1.96666 13.3333V2.66663ZM7.29999 12C7.29999 11.6134 7.61339 11.3 7.99999 11.3H8.00666C8.39326 11.3 8.70666 11.6134 8.70666 12C8.70666 12.3866 8.39326 12.7 8.00666 12.7H7.99999C7.61339 12.7 7.29999 12.3866 7.29999 12Z"
      fill="currentColor"
    />
  </svg>
);
export default TabletIcon;
