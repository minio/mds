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

const FileConfigIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g transform="translate(48 60.772)">
      <g transform="translate(-22 -60.772)">
        <path
          d="M188.5,255.974H14.5A14.5,14.5,0,0,1,0,241.475V14.5A14.5,14.5,0,0,1,14.5,0H128.834l.192.265L203,74.29V241.475a14.5,14.5,0,0,1-14.5,14.5Z"
          transform="translate(0 0.026)"
          fill="#677993"
        />
        <path
          d="M83.177,74.2H147.99L73.787,0V64.8a10.156,10.156,0,0,0,9.39,9.4"
          transform="translate(54.673)"
          fill="#8299b9"
        />
        <g transform="translate(45.771 104.477)">
          <path
            d="M201.735,66.669l-13.572-3.741a3.085,3.085,0,0,1-1.885-1.785l-3.533-8.505a3.075,3.075,0,0,1,.079-2.59l7.03-12.233a2.256,2.256,0,0,0-.223-2.4s-1.749-2.058-3.26-3.569c-1.489-1.511-3.554-3.267-3.554-3.267a2.247,2.247,0,0,0-2.4-.23l-12.233,6.95a3.1,3.1,0,0,1-2.6.073l-8.505-3.554a3.094,3.094,0,0,1-1.785-1.9l-3.676-13.989c-.216-.792-1.05-1.929-1.856-1.929h-9.649c-.813,0-1.655,1.122-1.871,1.9L134.5,29.669a3.251,3.251,0,0,1-1.792,1.986l-8.527,3.569a3.1,3.1,0,0,1-2.6-.058l-12.2-7.008a2.283,2.283,0,0,0-2.41.216s-2.051,1.726-3.547,3.252c-1.54,1.511-3.281,3.569-3.281,3.569a2.288,2.288,0,0,0-.223,2.4l6.966,12.247a3.078,3.078,0,0,1,.064,2.591l-3.576,8.52a3.056,3.056,0,0,1-1.892,1.77L87.908,66.409a2.15,2.15,0,0,0-1.5,1.856l-.023,9.629a2.19,2.19,0,0,0,1.49,1.871l13.556,3.741a3.093,3.093,0,0,1,1.878,1.785l3.541,8.52a3.054,3.054,0,0,1-.072,2.591l-7.038,12.233a2.258,2.258,0,0,0,.223,2.4s1.749,2.058,3.245,3.6c1.511,1.468,3.555,3.224,3.555,3.224a2.231,2.231,0,0,0,2.4.23l12.254-6.951a3.146,3.146,0,0,1,2.6-.072l8.527,3.569a3.073,3.073,0,0,1,1.777,1.885l3.656,13.729a2.24,2.24,0,0,0,1.854,1.64h9.643a2.276,2.276,0,0,0,1.871-1.627l3.756-13.644a3.112,3.112,0,0,1,1.8-1.9l8.52-3.54a3.106,3.106,0,0,1,2.6.072l12.189,7.023a2.272,2.272,0,0,0,2.4-.216s2.058-1.726,3.6-3.252c1.475-1.5,3.237-3.554,3.237-3.554a2.273,2.273,0,0,0,.23-2.4L182.71,96.6a3.109,3.109,0,0,1-.065-2.6l3.562-8.505a3.081,3.081,0,0,1,1.892-1.785l13.593-3.656A2.2,2.2,0,0,0,203.2,78.2l.022-9.657a2.174,2.174,0,0,0-1.49-1.872ZM158.149,86.644A18.933,18.933,0,1,1,158.2,59.89a18.978,18.978,0,0,1-.052,26.754Z"
            transform="translate(-86.382 -13.996)"
            fill="#fff"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default FileConfigIcon;
