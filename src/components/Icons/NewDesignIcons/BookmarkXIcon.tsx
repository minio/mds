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

const BookmarkXIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.6667 2.7C4.49872 2.7 4.33763 2.76673 4.21886 2.8855C4.10009 3.00427 4.03336 3.16537 4.03336 3.33334V12.7938L7.65273 10.7256C7.86793 10.6026 8.13212 10.6026 8.34733 10.7256L11.9667 12.7938V3.33334C11.9667 3.16537 11.9 3.00428 11.7812 2.8855C11.6624 2.76673 11.5013 2.7 11.3334 2.7H4.6667ZM3.22891 1.89555C3.61024 1.51423 4.12742 1.3 4.6667 1.3H11.3334C11.8726 1.3 12.3898 1.51423 12.7711 1.89555C13.1525 2.27688 13.3667 2.79406 13.3667 3.33334V14C13.3667 14.2495 13.2339 14.4802 13.018 14.6054C12.8022 14.7307 12.536 14.7316 12.3194 14.6078L8.00003 12.1396L3.68066 14.6078C3.46401 14.7316 3.19783 14.7307 2.98201 14.6054C2.76619 14.4802 2.63336 14.2495 2.63336 14V3.33334C2.63336 2.79406 2.84759 2.27688 3.22891 1.89555ZM5.83839 4.50503C6.11175 4.23166 6.55497 4.23166 6.82834 4.50503L8.00003 5.67672L9.17172 4.50503C9.44509 4.23166 9.8883 4.23166 10.1617 4.50503C10.435 4.7784 10.435 5.22161 10.1617 5.49498L8.98998 6.66667L10.1617 7.83836C10.435 8.11173 10.435 8.55494 10.1617 8.82831C9.8883 9.10168 9.44509 9.10168 9.17172 8.82831L8.00003 7.65662L6.82834 8.82831C6.55497 9.10168 6.11175 9.10168 5.83839 8.82831C5.56502 8.55494 5.56502 8.11173 5.83839 7.83836L7.01008 6.66667L5.83839 5.49498C5.56502 5.22161 5.56502 4.7784 5.83839 4.50503Z"
      fill="currentColor"
    />
  </svg>
);
export default BookmarkXIcon;
