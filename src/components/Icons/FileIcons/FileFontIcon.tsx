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

const FileFontIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g transform="translate(3160.369 -4758.899)">
      <path
        d="M188.5,255.974H14.5A14.5,14.5,0,0,1,0,241.475V14.5A14.5,14.5,0,0,1,14.5,0H128.834l.192.265L203,74.29V241.475a14.5,14.5,0,0,1-14.5,14.5Z"
        transform="translate(-3134.369 4758.924)"
        fill="#3f3f3f"
      />
      <path
        d="M83.177,74.2H147.99L73.787,0V64.8a10.156,10.156,0,0,0,9.39,9.4"
        transform="translate(-3079.697 4758.899)"
        fill="#7b7777"
      />
      <path
        d="M168.437,90.162c-4.8,12.829-8.841,25.181-13.641,37.265a60.568,60.568,0,0,1-9.516,17.461c-4.8,5.5-12.71,8.873-21.264,9.081-6.6,0-13.117-2.456-13.117-7.986.24-3.389,3.552-6.167,7.888-6.616a4.274,4.274,0,0,1,3.6,1.638c3.257,4.646,6.338,7.369,7.8,7.369,1.447,0,2.575-1.572,4.975-8.262l17.067-49.945H140.044c-.861-1.94-.074-4.09,1.972-5.39h12.176A76.118,76.118,0,0,1,163.2,67.3c5.826-8.384,15.173-15.009,28.042-15.009,9.77,0,13.8,3.752,13.8,8.464-.017,3.776-3.526,7-8.322,7.64-2.056,0-3.076-1.226-3.769-3.008-2.225-6.616-5.066-8.6-6.772-8.6s-4.306,2.456-7.122,7.65a109.682,109.682,0,0,0-8.576,20.268h14.835c.959,1.951.116,4.158-2.056,5.39H168.431Z"
        transform="translate(-3190.843 4815.778)"
        fill="#fff"
      />
    </g>
  </svg>
);

export default FileFontIcon;
