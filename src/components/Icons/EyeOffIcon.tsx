// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

const EyeOffIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <g clip-path="url(#clip0_2762_3212)">
      <path
        d="M6.58634 6.58668C6.38984 6.76978 6.23224 6.99058 6.12292 7.23591C6.01361 7.48124 5.95483 7.74608 5.9501 8.01462C5.94536 8.28316 5.99476 8.5499 6.09535 8.79894C6.19594 9.04797 6.34565 9.2742 6.53557 9.46411C6.72549 9.65403 6.95171 9.80375 7.20075 9.90434C7.44978 10.0049 7.71653 10.0543 7.98507 10.0496C8.25361 10.0448 8.51844 9.98607 8.76378 9.87676C9.00911 9.76745 9.22991 9.60984 9.41301 9.41334M7.15301 3.38668C7.43388 3.35168 7.71663 3.33387 7.99967 3.33334C12.6663 3.33334 14.6663 8.00001 14.6663 8.00001C14.3683 8.63809 13.9945 9.23797 13.553 9.78668M4.40634 4.40668C3.08051 5.30976 2.01959 6.55018 1.33301 8.00001C1.33301 8.00001 3.33301 12.6667 7.99967 12.6667C9.27695 12.6701 10.5269 12.2967 11.593 11.5933M1.33301 1.33334L14.6663 14.6667"
        stroke="currentColor"
        fill={"none"}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default EyeOffIcon;
