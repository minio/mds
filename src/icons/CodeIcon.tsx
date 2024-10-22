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

const CodeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.82828 3.50503C6.10164 3.7784 6.10164 4.22161 5.82828 4.49498L2.32325 8L5.82828 11.505C6.10164 11.7784 6.10164 12.2216 5.82828 12.495C5.55491 12.7683 5.11169 12.7683 4.83833 12.495L0.838326 8.49498C0.564959 8.22161 0.564959 7.7784 0.838326 7.50503L4.83833 3.50503C5.11169 3.23166 5.55491 3.23166 5.82828 3.50503ZM10.1717 3.50503C10.445 3.23166 10.8882 3.23166 11.1616 3.50503L15.1616 7.50503C15.435 7.7784 15.435 8.22161 15.1616 8.49498L11.1616 12.495C10.8882 12.7683 10.445 12.7683 10.1717 12.495C9.89829 12.2216 9.89829 11.7784 10.1717 11.505L13.6767 8L10.1717 4.49498C9.89829 4.22161 9.89829 3.7784 10.1717 3.50503Z"
      fill="currentColor"
    />
  </svg>
);
export default CodeIcon;
