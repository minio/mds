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

const NfcIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.5662 0.725486C10.9018 0.53372 11.3294 0.65039 11.5212 0.986076C12.7415 3.12223 13.3834 5.53982 13.3834 7.99996C13.3834 10.4601 12.7415 12.8777 11.5212 15.0139C11.3294 15.3495 10.9018 15.4662 10.5662 15.2744C10.2305 15.0827 10.1138 14.6551 10.3056 14.3194C11.4051 12.3948 11.9834 10.2165 11.9834 7.99996C11.9834 5.7834 11.4051 3.60518 10.3056 1.68052C10.1138 1.34483 10.2305 0.917251 10.5662 0.725486ZM8.25875 2.12591C8.5942 1.93373 9.02193 2.04988 9.2141 2.38533C10.1931 4.09422 10.7088 6.02919 10.71 7.99864C10.7112 9.96808 10.198 11.9037 9.22121 13.6138C9.02946 13.9495 8.60188 14.0662 8.26619 13.8745C7.93049 13.6827 7.8138 13.2551 8.00555 12.9194C8.86143 11.4211 9.31109 9.72511 9.31 7.99952C9.30891 6.27393 8.8571 4.57855 7.99933 3.08126C7.80715 2.74581 7.9233 2.31809 8.25875 2.12591ZM5.96207 3.53069C6.29857 3.34034 6.72565 3.45883 6.91599 3.79532C7.6415 5.07791 8.02279 6.5264 8.02279 7.99996C8.02279 9.47353 7.6415 10.922 6.91599 12.2046C6.72565 12.5411 6.29857 12.6596 5.96207 12.4692C5.62558 12.2789 5.50709 11.8518 5.69743 11.5153C6.304 10.443 6.62279 9.23196 6.62279 7.99996C6.62279 6.76797 6.304 5.55694 5.69743 4.48461C5.50709 4.14811 5.62558 3.72103 5.96207 3.53069ZM3.65334 4.93852C3.98919 4.74704 4.41668 4.86408 4.60816 5.19993C5.09451 6.05298 5.35028 7.01801 5.35028 7.99997C5.35028 8.98192 5.09451 9.94695 4.60816 10.8C4.41668 11.1359 3.98919 11.2529 3.65334 11.0614C3.31749 10.8699 3.20046 10.4424 3.39194 10.1066C3.75785 9.46479 3.95028 8.73875 3.95028 7.99996C3.95028 7.26118 3.75785 6.53514 3.39194 5.89333C3.20046 5.55748 3.31749 5.13 3.65334 4.93852Z"
      fill="currentColor"
    />
  </svg>
);
export default NfcIcon;
