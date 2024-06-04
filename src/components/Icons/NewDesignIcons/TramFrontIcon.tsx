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

const TramFrontIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.00001 2.70005C3.65023 2.70005 3.36667 2.9836 3.36667 3.33338V6.63338H7.30001V2.70005H4.00001ZM4.00001 1.30005C2.87703 1.30005 1.96667 2.2104 1.96667 3.33338V11.3334C1.96667 12.4564 2.87703 13.3667 4.00001 13.3667H4.02538L3.41757 14.2784C3.20313 14.6001 3.29005 15.0347 3.61172 15.2492C3.93339 15.4636 4.368 15.3767 4.58244 15.055L5.70797 13.3667H10.292L11.4176 15.055C11.632 15.3767 12.0666 15.4636 12.3883 15.2492C12.71 15.0347 12.7969 14.6001 12.5824 14.2784L11.9746 13.3667H12C13.123 13.3667 14.0333 12.4564 14.0333 11.3334V3.33338C14.0333 2.2104 13.123 1.30005 12 1.30005H4.00001ZM8.70001 2.70005V6.63338H12.6333V3.33338C12.6333 2.9836 12.3498 2.70005 12 2.70005H8.70001ZM12.6333 8.03338H3.36667V11.3334C3.36667 11.6832 3.65023 11.9667 4.00001 11.9667H5.32376C5.33057 11.9666 5.33739 11.9666 5.34421 11.9667H10.6558C10.6626 11.9666 10.6694 11.9666 10.6763 11.9667H12C12.3498 11.9667 12.6333 11.6832 12.6333 11.3334V8.03338Z"
      fill="currentColor"
    />
  </svg>
);
export default TramFrontIcon;
