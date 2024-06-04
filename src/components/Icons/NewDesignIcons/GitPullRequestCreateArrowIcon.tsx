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

const GitPullRequestCreateArrowIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.3333 2.69999C2.61533 2.69999 2.0333 3.28202 2.0333 3.99999C2.0333 4.71796 2.61533 5.29999 3.3333 5.29999C4.05127 5.29999 4.6333 4.71796 4.6333 3.99999C4.6333 3.28202 4.05127 2.69999 3.3333 2.69999ZM0.633301 3.99999C0.633301 2.50882 1.84213 1.29999 3.3333 1.29999C4.82447 1.29999 6.0333 2.50882 6.0333 3.99999C6.0333 5.24906 5.18512 6.30003 4.0333 6.60836V14C4.0333 14.3866 3.7199 14.7 3.3333 14.7C2.9467 14.7 2.6333 14.3866 2.6333 14V6.60836C1.48148 6.30003 0.633301 5.24906 0.633301 3.99999ZM10.4949 1.50501C10.7683 1.77838 10.7683 2.2216 10.4949 2.49496L9.68992 3.29999H11.3333C11.8726 3.29999 12.3898 3.51421 12.7711 3.89554C13.1524 4.27686 13.3666 4.79405 13.3666 5.33332V7.33332C13.3666 7.71992 13.0532 8.03332 12.6666 8.03332C12.28 8.03332 11.9666 7.71992 11.9666 7.33332V5.33332C11.9666 5.16535 11.8999 5.00426 11.7811 4.88549C11.6624 4.76671 11.5013 4.69999 11.3333 4.69999H9.68992L10.4949 5.50501C10.7683 5.77838 10.7683 6.2216 10.4949 6.49496C10.2216 6.76833 9.77836 6.76833 9.50499 6.49496L7.50499 4.49496C7.23163 4.2216 7.23163 3.77838 7.50499 3.50501L9.50499 1.50501C9.77836 1.23165 10.2216 1.23165 10.4949 1.50501ZM12.6666 9.29999C13.0532 9.29999 13.3666 9.61339 13.3666 9.99999V11.3H14.6666C15.0532 11.3 15.3666 11.6134 15.3666 12C15.3666 12.3866 15.0532 12.7 14.6666 12.7H13.3666V14C13.3666 14.3866 13.0532 14.7 12.6666 14.7C12.28 14.7 11.9666 14.3866 11.9666 14V12.7H10.6666C10.28 12.7 9.96663 12.3866 9.96663 12C9.96663 11.6134 10.28 11.3 10.6666 11.3H11.9666V9.99999C11.9666 9.61339 12.28 9.29999 12.6666 9.29999Z"
      fill="currentColor"
    />
  </svg>
);
export default GitPullRequestCreateArrowIcon;
