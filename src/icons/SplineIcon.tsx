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

const SplineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.6667 2.70005C12.3169 2.70005 12.0334 2.9836 12.0334 3.33338C12.0334 3.68316 12.3169 3.96672 12.6667 3.96672C13.0165 3.96672 13.3 3.68316 13.3 3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005ZM10.75 2.65295C11.0299 1.86459 11.7824 1.30005 12.6667 1.30005C13.7897 1.30005 14.7 2.2104 14.7 3.33338C14.7 4.45636 13.7897 5.36672 12.6667 5.36672C11.798 5.36672 11.0566 4.82199 10.7653 4.0555C9.03711 4.19032 7.406 4.93701 6.1715 6.1715C4.93701 7.406 4.19032 9.03711 4.0555 10.7653C4.82199 11.0566 5.36672 11.798 5.36672 12.6667C5.36672 13.7897 4.45636 14.7 3.33338 14.7C2.2104 14.7 1.30005 13.7897 1.30005 12.6667C1.30005 11.7824 1.86459 11.0299 2.65295 10.75C2.79361 8.6557 3.68803 6.67507 5.18155 5.18155C6.67507 3.68803 8.6557 2.79361 10.75 2.65295ZM3.33338 12.0334C2.9836 12.0334 2.70005 12.3169 2.70005 12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3C3.68316 13.3 3.96672 13.0165 3.96672 12.6667C3.96672 12.3169 3.68316 12.0334 3.33338 12.0334Z"
      fill="currentColor"
    />
  </svg>
);
export default SplineIcon;
