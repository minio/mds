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

const BookAIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.33334 2.03333C4.07697 2.03333 3.83109 2.13518 3.6498 2.31646C3.46852 2.49775 3.36667 2.74362 3.36667 3V10.8398C3.66792 10.705 3.99694 10.6333 4.33334 10.6333H12.6333V2.03333H4.33334ZM14.0333 1.33333C14.0333 0.946732 13.7199 0.633331 13.3333 0.633331H4.33334C3.70566 0.633331 3.10369 0.882676 2.65986 1.32651C2.21602 1.77035 1.96667 2.37232 1.96667 3V13C1.96667 13.6277 2.21602 14.2296 2.65986 14.6735C3.10369 15.1173 3.70566 15.3667 4.33334 15.3667H13.3333C13.7199 15.3667 14.0333 15.0533 14.0333 14.6667V1.33333ZM12.6333 12.0333H4.33334C4.07697 12.0333 3.83109 12.1352 3.6498 12.3165C3.46852 12.4977 3.36667 12.7436 3.36667 13C3.36667 13.2564 3.46852 13.5022 3.6498 13.6835C3.83109 13.8648 4.07697 13.9667 4.33334 13.9667H12.6333V12.0333ZM8.00001 3.3C8.25121 3.3 8.48315 3.4346 8.60778 3.6527L11.2744 8.31937C11.4663 8.65503 11.3496 9.08263 11.014 9.27443C10.6783 9.46624 10.2507 9.34962 10.0589 9.01396L9.49854 8.03333H6.50147L5.94111 9.01396C5.7493 9.34962 5.32171 9.46624 4.98604 9.27443C4.65038 9.08263 4.53376 8.65503 4.72557 8.31937L5.38849 7.15926C5.42011 7.03572 5.48459 6.92533 5.57208 6.83798L7.39224 3.6527C7.51687 3.4346 7.74881 3.3 8.00001 3.3ZM7.30147 6.63333H8.69854L8.00001 5.41089L7.30147 6.63333Z"
      fill="currentColor"
    />
  </svg>
);
export default BookAIcon;
