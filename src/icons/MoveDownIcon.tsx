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

const MoveDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 0.633301C8.3866 0.633301 8.7 0.946701 8.7 1.3333V12.9767L10.1717 11.505C10.4451 11.2316 10.8883 11.2316 11.1616 11.505C11.435 11.7784 11.435 12.2216 11.1616 12.4949L8.49497 15.1616C8.22161 15.435 7.77839 15.435 7.50503 15.1616L4.83836 12.4949C4.56499 12.2216 4.56499 11.7784 4.83836 11.505C5.11173 11.2316 5.55494 11.2316 5.82831 11.505L7.3 12.9767V1.3333C7.3 0.946701 7.6134 0.633301 8 0.633301Z"
      fill="currentColor"
    />
  </svg>
);
export default MoveDownIcon;
