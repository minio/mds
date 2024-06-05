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

const GalleryHorizontalEndIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2.69999C7.65022 2.69999 7.36666 2.98354 7.36666 3.33332V12.6667C7.36666 13.0164 7.65022 13.3 8 13.3H13.3333C13.6831 13.3 13.9667 13.0164 13.9667 12.6667V3.33332C13.9667 2.98354 13.6831 2.69999 13.3333 2.69999H8ZM5.96666 3.33332C5.96666 2.21034 6.87702 1.29999 8 1.29999H13.3333C14.4563 1.29999 15.3667 2.21034 15.3667 3.33332V12.6667C15.3667 13.7896 14.4563 14.7 13.3333 14.7H8C6.87702 14.7 5.96666 13.7896 5.96666 12.6667V3.33332ZM4 2.63332C4.3866 2.63332 4.7 2.94672 4.7 3.33332V12.6667C4.7 13.0533 4.3866 13.3667 4 13.3667C3.6134 13.3667 3.3 13.0533 3.3 12.6667V3.33332C3.3 2.94672 3.6134 2.63332 4 2.63332ZM1.33333 3.96665C1.71993 3.96665 2.03333 4.28006 2.03333 4.66665V11.3333C2.03333 11.7199 1.71993 12.0333 1.33333 12.0333C0.946732 12.0333 0.633331 11.7199 0.633331 11.3333V4.66665C0.633331 4.28006 0.946732 3.96665 1.33333 3.96665Z"
      fill="currentColor"
    />
  </svg>
);
export default GalleryHorizontalEndIcon;
