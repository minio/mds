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

const FlagTriangleLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.7014 0.737877C11.9077 0.865421 12.0333 1.09073 12.0333 1.33333V7.98592C12.0335 7.99565 12.0335 8.0054 12.0333 8.01515V14.6667C12.0333 15.0533 11.7199 15.3667 11.3333 15.3667C10.9467 15.3667 10.6333 15.0533 10.6333 14.6667V8.43262L4.35363 5.29276C4.11648 5.17419 3.96667 4.93181 3.96667 4.66667C3.96667 4.40152 4.11648 4.15914 4.35363 4.04057L11.0203 0.707233C11.2373 0.598737 11.495 0.610332 11.7014 0.737877ZM10.6333 6.86737V2.46596L6.23192 4.66667L10.6333 6.86737Z"
      fill="currentColor"
    />
  </svg>
);
export default FlagTriangleLeftIcon;
