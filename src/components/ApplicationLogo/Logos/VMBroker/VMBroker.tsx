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

const VMBroker: FC<SVGProps<any> & LogoBaseProps> = ({ inverse }) => {
  return (
    <LogoBase viewBox="0 0 189.7 49.96" inverse={inverse}>
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
          d="m21.68,23.6l-8.2,21.82h-5.28L0,23.6h4.63l6.25,17.41,6.28-17.41h4.52Z"
          className={"minioApplicationName"}
        />
        <path
          d="m48.56,23.6v21.82h-4.35v-16.47l-5.39,14.37h-4.6l-5.39-14.25v16.35h-4.35v-21.82h6.37l5.67,14.73,5.66-14.73h6.37Z"
          className={"minioApplicationName"}
        />
        <path
          d="m61.9,23.6h8.45c2.43,0,4.35.46,5.77,1.4,1.41.93,2.12,2.38,2.12,4.36,0,1.19-.29,2.21-.89,3.05-.59.84-1.39,1.43-2.4,1.78,1.14.37,2.05,1,2.73,1.89s1.02,1.98,1.02,3.29c0,2.06-.7,3.58-2.1,4.57-1.4.99-3.35,1.49-5.85,1.49h-8.85v-21.82Zm8.35,2.35h-5.84v7.23h5.86c.8,0,1.5-.05,2.11-.16s1.16-.29,1.67-.55c.5-.26.89-.64,1.15-1.13.27-.49.4-1.09.4-1.8s-.13-1.27-.4-1.75c-.26-.48-.65-.85-1.16-1.11s-1.07-.44-1.68-.55c-.61-.11-1.31-.16-2.11-.16Zm.39,9.57h-6.23v7.54h6.23c.85,0,1.6-.06,2.24-.19.64-.12,1.21-.33,1.7-.61.49-.28.87-.67,1.12-1.17.25-.5.37-1.11.37-1.82,0-1.37-.46-2.34-1.39-2.91s-2.27-.85-4.03-.85Z"
          className={"minioApplicationName"}
        />
        <path
          d="m83.75,23.6h8.56c2.45,0,4.33.53,5.65,1.6,1.31,1.06,1.97,2.58,1.97,4.56s-.68,3.39-2.05,4.5c-1.37,1.11-3.21,1.67-5.54,1.67h-.36l7.84,9.49h-3.12l-7.68-9.49h-2.76v9.49h-2.51v-21.82Zm8.52,2.35h-6.02v7.7h6.02c1.65,0,2.91-.33,3.76-.99s1.29-1.63,1.29-2.91-.43-2.21-1.29-2.84-2.11-.96-3.76-.96Z"
          className={"minioApplicationName"}
        />
        <path
          d="m114.84,23.29c2.14,0,4.07.48,5.78,1.43,1.71.95,3.06,2.28,4.03,4,.97,1.71,1.46,3.65,1.46,5.8s-.49,4.08-1.46,5.8c-.97,1.71-2.31,3.05-4.03,4-1.71.95-3.64,1.43-5.78,1.43-1.6,0-3.1-.28-4.49-.84-1.39-.56-2.58-1.33-3.58-2.31-.99-.98-1.77-2.17-2.34-3.56-.57-1.39-.86-2.89-.86-4.5s.29-3.11.86-4.5c.57-1.39,1.35-2.58,2.34-3.56.99-.98,2.18-1.75,3.58-2.31s2.89-.84,4.49-.84Zm0,2.42c-1.22,0-2.35.22-3.41.65-1.06.43-1.97,1.03-2.74,1.79-.77.76-1.37,1.69-1.82,2.79-.44,1.1-.66,2.3-.66,3.58s.22,2.48.66,3.58c.44,1.1,1.05,2.03,1.82,2.79.77.76,1.68,1.35,2.74,1.78,1.06.43,2.2.65,3.41.65,1.63,0,3.1-.36,4.41-1.09,1.31-.73,2.34-1.77,3.1-3.12s1.14-2.88,1.14-4.6-.38-3.25-1.14-4.6-1.79-2.39-3.1-3.12c-1.31-.73-2.78-1.09-4.41-1.09Z"
          className={"minioApplicationName"}
        />
        <path
          d="m145.86,45.42l-9.6-9.79h-2.59v9.79h-2.51v-21.82h2.51v9.66h2.63l9.05-9.66h3.24l-10.25,10.71,10.92,11.11h-3.41Z"
          className={"minioApplicationName"}
        />
        <path
          d="m168.14,43.06v2.35h-15.35v-21.82h15.21v2.35h-12.7v7.31h12.31v2.34h-12.31v7.46h12.84Z"
          className={"minioApplicationName"}
        />
        <path
          d="m173.8,23.6h8.56c2.45,0,4.33.53,5.65,1.6,1.31,1.06,1.97,2.58,1.97,4.56s-.68,3.39-2.05,4.5c-1.37,1.11-3.21,1.67-5.54,1.67h-.36l7.84,9.49h-3.12l-7.68-9.49h-2.76v9.49h-2.51v-21.82Zm8.52,2.35h-6.02v7.7h6.02c1.65,0,2.91-.33,3.76-.99s1.29-1.63,1.29-2.91-.43-2.21-1.29-2.84-2.11-.96-3.76-.96Z"
          className={"minioApplicationName"}
        />
      </g>
    </LogoBase>
  );
};

export default VMBroker;
