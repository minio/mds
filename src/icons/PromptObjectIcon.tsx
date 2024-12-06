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

const PromptObjectIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M12.4.3c-.1-.2-.2-.3-.4-.3s-.3.1-.4.3l-.8,2.3h0v.2h-.2l-2.3.8c-.2,0-.3.2-.3.4s.1.3.3.4l2.3.8h.2v.2l.8,2.3c0,.2.2.3.4.3s.3-.1.4-.3l.8-2.3h0v-.2h.2l2.3-.8c.2,0,.3-.2.3-.4s-.1-.3-.3-.4l-2.3-.8h-.2v-.2s-.8-2.3-.8-2.3ZM11.7,3.1l.3-.8.3.8c0,.1.1.3.2.4.1.1.2.2.4.2l.8.3-.8.3c-.1,0-.3.1-.4.2-.1.1-.2.2-.2.4l-.3.8-.3-.8c0-.1-.1-.3-.2-.4-.1-.1-.2-.2-.4-.2l-.8-.3.8-.3c.1,0,.3-.1.4-.2.1-.1.2-.2.2-.4Z"
      fillRule="evenodd"
      fill="currentColor"
    />
    <path
      d="M8.1,1.3H3.3c-1.1,0-2,.9-2,2v9.3c0,1.1.9,2,2,2h9.3c1.1,0,2-.9,2-2v-5.3c-.1-.1-.3-.2-.6-.2-.5,0-.7.3-.8.7v4.8c0,.3-.3.6-.6.6H3.3c-.3,0-.6-.3-.6-.6V3.3c0-.3.3-.6.6-.6h4.5c.3,0,.6-.3.6-.7s-.2-.6-.4-.7h.1ZM5.2,6.6c-.3-.3-.7-.3-1,0-.3.3-.3.7,0,1l.8.8-.8.8c-.3.3-.3.7,0,1,.3.3.7.3,1,0l1.3-1.3c.3-.3.3-.7,0-1,0,0-1.3-1.3-1.3-1.3ZM7.3,10.4c-.4,0-.7.3-.7.7s.3.7.7.7h2.7c.4,0,.7-.3.7-.7s-.3-.7-.7-.7h-2.7Z"
      fillRule="evenodd"
      fill="currentColor"
    />
  </svg>
);
export default PromptObjectIcon;
