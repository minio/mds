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

const UtilityPoleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 0.633301C8.38657 0.633301 8.69997 0.946701 8.69997 1.3333V2.6333H10.6333V1.99997C10.6333 1.61337 10.9467 1.29997 11.3333 1.29997C11.7199 1.29997 12.0333 1.61337 12.0333 1.99997V2.6333H12.6663C12.666 2.6333 12.6665 2.6333 12.6663 2.6333H13.3V1.99997C13.3 1.61337 13.6134 1.29997 14 1.29997C14.3866 1.29997 14.7 1.61337 14.7 1.99997V2.63408C15.0711 2.65148 15.3666 2.95788 15.3666 3.3333C15.3666 3.7199 15.0532 4.0333 14.6666 4.0333H12.9566L8.69997 8.28992V14.6666C8.69997 15.0532 8.38657 15.3666 7.99997 15.3666C7.61337 15.3666 7.29997 15.0532 7.29997 14.6666V8.28992L3.04335 4.0333H1.3333C0.946701 4.0333 0.633301 3.7199 0.633301 3.3333C0.633301 2.95788 0.928846 2.65148 1.29997 2.63408V1.99997C1.29997 1.61337 1.61337 1.29997 1.99997 1.29997C2.38657 1.29997 2.69997 1.61337 2.69997 1.99997V2.6333H3.33295C3.33271 2.6333 3.33318 2.6333 3.33295 2.6333H3.96663V1.99997C3.96663 1.61337 4.28003 1.29997 4.66663 1.29997C5.05323 1.29997 5.36663 1.61337 5.36663 1.99997V2.6333H7.29997V1.3333C7.29997 0.946701 7.61337 0.633301 7.99997 0.633301ZM7.29997 4.0333H5.02325L7.29997 6.31002V4.0333ZM8.69997 6.31002L10.9767 4.0333H8.69997V6.31002Z"
      fill="currentColor"
    />
  </svg>
);
export default UtilityPoleIcon;
