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

const GlobeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.07396 7.30003H4.65698C4.77918 5.49352 5.37215 3.75664 6.36792 2.25932C4.08307 2.90764 2.35638 4.88325 2.07396 7.30003ZM8 2.39633C6.87712 3.79891 6.20097 5.50777 6.06068 7.30003H9.93932C9.79903 5.50777 9.12287 3.79891 8 2.39633ZM9.93932 8.70003H6.06068C6.20097 10.4923 6.87712 12.2011 8 13.6037C9.12287 12.2011 9.79903 10.4923 9.93932 8.70003ZM6.36792 13.7407C5.37215 12.2434 4.77918 10.5065 4.65698 8.70003H2.07396C2.35638 11.1168 4.08307 13.0924 6.36792 13.7407ZM9.63208 13.7407C10.6278 12.2434 11.2208 10.5065 11.343 8.70003H13.926C13.6436 11.1168 11.9169 13.0924 9.63208 13.7407ZM13.926 7.30003H11.343C11.2208 5.49352 10.6278 3.75664 9.63208 2.25932C11.9169 2.90764 13.6436 4.88325 13.926 7.30003ZM0.633333 8.00003C0.633333 3.93153 3.9315 0.633362 8 0.633362C12.0685 0.633362 15.3667 3.93153 15.3667 8.00003C15.3667 12.0685 12.0685 15.3667 8 15.3667C3.9315 15.3667 0.633333 12.0685 0.633333 8.00003Z"
      fill="currentColor"
    />
  </svg>
);
export default GlobeIcon;
