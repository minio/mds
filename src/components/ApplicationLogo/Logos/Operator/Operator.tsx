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

const Operator: FC<SVGProps<any> & LogoBaseProps> = ({ inverse, onClick }) => {
  return (
    <LogoBase viewBox="0 0 154.498 50.008" inverse={inverse} onClick={onClick}>
      <g transform="translate(27.666 -11)">
        <g transform="translate(-29 11)">
          <g transform="translate(0 0)">
            <path
              d="M11.992-20.677A10.225,10.225,0,0,0,1.334-10.15,10.225,10.225,0,0,0,11.992.377,10.237,10.237,0,0,0,22.664-10.15,10.237,10.237,0,0,0,11.992-20.677Zm0,3.886A6.268,6.268,0,0,1,18.43-10.15a6.268,6.268,0,0,1-6.438,6.641A6.276,6.276,0,0,1,5.554-10.15,6.276,6.276,0,0,1,11.992-16.791ZM33.887-7.424c4.814,0,7.4-2.523,7.4-6.424,0-3.929-2.581-6.453-7.424-6.453h-8.28V0h4.046V-7.424Zm-.1-9.15c2.2,0,3.35.914,3.35,2.726s-1.146,2.726-3.35,2.726H29.624v-5.452ZM59.174-3.712H48.053V-8.381h10.5v-3.712h-10.5v-4.5H59.059V-20.3H44.007V0H59.174ZM62.6-20.3V0h4.045V-8.077h1.189L73.747,0h4.9L72.4-8.135c3.9-.377,6.221-2.654,6.221-5.989,0-3.886-2.6-6.177-7.438-6.177Zm8.512,3.726c2.146,0,3.35.769,3.35,2.451,0,1.711-1.146,2.523-3.35,2.523H66.642v-4.974ZM92.278-20.3h-4.93L79.445,0h4.22l1.769-4.727H94.09L95.86,0h4.321Zm-2.508,4L92.7-8.454H86.826Zm25.288-4H98.426v3.785h6.293V0h4.045V-16.516h6.293Zm11.136-.377A10.225,10.225,0,0,0,115.536-10.15,10.225,10.225,0,0,0,126.194.377,10.237,10.237,0,0,0,136.866-10.15,10.237,10.237,0,0,0,126.194-20.677Zm0,3.886a6.268,6.268,0,0,1,6.438,6.641,6.268,6.268,0,0,1-6.438,6.641,6.276,6.276,0,0,1-6.438-6.641A6.276,6.276,0,0,1,126.194-16.791ZM139.78-20.3V0h4.046V-8.077h1.189L150.931,0h4.9l-6.25-8.135c3.9-.377,6.221-2.654,6.221-5.989,0-3.886-2.6-6.177-7.439-6.177Zm8.512,3.726c2.146,0,3.35.769,3.35,2.451,0,1.711-1.146,2.523-3.35,2.523h-4.466v-4.974Z"
              transform="translate(0 37.951)"
              className={"minioApplicationName"}
            />
            <g transform="translate(2.356 0)">
              <g transform="translate(0 0.151)">
                <rect
                  width="2.928"
                  height="8.645"
                  transform="translate(16.956)"
                  className={"minioSection"}
                />
                <path
                  d="M239.81,365.349l-5.942,3.629a.265.265,0,0,1-.276,0l-5.942-3.629a.816.816,0,0,0-.425-.119h-.007a.815.815,0,0,0-.815.815v7.82h2.926v-3.722a.293.293,0,0,1,.446-.25l3.33,2.037a1.042,1.042,0,0,0,1.072.011l3.515-2.062a.293.293,0,0,1,.44.253v3.733h2.925v-7.82a.814.814,0,0,0-.814-.815h-.007A.816.816,0,0,0,239.81,365.349Z"
                  transform="translate(-226.403 -365.23)"
                  className={"minioSection"}
                />
                <path
                  d="M259.662,365.23h-2.969v3.935a.293.293,0,0,1-.431.258l-7.694-4.1a.818.818,0,0,0-.383-.1h-.005a.815.815,0,0,0-.815.815v7.821h2.945v-3.931a.293.293,0,0,1,.43-.258l7.725,4.1a.814.814,0,0,0,.382.1h0a.815.815,0,0,0,.815-.815Z"
                  transform="translate(-225.18 -365.23)"
                  className={"minioSection"}
                />
              </g>
              <path
                d="M261.159,373.875V365.23h1.347v8.646Z"
                transform="translate(-224.375 -365.079)"
                className={"minioSection"}
              />
              <path
                d="M270.264,374.038c-3.624,0-6.195-1.719-6.195-4.475s2.587-4.476,6.195-4.476,6.21,1.719,6.21,4.476S273.934,374.038,270.264,374.038Zm0-7.8c-2.695,0-4.77,1.177-4.77,3.33s2.075,3.329,4.77,3.329,4.786-1.162,4.786-3.329S272.958,366.233,270.264,366.233Z"
                transform="translate(-224.205 -365.087)"
                className={"minioSection"}
              />
            </g>
          </g>
        </g>
      </g>
    </LogoBase>
  );
};

export default Operator;
