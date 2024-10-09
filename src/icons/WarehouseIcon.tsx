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

const WarehouseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.76569 2.85034C7.76555 2.8504 7.76584 2.85029 7.76569 2.85034L2.43236 4.98368C2.31502 5.03041 2.21433 5.11116 2.14323 5.21555C2.07235 5.31962 2.0341 5.44246 2.03336 5.56836V13.3334C2.03336 13.5013 2.10009 13.6624 2.21886 13.7812C2.33763 13.9 2.49873 13.9667 2.6667 13.9667H3.30003V6.66669C3.30003 6.28009 3.61343 5.96669 4.00003 5.96669H12C12.3866 5.96669 12.7 6.28009 12.7 6.66669V13.9667H13.3334C13.5013 13.9667 13.6624 13.9 13.7812 13.7812C13.9 13.6624 13.9667 13.5013 13.9667 13.3334V5.56835C13.966 5.44246 13.9277 5.31962 13.8568 5.21555C13.7857 5.11116 13.685 5.03041 13.5677 4.98368L8.23436 2.85034C8.23422 2.85029 8.2345 2.8504 8.23436 2.85034C8.08414 2.79064 7.91592 2.79064 7.76569 2.85034ZM11.3 13.9667V12.7H4.70003V13.9667H11.3ZM4.70003 11.3H11.3V10.0334H4.70003V11.3ZM4.70003 8.63335H11.3V7.36669H4.70003V8.63335ZM2.6667 15.3667C2.12742 15.3667 1.61023 15.1525 1.22891 14.7711C0.847587 14.3898 0.633362 13.8726 0.633362 13.3334V5.56386C0.634998 5.15836 0.757846 4.76261 0.986112 4.42746C1.21428 4.09245 1.53736 3.83329 1.91387 3.68323C1.91371 3.68329 1.91404 3.68316 1.91387 3.68323L7.24769 1.5497C7.7308 1.35729 8.26926 1.35729 8.75236 1.5497L8.75333 1.55009L14.0857 3.68303C14.0855 3.68295 14.0859 3.6831 14.0857 3.68303C14.4622 3.8331 14.7858 4.09247 15.0139 4.42746C15.2422 4.76261 15.3651 5.15836 15.3667 5.56386L15.3667 5.56669L15.3667 13.3334C15.3667 13.8726 15.1525 14.3898 14.7711 14.7711C14.3898 15.1525 13.8726 15.3667 13.3334 15.3667H2.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default WarehouseIcon;
