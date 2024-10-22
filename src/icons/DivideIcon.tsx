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

const DivideIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 4.03333C8.01838 4.03333 8.0333 4.01841 8.0333 4C8.0333 3.98159 8.01838 3.96666 7.99997 3.96666C7.98156 3.96666 7.96663 3.98159 7.96663 4C7.96663 4.01841 7.98156 4.03333 7.99997 4.03333ZM6.6333 4C6.6333 3.24521 7.24518 2.63333 7.99997 2.63333C8.75476 2.63333 9.36663 3.24521 9.36663 4C9.36663 4.75479 8.75476 5.36666 7.99997 5.36666C7.24518 5.36666 6.6333 4.75479 6.6333 4ZM2.6333 8C2.6333 7.6134 2.9467 7.3 3.3333 7.3H12.6666C13.0532 7.3 13.3666 7.6134 13.3666 8C13.3666 8.3866 13.0532 8.7 12.6666 8.7H3.3333C2.9467 8.7 2.6333 8.3866 2.6333 8ZM7.99997 12.0333C8.01838 12.0333 8.0333 12.0184 8.0333 12C8.0333 11.9816 8.01838 11.9667 7.99997 11.9667C7.98156 11.9667 7.96663 11.9816 7.96663 12C7.96663 12.0184 7.98156 12.0333 7.99997 12.0333ZM6.6333 12C6.6333 11.2452 7.24518 10.6333 7.99997 10.6333C8.75476 10.6333 9.36663 11.2452 9.36663 12C9.36663 12.7548 8.75476 13.3667 7.99997 13.3667C7.24518 13.3667 6.6333 12.7548 6.6333 12Z"
      fill="currentColor"
    />
  </svg>
);
export default DivideIcon;
