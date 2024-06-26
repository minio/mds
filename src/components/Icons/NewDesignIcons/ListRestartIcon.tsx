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

const ListRestartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.29999 3.99999C1.29999 3.61339 1.61339 3.29999 1.99999 3.29999H14C14.3866 3.29999 14.7 3.61339 14.7 3.99999C14.7 4.38659 14.3866 4.69999 14 4.69999H1.99999C1.61339 4.69999 1.29999 4.38659 1.29999 3.99999ZM7.33332 5.96665C7.71992 5.96665 8.03332 6.28006 8.03332 6.66665V7.64337L8.23168 7.44501C8.93814 6.73856 9.92096 6.29999 11 6.29999C11.9813 6.29999 12.9224 6.68981 13.6163 7.38369C14.3102 8.07758 14.7 9.01869 14.7 9.99999C14.7 10.8465 14.4336 11.6716 13.9387 12.3583C13.4437 13.0451 12.7452 13.5586 11.9421 13.8263C11.139 14.094 10.2721 14.1023 9.46405 13.8499C8.65602 13.5975 7.9479 13.0972 7.43999 12.42C7.20803 12.1107 7.27071 11.6719 7.57999 11.44C7.88927 11.208 8.32803 11.2707 8.55999 11.58C8.8916 12.0221 9.35393 12.3487 9.88148 12.5135C10.409 12.6783 10.9751 12.673 11.4994 12.4982C12.0237 12.3234 12.4798 11.9881 12.8029 11.5397C13.1261 11.0914 13.3 10.5527 13.3 9.99999C13.3 9.38999 13.0577 8.80498 12.6263 8.37364C12.195 7.94231 11.61 7.69999 11 7.69999C10.3057 7.69999 9.67517 7.98142 9.22163 8.43496L9.02327 8.63332H9.99999C10.3866 8.63332 10.7 8.94672 10.7 9.33332C10.7 9.71992 10.3866 10.0333 9.99999 10.0333H7.33332C6.94672 10.0333 6.63332 9.71992 6.63332 9.33332V6.66665C6.63332 6.28006 6.94672 5.96665 7.33332 5.96665ZM1.29999 7.99999C1.29999 7.61339 1.61339 7.29999 1.99999 7.29999H4.66665C5.05325 7.29999 5.36665 7.61339 5.36665 7.99999C5.36665 8.38659 5.05325 8.69999 4.66665 8.69999H1.99999C1.61339 8.69999 1.29999 8.38659 1.29999 7.99999ZM1.29999 12C1.29999 11.6134 1.61339 11.3 1.99999 11.3H4.66665C5.05325 11.3 5.36665 11.6134 5.36665 12C5.36665 12.3866 5.05325 12.7 4.66665 12.7H1.99999C1.61339 12.7 1.29999 12.3866 1.29999 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ListRestartIcon;
