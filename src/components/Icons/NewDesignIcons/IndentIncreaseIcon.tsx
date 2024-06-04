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

const IndentIncreaseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.63338 3.99999C6.63338 3.61339 6.94678 3.29999 7.33338 3.29999H14C14.3866 3.29999 14.7 3.61339 14.7 3.99999C14.7 4.38659 14.3866 4.69999 14 4.69999H7.33338C6.94678 4.69999 6.63338 4.38659 6.63338 3.99999ZM1.50507 4.83835C1.77844 4.56498 2.22166 4.56498 2.49502 4.83835L5.16169 7.50501C5.43506 7.77838 5.43506 8.2216 5.16169 8.49496L2.49502 11.1616C2.22166 11.435 1.77844 11.435 1.50507 11.1616C1.23171 10.8883 1.23171 10.445 1.50507 10.1717L3.67677 7.99999L1.50507 5.8283C1.23171 5.55493 1.23171 5.11171 1.50507 4.83835ZM7.33338 7.29999H14C14.3866 7.29999 14.7 7.61339 14.7 7.99999C14.7 8.38659 14.3866 8.69999 14 8.69999H7.33338C6.94678 8.69999 6.63338 8.38659 6.63338 7.99999C6.63338 7.61339 6.94678 7.29999 7.33338 7.29999ZM6.63338 12C6.63338 11.6134 6.94678 11.3 7.33338 11.3H14C14.3866 11.3 14.7 11.6134 14.7 12C14.7 12.3866 14.3866 12.7 14 12.7H7.33338C6.94678 12.7 6.63338 12.3866 6.63338 12Z"
      fill="currentColor"
    />
  </svg>
);
export default IndentIncreaseIcon;
