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

const PlugIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.00005 0.633301C6.38665 0.633301 6.70005 0.946701 6.70005 1.3333V4.6333H9.30005V1.3333C9.30005 0.946701 9.61345 0.633301 10 0.633301C10.3866 0.633301 10.7 0.946701 10.7 1.3333V4.6333H12C12.3866 4.6333 12.7 4.9467 12.7 5.3333V8.66663C12.7 9.55953 12.3453 10.4159 11.714 11.0472C11.0826 11.6786 10.2263 12.0333 9.33338 12.0333H8.70005V14.6666C8.70005 15.0532 8.38665 15.3666 8.00005 15.3666C7.61345 15.3666 7.30005 15.0532 7.30005 14.6666V12.0333H6.66672C5.77382 12.0333 4.9175 11.6786 4.28612 11.0472C3.65475 10.4159 3.30005 9.55953 3.30005 8.66663V5.3333C3.30005 4.9467 3.61345 4.6333 4.00005 4.6333H5.30005V1.3333C5.30005 0.946701 5.61345 0.633301 6.00005 0.633301ZM4.70005 6.0333V8.66663C4.70005 9.18823 4.90725 9.68846 5.27607 10.0573C5.64489 10.4261 6.14512 10.6333 6.66672 10.6333H9.33338C9.85497 10.6333 10.3552 10.4261 10.724 10.0573C11.0928 9.68845 11.3 9.18823 11.3 8.66663V6.0333H4.70005Z"
      fill="currentColor"
    />
  </svg>
);
export default PlugIcon;
