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

const EraserIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.94634 2.93495C9.63818 2.59255 9.10356 2.55304 8.69496 2.96165L4.32327 7.33334L9.33332 12.3434L13.705 7.9717C13.7137 7.96302 13.7226 7.95457 13.7317 7.94636C14.0741 7.63821 14.1136 7.10358 13.705 6.69498L9.97167 2.96165C9.963 2.95297 9.95455 2.94407 9.94634 2.93495ZM8.31003 13.3L3.33332 8.32329L2.29496 9.36165C2.28628 9.37032 2.27738 9.37877 2.26826 9.38698C1.92586 9.69514 1.88636 10.2298 2.29496 10.6384L4.9566 13.3H8.31003ZM2.83793 6.83877C2.83807 6.83864 2.83821 6.8385 2.83834 6.83836C2.83848 6.83823 2.83861 6.83809 2.83875 6.83795L7.70501 1.9717C8.62511 1.0516 10.0804 1.00788 10.9735 1.98358L14.695 5.70503C15.6151 6.62513 15.6588 8.08047 14.6831 8.97354L10.3566 13.3H14.6666C15.0532 13.3 15.3666 13.6134 15.3666 14C15.3666 14.3866 15.0532 14.7 14.6666 14.7H4.66665C4.481 14.7 4.30295 14.6263 4.17168 14.495L1.30501 11.6283C0.384906 10.7082 0.341192 9.25287 1.3169 8.3598L2.83793 6.83877Z"
      fill="currentColor"
    />
  </svg>
);
export default EraserIcon;
