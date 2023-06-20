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

const ChatIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m35.47,235.89c.11-9.4-.8-18.79-2.71-27.99-18.21-6.29-30.44-23.44-30.44-42.71V62.1c0-24.94,20.22-45.16,45.16-45.16h161.01c24.94,0,45.16,20.22,45.16,45.16h0v103.09c0,24.94-20.22,45.16-45.16,45.16H76.89c-6.31,6.49-17.88,16.75-36.84,28.28-.45.28-.97.42-1.5.42-1.72-.02-3.1-1.43-3.08-3.15v-.02Z" />
  </svg>
);

export default ChatIcon;
