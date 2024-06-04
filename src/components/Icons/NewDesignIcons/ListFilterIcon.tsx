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

const ListFilterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.3 3.99999C1.3 3.61339 1.6134 3.29999 2 3.29999H14C14.3866 3.29999 14.7 3.61339 14.7 3.99999C14.7 4.38659 14.3866 4.69999 14 4.69999H2C1.6134 4.69999 1.3 4.38659 1.3 3.99999ZM3.96667 7.99999C3.96667 7.61339 4.28007 7.29999 4.66667 7.29999H11.3333C11.7199 7.29999 12.0333 7.61339 12.0333 7.99999C12.0333 8.38659 11.7199 8.69999 11.3333 8.69999H4.66667C4.28007 8.69999 3.96667 8.38659 3.96667 7.99999ZM5.96667 12C5.96667 11.6134 6.28007 11.3 6.66667 11.3H9.33334C9.71994 11.3 10.0333 11.6134 10.0333 12C10.0333 12.3866 9.71994 12.7 9.33334 12.7H6.66667C6.28007 12.7 5.96667 12.3866 5.96667 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ListFilterIcon;
