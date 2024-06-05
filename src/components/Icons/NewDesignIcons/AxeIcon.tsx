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

const AxeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.17173 1.50501C8.4451 1.23165 8.88831 1.23165 9.16168 1.50501L12.9567 5.29999H14.6667C14.8667 5.29999 15.0572 5.38557 15.1901 5.53514C15.3229 5.6847 15.3854 5.88395 15.3618 6.0826C15.202 7.42734 14.5944 8.67923 13.6369 9.6368C12.6793 10.5944 11.4274 11.2019 10.0826 11.3618C9.884 11.3854 9.68475 11.3229 9.53519 11.19C9.38562 11.0572 9.30004 10.8667 9.30004 10.6667V9.02327L4.16168 14.1616C3.76519 14.5581 3.22743 14.7809 2.6667 14.7809C2.10598 14.7809 1.56822 14.5581 1.17173 14.1616C0.775237 13.7651 0.55249 13.2274 0.55249 12.6667C0.55249 12.1059 0.775237 11.5682 1.17173 11.1717L6.34342 5.99999L5.50506 5.16163C5.37379 5.03035 5.30004 4.85231 5.30004 4.66665C5.30004 4.481 5.37379 4.30295 5.50506 4.17168L8.17173 1.50501ZM7.33337 6.98994L2.16168 12.1616C2.02774 12.2956 1.95249 12.4772 1.95249 12.6667C1.95249 12.8561 2.02774 13.0377 2.16168 13.1717C2.29562 13.3056 2.47728 13.3809 2.6667 13.3809C2.85612 13.3809 3.03779 13.3056 3.17173 13.1717L8.34342 7.99999L7.33337 6.98994ZM6.98999 4.66665L8.6667 2.98994L12.1717 6.49496C12.303 6.62624 12.4811 6.69999 12.6667 6.69999H13.8092C13.5901 7.43124 13.1925 8.10125 12.6469 8.64685C12.1013 9.19245 11.4313 9.59009 10.7 9.80912V8.66665C10.7 8.481 10.6263 8.30295 10.495 8.17168L6.98999 4.66665Z"
      fill="currentColor"
    />
  </svg>
);
export default AxeIcon;
