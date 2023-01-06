// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

import React, { SVGProps } from "react";

const PasswordKeyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`min-icon`}
      fill={"currentcolor"}
      viewBox="0 0 14 14"
      {...props}
    >
      <path
        d="M141.421,148.182a4.5,4.5,0,0,0-4.3,5.805l-5.188,5.195v3h3l5.187-5.2a4.5,4.5,0,0,0,5.8-3.936,4.39,4.39,0,0,0-.823-3A4.492,4.492,0,0,0,141.421,148.182Zm.5,5a1,1,0,1,1,1-1A1,1,0,0,1,141.92,153.182Z"
        transform="translate(-131.934 -148.182)"
      />
    </svg>
  );
};

export default PasswordKeyIcon;
