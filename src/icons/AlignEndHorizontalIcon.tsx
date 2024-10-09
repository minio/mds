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

const AlignEndHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.99997 2.03333C3.65019 2.03333 3.36663 2.31688 3.36663 2.66666V10.6667C3.36663 11.0164 3.65019 11.3 3.99997 11.3H5.3333C5.68308 11.3 5.96663 11.0164 5.96663 10.6667V2.66666C5.96663 2.31688 5.68308 2.03333 5.3333 2.03333H3.99997ZM1.96663 2.66666C1.96663 1.54369 2.87699 0.633331 3.99997 0.633331H5.3333C6.45628 0.633331 7.36663 1.54369 7.36663 2.66666V10.6667C7.36663 11.7896 6.45628 12.7 5.3333 12.7H3.99997C2.87699 12.7 1.96663 11.7896 1.96663 10.6667V2.66666ZM10.6666 6.7C10.3169 6.7 10.0333 6.98355 10.0333 7.33333V10.6667C10.0333 11.0164 10.3169 11.3 10.6666 11.3H12C12.3497 11.3 12.6333 11.0164 12.6333 10.6667V7.33333C12.6333 6.98355 12.3497 6.7 12 6.7H10.6666ZM8.6333 7.33333C8.6333 6.21035 9.54365 5.3 10.6666 5.3H12C13.1229 5.3 14.0333 6.21035 14.0333 7.33333V10.6667C14.0333 11.7896 13.1229 12.7 12 12.7H10.6666C9.54365 12.7 8.6333 11.7896 8.6333 10.6667V7.33333ZM0.633301 14.6667C0.633301 14.2801 0.946701 13.9667 1.3333 13.9667H14.6666C15.0532 13.9667 15.3666 14.2801 15.3666 14.6667C15.3666 15.0533 15.0532 15.3667 14.6666 15.3667H1.3333C0.946701 15.3667 0.633301 15.0533 0.633301 14.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default AlignEndHorizontalIcon;
