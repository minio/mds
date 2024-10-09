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

const ListVideoIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.29999 3.99999C1.29999 3.61339 1.61339 3.29999 1.99999 3.29999H10.6667C11.0533 3.29999 11.3667 3.61339 11.3667 3.99999C11.3667 4.38659 11.0533 4.69999 10.6667 4.69999H1.99999C1.61339 4.69999 1.29999 4.38659 1.29999 3.99999ZM1.29999 7.99999C1.29999 7.61339 1.61339 7.29999 1.99999 7.29999H7.99999C8.38659 7.29999 8.69999 7.61339 8.69999 7.99999C8.69999 8.38659 8.38659 8.69999 7.99999 8.69999H1.99999C1.61339 8.69999 1.29999 8.38659 1.29999 7.99999ZM10.3218 7.39085C10.5412 7.26659 10.8105 7.26999 11.0268 7.39974L14.3601 9.39974C14.571 9.52625 14.7 9.7541 14.7 9.99999C14.7 10.2459 14.571 10.4737 14.3601 10.6002L11.0268 12.6002C10.8105 12.73 10.5412 12.7334 10.3218 12.6091C10.1023 12.4849 9.96665 12.2522 9.96665 12V7.99999C9.96665 7.7478 10.1023 7.5151 10.3218 7.39085ZM11.3667 9.23632V10.7637L12.6394 9.99999L11.3667 9.23632ZM1.29999 12C1.29999 11.6134 1.61339 11.3 1.99999 11.3H7.99999C8.38659 11.3 8.69999 11.6134 8.69999 12C8.69999 12.3866 8.38659 12.7 7.99999 12.7H1.99999C1.61339 12.7 1.29999 12.3866 1.29999 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ListVideoIcon;
