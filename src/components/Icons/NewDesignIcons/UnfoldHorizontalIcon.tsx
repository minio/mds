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

const UnfoldHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 0.633301C8.3866 0.633301 8.7 0.946701 8.7 1.3333V2.66663C8.7 3.05323 8.3866 3.36663 8 3.36663C7.6134 3.36663 7.3 3.05323 7.3 2.66663V1.3333C7.3 0.946701 7.6134 0.633301 8 0.633301ZM8 4.6333C8.3866 4.6333 8.7 4.9467 8.7 5.3333V6.66663C8.7 7.05323 8.3866 7.36663 8 7.36663C7.6134 7.36663 7.3 7.05323 7.3 6.66663V5.3333C7.3 4.9467 7.6134 4.6333 8 4.6333ZM3.82831 5.50499C4.10167 5.77836 4.10167 6.22157 3.82831 6.49494L3.02328 7.29997H5.33333C5.71993 7.29997 6.03333 7.61337 6.03333 7.99997C6.03333 8.38657 5.71993 8.69997 5.33333 8.69997H3.02328L3.82831 9.50499C4.10167 9.77836 4.10167 10.2216 3.82831 10.4949C3.55494 10.7683 3.11172 10.7683 2.83836 10.4949L0.838357 8.49494C0.56499 8.22157 0.56499 7.77836 0.838357 7.50499L2.83836 5.50499C3.11172 5.23163 3.55494 5.23163 3.82831 5.50499ZM12.1717 5.50499C12.4451 5.23163 12.8883 5.23163 13.1616 5.50499L15.1616 7.50499C15.435 7.77836 15.435 8.22157 15.1616 8.49494L13.1616 10.4949C12.8883 10.7683 12.4451 10.7683 12.1717 10.4949C11.8983 10.2216 11.8983 9.77836 12.1717 9.50499L12.9767 8.69997H10.6667C10.2801 8.69997 9.96666 8.38657 9.96666 7.99997C9.96666 7.61337 10.2801 7.29997 10.6667 7.29997H12.9767L12.1717 6.49494C11.8983 6.22157 11.8983 5.77836 12.1717 5.50499ZM8 8.6333C8.3866 8.6333 8.7 8.9467 8.7 9.3333V10.6666C8.7 11.0532 8.3866 11.3666 8 11.3666C7.6134 11.3666 7.3 11.0532 7.3 10.6666V9.3333C7.3 8.9467 7.6134 8.6333 8 8.6333ZM8 12.6333C8.3866 12.6333 8.7 12.9467 8.7 13.3333V14.6666C8.7 15.0532 8.3866 15.3666 8 15.3666C7.6134 15.3666 7.3 15.0532 7.3 14.6666V13.3333C7.3 12.9467 7.6134 12.6333 8 12.6333Z"
      fill="currentColor"
    />
  </svg>
);
export default UnfoldHorizontalIcon;
