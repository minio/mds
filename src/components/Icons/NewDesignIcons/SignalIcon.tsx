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

const SignalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.6666 1.96667C15.0532 1.96667 15.3666 2.28008 15.3666 2.66667V13.3333C15.3666 13.7199 15.0532 14.0333 14.6666 14.0333C14.28 14.0333 13.9666 13.7199 13.9666 13.3333V2.66667C13.9666 2.28008 14.28 1.96667 14.6666 1.96667ZM11.3333 4.63334C11.7199 4.63334 12.0333 4.94674 12.0333 5.33334V13.3333C12.0333 13.7199 11.7199 14.0333 11.3333 14.0333C10.9467 14.0333 10.6333 13.7199 10.6333 13.3333V5.33334C10.6333 4.94674 10.9467 4.63334 11.3333 4.63334ZM7.99997 7.30001C8.38657 7.30001 8.69997 7.61341 8.69997 8.00001V13.3333C8.69997 13.7199 8.38657 14.0333 7.99997 14.0333C7.61337 14.0333 7.29997 13.7199 7.29997 13.3333V8.00001C7.29997 7.61341 7.61337 7.30001 7.99997 7.30001ZM4.66663 9.96667C5.05323 9.96667 5.36663 10.2801 5.36663 10.6667V13.3333C5.36663 13.7199 5.05323 14.0333 4.66663 14.0333C4.28003 14.0333 3.96663 13.7199 3.96663 13.3333V10.6667C3.96663 10.2801 4.28003 9.96667 4.66663 9.96667ZM0.633301 13.3333C0.633301 12.9467 0.946701 12.6333 1.3333 12.6333H1.33997C1.72657 12.6333 2.03997 12.9467 2.03997 13.3333C2.03997 13.7199 1.72657 14.0333 1.33997 14.0333H1.3333C0.946701 14.0333 0.633301 13.7199 0.633301 13.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default SignalIcon;
