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

const LifeBuoyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.31488 4.30489C2.51232 5.32108 2.0333 6.60461 2.0333 8.00003C2.0333 9.39544 2.51232 10.679 3.31488 11.6952L5.17614 9.8339C4.83279 9.30629 4.6333 8.67645 4.6333 8.00003C4.6333 7.3236 4.83279 6.69377 5.17614 6.16615L3.31488 4.30489ZM4.30483 3.31494L6.16609 5.1762C6.69371 4.83285 7.32354 4.63336 7.99997 4.63336C8.67639 4.63336 9.30622 4.83285 9.83384 5.1762L11.6951 3.31494C10.6789 2.51238 9.39538 2.03336 7.99997 2.03336C6.60455 2.03336 5.32102 2.51238 4.30483 3.31494ZM12.6851 4.30489L10.8238 6.16615C11.1671 6.69377 11.3666 7.3236 11.3666 8.00003C11.3666 8.67645 11.1671 9.30629 10.8238 9.8339L12.6851 11.6952C13.4876 10.679 13.9666 9.39544 13.9666 8.00003C13.9666 6.60461 13.4876 5.32108 12.6851 4.30489ZM11.6951 12.6851L9.83384 10.8239C9.30622 11.1672 8.67639 11.3667 7.99997 11.3667C7.32354 11.3667 6.69371 11.1672 6.16609 10.8239L4.30483 12.6851C5.32102 13.4877 6.60455 13.9667 7.99997 13.9667C9.39538 13.9667 10.6789 13.4877 11.6951 12.6851ZM0.633301 8.00003C0.633301 3.93153 3.93147 0.633362 7.99997 0.633362C12.0685 0.633362 15.3666 3.93153 15.3666 8.00003C15.3666 12.0685 12.0685 15.3667 7.99997 15.3667C3.93147 15.3667 0.633301 12.0685 0.633301 8.00003ZM7.99997 6.03336C6.91381 6.03336 6.0333 6.91387 6.0333 8.00003C6.0333 9.08619 6.91381 9.96669 7.99997 9.96669C9.08613 9.96669 9.96663 9.08619 9.96663 8.00003C9.96663 6.91387 9.08613 6.03336 7.99997 6.03336Z"
      fill="currentColor"
    />
  </svg>
);
export default LifeBuoyIcon;
