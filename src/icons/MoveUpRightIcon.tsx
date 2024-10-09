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

const MoveUpRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.66666 4.0333C8.28006 4.0333 7.96666 3.7199 7.96666 3.3333C7.96666 2.9467 8.28006 2.6333 8.66666 2.6333H12.6667C13.0533 2.6333 13.3667 2.9467 13.3667 3.3333V7.3333C13.3667 7.7199 13.0533 8.0333 12.6667 8.0333C12.2801 8.0333 11.9667 7.7199 11.9667 7.3333V5.02325L3.82831 13.1616C3.55494 13.435 3.11172 13.435 2.83836 13.1616C2.56499 12.8882 2.56499 12.445 2.83836 12.1717L10.9767 4.0333H8.66666Z"
      fill="currentColor"
    />
  </svg>
);
export default MoveUpRightIcon;
