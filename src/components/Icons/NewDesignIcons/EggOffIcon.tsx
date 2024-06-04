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

const EggOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838326 0.838357C1.11169 0.56499 1.55491 0.56499 1.82828 0.838357L4.75044 3.76052C4.75785 3.76761 4.76509 3.77485 4.77214 3.78222L12.7338 11.7439C12.7416 11.7513 12.7491 11.7588 12.7564 11.7665L15.1616 14.1717C15.435 14.4451 15.435 14.8883 15.1616 15.1616C14.8882 15.435 14.445 15.435 14.1717 15.1616L12.3663 13.3563C11.4491 14.5463 10.027 15.3505 8.00556 15.3666L7.99435 15.3667L7.99435 15.3666C5.66948 15.348 4.13209 14.2868 3.24679 12.7836C2.38804 11.3254 2.17157 9.50807 2.3024 7.94174C2.39898 6.77662 2.80616 5.5173 3.39764 4.38762L0.838326 1.82831C0.564959 1.55494 0.564959 1.11172 0.838326 0.838357ZM4.44237 5.43235C4.03274 6.31121 3.7658 7.23414 3.69758 8.05778L3.69754 8.05826C3.58169 9.44526 3.78856 10.9446 4.45314 12.0731C5.09053 13.1554 6.17491 13.9504 7.99999 13.9666C9.65668 13.9519 10.7077 13.2948 11.3654 12.3553L4.44237 5.43235ZM7.99189 0.633378L8.00785 0.633376C9.53921 0.65063 10.9087 1.83487 11.8682 3.18642C12.8528 4.57316 13.5655 6.35071 13.6975 7.94178M8.00005 2.0334C7.52392 2.04136 6.98196 2.27021 6.41467 2.73804C6.11641 2.98401 5.67523 2.94162 5.42926 2.64337C5.18329 2.34511 5.22567 1.90392 5.52393 1.65795C6.2388 1.06841 7.08328 0.643862 7.99189 0.633378M8.00005 2.0334C8.83381 2.04717 9.84077 2.7491 10.7267 3.99691C11.5904 5.2134 12.1943 6.75569 12.3024 8.05786L12.3024 8.05856C12.3347 8.44326 12.3413 8.82969 12.3222 9.21527C12.303 9.6014 12.6005 9.92996 12.9866 9.94914C13.3727 9.96831 13.7013 9.67085 13.7204 9.28472C13.7427 8.83718 13.735 8.38866 13.6976 7.94213"
      fill="currentColor"
    />
  </svg>
);
export default EggOffIcon;
