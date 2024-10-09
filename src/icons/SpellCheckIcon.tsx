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

const SpellCheckIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99996 1.96667C8.2651 1.96667 8.50748 2.11648 8.62606 2.35363L11.2864 7.67437C11.291 7.68298 11.2953 7.6917 11.2995 7.70051L12.6261 10.3536C12.799 10.6994 12.6588 11.1199 12.313 11.2928C11.9672 11.4657 11.5468 11.3255 11.3739 10.9797L10.234 8.70001H5.76592L4.62606 10.9797C4.45316 11.3255 4.03269 11.4657 3.68691 11.2928C3.34112 11.1199 3.20097 10.6994 3.37386 10.3536L4.70041 7.70052C4.70459 7.6917 4.70895 7.68298 4.71349 7.67436L7.37386 2.35363C7.49243 2.11648 7.73482 1.96667 7.99996 1.96667ZM6.46591 7.30001H9.534L7.99996 4.23192L6.46591 7.30001ZM15.1616 11.505C15.435 11.7784 15.435 12.2216 15.1616 12.495L12.4949 15.1616C12.2216 15.435 11.7783 15.435 11.505 15.1616L10.1716 13.8283C9.89828 13.5549 9.89828 13.1117 10.1716 12.8384C10.445 12.565 10.8882 12.565 11.1616 12.8384L12 13.6767L14.1716 11.505C14.445 11.2317 14.8882 11.2317 15.1616 11.505Z"
      fill="currentColor"
    />
  </svg>
);
export default SpellCheckIcon;
