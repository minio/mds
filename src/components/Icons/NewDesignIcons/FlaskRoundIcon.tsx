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

const FlaskRoundIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.43023 0.633345C9.39853 0.62895 9.36614 0.626678 9.33323 0.626678C9.30032 0.626678 9.26793 0.62895 9.23623 0.633345H5.66656C5.27996 0.633345 4.96656 0.946746 4.96656 1.33335C4.96656 1.71994 5.27996 2.03335 5.66656 2.03335H5.96656V5.71876C5.036 6.12969 4.24769 6.81502 3.71102 7.68873C3.15527 8.59351 2.90172 9.64768 2.98066 10.6997C2.98139 10.7154 2.98264 10.731 2.98439 10.7464C2.99455 10.8667 3.00906 10.987 3.02799 11.107C3.21473 12.2915 3.81818 13.3703 4.72968 14.1494C5.64117 14.9284 6.80084 15.3565 7.9999 15.3565C9.19895 15.3565 10.3586 14.9284 11.2701 14.1494C12.1816 13.3703 12.7851 12.2915 12.9718 11.107C12.9907 10.987 13.0052 10.8667 13.0154 10.7464C13.0172 10.731 13.0184 10.7154 13.0191 10.6997C13.0981 9.64769 12.8445 8.59352 12.2888 7.68873C11.7521 6.81502 10.9638 6.12969 10.0332 5.71876V2.03335H10.3332C10.7198 2.03335 11.0332 1.71994 11.0332 1.33335C11.0332 0.946746 10.7198 0.633345 10.3332 0.633345H9.43023ZM11.6157 9.96668C11.5621 9.4228 11.386 8.89392 11.0958 8.42147C10.6428 7.68395 9.9414 7.13237 9.11785 6.86605C8.82896 6.77263 8.63323 6.50363 8.63323 6.20001V2.03335H7.36656V6.18397C7.36687 6.19701 7.3668 6.21002 7.36638 6.22298C7.35874 6.55742 7.11653 6.83392 6.79784 6.89439C6.01069 7.17034 5.34147 7.70918 4.90396 8.42147C4.61376 8.89392 4.43771 9.42279 4.38409 9.96668H11.6157ZM4.51965 11.3667C4.71909 12.0318 5.1062 12.6295 5.63927 13.0851C6.29724 13.6475 7.13435 13.9565 7.9999 13.9565C8.86544 13.9565 9.70255 13.6475 10.3605 13.0851C10.8936 12.6295 11.2807 12.0318 11.4801 11.3667H4.51965Z"
      fill="currentColor"
    />
  </svg>
);
export default FlaskRoundIcon;
