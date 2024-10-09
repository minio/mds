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

const Unlink2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.6667 5.36667C3.96829 5.36667 3.29849 5.64411 2.80465 6.13796C2.3108 6.63181 2.03336 7.3016 2.03336 8.00001C2.03336 8.69841 2.3108 9.36821 2.80465 9.86206C3.29849 10.3559 3.96829 10.6333 4.66669 10.6333H6.00003C6.38663 10.6333 6.70003 10.9467 6.70003 11.3333C6.70003 11.7199 6.38663 12.0333 6.00003 12.0333H4.6667C3.59699 12.0333 2.57109 11.6084 1.8147 10.852C1.0583 10.0956 0.633362 9.06971 0.633362 8.00001C0.633362 6.9303 1.0583 5.90441 1.8147 5.14801C2.57109 4.39161 3.59699 3.96667 4.66669 3.96667H6.00003C6.38663 3.96667 6.70003 4.28008 6.70003 4.66667C6.70003 5.05327 6.38663 5.36667 6.00003 5.36667H4.6667ZM9.30003 4.66667C9.30003 4.28008 9.61343 3.96667 10 3.96667H11.3334C12.4031 3.96667 13.429 4.39161 14.1854 5.14801C14.9418 5.90441 15.3667 6.9303 15.3667 8.00001C15.3667 9.06971 14.9418 10.0956 14.1854 10.852C13.429 11.6084 12.4031 12.0333 11.3334 12.0333H10C9.61343 12.0333 9.30003 11.7199 9.30003 11.3333C9.30003 10.9467 9.61343 10.6333 10 10.6333H11.3334C12.0318 10.6333 12.7016 10.3559 13.1954 9.86206C13.6893 9.36821 13.9667 8.69841 13.9667 8.00001C13.9667 7.3016 13.6893 6.63181 13.1954 6.13796C12.7016 5.64411 12.0318 5.36667 11.3334 5.36667H10C9.61343 5.36667 9.30003 5.05327 9.30003 4.66667Z"
      fill="currentColor"
    />
  </svg>
);
export default Unlink2Icon;
