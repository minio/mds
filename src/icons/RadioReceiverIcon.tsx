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

const RadioReceiverIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66663 6.0333C2.31685 6.0333 2.0333 6.31685 2.0333 6.66663V9.3333C2.0333 9.68308 2.31685 9.96663 2.66663 9.96663H13.3333C13.6831 9.96663 13.9666 9.68308 13.9666 9.3333V6.66663C13.9666 6.31685 13.6831 6.0333 13.3333 6.0333H2.66663ZM13.3666 11.3664C14.4742 11.3486 15.3666 10.4451 15.3666 9.3333V6.66663C15.3666 5.54366 14.4563 4.6333 13.3333 4.6333H2.66663C1.54366 4.6333 0.633301 5.54366 0.633301 6.66663V9.3333C0.633301 10.4451 1.5257 11.3486 2.6333 11.3664V12C2.6333 12.3866 2.9467 12.7 3.3333 12.7C3.7199 12.7 4.0333 12.3866 4.0333 12V11.3666H11.9666V12C11.9666 12.3866 12.28 12.7 12.6666 12.7C13.0532 12.7 13.3666 12.3866 13.3666 12V11.3664Z"
      fill="currentColor"
    />
  </svg>
);
export default RadioReceiverIcon;
