// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
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

import React, { FC, SVGProps } from "react";
import LogoBase from "../LogoBase/LogoBase";
import { LogoBaseProps } from "../LogoBase/LogoBase.types";

const Cloud: FC<SVGProps<any> & LogoBaseProps> = ({ inverse }) => {
  return (
    <LogoBase viewBox="0 0 184.538 49.96" inverse={inverse}>
      <g>
        <g>
          <rect
            x="21.86"
            y=".19"
            width="3.76"
            height="11.1"
            className={"minioSection"}
          />
          <path
            d="m17.3.35l-7.63,4.66c-.11.07-.25.07-.35,0L1.69.35c-.16-.1-.35-.15-.55-.15h0C.55.19.08.66.08,1.24v10.04h3.76v-4.78c0-.21.17-.38.38-.38.07,0,.14.02.2.06l4.28,2.62c.42.26.95.26,1.38.01l4.51-2.65c.18-.1.41-.04.51.14.03.06.05.12.05.19v4.79h3.76V1.24c0-.58-.47-1.05-1.04-1.05h0c-.19,0-.38.05-.55.15Z"
            className={"minioSection"}
          />
          <path
            d="m44.37.19h-3.81v5.05c0,.21-.17.38-.38.38-.06,0-.12-.02-.18-.04L30.12.32c-.15-.08-.32-.12-.49-.12h0c-.58,0-1.05.47-1.05,1.05v10.05h3.78v-5.05c0-.21.17-.38.38-.38.06,0,.12.02.18.04l9.92,5.26c.15.08.32.12.49.12h0c.58,0,1.05-.47,1.05-1.05V.19Z"
            className={"minioSection"}
          />
        </g>
        <path d="m47.32,11.3V.2h1.73v11.1h-1.73Z" className={"minioSection"} />
        <path
          d="m59.23,11.49c-4.65,0-7.95-2.21-7.95-5.75s3.32-5.75,7.95-5.75,7.98,2.21,7.98,5.75-3.26,5.75-7.98,5.75Zm0-10.02c-3.46,0-6.13,1.51-6.13,4.28s2.67,4.28,6.13,4.28,6.15-1.49,6.15-4.28c0-2.76-2.68-4.28-6.15-4.28Z"
          className={"minioSection"}
        />
      </g>
      <g>
        <path
          d="m13.32,23.65c2.34,0,4.48.5,6.42,1.51,1.94,1.01,3.42,2.4,4.45,4.18l-4.35,2.66c-.72-1.11-1.65-1.97-2.77-2.58-1.12-.61-2.39-.92-3.79-.92-2.32,0-4.23.77-5.74,2.32-1.51,1.55-2.27,3.54-2.27,5.98.01,2.5.78,4.51,2.3,6.02,1.52,1.52,3.42,2.27,5.71,2.27,1.39,0,2.65-.3,3.77-.9,1.12-.6,2.07-1.46,2.84-2.58l4.13,2.97c-1.15,1.68-2.65,2.99-4.5,3.94-1.85.95-3.92,1.42-6.21,1.42-1.92,0-3.71-.33-5.36-.99s-3.06-1.56-4.23-2.72c-1.17-1.15-2.08-2.55-2.74-4.18-.66-1.63-.99-3.39-.99-5.27s.33-3.64.99-5.27,1.57-3.02,2.74-4.18c1.17-1.15,2.58-2.06,4.23-2.72,1.65-.66,3.44-.99,5.36-.99Z"
          className={"minioApplicationName"}
        />
        <path
          d="m47.04,44.76v4.73h-18.46v-25.37h5.06v20.64h13.41Z"
          className={"minioApplicationName"}
        />
        <path
          d="m61.59,23.65c2.56,0,4.86.57,6.89,1.7,2.04,1.14,3.62,2.7,4.75,4.7s1.69,4.25,1.69,6.75-.56,4.75-1.69,6.75-2.71,3.57-4.75,4.7c-2.04,1.14-4.33,1.7-6.89,1.7-1.92,0-3.71-.33-5.36-1s-3.07-1.58-4.23-2.74c-1.17-1.16-2.08-2.55-2.74-4.18-.66-1.62-.99-3.37-.99-5.25s.33-3.62.99-5.25,1.57-3.02,2.74-4.18c1.17-1.16,2.58-2.07,4.23-2.74,1.66-.66,3.44-1,5.36-1Zm0,4.86c-2.34,0-4.27.77-5.78,2.31s-2.26,3.54-2.26,5.99.75,4.45,2.26,5.99,3.44,2.31,5.78,2.31,4.29-.77,5.79-2.31,2.26-3.54,2.26-5.99-.75-4.45-2.26-5.99-3.43-2.31-5.79-2.31Z"
          className={"minioApplicationName"}
        />
        <path
          d="m101.03,24.12v15.24c0,2.28-.46,4.23-1.39,5.83-.93,1.61-2.21,2.8-3.83,3.58-1.62.78-3.52,1.17-5.7,1.17s-4.07-.39-5.7-1.17-2.9-1.97-3.83-3.58c-.93-1.61-1.4-3.55-1.4-5.83v-15.24h5.07v14.98c0,2.02.52,3.52,1.56,4.51,1.04.99,2.47,1.49,4.29,1.49s3.26-.5,4.29-1.49c1.04-.99,1.56-2.5,1.56-4.51v-14.98h5.07Z"
          className={"minioApplicationName"}
        />
        <path
          d="m106.5,24.12h10.46c3.97,0,7.16,1.16,9.57,3.48,2.4,2.32,3.61,5.39,3.61,9.2s-1.2,6.89-3.61,9.21c-2.4,2.32-5.59,3.48-9.57,3.48h-10.46v-25.37Zm10.4,4.73h-5.34v15.91h5.34c2.58,0,4.55-.73,5.91-2.18,1.35-1.46,2.03-3.38,2.03-5.77s-.68-4.35-2.03-5.79c-1.35-1.44-3.32-2.17-5.91-2.17Z"
          className={"minioApplicationName"}
        />
      </g>
    </LogoBase>
  );
};

export default Cloud;
