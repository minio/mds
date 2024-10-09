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

const SlidersVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66666 1.30005C3.05326 1.30005 3.36666 1.61345 3.36666 2.00005V6.66672C3.36666 7.05331 3.05326 7.36672 2.66666 7.36672C2.28007 7.36672 1.96666 7.05331 1.96666 6.66672V2.00005C1.96666 1.61345 2.28007 1.30005 2.66666 1.30005ZM8 1.30005C8.3866 1.30005 8.7 1.61345 8.7 2.00005V4.63338H9.33333C9.71993 4.63338 10.0333 4.94678 10.0333 5.33338C10.0333 5.71998 9.71993 6.03338 9.33333 6.03338H6.66666C6.28006 6.03338 5.96666 5.71998 5.96666 5.33338C5.96666 4.94678 6.28006 4.63338 6.66666 4.63338H7.3V2.00005C7.3 1.61345 7.6134 1.30005 8 1.30005ZM13.3333 1.30005C13.7199 1.30005 14.0333 1.61345 14.0333 2.00005V8.00005C14.0333 8.38665 13.7199 8.70005 13.3333 8.70005C12.9467 8.70005 12.6333 8.38665 12.6333 8.00005V2.00005C12.6333 1.61345 12.9467 1.30005 13.3333 1.30005ZM8 7.30005C8.3866 7.30005 8.7 7.61345 8.7 8.00005V14C8.7 14.3866 8.3866 14.7 8 14.7C7.6134 14.7 7.3 14.3866 7.3 14V8.00005C7.3 7.61345 7.6134 7.30005 8 7.30005ZM0.633331 9.33338C0.633331 8.94678 0.946732 8.63338 1.33333 8.63338H4C4.3866 8.63338 4.7 8.94678 4.7 9.33338C4.7 9.71998 4.3866 10.0334 4 10.0334H3.36666V14C3.36666 14.3866 3.05326 14.7 2.66666 14.7C2.28007 14.7 1.96666 14.3866 1.96666 14V10.0334H1.33333C0.946732 10.0334 0.633331 9.71998 0.633331 9.33338ZM11.3 10.6667C11.3 10.2801 11.6134 9.96672 12 9.96672H14.6667C15.0533 9.96672 15.3667 10.2801 15.3667 10.6667C15.3667 11.0533 15.0533 11.3667 14.6667 11.3667H14.0333V14C14.0333 14.3866 13.7199 14.7 13.3333 14.7C12.9467 14.7 12.6333 14.3866 12.6333 14V11.3667H12C11.6134 11.3667 11.3 11.0533 11.3 10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default SlidersVerticalIcon;
