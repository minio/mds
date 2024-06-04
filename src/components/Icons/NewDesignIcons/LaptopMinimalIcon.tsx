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

const LaptopMinimalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33336 3.36667C2.98358 3.36667 2.70003 3.65023 2.70003 4.00001V9.33334C2.70003 9.68312 2.98358 9.96667 3.33336 9.96667H12.6667C13.0165 9.96667 13.3 9.68312 13.3 9.33334V4.00001C13.3 3.65023 13.0165 3.36667 12.6667 3.36667H3.33336ZM1.30003 4.00001C1.30003 2.87703 2.21038 1.96667 3.33336 1.96667H12.6667C13.7897 1.96667 14.7 2.87703 14.7 4.00001V9.33334C14.7 10.4563 13.7897 11.3667 12.6667 11.3667H3.33336C2.21038 11.3667 1.30003 10.4563 1.30003 9.33334V4.00001ZM0.633362 13.3333C0.633362 12.9467 0.946762 12.6333 1.33336 12.6333H14.6667C15.0533 12.6333 15.3667 12.9467 15.3667 13.3333C15.3667 13.7199 15.0533 14.0333 14.6667 14.0333H1.33336C0.946762 14.0333 0.633362 13.7199 0.633362 13.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default LaptopMinimalIcon;
