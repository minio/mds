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

const DraftingCompassIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00001 2.69999C7.65023 2.69999 7.36667 2.98354 7.36667 3.33332C7.36667 3.55678 7.4824 3.75321 7.65719 3.86594C7.66815 3.87138 7.67903 3.87713 7.68981 3.8832C7.70103 3.8895 7.712 3.89607 7.72273 3.90289C7.80648 3.94374 7.90056 3.96665 8.00001 3.96665C8.34979 3.96665 8.63334 3.6831 8.63334 3.33332C8.63334 2.98354 8.34979 2.69999 8.00001 2.69999ZM6.45348 4.65349C6.14995 4.29826 5.96667 3.83719 5.96667 3.33332C5.96667 2.21034 6.87703 1.29999 8.00001 1.29999C9.12298 1.29999 10.0333 2.21034 10.0333 3.33332C10.0333 3.8352 9.85151 4.2946 9.55014 4.64926L10.5572 6.44415C10.7463 6.78131 10.6263 7.20797 10.2892 7.39714C9.95202 7.5863 9.52535 7.46632 9.33619 7.12916L8.33219 5.33965C8.2241 5.35742 8.11313 5.36665 8.00001 5.36665C7.88879 5.36665 7.77966 5.35773 7.6733 5.34055L5.71478 8.8229C7.85532 9.75647 10.4156 9.31992 12.1636 7.51326C12.4324 7.23541 12.8756 7.22809 13.1534 7.49691C13.4312 7.76572 13.4386 8.20888 13.1698 8.48672C10.9677 10.7627 7.7103 11.2833 5.02546 10.0485L2.61013 14.3431C2.42062 14.6801 1.99383 14.7996 1.65686 14.6101C1.3199 14.4206 1.20037 13.9938 1.38988 13.6568L3.8165 9.34218C3.46993 9.09168 3.13967 8.80653 2.83026 8.48672C2.56144 8.20888 2.56876 7.76572 2.84661 7.49691C3.12445 7.22809 3.56761 7.23541 3.83642 7.51326C4.04913 7.73311 4.27386 7.93267 4.5084 8.11194L6.45348 4.65349ZM12.2168 10.8299C12.5538 10.6404 12.9806 10.7599 13.1701 11.0968L14.6101 13.6568C14.7996 13.9938 14.6801 14.4206 14.3432 14.6101C14.0062 14.7996 13.5794 14.6801 13.3899 14.3432L11.9499 11.7832C11.7604 11.4462 11.8799 11.0194 12.2168 10.8299Z"
      fill="currentColor"
    />
  </svg>
);
export default DraftingCompassIcon;
