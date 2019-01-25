/**
 * SpikeForest Iso
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import ErrorPage from './ErrorPage';

function action() {
  return {
    title: 'Demo Error',
    component: <ErrorPage />,
  };
}

export default action;
