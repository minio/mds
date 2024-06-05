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

const SquircleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.69498 3.69502C3.01758 4.37242 2.7 5.59505 2.7 8.00005C2.7 10.4051 3.01758 11.6277 3.69498 12.3051C4.37237 12.9825 5.595 13.3 8 13.3C10.405 13.3 11.6276 12.9825 12.305 12.3051C12.9824 11.6277 13.3 10.4051 13.3 8.00005C13.3 5.59505 12.9824 4.37242 12.305 3.69502C11.6276 3.01763 10.405 2.70005 8 2.70005C5.595 2.70005 4.37237 3.01763 3.69498 3.69502ZM2.70503 2.70507C3.82763 1.58247 5.60501 1.30005 8 1.30005C10.395 1.30005 12.1724 1.58247 13.295 2.70507C14.4176 3.82768 14.7 5.60505 14.7 8.00005C14.7 10.395 14.4176 12.1724 13.295 13.295C12.1724 14.4176 10.395 14.7 8 14.7C5.60501 14.7 3.82763 14.4176 2.70503 13.295C1.58242 12.1724 1.3 10.395 1.3 8.00005C1.3 5.60505 1.58242 3.82768 2.70503 2.70507Z"
      fill="currentColor"
    />
  </svg>
);
export default SquircleIcon;
