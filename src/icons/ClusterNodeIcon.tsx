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

const ClusterNodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M8.33332 0.755973C8.12705 0.636884 7.87292 0.636884 7.66665 0.755973L6.42947 1.47026C6.11061 1.65435 6.00136 2.06208 6.18545 2.38094C6.36955 2.6998 6.77728 2.80905 7.09614 2.62496L7.99998 2.10312L8.90383 2.62496C9.22269 2.80905 9.63042 2.6998 9.81451 2.38094C9.99861 2.06208 9.88936 1.65435 9.5705 1.47026L8.33332 0.755973Z"
      fill="currentColor"
    />
    <path
      d="M3.79699 4.52972C4.11586 4.34563 4.22511 3.9379 4.04101 3.61904C3.85692 3.30018 3.44919 3.19093 3.13033 3.37502L1.89315 4.08931C1.68688 4.20839 1.55981 4.42848 1.55981 4.66666V6.09523C1.55981 6.46342 1.85829 6.76189 2.22648 6.76189C2.59467 6.76189 2.89315 6.46342 2.89315 6.09523V5.05156L3.79699 4.52972Z"
      fill="currentColor"
    />
    <path
      d="M12.8696 3.37502C12.5508 3.19093 12.1431 3.30018 11.959 3.61904C11.7749 3.9379 11.8841 4.34563 12.203 4.52972L13.1068 5.05156V6.09523C13.1068 6.46342 13.4053 6.76189 13.7735 6.76189C14.1417 6.76189 14.4402 6.46342 14.4402 6.09523V4.66666C14.4402 4.42848 14.3131 4.20839 14.1068 4.08931L12.8696 3.37502Z"
      fill="currentColor"
    />
    <path
      d="M2.89315 9.90475C2.89315 9.53656 2.59467 9.23808 2.22648 9.23808C1.85829 9.23808 1.55981 9.53656 1.55981 9.90475V11.3333C1.55981 11.5715 1.68688 11.7916 1.89315 11.9107L3.13033 12.625C3.44919 12.8091 3.85692 12.6998 4.04101 12.3809C4.22511 12.0621 4.11586 11.6544 3.79699 11.4703L2.89315 10.9484V9.90475Z"
      fill="currentColor"
    />
    <path
      d="M14.4402 9.90475C14.4402 9.53656 14.1417 9.23809 13.7735 9.23809C13.4053 9.23809 13.1068 9.53656 13.1068 9.90475V10.9484L12.203 11.4703C11.8841 11.6544 11.7749 12.0621 11.959 12.3809C12.1431 12.6998 12.5508 12.8091 12.8696 12.625L14.1068 11.9107C14.3131 11.7916 14.4402 11.5715 14.4402 11.3333V9.90475Z"
      fill="currentColor"
    />
    <path
      d="M7.09614 13.375C6.77728 13.1909 6.36955 13.3002 6.18545 13.619C6.00136 13.9379 6.11061 14.3456 6.42947 14.5297L7.66665 15.244C7.87292 15.3631 8.12705 15.3631 8.33332 15.244L9.5705 14.5297C9.88936 14.3456 9.99861 13.9379 9.81451 13.619C9.63042 13.3002 9.22269 13.1909 8.90383 13.375L7.99998 13.8969L7.09614 13.375Z"
      fill="currentColor"
    />
    <path
      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      fill="currentColor"
    />
  </svg>
);
export default ClusterNodeIcon;
