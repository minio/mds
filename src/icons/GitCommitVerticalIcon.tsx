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

const GitCommitVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00005 1.29999C8.38665 1.29999 8.70005 1.61339 8.70005 1.99999V5.39161C9.85187 5.69995 10.7 6.75092 10.7 7.99999C10.7 9.24906 9.85187 10.3 8.70005 10.6084V14C8.70005 14.3866 8.38665 14.7 8.00005 14.7C7.61345 14.7 7.30005 14.3866 7.30005 14V10.6084C6.14823 10.3 5.30005 9.24906 5.30005 7.99999C5.30005 6.75092 6.14823 5.69995 7.30005 5.39161V1.99999C7.30005 1.61339 7.61345 1.29999 8.00005 1.29999ZM8.00005 6.69999C7.28208 6.69999 6.70005 7.28202 6.70005 7.99999C6.70005 8.71796 7.28208 9.29999 8.00005 9.29999C8.71802 9.29999 9.30005 8.71796 9.30005 7.99999C9.30005 7.28202 8.71802 6.69999 8.00005 6.69999Z"
      fill="currentColor"
    />
  </svg>
);
export default GitCommitVerticalIcon;
