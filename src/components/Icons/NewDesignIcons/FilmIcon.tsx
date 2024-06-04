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

const FilmIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.69999C2.9836 2.69999 2.70005 2.98354 2.70005 3.33332V4.29999H3.96672V2.69999H3.33338ZM3.33338 1.29999C2.2104 1.29999 1.30005 2.21034 1.30005 3.33332V12.6667C1.30005 13.7896 2.2104 14.7 3.33338 14.7H12.6667C13.7897 14.7 14.7 13.7896 14.7 12.6667V3.33332C14.7 2.21034 13.7897 1.29999 12.6667 1.29999H3.33338ZM5.36672 2.69999V7.29999H10.6334V2.69999H5.36672ZM12.0334 2.69999V4.29999H13.3V3.33332C13.3 2.98354 13.0165 2.69999 12.6667 2.69999H12.0334ZM13.3 5.69999H12.0334V7.29999H13.3V5.69999ZM13.3 8.69999H12.0334V10.3H13.3V8.69999ZM13.3 11.7H12.0334V13.3H12.6667C13.0165 13.3 13.3 13.0164 13.3 12.6667V11.7ZM10.6334 13.3V8.69999H5.36672V13.3H10.6334ZM3.96672 13.3V11.7H2.70005V12.6667C2.70005 13.0164 2.9836 13.3 3.33338 13.3H3.96672ZM2.70005 10.3H3.96672V8.69999H2.70005V10.3ZM2.70005 7.29999H3.96672V5.69999H2.70005V7.29999Z"
      fill="currentColor"
    />
  </svg>
);
export default FilmIcon;
