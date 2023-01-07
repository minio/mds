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

const LicenseIcon = (props: SVGProps<SVGSVGElement>) => (
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
        data-name="Uni\xF3n 16"
        d="M15.084 248.677c-8.375 0-15.186-7.333-15.186-16.344V70.89c0-9.016 6.811-16.354 15.186-16.354l118.74-1.037a62.9 62.9 0 0 1 4.355-11.793 62.879 62.879 0 0 1 6.645-10.7 61.818 61.818 0 0 1 8.719-9.186 61.885 61.885 0 0 1 10.6-7.323 62.176 62.176 0 0 1 29.791-7.6 62.232 62.232 0 0 1 62.164 62.164 61.645 61.645 0 0 1-3.574 20.762 61.809 61.809 0 0 1-9.9 17.787 62.654 62.654 0 0 1-14.977 13.581 61.989 61.989 0 0 1-18.74 8.129v103.014c0 9.011-6.8 16.344-15.17 16.344Zm4.492-172.963a14.386 14.386 0 0 0-3.795 9.851V217.65c0 7.682 5.8 13.93 12.939 13.93h151.4c7.121 0 12.916-6.248 12.916-13.93v-86.472a61.49 61.49 0 0 1-23.232-4.875 61.964 61.964 0 0 1-19.193-12.784 62.138 62.138 0 0 1-13.236-18.857 61.664 61.664 0 0 1-5.465-23.021H28.723a12.414 12.414 0 0 0-9.147 4.072Zm152.111-47.433a46.458 46.458 0 0 0-24.189 40.779 46.493 46.493 0 0 0 46.438 46.442 46.4 46.4 0 0 0 14.4-2.311 5.7 5.7 0 0 0 .391-.509l.184-.269v.566a46.525 46.525 0 0 0 12.549-6.574 46.832 46.832 0 0 0 10-10.039 46.2 46.2 0 0 0 6.57-12.7 46.119 46.119 0 0 0 2.357-14.6 46.5 46.5 0 0 0-46.453-46.447 46.451 46.451 0 0 0-22.247 5.662ZM45.818 209.303a1.006 1.006 0 0 1-1-1.009v-20.649a1.006 1.006 0 0 1 1-1.009h110.521a1.011 1.011 0 0 1 1.01 1.009v20.649a1.011 1.011 0 0 1-1.01 1.009Zm0-44.934a1.006 1.006 0 0 1-1-1.009v-20.649a1.006 1.006 0 0 1 1-1.009h110.521a1.011 1.011 0 0 1 1.01 1.009v20.649a1.011 1.011 0 0 1-1.01 1.009Zm0-44.934a1.006 1.006 0 0 1-1-1.009V97.777a1.006 1.006 0 0 1 1-1.009h88.053a1.009 1.009 0 0 1 1.008 1.009v20.649a1.009 1.009 0 0 1-1.008 1.009Zm144.836-27.656h-.023a6.229 6.229 0 0 1-4.484-1.886L172.17 75.921a6.4 6.4 0 0 1 .316-9.04 6.387 6.387 0 0 1 4.361-1.716 6.392 6.392 0 0 1 4.357 1.716l9.449 9.459 23.482-23.436a6.3 6.3 0 0 1 4.518-1.881 6.312 6.312 0 0 1 4.461 1.825l.053.057a6.323 6.323 0 0 1 1.895 4.484 6.3 6.3 0 0 1-1.838 4.5l-.057.057-27.982 27.951a6.211 6.211 0 0 1-4.48 1.886Z"
      />
      <path data-name="Rect\xE1ngulo 877" fill="none" d="M0 0h256v256H0z" />
    </g>
  </svg>
);

export default LicenseIcon;
