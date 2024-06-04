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

const KeySquareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.0384 2.295C9.71173 1.96837 9.08828 1.96837 8.76164 2.295L6.29498 4.76167C5.96834 5.0883 5.96834 5.71175 6.29498 6.03838L9.96164 9.70505C10.2883 10.0317 10.9117 10.0317 11.2384 9.70505L13.705 7.23838C14.0317 6.91175 14.0317 6.2883 13.705 5.96167L10.0384 2.295ZM7.77169 1.30505C8.64506 0.431683 10.1549 0.431683 11.0283 1.30505L14.695 4.97172C15.5683 5.84508 15.5683 7.35497 14.695 8.22833L12.2283 10.695C11.3549 11.5684 9.84506 11.5684 8.97169 10.695L8.96667 10.69L8.49498 11.1617C8.3637 11.2929 8.18565 11.3667 8 11.3667H7.36667V12.6667C7.36667 13.0533 7.05327 13.3667 6.66667 13.3667H5.36667V14.6667C5.36667 15.0533 5.05327 15.3667 4.66667 15.3667H2C1.64093 15.3667 1.28731 15.2439 1.02169 14.9783C0.756082 14.7127 0.633335 14.3591 0.633335 14V12C0.633335 11.8144 0.707085 11.6363 0.83836 11.505L5.31005 7.03336L5.30503 7.02833C4.43166 6.15496 4.43166 4.64508 5.30503 3.77172L7.77169 1.30505ZM6.3 8.02331L2.03334 12.29V13.9667H3.96667V12.6667C3.96667 12.2801 4.28007 11.9667 4.66667 11.9667H5.96667V10.6667C5.96667 10.2801 6.28007 9.96669 6.66667 9.96669H7.71005L7.97672 9.70002L6.3 8.02331ZM8.83836 4.17172C9.11173 3.89835 9.55494 3.89835 9.82831 4.17172L11.8283 6.17172C12.1017 6.44508 12.1017 6.8883 11.8283 7.16167C11.5549 7.43503 11.1117 7.43503 10.8384 7.16167L8.83836 5.16167C8.56499 4.8883 8.56499 4.44508 8.83836 4.17172Z"
      fill="currentColor"
    />
  </svg>
);
export default KeySquareIcon;
