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

const StretchVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.00001 2.0333C3.65023 2.0333 3.36667 2.31685 3.36667 2.66663V13.3333C3.36667 13.6831 3.65023 13.9666 4.00001 13.9666H5.33334C5.68312 13.9666 5.96667 13.6831 5.96667 13.3333V2.66663C5.96667 2.31685 5.68312 2.0333 5.33334 2.0333H4.00001ZM1.96667 2.66663C1.96667 1.54366 2.87703 0.633301 4.00001 0.633301H5.33334C6.45632 0.633301 7.36667 1.54366 7.36667 2.66663V13.3333C7.36667 14.4563 6.45632 15.3666 5.33334 15.3666H4.00001C2.87703 15.3666 1.96667 14.4563 1.96667 13.3333V2.66663ZM10.6667 2.0333C10.3169 2.0333 10.0333 2.31685 10.0333 2.66663V13.3333C10.0333 13.6831 10.3169 13.9666 10.6667 13.9666H12C12.3498 13.9666 12.6333 13.6831 12.6333 13.3333V2.66663C12.6333 2.31685 12.3498 2.0333 12 2.0333H10.6667ZM8.63334 2.66663C8.63334 1.54366 9.5437 0.633301 10.6667 0.633301H12C13.123 0.633301 14.0333 1.54366 14.0333 2.66663V13.3333C14.0333 14.4563 13.123 15.3666 12 15.3666H10.6667C9.5437 15.3666 8.63334 14.4563 8.63334 13.3333V2.66663Z"
      fill="currentColor"
    />
  </svg>
);
export default StretchVerticalIcon;
