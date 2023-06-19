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

import React, { SVGProps } from "react";

const CancelledAudioIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`min-icon`}
      fill={"currentcolor"}
      {...props}
      viewBox="0 0 256 256"
    >
      <g id="a">
        <g>
          <path d="m109.41,92.6c-3.65,1.45-6.67,3-6.67,6.7v43.71l78.84-78.84-72.17,28.43Z" />
          <path d="m91.29,106.48c0-7.07-5.73-12.8-12.8-12.8h-13.95c-7.07,0-12.8,5.73-12.8,12.8v48.52c0,7.07,5.73,12.8,12.8,12.8h13.4l13.35-13.35v-47.97Z" />
          <path d="m129.7,174.51l58.21,19.11c3.69-.01,6.68-3.01,6.68-6.7v-77.29l-64.88,64.88Z" />
        </g>
        <path d="m128,1.64C58.22,1.64,1.65,58.21,1.64,128c0,69.78,56.57,126.36,126.35,126.36,69.78,0,126.36-56.57,126.36-126.35h0C254.36,58.22,197.78,1.65,128,1.64m.75,226.19c-55.13,0-99.83-44.7-99.83-99.83S73.62,28.17,128.75,28.17s99.83,44.7,99.83,99.83-44.7,99.83-99.83,99.83h0" />
        <rect
          x="30.31"
          y="120.75"
          width="221.82"
          height="25.59"
          transform="translate(-53.07 138.97) rotate(-45)"
        />
      </g>
    </svg>
  );
};

export default CancelledAudioIcon;
