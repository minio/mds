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

const ConciergeBellIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.96669 2.66666C5.96669 2.28006 6.2801 1.96666 6.66669 1.96666H9.33336C9.71996 1.96666 10.0334 2.28006 10.0334 2.66666C10.0334 3.05326 9.71996 3.36666 9.33336 3.36666H8.70003V4.67405C10.0424 4.83082 11.301 5.43522 12.2662 6.40045C13.2588 7.39297 13.8698 8.69569 14.0049 10.0807C14.2905 10.1807 14.5531 10.3441 14.7711 10.5622C15.1525 10.9435 15.3667 11.4607 15.3667 12V12.6667C15.3667 13.0291 15.2227 13.3767 14.9664 13.633C14.7101 13.8893 14.3625 14.0333 14 14.0333H2.00003C1.63757 14.0333 1.28995 13.8893 1.03365 13.633C0.777349 13.3767 0.633362 13.0291 0.633362 12.6667V12C0.633362 11.4607 0.847587 10.9435 1.22891 10.5622C1.447 10.3441 1.70952 10.1807 1.99519 10.0807C2.13029 8.69569 2.7413 7.39297 3.73382 6.40045C4.69904 5.43522 5.95764 4.83082 7.30003 4.67405V3.36666H6.66669C6.2801 3.36666 5.96669 3.05326 5.96669 2.66666ZM3.41986 9.96666H12.5802C12.432 8.99694 11.9785 8.09258 11.2763 7.3904C10.4074 6.52148 9.22886 6.03333 8.00003 6.03333C6.77119 6.03333 5.59269 6.52148 4.72377 7.3904C4.02158 8.09258 3.56806 8.99694 3.41986 9.96666ZM2.6667 11.3667C2.49873 11.3667 2.33763 11.4334 2.21886 11.5522C2.10009 11.6709 2.03336 11.832 2.03336 12V12.6333H13.9667V12C13.9667 11.832 13.9 11.6709 13.7812 11.5522C13.6624 11.4334 13.5013 11.3667 13.3334 11.3667H2.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default ConciergeBellIcon;
