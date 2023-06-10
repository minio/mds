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

const Eureka: FC<SVGProps<any> & LogoBaseProps> = ({ inverse }) => {
  return (
    <LogoBase viewBox="0 0 184.538 52" inverse={inverse}>
        <path d="m1.42,49.54v-25.94h15.65v2.79H4.56v8.76h11.7v2.79H4.56v8.82h12.72v2.79H1.42Z" className={"minioApplicationName"}/>
        <path d="m39.77,23.61h3.14v17.17c0,1.77-.42,3.35-1.25,4.74-.83,1.39-2,2.48-3.51,3.28-1.51.8-3.28,1.2-5.32,1.2s-3.81-.4-5.32-1.2c-1.51-.8-2.68-1.89-3.51-3.28-.83-1.39-1.25-2.97-1.25-4.74v-17.17h3.14v16.92c0,1.27.28,2.39.84,3.38.56.98,1.35,1.76,2.39,2.32,1.03.56,2.27.84,3.72.84s2.68-.28,3.72-.84c1.04-.56,1.83-1.33,2.39-2.32.55-.98.83-2.11.83-3.38v-16.92h0Z" className={"minioApplicationName"}/>
        <path d="m49.19,49.54v-25.94h8.76c2.03,0,3.69.34,4.99,1.03,1.3.69,2.26,1.63,2.89,2.83.62,1.2.94,2.56.94,4.09s-.31,2.88-.94,4.07c-.63,1.18-1.58,2.11-2.87,2.78-1.29.67-2.94,1.01-4.95,1.01h-7.09v-2.84h6.99c1.38,0,2.5-.2,3.35-.61.85-.41,1.46-.98,1.85-1.73.38-.75.58-1.64.58-2.68s-.19-1.95-.58-2.72c-.39-.78-1.01-1.38-1.86-1.8-.85-.43-1.98-.64-3.38-.64h-5.52v23.15h-3.14Zm12.21-11.65l6.38,11.65h-3.65l-6.28-11.65h3.55Z" className={"minioApplicationName"}/>
        <path d="m71.99,49.54v-25.94h15.65v2.79h-12.51v8.76h11.7v2.79h-11.7v8.82h12.72v2.79h-15.86Z" className={"minioApplicationName"}/>
        <path d="m93.32,49.54v-25.94h3.14v12.87h.3l11.65-12.87h4.1l-10.89,11.7,10.89,14.24h-3.8l-9.02-12.06-3.24,3.65v8.41h-3.14Z" className={"minioApplicationName"}/>
        <path d="m117.63,49.54h-3.29l9.52-25.94h3.24l9.52,25.94h-3.29l-7.75-21.83h-.2l-7.75,21.83Zm1.22-10.13h13.27v2.79h-13.27v-2.79Z" className={"minioApplicationName"}/>
        <rect x="21.74" y=".24" width="3.76" height="11.02" className={"minioSection"}/>
        <path d="m17.22.35l-7.63,4.66c-.11.07-.25.07-.35,0L1.6.35c-.16-.1-.35-.15-.55-.15h0C.47.19,0,.66,0,1.24v10.02h3.76v-4.75c0-.29.32-.47.57-.32l4.28,2.62c.42.26.95.26,1.38.01l4.51-2.65c.25-.15.57.03.57.32v4.77h3.76V1.24c0-.58-.47-1.05-1.05-1.05h0c-.19,0-.38.05-.55.15h0Z" className={"minioSection"}/>
        <path d="m44.29.24h-3.81v5.05c0,.28-.3.46-.55.33L30.04.36c-.15-.08-.32-.12-.49-.12h0c-.58,0-1.05.47-1.05,1.05v9.97h3.78v-4.97c0-.28.3-.46.55-.33l9.92,5.26c.15.08.32.12.49.12h0c.58,0,1.05-.47,1.05-1.05V.24h0,0Z" className={"minioSection"}/>
        <path d="m47.34,11.26V.24h1.75v11.02h-1.75Z" className={"minioSection"}/>
        <path d="m59.16,11.5c-4.65,0-7.96-2.21-7.96-5.75,0-3.52,3.32-5.75,7.96-5.75s7.98,2.21,7.98,5.75-3.26,5.75-7.98,5.75Zm0-10.03c-3.46,0-6.13,1.51-6.13,4.28s2.67,4.28,6.13,4.28,6.15-1.49,6.15-4.28-2.69-4.28-6.15-4.28h0Z" className={"minioSection"}/>
    </LogoBase>
  );
};

export default Eureka;
