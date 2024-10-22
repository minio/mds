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

const VoteIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66669 4.0333C4.31996 4.0333 4.03336 4.3199 4.03336 4.66663V11.9666H11.9667V4.66663C11.9667 4.49866 11.9 4.33757 11.7812 4.2188C11.6624 4.10003 11.5013 4.0333 11.3334 4.0333H4.66669ZM13.3667 11.9666V4.66663C13.3667 4.12736 13.1525 3.61017 12.7711 3.22885C12.3898 2.84753 11.8726 2.6333 11.3334 2.6333H4.66669C3.54676 2.6333 2.63336 3.5467 2.63336 4.66663V11.9666H1.33336C0.946762 11.9666 0.633362 12.28 0.633362 12.6666C0.633362 13.0532 0.946762 13.3666 1.33336 13.3666H14.6667C15.0533 13.3666 15.3667 13.0532 15.3667 12.6666C15.3667 12.28 15.0533 11.9666 14.6667 11.9666H13.3667ZM10.495 6.17166C10.7684 6.44503 10.7684 6.88824 10.495 7.16161L7.82834 9.82828C7.55497 10.1016 7.11175 10.1016 6.83839 9.82828L5.50505 8.49494C5.23169 8.22157 5.23169 7.77836 5.50505 7.50499C5.77842 7.23163 6.22164 7.23163 6.495 7.50499L7.33336 8.34335L9.50505 6.17166C9.77842 5.89829 10.2216 5.89829 10.495 6.17166Z"
      fill="currentColor"
    />
  </svg>
);
export default VoteIcon;
