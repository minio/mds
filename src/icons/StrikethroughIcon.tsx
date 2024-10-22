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

const StrikethroughIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.00038 1.96668L10.6667 1.96667C11.0533 1.96667 11.3667 2.28008 11.3667 2.66667C11.3667 3.05327 11.0533 3.36667 10.6667 3.36667H6.00001C5.79198 3.36657 5.58659 3.41638 5.4018 3.51194C5.21702 3.6075 5.05786 3.74601 4.93771 3.91584C4.81756 4.08567 4.73992 4.28185 4.71131 4.48791C4.6827 4.69396 4.70396 4.90387 4.77331 5.10001C4.90217 5.4645 4.71116 5.86444 4.34667 5.99331C3.98219 6.12217 3.58224 5.93116 3.45338 5.56668C3.30935 5.15932 3.26519 4.72335 3.32461 4.29538C3.38403 3.86742 3.54528 3.45997 3.79483 3.10725C4.04437 2.75453 4.37492 2.46686 4.75871 2.26839C5.14239 2.06997 5.56843 1.96651 6.00038 1.96668ZM1.96667 8.00001C1.96667 7.61341 2.28008 7.30001 2.66667 7.30001H13.3333C13.7199 7.30001 14.0333 7.61341 14.0333 8.00001C14.0333 8.38661 13.7199 8.70001 13.3333 8.70001H12.0659C12.4755 9.2692 12.7 9.95636 12.7 10.6667C12.7 11.5596 12.3453 12.4159 11.7139 13.0473C11.0826 13.6786 10.2262 14.0333 9.33334 14.0333H4.00001C3.61341 14.0333 3.30001 13.7199 3.30001 13.3333C3.30001 12.9467 3.61341 12.6333 4.00001 12.6333H9.33334C9.85493 12.6333 10.3552 12.4261 10.724 12.0573C11.0928 11.6885 11.3 11.1883 11.3 10.6667C11.3 10.1451 11.0928 9.64485 10.724 9.27603C10.3552 8.90721 9.85493 8.70001 9.33334 8.70001H2.66667C2.28008 8.70001 1.96667 8.38661 1.96667 8.00001Z"
      fill="currentColor"
    />
  </svg>
);
export default StrikethroughIcon;
