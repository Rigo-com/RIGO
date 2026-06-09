// =====================================
// RIGO AI
// CONTAINER REGISTRATION
// =====================================



// =====================================
// IMPORTS
// =====================================

import containerState
from "./container-state.js";

import {
  InvalidServiceDefinitionError,
  ServiceAlreadyRegisteredError
}
from "./container-errors.js";

import {
  CONTAINER_CONTRACT
}
from "./container-types.js";



// =====================================
// VALIDATION
// =====================================

function validateServiceDefinition(
  definition
){

  if(
    !definition ||
    typeof definition !==
    "object"
  ){

    throw new InvalidServiceDefinitionError(
      "unknown"
    );

  }

  const requiredFields =

    CONTAINER_CONTRACT
    .REQUIRED_FIELDS;

  for(
    const field
    of requiredFields
  ){

    if(
      !(field in definition)
    ){

      throw new InvalidServiceDefinitionError(
        definition.id
      );

    }

  }

  return true;

}



// =====================================
// REGISTER
// =====================================

export function registerService(
  definition
){

  validateServiceDefinition(
    definition
  );

  const id =
  String(
    definition.id
  )
  .trim()
  .toLowerCase();

  if(

    containerState
    .services
    .has(id)

  ){

    throw new ServiceAlreadyRegisteredError(
      id
    );

  }

  containerState
  .services
  .set(

    id,

    Object.freeze(
      definition
    )

  );

  containerState
  .diagnostics
  .registrations++;

  return true;

}



// =====================================
// UNREGISTER
// =====================================

export function unregisterService(
  serviceId
){

  const id =
  String(
    serviceId || ""
  )
  .trim()
  .toLowerCase();

  containerState
  .instances
  .delete(
    id
  );

  return containerState
  .services
  .delete(
    id
  );

}



// =====================================
// HAS
// =====================================

export function hasService(
  serviceId
){

  return containerState
  .services
  .has(

    String(
      serviceId || ""
    )
    .trim()
    .toLowerCase()

  );

}



// =====================================
// GET
// =====================================

export function getService(
  serviceId
){

  return containerState
  .services
  .get(

    String(
      serviceId || ""
    )
    .trim()
    .toLowerCase()

  ) || null;

}



// =====================================
// LIST
// =====================================

export function listServices(){

  return [

    ...containerState
    .services
    .values()

  ]
  .sort((a,b) => {

    return (
      a.priority -
      b.priority
    );

  });

}
