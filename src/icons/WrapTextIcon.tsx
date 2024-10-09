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

const WrapTextIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.30005 4.00005C1.30005 3.61345 1.61345 3.30005 2.00005 3.30005H14C14.3866 3.30005 14.7 3.61345 14.7 4.00005C14.7 4.38665 14.3866 4.70005 14 4.70005H2.00005C1.61345 4.70005 1.30005 4.38665 1.30005 4.00005ZM1.30005 8.00005C1.30005 7.61345 1.61345 7.30005 2.00005 7.30005H12C12.7161 7.30005 13.4029 7.58451 13.9092 8.09086C14.4156 8.59721 14.7 9.28396 14.7 10C14.7 10.7161 14.4156 11.4029 13.9092 11.9092C13.4029 12.4156 12.7161 12.7 12 12.7H11.0233L11.1617 12.8384C11.4351 13.1118 11.4351 13.555 11.1617 13.8284C10.8883 14.1017 10.4451 14.1017 10.1717 13.8284L8.83841 12.495C8.70713 12.3637 8.63338 12.1857 8.63338 12C8.63338 11.8144 8.70713 11.6363 8.83841 11.5051L10.1717 10.1717C10.4451 9.89837 10.8883 9.89837 11.1617 10.1717C11.4351 10.4451 11.4351 10.8883 11.1617 11.1617L11.0233 11.3H12C12.3448 11.3 12.6755 11.1631 12.9193 10.9193C13.1631 10.6755 13.3 10.3448 13.3 10C13.3 9.65527 13.1631 9.32461 12.9193 9.08081C12.6755 8.83701 12.3448 8.70005 12 8.70005H2.00005C1.61345 8.70005 1.30005 8.38665 1.30005 8.00005ZM1.30005 12C1.30005 11.6134 1.61345 11.3 2.00005 11.3H6.66672C7.05331 11.3 7.36672 11.6134 7.36672 12C7.36672 12.3866 7.05331 12.7 6.66672 12.7H2.00005C1.61345 12.7 1.30005 12.3866 1.30005 12Z"
      fill="currentColor"
    />
  </svg>
);
export default WrapTextIcon;
