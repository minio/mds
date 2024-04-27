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

const TagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M4,5c0,.6.5,1,1,1v-1.4c.2,0,.4.2.4.4h-1.4ZM5,4c-.6,0-1,.5-1,1h1.4c0,.2-.2.4-.4.4v-1.4ZM6,5c0-.6-.5-1-1-1v1.4c-.2,0-.4-.2-.4-.4h1.4ZM5,6c.6,0,1-.5,1-1h-1.4c0-.2.2-.4.4-.4v1.4ZM14.7,7L8.9,1.2l-1,1,5.8,5.8,1-1ZM15.4,8.7c0-.6-.2-1.2-.7-1.6l-1,1c.2.2.3.4.3.6h1.4ZM14.7,10.3c.4-.4.7-1,.7-1.6h-1.4c0,.2,0,.5-.3.6l1,1ZM10.3,14.7l4.4-4.4-1-1-4.4,4.4,1,1ZM8.7,15.4c.6,0,1.2-.2,1.6-.7l-1-1c-.2.2-.4.3-.6.3v1.4ZM7,14.7c.4.4,1,.7,1.6.7v-1.4c-.2,0-.5,0-.6-.3l-1,1ZM1.2,8.9l5.8,5.8,1-1L2.2,7.9l-1,1ZM.6,7.4c0,.5.2,1.1.6,1.4l1-1c-.1-.1-.2-.3-.2-.4H.6ZM.6,2.7v4.8h1.4V2.7H.6ZM1.2,1.2c-.4.4-.6.9-.6,1.4h1.4c0-.2,0-.3.2-.4l-1-1ZM2.7.6c-.5,0-1.1.2-1.4.6l1,1c.1-.1.3-.2.4-.2V.6ZM7.4.6H2.7v1.4h4.8V.6ZM8.9,1.2c-.4-.4-.9-.6-1.4-.6v1.4c.2,0,.3,0,.4.2l1-1ZM14.2,7.5l.5-.5h0s-.5.5-.5.5ZM14.7,8.7h.7-.7ZM14.2,9.8l.5.5h0s-.5-.5-.5-.5ZM9.8,14.2l.5.5h0s-.5-.5-.5-.5ZM8.7,14.7v.7-.7ZM7.5,14.2l-.5.5h0s.5-.5.5-.5ZM1.7,8.4l.5-.5h0s-.5.5-.5.5ZM1.3,7.4h-.7s.7,0,.7,0ZM1.3,2.7h-.7.7ZM2.7,1.3v-.7.7ZM7.4,1.3v-.7s0,0,0,0v.7ZM8.4,1.7l-.5.5h0s.5-.5.5-.5Z"
      strokeWidth={"0"}
      fill={"currentColor"}
    />
  </svg>
);

export default TagIcon;
