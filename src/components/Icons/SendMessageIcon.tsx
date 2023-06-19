// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

const SendMessageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m176.03,253.47c-3.13,0-6.22-.71-9.03-2.09-3.04-1.52-5.66-3.76-7.63-6.54l-57.42-79.52,59.8-59.8c2.64-2.63,2.65-6.89.02-9.53s-6.89-2.65-9.53-.02c0,0-.01.01-.02.02l-59.43,59.43L10.59,96.07c-1.65-1.19-3.13-2.6-4.39-4.21-1.16-1.49-2.11-3.14-2.81-4.9-1.33-3.39-1.75-7.07-1.2-10.68.54-3.67,2.03-7.14,4.33-10.07,2.39-3.03,5.61-5.31,9.26-6.57l-.49-.05L226.71,2.99l-.04.3c1.8-.51,3.66-.77,5.52-.77.87,0,1.74.06,2.6.17,2.62.23,5.16.96,7.5,2.16,2.79,1.43,5.23,3.46,7.14,5.94,1.87,2.44,3.19,5.26,3.84,8.27.35,1.63.49,3.29.44,4.95l.33-.07-.45,1.66c-.12,1.06-.32,2.11-.59,3.14l-36,134.88.04.04-15.2,54.72-5.99,22.33-.06-.56-.42,1.51-.1-.64c-1.62,3.8-4.37,7.01-7.88,9.2-3.4,2.13-7.34,3.27-11.35,3.26Z" />
  </svg>
);

export default SendMessageIcon;
