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

const RemoveFormattingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.65035 1.96662H2.66667C2.28008 1.96662 1.96667 2.28002 1.96667 2.66662V4.66662C1.96667 5.05322 2.28008 5.36662 2.66667 5.36662C3.05327 5.36662 3.36667 5.05322 3.36667 4.66662V3.36662H7.71454L4.81871 12.6333H3.33334C2.94674 12.6333 2.63334 12.9467 2.63334 13.3333C2.63334 13.7199 2.94674 14.0333 3.33334 14.0333H5.31743C5.3282 14.0335 5.33895 14.0335 5.34967 14.0333H7.33334C7.71994 14.0333 8.03334 13.7199 8.03334 13.3333C8.03334 12.9467 7.71994 12.6333 7.33334 12.6333H6.28547L9.18131 3.36662H12.6333V4.66662C12.6333 5.05322 12.9467 5.36662 13.3333 5.36662C13.7199 5.36662 14.0333 5.05322 14.0333 4.66662V2.66662C14.0333 2.28002 13.7199 1.96662 13.3333 1.96662H8.68259C8.67181 1.96637 8.66107 1.96637 8.65035 1.96662ZM9.50503 9.50498C9.7784 9.23161 10.2216 9.23161 10.495 9.50498L11.6667 10.6767L12.8384 9.50498C13.1117 9.23161 13.5549 9.23161 13.8283 9.50498C14.1017 9.77834 14.1017 10.2216 13.8283 10.4949L12.6566 11.6666L13.8283 12.8383C14.1017 13.1117 14.1017 13.5549 13.8283 13.8283C13.5549 14.1016 13.1117 14.1016 12.8384 13.8283L11.6667 12.6566L10.495 13.8283C10.2216 14.1016 9.7784 14.1016 9.50503 13.8283C9.23167 13.5549 9.23167 13.1117 9.50503 12.8383L10.6767 11.6666L9.50503 10.4949C9.23167 10.2216 9.23167 9.77834 9.50503 9.50498Z"
      fill="currentColor"
    />
  </svg>
);
export default RemoveFormattingIcon;
