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

const ClusterIngressIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M7.64996 0.727083C7.86654 0.60204 8.13338 0.60204 8.34996 0.727083L14.1235 4.06042C14.34 4.18546 14.4735 4.41655 14.4735 4.66663V11.3333C14.4735 11.5834 14.34 11.8145 14.1235 11.9395L8.34996 15.2729C8.13338 15.3979 7.86654 15.3979 7.64996 15.2729L1.87646 11.9395C1.65988 11.8145 1.52646 11.5834 1.52646 11.3333V10.3333C1.52646 9.9467 1.83986 9.6333 2.22646 9.6333C2.61306 9.6333 2.92646 9.9467 2.92646 10.3333V10.9292L7.99996 13.8583L13.0735 10.9292V5.07078L7.99996 2.14159L2.92646 5.07078V5.66663C2.92646 6.05323 2.61306 6.36663 2.22646 6.36663C1.83986 6.36663 1.52646 6.05323 1.52646 5.66663V4.66663C1.52646 4.41655 1.65988 4.18546 1.87646 4.06042L7.64996 0.727083Z"
      fill="currentColor"
    />
    <path
      d="M0.633301 8.00005C0.633301 7.61345 0.946701 7.30005 1.3333 7.30005H6.97674L5.61937 5.94269C5.34601 5.66932 5.34601 5.22611 5.61937 4.95274C5.89274 4.67937 6.33596 4.67937 6.60932 4.95274L9.16161 7.50503C9.43498 7.77839 9.43498 8.22161 9.16161 8.49497L6.60932 11.0473C6.33596 11.3206 5.89274 11.3206 5.61937 11.0473C5.34601 10.7739 5.34601 10.3307 5.61937 10.0573L6.97664 8.70005H1.3333C0.946701 8.70005 0.633301 8.38665 0.633301 8.00005Z"
      fill="currentColor"
    />
  </svg>
);
export default ClusterIngressIcon;
