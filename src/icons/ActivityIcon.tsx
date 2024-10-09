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

const ActivityIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 1.29999C6.3013 1.29999 6.5688 1.49279 6.66408 1.77863L10 11.7864L11.3359 7.77863C11.4312 7.49279 11.6987 7.29999 12 7.29999H14.6667C15.0533 7.29999 15.3667 7.61339 15.3667 7.99999C15.3667 8.38659 15.0533 8.69999 14.6667 8.69999H12.5045L10.6641 14.2213C10.5688 14.5072 10.3013 14.7 10 14.7C9.6987 14.7 9.4312 14.5072 9.33592 14.2213L6 4.21358L4.66408 8.22135C4.5688 8.50719 4.3013 8.69999 4 8.69999H1.33333C0.946732 8.69999 0.633331 8.38659 0.633331 7.99999C0.633331 7.61339 0.946732 7.29999 1.33333 7.29999H3.49547L5.33592 1.77863C5.4312 1.49279 5.6987 1.29999 6 1.29999Z"
      fill="currentColor"
    />
  </svg>
);
export default ActivityIcon;
