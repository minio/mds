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

const MoveDownLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.1616 2.83839C13.435 3.11175 13.435 3.55497 13.1616 3.82834L5.02325 11.9667H7.3333C7.7199 11.9667 8.0333 12.2801 8.0333 12.6667C8.0333 13.0533 7.7199 13.3667 7.3333 13.3667H3.3333C2.9467 13.3667 2.6333 13.0533 2.6333 12.6667V8.66669C2.6333 8.2801 2.9467 7.96669 3.3333 7.96669C3.7199 7.96669 4.0333 8.2801 4.0333 8.66669V10.9767L12.1717 2.83839C12.445 2.56502 12.8882 2.56502 13.1616 2.83839Z"
      fill="currentColor"
    />
  </svg>
);
export default MoveDownLeftIcon;
