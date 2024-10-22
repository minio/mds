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

const PenLineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.0001 2.61912C11.8106 2.61912 11.629 2.69436 11.495 2.8283L3.2988 11.0245L2.96212 12.3713L4.30886 12.0346L12.5051 3.83836C12.5714 3.77203 12.624 3.6933 12.6599 3.60665C12.6958 3.51999 12.7143 3.42712 12.7143 3.33333C12.7143 3.23954 12.6958 3.14666 12.6599 3.06001C12.624 2.97336 12.5714 2.89463 12.5051 2.8283C12.4388 2.76198 12.36 2.70938 12.2734 2.67348C12.1867 2.63759 12.0939 2.61912 12.0001 2.61912ZM10.5051 1.83835C10.9016 1.44186 11.4393 1.21912 12.0001 1.21912C12.2777 1.21912 12.5526 1.2738 12.8091 1.38005C13.0656 1.4863 13.2987 1.64203 13.495 1.83835C13.6914 2.03468 13.8471 2.26775 13.9533 2.52426C14.0596 2.78076 14.1143 3.05569 14.1143 3.33333C14.1143 3.61097 14.0596 3.8859 13.9533 4.1424C13.8471 4.39891 13.6914 4.63198 13.495 4.8283L5.16171 13.1616C5.07199 13.2513 4.95959 13.315 4.83651 13.3458L2.16984 14.0124C1.9313 14.0721 1.67896 14.0022 1.50509 13.8283C1.33122 13.6544 1.26133 13.4021 1.32096 13.1636L1.98763 10.4969C2.0184 10.3738 2.08204 10.2614 2.17176 10.1717L10.5051 1.83835ZM7.30006 13.3333C7.30006 12.9467 7.61346 12.6333 8.00006 12.6333H14.0001C14.3867 12.6333 14.7001 12.9467 14.7001 13.3333C14.7001 13.7199 14.3867 14.0333 14.0001 14.0333H8.00006C7.61346 14.0333 7.30006 13.7199 7.30006 13.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default PenLineIcon;
