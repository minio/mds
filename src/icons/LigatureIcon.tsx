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

const LigatureIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00005 3.36667C6.91998 3.36667 6.03338 4.25327 6.03338 5.33334V7.30001H6.66672C7.05331 7.30001 7.36672 7.61341 7.36672 8.00001C7.36672 8.38661 7.05331 8.70001 6.66672 8.70001H6.03338V12.6333H6.66672C7.05331 12.6333 7.36672 12.9467 7.36672 13.3333C7.36672 13.7199 7.05331 14.0333 6.66672 14.0333H4.00005C3.61345 14.0333 3.30005 13.7199 3.30005 13.3333C3.30005 12.9467 3.61345 12.6333 4.00005 12.6333H4.63338V8.70001H4.00005C3.61345 8.70001 3.30005 8.38661 3.30005 8.00001C3.30005 7.61341 3.61345 7.30001 4.00005 7.30001H4.63338V5.33334C4.63338 3.48008 6.14678 1.96667 8.00005 1.96667C9.2562 1.96667 10.3496 2.63852 10.938 3.6473C11.1328 3.98123 11.02 4.40986 10.6861 4.60465C10.3522 4.79945 9.92353 4.68665 9.72874 4.35272C9.38386 3.76149 8.7439 3.36667 8.00005 3.36667ZM8.63338 8.00001C8.63338 7.61341 8.94678 7.30001 9.33338 7.30001H10.6667C11.0533 7.30001 11.3667 7.61341 11.3667 8.00001V12.6333H12C12.3866 12.6333 12.7 12.9467 12.7 13.3333C12.7 13.7199 12.3866 14.0333 12 14.0333H9.33338C8.94678 14.0333 8.63338 13.7199 8.63338 13.3333C8.63338 12.9467 8.94678 12.6333 9.33338 12.6333H9.96672V8.70001H9.33338C8.94678 8.70001 8.63338 8.38661 8.63338 8.00001Z"
      fill="currentColor"
    />
  </svg>
);
export default LigatureIcon;
