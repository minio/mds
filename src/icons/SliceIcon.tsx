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

const SliceIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.7517 1.92502C12.1482 1.52853 12.6859 1.30579 13.2467 1.30579C13.8074 1.30579 14.3451 1.52853 14.7416 1.92502C15.1381 2.32152 15.3609 2.85928 15.3609 3.42C15.3609 3.98072 15.1381 4.51848 14.7416 4.91497L8.03333 11.6233V13.3333C8.03333 13.7199 7.71993 14.0333 7.33333 14.0333H1.33333C1.05021 14.0333 0.794964 13.8628 0.686617 13.6012C0.57827 13.3396 0.638159 13.0386 0.838358 12.8384L11.7517 1.92502ZM7.33333 10.3434L13.7517 3.92502C13.8856 3.79108 13.9609 3.60942 13.9609 3.42C13.9609 3.23058 13.8856 3.04891 13.7517 2.91497C13.6178 2.78103 13.4361 2.70579 13.2467 2.70579C13.0572 2.70579 12.8756 2.78103 12.7416 2.91497L6.32328 9.33333L7.33333 10.3434ZM5.33333 10.3233L3.02328 12.6333H6.63333V11.6233L5.33333 10.3233Z"
      fill="currentColor"
    />
  </svg>
);
export default SliceIcon;
