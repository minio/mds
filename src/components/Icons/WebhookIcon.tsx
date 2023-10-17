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

const WebhookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M102.7,171.8h74.4c3.4-3.9,8.5-6.3,14.2-6.3c10.5,0,19,8.5,19,19c0,10.5-8.5,19-19,19c-5.6,0-10.6-2.4-14.2-6.3h-50.4
	c-5.8,28.9-31.4,50.6-62,50.6c-34.9,0-63.3-28.3-63.3-63.3c0-30.6,21.8-56.2,50.6-62v26.2c-14.7,5.2-25.3,19.4-25.3,35.8
	c0,20.9,17.1,38,38,38s38-17.1,38-38V171.8z M134.3,32.6c20.9,0,38,17.1,38,38h25.3c0-34.9-28.3-63.3-63.3-63.3S71.1,35.6,71.1,70.6
	c0,18.1,7.6,34.3,19.6,45.8l-29.7,49.4c-8.6,1.8-15.2,9.5-15.2,18.7c0,10.5,8.5,19,19,19s19-8.5,19-19c0-2-0.3-3.9-0.9-5.7
	l42.8-71.2c-16.7-3.9-29.2-19-29.2-37C96.4,49.7,113.5,32.6,134.3,32.6z M191.3,146.5c-8.1,0-15.6,2.5-21.8,6.8l-38.6-64.2
	c-8.9-1.5-15.6-9.2-15.6-18.6c0-10.5,8.5-19,19-19c10.5,0,19,8.5,19,19c0,1.9-0.3,3.7-0.8,5.4l27.7,46.2c3.5-0.6,7.2-1,11-1
	c34.9,0,63.3,28.3,63.3,63.3s-28.3,63.3-63.3,63.3c-23.4,0-43.9-12.8-54.8-31.6h33.8c6.1,4,13.3,6.3,21,6.3c20.9,0,38-17.1,38-38
	S212.2,146.5,191.3,146.5z"
    />
  </svg>
);

export default WebhookIcon;
