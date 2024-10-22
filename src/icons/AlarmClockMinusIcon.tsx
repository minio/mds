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

const AlarmClockMinusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.82831 1.50501C4.10167 1.77838 4.10167 2.2216 3.82831 2.49496L1.82831 4.49496C1.55494 4.76833 1.11172 4.76833 0.838357 4.49496C0.56499 4.2216 0.56499 3.77838 0.838357 3.50501L2.83836 1.50501C3.11172 1.23165 3.55494 1.23165 3.82831 1.50501ZM12.1717 1.50501C12.4451 1.23165 12.8883 1.23165 13.1616 1.50501L15.1616 3.50501C15.435 3.77838 15.435 4.2216 15.1616 4.49496C14.8883 4.76833 14.4451 4.76833 14.1717 4.49496L12.1717 2.49496C11.8983 2.2216 11.8983 1.77838 12.1717 1.50501ZM8 4.03332C5.44108 4.03332 3.36666 6.10773 3.36666 8.66665C3.36666 11.2256 5.44108 13.3 8 13.3C9.25844 13.3 10.3997 12.7983 11.2347 11.984C11.2434 11.9741 11.2525 11.9644 11.2619 11.9549C11.2743 11.9423 11.2871 11.9302 11.3002 11.9188C12.1246 11.0823 12.6333 9.93389 12.6333 8.66665C12.6333 6.10773 10.5589 4.03332 8 4.03332ZM12.7264 12.4171C13.5446 11.3873 14.0333 10.0841 14.0333 8.66665C14.0333 5.33454 11.3321 2.63332 8 2.63332C4.66788 2.63332 1.96666 5.33454 1.96666 8.66665C1.96666 10.09 2.45955 11.3982 3.28395 12.43L2.18022 13.4966C1.90222 13.7653 1.89465 14.2084 2.1633 14.4864C2.43196 14.7644 2.87511 14.772 3.15311 14.5034L4.27847 13.4158C5.30365 14.2203 6.5958 14.7 8 14.7C9.41024 14.7 10.7075 14.2161 11.7347 13.4054L12.8415 14.4981C13.1166 14.7697 13.5598 14.7669 13.8315 14.4918C14.1031 14.2167 14.1002 13.7735 13.8251 13.5019L12.7264 12.4171ZM5.3 8.66665C5.3 8.28006 5.6134 7.96665 6 7.96665H10C10.3866 7.96665 10.7 8.28006 10.7 8.66665C10.7 9.05325 10.3866 9.36665 10 9.36665H6C5.6134 9.36665 5.3 9.05325 5.3 8.66665Z"
      fill="currentColor"
    />
  </svg>
);
export default AlarmClockMinusIcon;
