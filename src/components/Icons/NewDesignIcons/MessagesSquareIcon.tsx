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

const MessagesSquareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66666 2.03336C2.31993 2.03336 2.03333 2.31996 2.03333 2.6667V8.31008L3.50502 6.83839C3.6363 6.70711 3.81435 6.63336 4 6.63336H8C8.16797 6.63336 8.32906 6.56664 8.44783 6.44786C8.5666 6.32909 8.63333 6.168 8.63333 6.00003V2.6667C8.63333 2.49872 8.5666 2.33763 8.44783 2.21886C8.32906 2.10009 8.16797 2.03336 8 2.03336H2.66666ZM0.633331 2.6667C0.633331 1.54676 1.54673 0.633362 2.66666 0.633362H8C8.53927 0.633362 9.05646 0.847587 9.43778 1.22891C9.8191 1.61023 10.0333 2.12742 10.0333 2.6667V6.00003C10.0333 6.5393 9.8191 7.05649 9.43778 7.43781C9.05646 7.81914 8.53927 8.03336 8 8.03336H4.28995L1.82831 10.495C1.62811 10.6952 1.32702 10.7551 1.06545 10.6467C0.803881 10.5384 0.633331 10.2832 0.633331 10V2.6667ZM11.3 6.00003C11.3 5.61343 11.6134 5.30003 12 5.30003H13.3333C13.8726 5.30003 14.3898 5.51425 14.7711 5.89558C15.1524 6.2769 15.3667 6.79409 15.3667 7.33336V14.6667C15.3667 14.9498 15.1961 15.2051 14.9345 15.3134C14.673 15.4218 14.3719 15.3619 14.1717 15.1617L11.71 12.7H8C7.46072 12.7 6.94354 12.4858 6.56221 12.1045C6.18089 11.7232 5.96666 11.206 5.96666 10.6667V10C5.96666 9.61343 6.28006 9.30003 6.66666 9.30003C7.05326 9.30003 7.36666 9.61343 7.36666 10V10.6667C7.36666 10.8347 7.43339 10.9958 7.55216 11.1145C7.67094 11.2333 7.83203 11.3 8 11.3H12C12.1856 11.3 12.3637 11.3738 12.495 11.5051L13.9667 12.9767V7.33336C13.9667 7.16539 13.8999 7.0043 13.7812 6.88553C13.6624 6.76675 13.5013 6.70003 13.3333 6.70003H12C11.6134 6.70003 11.3 6.38663 11.3 6.00003Z"
      fill="currentColor"
    />
  </svg>
);
export default MessagesSquareIcon;
