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

const BaselineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00001 1.96666C8.26515 1.96666 8.50753 2.11646 8.62611 2.35361L11.2865 7.67436C11.291 7.68297 11.2954 7.69168 11.2995 7.70049L12.6261 10.3536C12.799 10.6994 12.6588 11.1199 12.3131 11.2928C11.9673 11.4657 11.5468 11.3255 11.3739 10.9797L10.2341 8.69999H5.76597L4.62611 10.9797C4.45321 11.3255 4.03274 11.4657 3.68696 11.2928C3.34117 11.1199 3.20102 10.6994 3.37391 10.3536L4.70046 7.70051C4.70464 7.69168 4.709 7.68296 4.71354 7.67435L7.37391 2.35361C7.49248 2.11646 7.73487 1.96666 8.00001 1.96666ZM6.46597 7.29999H9.53405L8.00001 4.23191L6.46597 7.29999ZM1.96667 13.3333C1.96667 12.9467 2.28008 12.6333 2.66667 12.6333H13.3333C13.7199 12.6333 14.0333 12.9467 14.0333 13.3333C14.0333 13.7199 13.7199 14.0333 13.3333 14.0333H2.66667C2.28008 14.0333 1.96667 13.7199 1.96667 13.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default BaselineIcon;
