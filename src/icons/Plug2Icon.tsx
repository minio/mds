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

const Plug2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.99997 0.633301C6.38657 0.633301 6.69997 0.946701 6.69997 1.3333V4.6333H9.29997V1.3333C9.29997 0.946701 9.61337 0.633301 9.99997 0.633301C10.3866 0.633301 10.7 0.946701 10.7 1.3333V4.6333H12.6666C13.0532 4.6333 13.3666 4.9467 13.3666 5.3333C13.3666 5.70873 13.0711 6.01512 12.7 6.03252V7.3333C12.7 8.57982 12.2048 9.77528 11.3234 10.6567C10.6087 11.3714 9.68744 11.8322 8.69997 11.9809V14.6666C8.69997 15.0532 8.38657 15.3666 7.99997 15.3666C7.61337 15.3666 7.29997 15.0532 7.29997 14.6666V11.9809C6.31249 11.8322 5.39128 11.3714 4.67657 10.6567C3.79514 9.77528 3.29997 8.57982 3.29997 7.3333V6.03252C2.92885 6.01512 2.6333 5.70873 2.6333 5.3333C2.6333 4.9467 2.9467 4.6333 3.3333 4.6333H5.29997V1.3333C5.29997 0.946701 5.61337 0.633301 5.99997 0.633301ZM4.69997 6.0333V7.3333C4.69997 8.20851 5.04765 9.04788 5.66652 9.66675C6.28539 10.2856 7.12475 10.6333 7.99997 10.6333C8.87518 10.6333 9.71455 10.2856 10.3334 9.66675C10.9523 9.04788 11.3 8.20851 11.3 7.3333V6.0333H4.69997Z"
      fill="currentColor"
    />
  </svg>
);
export default Plug2Icon;
