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

const PcCaseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66663 2.0333C4.31685 2.0333 4.0333 2.31685 4.0333 2.66663V13.3333C4.0333 13.6831 4.31685 13.9666 4.66663 13.9666H11.3333C11.6831 13.9666 11.9666 13.6831 11.9666 13.3333V2.66663C11.9666 2.31685 11.6831 2.0333 11.3333 2.0333H4.66663ZM2.6333 2.66663C2.6333 1.54366 3.54366 0.633301 4.66663 0.633301H11.3333C12.4563 0.633301 13.3666 1.54366 13.3666 2.66663V13.3333C13.3666 14.4563 12.4563 15.3666 11.3333 15.3666H4.66663C3.54366 15.3666 2.6333 14.4563 2.6333 13.3333V2.66663ZM5.29997 3.99997C5.29997 3.61337 5.61337 3.29997 5.99997 3.29997H9.99997C10.3866 3.29997 10.7 3.61337 10.7 3.99997C10.7 4.38657 10.3866 4.69997 9.99997 4.69997H5.99997C5.61337 4.69997 5.29997 4.38657 5.29997 3.99997ZM5.29997 6.66663C5.29997 6.28003 5.61337 5.96663 5.99997 5.96663H9.99997C10.3866 5.96663 10.7 6.28003 10.7 6.66663C10.7 7.05323 10.3866 7.36663 9.99997 7.36663H5.99997C5.61337 7.36663 5.29997 7.05323 5.29997 6.66663ZM9.29997 9.3333C9.29997 8.9467 9.61337 8.6333 9.99997 8.6333H10.0066C10.3932 8.6333 10.7066 8.9467 10.7066 9.3333C10.7066 9.7199 10.3932 10.0333 10.0066 10.0333H9.99997C9.61337 10.0333 9.29997 9.7199 9.29997 9.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default PcCaseIcon;
