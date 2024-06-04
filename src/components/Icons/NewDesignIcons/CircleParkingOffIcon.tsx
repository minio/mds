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

const CircleParkingOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.31494 4.30486C2.51238 5.32105 2.03336 6.60458 2.03336 8C2.03336 11.2953 4.70473 13.9667 8.00003 13.9667C9.39544 13.9667 10.679 13.4876 11.6952 12.6851L8.17203 9.16195C8.17182 9.16174 8.17224 9.16216 8.17203 9.16195L3.31494 4.30486ZM4.30489 3.31491L5.36397 4.37399C5.47478 4.13355 5.71792 3.96666 6.00003 3.96666H8.66669C9.38278 3.96666 10.0695 4.25113 10.5759 4.75748C11.0822 5.26382 11.3667 5.95058 11.3667 6.66666C11.3667 7.38275 11.0822 8.0695 10.5759 8.57585C10.4037 8.74799 10.2108 8.89448 10.0029 9.01288L12.6851 11.6951C13.4877 10.6789 13.9667 9.39541 13.9667 8C13.9667 4.7047 11.2953 2.03333 8.00003 2.03333C6.60461 2.03333 5.32108 2.51235 4.30489 3.31491ZM8.92976 7.93977C9.17648 7.88879 9.4051 7.76673 9.58593 7.5859C9.82973 7.34211 9.96669 7.01145 9.96669 6.66666C9.96669 6.32188 9.82973 5.99122 9.58593 5.74743C9.34214 5.50363 9.01148 5.36666 8.66669 5.36666H6.70003V5.71005L8.92976 7.93977ZM0.633362 8C0.633362 3.9315 3.93153 0.633331 8.00003 0.633331C12.0685 0.633331 15.3667 3.9315 15.3667 8C15.3667 12.0685 12.0685 15.3667 8.00003 15.3667C3.93153 15.3667 0.633362 12.0685 0.633362 8ZM6.00003 9.07333C6.38663 9.07333 6.70003 9.38673 6.70003 9.77333V11.3333C6.70003 11.7199 6.38663 12.0333 6.00003 12.0333C5.61343 12.0333 5.30003 11.7199 5.30003 11.3333V9.77333C5.30003 9.38673 5.61343 9.07333 6.00003 9.07333Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleParkingOffIcon;
