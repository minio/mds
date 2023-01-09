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

import * as React from "react";
import { SVGProps } from "react";

const FolderBrowserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g transform="translate(0 22)">
      <g transform="translate(0 0)">
        <path
          d="M240.073,47.755A29.485,29.485,0,0,0,210.541,18.79h-81.5l-1.116-1.571A33.623,33.623,0,0,0,101.723,0H49.545A29.486,29.486,0,0,0,20.013,29.372a20.759,20.759,0,0,0,.238,3.135V45.954A29.748,29.748,0,0,0,0,74.012a13.652,13.652,0,0,0,.079,1.8L9.8,182.443A29.813,29.813,0,0,0,39.67,211H216.079a29.815,29.815,0,0,0,29.875-28.544l9.967-106.611c0-.611.079-1.236.079-1.847a29.726,29.726,0,0,0-15.927-26.244"
          fill="#ceb87c"
        />
        <path
          d="M240.073,8.268c-.007-.407-.112-.781-.139-1.182H18.805A29.651,29.651,0,0,0,0,34.492a13.619,13.619,0,0,0,.079,1.8L9.8,142.791A29.8,29.8,0,0,0,39.67,171.314H216.079A29.808,29.808,0,0,0,245.954,142.8l9.967-106.481c0-.61.079-1.234.079-1.845A29.686,29.686,0,0,0,240.073,8.268"
          transform="translate(0 39.686)"
          fill="#e8d289"
        />
        <path
          d="M234.976,8.274c-.007-.409-.112-.785-.139-1.188H13.709A30.13,30.13,0,0,0,2.844,14.545l-.092.112A28.244,28.244,0,0,0,.91,16.967H245a29.767,29.767,0,0,0-10.026-8.693"
          transform="translate(5.097 39.476)"
          fill="#b7a16a"
        />
      </g>
    </g>
  </svg>
);

export default FolderBrowserIcon;
