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

const ShareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M5.17,1.3h1.5c.39,0,.7.31.7.7s-.31.7-.7.7h-1.47c-.57,0-.96,0-1.26.02-.29.02-.43.07-.53.12-.24.12-.44.32-.57.57-.05.1-.09.24-.12.53-.02.3-.02.68-.02,1.26v5.6c0,.57,0,.96.02,1.26.02.29.07.43.12.53.12.24.32.44.57.57.1.05.24.09.53.12.3.02.68.02,1.26.02h5.6c.57,0,.96,0,1.26-.02.29-.02.43-.07.53-.12.24-.12.44-.32.57-.57.05-.1.09-.24.12-.53.02-.3.02-.69.02-1.26v-1.47c0-.39.31-.7.7-.7s.7.31.7.7v1.5c0,.54,0,.98-.03,1.34-.03.38-.1.73-.26,1.06-.26.51-.67.92-1.18,1.18-.33.17-.68.23-1.06.26-.36.03-.81.03-1.34.03h-5.66c-.54,0-.98,0-1.34-.03-.38-.03-.73-.1-1.06-.26-.51-.26-.92-.67-1.18-1.18-.17-.33-.23-.68-.26-1.06-.03-.36-.03-.81-.03-1.34v-5.66c0-.54,0-.98.03-1.34.03-.38.1-.73.26-1.06.26-.51.67-.92,1.18-1.18.33-.17.68-.23,1.06-.26.36-.03.81-.03,1.34-.03ZM11.51,1.51c.27-.27.72-.27.99,0l2,2c.27.27.27.72,0,.99l-2,2c-.27.27-.72.27-.99,0-.27-.27-.27-.72,0-.99l.81-.81h-.44c-.57,0-.96,0-1.26.02-.29.02-.43.07-.53.12-.24.12-.44.32-.57.57-.05.1-.09.24-.12.53-.02.3-.02.68-.02,1.26v2.13c0,.39-.31.7-.7.7s-.7-.31-.7-.7v-2.16c0-.54,0-.98.03-1.34.03-.38.1-.73.26-1.06.26-.51.67-.92,1.18-1.18.33-.17.68-.23,1.06-.26.36-.03.81-.03,1.34-.03h.47l-.81-.81c-.27-.27-.27-.72,0-.99Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
export default ShareIcon;
