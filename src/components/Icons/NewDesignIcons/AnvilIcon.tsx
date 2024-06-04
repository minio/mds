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

const AnvilIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.36666 3.36667V7.30001H10C11.052 7.30001 12.061 6.88209 12.8049 6.1382C13.5409 5.40216 13.9578 4.40666 13.9665 3.36667H5.36666ZM5.3 8.6996C4.94961 8.69106 4.61538 8.54815 4.36695 8.29972C4.11848 8.05125 3.97557 7.71696 3.96707 7.36651C3.08607 7.35791 2.24301 7.00421 1.61941 6.3806C0.988033 5.74923 0.633331 4.8929 0.633331 4.00001C0.633331 3.63755 0.777319 3.28993 1.03362 3.03363C1.28992 2.77733 1.63753 2.63334 2 2.63334H4.15954C4.21692 2.53711 4.28639 2.44752 4.36695 2.36696C4.62325 2.11066 4.97087 1.96667 5.33333 1.96667H14C14.3625 1.96667 14.7101 2.11066 14.9664 2.36696C15.2227 2.62326 15.3667 2.97088 15.3667 3.33334C15.3667 4.75667 14.8012 6.1217 13.7948 7.12815C12.9548 7.96815 11.865 8.50094 10.7 8.65418V10.6335C11.404 10.6422 12.0774 10.9257 12.5759 11.4242C13.0822 11.9305 13.3667 12.6173 13.3667 13.3333C13.3667 13.6958 13.2227 14.0434 12.9664 14.2997C12.7101 14.556 12.3625 14.7 12 14.7H4C3.63754 14.7 3.28992 14.556 3.03362 14.2997C2.77732 14.0434 2.63333 13.6958 2.63333 13.3333C2.63333 12.6173 2.91779 11.9305 3.42414 11.4242C3.92263 10.9257 4.59596 10.6422 5.3 10.6335V8.6996ZM6.7 10.6333V8.70001H9.3V10.6333H6.7ZM5.33333 12.0333C4.98855 12.0333 4.65789 12.1703 4.41409 12.4141C4.17816 12.65 4.04228 12.9673 4.03376 13.3H11.9662C11.9577 12.9673 11.8218 12.65 11.5859 12.4141C11.3421 12.1703 11.0114 12.0333 10.6667 12.0333H5.33333ZM3.96666 4.03334H2.03361C2.04224 4.54287 2.2484 5.02969 2.60935 5.39065C2.97031 5.75161 3.45713 5.95777 3.96666 5.96639V4.03334Z"
      fill="currentColor"
    />
  </svg>
);
export default AnvilIcon;
