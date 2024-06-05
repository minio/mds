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

const CpuIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.99997 0.633331C6.38657 0.633331 6.69997 0.946732 6.69997 1.33333V1.96666H9.29997V1.33333C9.29997 0.946732 9.61337 0.633331 9.99997 0.633331C10.3866 0.633331 10.7 0.946732 10.7 1.33333V1.96666H12C13.1229 1.96666 14.0333 2.87702 14.0333 4V5.3H14.6666C15.0532 5.3 15.3666 5.6134 15.3666 6C15.3666 6.3866 15.0532 6.7 14.6666 6.7H14.0333V9.3H14.6666C15.0532 9.3 15.3666 9.6134 15.3666 10C15.3666 10.3866 15.0532 10.7 14.6666 10.7H14.0333V12C14.0333 13.123 13.1229 14.0333 12 14.0333H10.7V14.6667C10.7 15.0533 10.3866 15.3667 9.99997 15.3667C9.61337 15.3667 9.29997 15.0533 9.29997 14.6667V14.0333H6.69997V14.6667C6.69997 15.0533 6.38657 15.3667 5.99997 15.3667C5.61337 15.3667 5.29997 15.0533 5.29997 14.6667V14.0333H3.99997C2.87699 14.0333 1.96663 13.123 1.96663 12V10.7H1.3333C0.946701 10.7 0.633301 10.3866 0.633301 10C0.633301 9.6134 0.946701 9.3 1.3333 9.3H1.96663V6.7H1.3333C0.946701 6.7 0.633301 6.3866 0.633301 6C0.633301 5.6134 0.946701 5.3 1.3333 5.3H1.96663V4C1.96663 2.87702 2.87699 1.96666 3.99997 1.96666H5.29997V1.33333C5.29997 0.946732 5.61337 0.633331 5.99997 0.633331ZM3.99997 3.36666C3.65019 3.36666 3.36663 3.65022 3.36663 4V12C3.36663 12.3498 3.65019 12.6333 3.99997 12.6333H12C12.3497 12.6333 12.6333 12.3498 12.6333 12V4C12.6333 3.65022 12.3497 3.36666 12 3.36666H3.99997ZM6.69997 6.7V9.3H9.29997V6.7H6.69997ZM5.29997 6.66666C5.29997 5.91187 5.91184 5.3 6.66663 5.3H9.3333C10.0881 5.3 10.7 5.91187 10.7 6.66666V9.33333C10.7 10.0881 10.0881 10.7 9.3333 10.7H6.66663C5.91184 10.7 5.29997 10.0881 5.29997 9.33333V6.66666Z"
      fill="currentColor"
    />
  </svg>
);
export default CpuIcon;
