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

const TruckIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.22885 2.56222C1.61017 2.1809 2.12736 1.96667 2.66663 1.96667H7.99997C8.53924 1.96667 9.05643 2.1809 9.43775 2.56222C9.81907 2.94355 10.0333 3.46073 10.0333 4.00001V4.63334H11.68C11.8848 4.63363 12.088 4.67997 12.2725 4.76891C12.4568 4.85777 12.6188 4.98688 12.7466 5.14672M12.7466 5.14672L15.066 8.04596C15.0658 8.04579 15.0661 8.04613 15.066 8.04596L14.52 8.48401M2.757 12.7H1.99997C1.63751 12.7 1.28989 12.556 1.03359 12.2997C0.777288 12.0434 0.633301 11.6958 0.633301 11.3333V4.00001C0.633301 3.46073 0.847526 2.94355 1.22885 2.56222M4.66663 11.3667C4.31685 11.3667 4.0333 11.6502 4.0333 12C4.0333 12.3498 4.31685 12.6333 4.66663 12.6333C5.01641 12.6333 5.29997 12.3498 5.29997 12C5.29997 11.6502 5.01641 11.3667 4.66663 11.3667ZM11.3333 11.3667C10.9835 11.3667 10.7 11.6502 10.7 12C10.7 12.3498 10.9835 12.6333 11.3333 12.6333C11.6831 12.6333 11.9666 12.3498 11.9666 12C11.9666 11.6502 11.6831 11.3667 11.3333 11.3667Z"
      fill="currentColor"
    />
  </svg>
);
export default TruckIcon;
