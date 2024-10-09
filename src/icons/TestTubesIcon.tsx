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

const TestTubesIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.30005 1.3333C1.30005 0.946701 1.61345 0.633301 2.00005 0.633301H6.66672C7.05331 0.633301 7.36672 0.946701 7.36672 1.3333C7.36672 1.70873 7.07117 2.01512 6.70005 2.03252V13C6.70005 13.6276 6.4507 14.2296 6.00687 14.6735C5.56303 15.1173 4.96106 15.3666 4.33338 15.3666C3.7057 15.3666 3.10373 15.1173 2.6599 14.6735C2.21606 14.2296 1.96672 13.6276 1.96672 13V2.03252C1.59559 2.01512 1.30005 1.70873 1.30005 1.3333ZM3.36672 2.0333V9.96663H5.30005V2.0333H3.36672ZM5.30005 11.3666H3.36672V13C3.36672 13.2563 3.46856 13.5022 3.64985 13.6835C3.83113 13.8648 4.07701 13.9666 4.33338 13.9666C4.58976 13.9666 4.83563 13.8648 5.01692 13.6835C5.1982 13.5022 5.30005 13.2563 5.30005 13V11.3666ZM8.63338 1.3333C8.63338 0.946701 8.94678 0.633301 9.33338 0.633301H14C14.3866 0.633301 14.7 0.946701 14.7 1.3333C14.7 1.70873 14.4045 2.01512 14.0334 2.03252V13C14.0334 13.6276 13.784 14.2296 13.3402 14.6735C12.8964 15.1173 12.2944 15.3666 11.6667 15.3666C11.039 15.3666 10.4371 15.1173 9.99323 14.6735C9.54939 14.2296 9.30005 13.6276 9.30005 13V2.03252C8.92893 2.01512 8.63338 1.70873 8.63338 1.3333ZM10.7 2.0333V9.96663H12.6334V2.0333H10.7ZM12.6334 11.3666H10.7V13C10.7 13.2563 10.8019 13.5022 10.9832 13.6835C11.1645 13.8648 11.4103 13.9666 11.6667 13.9666C11.9231 13.9666 12.169 13.8648 12.3503 13.6835C12.5315 13.5022 12.6334 13.2563 12.6334 13V11.3666Z"
      fill="currentColor"
    />
  </svg>
);
export default TestTubesIcon;
