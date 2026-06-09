// =====================================
// RIGO AI
// CONTAINER STATE
// =====================================



// =====================================
// STATE
// =====================================

export const containerState =
Object.seal({

  initialized:
  false,

  booted:
  false,



  // ===============================
  // REGISTRY
  // ===============================

  services:
  new Map(),



  // ===============================
  // INSTANCES
  // ===============================

  instances:
  new Map(),



  // ===============================
  // DEPENDENCIES
  // ===============================

  dependencyGraph:
  new Map(),



  // ===============================
  // RESOLUTION
  // ===============================

  resolutionStack:
  new Set(),



  // ===============================
  // DIAGNOSTICS
  // ===============================

  diagnostics:
  {

    registrations:
    0,

    resolutions:
    0,

    failures:
    0

  },



  // ===============================
  // RUNTIME
  // ===============================

  startedAt:
  null,

  lastError:
  null

});



// =====================================
// EXPORTS
// =====================================

export default
containerState;
