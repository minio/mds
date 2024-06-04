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

const SyringeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.505 0.838326C11.7784 0.564959 12.2216 0.564959 12.4949 0.838326L15.1616 3.50499C15.435 3.77836 15.435 4.22158 15.1616 4.49494C14.8882 4.76831 14.445 4.76831 14.1717 4.49494L13.3333 3.65658L12.3232 4.66663L13.8283 6.17166C14.1016 6.44503 14.1016 6.88824 13.8283 7.16161C13.5549 7.43498 13.1117 7.43498 12.8383 7.16161L12.6666 6.98992L9.16223 10.4943C9.16202 10.4945 9.16243 10.4941 9.16223 10.4943C9.16202 10.4945 9.1612 10.4954 9.16099 10.4956L6.29494 13.3616C5.47865 14.1779 4.2411 14.3044 3.34863 13.6413L1.82828 15.1616C1.55491 15.435 1.11169 15.435 0.838326 15.1616C0.564959 14.8882 0.564959 14.445 0.838326 14.1717L2.36806 12.6419C1.72086 11.7299 1.78123 10.4885 2.65022 9.6931L5.50476 6.83856L9.01002 3.3333L8.83833 3.16161C8.56496 2.88824 8.56496 2.44503 8.83833 2.17166C9.11169 1.89829 9.55491 1.89829 9.82827 2.17166L10.4945 2.83791C10.4944 2.83777 10.4947 2.83805 10.4945 2.83791C10.4947 2.83805 10.4952 2.8386 10.4954 2.83874L11.3333 3.67668L12.3434 2.66663L11.505 1.82828C11.2316 1.55491 11.2316 1.11169 11.505 0.838326ZM10.8382 5.16144L9.99997 4.32325L6.98992 7.3333L8.66663 9.01002L11.6767 5.99997L10.8382 5.16144ZM7.67668 9.99997L5.99997 8.32325L3.62828 10.6949C3.6196 10.7036 3.6107 10.7121 3.60158 10.7203C3.25918 11.0284 3.21967 11.5631 3.62828 11.9717L3.82785 12.1712C3.82771 12.1711 3.82799 12.1714 3.82785 12.1712C3.82799 12.1714 3.82856 12.1719 3.8287 12.1721L4.02827 12.3717C4.03695 12.3803 4.0454 12.3892 4.05361 12.3984C4.36177 12.7408 4.89639 12.7803 5.30499 12.3717L7.67668 9.99997Z"
      fill="currentColor"
    />
  </svg>
);
export default SyringeIcon;
