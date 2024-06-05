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

const Navigation2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 0.633301C8.29327 0.633301 8.55546 0.816117 8.65684 1.09131L13.3235 13.758C13.4252 14.034 13.3434 14.3443 13.1189 14.5343C12.8943 14.7244 12.5748 14.7537 12.3194 14.6077L8 12.1395L3.68063 14.6077C3.42519 14.7537 3.10573 14.7244 2.88114 14.5343C2.65656 14.3443 2.57478 14.034 2.6765 13.758L7.34316 1.09131C7.44455 0.816117 7.70673 0.633301 8 0.633301ZM4.6545 12.4388L7.6527 10.7255C7.86791 10.6026 8.1321 10.6026 8.3473 10.7255L11.3455 12.4388L8 3.35815L4.6545 12.4388Z"
      fill="currentColor"
    />
  </svg>
);
export default Navigation2Icon;
