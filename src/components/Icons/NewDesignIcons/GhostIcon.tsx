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

const GhostIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.7338 2.40048C4.86527 1.26901 6.39987 0.633362 8.00001 0.633362C9.60015 0.633362 11.1347 1.26901 12.2662 2.40048C13.3977 3.53195 14.0333 5.06656 14.0333 6.66669V14.6667C14.0333 14.9498 13.8628 15.2051 13.6012 15.3134C13.3396 15.4218 13.0386 15.3619 12.8384 15.1617L11.3333 13.6566L10.1616 14.8283C9.88828 15.1017 9.44507 15.1017 9.1717 14.8283L8.00001 13.6566L6.82832 14.8283C6.55495 15.1017 6.11173 15.1017 5.83837 14.8283L4.66667 13.6566L3.16165 15.1617C2.96145 15.3619 2.66037 15.4218 2.3988 15.3134C2.13722 15.2051 1.96667 14.9498 1.96667 14.6667V6.66669C1.96667 5.06656 2.60233 3.53195 3.7338 2.40048ZM8.00001 2.03336C6.77117 2.03336 5.59267 2.52152 4.72375 3.39043C3.85483 4.25935 3.36667 5.43786 3.36667 6.66669V12.9767L4.1717 12.1717C4.44507 11.8984 4.88828 11.8984 5.16165 12.1717L6.33334 13.3434L7.50503 12.1717C7.7784 11.8984 8.22162 11.8984 8.49498 12.1717L9.66667 13.3434L10.8384 12.1717C11.1117 11.8984 11.5549 11.8984 11.8283 12.1717L12.6333 12.9767V6.66669C12.6333 5.43786 12.1452 4.25935 11.2763 3.39043C10.4074 2.52152 9.22884 2.03336 8.00001 2.03336ZM5.30001 6.66669C5.30001 6.2801 5.61341 5.96669 6.00001 5.96669H6.00667C6.39327 5.96669 6.70668 6.2801 6.70668 6.66669C6.70668 7.05329 6.39327 7.36669 6.00667 7.36669H6.00001C5.61341 7.36669 5.30001 7.05329 5.30001 6.66669ZM9.30001 6.66669C9.30001 6.2801 9.61341 5.96669 10 5.96669H10.0067C10.3933 5.96669 10.7067 6.2801 10.7067 6.66669C10.7067 7.05329 10.3933 7.36669 10.0067 7.36669H10C9.61341 7.36669 9.30001 7.05329 9.30001 6.66669Z"
      fill="currentColor"
    />
  </svg>
);
export default GhostIcon;
