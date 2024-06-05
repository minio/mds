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

const AArrowUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.33333 3.96667C4.59847 3.96667 4.84086 4.11648 4.95943 4.35363L6.95313 8.34102C6.95767 8.34964 6.96203 8.35837 6.96622 8.3672L7.95943 10.3536C8.13233 10.6994 7.99217 11.1199 7.64638 11.2928C7.3006 11.4657 6.88013 11.3255 6.70723 10.9797L5.90071 9.36667H2.76596L1.95943 10.9797C1.78654 11.3255 1.36607 11.4657 1.02028 11.2928C0.6745 11.1199 0.534342 10.6994 0.707235 10.3536L1.70045 8.36719C1.70463 8.35837 1.709 8.34964 1.71353 8.34103L3.70723 4.35363C3.82581 4.11648 4.06819 3.96667 4.33333 3.96667ZM3.46596 7.96667H5.20071L4.33333 6.23192L3.46596 7.96667ZM12 3.96667C12.1857 3.96667 12.3637 4.04042 12.495 4.1717L15.1616 6.83837C15.435 7.11173 15.435 7.55495 15.1616 7.82832C14.8883 8.10168 14.4451 8.10168 14.1717 7.82832L12.7 6.35662V10.6667C12.7 11.0533 12.3866 11.3667 12 11.3667C11.6134 11.3667 11.3 11.0533 11.3 10.6667V6.35662L9.82831 7.82832C9.55494 8.10168 9.11173 8.10168 8.83836 7.82832C8.56499 7.55495 8.56499 7.11173 8.83836 6.83837L11.505 4.1717C11.6363 4.04042 11.8143 3.96667 12 3.96667Z"
      fill="currentColor"
    />
  </svg>
);
export default AArrowUpIcon;
