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

const RedoDotIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 3.96667C14.3866 3.96667 14.7 4.28008 14.7 4.66667V8.66667C14.7 9.05327 14.3866 9.36667 14 9.36667H10C9.6134 9.36667 9.3 9.05327 9.3 8.66667C9.3 8.28008 9.6134 7.96667 10 7.96667H12.1758L11.5326 7.38779C11.5325 7.38767 11.5324 7.38755 11.5322 7.38742C10.5614 6.51686 9.30365 6.03476 7.99964 6.03334C6.59412 6.03344 5.24619 6.59182 4.25233 7.58568C3.25839 8.57962 2.7 9.92769 2.7 11.3333C2.7 11.7199 2.3866 12.0333 2 12.0333C1.6134 12.0333 1.3 11.7199 1.3 11.3333C1.3 9.55639 2.00589 7.85222 3.26238 6.59573C4.51888 5.33923 6.22305 4.63334 8 4.63334H8.00071C9.64957 4.63502 11.2399 5.24465 12.4674 6.34556L12.4683 6.34637L13.3 7.09492V4.66667C13.3 4.28008 13.6134 3.96667 14 3.96667ZM8 11.3667C8.01841 11.3667 8.03333 11.3518 8.03333 11.3333C8.03333 11.3149 8.01841 11.3 8 11.3C7.98159 11.3 7.96667 11.3149 7.96667 11.3333C7.96667 11.3518 7.98159 11.3667 8 11.3667ZM6.63333 11.3333C6.63333 10.5786 7.24521 9.96667 8 9.96667C8.75479 9.96667 9.36667 10.5786 9.36667 11.3333C9.36667 12.0881 8.75479 12.7 8 12.7C7.24521 12.7 6.63333 12.0881 6.63333 11.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default RedoDotIcon;
