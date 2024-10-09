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

const CrosshairIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.07396 7.3H4C4.3866 7.3 4.7 7.6134 4.7 8C4.7 8.3866 4.3866 8.7 4 8.7H2.07396C2.39367 11.4358 4.56416 13.6063 7.3 13.926V12C7.3 11.6134 7.6134 11.3 8 11.3C8.3866 11.3 8.7 11.6134 8.7 12V13.926C11.4358 13.6063 13.6063 11.4358 13.926 8.7H12C11.6134 8.7 11.3 8.3866 11.3 8C11.3 7.6134 11.6134 7.3 12 7.3H13.926C13.6063 4.56416 11.4358 2.39367 8.7 2.07396V4C8.7 4.3866 8.3866 4.7 8 4.7C7.6134 4.7 7.3 4.3866 7.3 4V2.07396C4.56416 2.39366 2.39366 4.56416 2.07396 7.3ZM0.633331 8C0.633331 3.9315 3.9315 0.633331 8 0.633331C12.0685 0.633331 15.3667 3.9315 15.3667 8C15.3667 12.0685 12.0685 15.3667 8 15.3667C3.9315 15.3667 0.633331 12.0685 0.633331 8Z"
      fill="currentColor"
    />
  </svg>
);
export default CrosshairIcon;
