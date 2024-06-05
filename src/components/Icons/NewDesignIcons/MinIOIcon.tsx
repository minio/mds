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

const MinIOIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M10.2432 0.78087L12.3442 4.209C12.3491 4.21579 12.3518 4.22394 12.3518 4.2323C12.3518 4.24066 12.3491 4.24881 12.3442 4.2556C12.3407 4.25943 12.3364 4.26249 12.3316 4.26458C12.3268 4.26667 12.3217 4.26775 12.3164 4.26775C12.3112 4.26775 12.306 4.26667 12.3012 4.26458C12.2964 4.26249 12.2921 4.25943 12.2886 4.2556L9.56654 1.42656L10.2432 0.78087Z"
      fill="currentColor"
    />
    <path
      d="M5.60252 10.0091C6.06356 9.03632 6.69008 8.15048 7.45433 7.39084C7.74502 7.10116 8.05431 6.83063 8.38023 6.58096V8.57793L5.60252 10.0091ZM4 11.8596L8.38023 9.64076V14.7219L9.36622 16V9.12155L9.96494 8.81313C10.3791 8.60515 10.7386 8.30345 11.0148 7.93215C11.291 7.56084 11.4762 7.13025 11.5556 6.67482C11.635 6.21938 11.6063 5.75174 11.472 5.30932C11.3376 4.86689 11.1012 4.46196 10.7818 4.1269L8.52713 1.77713C8.4372 1.68043 8.38931 1.5522 8.39389 1.42041C8.39848 1.28863 8.45518 1.16401 8.55161 1.07376C8.64898 0.983979 8.77798 0.936173 8.91054 0.940744C9.04309 0.945315 9.16847 1.00189 9.25939 1.09816L9.57544 1.42656L10.2432 0.77865C9.44412 -0.255337 8.46258 -0.124425 7.89947 0.392569C7.62247 0.652924 7.46034 1.01217 7.44866 1.39152C7.43698 1.77087 7.57669 2.13936 7.83715 2.41617L10.1163 4.78368C10.3232 5.005 10.4779 5.26967 10.5689 5.5583C10.66 5.84694 10.685 6.15222 10.6424 6.45177C10.5997 6.75133 10.4903 7.03757 10.3223 7.28951C10.1542 7.54146 9.93173 7.75273 9.67115 7.90783L9.36177 8.06759V4.85691C8.00462 5.55394 6.81966 6.54269 5.89242 7.75178C4.96519 8.96087 4.31883 10.3601 4 11.8485V11.8596Z"
      fill="currentColor"
    />
    <path
      d="M9.36622 9.11932V10.1577L8.38023 10.657V9.62522L9.36622 9.11932Z"
      fill="currentColor"
    />
  </svg>
);
export default MinIOIcon;
