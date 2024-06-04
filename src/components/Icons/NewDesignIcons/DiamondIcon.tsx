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

const DiamondIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.51509 1.1744C7.33519 0.3543 8.66484 0.354301 9.48494 1.1744L14.8256 6.51509C15.6457 7.33519 15.6457 8.66484 14.8256 9.48494L9.48494 14.8256C8.66484 15.6457 7.33519 15.6457 6.51509 14.8256L1.1744 9.48494C0.3543 8.66484 0.354302 7.33519 1.1744 6.51509L6.51509 1.1744ZM8.49499 2.16435C8.22162 1.89098 7.77841 1.89098 7.50504 2.16435L2.16435 7.50504C1.89098 7.77841 1.89098 8.22162 2.16435 8.49499L7.50504 13.8357C7.77841 14.109 8.22162 14.109 8.49499 13.8357L13.8357 8.49499C14.109 8.22162 14.109 7.77841 13.8357 7.50504L8.49499 2.16435Z"
      fill="currentColor"
    />
  </svg>
);
export default DiamondIcon;
