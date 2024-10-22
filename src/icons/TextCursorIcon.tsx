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

const TextCursorIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.96667 1.3333C3.96667 0.946701 4.28008 0.633301 4.66667 0.633301H5.33334C6.22624 0.633301 7.08256 0.988002 7.71393 1.61937C7.81674 1.72218 7.91221 1.83095 8.00001 1.94487C8.08781 1.83095 8.18328 1.72218 8.28608 1.61937C8.91745 0.988002 9.77378 0.633301 10.6667 0.633301H11.3333C11.7199 0.633301 12.0333 0.946701 12.0333 1.3333C12.0333 1.7199 11.7199 2.0333 11.3333 2.0333H10.6667C10.1451 2.0333 9.64485 2.2405 9.27603 2.60932C8.90721 2.97815 8.70001 3.47837 8.70001 3.99997V12C8.70001 12.5216 8.90721 13.0218 9.27603 13.3906C9.64485 13.7594 10.1451 13.9666 10.6667 13.9666H11.3333C11.7199 13.9666 12.0333 14.28 12.0333 14.6666C12.0333 15.0532 11.7199 15.3666 11.3333 15.3666H10.6667C9.77378 15.3666 8.91745 15.0119 8.28608 14.3806C8.18328 14.2778 8.08781 14.169 8.00001 14.0551C7.91221 14.169 7.81674 14.2778 7.71393 14.3806C7.08256 15.0119 6.22624 15.3666 5.33334 15.3666H4.66667C4.28008 15.3666 3.96667 15.0532 3.96667 14.6666C3.96667 14.28 4.28008 13.9666 4.66667 13.9666H5.33334C5.85493 13.9666 6.35516 13.7594 6.72398 13.3906C7.09281 13.0218 7.30001 12.5216 7.30001 12V3.99997C7.30001 3.47837 7.09281 2.97815 6.72398 2.60932C6.35516 2.2405 5.85493 2.0333 5.33334 2.0333H4.66667C4.28008 2.0333 3.96667 1.7199 3.96667 1.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default TextCursorIcon;
