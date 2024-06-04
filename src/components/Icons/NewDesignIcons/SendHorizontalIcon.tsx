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

const SendHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.53571 1.47615C1.74559 1.29018 2.04619 1.2474 2.29962 1.36744L14.9663 7.36744C15.2108 7.48325 15.3666 7.72955 15.3666 8.00006C15.3666 8.27057 15.2108 8.51687 14.9663 8.63268L2.29962 14.6327C2.04619 14.7527 1.74559 14.7099 1.53571 14.524C1.32584 14.338 1.2472 14.0447 1.33588 13.7787L3.26209 8.00006L1.33588 2.22142C1.2472 1.95539 1.32584 1.66212 1.53571 1.47615ZM4.50449 8.70006L3.18277 12.6652L11.5537 8.70006H4.50449ZM11.5537 7.30006H4.50449L3.18277 3.3349L11.5537 7.30006Z"
      fill="currentColor"
    />
  </svg>
);
export default SendHorizontalIcon;
