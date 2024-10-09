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

const LampCeilingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 0.633362C8.3866 0.633362 8.7 0.946762 8.7 1.33336V3.9667H12C12.2766 3.9667 12.5273 4.12961 12.6397 4.3824L15.3063 10.3824C15.4026 10.5989 15.3827 10.8495 15.2536 11.0481C15.1245 11.2468 14.9036 11.3667 14.6667 11.3667H10.6998C10.6982 11.4794 10.6897 11.5922 10.674 11.7045C10.6142 12.1319 10.4528 12.5388 10.2033 12.891C9.95386 13.2432 9.62361 13.5304 9.24025 13.7287C8.85689 13.9269 8.43159 14.0304 8 14.0304C7.56841 14.0304 7.14311 13.9269 6.75975 13.7287C6.37639 13.5304 6.04614 13.2432 5.79669 12.891C5.54723 12.5388 5.38584 12.1319 5.32604 11.7045C5.31034 11.5922 5.30176 11.4794 5.30024 11.3667H1.33333C1.09638 11.3667 0.875509 11.2468 0.746389 11.0481C0.617269 10.8495 0.597429 10.5989 0.693665 10.3824L3.36033 4.3824C3.47268 4.12961 3.72337 3.9667 4 3.9667H7.3V1.33336C7.3 0.946762 7.6134 0.633362 8 0.633362ZM4.45491 5.36669L2.41047 9.96669H6.09706C6.10788 9.96644 6.11872 9.96644 6.12959 9.96669H9.87041C9.88128 9.96644 9.89212 9.96644 9.90294 9.96669H13.5895L11.5451 5.36669H4.45491ZM9.29949 11.3667H6.70051C6.70185 11.4147 6.70585 11.4627 6.71254 11.5105C6.74133 11.7163 6.81904 11.9122 6.93915 12.0818C7.05925 12.2514 7.21826 12.3897 7.40284 12.4851C7.58742 12.5806 7.7922 12.6304 8 12.6304C8.2078 12.6304 8.41257 12.5806 8.59716 12.4851C8.78174 12.3897 8.94074 12.2514 9.06085 12.0818C9.18096 11.9122 9.25867 11.7163 9.28746 11.5105C9.29415 11.4627 9.29815 11.4147 9.29949 11.3667Z"
      fill="currentColor"
    />
  </svg>
);
export default LampCeilingIcon;
