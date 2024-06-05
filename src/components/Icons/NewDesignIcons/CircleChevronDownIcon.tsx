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

const CircleChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2.03333C4.7047 2.03333 2.03334 4.7047 2.03334 8C2.03334 11.2953 4.7047 13.9667 8 13.9667C11.2953 13.9667 13.9667 11.2953 13.9667 8C13.9667 4.7047 11.2953 2.03333 8 2.03333ZM0.633335 8C0.633335 3.9315 3.9315 0.633331 8 0.633331C12.0685 0.633331 15.3667 3.9315 15.3667 8C15.3667 12.0685 12.0685 15.3667 8 15.3667C3.9315 15.3667 0.633335 12.0685 0.633335 8ZM4.83836 6.17169C5.11173 5.89832 5.55494 5.89832 5.82831 6.17169L8 8.34338L10.1717 6.17169C10.4451 5.89832 10.8883 5.89832 11.1616 6.17169C11.435 6.44506 11.435 6.88827 11.1616 7.16164L8.49498 9.82831C8.22161 10.1017 7.77839 10.1017 7.50503 9.82831L4.83836 7.16164C4.56499 6.88827 4.56499 6.44506 4.83836 6.17169Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleChevronDownIcon;
