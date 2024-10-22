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

const UserRoundIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00001 2.70005C6.54566 2.70005 5.36667 3.87903 5.36667 5.33338C5.36667 6.78773 6.54566 7.96672 8.00001 7.96672C9.45436 7.96672 10.6333 6.78773 10.6333 5.33338C10.6333 3.87903 9.45436 2.70005 8.00001 2.70005ZM10.4917 8.50526C11.4305 7.76677 12.0333 6.62048 12.0333 5.33338C12.0333 3.10583 10.2276 1.30005 8.00001 1.30005C5.77246 1.30005 3.96667 3.10583 3.96667 5.33338C3.96667 6.62048 4.56956 7.76677 5.50835 8.50526C4.85396 8.80198 4.25166 9.21598 3.7338 9.73384C2.60233 10.8653 1.96667 12.3999 1.96667 14C1.96667 14.3866 2.28008 14.7 2.66667 14.7C3.05327 14.7 3.36667 14.3866 3.36667 14C3.36667 12.7712 3.85483 11.5927 4.72375 10.7238C5.59267 9.85487 6.77117 9.36672 8.00001 9.36672C9.22884 9.36672 10.4074 9.85487 11.2763 10.7238C12.1452 11.5927 12.6333 12.7712 12.6333 14C12.6333 14.3866 12.9467 14.7 13.3333 14.7C13.7199 14.7 14.0333 14.3866 14.0333 14C14.0333 12.3999 13.3977 10.8653 12.2662 9.73384C11.7484 9.21598 11.1461 8.80198 10.4917 8.50526Z"
      fill="currentColor"
    />
  </svg>
);
export default UserRoundIcon;
