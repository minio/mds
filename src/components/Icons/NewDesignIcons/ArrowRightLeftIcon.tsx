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

const ArrowRightLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.1717 1.50501C10.4451 1.23165 10.8883 1.23165 11.1616 1.50501L13.8283 4.17168C14.1017 4.44505 14.1017 4.88826 13.8283 5.16163L11.1616 7.8283C10.8883 8.10166 10.4451 8.10166 10.1717 7.8283C9.89833 7.55493 9.89833 7.11171 10.1717 6.83835L11.6434 5.36665H2.66667C2.28008 5.36665 1.96667 5.05325 1.96667 4.66665C1.96667 4.28006 2.28008 3.96665 2.66667 3.96665H11.6434L10.1717 2.49496C9.89833 2.2216 9.89833 1.77838 10.1717 1.50501ZM5.82832 8.17168C6.10168 8.44505 6.10168 8.88826 5.82832 9.16163L4.35662 10.6333H13.3333C13.7199 10.6333 14.0333 10.9467 14.0333 11.3333C14.0333 11.7199 13.7199 12.0333 13.3333 12.0333H4.35662L5.82832 13.505C6.10168 13.7784 6.10168 14.2216 5.82832 14.495C5.55495 14.7683 5.11173 14.7683 4.83837 14.495L2.1717 11.8283C1.89833 11.5549 1.89833 11.1117 2.1717 10.8383L4.83837 8.17168C5.11173 7.89831 5.55495 7.89831 5.82832 8.17168Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowRightLeftIcon;
