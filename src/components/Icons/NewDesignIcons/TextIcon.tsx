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

const TextIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.30005 4.0667C1.30005 3.6801 1.61345 3.3667 2.00005 3.3667H11.3334C11.72 3.3667 12.0334 3.6801 12.0334 4.0667C12.0334 4.4533 11.72 4.7667 11.3334 4.7667H2.00005C1.61345 4.7667 1.30005 4.4533 1.30005 4.0667ZM1.30005 8.0667C1.30005 7.6801 1.61345 7.3667 2.00005 7.3667H14C14.3866 7.3667 14.7 7.6801 14.7 8.0667C14.7 8.4533 14.3866 8.7667 14 8.7667H2.00005C1.61345 8.7667 1.30005 8.4533 1.30005 8.0667ZM1.30005 12C1.30005 11.6134 1.61345 11.3 2.00005 11.3H10.0667C10.4533 11.3 10.7667 11.6134 10.7667 12C10.7667 12.3866 10.4533 12.7 10.0667 12.7H2.00005C1.61345 12.7 1.30005 12.3866 1.30005 12Z"
      fill="currentColor"
    />
  </svg>
);
export default TextIcon;
