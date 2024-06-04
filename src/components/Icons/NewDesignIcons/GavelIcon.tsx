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

const GavelIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.82831 0.838387C10.1017 1.11175 10.1017 1.55497 9.82831 1.82834L9.65661 2.00003L14 6.34341L14.1717 6.17172C14.4451 5.89835 14.8883 5.89835 15.1616 6.17172C15.435 6.44509 15.435 6.8883 15.1616 7.16167L11.829 10.4943C11.8288 10.4945 11.8292 10.4941 11.829 10.4943C11.8288 10.4945 11.8278 10.4955 11.8276 10.4957L11.1616 11.1617C10.8883 11.435 10.4451 11.435 10.1717 11.1617C9.89832 10.8883 9.89832 10.4451 10.1717 10.1717L10.3434 10L9.66666 9.32331L4.8283 14.1617C4.43181 14.5582 3.89405 14.7809 3.33333 14.7809C2.77261 14.7809 2.23485 14.5582 1.83835 14.1617C1.44186 13.7652 1.21912 13.2274 1.21912 12.6667C1.21912 12.106 1.44186 11.5682 1.83836 11.1717L6.67671 6.33336L6 5.65664L5.8283 5.82834C5.55494 6.1017 5.11172 6.1017 4.83836 5.82834C4.56499 5.55497 4.56499 5.11175 4.83836 4.83839L5.5048 4.17194L8.17139 1.50535L8.83836 0.838387C9.11172 0.56502 9.55494 0.56502 9.82831 0.838387ZM8.66666 2.98998L6.98995 4.6667L8.16122 5.83797C8.16108 5.83783 8.16136 5.83811 8.16122 5.83797C8.16136 5.83811 8.16192 5.83866 8.16205 5.8388L11.3333 9.01008L13.01 7.33336L8.66666 2.98998ZM8.67671 8.33336L7.66666 7.32331L2.8283 12.1617C2.69436 12.2956 2.61912 12.4773 2.61912 12.6667C2.61912 12.8561 2.69436 13.0378 2.8283 13.1717C2.96225 13.3057 3.14391 13.3809 3.33333 13.3809C3.52275 13.3809 3.70441 13.3057 3.83836 13.1717L8.67671 8.33336Z"
      fill="currentColor"
    />
  </svg>
);
export default GavelIcon;
