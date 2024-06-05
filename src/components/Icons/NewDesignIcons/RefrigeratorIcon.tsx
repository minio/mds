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

const RefrigeratorIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 2.0333C5.47841 2.0333 4.97818 2.2405 4.60935 2.60932C4.24053 2.97815 4.03333 3.47837 4.03333 3.99997V5.96663H9.3V4.66663C9.3 4.28003 9.6134 3.96663 10 3.96663C10.3866 3.96663 10.7 4.28003 10.7 4.66663V5.96663H11.9667V3.99997C11.9667 3.47838 11.7595 2.97815 11.3906 2.60932C11.0218 2.2405 10.5216 2.0333 10 2.0333H6ZM13.3667 3.99997C13.3667 3.10707 13.012 2.25075 12.3806 1.61937C11.7492 0.988002 10.8929 0.633301 10 0.633301H6C5.1071 0.633301 4.25078 0.988002 3.6194 1.61937C2.98803 2.25075 2.63333 3.10707 2.63333 3.99997V13.3333C2.63333 13.8726 2.84756 14.3898 3.22888 14.7711C3.6102 15.1524 4.12739 15.3666 4.66666 15.3666H11.3333C11.8726 15.3666 12.3898 15.1524 12.7711 14.7711C13.1524 14.3898 13.3667 13.8726 13.3667 13.3333V3.99997ZM11.9667 7.36663H10.7V8.66663C10.7 9.05323 10.3866 9.36663 10 9.36663C9.6134 9.36663 9.3 9.05323 9.3 8.66663V7.36663H4.03333V13.3333C4.03333 13.5013 4.10006 13.6624 4.21883 13.7811C4.3376 13.8999 4.49869 13.9666 4.66666 13.9666H11.3333C11.5013 13.9666 11.6624 13.8999 11.7812 13.7811C11.8999 13.6624 11.9667 13.5013 11.9667 13.3333V7.36663Z"
      fill="currentColor"
    />
  </svg>
);
export default RefrigeratorIcon;
