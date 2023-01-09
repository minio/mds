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

const FileCodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g>
      <path
        d="m214.5,256H40.5c-8.01,0-14.5-6.49-14.5-14.5V14.57C26,6.56,32.49.07,40.5.07h114.33l.19.26,73.97,74.01v167.15c0,8.01-6.49,14.5-14.5,14.5Z"
        fill="#37d60c"
      />
      <path
        d="m163.86,74.19h64.8L154.47,0v64.79c.36,5.03,4.36,9.03,9.39,9.4"
        fill="#6def49"
      />
      <g>
        <g>
          <path
            d="m109.15,154.6c-.56,1.95-2.09,3.47-4.05,4.01-.4.1-.81.16-1.22.16-1.37-.02-2.66-.6-3.59-1.6l-.14-.19c-.31-.49-2.7-2.79-5.01-5.02-11.1-10.67-14.41-14.49-14.07-16.55-.21-1.67,2.53-4.91,14.28-16.21,2.23-2.14,4.53-4.35,4.83-4.79l.15-.19c2.05-2.05,5.37-2.05,7.42,0,2.05,2.05,2.05,5.37,0,7.42h0l-13.99,13.99,14.01,14.16c1.31,1.22,1.85,3.06,1.38,4.79"
            fill="#fff"
          />
          <path
            d="m141.91,102.42l-18.64,69.33c-.35,1.35-1.24,2.5-2.45,3.18-.8.46-1.7.7-2.62.7-.46,0-.92-.06-1.37-.19-2.79-.76-4.44-3.63-3.69-6.43l18.64-69.32c.75-2.8,3.63-4.45,6.42-3.7,0,0,0,0,0,0h.01c2.79.76,4.45,3.63,3.7,6.43"
            fill="#fff"
          />
          <path
            d="m172.41,139.34l-.19.15c-.46.3-2.73,2.67-4.92,4.96-10.33,10.8-14.26,14.33-16.27,14.33-.12,0-.24-.01-.36-.04-2.91-.13-5.16-2.6-5.03-5.52.06-1.3.6-2.54,1.52-3.46l14.11-14.11-14.12-13.97c-1.33-1.21-1.88-3.05-1.43-4.8.54-1.96,2.06-3.49,4.01-4.05h0c1.74-.47,3.59.07,4.81,1.38l17.86,17.67c2.07,2.05,2.08,5.38.03,7.45,0,0,0,0,0,0h-.01"
            fill="#fff"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default FileCodeIcon;
