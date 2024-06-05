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

const SandwichIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00005 3.72471C7.85892 3.72471 7.72183 3.77185 7.61055 3.85864L4.04111 6.63334H11.959L8.38955 3.85864C8.27826 3.77185 8.14118 3.72471 8.00005 3.72471ZM13.3 8.03334H2.70005V9.3H13.3V8.03334ZM11.5055 10.7H6.66422L9.08478 12.634C9.21367 12.7374 9.37787 12.7864 9.54234 12.7704C9.70622 12.7545 9.85743 12.6754 9.96395 12.5499C9.96434 12.5494 9.96472 12.549 9.96511 12.5485L11.5055 10.7ZM11.1057 13.3667L11.0378 13.4481L11.035 13.4515C10.6928 13.8569 10.2057 14.1126 9.67768 14.1638C9.1499 14.2151 8.62299 14.0582 8.20928 13.7265C8.20907 13.7263 8.20949 13.7267 8.20928 13.7265L7.75893 13.3667H2.66672C2.30425 13.3667 1.95664 13.2227 1.70034 12.9664C1.44404 12.7101 1.30005 12.3625 1.30005 12V10.6667C1.30005 10.4312 1.36082 10.202 1.47368 10C1.36082 9.79803 1.30005 9.56882 1.30005 9.33334V7.33334C1.30005 7.11726 1.39984 6.91329 1.57044 6.78068L6.74955 2.7547C6.74938 2.75483 6.74971 2.75457 6.74955 2.7547C7.10674 2.47629 7.54716 2.32471 8.00005 2.32471C8.45294 2.32471 8.89286 2.47591 9.25005 2.75432C9.24989 2.75419 9.25022 2.75444 9.25005 2.75432L14.4297 6.78068C14.6003 6.91329 14.7 7.11726 14.7 7.33334V9.33334C14.7 9.56882 14.6393 9.79803 14.5264 10C14.6393 10.202 14.7 10.4312 14.7 10.6667V12C14.7 12.3625 14.5561 12.7101 14.2998 12.9664C14.0435 13.2227 13.6958 13.3667 13.3334 13.3667H11.1057ZM13.3 10.7334L12.2724 11.9667H13.3V10.7334ZM2.70005 10.7V11.9667H6.00673L4.42141 10.7H2.70005Z"
      fill="currentColor"
    />
  </svg>
);
export default SandwichIcon;
