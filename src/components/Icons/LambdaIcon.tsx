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

const LambdaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <defs>
      <clipPath id="prefix__a">
        <path d="M0 0h256v256H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#prefix__a)">
      <path fill="none" d="M0 0h256v256H0z" />
      <g data-name="LambdaIcon">
        <path data-name="Rect\xE1ngulo 847" fill="none" d="M0 0h256v256H0z" />
        <path
          data-name="Trazado 442"
          d="M40.266 0c-9.543 0-17.279 6.878-17.279 15.363S30.723 30.73 40.266 30.73c26.265 0 36.01 14.872 46.032 34.353l1.659 3.134c1.382 2.643 4.354 8.542 8.363 16.408L1.975 233.094c-4.327 7.346-1.317 16.42 6.8 20.5s18.415 1.7 23.265-5.384l81.9-128.623c21.91 44 49.488 99.494 49.972 100.415 12.921 27.82 47.568 42.291 79.9 33.369 9.123-2.512 14.229-11.123 11.4-19.235s-12.511-12.651-21.634-10.14c-15.631 4.28-32.31-2.987-38.084-16.593-2.765-5.531-67.32-135.751-76.029-152.282l-1.521-2.95C109.038 35.336 90.86 0 40.266 0Z"
        />
      </g>
    </g>
  </svg>
);

export default LambdaIcon;
