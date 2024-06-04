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

const PictureInPictureIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838387 1.83833C1.11175 1.56496 1.55497 1.56496 1.82834 1.83833L4.63336 4.64335V2.99997C4.63336 2.61337 4.94676 2.29997 5.33336 2.29997C5.71996 2.29997 6.03336 2.61337 6.03336 2.99997V6.3333C6.03336 6.7199 5.71996 7.0333 5.33336 7.0333H2.00003C1.61343 7.0333 1.30003 6.7199 1.30003 6.3333C1.30003 5.9467 1.61343 5.6333 2.00003 5.6333H3.64341L0.838387 2.82828C0.56502 2.55491 0.56502 2.11169 0.838387 1.83833ZM7.30003 2.99997C7.30003 2.61337 7.61343 2.29997 8.00003 2.29997H12.6667C13.8266 2.29997 14.7 3.17337 14.7 4.3333V6.3333C14.7 6.7199 14.3866 7.0333 14 7.0333C13.6134 7.0333 13.3 6.7199 13.3 6.3333V4.3333C13.3 3.94657 13.0534 3.69997 12.6667 3.69997H8.00003C7.61343 3.69997 7.30003 3.38657 7.30003 2.99997ZM2.00003 8.29997C2.38663 8.29997 2.70003 8.61337 2.70003 8.99997V10.3333C2.70003 10.6467 3.01996 10.9666 3.33336 10.9666H5.33336C5.71996 10.9666 6.03336 11.28 6.03336 11.6666C6.03336 12.0532 5.71996 12.3666 5.33336 12.3666H3.33336C2.24676 12.3666 1.30003 11.4199 1.30003 10.3333V8.99997C1.30003 8.61337 1.61343 8.29997 2.00003 8.29997ZM9.33336 9.69997C8.98358 9.69997 8.70003 9.98352 8.70003 10.3333V12.3333C8.70003 12.6831 8.98358 12.9666 9.33336 12.9666H13.3334C13.6831 12.9666 13.9667 12.6831 13.9667 12.3333V10.3333C13.9667 9.98352 13.6831 9.69997 13.3334 9.69997H9.33336ZM7.30003 10.3333C7.30003 9.21032 8.21038 8.29997 9.33336 8.29997H13.3334C14.4563 8.29997 15.3667 9.21032 15.3667 10.3333V12.3333C15.3667 13.4563 14.4563 14.3666 13.3334 14.3666H9.33336C8.21038 14.3666 7.30003 13.4563 7.30003 12.3333V10.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default PictureInPictureIcon;
