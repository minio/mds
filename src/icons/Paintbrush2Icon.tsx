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

const Paintbrush2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.3 1.3333C3.3 0.946701 3.6134 0.633301 4 0.633301H12C12.3866 0.633301 12.7 0.946701 12.7 1.3333V7.30075C13.0711 7.31815 13.3667 7.62454 13.3667 7.99997V9.3333C13.3667 9.87257 13.1524 10.3898 12.7711 10.7711C12.3898 11.1524 11.8726 11.3666 11.3333 11.3666H10.0333V13.2666C10.0333 13.8059 9.8191 14.3231 9.43778 14.7044C9.05646 15.0857 8.53927 15.3 8 15.3C7.46072 15.3 6.94354 15.0857 6.56221 14.7044C6.18089 14.3231 5.96666 13.8059 5.96666 13.2666V11.3666H4.66666C3.54673 11.3666 2.63333 10.4532 2.63333 9.3333V7.99997C2.63333 7.62454 2.92888 7.31815 3.3 7.30075V1.3333ZM4.03333 8.69997H11.9667V9.3333C11.9667 9.50127 11.8999 9.66236 11.7812 9.78113C11.6624 9.89991 11.5013 9.96663 11.3333 9.96663H9.33333C8.94673 9.96663 8.63333 10.28 8.63333 10.6666V13.2666C8.63333 13.4346 8.5666 13.5957 8.44783 13.7145C8.32906 13.8332 8.16797 13.9 8 13.9C7.83203 13.9 7.67094 13.8332 7.55216 13.7145C7.43339 13.5957 7.36666 13.4346 7.36666 13.2666V10.6666C7.36666 10.28 7.05326 9.96663 6.66666 9.96663H4.66666C4.31993 9.96663 4.03333 9.68003 4.03333 9.3333V8.69997ZM11.3 7.29997H4.7V2.0333H5.96666V2.66663C5.96666 3.05323 6.28006 3.36663 6.66666 3.36663C7.05326 3.36663 7.36666 3.05323 7.36666 2.66663V2.0333H8.63333V3.99997C8.63333 4.38657 8.94673 4.69997 9.33333 4.69997C9.71993 4.69997 10.0333 4.38657 10.0333 3.99997V2.0333H11.3V7.29997Z"
      fill="currentColor"
    />
  </svg>
);
export default Paintbrush2Icon;
