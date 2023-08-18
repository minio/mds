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

const Releases: FC<SVGProps<any> & LogoBaseProps> = ({ inverse, onClick }) => {
  return (
    <LogoBase viewBox="0 0 189.7 49.96" inverse={inverse} onClick={onClick}>
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
          d="m0,24.14h10.73c3,0,5.29.67,6.89,2.02,1.6,1.35,2.4,3.25,2.4,5.7,0,2.09-.69,3.8-2.07,5.14s-3.28,2.12-5.71,2.35l7.81,10.17h-6.12l-7.39-10.09h-1.49v10.09H0v-25.37Zm10.64,4.66h-5.58v6.21h5.58c2.79,0,4.19-1.05,4.19-3.15s-1.4-3.06-4.19-3.06Z"
          className={"minioApplicationName"}
        />
        <path
          d="m43.59,44.87v4.64h-18.95v-25.37h18.81v4.64h-13.75v5.62h13.12v4.64h-13.12v5.83h13.9Z"
          className={"minioApplicationName"}
        />
        <path
          d="m67.24,44.78v4.73h-18.46v-25.37h5.06v20.64h13.41Z"
          className={"minioApplicationName"}
        />
        <path
          d="m89.65,44.87v4.64h-18.95v-25.37h18.81v4.64h-13.75v5.62h13.12v4.64h-13.12v5.83h13.9Z"
          className={"minioApplicationName"}
        />
        <path
          d="m108.37,24.14l9.88,25.37h-5.4l-2.21-5.91h-10.82l-2.21,5.91h-5.27l9.88-25.37h6.16Zm-3.13,5l-3.68,9.8h7.34l-3.66-9.8Z"
          className={"minioApplicationName"}
        />
        <path
          d="m140.8,26.4l-2.39,4.13c-2.33-1.44-4.73-2.16-7.19-2.16-1.45,0-2.62.27-3.51.81-.89.54-1.34,1.29-1.34,2.23,0,.45.12.83.36,1.16.24.33.62.6,1.14.82s1.05.4,1.6.53c.55.13,1.26.27,2.13.42l1.43.24c5.39.88,8.08,3.25,8.08,7.1,0,1.35-.28,2.57-.85,3.64-.57,1.08-1.33,1.94-2.3,2.6-.97.66-2.07,1.16-3.3,1.5-1.23.34-2.54.52-3.93.52-1.98,0-3.93-.29-5.84-.86-1.92-.57-3.53-1.39-4.85-2.46l2.63-4.08c.99.79,2.2,1.44,3.62,1.96,1.42.52,2.91.78,4.46.78,1.45,0,2.64-.27,3.58-.81.94-.54,1.4-1.29,1.4-2.25,0-.83-.42-1.46-1.27-1.88-.85-.42-2.22-.78-4.11-1.09l-1.61-.25c-5.16-.81-7.74-3.23-7.74-7.27,0-1.28.27-2.44.82-3.48.54-1.04,1.28-1.88,2.22-2.54.94-.65,2.01-1.15,3.22-1.5,1.21-.35,2.49-.53,3.86-.53,1.79,0,3.46.21,5,.64s3.11,1.11,4.69,2.06Z"
          className={"minioApplicationName"}
        />
        <path
          d="m164.66,44.87v4.64h-18.95v-25.37h18.81v4.64h-13.75v5.62h13.12v4.64h-13.12v5.83h13.9Z"
          className={"minioApplicationName"}
        />
        <path
          d="m189.4,26.4l-2.39,4.13c-2.33-1.44-4.73-2.16-7.19-2.16-1.45,0-2.62.27-3.51.81-.89.54-1.34,1.29-1.34,2.23,0,.45.12.83.36,1.16.24.33.62.6,1.14.82s1.05.4,1.6.53c.55.13,1.26.27,2.13.42l1.43.24c5.39.88,8.08,3.25,8.08,7.1,0,1.35-.28,2.57-.85,3.64-.57,1.08-1.33,1.94-2.3,2.6-.97.66-2.07,1.16-3.3,1.5-1.23.34-2.54.52-3.93.52-1.98,0-3.93-.29-5.84-.86-1.92-.57-3.53-1.39-4.85-2.46l2.63-4.08c.99.79,2.2,1.44,3.62,1.96,1.42.52,2.91.78,4.46.78,1.45,0,2.64-.27,3.58-.81.94-.54,1.4-1.29,1.4-2.25,0-.83-.42-1.46-1.27-1.88-.85-.42-2.22-.78-4.11-1.09l-1.61-.25c-5.16-.81-7.74-3.23-7.74-7.27,0-1.28.27-2.44.82-3.48.54-1.04,1.28-1.88,2.22-2.54.94-.65,2.01-1.15,3.22-1.5,1.21-.35,2.49-.53,3.86-.53,1.79,0,3.46.21,5,.64s3.11,1.11,4.69,2.06Z"
          className={"minioApplicationName"}
        />
      </g>
    </LogoBase>
  );
};

export default Releases;
