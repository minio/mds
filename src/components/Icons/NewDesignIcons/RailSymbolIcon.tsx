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

const RailSymbolIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.17166 2.1717C6.44503 1.89833 6.88824 1.89833 7.16161 2.1717L10.2899 5.30001H12.6666C13.0532 5.30001 13.3666 5.61341 13.3666 6.00001C13.3666 6.38661 13.0532 6.70001 12.6666 6.70001H10.2899L7.68992 9.30001H12.6666C13.0532 9.30001 13.3666 9.61341 13.3666 10C13.3666 10.3866 13.0532 10.7 12.6666 10.7H7.68992L9.82828 12.8384C10.1016 13.1117 10.1016 13.5549 9.82827 13.8283C9.55491 14.1017 9.11169 14.1017 8.83833 13.8283L5.71002 10.7H3.3333C2.9467 10.7 2.6333 10.3866 2.6333 10C2.6333 9.61341 2.9467 9.30001 3.3333 9.30001H5.71002L8.31002 6.70001H3.3333C2.9467 6.70001 2.6333 6.38661 2.6333 6.00001C2.6333 5.61341 2.9467 5.30001 3.3333 5.30001H8.31002L6.17166 3.16165C5.89829 2.88828 5.89829 2.44507 6.17166 2.1717Z"
      fill="currentColor"
    />
  </svg>
);
export default RailSymbolIcon;
