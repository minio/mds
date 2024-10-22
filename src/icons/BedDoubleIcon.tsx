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

const BedDoubleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.99997 3.36666C3.832 3.36666 3.67091 3.43339 3.55213 3.55216C3.43336 3.67093 3.36663 3.83202 3.36663 3.99999V5.96666H7.29997V3.36666H3.99997ZM3.99997 1.96666C3.46069 1.96666 2.94351 2.18089 2.56218 2.56221C2.18086 2.94353 1.96663 3.46072 1.96663 3.99999V6.09095C1.692 6.19166 1.43966 6.3514 1.22885 6.56221C0.847526 6.94353 0.633301 7.46072 0.633301 7.99999V13.3333C0.633301 13.7199 0.946701 14.0333 1.3333 14.0333C1.7199 14.0333 2.0333 13.7199 2.0333 13.3333V12.7H13.9666V13.3333C13.9666 13.7199 14.28 14.0333 14.6666 14.0333C15.0532 14.0333 15.3666 13.7199 15.3666 13.3333V7.99999C15.3666 7.46072 15.1524 6.94353 14.7711 6.56221C14.5603 6.3514 14.3079 6.19166 14.0333 6.09095V3.99999C14.0333 3.46072 13.8191 2.94353 13.4377 2.56221C13.0564 2.18089 12.5392 1.96666 12 1.96666H3.99997ZM8.69997 3.36666V5.96666H12.6333V3.99999C12.6333 3.83202 12.5666 3.67093 12.4478 3.55216C12.329 3.43339 12.1679 3.36666 12 3.36666H8.69997ZM2.66663 7.36666C2.49866 7.36666 2.33757 7.43339 2.2188 7.55216C2.10003 7.67093 2.0333 7.83202 2.0333 7.99999V11.3H13.9666V7.99999C13.9666 7.83202 13.8999 7.67093 13.7811 7.55216C13.6624 7.43339 13.5013 7.36666 13.3333 7.36666H2.66663Z"
      fill="currentColor"
    />
  </svg>
);
export default BedDoubleIcon;
