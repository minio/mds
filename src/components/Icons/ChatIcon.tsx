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
    <path d="m33.27,219.82c.11-9.44-.8-18.86-2.72-28.1C12.27,185.4,0,168.18,0,148.84V45.34C0,20.3,20.3,0,45.34,0h161.65c25.04,0,45.34,20.3,45.34,45.34h0v103.5c0,25.04-20.3,45.34-45.34,45.34H74.85c-6.33,6.52-17.95,16.82-36.98,28.4-.45.28-.97.42-1.5.42-1.73-.02-3.11-1.44-3.09-3.17v-.02Z" />
  </svg>
);

export default ChatIcon;
