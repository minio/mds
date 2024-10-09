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

const MousePointerClickIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.61384 0.791861C4.98652 0.689053 5.37198 0.907827 5.47478 1.28051L6.00812 3.21384C6.11093 3.58652 5.89215 3.97198 5.51947 4.07478C5.14679 4.17759 4.76134 3.95882 4.65853 3.58614L4.12519 1.65281C4.02239 1.28013 4.24116 0.89467 4.61384 0.791861ZM9.84082 2.2512C10.1071 2.53148 10.0957 2.97455 9.81545 3.24082L8.48211 4.50749C8.20183 4.77376 7.75876 4.7624 7.49249 4.48211C7.22622 4.20183 7.23758 3.75876 7.51787 3.49249L8.8512 2.22582C9.13148 1.95955 9.57455 1.97091 9.84082 2.2512ZM0.791861 4.61384C0.89467 4.24116 1.28013 4.02239 1.65281 4.12519L3.58614 4.65853C3.95882 4.76134 4.17759 5.14679 4.07478 5.51947C3.97198 5.89215 3.58652 6.11093 3.21384 6.00812L1.28051 5.47478C0.907827 5.37198 0.689053 4.98652 0.791861 4.61384ZM5.50501 5.50501C5.70559 5.30444 6.00738 5.24474 6.26922 5.35384L14.2692 8.68717C14.5373 8.79888 14.7086 9.06455 14.6997 9.35486C14.6907 9.64517 14.5034 9.89981 14.229 9.99481L11.0836 11.0836L9.99481 14.229C9.89981 14.5034 9.64517 14.6907 9.35486 14.6997C9.06455 14.7086 8.79888 14.5373 8.68717 14.2692L5.35384 6.26922C5.24474 6.00738 5.30444 5.70559 5.50501 5.50501ZM7.29999 7.29999L9.27283 12.0348L9.87183 10.3043C9.94206 10.1015 10.1015 9.94206 10.3043 9.87183L12.0348 9.27283L7.29999 7.29999ZM4.48211 7.49249C4.7624 7.75876 4.77376 8.20183 4.50749 8.48211L3.24082 9.81545C2.97455 10.0957 2.53148 10.1071 2.2512 9.84082C1.97091 9.57455 1.95955 9.13148 2.22582 8.8512L3.49249 7.51787C3.75876 7.23758 4.20183 7.22622 4.48211 7.49249Z"
      fill="currentColor"
    />
  </svg>
);
export default MousePointerClickIcon;
