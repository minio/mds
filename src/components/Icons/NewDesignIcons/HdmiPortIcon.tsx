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

const HdmiPortIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.03359 5.03365C1.28989 4.77735 1.6375 4.63336 1.99997 4.63336H14C14.3624 4.63336 14.71 4.77735 14.9663 5.03365C15.2226 5.28995 15.3666 5.63757 15.3666 6.00003V8.6667C15.3666 9.02916 15.2226 9.37677 14.9663 9.63307C14.71 9.88937 14.3624 10.0334 14 10.0334H13.6232L12.4949 11.1617C12.3637 11.2929 12.1856 11.3667 12 11.3667H3.99997C3.81432 11.3667 3.63627 11.2929 3.50499 11.1617L2.37668 10.0334H1.99997C1.6375 10.0334 1.28989 9.88937 1.03359 9.63307C0.777288 9.37677 0.633301 9.02916 0.633301 8.6667V6.00003C0.633301 5.63757 0.777288 5.28995 1.03359 5.03365ZM2.0333 6.03336V8.63336H2.66663C2.85229 8.63336 3.03033 8.70711 3.16161 8.83839L4.28992 9.9667H11.71L12.8383 8.83839C12.9696 8.70711 13.1476 8.63336 13.3333 8.63336H13.9666V6.03336H2.0333ZM4.29997 8.00003C4.29997 7.61343 4.61337 7.30003 4.99997 7.30003H11C11.3866 7.30003 11.7 7.61343 11.7 8.00003C11.7 8.38663 11.3866 8.70003 11 8.70003H4.99997C4.61337 8.70003 4.29997 8.38663 4.29997 8.00003Z"
      fill="currentColor"
    />
  </svg>
);
export default HdmiPortIcon;
