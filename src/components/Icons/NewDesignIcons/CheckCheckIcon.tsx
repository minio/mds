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

const CheckCheckIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.495 3.50502C12.7683 3.77839 12.7683 4.22161 12.495 4.49497L5.16164 11.8283C4.88827 12.1017 4.44506 12.1017 4.17169 11.8283L0.838357 8.49497C0.56499 8.22161 0.56499 7.77839 0.838357 7.50502C1.11172 7.23166 1.55494 7.23166 1.82831 7.50502L4.66666 10.3434L11.505 3.50502C11.7784 3.23166 12.2216 3.23166 12.495 3.50502ZM15.1616 6.17169C15.435 6.44506 15.435 6.88827 15.1616 7.16164L10.1616 12.1616C9.88827 12.435 9.44506 12.435 9.17169 12.1616L8.17169 11.1616C7.89832 10.8883 7.89832 10.4451 8.17169 10.1717C8.44506 9.89832 8.88827 9.89832 9.16164 10.1717L9.66666 10.6767L14.1717 6.17169C14.4451 5.89832 14.8883 5.89832 15.1616 6.17169Z"
      fill="currentColor"
    />
  </svg>
);
export default CheckCheckIcon;
