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

const PowerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 0.633301C8.3866 0.633301 8.7 0.946701 8.7 1.3333V7.99997C8.7 8.38657 8.3866 8.69997 8 8.69997C7.6134 8.69997 7.3 8.38657 7.3 7.99997V1.3333C7.3 0.946701 7.6134 0.633301 8 0.633301ZM11.7718 3.9049C12.0452 3.63158 12.4884 3.63167 12.7617 3.90508C13.6972 4.84093 14.3347 6.03283 14.5937 7.33048C14.8527 8.62813 14.7216 9.97342 14.217 11.1967C13.7124 12.4199 12.8569 13.4664 11.7584 14.2041C10.6598 14.9418 9.36747 15.3376 8.04423 15.3418C6.721 15.3459 5.42616 14.9582 4.32302 14.2274C3.21988 13.4966 2.35784 12.4555 1.84561 11.2354C1.33337 10.0154 1.19389 8.67092 1.44474 7.37167C1.6956 6.07242 2.32556 4.87655 3.25518 3.93486C3.52678 3.65974 3.96998 3.65688 4.24511 3.92848C4.52023 4.20008 4.52309 4.64328 4.25149 4.91841C3.51612 5.66332 3.01779 6.60931 2.81936 7.63708C2.62092 8.66484 2.73126 9.72835 3.13646 10.6935C3.54166 11.6586 4.22357 12.4822 5.0962 13.0602C5.96884 13.6383 6.99311 13.9451 8.03985 13.9418C9.08659 13.9385 10.1089 13.6254 10.9779 13.0418C11.8469 12.4583 12.5236 11.6305 12.9228 10.6628C13.3219 9.69517 13.4256 8.63099 13.2207 7.6045C13.0159 6.578 12.5116 5.63515 11.7716 4.89485C11.4983 4.62143 11.4984 4.17822 11.7718 3.9049Z"
      fill="currentColor"
    />
  </svg>
);
export default PowerIcon;
