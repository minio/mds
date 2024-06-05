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

const EclipseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.50222 2.22289C3.93187 2.88739 2.03336 5.22198 2.03336 8C2.03336 11.2953 4.70473 13.9667 8.00003 13.9667C10.778 13.9667 13.1126 12.0682 13.7771 9.49781C13.0264 9.87751 12.1904 10.0807 11.3334 10.0807C9.89747 10.0807 8.52038 9.5103 7.50505 8.49497C6.48972 7.47964 5.91932 6.10256 5.91932 4.66666C5.91932 3.80965 6.12251 2.97359 6.50222 2.22289ZM8.29749 2.04062C7.66866 2.76753 7.31932 3.69909 7.31932 4.66666C7.31932 5.73126 7.74222 6.75224 8.495 7.50502C9.24778 8.2578 10.2688 8.68071 11.3334 8.68071C12.3009 8.68071 13.2325 8.33136 13.9594 7.70253C13.8092 4.64397 11.3561 2.19078 8.29749 2.04062ZM0.633362 8C0.633362 3.9315 3.93153 0.633331 8.00003 0.633331C12.0685 0.633331 15.3667 3.9315 15.3667 8C15.3667 12.0685 12.0685 15.3667 8.00003 15.3667C3.93153 15.3667 0.633362 12.0685 0.633362 8Z"
      fill="currentColor"
    />
  </svg>
);
export default EclipseIcon;
