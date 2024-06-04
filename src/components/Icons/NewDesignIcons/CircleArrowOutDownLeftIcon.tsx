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

const CircleArrowOutDownLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.16401 2.14798C8.00659 1.91776 6.80689 2.03592 5.71662 2.48752C4.62636 2.93912 3.69449 3.70389 3.03887 4.6851C2.38324 5.66631 2.0333 6.81991 2.0333 8C2.0333 8.3866 1.7199 8.7 1.3333 8.7C0.946701 8.7 0.633301 8.3866 0.633301 8C0.633301 6.54301 1.06535 5.11874 1.87481 3.9073C2.68427 2.69586 3.83478 1.75165 5.18087 1.19409C6.52695 0.636523 8.00814 0.490639 9.43713 0.774883C10.8661 1.05913 12.1787 1.76073 13.209 2.79098C14.2392 3.82123 14.9408 5.13384 15.2251 6.56284C15.5093 7.99183 15.3634 9.47302 14.8059 10.8191C14.2483 12.1652 13.3041 13.3157 12.0927 14.1252C10.8812 14.9346 9.45696 15.3667 7.99997 15.3667C7.61337 15.3667 7.29997 15.0533 7.29997 14.6667C7.29997 14.2801 7.61337 13.9667 7.99997 13.9667C9.18006 13.9667 10.3337 13.6167 11.3149 12.9611C12.2961 12.3055 13.0608 11.3736 13.5124 10.2833C13.9641 9.19308 14.0822 7.99338 13.852 6.83596C13.6218 5.67854 13.0535 4.61538 12.219 3.78093C11.3846 2.94648 10.3214 2.37821 9.16401 2.14798ZM7.50499 7.50503C7.77836 7.23166 8.22157 7.23166 8.49494 7.50503C8.76831 7.77839 8.76831 8.22161 8.49494 8.49498L3.02325 13.9667H5.3333C5.7199 13.9667 6.0333 14.2801 6.0333 14.6667C6.0333 15.0533 5.7199 15.3667 5.3333 15.3667H1.3333C0.946701 15.3667 0.633301 15.0533 0.633301 14.6667V10.6667C0.633301 10.2801 0.946701 9.96667 1.3333 9.96667C1.7199 9.96667 2.0333 10.2801 2.0333 10.6667V12.9767L7.50499 7.50503Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleArrowOutDownLeftIcon;
