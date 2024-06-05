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

const PresentationIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.633331 2.00005C0.633331 1.61345 0.946732 1.30005 1.33333 1.30005H14.6667C15.0533 1.30005 15.3667 1.61345 15.3667 2.00005C15.3667 2.37547 15.0711 2.68187 14.7 2.69927V9.33338C14.7 9.87266 14.4858 10.3898 14.1044 10.7712C13.7231 11.1525 13.2059 11.3667 12.6667 11.3667H9.68995L11.8283 13.5051C12.1017 13.7784 12.1017 14.2217 11.8283 14.495C11.5549 14.7684 11.1117 14.7684 10.8384 14.495L8 11.6567L5.16164 14.495C4.88827 14.7684 4.44506 14.7684 4.17169 14.495C3.89832 14.2217 3.89832 13.7784 4.17169 13.5051L6.31005 11.3667H3.33333C2.79406 11.3667 2.27687 11.1525 1.89555 10.7712C1.51422 10.3898 1.3 9.87266 1.3 9.33338V2.69927C0.928877 2.68187 0.633331 2.37547 0.633331 2.00005ZM2.7 2.70005V9.33338C2.7 9.50135 2.76672 9.66244 2.8855 9.78122C3.00427 9.89999 3.16536 9.96672 3.33333 9.96672H12.6667C12.8346 9.96672 12.9957 9.89999 13.1145 9.78122C13.2333 9.66244 13.3 9.50135 13.3 9.33338V2.70005H2.7Z"
      fill="currentColor"
    />
  </svg>
);
export default PresentationIcon;
