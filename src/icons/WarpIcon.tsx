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

const WarpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <g>
      <path
        fill={"currentColor"}
        d="M12.4,8.3c-1.7-1.2-2.7-2.7-4.8-3.2-.8-.2-1.6-.2-2.4-.4-1.2-.3-2.4-1.2-2.9-2.4,0,0-.7,1.5,0,2.8-1.1-.1-2-.8-2-.8-.1,2.3,1.8,4.2,4.1,4.4,1.1,0,2-.1,2.6,0,1.2.2,1.3,2.1,0,2.3-.5,0-.9-.2-1.5,0-1,.5-1,2.1,0,2.4,1,.3,1.6.2,1.6.2,1.8-.2,2.4-2.1,4-2.5,3.7-1.1,4.7-.6,4.7-.6-1.1-.9-2.3-1.5-3.4-2.3h0Z"
      />
      <circle cx="6.6" cy="9.9" r=".9" fill={"currentColor"} />
    </g>
  </svg>
);
export default WarpIcon;
