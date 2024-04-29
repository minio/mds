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

const PenLineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M8 13.3333H14M11 2.33334C11.2652 2.06813 11.6249 1.91913 12 1.91913C12.1857 1.91913 12.3696 1.95571 12.5412 2.02678C12.7128 2.09785 12.8687 2.20202 13 2.33334C13.1313 2.46466 13.2355 2.62057 13.3066 2.79215C13.3776 2.96373 13.4142 3.14762 13.4142 3.33334C13.4142 3.51906 13.3776 3.70296 13.3066 3.87454C13.2355 4.04612 13.1313 4.20202 13 4.33334L4.66667 12.6667L2 13.3333L2.66667 10.6667L11 2.33334Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PenLineIcon;
