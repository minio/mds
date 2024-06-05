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

const UtensilsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.00005 0.633301C2.38665 0.633301 2.70005 0.946701 2.70005 1.3333V5.99997C2.70005 6.3467 2.98665 6.6333 3.33338 6.6333H3.96672V1.3333C3.96672 0.946701 4.28012 0.633301 4.66672 0.633301C5.05331 0.633301 5.36672 0.946701 5.36672 1.3333V6.6333H6.00005C6.16802 6.6333 6.32911 6.56657 6.44788 6.4478C6.56666 6.32903 6.63338 6.16794 6.63338 5.99997V1.3333C6.63338 0.946701 6.94678 0.633301 7.33338 0.633301C7.71998 0.633301 8.03338 0.946701 8.03338 1.3333V5.99997C8.03338 6.53924 7.81916 7.05643 7.43783 7.43775C7.05651 7.81907 6.53932 8.0333 6.00005 8.0333H5.36672V14.6666C5.36672 15.0532 5.05331 15.3666 4.66672 15.3666C4.28012 15.3666 3.96672 15.0532 3.96672 14.6666V8.0333H3.33338C2.21345 8.0333 1.30005 7.1199 1.30005 5.99997V1.3333C1.30005 0.946701 1.61345 0.633301 2.00005 0.633301ZM11.1481 1.81464C11.9044 1.05824 12.9303 0.633301 14 0.633301C14.1857 0.633301 14.3637 0.707051 14.495 0.838326C14.6263 0.969601 14.7 1.14765 14.7 1.3333V14.6666C14.7 15.0532 14.3866 15.3666 14 15.3666C13.6135 15.3666 13.3 15.0532 13.3 14.6666V10.7H12C10.8801 10.7 9.96672 9.78657 9.96672 8.66663V4.66663C9.96672 3.59693 10.3917 2.57103 11.1481 1.81464ZM13.3 9.29997V2.12804C12.8645 2.24816 12.4631 2.47948 12.138 2.80459C11.6442 3.29843 11.3667 3.96823 11.3667 4.66663V8.66663C11.3667 9.01337 11.6533 9.29997 12 9.29997H13.3Z"
      fill="currentColor"
    />
  </svg>
);
export default UtensilsIcon;
