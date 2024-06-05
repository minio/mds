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

const MapIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.368 1.40453C14.5744 1.53208 14.7 1.75738 14.7 1.99999V12C14.7 12.2651 14.5502 12.5075 14.313 12.6261L10.313 14.6261C10.116 14.7246 9.88401 14.7246 9.68694 14.6261L5.99999 12.7826L2.31304 14.6261C2.09605 14.7346 1.83835 14.723 1.63198 14.5954C1.4256 14.4679 1.29999 14.2426 1.29999 14V3.99999C1.29999 3.73485 1.44979 3.49246 1.68694 3.37389L5.68694 1.37389C5.88401 1.27535 6.11597 1.27535 6.31304 1.37389L9.99999 3.21736L13.6869 1.37389C13.9039 1.26539 14.1616 1.27699 14.368 1.40453ZM9.29999 4.43261L6.69999 3.13261V11.5674L9.29999 12.8674V4.43261ZM10.7 12.8674L13.3 11.5674V3.13261L10.7 4.43261V12.8674ZM5.29999 11.5674V3.13261L2.69999 4.43261V12.8674L5.29999 11.5674Z"
      fill="currentColor"
    />
  </svg>
);
export default MapIcon;
