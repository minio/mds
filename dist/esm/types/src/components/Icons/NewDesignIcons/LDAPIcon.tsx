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

const LDAPIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.09495 5.3H5.47848C5.59084 4.26732 5.90682 3.27096 6.40409 2.36747C5.21355 2.89129 4.3294 3.98323 4.09495 5.3ZM8.0001 2.44978C7.40637 3.29613 7.02485 4.27393 6.88856 5.3H9.11268C8.97619 4.27407 8.59415 3.29624 8.0001 2.44978ZM9.11268 6.7C8.97619 7.72593 8.59415 8.70375 8.0001 9.55021C7.40637 8.70387 7.02485 7.72607 6.88856 6.7H9.11268ZM5.47848 6.7H4.09495C4.3294 8.01677 5.21355 9.10871 6.40409 9.63253C5.90682 8.72903 5.59084 7.73268 5.47848 6.7ZM8.70005 11.3214C11.3332 10.9784 13.3667 8.72668 13.3667 6C13.3667 3.03607 10.964 0.633331 8.00005 0.633331C5.03612 0.633331 2.63338 3.03607 2.63338 6C2.63338 8.72668 4.66687 10.9784 7.30005 11.3214V11.4237C6.74018 11.629 6.2957 12.0735 6.09042 12.6333H2.00005C1.61345 12.6333 1.30005 12.9467 1.30005 13.3333C1.30005 13.7199 1.61345 14.0333 2.00005 14.0333H6.09042C6.37573 14.8114 7.12305 15.3667 8.00005 15.3667C8.87705 15.3667 9.62437 14.8114 9.90968 14.0333H14C14.3866 14.0333 14.7 13.7199 14.7 13.3333C14.7 12.9467 14.3866 12.6333 14 12.6333H9.90968C9.70439 12.0735 9.25992 11.629 8.70005 11.4237V11.3214ZM9.59641 9.63235C10.0939 8.72898 10.4103 7.7327 10.5228 6.7H11.9051C11.6707 8.01662 10.7867 9.10846 9.59641 9.63235ZM11.9051 5.3H10.5228C10.4103 4.26729 10.0939 3.27102 9.59641 2.36764C10.7867 2.89153 11.6707 3.98338 11.9051 5.3ZM8.00005 12.7C7.65027 12.7 7.36672 12.9836 7.36672 13.3333C7.36672 13.6831 7.65027 13.9667 8.00005 13.9667C8.34983 13.9667 8.63338 13.6831 8.63338 13.3333C8.63338 12.9836 8.34983 12.7 8.00005 12.7Z"
      fill="currentColor"
    />
  </svg>
);
export default LDAPIcon;
