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

const TriangleRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.9667 3.47041L2.64033 12.6333H13.3334C13.5013 12.6333 13.6624 12.5666 13.7812 12.4478C13.9 12.3291 13.9667 12.168 13.9667 12V3.47041ZM14.6375 2.00805C15.2172 2.26009 15.3667 2.86872 15.3667 3.33333V12C15.3667 12.5393 15.1525 13.0565 14.7712 13.4378C14.3898 13.8191 13.8727 14.0333 13.3334 14.0333H2.00004C1.76268 14.0333 1.51509 14.0023 1.2927 13.9086C1.06715 13.8135 0.805684 13.623 0.699203 13.2858C0.594332 12.9537 0.694366 12.6507 0.814814 12.4451C0.93441 12.241 1.10897 12.0663 1.29798 11.9185L13.1702 2.31401C13.5342 2.03089 14.0853 1.76798 14.6375 2.00805Z"
      fill="currentColor"
    />
  </svg>
);
export default TriangleRightIcon;
