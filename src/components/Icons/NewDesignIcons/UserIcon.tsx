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

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.70005C6.91381 2.70005 6.0333 3.58056 6.0333 4.66672C6.0333 5.75288 6.91381 6.63338 7.99997 6.63338C9.08613 6.63338 9.96663 5.75288 9.96663 4.66672C9.96663 3.58056 9.08613 2.70005 7.99997 2.70005ZM4.6333 4.66672C4.6333 2.80736 6.14061 1.30005 7.99997 1.30005C9.85933 1.30005 11.3666 2.80736 11.3666 4.66672C11.3666 6.52607 9.85933 8.03338 7.99997 8.03338C6.14061 8.03338 4.6333 6.52607 4.6333 4.66672ZM3.61937 10.2861C4.25075 9.65475 5.10707 9.30005 5.99997 9.30005H9.99997C10.8929 9.30005 11.7492 9.65475 12.3806 10.2861C13.0119 10.9175 13.3666 11.7738 13.3666 12.6667V14C13.3666 14.3866 13.0532 14.7 12.6666 14.7C12.28 14.7 11.9666 14.3866 11.9666 14V12.6667C11.9666 12.1451 11.7594 11.6449 11.3906 11.2761C11.0218 10.9073 10.5216 10.7 9.99997 10.7H5.99997C5.47838 10.7 4.97815 10.9073 4.60932 11.2761C4.2405 11.6449 4.0333 12.1451 4.0333 12.6667V14C4.0333 14.3866 3.7199 14.7 3.3333 14.7C2.9467 14.7 2.6333 14.3866 2.6333 14V12.6667C2.6333 11.7738 2.988 10.9175 3.61937 10.2861Z"
      fill="currentColor"
    />
  </svg>
);
export default UserIcon;
