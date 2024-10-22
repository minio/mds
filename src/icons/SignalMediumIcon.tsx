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

const SignalMediumIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 7.30005C8.38657 7.30005 8.69997 7.61345 8.69997 8.00005V13.3334C8.69997 13.72 8.38657 14.0334 7.99997 14.0334C7.61337 14.0334 7.29997 13.72 7.29997 13.3334V8.00005C7.29997 7.61345 7.61337 7.30005 7.99997 7.30005ZM4.66663 9.96672C5.05323 9.96672 5.36663 10.2801 5.36663 10.6667V13.3334C5.36663 13.72 5.05323 14.0334 4.66663 14.0334C4.28003 14.0334 3.96663 13.72 3.96663 13.3334V10.6667C3.96663 10.2801 4.28003 9.96672 4.66663 9.96672ZM0.633301 13.3334C0.633301 12.9468 0.946701 12.6334 1.3333 12.6334H1.33997C1.72657 12.6334 2.03997 12.9468 2.03997 13.3334C2.03997 13.72 1.72657 14.0334 1.33997 14.0334H1.3333C0.946701 14.0334 0.633301 13.72 0.633301 13.3334Z"
      fill="currentColor"
    />
  </svg>
);
export default SignalMediumIcon;
