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

const MoveDiagonal2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.6333 3.33336C2.6333 2.94676 2.9467 2.63336 3.3333 2.63336H7.3333C7.7199 2.63336 8.0333 2.94676 8.0333 3.33336C8.0333 3.71996 7.7199 4.03336 7.3333 4.03336H5.02325L11.9666 10.9767V8.66669C11.9666 8.2801 12.28 7.96669 12.6666 7.96669C13.0532 7.96669 13.3666 8.2801 13.3666 8.66669V12.6667C13.3666 13.0533 13.0532 13.3667 12.6666 13.3667H8.66663C8.28003 13.3667 7.96663 13.0533 7.96663 12.6667C7.96663 12.2801 8.28003 11.9667 8.66663 11.9667H10.9767L4.0333 5.02331V7.33336C4.0333 7.71996 3.7199 8.03336 3.3333 8.03336C2.9467 8.03336 2.6333 7.71996 2.6333 7.33336V3.33336Z"
      fill="currentColor"
    />
  </svg>
);
export default MoveDiagonal2Icon;
