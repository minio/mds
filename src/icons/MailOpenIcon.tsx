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

const MailOpenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.03336C7.86293 2.03336 7.72959 2.07781 7.61997 2.16003L2.28663 6.16003C2.22128 6.20905 2.16615 6.27015 2.12415 6.33986L7.68654 9.8745C7.7806 9.93301 7.88917 9.96404 7.99997 9.96404C8.11076 9.96404 8.21933 9.93301 8.31339 9.8745L13.8748 6.34048C13.8331 6.27155 13.778 6.20952 13.7112 6.15842C13.7107 6.15806 13.7102 6.1577 13.7097 6.15734L8.37997 2.16003C8.27034 2.07781 8.137 2.03336 7.99997 2.03336ZM13.9666 7.94089L9.05829 11.0599C8.74108 11.2586 8.3743 11.364 7.99997 11.364C7.62563 11.364 7.25887 11.2586 6.94165 11.0599L6.93786 11.0575L2.0333 7.94088V13.3334C2.0333 13.5013 2.10003 13.6624 2.2188 13.7812C2.33757 13.9 2.49866 13.9667 2.66663 13.9667H13.3333C13.5013 13.9667 13.6624 13.9 13.7811 13.7812C13.8999 13.6624 13.9666 13.5013 13.9666 13.3334V7.94089ZM6.77997 1.04003C7.13193 0.776057 7.56001 0.633362 7.99997 0.633362C8.43992 0.633362 8.868 0.776057 9.21997 1.04003L14.5569 5.0427C15.0602 5.42523 15.3666 6.02274 15.3666 6.66669V13.3334C15.3666 13.8726 15.1524 14.3898 14.7711 14.7711C14.3898 15.1525 13.8726 15.3667 13.3333 15.3667H2.66663C2.12736 15.3667 1.61017 15.1525 1.22885 14.7711C0.847526 14.3898 0.633301 13.8726 0.633301 13.3334V6.66669C0.633301 6.35103 0.706796 6.0397 0.847966 5.75736C0.989135 5.47502 1.1941 5.22943 1.44663 5.04003L6.77997 1.04003Z"
      fill="currentColor"
    />
  </svg>
);
export default MailOpenIcon;
