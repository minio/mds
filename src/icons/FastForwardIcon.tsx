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

const FastForwardIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.02575 2.70452C1.26592 2.58705 1.55202 2.61665 1.76306 2.78079L7.76306 7.44746C7.85113 7.51596 7.92032 7.60348 7.96663 7.70186V3.33334C7.96663 3.06598 8.11892 2.82198 8.35909 2.70452C8.59926 2.58705 8.88536 2.61665 9.09639 2.78079L15.0964 7.44746C15.2669 7.58008 15.3666 7.78399 15.3666 8C15.3666 8.21602 15.2669 8.41993 15.0964 8.55255L9.09639 13.2192C8.88536 13.3834 8.59926 13.413 8.35909 13.2955C8.11892 13.178 7.96663 12.934 7.96663 12.6667V8.29815C7.92032 8.39653 7.85113 8.48405 7.76306 8.55255L1.76306 13.2192C1.55202 13.3834 1.26592 13.413 1.02575 13.2955C0.785587 13.178 0.633301 12.934 0.633301 12.6667V3.33334C0.633301 3.06598 0.785587 2.82198 1.02575 2.70452ZM2.0333 4.76458V11.2354L6.19313 8L2.0333 4.76458ZM9.36663 4.76458V11.2354L13.5265 8L9.36663 4.76458Z"
      fill="currentColor"
    />
  </svg>
);
export default FastForwardIcon;
