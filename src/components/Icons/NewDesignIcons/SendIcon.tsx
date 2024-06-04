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

const SendIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.1616 0.838346C15.3518 1.02849 15.4162 1.31075 15.3273 1.56457L10.6607 14.8979C10.5659 15.1688 10.3153 15.3544 10.0285 15.3661C9.74173 15.3778 9.47687 15.2132 9.3603 14.9509L6.80298 9.19698L1.04901 6.63965C0.786731 6.52309 0.622187 6.25823 0.633886 5.97145C0.645586 5.68468 0.831159 5.4341 1.10206 5.33929L14.4354 0.672619C14.6892 0.583786 14.9715 0.648199 15.1616 0.838346ZM8.16823 8.82168L9.92255 12.7689L12.9926 3.9973L8.16823 8.82168ZM12.0027 3.00735L3.23106 6.07741L7.17828 7.83173L12.0027 3.00735Z"
      fill="currentColor"
    />
  </svg>
);
export default SendIcon;
