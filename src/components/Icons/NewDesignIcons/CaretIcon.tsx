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

const CaretIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.35328 5.73211C2.46162 5.47054 2.71687 5.29999 2.99999 5.29999H13C13.2831 5.29999 13.5384 5.47054 13.6467 5.73211C13.7551 5.99368 13.6952 6.29476 13.495 6.49496L8.49497 11.495C8.2216 11.7683 7.77839 11.7683 7.50502 11.495L2.50502 6.49496C2.30482 6.29476 2.24493 5.99368 2.35328 5.73211ZM4.68994 6.69999L7.99999 10.01L11.31 6.69999H4.68994Z"
      fill="currentColor"
    />
  </svg>
);
export default CaretIcon;
