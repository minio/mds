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

const OptionIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.30005 2.00005C1.30005 1.61345 1.61345 1.30005 2.00005 1.30005H6.00005C6.30135 1.30005 6.56885 1.49285 6.66413 1.77869L10.5046 13.3H14C14.3866 13.3 14.7 13.6135 14.7 14C14.7 14.3866 14.3866 14.7 14 14.7H10C9.69875 14.7 9.43125 14.5072 9.33597 14.2214L5.49552 2.70005H2.00005C1.61345 2.70005 1.30005 2.38665 1.30005 2.00005ZM8.63338 2.00005C8.63338 1.61345 8.94678 1.30005 9.33338 1.30005H14C14.3866 1.30005 14.7 1.61345 14.7 2.00005C14.7 2.38665 14.3866 2.70005 14 2.70005H9.33338C8.94678 2.70005 8.63338 2.38665 8.63338 2.00005Z"
      fill="currentColor"
    />
  </svg>
);
export default OptionIcon;
