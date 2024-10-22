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

const GalleryThumbnailsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33332 2.69999C2.98354 2.69999 2.69999 2.98354 2.69999 3.33332V9.99999C2.69999 10.3498 2.98354 10.6333 3.33332 10.6333H12.6667C13.0164 10.6333 13.3 10.3498 13.3 9.99999V3.33332C13.3 2.98354 13.0164 2.69999 12.6667 2.69999H3.33332ZM1.29999 3.33332C1.29999 2.21034 2.21034 1.29999 3.33332 1.29999H12.6667C13.7896 1.29999 14.7 2.21034 14.7 3.33332V9.99999C14.7 11.123 13.7896 12.0333 12.6667 12.0333H3.33332C2.21034 12.0333 1.29999 11.123 1.29999 9.99999V3.33332ZM1.96665 14C1.96665 13.6134 2.28006 13.3 2.66665 13.3H3.33332C3.71992 13.3 4.03332 13.6134 4.03332 14C4.03332 14.3866 3.71992 14.7 3.33332 14.7H2.66665C2.28006 14.7 1.96665 14.3866 1.96665 14ZM5.29999 14C5.29999 13.6134 5.61339 13.3 5.99999 13.3H6.66665C7.05325 13.3 7.36665 13.6134 7.36665 14C7.36665 14.3866 7.05325 14.7 6.66665 14.7H5.99999C5.61339 14.7 5.29999 14.3866 5.29999 14ZM8.63332 14C8.63332 13.6134 8.94672 13.3 9.33332 13.3H9.99999C10.3866 13.3 10.7 13.6134 10.7 14C10.7 14.3866 10.3866 14.7 9.99999 14.7H9.33332C8.94672 14.7 8.63332 14.3866 8.63332 14ZM11.9667 14C11.9667 13.6134 12.2801 13.3 12.6667 13.3H13.3333C13.7199 13.3 14.0333 13.6134 14.0333 14C14.0333 14.3866 13.7199 14.7 13.3333 14.7H12.6667C12.2801 14.7 11.9667 14.3866 11.9667 14Z"
      fill="currentColor"
    />
  </svg>
);
export default GalleryThumbnailsIcon;
