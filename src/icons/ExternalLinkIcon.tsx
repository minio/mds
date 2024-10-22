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

const ExternalLinkIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 2.69999C9.61345 2.69999 9.30005 2.38659 9.30005 1.99999C9.30005 1.61339 9.61345 1.29999 10 1.29999H14C14.3866 1.29999 14.7 1.61339 14.7 1.99999V5.99999C14.7 6.38659 14.3866 6.69999 14 6.69999C13.6135 6.69999 13.3 6.38659 13.3 5.99999V3.68994L7.16169 9.8283C6.88832 10.1017 6.44511 10.1017 6.17174 9.8283C5.89837 9.55493 5.89837 9.11171 6.17174 8.83835L12.3101 2.69999H10ZM3.33338 4.69999C3.16541 4.69999 3.00432 4.76671 2.88555 4.88549C2.76677 5.00426 2.70005 5.16535 2.70005 5.33332V12.6667C2.70005 12.8346 2.76677 12.9957 2.88555 13.1145C3.00432 13.2333 3.16541 13.3 3.33338 13.3H10.6667C10.8347 13.3 10.9958 13.2333 11.1145 13.1145C11.2333 12.9957 11.3 12.8346 11.3 12.6667V8.66665C11.3 8.28006 11.6135 7.96665 12 7.96665C12.3866 7.96665 12.7 8.28006 12.7 8.66665V12.6667C12.7 13.2059 12.4858 13.7231 12.1045 14.1044C11.7232 14.4858 11.206 14.7 10.6667 14.7H3.33338C2.79411 14.7 2.27692 14.4858 1.8956 14.1044C1.51427 13.7231 1.30005 13.2059 1.30005 12.6667V5.33332C1.30005 4.79405 1.51427 4.27686 1.8956 3.89554C2.27692 3.51421 2.79411 3.29999 3.33338 3.29999H7.33338C7.71998 3.29999 8.03338 3.61339 8.03338 3.99999C8.03338 4.38659 7.71998 4.69999 7.33338 4.69999H3.33338Z"
      fill="currentColor"
    />
  </svg>
);
export default ExternalLinkIcon;
