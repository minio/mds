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

const Tv2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66663 2.70005C2.31685 2.70005 2.0333 2.9836 2.0333 3.33338V10C2.0333 10.3498 2.31685 10.6334 2.66663 10.6334H13.3333C13.6831 10.6334 13.9666 10.3498 13.9666 10V3.33338C13.9666 2.9836 13.6831 2.70005 13.3333 2.70005H2.66663ZM0.633301 3.33338C0.633301 2.2104 1.54366 1.30005 2.66663 1.30005H13.3333C14.4563 1.30005 15.3666 2.2104 15.3666 3.33338V10C15.3666 11.123 14.4563 12.0334 13.3333 12.0334H2.66663C1.54366 12.0334 0.633301 11.123 0.633301 10V3.33338ZM3.96663 14C3.96663 13.6135 4.28003 13.3 4.66663 13.3H11.3333C11.7199 13.3 12.0333 13.6135 12.0333 14C12.0333 14.3866 11.7199 14.7 11.3333 14.7H4.66663C4.28003 14.7 3.96663 14.3866 3.96663 14Z"
      fill="currentColor"
    />
  </svg>
);
export default Tv2Icon;
