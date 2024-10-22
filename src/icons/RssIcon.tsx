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

const RssIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.96667 2.66667C1.96667 2.28008 2.28008 1.96667 2.66667 1.96667C5.6813 1.96667 8.57246 3.16423 10.7041 5.29589C12.8358 7.42756 14.0333 10.3187 14.0333 13.3333C14.0333 13.7199 13.7199 14.0333 13.3333 14.0333C12.9467 14.0333 12.6333 13.7199 12.6333 13.3333C12.6333 10.69 11.5833 8.15496 9.71417 6.28584C7.84506 4.41673 5.31 3.36667 2.66667 3.36667C2.28008 3.36667 1.96667 3.05327 1.96667 2.66667ZM1.96667 7.33334C1.96667 6.94674 2.28008 6.63334 2.66667 6.63334C4.44363 6.63334 6.1478 7.33923 7.40429 8.59573C8.66078 9.85222 9.36667 11.5564 9.36667 13.3333C9.36667 13.7199 9.05327 14.0333 8.66667 14.0333C8.28008 14.0333 7.96667 13.7199 7.96667 13.3333C7.96667 11.9277 7.40828 10.5796 6.41434 9.58568C5.4204 8.59173 4.07232 8.03334 2.66667 8.03334C2.28008 8.03334 1.96667 7.71994 1.96667 7.33334ZM3.33334 12.7C3.35175 12.7 3.36667 12.6851 3.36667 12.6667C3.36667 12.6483 3.35175 12.6333 3.33334 12.6333C3.31493 12.6333 3.30001 12.6483 3.30001 12.6667C3.30001 12.6851 3.31493 12.7 3.33334 12.7ZM1.96667 12.6667C1.96667 11.9119 2.57855 11.3 3.33334 11.3C4.08813 11.3 4.70001 11.9119 4.70001 12.6667C4.70001 13.4215 4.08813 14.0333 3.33334 14.0333C2.57855 14.0333 1.96667 13.4215 1.96667 12.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default RssIcon;
