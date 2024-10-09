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

const UserRoundSearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.66663 2.70005C5.21228 2.70005 4.0333 3.87903 4.0333 5.33338C4.0333 6.78773 5.21228 7.96672 6.66663 7.96672C8.12098 7.96672 9.29997 6.78773 9.29997 5.33338C9.29997 3.87903 8.12098 2.70005 6.66663 2.70005ZM2.6333 5.33338C2.6333 3.10583 4.43909 1.30005 6.66663 1.30005C8.89418 1.30005 10.7 3.10583 10.7 5.33338C10.7 6.7172 10.0031 7.93825 8.94109 8.66471C8.99782 8.80928 9.00705 8.97355 8.95611 9.13302C8.83849 9.5013 8.4446 9.70449 8.07632 9.58686C7.3817 9.36501 6.64452 9.31023 5.92474 9.42699C5.20496 9.54375 4.5229 9.82874 3.93402 10.2588C3.34515 10.6889 2.8661 11.2518 2.53582 11.9019C2.20554 12.552 2.03337 13.2709 2.0333 14.0001C2.03327 14.3867 1.71984 14.7001 1.33324 14.7C0.946637 14.7 0.633265 14.3866 0.633301 14C0.633388 13.0505 0.857585 12.1144 1.28766 11.2678C1.71773 10.4213 2.34154 9.6882 3.10834 9.1282C3.44292 8.88386 3.80059 8.67548 4.17537 8.50557C3.23636 7.7671 2.6333 6.62067 2.6333 5.33338ZM12 10.7C11.282 10.7 10.7 11.2821 10.7 12C10.7 12.718 11.282 13.3 12 13.3C12.3102 13.3 12.595 13.1914 12.8185 13.01C12.8434 12.973 12.8722 12.9378 12.905 12.9051C12.9377 12.8723 12.9729 12.8435 13.01 12.8186C13.1913 12.5951 13.3 12.3103 13.3 12C13.3 11.2821 12.7179 10.7 12 10.7ZM14.3392 13.3493C14.5686 12.9523 14.7 12.4915 14.7 12C14.7 10.5089 13.4911 9.30005 12 9.30005C10.5088 9.30005 9.29997 10.5089 9.29997 12C9.29997 13.4912 10.5088 14.7 12 14.7C12.4915 14.7 12.9523 14.5687 13.3492 14.3393L14.1717 15.1617C14.445 15.4351 14.8882 15.4351 15.1616 15.1617C15.435 14.8883 15.435 14.4451 15.1616 14.1717L14.3392 13.3493Z"
      fill="currentColor"
    />
  </svg>
);
export default UserRoundSearchIcon;
