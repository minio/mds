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

const SlidersHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.33333 0.633301C9.71993 0.633301 10.0333 0.946701 10.0333 1.3333V1.96663H14C14.3866 1.96663 14.7 2.28003 14.7 2.66663C14.7 3.05323 14.3866 3.36663 14 3.36663H10.0333V3.99997C10.0333 4.38657 9.71993 4.69997 9.33333 4.69997C8.94673 4.69997 8.63333 4.38657 8.63333 3.99997V1.3333C8.63333 0.946701 8.94673 0.633301 9.33333 0.633301ZM1.3 2.66663C1.3 2.28003 1.6134 1.96663 2 1.96663H6.66667C7.05327 1.96663 7.36667 2.28003 7.36667 2.66663C7.36667 3.05323 7.05327 3.36663 6.66667 3.36663H2C1.6134 3.36663 1.3 3.05323 1.3 2.66663ZM5.33333 5.96663C5.71993 5.96663 6.03333 6.28003 6.03333 6.66663V9.3333C6.03333 9.7199 5.71993 10.0333 5.33333 10.0333C4.94673 10.0333 4.63333 9.7199 4.63333 9.3333V8.69997H2C1.6134 8.69997 1.3 8.38657 1.3 7.99997C1.3 7.61337 1.6134 7.29997 2 7.29997H4.63333V6.66663C4.63333 6.28003 4.94673 5.96663 5.33333 5.96663ZM7.3 7.99997C7.3 7.61337 7.6134 7.29997 8 7.29997H14C14.3866 7.29997 14.7 7.61337 14.7 7.99997C14.7 8.38657 14.3866 8.69997 14 8.69997H8C7.6134 8.69997 7.3 8.38657 7.3 7.99997ZM10.6667 11.3C11.0533 11.3 11.3667 11.6134 11.3667 12V12.6333H14C14.3866 12.6333 14.7 12.9467 14.7 13.3333C14.7 13.7199 14.3866 14.0333 14 14.0333H11.3667V14.6666C11.3667 15.0532 11.0533 15.3666 10.6667 15.3666C10.2801 15.3666 9.96667 15.0532 9.96667 14.6666V12C9.96667 11.6134 10.2801 11.3 10.6667 11.3ZM1.3 13.3333C1.3 12.9467 1.6134 12.6333 2 12.6333H8C8.3866 12.6333 8.7 12.9467 8.7 13.3333C8.7 13.7199 8.3866 14.0333 8 14.0333H2C1.6134 14.0333 1.3 13.7199 1.3 13.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default SlidersHorizontalIcon;
