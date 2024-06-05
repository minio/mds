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

const VibrateIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.0333 4.0333V11.9666H9.96663V4.0333H6.0333ZM4.6333 3.99997C4.6333 3.24518 5.24518 2.6333 5.99997 2.6333H9.99997C10.7548 2.6333 11.3666 3.24518 11.3666 3.99997V12C11.3666 12.7548 10.7548 13.3666 9.99997 13.3666H5.99997C5.24518 13.3666 4.6333 12.7548 4.6333 12V3.99997ZM0.838326 4.83833C1.11169 4.56496 1.55491 4.56496 1.82828 4.83833L3.16161 6.17166C3.43498 6.44503 3.43498 6.88824 3.16161 7.16161L2.32325 7.99997L3.16161 8.83833C3.43498 9.11169 3.43498 9.55491 3.16161 9.82828L1.82828 11.1616C1.55491 11.435 1.11169 11.435 0.838326 11.1616C0.564959 10.8882 0.564959 10.445 0.838326 10.1717L1.67668 9.3333L0.838326 8.49494C0.564959 8.22157 0.564959 7.77836 0.838326 7.50499L1.67668 6.66663L0.838326 5.82828C0.564959 5.55491 0.564959 5.11169 0.838326 4.83833ZM15.1616 4.83833C15.435 5.11169 15.435 5.55491 15.1616 5.82828L14.3232 6.66663L15.1616 7.50499C15.435 7.77836 15.435 8.22157 15.1616 8.49494L14.3232 9.3333L15.1616 10.1717C15.435 10.445 15.435 10.8882 15.1616 11.1616C14.8882 11.435 14.445 11.435 14.1717 11.1616L12.8383 9.82828C12.565 9.55491 12.565 9.11169 12.8383 8.83833L13.6767 7.99997L12.8383 7.16161C12.565 6.88824 12.565 6.44503 12.8383 6.17166L14.1717 4.83833C14.445 4.56496 14.8882 4.56496 15.1616 4.83833Z"
      fill="currentColor"
    />
  </svg>
);
export default VibrateIcon;
