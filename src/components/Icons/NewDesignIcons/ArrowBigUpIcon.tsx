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

const ArrowBigUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99999 2.63333C8.18564 2.63333 8.36369 2.70708 8.49496 2.83836L13.1616 7.50502C13.3618 7.70522 13.4217 8.0063 13.3134 8.26788C13.205 8.52945 12.9498 8.7 12.6667 8.7H10.7V12C10.7 12.3866 10.3866 12.7 9.99999 12.7H5.99999C5.61339 12.7 5.29999 12.3866 5.29999 12V8.7H3.33332C3.0502 8.7 2.79495 8.52945 2.68661 8.26788C2.57826 8.0063 2.63815 7.70522 2.83835 7.50502L7.50501 2.83836C7.63629 2.70708 7.81434 2.63333 7.99999 2.63333ZM5.02327 7.3H5.99999C6.38659 7.3 6.69999 7.6134 6.69999 8V11.3H9.29999V8C9.29999 7.6134 9.61339 7.3 9.99999 7.3H10.9767L7.99999 4.32328L5.02327 7.3Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowBigUpIcon;
