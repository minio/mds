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

const SchoolIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.68698 0.707202C7.88405 0.608667 8.11601 0.608667 8.31308 0.707202L12.2995 2.70042C12.3083 2.7046 12.3171 2.70896 12.3257 2.7135L13.6464 3.37387C13.9922 3.54676 14.1324 3.96723 13.9595 4.31302C13.7866 4.6588 13.3661 4.79896 13.0203 4.62607L12.7 4.46592V6.23401L14.9797 7.37387C15.2169 7.49244 15.3667 7.73483 15.3667 7.99997V13.3333C15.3667 13.8726 15.1525 14.3898 14.7711 14.7711C14.3898 15.1524 13.8726 15.3666 13.3334 15.3666H2.6667C2.12742 15.3666 1.61023 15.1524 1.22891 14.7711C0.847587 14.3898 0.633362 13.8726 0.633362 13.3333V7.99997C0.633362 7.73483 0.783163 7.49244 1.02031 7.37387L3.30003 6.23401V4.46592L2.97974 4.62607C2.63396 4.79896 2.21349 4.6588 2.0406 4.31302C1.8677 3.96723 2.00786 3.54676 2.35365 3.37387L3.67439 2.7135C3.683 2.70896 3.69172 2.7046 3.70054 2.70042L7.68698 0.707202ZM4.70003 3.76592V6.65147C4.70023 6.66123 4.70023 6.67098 4.70003 6.68071V13.9666H5.96669V12C5.96669 11.4607 6.18092 10.9435 6.56224 10.5622C6.94357 10.1809 7.46075 9.96663 8.00003 9.96663C8.5393 9.96663 9.05649 10.1809 9.43781 10.5622C9.81913 10.9435 10.0334 11.4607 10.0334 12V13.9666H11.3V6.68071C11.2998 6.67098 11.2998 6.66123 11.3 6.65147V3.76592L8.00003 2.11592L4.70003 3.76592ZM12.7 7.79926V13.9666H13.3334C13.5013 13.9666 13.6624 13.8999 13.7812 13.7811C13.9 13.6624 13.9667 13.5013 13.9667 13.3333V8.43259L12.7 7.79926ZM8.63336 13.9666V12C8.63336 11.832 8.56664 11.6709 8.44786 11.5521C8.32909 11.4334 8.168 11.3666 8.00003 11.3666C7.83206 11.3666 7.67097 11.4334 7.55219 11.5521C7.43342 11.6709 7.36669 11.832 7.36669 12V13.9666H8.63336ZM3.30003 13.9666V7.79926L2.03336 8.43259V13.3333C2.03336 13.5013 2.10009 13.6624 2.21886 13.7811C2.33763 13.8999 2.49872 13.9666 2.6667 13.9666H3.30003ZM8.00003 5.36663C7.65025 5.36663 7.36669 5.65019 7.36669 5.99997C7.36669 6.34975 7.65025 6.6333 8.00003 6.6333C8.34981 6.6333 8.63336 6.34975 8.63336 5.99997C8.63336 5.65019 8.34981 5.36663 8.00003 5.36663ZM5.96669 5.99997C5.96669 4.87699 6.87705 3.96663 8.00003 3.96663C9.12301 3.96663 10.0334 4.87699 10.0334 5.99997C10.0334 7.12295 9.12301 8.0333 8.00003 8.0333C6.87705 8.0333 5.96669 7.12295 5.96669 5.99997Z"
      fill="currentColor"
    />
  </svg>
);
export default SchoolIcon;