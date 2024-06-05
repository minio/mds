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

const SmartphoneNfcIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.9254 2.12593C13.2608 1.93376 13.6885 2.04991 13.8807 2.38536C14.8597 4.09424 15.3754 6.02921 15.3766 7.99866C15.3779 9.96811 14.8647 11.9037 13.8878 13.6139C13.6961 13.9495 13.2685 14.0662 12.9328 13.8745C12.5971 13.6827 12.4804 13.2552 12.6722 12.9195C13.5281 11.4211 13.9777 9.72514 13.9766 7.99955C13.9755 6.27396 13.5237 4.57858 12.6659 3.08129C12.4738 2.74584 12.5899 2.31811 12.9254 2.12593ZM2.03333 4.69999V11.3H5.3V4.69999H2.03333ZM0.633331 4.66666C0.633331 3.91187 1.24521 3.29999 2 3.29999H5.33333C6.08812 3.29999 6.7 3.91187 6.7 4.66666V11.3333C6.7 12.0881 6.08812 12.7 5.33333 12.7H2C1.24521 12.7 0.633331 12.0881 0.633331 11.3333V4.66666ZM10.6287 3.53071C10.9652 3.34037 11.3923 3.45885 11.5826 3.79535C12.3081 5.07793 12.6894 6.52643 12.6894 7.99999C12.6894 9.47355 12.3081 10.922 11.5826 12.2046C11.3923 12.5411 10.9652 12.6596 10.6287 12.4693C10.2922 12.2789 10.1737 11.8518 10.3641 11.5153C10.9706 10.443 11.2894 9.23198 11.2894 7.99999C11.2894 6.76799 10.9706 5.55696 10.3641 4.48463C10.1737 4.14814 10.2922 3.72105 10.6287 3.53071ZM8.31996 4.93855C8.65581 4.74707 9.0833 4.8641 9.27477 5.19995C9.76113 6.05301 10.0169 7.01803 10.0169 7.99999C10.0169 8.98195 9.76113 9.94697 9.27477 10.8C9.0833 11.1359 8.65581 11.2529 8.31996 11.0614C7.98411 10.87 7.86708 10.4425 8.05856 10.1066C8.42447 9.46482 8.6169 8.73877 8.6169 7.99999C8.6169 7.2612 8.42447 6.53516 8.05856 5.89336C7.86708 5.55751 7.98411 5.13002 8.31996 4.93855Z"
      fill="currentColor"
    />
  </svg>
);
export default SmartphoneNfcIcon;
