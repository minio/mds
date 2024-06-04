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

const HardDriveUploadIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.50499 0.838387C7.77836 0.56502 8.22157 0.56502 8.49494 0.838387L11.1616 3.50505C11.435 3.77842 11.435 4.22164 11.1616 4.495C10.8882 4.76837 10.445 4.76837 10.1717 4.495L8.69997 3.02331V6.66669C8.69997 7.05329 8.38657 7.36669 7.99997 7.36669C7.61337 7.36669 7.29997 7.05329 7.29997 6.66669V3.02331L5.82828 4.495C5.55491 4.76837 5.11169 4.76837 4.83833 4.495C4.56496 4.22164 4.56496 3.77842 4.83833 3.50505L7.50499 0.838387ZM2.66663 10.0334C2.31685 10.0334 2.0333 10.3169 2.0333 10.6667V13.3334C2.0333 13.6831 2.31685 13.9667 2.66663 13.9667H13.3333C13.6831 13.9667 13.9666 13.6831 13.9666 13.3334V10.6667C13.9666 10.3169 13.6831 10.0334 13.3333 10.0334H2.66663ZM0.633301 10.6667C0.633301 9.54372 1.54366 8.63336 2.66663 8.63336H13.3333C14.4563 8.63336 15.3666 9.54372 15.3666 10.6667V13.3334C15.3666 14.4563 14.4563 15.3667 13.3333 15.3667H2.66663C1.54366 15.3667 0.633301 14.4563 0.633301 13.3334V10.6667ZM3.29997 12C3.29997 11.6134 3.61337 11.3 3.99997 11.3H4.00663C4.39323 11.3 4.70663 11.6134 4.70663 12C4.70663 12.3866 4.39323 12.7 4.00663 12.7H3.99997C3.61337 12.7 3.29997 12.3866 3.29997 12ZM5.96663 12C5.96663 11.6134 6.28003 11.3 6.66663 11.3H6.6733C7.0599 11.3 7.3733 11.6134 7.3733 12C7.3733 12.3866 7.0599 12.7 6.6733 12.7H6.66663C6.28003 12.7 5.96663 12.3866 5.96663 12Z"
      fill="currentColor"
    />
  </svg>
);
export default HardDriveUploadIcon;
