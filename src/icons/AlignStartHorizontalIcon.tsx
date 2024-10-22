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

const AlignStartHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.633301 1.33333C0.633301 0.946732 0.946701 0.633331 1.3333 0.633331H14.6666C15.0532 0.633331 15.3666 0.946732 15.3666 1.33333C15.3666 1.71993 15.0532 2.03333 14.6666 2.03333H1.3333C0.946701 2.03333 0.633301 1.71993 0.633301 1.33333ZM3.99997 4.7C3.65019 4.7 3.36663 4.98355 3.36663 5.33333V13.3333C3.36663 13.6831 3.65019 13.9667 3.99997 13.9667H5.3333C5.68308 13.9667 5.96663 13.6831 5.96663 13.3333V5.33333C5.96663 4.98355 5.68308 4.7 5.3333 4.7H3.99997ZM1.96663 5.33333C1.96663 4.21035 2.87699 3.3 3.99997 3.3H5.3333C6.45628 3.3 7.36663 4.21035 7.36663 5.33333V13.3333C7.36663 14.4563 6.45628 15.3667 5.3333 15.3667H3.99997C2.87699 15.3667 1.96663 14.4563 1.96663 13.3333V5.33333ZM10.6666 4.7C10.3169 4.7 10.0333 4.98355 10.0333 5.33333V8.66666C10.0333 9.01644 10.3169 9.3 10.6666 9.3H12C12.3497 9.3 12.6333 9.01644 12.6333 8.66666V5.33333C12.6333 4.98355 12.3497 4.7 12 4.7H10.6666ZM8.6333 5.33333C8.6333 4.21035 9.54365 3.3 10.6666 3.3H12C13.1229 3.3 14.0333 4.21035 14.0333 5.33333V8.66666C14.0333 9.78964 13.1229 10.7 12 10.7H10.6666C9.54365 10.7 8.6333 9.78964 8.6333 8.66666V5.33333Z"
      fill="currentColor"
    />
  </svg>
);
export default AlignStartHorizontalIcon;
