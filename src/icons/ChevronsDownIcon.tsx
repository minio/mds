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

const ChevronsDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.1717 3.50502C4.44507 3.23166 4.88828 3.23166 5.16165 3.50502L8.00001 6.34338L10.8384 3.50502C11.1117 3.23166 11.5549 3.23166 11.8283 3.50502C12.1017 3.77839 12.1017 4.22161 11.8283 4.49497L8.49498 7.82831C8.36371 7.95958 8.18566 8.03333 8.00001 8.03333C7.81436 8.03333 7.63631 7.95958 7.50503 7.82831L4.1717 4.49497C3.89833 4.22161 3.89833 3.77839 4.1717 3.50502ZM4.1717 8.17169C4.44507 7.89832 4.88828 7.89832 5.16165 8.17169L8.00001 11.01L10.8384 8.17169C11.1117 7.89832 11.5549 7.89832 11.8283 8.17169C12.1017 8.44506 12.1017 8.88827 11.8283 9.16164L8.49498 12.495C8.36371 12.6262 8.18566 12.7 8.00001 12.7C7.81436 12.7 7.63631 12.6262 7.50503 12.495L4.1717 9.16164C3.89833 8.88827 3.89833 8.44506 4.1717 8.17169Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronsDownIcon;
