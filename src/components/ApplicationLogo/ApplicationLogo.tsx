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

import React, { FC } from "react";
import { ApplicationLogoProps } from "./ApplicationLogo.types";
import ConsoleStandard from "./Logos/Console/ConsoleStandard";
import ConsoleAGPL from "./Logos/Console/ConsoleAGPL";
import ConsoleEnterprise from "./Logos/Console/ConsoleEnterprise";
import Operator from "./Logos/Operator/Operator";
import DirectPV from "./Logos/DirectPV/DirectPV";
import KES from "./Logos/KES/KES";
import SUBNET from "./Logos/SUBNET/SUBNET";
import ConsoleSingle from "./Logos/Console/ConsoleSingle";
import SubnetOPS from "./Logos/SubnetOPS/SubnetOPS";
import Cloud from "./Logos/Cloud/Cloud";
import Releases from "./Logos/Releases/Releases";
import VMBroker from "./Logos/VMBroker/VMBroker";
import EurekaNew from "./Logos/Eureka/EurekaNew";
import Eureka from "./Logos/Eureka/Eureka";
import KMS from "./Logos/KMS/KMS";
import LoadBalancer from "./Logos/LoadBalancer/LoadBalancer";
import IndexLogo from "./Logos/IndexLogo/IndexLogo";
import Cache from "./Logos/Cache/Cache";
import Monitor from "./Logos/Monitor/Monitor";
import Observe from "./Logos/Observe/Observe";
import MissionControl from "./Logos/MissionControl/MissionControl";
import GlobalConsole from "./Logos/Console/GlobalConsole";
import ThemedLogo from "../ThemedLogo/ThemedLogo";
import Enterprise from "./Logos/Enterprise/Enterprise";
import MinIOEnterprise from "./Logos/MinIO/MinIOEnterprise";
import MinIOEnterpriseOS from "./Logos/MinIO/MinIOEnterpriseOS";
import MinIOEnterpriseOSVertical from "./Logos/MinIO/MinIOEnterpriseOSVertical";

const ApplicationLogo: FC<ApplicationLogoProps> = ({
  applicationName,
  subVariant = "simple",
  inverse,
  onClick,
}) => {
  switch (applicationName) {
    case "console":
      switch (subVariant) {
        case "standard":
          return <ConsoleStandard inverse={!!inverse} onClick={onClick} />;
        case "enterprise":
          return <ConsoleEnterprise inverse={!!inverse} onClick={onClick} />;
        case "AGPL":
          return <ConsoleAGPL inverse={!!inverse} onClick={onClick} />;
        default:
          return <ConsoleSingle inverse={!!inverse} onClick={onClick} />;
      }
      break;
    case "directpv":
      return <DirectPV inverse={!!inverse} onClick={onClick} />;
    case "subnet":
      return <SUBNET inverse={!!inverse} onClick={onClick} />;
    case "kes":
      return <KES inverse={!!inverse} onClick={onClick} />;
    case "operator":
      return <Operator inverse={!!inverse} onClick={onClick} />;
    case "subnetops":
      return <SubnetOPS inverse={!!inverse} onClick={onClick} />;
    case "cloud":
      return <Cloud inverse={!!inverse} onClick={onClick} />;
    case "releases":
      return <Releases inverse={!!inverse} onClick={onClick} />;
      break;
    case "vmbroker":
      return <VMBroker inverse={!!inverse} onClick={onClick} />;
      break;
    case "eureka":
      switch (subVariant) {
        case "new":
          return <EurekaNew inverse={!!inverse} onClick={onClick} />;
        default:
          return <Eureka inverse={!!inverse} onClick={onClick} />;
      }
      break;
    case "kms":
      return <KMS inverse={!!inverse} onClick={onClick} />;
    case "loadbalancer":
      return <LoadBalancer inverse={!!inverse} onClick={onClick} />;
    case "index":
      return <IndexLogo inverse={!!inverse} onClick={onClick} />;
    case "cache":
      return <Cache inverse={!!inverse} onClick={onClick} />;
    case "monitor":
      return <Monitor inverse={!!inverse} onClick={onClick} />;
    case "observe":
      return <Observe inverse={!!inverse} onClick={onClick} />;
    case "missioncontrol":
      return <MissionControl inverse={!!inverse} onClick={onClick} />;
    case "globalconsole":
      return <GlobalConsole inverse={!!inverse} onClick={onClick} />;
    case "enterprise":
      return <Enterprise inverse={!!inverse} onClick={onClick} />;
    case "minio":
      switch (subVariant) {
        case "enterprise":
          return <MinIOEnterprise inverse={!!inverse} onClick={onClick} />;
          break;
        case "enterpriseos":
          return <MinIOEnterpriseOS inverse={!!inverse} onClick={onClick} />;
        case "enterpriseosvertical":
          return (
            <MinIOEnterpriseOSVertical inverse={!!inverse} onClick={onClick} />
          );
        default:
          return <ThemedLogo onClick={onClick} />;
      }
  }
};

export default ApplicationLogo;
