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

const LockKeyholeOpenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.00772 2.23391C8.47217 2.01209 7.8784 1.97319 7.31848 2.12322C6.75857 2.27325 6.2638 2.60383 5.91092 3.0637C5.55804 3.52357 5.36675 4.08702 5.36672 4.66667C5.36672 4.66668 5.36672 4.66669 5.36672 4.6667V5.96667H12.6667C13.7897 5.96667 14.7 6.87703 14.7 8V13.3333C14.7 14.4563 13.7897 15.3667 12.6667 15.3667H3.33338C2.2104 15.3667 1.30005 14.4563 1.30005 13.3333V8C1.30005 6.87703 2.2104 5.96667 3.33338 5.96667H3.96672V4.66667V4.66664C3.96675 3.7788 4.25974 2.91578 4.80024 2.21142C5.34074 1.50705 6.09854 1.00071 6.95613 0.770921C7.81372 0.541128 8.72317 0.600723 9.54344 0.940463C10.3637 1.2802 11.049 1.8811 11.4929 2.64997C11.6862 2.98477 11.5715 3.41289 11.2367 3.60621C10.902 3.79952 10.4738 3.68483 10.2805 3.35004C9.99066 2.84805 9.54326 2.45572 9.00772 2.23391ZM4.66589 7.36667H3.33338C2.9836 7.36667 2.70005 7.65022 2.70005 8V13.3333C2.70005 13.6831 2.9836 13.9667 3.33338 13.9667H12.6667C13.0165 13.9667 13.3 13.6831 13.3 13.3333V8C13.3 7.65022 13.0165 7.36667 12.6667 7.36667H4.66754C4.66727 7.36667 4.66699 7.36667 4.66672 7.36667C4.66644 7.36667 4.66617 7.36667 4.66589 7.36667ZM8.00005 10.7C8.01846 10.7 8.03338 10.6851 8.03338 10.6667C8.03338 10.6483 8.01846 10.6333 8.00005 10.6333C7.98164 10.6333 7.96672 10.6483 7.96672 10.6667C7.96672 10.6851 7.98164 10.7 8.00005 10.7ZM6.63338 10.6667C6.63338 9.91188 7.24526 9.3 8.00005 9.3C8.75484 9.3 9.36672 9.91188 9.36672 10.6667C9.36672 11.4215 8.75484 12.0333 8.00005 12.0333C7.24526 12.0333 6.63338 11.4215 6.63338 10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default LockKeyholeOpenIcon;
