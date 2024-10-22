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

const PlugZap2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.10392 0.786718C9.4058 1.02823 9.45475 1.46873 9.21324 1.77061L8.78974 2.29999H9.3333C9.60238 2.29999 9.84765 2.45423 9.96421 2.69676C10.0808 2.93929 10.048 3.22716 9.87991 3.43728L8.54658 5.10395C8.30507 5.40583 7.86456 5.45477 7.56268 5.21327C7.2608 4.97176 7.21185 4.53126 7.45336 4.22937L7.87686 3.69999H7.3333C7.06422 3.69999 6.81895 3.54575 6.70239 3.30323C6.58582 3.0607 6.6186 2.77283 6.78669 2.56271L8.12003 0.89604C8.36153 0.594157 8.80204 0.545212 9.10392 0.786718ZM6.66663 6.63333C7.05323 6.63333 7.36663 6.94673 7.36663 7.33333V8.63333H8.6333V7.33333C8.6333 6.94673 8.9467 6.63333 9.3333 6.63333C9.7199 6.63333 10.0333 6.94673 10.0333 7.33333V8.63333H10.6666C11.0532 8.63333 11.3666 8.94673 11.3666 9.33333V10.6667C11.3666 12.1755 10.2038 13.3494 8.69997 13.3665V14.6667C8.69997 15.0533 8.38657 15.3667 7.99997 15.3667C7.61337 15.3667 7.29997 15.0533 7.29997 14.6667V13.3665C5.79615 13.3494 4.6333 12.1755 4.6333 10.6667V9.33333C4.6333 8.94673 4.9467 8.63333 5.3333 8.63333H5.96663V7.33333C5.96663 6.94673 6.28003 6.63333 6.66663 6.63333ZM6.0333 10.0333V10.6667C6.0333 11.4134 6.58657 11.9667 7.3333 11.9667H8.66663C9.41337 11.9667 9.96663 11.4134 9.96663 10.6667V10.0333H6.0333Z"
      fill="currentColor"
    />
  </svg>
);
export default PlugZap2Icon;
