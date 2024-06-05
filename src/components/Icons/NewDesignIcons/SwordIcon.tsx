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

const SwordIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.30005 2.00005C1.30005 1.61345 1.61345 1.30005 2.00005 1.30005H4.00005C4.1857 1.30005 4.36375 1.3738 4.49502 1.50507L11.6667 8.67677L12.1717 8.17174C12.4451 7.89837 12.8883 7.89837 13.1617 8.17174C13.4351 8.44511 13.4351 8.88832 13.1617 9.16169L12.1622 10.1612C12.162 10.1614 12.1623 10.161 12.1622 10.1612C12.162 10.1614 12.1614 10.162 12.1612 10.1622L11.6567 10.6667L13.3334 12.3434L13.5051 12.1717C13.7784 11.8984 14.2217 11.8984 14.495 12.1717C14.7684 12.4451 14.7684 12.8883 14.495 13.1617L13.1617 14.495C12.8883 14.7684 12.4451 14.7684 12.1717 14.495C11.8984 14.2217 11.8984 13.7784 12.1717 13.5051L12.3434 13.3334L10.6667 11.6567L10.1622 12.1612C10.162 12.1614 10.1623 12.161 10.1622 12.1612C10.162 12.1614 10.1614 12.162 10.1612 12.1622L9.16169 13.1617C8.88832 13.4351 8.44511 13.4351 8.17174 13.1617C7.89837 12.8883 7.89837 12.4451 8.17174 12.1717L8.67677 11.6667L1.50507 4.49502C1.3738 4.36375 1.30005 4.1857 1.30005 4.00005V2.00005ZM9.66672 10.6768L10.6768 9.66672L3.7101 2.70005H2.70005V3.7101L9.66672 10.6768Z"
      fill="currentColor"
    />
  </svg>
);
export default SwordIcon;
