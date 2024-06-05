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

const SignpostIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 1.30005C8.38657 1.30005 8.69997 1.61345 8.69997 2.00005V3.30005H12.3333C12.519 3.30005 12.697 3.3738 12.8283 3.50507L15.1616 5.83841C15.435 6.11177 15.435 6.55499 15.1616 6.82836L12.8283 9.16169C12.697 9.29297 12.519 9.36672 12.3333 9.36672H8.69997V14C8.69997 14.3866 8.38657 14.7 7.99997 14.7C7.61337 14.7 7.29997 14.3866 7.29997 14V9.36672H3.66663C3.48098 9.36672 3.30293 9.29297 3.17166 9.16169L0.838326 6.82836C0.564959 6.55499 0.564959 6.11177 0.838326 5.83841L3.17166 3.50507C3.30293 3.3738 3.48098 3.30005 3.66663 3.30005H7.29997V2.00005C7.29997 1.61345 7.61337 1.30005 7.99997 1.30005ZM3.95658 4.70005L2.32325 6.33338L3.95658 7.96672H12.0434L13.6767 6.33338L12.0434 4.70005H3.95658Z"
      fill="currentColor"
    />
  </svg>
);
export default SignpostIcon;
