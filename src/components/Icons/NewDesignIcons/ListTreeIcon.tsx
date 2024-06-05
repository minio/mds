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

const ListTreeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.99999 3.29999C2.38659 3.29999 2.69999 3.61339 2.69999 3.99999V6.66665C2.69999 7.01339 2.98659 7.29999 3.33332 7.29999H5.33332C5.71992 7.29999 6.03332 7.61339 6.03332 7.99999C6.03332 8.38659 5.71992 8.69999 5.33332 8.69999H3.33332C3.11236 8.69999 2.89944 8.66443 2.69999 8.59875V10.6667C2.69999 11.0134 2.98659 11.3 3.33332 11.3H5.33332C5.71992 11.3 6.03332 11.6134 6.03332 12C6.03332 12.3866 5.71992 12.7 5.33332 12.7H3.33332C2.21339 12.7 1.29999 11.7866 1.29999 10.6667V3.99999C1.29999 3.61339 1.61339 3.29999 1.99999 3.29999ZM4.63332 3.99999C4.63332 3.61339 4.94672 3.29999 5.33332 3.29999H14C14.3866 3.29999 14.7 3.61339 14.7 3.99999C14.7 4.38659 14.3866 4.69999 14 4.69999H5.33332C4.94672 4.69999 4.63332 4.38659 4.63332 3.99999ZM7.96665 7.99999C7.96665 7.61339 8.28006 7.29999 8.66665 7.29999H14C14.3866 7.29999 14.7 7.61339 14.7 7.99999C14.7 8.38659 14.3866 8.69999 14 8.69999H8.66665C8.28006 8.69999 7.96665 8.38659 7.96665 7.99999ZM7.96665 12C7.96665 11.6134 8.28006 11.3 8.66665 11.3H14C14.3866 11.3 14.7 11.6134 14.7 12C14.7 12.3866 14.3866 12.7 14 12.7H8.66665C8.28006 12.7 7.96665 12.3866 7.96665 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ListTreeIcon;
