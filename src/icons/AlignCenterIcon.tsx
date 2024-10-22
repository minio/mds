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

const AlignCenterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.29999 3.99999C1.29999 3.61339 1.61339 3.29999 1.99999 3.29999H14C14.3866 3.29999 14.7 3.61339 14.7 3.99999C14.7 4.38659 14.3866 4.69999 14 4.69999H1.99999C1.61339 4.69999 1.29999 4.38659 1.29999 3.99999ZM3.96665 7.99999C3.96665 7.61339 4.28006 7.29999 4.66665 7.29999H11.3333C11.7199 7.29999 12.0333 7.61339 12.0333 7.99999C12.0333 8.38659 11.7199 8.69999 11.3333 8.69999H4.66665C4.28006 8.69999 3.96665 8.38659 3.96665 7.99999ZM2.63332 12C2.63332 11.6134 2.94672 11.3 3.33332 11.3H12.6667C13.0533 11.3 13.3667 11.6134 13.3667 12C13.3667 12.3866 13.0533 12.7 12.6667 12.7H3.33332C2.94672 12.7 2.63332 12.3866 2.63332 12Z"
      fill="currentColor"
    />
  </svg>
);
export default AlignCenterIcon;
