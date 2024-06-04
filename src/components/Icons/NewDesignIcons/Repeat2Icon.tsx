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

const Repeat2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33336 3.30005C3.51901 3.30005 3.69706 3.3738 3.82834 3.50507L5.82834 5.50507C6.1017 5.77844 6.1017 6.22166 5.82834 6.49502C5.55497 6.76839 5.11175 6.76839 4.83839 6.49502L4.03336 5.69V10.6667C4.03336 10.8347 4.10009 10.9958 4.21886 11.1145C4.33763 11.2333 4.49872 11.3 4.66669 11.3H8.66669C9.05329 11.3 9.36669 11.6134 9.36669 12C9.36669 12.3866 9.05329 12.7 8.66669 12.7H4.66669C4.12742 12.7 3.61023 12.4858 3.22891 12.1045C2.84759 11.7232 2.63336 11.206 2.63336 10.6667V5.69L1.82834 6.49502C1.55497 6.76839 1.11175 6.76839 0.838387 6.49502C0.56502 6.22166 0.56502 5.77844 0.838387 5.50507L2.83839 3.50507C2.96966 3.3738 3.14771 3.30005 3.33336 3.30005ZM11.3334 4.70005H7.33336C6.94676 4.70005 6.63336 4.38665 6.63336 4.00005C6.63336 3.61345 6.94676 3.30005 7.33336 3.30005H11.3334C11.8726 3.30005 12.3898 3.51427 12.7711 3.8956C13.1525 4.27692 13.3667 4.79411 13.3667 5.33338V10.3101L14.1717 9.50507C14.4451 9.23171 14.8883 9.23171 15.1617 9.50507C15.435 9.77844 15.435 10.2217 15.1617 10.495L13.1617 12.495C13.0304 12.6263 12.8523 12.7 12.6667 12.7C12.481 12.7 12.303 12.6263 12.1717 12.495L10.1717 10.495C9.89835 10.2217 9.89835 9.77844 10.1717 9.50507C10.4451 9.23171 10.8883 9.23171 11.1617 9.50507L11.9667 10.3101V5.33338C11.9667 5.16541 11.9 5.00432 11.7812 4.88555C11.6624 4.76677 11.5013 4.70005 11.3334 4.70005Z"
      fill="currentColor"
    />
  </svg>
);
export default Repeat2Icon;
