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

const IterationCCWIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.96655 6.66669C1.96655 3.34676 4.67995 0.633362 7.99989 0.633362C11.3198 0.633362 14.0332 3.34676 14.0332 6.66669C14.0332 7.05329 13.7198 7.36669 13.3332 7.36669C12.9466 7.36669 12.6332 7.05329 12.6332 6.66669C12.6332 4.11996 10.5466 2.03336 7.99989 2.03336C5.45315 2.03336 3.36655 4.11996 3.36655 6.66669C3.36655 9.21343 5.45315 11.3 7.99989 11.3H11.6433L10.1716 9.82834C9.89821 9.55497 9.89821 9.11175 10.1716 8.83839C10.4449 8.56502 10.8882 8.56502 11.1615 8.83839L13.8282 11.5051C13.9595 11.6363 14.0332 11.8144 14.0332 12C14.0332 12.1857 13.9595 12.3637 13.8282 12.495L11.1615 15.1617C10.8882 15.435 10.4449 15.435 10.1716 15.1617C9.89821 14.8883 9.89821 14.4451 10.1716 14.1717L11.6433 12.7H7.99989C4.67995 12.7 1.96655 9.98663 1.96655 6.66669Z"
      fill="currentColor"
    />
  </svg>
);
export default IterationCCWIcon;
