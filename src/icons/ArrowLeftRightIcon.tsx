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

const ArrowLeftRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.82831 1.50501C6.10168 1.77838 6.10168 2.2216 5.82831 2.49496L4.35662 3.96665H13.3333C13.7199 3.96665 14.0333 4.28006 14.0333 4.66665C14.0333 5.05325 13.7199 5.36665 13.3333 5.36665H4.35662L5.82831 6.83835C6.10168 7.11171 6.10168 7.55493 5.82831 7.8283C5.55494 8.10166 5.11173 8.10166 4.83836 7.8283L2.17169 5.16163C1.89833 4.88826 1.89833 4.44505 2.17169 4.17168L4.83836 1.50501C5.11173 1.23165 5.55494 1.23165 5.82831 1.50501ZM10.1717 8.17168C10.4451 7.89831 10.8883 7.89831 11.1616 8.17168L13.8283 10.8383C14.1017 11.1117 14.1017 11.5549 13.8283 11.8283L11.1616 14.495C10.8883 14.7683 10.4451 14.7683 10.1717 14.495C9.89833 14.2216 9.89833 13.7784 10.1717 13.505L11.6434 12.0333H2.66667C2.28007 12.0333 1.96667 11.7199 1.96667 11.3333C1.96667 10.9467 2.28007 10.6333 2.66667 10.6333H11.6434L10.1717 9.16163C9.89833 8.88826 9.89833 8.44505 10.1717 8.17168Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowLeftRightIcon;
