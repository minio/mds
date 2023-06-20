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

const AudioIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m192.1,207.2v-.03c-.09,0-.21-.07-.26-.35-.07-.44-.07-16.8-.07-16.8,0,0,.09-.43.33-.46h0c1.72-.58,3.44-1.24,5.12-1.97,7.46-3.24,14.21-7.92,19.87-13.76,5.78-5.92,10.36-12.9,13.49-20.55,3.3-8.02,4.99-16.61,4.96-25.28.02-8.67-1.66-17.27-4.97-25.29-3.14-7.65-7.71-14.63-13.49-20.55-5.66-5.83-12.41-10.51-19.87-13.75-1.65-.71-3.33-1.36-5.01-1.92-.03-.01-.07-.02-.1-.03h0c-.14-.06-.24-.19-.26-.35-.08-.43-.37-17.33-.37-17.33,0,0,.33.03.63.08v-.05c4.06,1.03,8.03,2.38,11.87,4.05,9.48,4.12,18.06,10.06,25.26,17.48,7.29,7.46,13.07,16.26,17.02,25.91,4.15,10.07,6.28,20.85,6.25,31.74.02,10.89-2.1,21.68-6.25,31.75-3.96,9.65-9.73,18.46-17.02,25.92-7.2,7.42-15.78,13.36-25.26,17.48-3.84,1.67-7.81,3.02-11.87,4.05h0Zm-121.45-32.35c-6.12-2.33-7.77-3.48-7.77-7.77v-71.73c0-4.29,3.52-6.09,7.77-7.77l91.43-35.87c4.29,0,7.77,3.48,7.77,7.77h0v137.49c0,4.29-3.48,7.77-7.77,7.77h0l-91.43-29.89Zm-54.51-.37c-6.98,0-12.64-5.66-12.64-12.64h0v-60.51c0-6.98,5.66-12.64,12.64-12.64h20.85c6.98,0,12.64,5.66,12.64,12.64v60.51c0,6.98-5.66,12.64-12.64,12.64h-20.85Zm168.7-13.84c0-1.21,0-65.23,0-65.23,0,0-.15-1.22.9-1.31h.13s.03,0,.05,0c4.34.01,8.63.92,12.6,2.66,3.92,1.72,7.47,4.19,10.45,7.27,3.01,3.11,5.4,6.76,7.03,10.77,1.72,4.19,2.6,8.67,2.58,13.2.01,4.52-.87,9.01-2.58,13.19-1.63,4.01-4.02,7.67-7.03,10.78-2.97,3.08-6.52,5.55-10.45,7.27-4.03,1.76-8.38,2.67-12.78,2.66,0,0-.89-.07-.9-1.27h0Z" />
  </svg>
);

export default AudioIcon;
