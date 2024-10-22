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

const GlassWaterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.81323 1.53146C2.94597 1.38411 3.13499 1.29999 3.33331 1.29999H12.6666C12.865 1.29999 13.0541 1.38417 13.1869 1.53161C13.3196 1.67905 13.3836 1.8759 13.3628 2.0732L12.1561 13.5465C12.1034 14.0463 11.8674 14.509 11.4938 14.8451C11.1203 15.181 10.6357 15.3668 10.1333 15.3667C10.1332 15.3667 10.1334 15.3667 10.1333 15.3667H5.86842M4.11035 2.69999L4.54994 6.90299C5.00971 6.72586 5.501 6.63332 5.99998 6.63332C6.87267 6.63332 7.72183 6.91637 8.41998 7.43999C8.8758 7.78185 9.43021 7.96665 9.99998 7.96665C10.4873 7.96665 10.9633 7.83148 11.3761 7.57849L11.8892 2.69999H4.11035ZM11.2075 9.18166C10.8192 9.3035 10.4122 9.36665 9.99998 9.36665C9.12729 9.36665 8.27814 9.0836 7.57998 8.55999C7.12416 8.21812 6.56976 8.03332 5.99998 8.03332C5.54385 8.03332 5.09757 8.15176 4.70383 8.37439L5.22945 13.3998C5.22944 13.3998 5.22945 13.3999 5.22945 13.3998C5.24598 13.5559 5.31993 13.7006 5.43691 13.8053C5.55394 13.91 5.70572 13.9675 5.86278 13.9667L5.86665 13.9666L10.1333 13.9667C10.2898 13.9667 10.4412 13.9089 10.5576 13.8042C10.6739 13.6995 10.7474 13.5555 10.7639 13.3998L11.2075 9.18166Z"
      fill="currentColor"
    />
  </svg>
);
export default GlassWaterIcon;
