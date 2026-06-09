// =====================================
// RIGO AI
// CONTAINER
// =====================================



// =====================================
// IMPORTS
// =====================================

import containerState
from "./container-state.js";

import {

  registerService,
  unregisterService,
  hasService,
  getService,
  listServices

}
from "./container-registration.js";

import {

  resolveService,
  resolveServices

}
from "./container-resolution.js";

import {

  initializeContainer,
  bootContainer,
  shutdownContainer,
  resetContainer

}
from "./container-lifecycle.js";



// =====================================
// SNAPSHOT
// =====================================

function createContainerSnapshot(){

  return Object.freeze({

    initialized:
    containerState
    .initialized,

    booted:
    containerState
    .booted,

    services:

      containerState
      .services
      .size,

    instances:

      containerState
      .instances
      .size,

    diagnostics:

      Object.freeze({

        ...containerState
        .diagnostics

      }),

    startedAt:
    containerState
    .startedAt,

    lastError:
    containerState
    .lastError,

    timestamp:
    Date.now()

  });

}



// =====================================
// PUBLIC API
// =====================================

const Container =
Object.freeze({

  state:
  containerState,



  // ===============================
  // REGISTRATION
  // ===============================

  register:
  registerService,

  unregister:
  unregisterService,

  has:
  hasService,

  get:
  getService,

  list:
  listServices,



  // ===============================
  // RESOLUTION
  // ===============================

  resolve:
  resolveService,

  resolveMany:
  resolveServices,



  // ===============================
  // LIFECYCLE
  // ===============================

  initialize:
  initializeContainer,

  boot:
  bootContainer,

  shutdown:
  shutdownContainer,

  reset:
  resetContainer,



  // ===============================
  // DIAGNOSTICS
  // ===============================

  snapshot:
  createContainerSnapshot

});



// =====================================
// EXPORTS
// =====================================

export {

  Container

};

export default
Container;
