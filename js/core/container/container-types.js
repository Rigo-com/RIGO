// =====================================
// RIGO AI
// CONTAINER TYPES
// =====================================



// =====================================
// LIFECYCLES
// =====================================

export const CONTAINER_LIFECYCLES =
Object.freeze({

  SINGLETON:
  "singleton",

  TRANSIENT:
  "transient"

});



// =====================================
// STATES
// =====================================

export const CONTAINER_STATES =
Object.freeze({

  REGISTERED:
  "registered",

  INITIALIZED:
  "initialized",

  BOOTED:
  "booted",

  STOPPED:
  "stopped",

  FAILED:
  "failed"

});



// =====================================
// PRIORITIES
// =====================================

export const CONTAINER_PRIORITIES =
Object.freeze({

  CRITICAL:
  0,

  HIGH:
  100,

  NORMAL:
  500,

  LOW:
  1000

});



// =====================================
// SERVICE CONTRACT
// =====================================

export const CONTAINER_CONTRACT =
Object.freeze({

  REQUIRED_FIELDS:

  Object.freeze([

    "id",
    "priority",
    "dependencies",

    "initialize",
    "boot",
    "shutdown",
    "reset",
    "snapshot"

  ])

});



// =====================================
// EXPORTS
// =====================================

export default
Object.freeze({

  LIFECYCLES:
  CONTAINER_LIFECYCLES,

  STATES:
  CONTAINER_STATES,

  PRIORITIES:
  CONTAINER_PRIORITIES,

  CONTRACT:
  CONTAINER_CONTRACT

});
