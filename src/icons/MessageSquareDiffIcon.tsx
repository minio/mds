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

const MessageSquareDiffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.69999C3.16541 2.69999 3.00432 2.76671 2.88555 2.88549C2.76677 3.00426 2.70005 3.16535 2.70005 3.33332V12.31L2.83841 12.1717C3.11177 11.8983 3.55499 11.8983 3.82836 12.1717C4.10172 12.445 4.10172 12.8883 3.82836 13.1616L2.49502 14.495C2.29482 14.6952 1.99374 14.7551 1.73217 14.6467C1.4706 14.5384 1.30005 14.2831 1.30005 14V3.33332C1.30005 2.79405 1.51427 2.27686 1.8956 1.89554C2.27692 1.51421 2.79411 1.29999 3.33338 1.29999H12.6667C13.206 1.29999 13.7232 1.51421 14.1045 1.89554C14.4858 2.27686 14.7 2.79405 14.7 3.33332V9.99999C14.7 10.5393 14.4858 11.0564 14.1045 11.4378C13.7232 11.8191 13.206 12.0333 12.6667 12.0333C12.2801 12.0333 11.9667 11.7199 11.9667 11.3333C11.9667 10.9467 12.2801 10.6333 12.6667 10.6333C12.8347 10.6333 12.9958 10.5666 13.1145 10.4478C13.2333 10.329 13.3 10.168 13.3 9.99999V3.33332C13.3 3.16535 13.2333 3.00426 13.1145 2.88549C12.9958 2.76671 12.8347 2.69999 12.6667 2.69999H3.33338ZM8.00005 3.96665C8.38665 3.96665 8.70005 4.28006 8.70005 4.66665V5.96665H10C10.3866 5.96665 10.7 6.28006 10.7 6.66665C10.7 7.05325 10.3866 7.36665 10 7.36665H8.70005V8.66665C8.70005 9.05325 8.38665 9.36665 8.00005 9.36665C7.61345 9.36665 7.30005 9.05325 7.30005 8.66665V7.36665H6.00005C5.61345 7.36665 5.30005 7.05325 5.30005 6.66665C5.30005 6.28006 5.61345 5.96665 6.00005 5.96665H7.30005V4.66665C7.30005 4.28006 7.61345 3.96665 8.00005 3.96665ZM5.30005 11.3333C5.30005 10.9467 5.61345 10.6333 6.00005 10.6333H10C10.3866 10.6333 10.7 10.9467 10.7 11.3333C10.7 11.7199 10.3866 12.0333 10 12.0333H6.00005C5.61345 12.0333 5.30005 11.7199 5.30005 11.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default MessageSquareDiffIcon;
