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

const ArrowDownToLineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 1.29999C8.38657 1.29999 8.69997 1.61339 8.69997 1.99999V9.64337L11.505 6.83835C11.7784 6.56498 12.2216 6.56498 12.4949 6.83835C12.7683 7.11171 12.7683 7.55493 12.4949 7.8283L8.49494 11.8283C8.36367 11.9596 8.18562 12.0333 7.99997 12.0333C7.81432 12.0333 7.63627 11.9596 7.50499 11.8283L3.50499 7.8283C3.23163 7.55493 3.23163 7.11171 3.50499 6.83835C3.77836 6.56498 4.22158 6.56498 4.49494 6.83835L7.29997 9.64337V1.99999C7.29997 1.61339 7.61337 1.29999 7.99997 1.29999ZM2.6333 14C2.6333 13.6134 2.9467 13.3 3.3333 13.3H12.6666C13.0532 13.3 13.3666 13.6134 13.3666 14C13.3666 14.3866 13.0532 14.7 12.6666 14.7H3.3333C2.9467 14.7 2.6333 14.3866 2.6333 14Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowDownToLineIcon;
