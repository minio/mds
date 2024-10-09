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

const ServerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66663 2.0333C2.31685 2.0333 2.0333 2.31685 2.0333 2.66663V5.3333C2.0333 5.68308 2.31685 5.96663 2.66663 5.96663H13.3333C13.6831 5.96663 13.9666 5.68308 13.9666 5.3333V2.66663C13.9666 2.31685 13.6831 2.0333 13.3333 2.0333H2.66663ZM0.633301 2.66663C0.633301 1.54366 1.54366 0.633301 2.66663 0.633301H13.3333C14.4563 0.633301 15.3666 1.54366 15.3666 2.66663V5.3333C15.3666 6.45628 14.4563 7.36663 13.3333 7.36663H2.66663C1.54366 7.36663 0.633301 6.45628 0.633301 5.3333V2.66663ZM3.29997 3.99997C3.29997 3.61337 3.61337 3.29997 3.99997 3.29997H4.00663C4.39323 3.29997 4.70663 3.61337 4.70663 3.99997C4.70663 4.38657 4.39323 4.69997 4.00663 4.69997H3.99997C3.61337 4.69997 3.29997 4.38657 3.29997 3.99997ZM2.66663 10.0333C2.31685 10.0333 2.0333 10.3169 2.0333 10.6666V13.3333C2.0333 13.6831 2.31685 13.9666 2.66663 13.9666H13.3333C13.6831 13.9666 13.9666 13.6831 13.9666 13.3333V10.6666C13.9666 10.3169 13.6831 10.0333 13.3333 10.0333H2.66663ZM0.633301 10.6666C0.633301 9.54365 1.54366 8.6333 2.66663 8.6333H13.3333C14.4563 8.6333 15.3666 9.54365 15.3666 10.6666V13.3333C15.3666 14.4563 14.4563 15.3666 13.3333 15.3666H2.66663C1.54366 15.3666 0.633301 14.4563 0.633301 13.3333V10.6666ZM3.29997 12C3.29997 11.6134 3.61337 11.3 3.99997 11.3H4.00663C4.39323 11.3 4.70663 11.6134 4.70663 12C4.70663 12.3866 4.39323 12.7 4.00663 12.7H3.99997C3.61337 12.7 3.29997 12.3866 3.29997 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ServerIcon;
