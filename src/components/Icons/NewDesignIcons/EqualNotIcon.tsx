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

const EqualNotIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.1616 2.83836C13.435 3.11172 13.435 3.55494 13.1616 3.82831L11.6899 5.3H12.6666C13.0532 5.3 13.3666 5.6134 13.3666 6C13.3666 6.3866 13.0532 6.7 12.6666 6.7H10.2899L7.68992 9.3H12.6666C13.0532 9.3 13.3666 9.6134 13.3666 10C13.3666 10.3866 13.0532 10.7 12.6666 10.7H6.28992L3.82828 13.1616C3.55491 13.435 3.11169 13.435 2.83833 13.1616C2.56496 12.8883 2.56496 12.4451 2.83833 12.1717L4.31002 10.7H3.3333C2.9467 10.7 2.6333 10.3866 2.6333 10C2.6333 9.6134 2.9467 9.3 3.3333 9.3H5.71002L8.31002 6.7H3.3333C2.9467 6.7 2.6333 6.3866 2.6333 6C2.6333 5.6134 2.9467 5.3 3.3333 5.3H9.71002L12.1717 2.83836C12.445 2.56499 12.8882 2.56499 13.1616 2.83836Z"
      fill="currentColor"
    />
  </svg>
);
export default EqualNotIcon;
