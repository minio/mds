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

const BlindsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.29997 2C1.29997 1.6134 1.61337 1.3 1.99997 1.3H14C14.3866 1.3 14.7 1.6134 14.7 2C14.7 2.3866 14.3866 2.7 14 2.7H3.36663V10.757C4.14475 11.0423 4.69997 11.7897 4.69997 12.6667C4.69997 13.7896 3.78961 14.7 2.66663 14.7C1.54366 14.7 0.633301 13.7896 0.633301 12.6667C0.633301 11.7897 1.18852 11.0423 1.96663 10.757V2.69922C1.59551 2.68182 1.29997 2.37543 1.29997 2ZM4.6333 4.66667C4.6333 4.28007 4.9467 3.96667 5.3333 3.96667H13.3333C13.7199 3.96667 14.0333 4.28007 14.0333 4.66667C14.0333 5.05327 13.7199 5.36667 13.3333 5.36667H5.3333C4.9467 5.36667 4.6333 5.05327 4.6333 4.66667ZM4.6333 7.33334C4.6333 6.94674 4.9467 6.63334 5.3333 6.63334H13.3333C13.7199 6.63334 14.0333 6.94674 14.0333 7.33334C14.0333 7.71994 13.7199 8.03334 13.3333 8.03334H5.3333C4.9467 8.03334 4.6333 7.71994 4.6333 7.33334ZM4.6333 10C4.6333 9.6134 4.9467 9.3 5.3333 9.3H13.3333C13.7199 9.3 14.0333 9.6134 14.0333 10C14.0333 10.3866 13.7199 10.7 13.3333 10.7H5.3333C4.9467 10.7 4.6333 10.3866 4.6333 10ZM2.66663 12.0333C2.31685 12.0333 2.0333 12.3169 2.0333 12.6667C2.0333 13.0164 2.31685 13.3 2.66663 13.3C3.01641 13.3 3.29997 13.0164 3.29997 12.6667C3.29997 12.3169 3.01641 12.0333 2.66663 12.0333ZM5.96663 12.6667C5.96663 12.2801 6.28003 11.9667 6.66663 11.9667H13.3333C13.7199 11.9667 14.0333 12.2801 14.0333 12.6667C14.0333 13.0533 13.7199 13.3667 13.3333 13.3667H6.66663C6.28003 13.3667 5.96663 13.0533 5.96663 12.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default BlindsIcon;
