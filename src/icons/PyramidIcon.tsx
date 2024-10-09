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

const PyramidIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.93185 0.636577C7.73534 0.64639 7.54299 0.698536 7.36806 0.789762C7.17295 0.891514 7.00529 1.03887 6.87935 1.21931L6.87752 1.22193L0.877525 9.90193L0.876445 9.9035C0.769992 10.0584 0.696633 10.2336 0.660956 10.4181C0.625278 10.6027 0.628049 10.7926 0.669093 10.976C0.710138 11.1594 0.788574 11.3324 0.8995 11.4841C1.01043 11.6359 1.15146 11.7631 1.31378 11.8578L6.99287 15.1012C7.29954 15.2759 7.64706 15.3681 8.00001 15.3681C8.35296 15.3681 8.69984 15.2762 9.00651 15.1015L14.6805 11.8612L14.6828 11.8598C14.8471 11.7652 14.9899 11.6374 15.1021 11.4846C15.2143 11.3317 15.2935 11.1572 15.3347 10.9721C15.3758 10.787 15.378 10.5954 15.341 10.4094C15.3043 10.2242 15.2295 10.0487 15.1215 9.89389C15.1211 9.89321 15.1206 9.89252 15.1201 9.89184L9.12236 1.22173L9.12068 1.21931C8.99473 1.03887 8.82708 0.891514 8.63197 0.789762C8.45704 0.698536 8.26468 0.64639 8.06818 0.636577C8.04575 0.63441 8.02301 0.633301 8.00001 0.633301C7.97701 0.633301 7.95428 0.63441 7.93185 0.636577ZM7.30001 3.07284L2.05087 10.6666L7.30001 13.6643V3.07284ZM8.70001 13.6643V3.07203L13.9524 10.6647L8.70001 13.6643Z"
      fill="currentColor"
    />
  </svg>
);
export default PyramidIcon;
