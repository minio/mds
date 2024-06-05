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

const MoveUpLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.63333 3.3333C2.63333 2.9467 2.94673 2.6333 3.33333 2.6333H7.33333C7.71993 2.6333 8.03333 2.9467 8.03333 3.3333C8.03333 3.7199 7.71993 4.0333 7.33333 4.0333H5.02328L13.1616 12.1717C13.435 12.445 13.435 12.8882 13.1616 13.1616C12.8883 13.435 12.4451 13.435 12.1717 13.1616L4.03333 5.02325V7.3333C4.03333 7.7199 3.71993 8.0333 3.33333 8.0333C2.94673 8.0333 2.63333 7.7199 2.63333 7.3333V3.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default MoveUpLeftIcon;
