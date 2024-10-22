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

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.96667 3.99999C1.96667 3.61339 2.28008 3.29999 2.66667 3.29999H13.3333C13.7199 3.29999 14.0333 3.61339 14.0333 3.99999C14.0333 4.38659 13.7199 4.69999 13.3333 4.69999H2.66667C2.28008 4.69999 1.96667 4.38659 1.96667 3.99999ZM1.96667 7.99999C1.96667 7.61339 2.28008 7.29999 2.66667 7.29999H13.3333C13.7199 7.29999 14.0333 7.61339 14.0333 7.99999C14.0333 8.38659 13.7199 8.69999 13.3333 8.69999H2.66667C2.28008 8.69999 1.96667 8.38659 1.96667 7.99999ZM1.96667 12C1.96667 11.6134 2.28008 11.3 2.66667 11.3H13.3333C13.7199 11.3 14.0333 11.6134 14.0333 12C14.0333 12.3866 13.7199 12.7 13.3333 12.7H2.66667C2.28008 12.7 1.96667 12.3866 1.96667 12Z"
      fill="currentColor"
    />
  </svg>
);
export default MenuIcon;
