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

const GitCommitHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00005 6.69999C7.28208 6.69999 6.70005 7.28202 6.70005 7.99999C6.70005 8.71796 7.28208 9.29999 8.00005 9.29999C8.71802 9.29999 9.30005 8.71796 9.30005 7.99999C9.30005 7.28202 8.71802 6.69999 8.00005 6.69999ZM5.39167 7.29999C5.70001 6.14817 6.75098 5.29999 8.00005 5.29999C9.24912 5.29999 10.3001 6.14817 10.6084 7.29999H14C14.3866 7.29999 14.7 7.61339 14.7 7.99999C14.7 8.38659 14.3866 8.69999 14 8.69999H10.6084C10.3001 9.85181 9.24912 10.7 8.00005 10.7C6.75098 10.7 5.70001 9.85181 5.39167 8.69999H2.00005C1.61345 8.69999 1.30005 8.38659 1.30005 7.99999C1.30005 7.61339 1.61345 7.29999 2.00005 7.29999H5.39167Z"
      fill="currentColor"
    />
  </svg>
);
export default GitCommitHorizontalIcon;
