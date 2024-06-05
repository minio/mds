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

const ZoomInIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.33334 2.70005C4.77442 2.70005 2.7 4.77446 2.7 7.33338C2.7 9.8923 4.77442 11.9667 7.33334 11.9667C8.58076 11.9667 9.71305 11.4738 10.546 10.672C10.564 10.6488 10.5837 10.6264 10.605 10.6051C10.6264 10.5837 10.6487 10.5641 10.672 10.5461C11.4737 9.7131 11.9667 8.58081 11.9667 7.33338C11.9667 4.77446 9.89226 2.70005 7.33334 2.70005ZM12.0659 11.076C12.8804 10.0475 13.3667 8.74722 13.3667 7.33338C13.3667 4.00126 10.6655 1.30005 7.33334 1.30005C4.00122 1.30005 1.3 4.00126 1.3 7.33338C1.3 10.6655 4.00122 13.3667 7.33334 13.3667C8.74717 13.3667 10.0474 12.8804 11.0759 12.0659L13.505 14.495C13.7784 14.7684 14.2216 14.7684 14.495 14.495C14.7683 14.2217 14.7683 13.7784 14.495 13.5051L12.0659 11.076ZM7.33334 4.63338C7.71994 4.63338 8.03334 4.94678 8.03334 5.33338V6.63338H9.33334C9.71994 6.63338 10.0333 6.94678 10.0333 7.33338C10.0333 7.71998 9.71994 8.03338 9.33334 8.03338H8.03334V9.33338C8.03334 9.71998 7.71994 10.0334 7.33334 10.0334C6.94674 10.0334 6.63334 9.71998 6.63334 9.33338V8.03338H5.33334C4.94674 8.03338 4.63334 7.71998 4.63334 7.33338C4.63334 6.94678 4.94674 6.63338 5.33334 6.63338H6.63334V5.33338C6.63334 4.94678 6.94674 4.63338 7.33334 4.63338Z"
      fill="currentColor"
    />
  </svg>
);
export default ZoomInIcon;
