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

const BathIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.96663 3C1.96663 2.06874 2.73537 1.3 3.66663 1.3C3.68571 1.3 3.70478 1.30078 3.7238 1.30234C4.15256 1.33747 4.55176 1.53382 4.8412 1.85129L5.99997 3.01005L6.17166 2.83836C6.44503 2.56499 6.88824 2.56499 7.16161 2.83836C7.43498 3.11173 7.43498 3.55494 7.16161 3.82831L6.49519 4.49473L5.82828 5.16164C5.55491 5.43501 5.11169 5.43501 4.83833 5.16164C4.56496 4.88828 4.56496 4.44506 4.83833 4.1717L5.01002 4L3.83833 2.82831C3.8284 2.81839 3.81878 2.80817 3.80947 2.79766C3.7647 2.74716 3.70442 2.71344 3.63857 2.70149C3.49215 2.71698 3.36663 2.85136 3.36663 3V7.3H14.6666C15.0532 7.3 15.3666 7.6134 15.3666 8C15.3666 8.3866 15.0532 8.7 14.6666 8.7H14.0333V11.3333C14.0333 11.8726 13.8191 12.3898 13.4377 12.7711C13.0643 13.1446 12.5605 13.3578 12.0333 13.3664V14C12.0333 14.3866 11.7199 14.7 11.3333 14.7C10.9467 14.7 10.6333 14.3866 10.6333 14V13.3667H5.36663V14C5.36663 14.3866 5.05323 14.7 4.66663 14.7C4.28003 14.7 3.96663 14.3866 3.96663 14V13.3664C3.43942 13.3578 2.93564 13.1446 2.56218 12.7711C2.18086 12.3898 1.96663 11.8726 1.96663 11.3333V8.7H1.3333C0.946701 8.7 0.633301 8.3866 0.633301 8C0.633301 7.6134 0.946701 7.3 1.3333 7.3H1.96663V3ZM3.36663 8.7V11.3333C3.36663 11.5013 3.43336 11.6624 3.55213 11.7812C3.67091 11.8999 3.832 11.9667 3.99997 11.9667H12C12.1679 11.9667 12.329 11.8999 12.4478 11.7812C12.5666 11.6624 12.6333 11.5013 12.6333 11.3333V8.7H3.36663Z"
      fill="currentColor"
    />
  </svg>
);
export default BathIcon;
