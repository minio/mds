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

const AlbumIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33332 2.69999C2.98354 2.69999 2.69999 2.98354 2.69999 3.33332V12.6667C2.69999 13.0164 2.98354 13.3 3.33332 13.3H12.6667C13.0164 13.3 13.3 13.0164 13.3 12.6667V3.33332C13.3 2.98354 13.0164 2.69999 12.6667 2.69999H12.0333V7.33332C12.0333 7.61644 11.8628 7.87169 11.6012 7.98004C11.3396 8.08838 11.0385 8.02849 10.8383 7.8283L9.33332 6.32327L7.8283 7.8283C7.6281 8.02849 7.32701 8.08838 7.06544 7.98004C6.80387 7.87169 6.63332 7.61644 6.63332 7.33332V2.69999H3.33332ZM3.33332 1.29999C2.21034 1.29999 1.29999 2.21034 1.29999 3.33332V12.6667C1.29999 13.7896 2.21034 14.7 3.33332 14.7H12.6667C13.7896 14.7 14.7 13.7896 14.7 12.6667V3.33332C14.7 2.21034 13.7896 1.29999 12.6667 1.29999H3.33332ZM8.03332 2.69999V5.64337L8.83835 4.83835C9.11171 4.56498 9.55493 4.56498 9.8283 4.83835L10.6333 5.64337V2.69999H8.03332Z"
      fill="currentColor"
    />
  </svg>
);
export default AlbumIcon;
