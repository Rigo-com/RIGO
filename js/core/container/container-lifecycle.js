// =====================================
// RIGO AI
// CONTAINER LIFECYCLE
// =====================================



// =====================================
// IMPORTS
// =====================================

import containerState
from "./container-state.js";

import {
  listServices
}
from "./container-registration.js";

import {
  resolveService
}
from "./container-resolution.js";



// =====================================
// INITIALIZE
// =====================================

export async function initializeContainer(){

  if(
    containerState
    .initialized
  ){

    return true;

  }

  containerState
  .initialized =
  true;

  return true;

}



// =====================================
// BOOT
// =====================================

export async function bootContainer(){

  if(
    containerState
    .booted
  ){

    return true;

  }

  await initializeContainer();

  const services =
  listServices();

  for(
    const service
    of services
  ){

    const instance =

      await resolveService(
        service.id
      );



    if(
      typeof instance
      ?.initialize ===
      "function"
    ){

      await instance
      .initialize();

    }



    if(
      typeof instance
      ?.boot ===
      "function"
    ){

      await instance
      .boot();

    }

  }

  containerState
  .booted =
  true;

  containerState
  .startedAt =
  Date.now();

  return true;

}



// =====================================
// SHUTDOWN
// =====================================

export async function shutdownContainer(){

  if(
    !containerState
    .booted
  ){

    return true;

  }

  const services =

    listServices()
    .reverse();

  for(
    const service
    of services
  ){

    const instance =

      containerState
      .instances
      .get(
        service.id
      );

    if(
      !instance
    ){

      continue;

    }

    if(
      typeof instance
      ?.shutdown ===
      "function"
    ){

      await instance
      .shutdown();

    }

  }

  containerState
  .booted =
  false;

  return true;

}



// =====================================
// RESET
// =====================================

export async function resetContainer(){

  await shutdownContainer();

  containerState
  .instances
  .clear();

  containerState
  .dependencyGraph
  .clear();

  containerState
  .resolutionStack
  .clear();

  containerState
  .booted =
  false;

  containerState
  .initialized =
  false;

  containerState
  .startedAt =
  null;

  containerState
  .lastError =
  null;

  return true;

}
