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

const TriangleAlertIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.9864 1.59606C7.29208 1.41794 7.63954 1.3241 7.99333 1.3241C8.34711 1.3241 8.69457 1.41794 9.00025 1.59606C9.30554 1.77396 9.55825 2.02955 9.73266 2.33682L9.73333 2.33799L15.064 11.6667L15.0648 11.6681C15.2398 11.9717 15.3319 12.3158 15.332 12.6662C15.3321 13.0171 15.2398 13.3618 15.0645 13.6658C14.8892 13.9698 14.637 14.2223 14.3333 14.398C14.0295 14.5737 13.6849 14.6663 13.334 14.6667L2.66927 14.6667C2.31784 14.6693 1.97192 14.5792 1.66635 14.4055C1.35981 14.2313 1.10477 13.9791 0.927105 13.6745C0.749437 13.3699 0.655449 13.0238 0.654668 12.6712C0.653888 12.3191 0.746067 11.9731 0.921873 11.668L0.922659 11.6667L6.25333 2.33799L6.25399 2.33683C6.4284 2.02955 6.68111 1.77396 6.9864 1.59606ZM7.99333 2.65743C7.8754 2.65743 7.75958 2.68871 7.65769 2.74809C7.55579 2.80746 7.47147 2.8928 7.41333 2.9954L7.41216 2.99746L2.07882 12.3308L2.07733 12.3334C2.01856 12.4352 1.98774 12.5507 1.988 12.6682C1.98826 12.7858 2.01959 12.9011 2.07881 13.0027C2.13803 13.1042 2.22304 13.1883 2.32523 13.2463C2.42741 13.3044 2.54313 13.3344 2.66066 13.3334L2.66666 13.3333L13.3326 13.3334C13.4494 13.3331 13.5647 13.3022 13.6657 13.2438C13.767 13.1852 13.8511 13.1011 13.9095 12.9997C13.9679 12.8984 13.9987 12.7835 13.9986 12.6665C13.9986 12.5496 13.9678 12.4347 13.9093 12.3334L13.9078 12.3308L8.57332 2.9954C8.51518 2.8928 8.43086 2.80746 8.32897 2.74809C8.22708 2.68871 8.11126 2.65743 7.99333 2.65743Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.99999 5.33336C8.36818 5.33336 8.66666 5.63184 8.66666 6.00003V8.66669C8.66666 9.03488 8.36818 9.33336 7.99999 9.33336C7.6318 9.33336 7.33333 9.03488 7.33333 8.66669V6.00003C7.33333 5.63184 7.6318 5.33336 7.99999 5.33336Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.33333 11.3334C7.33333 10.9652 7.6318 10.6667 7.99999 10.6667H8.00666C8.37485 10.6667 8.67333 10.9652 8.67333 11.3334C8.67333 11.7016 8.37485 12 8.00666 12H7.99999C7.6318 12 7.33333 11.7016 7.33333 11.3334Z"
      fill="currentColor"
    />
  </svg>
);
export default TriangleAlertIcon;
