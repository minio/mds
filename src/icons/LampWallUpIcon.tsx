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

const LampWallUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.68994 2.39093C6.80025 2.13355 7.05332 1.96667 7.33334 1.96667H11.3333C11.6134 1.96667 11.8664 2.13355 11.9767 2.39093L13.9767 7.0576C14.0694 7.27387 14.0473 7.52225 13.9177 7.71868C13.7882 7.91512 13.5686 8.03334 13.3333 8.03334H10.0333V10.6667C10.0333 11.2059 9.81912 11.7231 9.43779 12.1045C9.05647 12.4858 8.53928 12.7 8.00001 12.7H6.03307C6.02444 13.2272 5.81125 13.731 5.43779 14.1045C5.05647 14.4858 4.53928 14.7 4.00001 14.7H2.66667C2.28008 14.7 1.96667 14.3866 1.96667 14V10C1.96667 9.61341 2.28008 9.30001 2.66667 9.30001H4.00001C4.53928 9.30001 5.05647 9.51423 5.43779 9.89556C5.81125 10.269 6.02444 10.7728 6.03307 11.3H8.00001C8.16798 11.3 8.32907 11.2333 8.44784 11.1145C8.56662 10.9957 8.63334 10.8346 8.63334 10.6667V8.03334H5.33334C5.09804 8.03334 4.87848 7.91512 4.74895 7.71868C4.61942 7.52225 4.59725 7.27387 4.68994 7.0576L6.68994 2.39093ZM12.2718 6.63334L10.8718 3.36667H7.79492L6.39492 6.63334H12.2718ZM4.63334 11.3333C4.63334 11.1654 4.56662 11.0043 4.44784 10.8855C4.32907 10.7667 4.16798 10.7 4.00001 10.7H3.36667V13.3H4.00001C4.16798 13.3 4.32907 13.2333 4.44784 13.1145C4.56662 12.9957 4.63334 12.8346 4.63334 12.6667V11.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default LampWallUpIcon;
