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

const ZapOffIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M7.7351 4.41861L8.17442 3.04131L7.51097 3.72486C7.24171 4.00228 6.79855 4.00889 6.52113 3.73964C6.24372 3.47038 6.2371 3.02721 6.50636 2.7498L8.23436 0.969428C8.38614 0.80265 8.5885 0.689912 8.81069 0.648822C9.04117 0.6062 9.2793 0.6432 9.48598 0.753749C9.69265 0.864299 9.85561 1.04183 9.94809 1.2572C10.0406 1.47257 10.0571 1.71298 9.99493 1.93897C9.99244 1.94805 9.98975 1.95708 9.98689 1.96605L9.06889 4.84405C8.95141 5.21237 8.55759 5.41571 8.18928 5.29822C7.82096 5.18074 7.61762 4.78692 7.7351 4.41861Z"
      fill="currentColor"
    />
    <path
      d="M12.2042 8.44794L13.2532 7.36668L13.331 5.99001L13.3333 6.66664V5.96668L13.3309 5.96668L13.331 5.99001L13.3333 5.96668C13.5915 5.96606 13.8435 6.03857 14.0622 6.17581C14.2812 6.3133 14.4568 6.51013 14.5684 6.74342C14.68 6.97671 14.7232 7.23688 14.6928 7.49372C14.6625 7.75055 14.5599 7.9935 14.3969 8.19435C14.3839 8.21042 14.3702 8.2259 14.3558 8.24075L13.2091 9.42275C12.9399 9.70024 12.4967 9.70696 12.2193 9.43777C11.9418 9.16858 11.935 8.72542 12.2042 8.44794Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.838357 0.838326C1.11172 0.564959 1.55494 0.564959 1.82831 0.838326L11.0651 10.0751C11.2272 10.0849 11.3867 10.1508 11.512 10.2732C11.6414 10.3997 11.7114 10.564 11.7215 10.7315L15.1616 14.1717C15.435 14.445 15.435 14.8882 15.1616 15.1616C14.8883 15.435 14.4451 15.435 14.1717 15.1616L10.9055 11.8954L7.8459 15.0267C7.03491 15.8567 5.65788 15.028 6.01144 13.9228L7.14926 10.3659C7.21062 10.1741 7.06933 9.97756 6.86798 9.97457L2.48635 9.9095C1.56187 9.89577 1.06575 8.81684 1.65709 8.10609L4.1363 5.12622L0.838357 1.82828C0.56499 1.55491 0.56499 1.11169 0.838357 0.838326ZM5.13041 6.12032L9.9155 10.9054L7.73158 13.1405L8.4827 10.7925C8.83038 9.70565 8.02976 8.59167 6.88877 8.57473L3.13476 8.51897L5.13041 6.12032Z"
      fill="currentColor"
    />
  </svg>
);
export default ZapOffIcon;
