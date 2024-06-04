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

const FlaskConicalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.9668 1.33333C4.9668 0.946732 5.2802 0.633331 5.6668 0.633331H10.3335C10.7201 0.633331 11.0335 0.946732 11.0335 1.33333C11.0335 1.71993 10.7201 2.03333 10.3335 2.03333H10.0779V5.86556C10.0779 6.05939 10.1212 6.25076 10.2047 6.42567L13.3606 13.0357C13.8993 14.1639 13.0767 15.4681 11.8265 15.4681H3.86785C2.6176 15.4681 1.79506 14.1639 2.33374 13.0357L5.48961 6.42567C5.57312 6.25076 5.61646 6.05939 5.61646 5.86556V2.03155C5.25336 2.00575 4.9668 1.70301 4.9668 1.33333ZM7.01646 2.03333H8.67787V5.86556C8.67787 6.26812 8.76789 6.66558 8.94133 7.02886L10.344 9.96667H5.35038L6.753 7.02886C6.92645 6.66558 7.01646 6.26812 7.01646 5.86556V2.03333ZM4.68196 11.3667L3.59713 13.6389C3.50207 13.838 3.64722 14.0681 3.86785 14.0681H11.8265C12.0471 14.0681 12.1923 13.838 12.0972 13.6389L11.0124 11.3667H4.68196Z"
      fill="currentColor"
    />
  </svg>
);
export default FlaskConicalIcon;
