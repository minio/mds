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

const ListPlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.29999 3.99999C1.29999 3.61339 1.61339 3.29999 1.99999 3.29999H10.6667C11.0533 3.29999 11.3667 3.61339 11.3667 3.99999C11.3667 4.38659 11.0533 4.69999 10.6667 4.69999H1.99999C1.61339 4.69999 1.29999 4.38659 1.29999 3.99999ZM12 5.29999C12.3866 5.29999 12.7 5.61339 12.7 5.99999V7.29999H14C14.3866 7.29999 14.7 7.61339 14.7 7.99999C14.7 8.38659 14.3866 8.69999 14 8.69999H12.7V9.99999C12.7 10.3866 12.3866 10.7 12 10.7C11.6134 10.7 11.3 10.3866 11.3 9.99999V8.69999H9.99999C9.61339 8.69999 9.29999 8.38659 9.29999 7.99999C9.29999 7.61339 9.61339 7.29999 9.99999 7.29999H11.3V5.99999C11.3 5.61339 11.6134 5.29999 12 5.29999ZM1.29999 7.99999C1.29999 7.61339 1.61339 7.29999 1.99999 7.29999H7.33332C7.71992 7.29999 8.03332 7.61339 8.03332 7.99999C8.03332 8.38659 7.71992 8.69999 7.33332 8.69999H1.99999C1.61339 8.69999 1.29999 8.38659 1.29999 7.99999ZM1.29999 12C1.29999 11.6134 1.61339 11.3 1.99999 11.3H10.6667C11.0533 11.3 11.3667 11.6134 11.3667 12C11.3667 12.3866 11.0533 12.7 10.6667 12.7H1.99999C1.61339 12.7 1.29999 12.3866 1.29999 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ListPlusIcon;
