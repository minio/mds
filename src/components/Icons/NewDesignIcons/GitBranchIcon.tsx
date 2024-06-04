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

const GitBranchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.00005 1.29999C4.38665 1.29999 4.70005 1.61339 4.70005 1.99999V9.39161C5.61728 9.63715 6.34195 10.3536 6.5991 11.266C7.78427 11.1313 8.89601 10.5994 9.74771 9.74765C10.5994 8.89595 11.1313 7.78421 11.2661 6.59904C10.1316 6.27931 9.30005 5.23676 9.30005 3.99999C9.30005 2.50882 10.5089 1.29999 12 1.29999C13.4912 1.29999 14.7 2.50882 14.7 3.99999C14.7 5.25928 13.8379 6.31722 12.6717 6.61578C12.5286 8.16687 11.8482 9.62709 10.7377 10.7376C9.62715 11.8481 8.16693 12.5285 6.61584 12.6716C6.31728 13.8379 5.25934 14.7 4.00005 14.7C2.50888 14.7 1.30005 13.4912 1.30005 12C1.30005 10.7509 2.14823 9.69995 3.30005 9.39161V1.99999C3.30005 1.61339 3.61345 1.29999 4.00005 1.29999ZM12 2.69999C11.2821 2.69999 10.7 3.28202 10.7 3.99999C10.7 4.71796 11.2821 5.29999 12 5.29999C12.718 5.29999 13.3 4.71796 13.3 3.99999C13.3 3.28202 12.718 2.69999 12 2.69999ZM4.00005 10.7C3.28208 10.7 2.70005 11.282 2.70005 12C2.70005 12.718 3.28208 13.3 4.00005 13.3C4.71802 13.3 5.30005 12.718 5.30005 12C5.30005 11.282 4.71802 10.7 4.00005 10.7Z"
      fill="currentColor"
    />
  </svg>
);
export default GitBranchIcon;
