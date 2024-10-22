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

const CloudLightningIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.12042 2.86282C6.48622 2.67638 5.81548 2.6514 5.16917 2.79013C4.52286 2.92887 3.92146 3.22693 3.41964 3.65722C2.91783 4.08751 2.5315 4.63639 2.29578 5.25397C2.06006 5.87155 1.98242 6.53825 2.06991 7.19347C2.1574 7.84869 2.40725 8.47166 2.79676 9.00575C3.18627 9.53984 3.70307 9.96813 4.30021 10.2517C4.64944 10.4175 4.79811 10.835 4.63228 11.1843C4.46645 11.5335 4.04892 11.6822 3.69969 11.5163C2.8918 11.1327 2.19259 10.5533 1.66561 9.83068C1.13863 9.10808 0.800598 8.26524 0.682226 7.37877C0.563854 6.49229 0.6689 5.59029 0.987817 4.75474C1.30673 3.91919 1.82941 3.17659 2.50834 2.59443C3.18726 2.01227 4.00092 1.60902 4.87534 1.42131C5.74977 1.23361 6.65724 1.26742 7.51528 1.51966C8.37331 1.77189 9.15471 2.23457 9.78844 2.86562C10.2966 3.37164 10.6969 3.97305 10.9675 4.63334H11.6661M9.02676 7.39976C9.35827 7.59866 9.46576 8.02865 9.26686 8.36015L7.90295 10.6333H9.33328C9.58547 10.6333 9.81817 10.769 9.94242 10.9884C10.0667 11.2079 10.0633 11.4772 9.93353 11.6935L7.93353 15.0268C7.73462 15.3583 7.30464 15.4658 6.97313 15.2669C6.64163 15.068 6.53413 14.638 6.73304 14.3065L8.09695 12.0333H6.66661C6.41442 12.0333 6.18173 11.8977 6.05747 11.6782C5.93322 11.4588 5.93662 11.1894 6.06637 10.9732L8.06637 7.63986C8.26527 7.30835 8.69526 7.20086 9.02676 7.39976Z"
      fill="currentColor"
    />
  </svg>
);
export default CloudLightningIcon;
