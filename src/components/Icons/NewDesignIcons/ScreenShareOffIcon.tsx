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

const ScreenShareOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.22885 1.8956C1.61017 1.51427 2.12736 1.30005 2.66663 1.30005H8.66663C9.05323 1.30005 9.36663 1.61345 9.36663 2.00005C9.36663 2.38665 9.05323 2.70005 8.66663 2.70005H2.66663C2.49866 2.70005 2.33757 2.76677 2.2188 2.88555C2.10003 3.00432 2.0333 3.16541 2.0333 3.33338V10C2.0333 10.168 2.10003 10.3291 2.2188 10.4479C2.33757 10.5667 2.49866 10.6334 2.66663 10.6334H13.3333C13.5013 10.6334 13.6624 10.5667 13.7811 10.4479C13.8999 10.3291 13.9666 10.168 13.9666 10V8.00005C13.9666 7.61345 14.28 7.30005 14.6666 7.30005C15.0532 7.30005 15.3666 7.61345 15.3666 8.00005V10C15.3666 10.5393 15.1524 11.0565 14.7711 11.4378C14.3898 11.8192 13.8726 12.0334 13.3333 12.0334H8.69997V13.3H10.6666C11.0532 13.3 11.3666 13.6135 11.3666 14C11.3666 14.3866 11.0532 14.7 10.6666 14.7H5.3333C4.9467 14.7 4.6333 14.3866 4.6333 14C4.6333 13.6135 4.9467 13.3 5.3333 13.3H7.29997V12.0334H2.66663C2.12736 12.0334 1.61017 11.8192 1.22885 11.4378C0.847526 11.0565 0.633301 10.5393 0.633301 10V3.33338C0.633301 2.79411 0.847526 2.27692 1.22885 1.8956ZM10.8383 1.50507C11.1117 1.23171 11.5549 1.23171 11.8283 1.50507L13 2.67677L14.1717 1.50507C14.445 1.23171 14.8882 1.23171 15.1616 1.50507C15.435 1.77844 15.435 2.22166 15.1616 2.49502L13.9899 3.66672L15.1616 4.83841C15.435 5.11177 15.435 5.55499 15.1616 5.82836C14.8882 6.10172 14.445 6.10172 14.1717 5.82836L13 4.65666L11.8283 5.82836C11.5549 6.10172 11.1117 6.10172 10.8383 5.82836C10.565 5.55499 10.565 5.11177 10.8383 4.83841L12.01 3.66672L10.8383 2.49502C10.565 2.22166 10.565 1.77844 10.8383 1.50507Z"
      fill="currentColor"
    />
  </svg>
);
export default ScreenShareOffIcon;
