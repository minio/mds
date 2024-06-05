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

const TentIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.31398 1.3954C6.64792 1.2006 7.07654 1.31339 7.27134 1.64733L8.00003 2.89651L8.72872 1.64733C8.92351 1.31339 9.35213 1.2006 9.68607 1.3954C10.02 1.59019 10.1328 2.01881 9.93801 2.35275L8.81042 4.28576L14.0688 13.3H14.6667C15.0533 13.3 15.3667 13.6134 15.3667 14C15.3667 14.3866 15.0533 14.7 14.6667 14.7H13.6799C13.6715 14.7002 13.6631 14.7002 13.6548 14.7H10.3466C10.3382 14.7002 10.3298 14.7002 10.3214 14.7H5.67863C5.67025 14.7002 5.66185 14.7002 5.65345 14.7H2.3453C2.33691 14.7002 2.32852 14.7002 2.32011 14.7H1.33336C0.946762 14.7 0.633362 14.3866 0.633362 14C0.633362 13.6134 0.946762 13.3 1.33336 13.3H1.9313L7.18964 4.28576L6.06205 2.35275C5.86725 2.01881 5.98005 1.59019 6.31398 1.3954ZM8.00003 5.675L3.55209 13.3H5.26464L7.39538 9.64733C7.52083 9.43228 7.75106 9.30004 8.00003 9.30004C8.24899 9.30004 8.47923 9.43228 8.60467 9.64733L10.7354 13.3H12.448L8.00003 5.675ZM9.11464 13.3L8.00003 11.3893L6.88542 13.3H9.11464Z"
      fill="currentColor"
    />
  </svg>
);
export default TentIcon;
