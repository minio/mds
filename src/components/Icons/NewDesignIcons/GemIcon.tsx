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

const GemIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.31922 1.30002H3.99997C3.76592 1.30002 3.54736 1.41699 3.41753 1.61173L0.750867 5.61173C0.584499 5.86128 0.595598 6.18909 0.778465 6.42682L7.44513 15.0935C7.57764 15.2657 7.78264 15.3667 7.99997 15.3667C8.2173 15.3667 8.4223 15.2657 8.5548 15.0935L15.2215 6.42682C15.4043 6.18909 15.4154 5.86128 15.2491 5.61173L12.5824 1.61173C12.4526 1.41699 12.234 1.30002 12 1.30002H8.68072C8.67098 1.29981 8.66123 1.29981 8.65147 1.30002H7.34847C7.3387 1.29981 7.32895 1.29981 7.31922 1.30002ZM8.23401 2.70002H7.76592L6.46592 5.30002H9.53401L8.23401 2.70002ZM9.79926 2.70002L11.0993 5.30002H13.3587L11.6253 2.70002H9.79926ZM13.245 6.70002H11.1836L9.80937 11.1664L13.245 6.70002ZM7.99997 12.2864L9.71886 6.70002H6.28107L7.99997 12.2864ZM4.90068 5.30002L6.20068 2.70002H4.3746L2.64126 5.30002H4.90068ZM2.75491 6.70002H4.8163L6.19056 11.1664L2.75491 6.70002Z"
      fill="currentColor"
    />
  </svg>
);
export default GemIcon;
