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

const VideoIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66667 4.70005C2.31689 4.70005 2.03333 4.9836 2.03333 5.33338V10.6667C2.03333 11.0165 2.31689 11.3 2.66667 11.3H9.33333C9.68311 11.3 9.96667 11.0165 9.96667 10.6667V5.33338C9.96667 4.9836 9.68311 4.70005 9.33333 4.70005H2.66667ZM11.3667 6.69209V5.33338C11.3667 4.2104 10.4563 3.30005 9.33333 3.30005H2.66667C1.54369 3.30005 0.633333 4.2104 0.633333 5.33338V10.6667C0.633333 11.7897 1.54369 12.7 2.66667 12.7H9.33333C10.4563 12.7 11.3667 11.7897 11.3667 10.6667V9.30801L14.2784 11.2492C14.4932 11.3924 14.7694 11.4057 14.997 11.2839C15.2246 11.1621 15.3667 10.9249 15.3667 10.6667V5.33338C15.3667 5.07523 15.2246 4.83802 14.997 4.71621C14.7694 4.5944 14.4932 4.60775 14.2784 4.75095L11.3667 6.69209ZM11.9286 8.00005L13.9667 9.35875V6.64134L11.9286 8.00005Z"
      fill="currentColor"
    />
  </svg>
);
export default VideoIcon;
