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

const ListIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.29999 3.99999C1.29999 3.61339 1.61339 3.29999 1.99999 3.29999H2.00665C2.39325 3.29999 2.70665 3.61339 2.70665 3.99999C2.70665 4.38659 2.39325 4.69999 2.00665 4.69999H1.99999C1.61339 4.69999 1.29999 4.38659 1.29999 3.99999ZM4.63332 3.99999C4.63332 3.61339 4.94672 3.29999 5.33332 3.29999H14C14.3866 3.29999 14.7 3.61339 14.7 3.99999C14.7 4.38659 14.3866 4.69999 14 4.69999H5.33332C4.94672 4.69999 4.63332 4.38659 4.63332 3.99999ZM1.29999 7.99999C1.29999 7.61339 1.61339 7.29999 1.99999 7.29999H2.00665C2.39325 7.29999 2.70665 7.61339 2.70665 7.99999C2.70665 8.38659 2.39325 8.69999 2.00665 8.69999H1.99999C1.61339 8.69999 1.29999 8.38659 1.29999 7.99999ZM4.63332 7.99999C4.63332 7.61339 4.94672 7.29999 5.33332 7.29999H14C14.3866 7.29999 14.7 7.61339 14.7 7.99999C14.7 8.38659 14.3866 8.69999 14 8.69999H5.33332C4.94672 8.69999 4.63332 8.38659 4.63332 7.99999ZM1.29999 12C1.29999 11.6134 1.61339 11.3 1.99999 11.3H2.00665C2.39325 11.3 2.70665 11.6134 2.70665 12C2.70665 12.3866 2.39325 12.7 2.00665 12.7H1.99999C1.61339 12.7 1.29999 12.3866 1.29999 12ZM4.63332 12C4.63332 11.6134 4.94672 11.3 5.33332 11.3H14C14.3866 11.3 14.7 11.6134 14.7 12C14.7 12.3866 14.3866 12.7 14 12.7H5.33332C4.94672 12.7 4.63332 12.3866 4.63332 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ListIcon;
