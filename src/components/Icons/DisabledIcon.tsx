// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

import React, { SVGProps } from "react";

const DisabledIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`min-icon`}
      fill={"currentcolor"}
      viewBox="0 0 16 16"
      {...props}
    >
      <g>
        <path
          id="Trazado_7232"
          data-name="Trazado 7232"
          d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0m3.235,5.4L8.965,8.174,10.949,10.6a.857.857,0,0,1-1.327,1.086h0L7.857,9.528,6.092,11.686A.857.857,0,0,1,4.765,10.6L6.749,8.174,4.479,5.4A.857.857,0,0,1,5.806,4.314L7.857,6.821l2.05-2.506A.857.857,0,1,1,11.235,5.4"
        />
      </g>
    </svg>
  );
};

export default DisabledIcon;
