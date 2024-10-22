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

const FrameIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 0.633362C4.3866 0.633362 4.7 0.946762 4.7 1.33336V3.30003H11.3V1.33336C11.3 0.946762 11.6134 0.633362 12 0.633362C12.3866 0.633362 12.7 0.946762 12.7 1.33336V3.30003H14.6667C15.0533 3.30003 15.3667 3.61343 15.3667 4.00003C15.3667 4.38663 15.0533 4.70003 14.6667 4.70003H12.7V11.3H14.6667C15.0533 11.3 15.3667 11.6134 15.3667 12C15.3667 12.3866 15.0533 12.7 14.6667 12.7H12.7V14.6667C12.7 15.0533 12.3866 15.3667 12 15.3667C11.6134 15.3667 11.3 15.0533 11.3 14.6667V12.7H4.7V14.6667C4.7 15.0533 4.3866 15.3667 4 15.3667C3.6134 15.3667 3.3 15.0533 3.3 14.6667V12.7H1.33333C0.946732 12.7 0.633331 12.3866 0.633331 12C0.633331 11.6134 0.946732 11.3 1.33333 11.3H3.3V4.70003H1.33333C0.946732 4.70003 0.633331 4.38663 0.633331 4.00003C0.633331 3.61343 0.946732 3.30003 1.33333 3.30003H3.3V1.33336C3.3 0.946762 3.6134 0.633362 4 0.633362ZM4.7 4.70003V11.3H11.3V4.70003H4.7Z"
      fill="currentColor"
    />
  </svg>
);
export default FrameIcon;
