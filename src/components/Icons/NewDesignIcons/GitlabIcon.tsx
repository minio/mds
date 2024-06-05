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

const GitlabIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.80943 1.30006C4.03389 1.29196 4.25439 1.3634 4.43171 1.50232C4.45955 1.52413 4.48569 1.54801 4.50992 1.57377C4.61485 1.68533 4.69207 1.81983 4.73556 1.9664L6.05121 5.91335H9.95144L11.297 1.94205C11.3015 1.92891 11.3063 1.91591 11.3116 1.90306C11.3796 1.73562 11.4927 1.59026 11.6382 1.48306L11.653 1.47244C11.8189 1.35682 12.017 1.29651 12.2192 1.30013C12.2463 1.30061 12.2734 1.30267 12.3003 1.3063C12.491 1.33203 12.6691 1.41485 12.8114 1.54323C12.9363 1.6464 13.0339 1.77914 13.0951 1.92973C13.1008 1.94371 13.1061 1.95787 13.1108 1.97219L15.332 8.64226C15.4147 8.8951 15.4091 9.16857 15.316 9.4178C15.2268 9.6566 15.0624 9.85957 14.848 9.99637L8.40526 14.5708C8.16298 14.7428 7.83849 14.7431 7.59588 14.5716L1.10344 9.98083C0.898359 9.83269 0.745682 9.62317 0.66742 9.38259C0.589158 9.14201 0.589382 8.88277 0.668058 8.64233L0.669715 8.63726L2.9164 1.94394C2.92103 1.93016 2.92608 1.91653 2.93155 1.90306C2.99962 1.73562 3.11268 1.59026 3.25822 1.48306L3.27305 1.47244C3.43076 1.3625 3.61765 1.30257 3.80943 1.30006ZM3.82077 3.64922L4.8826 6.83471C4.97788 7.12055 5.24538 7.31335 5.54668 7.31335H10.4533C10.7534 7.31335 11.02 7.12215 11.1163 6.83799L12.1952 3.65381L13.9483 8.9182L7.99918 13.1421L2.04709 8.93344L3.82077 3.64922Z"
      fill="currentColor"
    />
  </svg>
);
export default GitlabIcon;
