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

const IterationCWIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99989 2.03336C5.45315 2.03336 3.36655 4.11996 3.36655 6.66669C3.36655 7.05329 3.05315 7.36669 2.66655 7.36669C2.27995 7.36669 1.96655 7.05329 1.96655 6.66669C1.96655 3.34676 4.67995 0.633362 7.99989 0.633362C11.3198 0.633362 14.0332 3.34676 14.0332 6.66669C14.0332 9.98663 11.3198 12.7 7.99989 12.7H4.3565L5.82819 14.1717C6.10156 14.4451 6.10156 14.8883 5.82819 15.1617C5.55483 15.435 5.11161 15.435 4.83824 15.1617L2.17158 12.495C2.0403 12.3637 1.96655 12.1857 1.96655 12C1.96655 11.8144 2.0403 11.6363 2.17158 11.5051L4.83824 8.83839C5.11161 8.56502 5.55483 8.56502 5.82819 8.83839C6.10156 9.11175 6.10156 9.55497 5.82819 9.82834L4.3565 11.3H7.99989C10.5466 11.3 12.6332 9.21343 12.6332 6.66669C12.6332 4.11996 10.5466 2.03336 7.99989 2.03336Z"
      fill="currentColor"
    />
  </svg>
);
export default IterationCWIcon;
