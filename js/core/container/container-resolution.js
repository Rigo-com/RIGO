// =====================================
// RIGO AI
// CONTAINER RESOLUTION
// =====================================



// =====================================
// IMPORTS
// =====================================

import containerState
from "./container-state.js";

import {

  ServiceNotFoundError,

  CircularDependencyError

}
from "./container-errors.js";

import {
  getService
}
from "./container-registration.js";



// =====================================
// RESOLVE
// =====================================

export async function resolveService(
  serviceId
){

  const id =
  String(
    serviceId || ""
  )
  .trim()
  .toLowerCase();



  // ===============================
  // EXISTING INSTANCE
  // ===============================

  if(

    containerState
    .instances
    .has(id)

  ){

    return containerState
    .instances
    .get(id);

  }



  // ===============================
  // SERVICE
  // ===============================

  const definition =
  getService(id);

  if(
    !definition
  ){

    throw new ServiceNotFoundError(
      id
    );

  }



  // ===============================
  // CIRCULAR DEPENDENCY
  // ===============================

  if(

    containerState
    .resolutionStack
    .has(id)

  ){

    throw new CircularDependencyError(
      id
    );

  }

  containerState
  .resolutionStack
  .add(id);



  try{

    const dependencies =
    {};



    // ===========================
    // DEPENDENCIES
    // ===========================

    for(

      const dependencyId

      of

      definition
      .dependencies

    ){

      dependencies[
        dependencyId
      ] =

      await resolveService(
        dependencyId
      );

    }



    // ===========================
    // INSTANCE
    // ===========================

    const instance =

      await definition
      .factory(
        dependencies
      );



    containerState
    .instances
    .set(

      id,
      instance

    );



    containerState
    .diagnostics
    .resolutions++;



    return instance;

  }

  finally{

    containerState
    .resolutionStack
    .delete(id);

  }

}



// =====================================
// RESOLVE MANY
// =====================================

export async function resolveServices(
  serviceIds = []
){

  const resolved =
  {};

  for(
    const serviceId
    of serviceIds
  ){

    resolved[
      serviceId
    ] =

    await resolveService(
      serviceId
    );

  }

  return resolved;

}
