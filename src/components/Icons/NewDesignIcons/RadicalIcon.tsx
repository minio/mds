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

const RadicalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.65193 2.50635C8.72633 2.19015 9.00849 1.96667 9.33332 1.96667H14C14.3866 1.96667 14.7 2.28008 14.7 2.66667C14.7 3.05327 14.3866 3.36667 14 3.36667H9.88773L7.34805 14.1603C7.27635 14.465 7.01108 14.6851 6.69837 14.6993C6.38567 14.7135 6.10156 14.5183 6.00258 14.2214L4.16212 8.70001H1.99999C1.61339 8.70001 1.29999 8.38661 1.29999 8.00001C1.29999 7.61341 1.61339 7.30001 1.99999 7.30001H4.66665C4.96796 7.30001 5.23545 7.49281 5.33073 7.77865L6.55043 11.4377L8.65193 2.50635Z"
      fill="currentColor"
    />
  </svg>
);
export default RadicalIcon;
