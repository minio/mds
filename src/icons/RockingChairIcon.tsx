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

const RockingChairIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.141 0.660292C2.51272 0.554085 2.90016 0.76933 3.00637 1.14105L4.86131 7.63336H6.32002C6.32927 7.63318 6.33852 7.63317 6.34779 7.63336H9.98426C9.99444 7.63314 10.0046 7.63314 10.0148 7.63336H12C12.3866 7.63336 12.7 7.94676 12.7 8.33336C12.7 8.71996 12.3866 9.03336 12 9.03336H11.0991L12.6579 12.3735C13.0174 12.1144 13.3556 11.8251 13.6686 11.5082C13.9402 11.2331 14.3834 11.2303 14.6585 11.5019C14.9336 11.7736 14.9364 12.2168 14.6647 12.4919C13.7935 13.3742 12.7557 14.0747 11.6116 14.5528C10.4675 15.0309 9.23993 15.2771 7.99997 15.2771C6.76001 15.2771 5.53239 15.0309 4.38831 14.5528C3.24424 14.0747 2.20648 13.3742 1.33522 12.4919C1.06358 12.2168 1.06637 11.7736 1.34145 11.5019C1.61653 11.2303 2.05973 11.2331 2.33138 11.5082C2.65334 11.8342 3.00204 12.1311 3.37328 12.3959L5.16663 9.03336H4.3333C4.02076 9.03336 3.74609 8.82617 3.66023 8.52566L1.66023 1.52566C1.55403 1.15394 1.76927 0.766499 2.141 0.660292ZM6.7533 9.03336L4.58112 13.1062C4.69542 13.1605 4.81113 13.2121 4.92813 13.261C5.90121 13.6677 6.94534 13.8771 7.99997 13.8771C9.05459 13.8771 10.0987 13.6677 11.0718 13.261C11.1989 13.2079 11.3244 13.1516 11.4483 13.0921L9.55416 9.03336H6.7533Z"
      fill="currentColor"
    />
  </svg>
);
export default RockingChairIcon;
