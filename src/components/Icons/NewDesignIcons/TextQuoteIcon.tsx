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

const TextQuoteIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.30005 4.00005C1.30005 3.61345 1.61345 3.30005 2.00005 3.30005H11.3334C11.72 3.30005 12.0334 3.61345 12.0334 4.00005C12.0334 4.38665 11.72 4.70005 11.3334 4.70005H2.00005C1.61345 4.70005 1.30005 4.38665 1.30005 4.00005ZM2.00005 7.30005C2.38665 7.30005 2.70005 7.61345 2.70005 8.00005V12C2.70005 12.3866 2.38665 12.7 2.00005 12.7C1.61345 12.7 1.30005 12.3866 1.30005 12V8.00005C1.30005 7.61345 1.61345 7.30005 2.00005 7.30005ZM4.63338 8.00005C4.63338 7.61345 4.94678 7.30005 5.33338 7.30005H14C14.3866 7.30005 14.7 7.61345 14.7 8.00005C14.7 8.38665 14.3866 8.70005 14 8.70005H5.33338C4.94678 8.70005 4.63338 8.38665 4.63338 8.00005ZM4.63338 12C4.63338 11.6134 4.94678 11.3 5.33338 11.3H14C14.3866 11.3 14.7 11.6134 14.7 12C14.7 12.3866 14.3866 12.7 14 12.7H5.33338C4.94678 12.7 4.63338 12.3866 4.63338 12Z"
      fill="currentColor"
    />
  </svg>
);
export default TextQuoteIcon;
