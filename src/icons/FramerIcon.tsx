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

const FramerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.68662 1.06548C2.79497 0.803911 3.05021 0.633362 3.33334 0.633362H12.6667C13.0533 0.633362 13.3667 0.946762 13.3667 1.33336V6.00003C13.3667 6.38663 13.0533 6.70003 12.6667 6.70003H9.68995L13.1616 10.1717C13.3618 10.3719 13.4217 10.673 13.3134 10.9346C13.205 11.1961 12.9498 11.3667 12.6667 11.3667H8.7V15.3334C8.7 15.6165 8.52945 15.8717 8.26788 15.9801C8.00631 16.0884 7.70523 16.0285 7.50503 15.8283L2.83836 11.1617C2.70709 11.0304 2.63334 10.8523 2.63334 10.6667V6.00003C2.63334 5.61343 2.94674 5.30003 3.33334 5.30003H6.31005L2.83836 1.82834C2.63816 1.62814 2.57827 1.32706 2.68662 1.06548ZM8.28995 5.30003H11.9667V2.03336H5.02329L8.28995 5.30003ZM7.71005 6.70003H4.03334V9.96669H10.9767L7.71005 6.70003ZM5.02329 11.3667L7.3 13.6434V11.3667H5.02329Z"
      fill="currentColor"
    />
  </svg>
);
export default FramerIcon;
