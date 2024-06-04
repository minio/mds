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

const CornerUpRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.50491 2.17168C9.77828 1.89832 10.2215 1.89832 10.4949 2.17168L13.8282 5.50502C14.1016 5.77839 14.1016 6.2216 13.8282 6.49497L10.4949 9.8283C10.2215 10.1017 9.77828 10.1017 9.50491 9.8283C9.23154 9.55493 9.23154 9.11172 9.50491 8.83835L11.6433 6.69999H5.33322C4.81163 6.69999 4.3114 6.90719 3.94258 7.27602C3.57375 7.64484 3.36655 8.14507 3.36655 8.66666V13.3333C3.36655 13.7199 3.05315 14.0333 2.66655 14.0333C2.27995 14.0333 1.96655 13.7199 1.96655 13.3333V8.66666C1.96655 7.77376 2.32125 6.91744 2.95263 6.28607C3.584 5.65469 4.44032 5.29999 5.33322 5.29999H11.6433L9.50491 3.16163C9.23154 2.88827 9.23154 2.44505 9.50491 2.17168Z"
      fill="currentColor"
    />
  </svg>
);
export default CornerUpRightIcon;
