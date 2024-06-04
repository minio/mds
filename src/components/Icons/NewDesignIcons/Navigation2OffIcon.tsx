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

const Navigation2OffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838387 0.838326C1.11175 0.564959 1.55497 0.564959 1.82834 0.838326L6.69051 5.7005C6.69791 5.70758 6.70515 5.71482 6.71221 5.7222L12.3711 11.3811C12.3785 11.3882 12.3857 11.3954 12.3928 11.4028L15.1617 14.1717C15.435 14.445 15.435 14.8882 15.1617 15.1616C14.8883 15.435 14.4451 15.435 14.1717 15.1616L13.3026 14.2925C13.2608 14.3837 13.1989 14.4665 13.119 14.5342C12.8945 14.7243 12.5749 14.7537 12.3194 14.6077L8.00003 12.1395L3.68066 14.6077C3.42519 14.7537 3.10569 14.7244 2.8811 14.5343C2.65652 14.3442 2.57479 14.0339 2.67658 13.7578L5.39494 6.38482L0.838387 1.82828C0.56502 1.55491 0.56502 1.11169 0.838387 0.838326ZM6.48512 7.47501L4.65515 12.4384L7.65273 10.7255C7.86793 10.6026 8.13212 10.6026 8.34733 10.7255L11.344 12.4379L11.2832 12.273L6.48512 7.47501ZM8.00044 0.633301C8.29372 0.633476 8.55579 0.816451 8.65701 1.09171L10.3437 5.67837C10.4771 6.04122 10.2911 6.44352 9.92829 6.57695C9.56545 6.71038 9.16314 6.52441 9.02971 6.16156L7.99882 3.35821L7.87673 3.68901C7.74287 4.0517 7.34033 4.23719 6.97765 4.10333C6.61497 3.96947 6.42947 3.56694 6.56333 3.20426L7.34333 1.09092C7.44488 0.81579 7.70717 0.633126 8.00044 0.633301Z"
      fill="currentColor"
    />
  </svg>
);
export default Navigation2OffIcon;
