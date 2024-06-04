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

const CuboidIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.9098 1.22463C10.0165 0.570231 8.81428 0.527556 7.87689 1.11697L1.5464 5.0975C1.35579 5.21735 1.19405 5.37169 1.06722 5.54957C1.00537 5.59818 0.950738 5.65813 0.906606 5.72865C0.828485 5.85348 0.794546 5.99344 0.800577 6.13021C0.768204 6.26168 0.751312 6.39801 0.751312 6.53664V10.7215C0.751312 11.2544 1.00121 11.7565 1.42638 12.0778L4.97582 14.76C5.38686 15.0707 5.86651 15.2497 6.35709 15.2947C6.45043 15.3408 6.55552 15.3667 6.66666 15.3667C6.79294 15.3667 6.91142 15.3332 7.01371 15.2747C7.36855 15.2203 7.71563 15.0946 8.03289 14.8966L14.5602 10.824C15.0579 10.5135 15.3603 9.96834 15.3603 9.38173V5.34712C15.3603 5.09708 15.3053 4.85395 15.2031 4.63314C15.1892 4.55331 15.1611 4.47456 15.1179 4.40047C15.0547 4.29221 14.9669 4.20721 14.8658 4.14841C14.8039 4.0862 14.7369 4.02842 14.665 3.97576L10.9098 1.22463ZM13.2543 4.67773L10.0824 2.35398C9.6523 2.0389 9.07344 2.01836 8.62211 2.30215L2.70055 6.02554L6.67928 8.51546L13.2543 4.67773ZM2.15131 7.33337V10.7215C2.15131 10.8155 2.19541 10.9041 2.27044 10.9608L5.81988 13.6431C5.86705 13.6788 5.9161 13.7108 5.96666 13.7392V9.72104L2.15131 7.33337ZM7.36666 13.6622L13.8191 9.63625C13.907 9.58146 13.9603 9.48525 13.9603 9.38173V5.88664L7.36666 9.73528V13.6622Z"
      fill="currentColor"
    />
  </svg>
);
export default CuboidIcon;
