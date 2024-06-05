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

const RussianRubleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.30005 2.00005C5.30005 1.61345 5.61345 1.30005 6.00005 1.30005H9.33338C10.2263 1.30005 11.0826 1.65475 11.714 2.28612C12.3453 2.91749 12.7 3.77382 12.7 4.66672C12.7 5.55961 12.3453 6.41594 11.714 7.04731C11.0826 7.67868 10.2263 8.03338 9.33338 8.03338H6.70005V9.30005H9.33338C9.71998 9.30005 10.0334 9.61345 10.0334 10C10.0334 10.3866 9.71998 10.7 9.33338 10.7H6.70005V14C6.70005 14.3866 6.38665 14.7 6.00005 14.7C5.61345 14.7 5.30005 14.3866 5.30005 14V10.7H4.00005C3.61345 10.7 3.30005 10.3866 3.30005 10C3.30005 9.61345 3.61345 9.30005 4.00005 9.30005H5.30005V8.03338H4.00005C3.61345 8.03338 3.30005 7.71998 3.30005 7.33338C3.30005 6.94678 3.61345 6.63338 4.00005 6.63338H5.30005V2.00005ZM6.70005 6.63338H9.33338C9.85497 6.63338 10.3552 6.42618 10.724 6.05736C11.0928 5.68854 11.3 5.18831 11.3 4.66672C11.3 4.14512 11.0928 3.64489 10.724 3.27607C10.3552 2.90725 9.85497 2.70005 9.33338 2.70005H6.70005V6.63338Z"
      fill="currentColor"
    />
  </svg>
);
export default RussianRubleIcon;
