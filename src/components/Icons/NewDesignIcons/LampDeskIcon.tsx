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

const LampDeskIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.83835 0.838387C7.11171 0.56502 7.55493 0.56502 7.8283 0.838387L9.70004 2.71013L14.1923 3.99363C14.4308 4.06177 14.6154 4.25101 14.6776 4.49111C14.7398 4.7312 14.6703 4.98629 14.495 5.16167L9.16163 10.495C8.98625 10.6704 8.73116 10.7399 8.49107 10.6776C8.25097 10.6154 8.06173 10.4308 7.99359 10.1923L6.71009 5.70008L6.33332 5.32331L3.51839 8.13825L5.09928 11.3H5.99999C6.53926 11.3 7.05645 11.5143 7.43777 11.8956C7.81909 12.2769 8.03332 12.7941 8.03332 13.3334V14.6667C8.03332 15.0533 7.71992 15.3667 7.33332 15.3667H1.99999C1.61339 15.3667 1.29999 15.0533 1.29999 14.6667V13.3334C1.29999 12.2134 2.21339 11.3 3.33332 11.3H3.53403L2.04056 8.31308C1.90581 8.04359 1.95863 7.71811 2.17168 7.50505L5.34337 4.33336L4.83835 3.82834C4.70707 3.69706 4.63332 3.51901 4.63332 3.33336C4.63332 3.14771 4.70707 2.96966 4.83835 2.83839L6.83835 0.838387ZM7.33332 4.34341L8.34337 3.33336L7.33332 2.32331L6.32327 3.33336L7.33332 4.34341ZM9.53705 4.11958L8.11954 5.53709L9.0129 8.66384L12.6638 5.01294L9.53705 4.11958ZM4.65258 12.7H3.33332C2.98659 12.7 2.69999 12.9866 2.69999 13.3334V13.9667H6.63332V13.3334C6.63332 13.1654 6.5666 13.0043 6.44782 12.8855C6.32905 12.7668 6.16796 12.7 5.99999 12.7H4.68181C4.67206 12.7002 4.66231 12.7002 4.65258 12.7Z"
      fill="currentColor"
    />
  </svg>
);
export default LampDeskIcon;
