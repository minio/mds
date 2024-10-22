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

const CaseSensitiveIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66662 3.96667C4.93177 3.96667 5.17415 4.11647 5.29272 4.35362L7.28643 8.34102C7.29096 8.34964 7.29532 8.35836 7.29951 8.36718L7.95939 9.68695C8.13228 10.0327 7.99213 10.4532 7.64634 10.6261C7.30056 10.799 6.88008 10.6588 6.70719 10.313L6.234 9.36667H3.09925L2.62606 10.313C2.45316 10.6588 2.03269 10.799 1.68691 10.6261C1.34112 10.4532 1.20097 10.0327 1.37386 9.68695L2.03374 8.36718C2.03793 8.35836 2.04229 8.34964 2.04682 8.34102L4.04053 4.35362C4.1591 4.11647 4.40148 3.96667 4.66662 3.96667ZM3.79925 7.96667H5.534L4.66662 6.23191L3.79925 7.96667ZM12 6.7C11.282 6.7 10.7 7.28203 10.7 8C10.7 8.71797 11.282 9.3 12 9.3C12.7179 9.3 13.3 8.71797 13.3 8C13.3 7.28203 12.7179 6.7 12 6.7ZM13.3783 5.67786C12.9749 5.43784 12.5035 5.3 12 5.3C10.5088 5.3 9.29996 6.50883 9.29996 8C9.29996 9.49117 10.5088 10.7 12 10.7C12.5035 10.7 12.9749 10.5622 13.3783 10.3221C13.4949 10.5466 13.7295 10.7 14 10.7C14.3866 10.7 14.7 10.3866 14.7 10V6C14.7 5.6134 14.3866 5.3 14 5.3C13.7295 5.3 13.4949 5.45336 13.3783 5.67786Z"
      fill="currentColor"
    />
  </svg>
);
export default CaseSensitiveIcon;
