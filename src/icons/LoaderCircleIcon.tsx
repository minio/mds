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

const LoaderCircleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.63769 2.95905C8.57323 2.61321 7.4266 2.61323 6.36215 2.9591C5.2977 3.30497 4.37006 3.97894 3.71219 4.88443C3.05433 5.78991 2.7 6.88041 2.69999 7.99964C2.69998 9.11888 3.05429 10.2094 3.71215 11.1149C4.37 12.0204 5.29763 12.6944 6.36208 13.0402C7.42652 13.3861 8.57315 13.3862 9.63762 13.0403C10.7021 12.6945 11.6297 12.0206 12.2877 11.1151C12.9456 10.2097 13.2999 9.11918 13.3 7.99994C13.3 7.61334 13.6134 7.29996 14 7.29998C14.3866 7.3 14.7 7.61341 14.7 8.00001C14.6999 9.41489 14.2519 10.7934 13.4202 11.9381C12.5885 13.0827 11.4158 13.9346 10.0702 14.3718C8.72455 14.809 7.27504 14.809 5.92942 14.3717C4.5838 13.9345 3.41114 13.0824 2.57951 11.9378C1.74788 10.7931 1.29998 9.41452 1.29999 7.99963C1.3 6.58475 1.74792 5.20619 2.57957 4.06153C3.41121 2.91686 4.58388 2.06486 5.92951 1.62762C7.27514 1.19039 8.72465 1.19037 10.0703 1.62757C10.438 1.74703 10.6392 2.14193 10.5197 2.50961C10.4003 2.87729 10.0054 3.07851 9.63769 2.95905Z"
      fill="currentColor"
    />
  </svg>
);
export default LoaderCircleIcon;
