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

const MousePointer2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.17172 2.17172C2.37218 1.97127 2.67374 1.9115 2.93549 2.02036L14.2688 6.73369C14.5375 6.84543 14.709 7.11171 14.6997 7.40253C14.6903 7.69335 14.502 7.94806 14.2267 8.0423L9.60554 9.62422L8.04284 14.2252C7.94916 14.501 7.69448 14.6899 7.40337 14.6996C7.11225 14.7094 6.84554 14.5378 6.73369 14.2688L2.02036 2.93549C1.9115 2.67374 1.97127 2.37218 2.17172 2.17172ZM3.96459 3.96459L7.31391 12.0181L8.39055 8.84824C8.46032 8.64282 8.6214 8.48135 8.82665 8.41109L12.0243 7.31648L3.96459 3.96459Z"
      fill="currentColor"
    />
  </svg>
);
export default MousePointer2Icon;
