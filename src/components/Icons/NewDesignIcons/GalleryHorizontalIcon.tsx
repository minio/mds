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

const GalleryHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.33333 1.29999C1.71993 1.29999 2.03333 1.61339 2.03333 1.99999V14C2.03333 14.3866 1.71993 14.7 1.33333 14.7C0.946732 14.7 0.633331 14.3866 0.633331 14V1.99999C0.633331 1.61339 0.946732 1.29999 1.33333 1.29999ZM5.33333 2.69999C4.98355 2.69999 4.7 2.98354 4.7 3.33332V12.6667C4.7 13.0164 4.98355 13.3 5.33333 13.3H10.6667C11.0164 13.3 11.3 13.0164 11.3 12.6667V3.33332C11.3 2.98354 11.0164 2.69999 10.6667 2.69999H5.33333ZM3.3 3.33332C3.3 2.21034 4.21035 1.29999 5.33333 1.29999H10.6667C11.7896 1.29999 12.7 2.21034 12.7 3.33332V12.6667C12.7 13.7896 11.7896 14.7 10.6667 14.7H5.33333C4.21035 14.7 3.3 13.7896 3.3 12.6667V3.33332ZM14.6667 1.29999C15.0533 1.29999 15.3667 1.61339 15.3667 1.99999V14C15.3667 14.3866 15.0533 14.7 14.6667 14.7C14.2801 14.7 13.9667 14.3866 13.9667 14V1.99999C13.9667 1.61339 14.2801 1.29999 14.6667 1.29999Z"
      fill="currentColor"
    />
  </svg>
);
export default GalleryHorizontalIcon;
