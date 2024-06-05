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

const Scale3dIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33334 2.70005C2.98356 2.70005 2.7 2.9836 2.7 3.33338C2.7 3.68316 2.98356 3.96672 3.33334 3.96672C3.68312 3.96672 3.96667 3.68316 3.96667 3.33338C3.96667 2.9836 3.68312 2.70005 3.33334 2.70005ZM1.3 3.33338C1.3 2.2104 2.21036 1.30005 3.33334 1.30005C4.45632 1.30005 5.36667 2.2104 5.36667 3.33338C5.36667 4.21038 4.81145 4.9577 4.03334 5.24301V10.9768L6.83836 8.17174C7.11173 7.89837 7.55494 7.89837 7.82831 8.17174C8.10168 8.44511 8.10168 8.88832 7.82831 9.16169L5.02329 11.9667H10.757C11.0423 11.1886 11.7897 10.6334 12.6667 10.6334C13.7896 10.6334 14.7 11.5437 14.7 12.6667C14.7 13.7897 13.7896 14.7 12.6667 14.7C11.7897 14.7 11.0423 14.1448 10.757 13.3667H3.33334C2.94674 13.3667 2.63334 13.0533 2.63334 12.6667V5.24301C1.85522 4.9577 1.3 4.21038 1.3 3.33338ZM12.6667 12.0334C12.3169 12.0334 12.0333 12.3169 12.0333 12.6667C12.0333 13.0165 12.3169 13.3 12.6667 13.3C13.0164 13.3 13.3 13.0165 13.3 12.6667C13.3 12.3169 13.0164 12.0334 12.6667 12.0334Z"
      fill="currentColor"
    />
  </svg>
);
export default Scale3dIcon;
