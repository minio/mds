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

const SignalLowIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66663 9.96667C5.05323 9.96667 5.36663 10.2801 5.36663 10.6667V13.3333C5.36663 13.7199 5.05323 14.0333 4.66663 14.0333C4.28003 14.0333 3.96663 13.7199 3.96663 13.3333V10.6667C3.96663 10.2801 4.28003 9.96667 4.66663 9.96667ZM0.633301 13.3333C0.633301 12.9467 0.946701 12.6333 1.3333 12.6333H1.33997C1.72657 12.6333 2.03997 12.9467 2.03997 13.3333C2.03997 13.7199 1.72657 14.0333 1.33997 14.0333H1.3333C0.946701 14.0333 0.633301 13.7199 0.633301 13.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default SignalLowIcon;
