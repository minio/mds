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

const BrainCircuitIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.94376 0.628028C6.30366 0.620526 6.66142 0.685067 6.99601 0.817855C7.33059 0.950642 7.63525 1.149 7.89206 1.40125C8.14886 1.6535 8.35264 1.95456 8.49139 2.28672C8.63001 2.61855 8.70094 2.97474 8.70002 3.33436C8.70002 3.3347 8.70002 3.33505 8.70001 3.3354L8.00002 3.33333H8.70002V3.33436V4.63333H8.00002C7.61342 4.63333 7.30002 4.94673 7.30002 5.33333V3.33333L7.30002 3.33127C7.30053 3.15795 7.26638 2.98628 7.19957 2.82635C7.13276 2.66642 7.03465 2.52147 6.911 2.40001C6.78736 2.27856 6.64067 2.18306 6.47957 2.11912C6.31847 2.05519 6.14622 2.02411 5.97293 2.02772C5.79965 2.03134 5.62884 2.06956 5.47055 2.14015C5.31225 2.21075 5.16967 2.31228 5.05119 2.43878C4.93271 2.56528 4.84073 2.7142 4.78064 2.87677C4.72056 3.03934 4.69359 3.21229 4.70132 3.38544L4.70144 3.38808C4.71 3.59769 4.76918 3.80212 4.8739 3.98391C5.06688 4.3189 4.95176 4.7469 4.61678 4.93988C4.28179 5.13287 3.85378 5.01775 3.6608 4.68276C3.60823 4.5915 3.56118 4.49749 3.51981 4.40125C3.71739 4.25953 3.93994 4.1554 4.17633 4.09462L3.8277 2.73872C3.65811 2.78233 3.49268 2.83896 3.33282 2.90791C3.36046 2.73216 3.40548 2.55914 3.46746 2.39143C3.59225 2.05378 3.7833 1.7445 4.02938 1.48176C4.27545 1.21903 4.57157 1.00815 4.90034 0.861536C5.2291 0.714922 5.58386 0.635529 5.94376 0.628028ZM1.48318 7.0964C1.37676 6.78767 1.31552 6.46417 1.30219 6.13595C1.28146 5.62555 1.37714 5.11712 1.582 4.64918C1.78686 4.18123 2.09552 3.76604 2.48459 3.43504C2.7403 3.21751 3.02633 3.04009 3.33282 2.90791M1.48318 7.0964C1.24154 7.36826 1.04473 7.67839 0.901427 8.0153C0.686728 8.52005 0.598611 9.06962 0.644739 9.61619C0.690868 10.1628 0.869846 10.6898 1.1661 11.1514C1.38064 11.4857 1.65198 11.7784 1.96674 12.0168C1.96854 12.3244 2.01247 12.6309 2.09789 12.9279C2.2251 13.3701 2.44163 13.7816 2.7341 14.1369C3.02657 14.4921 3.38877 14.7837 3.79833 14.9935C4.2079 15.2033 4.65613 15.327 5.11534 15.3568C5.57455 15.3866 6.035 15.3219 6.46824 15.1668C6.90149 15.0116 7.29833 14.7694 7.63426 14.4548C7.9702 14.1403 8.23809 13.7603 8.42139 13.3382C8.51083 13.1323 8.57921 12.9184 8.62584 12.7H12C12.168 12.7 12.3291 12.7667 12.4479 12.8855C12.5457 12.9834 12.6083 13.11 12.6272 13.2456C12.4259 13.4341 12.3 13.7024 12.3 14C12.3 14.5707 12.7627 15.0333 13.3333 15.0333C13.904 15.0333 14.3667 14.5707 14.3667 14C14.3667 13.6983 14.2374 13.4267 14.0311 13.2378C14.0074 12.7333 13.7965 12.2543 13.4378 11.8956C13.0565 11.5142 12.5393 11.3 12 11.3H8.70002V9.36667H9.90656C10.0954 9.57161 10.366 9.7 10.6667 9.7C11.2374 9.7 11.7 9.23736 11.7 8.66667C11.7 8.09597 11.2374 7.63333 10.6667 7.63333C10.366 7.63333 10.0954 7.76173 9.90656 7.96667H8.70002V6.03333H12.5732C12.7621 6.23828 13.0327 6.36667 13.3333 6.36667C13.904 6.36667 14.3667 5.90403 14.3667 5.33333C14.3667 4.76264 13.904 4.3 13.3333 4.3C13.0327 4.3 12.7621 4.42839 12.5732 4.63333H11.3667V3.33333C11.3667 3.17971 11.4225 3.03184 11.5229 2.91683C11.6656 2.99126 11.8279 3.03333 12 3.03333C12.5707 3.03333 13.0333 2.5707 13.0333 2C13.0333 1.42931 12.5707 0.966668 12 0.966668C11.6039 0.966668 11.2598 1.18959 11.0864 1.51683C10.8943 1.61341 10.7171 1.7407 10.5622 1.89555C10.1809 2.27687 9.96668 2.79406 9.96668 3.33333V4.63333H8.70002V5.99424C8.70004 5.99767 8.70004 6.0011 8.70002 6.00454M8.70002 6.03333C8.69994 6.03493 8.69907 6.03652 8.69898 6.03811C8.66116 6.73172 8.42891 7.3999 8.02988 7.96667M7.30002 8.66667V5.97966C7.30039 5.97374 7.30073 5.96782 7.30105 5.96189C7.30689 5.85495 7.33643 5.75492 7.38431 5.66664C7.33055 5.56754 7.30002 5.454 7.30002 5.33333V5.97966C7.27212 6.42748 7.11383 6.85751 6.84447 7.21667C6.57154 7.58058 6.19683 7.85538 5.76772 8.00634C5.40303 8.13463 5.21139 8.53427 5.33968 8.89896C5.46798 9.26365 5.86762 9.45529 6.23231 9.327C6.62038 9.19048 6.9808 8.991 7.30002 8.73847L7.30002 11.9993C7.29967 12.2679 7.24428 12.5341 7.13726 12.7805C7.03018 13.0271 6.87369 13.2491 6.67745 13.4328C6.48121 13.6166 6.24939 13.7581 5.99631 13.8487C5.74322 13.9393 5.47425 13.9771 5.206 13.9597C4.93774 13.9423 4.67591 13.8701 4.43666 13.7475C4.19741 13.6249 3.98583 13.4546 3.81498 13.2471C3.67068 13.0718 3.55803 12.8731 3.48173 12.6599C3.65266 12.6866 3.82603 12.7001 4.00034 12.7C4.38694 12.6998 4.7002 12.3863 4.70002 11.9997C4.69984 11.6131 4.38629 11.2998 3.99969 11.3C3.6616 11.3002 3.32845 11.2125 3.03277 11.0457M2.68868 11.6553L3.38291 11.7451C3.34845 12.0117 3.36901 12.2825 3.44333 12.5408C3.45488 12.581 3.46769 12.6207 3.48173 12.6599C3.39163 12.6459 3.30221 12.6282 3.21369 12.6069C2.91065 12.534 2.6181 12.4192 2.34479 12.265L2.68868 11.6553ZM3.03277 11.0457C2.75381 10.8882 2.51736 10.6649 2.34434 10.3953C2.17128 10.1256 2.06673 9.81774 2.03978 9.49846C2.01283 9.17917 2.06431 8.85814 2.18973 8.56328C2.31514 8.26843 2.51071 8.00868 2.7594 7.80664C2.84808 7.73441 2.94481 7.66916 3.04769 7.61206C3.38573 7.42447 3.50768 6.99836 3.32008 6.66033C3.19482 6.43463 2.96324 6.30526 2.72254 6.30004C2.71124 6.22704 2.70405 6.1533 2.70103 6.07914C2.68892 5.78098 2.74482 5.48398 2.86449 5.21062C2.98416 4.93727 3.16446 4.69473 3.39175 4.50138C3.43312 4.46618 3.47585 4.43279 3.51981 4.40125C3.3902 4.09973 3.31629 3.77625 3.30266 3.44658M2.68868 11.6553L3.03277 11.0457L2.68868 11.6553ZM7.30002 8.66667V8.73847V8.66667ZM7.30002 8.73847C7.30114 8.73758 7.30226 8.73669 7.30339 8.7358L7.30002 8.73847ZM2.68868 11.6553L3.03277 11.0457L2.68868 11.6553Z"
      fill="currentColor"
    />
  </svg>
);
export default BrainCircuitIcon;