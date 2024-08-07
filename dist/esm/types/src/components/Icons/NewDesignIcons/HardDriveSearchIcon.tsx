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

const HardDriveSearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M2.66663 6.0333C2.31685 6.0333 2.0333 6.31685 2.0333 6.66663V9.3333C2.0333 9.68308 2.31685 9.96663 2.66663 9.96663H5.99997C6.38657 9.96663 6.69997 10.28 6.69997 10.6666C6.69997 11.0532 6.38657 11.3666 5.99997 11.3666H2.66663C1.54366 11.3666 0.633301 10.4563 0.633301 9.3333V6.66663C0.633301 5.54366 1.54366 4.6333 2.66663 4.6333H13.3333C14.4563 4.6333 15.3666 5.54366 15.3666 6.66663V9.3333C15.3666 9.7199 15.0532 10.0333 14.6666 10.0333C14.28 10.0333 13.9666 9.7199 13.9666 9.3333V6.66663C13.9666 6.31685 13.6831 6.0333 13.3333 6.0333H2.66663Z"
      fill="currentColor"
    />
    <path
      d="M3.29996 8.00005C3.29996 7.61345 3.61336 7.30005 3.99996 7.30005H4.00662C4.39322 7.30005 4.70662 7.61345 4.70662 8.00005C4.70662 8.38665 4.39322 8.70005 4.00662 8.70005H3.99996C3.61336 8.70005 3.29996 8.38665 3.29996 8.00005Z"
      fill="currentColor"
    />
    <path
      d="M6.66664 7.30005C6.28005 7.30005 5.96664 7.61345 5.96664 8.00005C5.96664 8.38665 6.28005 8.70005 6.66664 8.70005H6.67331C7.05991 8.70005 7.37331 8.38665 7.37331 8.00005C7.37331 7.61345 7.05991 7.30005 6.67331 7.30005H6.66664Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.0059 11.3492C13.2353 10.9523 13.3666 10.4915 13.3666 10C13.3666 8.50888 12.1578 7.30005 10.6666 7.30005C9.17548 7.30005 7.96664 8.50888 7.96664 10C7.96664 11.4912 9.17548 12.7 10.6666 12.7C11.1582 12.7 11.619 12.5687 12.016 12.3392L12.8384 13.1616C13.1118 13.435 13.555 13.435 13.8283 13.1616C14.1017 12.8882 14.1017 12.445 13.8283 12.1716L13.0059 11.3492ZM10.6666 8.70005C9.94867 8.70005 9.36664 9.28208 9.36664 10C9.36664 10.718 9.94867 11.3 10.6666 11.3C10.9769 11.3 11.2617 11.1914 11.4852 11.0101C11.5101 10.973 11.5389 10.9378 11.5717 10.905C11.6045 10.8722 11.6397 10.8434 11.6767 10.8185C11.858 10.595 11.9666 10.3102 11.9666 10C11.9666 9.28208 11.3846 8.70005 10.6666 8.70005Z"
      fill="currentColor"
    />
  </svg>
);
export default HardDriveSearchIcon;
