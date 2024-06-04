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

const MousePointerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.50509 1.50503C1.70566 1.30447 2.00744 1.24476 2.26927 1.35384L13.5826 6.06718C13.8514 6.17916 14.0228 6.44587 14.013 6.7369C14.0032 7.02793 13.8143 7.2825 13.5385 7.37615L9.67754 8.68753L13.1617 12.1717C13.4351 12.4451 13.4351 12.8883 13.1617 13.1616C12.8883 13.435 12.4451 13.435 12.1718 13.1616L8.68759 9.67748L7.37621 13.5385C7.28256 13.8142 7.028 14.0031 6.73696 14.0129C6.44593 14.0227 6.17922 13.8513 6.06724 13.5825L1.3539 2.26921C1.24482 2.00738 1.30453 1.7056 1.50509 1.50503ZM3.29994 3.29988L6.64672 11.3331L7.72392 8.16155C7.79388 7.95557 7.95563 7.79382 8.16161 7.72386L11.3332 6.64665L3.29994 3.29988Z"
      fill="currentColor"
    />
  </svg>
);
export default MousePointerIcon;
