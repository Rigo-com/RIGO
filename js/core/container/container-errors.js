// =====================================
// RIGO AI
// CONTAINER ERRORS
// =====================================



// =====================================
// BASE ERROR
// =====================================

export class ContainerError
extends Error{

  constructor(
    message
  ){

    super(
      message
    );

    this.name =
    "ContainerError";

  }

}



// =====================================
// SERVICE NOT FOUND
// =====================================

export class ServiceNotFoundError
extends ContainerError{

  constructor(
    serviceId
  ){

    super(

      `SERVICE_NOT_FOUND: ${serviceId}`

    );

    this.name =
    "ServiceNotFoundError";

  }

}



// =====================================
// SERVICE ALREADY REGISTERED
// =====================================

export class ServiceAlreadyRegisteredError
extends ContainerError{

  constructor(
    serviceId
  ){

    super(

      `SERVICE_ALREADY_REGISTERED: ${serviceId}`

    );

    this.name =
    "ServiceAlreadyRegisteredError";

  }

}



// =====================================
// INVALID SERVICE
// =====================================

export class InvalidServiceDefinitionError
extends ContainerError{

  constructor(
    serviceId
  ){

    super(

      `INVALID_SERVICE_DEFINITION: ${serviceId}`

    );

    this.name =
    "InvalidServiceDefinitionError";

  }

}



// =====================================
// CIRCULAR DEPENDENCY
// =====================================

export class CircularDependencyError
extends ContainerError{

  constructor(
    serviceId
  ){

    super(

      `CIRCULAR_DEPENDENCY: ${serviceId}`

    );

    this.name =
    "CircularDependencyError";

  }

}



// =====================================
// SERVICE BOOT FAILED
// =====================================

export class ServiceBootError
extends ContainerError{

  constructor(
    serviceId
  ){

    super(

      `SERVICE_BOOT_FAILED: ${serviceId}`

    );

    this.name =
    "ServiceBootError";

  }

}



// =====================================
// EXPORTS
// =====================================

export default
Object.freeze({

  ContainerError,

  ServiceNotFoundError,

  ServiceAlreadyRegisteredError,

  InvalidServiceDefinitionError,

  CircularDependencyError,

  ServiceBootError

});
