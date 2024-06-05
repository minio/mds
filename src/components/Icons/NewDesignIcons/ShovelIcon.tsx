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

const ShovelIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.8384 0.838326C11.1118 0.564959 11.555 0.564959 11.8284 0.838326L15.1617 4.17166C15.4351 4.44503 15.4351 4.88824 15.1617 5.16161L14.8291 5.49416C14.8289 5.49439 14.8287 5.49462 14.8285 5.49484M10.8384 0.838326L10.5059 1.17088L10.8384 0.838326ZM11.3443 2.33411C11.2592 2.44619 11.1887 2.56891 11.1345 2.6994C11.0511 2.90033 11.0082 3.11575 11.0082 3.3333C11.0082 3.55086 11.0511 3.76627 11.1345 3.9672C11.2179 4.16813 11.3402 4.35062 11.4943 4.50422L11.4958 4.50577C11.6494 4.65985 11.8319 4.78209 12.0328 4.86551C12.2338 4.94892 12.4492 4.99186 12.6667 4.99186C12.8843 4.99186 13.0997 4.94892 13.3006 4.86551C13.4311 4.81133 13.5538 4.74078 13.6659 4.65577L11.3443 2.33411Z"
      fill="currentColor"
    />
  </svg>
);
export default ShovelIcon;
