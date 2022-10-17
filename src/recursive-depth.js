function calculateDepth(value) {
  return Array.isArray(value) ?  1 + Math.max(0, ...value.map(calculateDepth)) :0;
}
