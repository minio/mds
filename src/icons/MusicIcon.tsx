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

const MusicIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.4525 1.46594C14.6095 1.59894 14.7 1.79429 14.7 2.00005V10.6667C14.7 12.1579 13.4912 13.3667 12 13.3667C10.5088 13.3667 9.29999 12.1579 9.29999 10.6667C9.29999 9.17555 10.5088 7.96672 12 7.96672C12.4713 7.96672 12.9144 8.08747 13.3 8.29972V2.82638L6.69999 3.92638V12.0001C6.69999 13.4912 5.49116 14.7001 3.99999 14.7001C2.50882 14.7001 1.29999 13.4912 1.29999 12.0001C1.29999 10.5089 2.50882 9.30005 3.99999 9.30005C4.47127 9.30005 4.91436 9.4208 5.29999 9.63305V3.33339C5.29999 2.9912 5.54738 2.69917 5.88491 2.64291L13.8849 1.30958C14.0879 1.27575 14.2954 1.33294 14.4525 1.46594ZM5.29999 12.0001C5.29999 11.2821 4.71796 10.7001 3.99999 10.7001C3.28202 10.7001 2.69999 11.2821 2.69999 12.0001C2.69999 12.718 3.28202 13.3001 3.99999 13.3001C4.71796 13.3001 5.29999 12.718 5.29999 12.0001ZM13.3 10.6667C13.3 9.94875 12.718 9.36672 12 9.36672C11.282 9.36672 10.7 9.94875 10.7 10.6667C10.7 11.3847 11.282 11.9667 12 11.9667C12.718 11.9667 13.3 11.3847 13.3 10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default MusicIcon;
