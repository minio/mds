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

const JapaneseYenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.52526 1.48563C3.80933 1.22341 4.25219 1.24112 4.51441 1.5252L8.00005 5.3013L11.4857 1.5252C11.7479 1.24112 12.1908 1.22341 12.4748 1.48563C12.7589 1.74785 12.7766 2.19071 12.5144 2.47479L8.70005 6.60701V6.63333H12.0001C12.3867 6.63333 12.7001 6.94673 12.7001 7.33332C12.7001 7.71992 12.3867 8.03332 12.0001 8.03332H8.70005V9.29999H12.0001C12.3867 9.29999 12.7001 9.61339 12.7001 9.99999C12.7001 10.3866 12.3867 10.7 12.0001 10.7H8.70005V14C8.70005 14.3866 8.38665 14.7 8.00005 14.7C7.61345 14.7 7.30005 14.3866 7.30005 14V10.7H4.00005C3.61345 10.7 3.30005 10.3866 3.30005 9.99999C3.30005 9.61339 3.61345 9.29999 4.00005 9.29999H7.30005V8.03332H4.00005C3.61345 8.03332 3.30005 7.71992 3.30005 7.33332C3.30005 6.94673 3.61345 6.63333 4.00005 6.63333H7.30005V6.60701L3.48569 2.47479C3.22347 2.19071 3.24118 1.74785 3.52526 1.48563Z"
      fill="currentColor"
    />
  </svg>
);
export default JapaneseYenIcon;
