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

const ScaleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 1.30005C8.3866 1.30005 8.7 1.61345 8.7 2.00005V2.89174C9.96144 3.46589 11.6045 3.96672 12.6667 3.96672H14C14.3866 3.96672 14.7 4.28012 14.7 4.66672C14.7 5.05331 14.3866 5.36672 14 5.36672H13.4268L15.3221 10.4209C15.4314 10.7125 15.3351 11.0411 15.0856 11.2275C14.3854 11.7507 13.5386 12.0334 12.6667 12.0334C11.7947 12.0334 10.948 11.7507 10.2477 11.2275C9.99828 11.0411 9.90192 10.7125 10.0112 10.4209L11.9254 5.31661C10.8991 5.18803 9.71523 4.82734 8.7 4.41507V13.3H11.3333C11.7199 13.3 12.0333 13.6135 12.0333 14C12.0333 14.3866 11.7199 14.7 11.3333 14.7H4.66667C4.28007 14.7 3.96667 14.3866 3.96667 14C3.96667 13.6135 4.28007 13.3 4.66667 13.3H7.3V4.41507C6.28477 4.82734 5.10089 5.18803 4.07465 5.31661L5.98877 10.4209C6.09809 10.7125 6.00172 11.0411 5.7523 11.2275C5.05205 11.7507 4.20526 12.0334 3.33334 12.0334C2.46141 12.0334 1.61462 11.7507 0.914368 11.2275C0.664947 11.0411 0.568584 10.7125 0.677905 10.4209L2.57324 5.36672H2C1.6134 5.36672 1.3 5.05331 1.3 4.66672C1.3 4.28012 1.6134 3.96672 2 3.96672H3.33334C4.39553 3.96672 6.03856 3.46589 7.3 2.89174V2.00005C7.3 1.61345 7.6134 1.30005 8 1.30005ZM3.33334 7.32698L2.19131 10.3724C2.54687 10.5436 2.93647 10.6334 3.33334 10.6334C3.7302 10.6334 4.1198 10.5436 4.47536 10.3724L3.33334 7.32698ZM12.6667 7.32698L11.5246 10.3724C11.8802 10.5436 12.2698 10.6334 12.6667 10.6334C13.0635 10.6334 13.4531 10.5436 13.8087 10.3724L12.6667 7.32698Z"
      fill="currentColor"
    />
  </svg>
);
export default ScaleIcon;
