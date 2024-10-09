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

const Redo2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.50491 2.1717C9.77828 1.89833 10.2215 1.89833 10.4949 2.1717L13.8282 5.50503C14.1016 5.7784 14.1016 6.22162 13.8282 6.49498L10.4949 9.82832C10.2215 10.1017 9.77828 10.1017 9.50491 9.82832C9.23154 9.55495 9.23154 9.11173 9.50491 8.83837L11.6433 6.70001H6.33322C5.54641 6.70001 4.79183 7.01257 4.23547 7.56892C3.67911 8.12528 3.36655 8.87987 3.36655 9.66667C3.36655 10.0563 3.44329 10.442 3.59238 10.802C3.74147 11.1619 3.95999 11.4889 4.23547 11.7644C4.79183 12.3208 5.54641 12.6333 6.33322 12.6333H8.66655C9.05315 12.6333 9.36655 12.9467 9.36655 13.3333C9.36655 13.7199 9.05315 14.0333 8.66655 14.0333H6.33322C5.17511 14.0333 4.06443 13.5733 3.24552 12.7544C2.84004 12.3489 2.51839 11.8675 2.29895 11.3377C2.0795 10.8079 1.96655 10.2401 1.96655 9.66667C1.96655 8.50856 2.42661 7.39788 3.24552 6.57898C4.06443 5.76007 5.17511 5.30001 6.33322 5.30001H11.6433L9.50491 3.16165C9.23154 2.88828 9.23154 2.44507 9.50491 2.1717Z"
      fill="currentColor"
    />
  </svg>
);
export default Redo2Icon;
