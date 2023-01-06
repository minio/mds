// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <defs>
      <clipPath id="prefix__a">
        <path d="M0 0h256v256H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#prefix__a)">
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        data-name="Uni\xF3n 18"
        d="M17.271 255.95a17.247 17.247 0 0 1-12.236-5.086 17.291 17.291 0 0 1-5.086-12.239V17.274A17.25 17.25 0 0 1 5.035 5.035 17.245 17.245 0 0 1 17.271-.051h221.354a17.237 17.237 0 0 1 12.244 5.091 17.238 17.238 0 0 1 5.08 12.253v221.332a17.256 17.256 0 0 1-5.084 12.239 17.256 17.256 0 0 1-12.24 5.086Zm5.121-233.556a14.786 14.786 0 0 0-4.357 10.526v190.083a14.784 14.784 0 0 0 4.357 10.521 14.782 14.782 0 0 0 10.52 4.362h190.09a14.788 14.788 0 0 0 10.518-4.362 14.778 14.778 0 0 0 4.359-10.521l-.016-190.083a14.758 14.758 0 0 0-4.357-10.521 14.758 14.758 0 0 0-10.514-4.362H32.912a14.777 14.777 0 0 0-10.52 4.356Zm133.525 194.628a15.4 15.4 0 0 1-10.963-4.539 15.409 15.409 0 0 1-4.545-10.969V178.65a15.406 15.406 0 0 1 4.545-10.964 15.4 15.4 0 0 1 10.957-4.539h48.84a15.4 15.4 0 0 1 10.959 4.539 15.409 15.409 0 0 1 4.539 10.964v22.873a15.4 15.4 0 0 1-4.539 10.959 15.385 15.385 0 0 1-10.959 4.539Zm-99.047-.02c-8.545 0-15.5-6.375-15.5-14.213v-74.217c0-7.838 6.957-14.218 15.5-14.218h48.834c8.547 0 15.5 6.38 15.5 14.218v74.217c0 7.837-6.949 14.213-15.5 14.213Zm99.047-75.462c-8.545 0-15.5-6.375-15.5-14.213V53.11c0-7.838 6.957-14.218 15.5-14.218h48.824c8.553 0 15.508 6.38 15.508 14.218v74.217c0 7.838-6.955 14.213-15.508 14.213ZM56.87 92.781a15.4 15.4 0 0 1-10.957-4.539 15.407 15.407 0 0 1-4.545-10.964V54.395a15.406 15.406 0 0 1 4.545-10.964 15.4 15.4 0 0 1 10.957-4.539h48.824a15.408 15.408 0 0 1 10.969 4.544A15.4 15.4 0 0 1 121.2 54.4v22.873a15.4 15.4 0 0 1-4.537 10.964 15.408 15.408 0 0 1-10.969 4.544Z"
      />
      <path data-name="Rect\xE1ngulo 881" fill="none" d="M0 0h256v256H0z" />
    </g>
  </svg>
);

export default DashboardIcon;
