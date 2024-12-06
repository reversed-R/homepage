"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-position";
exports.ids = ["vendor-chunks/unist-util-position"];
exports.modules = {

/***/ "(rsc)/./node_modules/unist-util-position/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/unist-util-position/lib/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pointEnd: () => (/* binding */ pointEnd),\n/* harmony export */   pointStart: () => (/* binding */ pointStart),\n/* harmony export */   position: () => (/* binding */ position)\n/* harmony export */ });\n/**\n * @typedef {import('unist').Node} Node\n * @typedef {import('unist').Point} Point\n * @typedef {import('unist').Position} Position\n */\n\n/**\n * @typedef NodeLike\n * @property {string} type\n * @property {PositionLike | null | undefined} [position]\n *\n * @typedef PositionLike\n * @property {PointLike | null | undefined} [start]\n * @property {PointLike | null | undefined} [end]\n *\n * @typedef PointLike\n * @property {number | null | undefined} [line]\n * @property {number | null | undefined} [column]\n * @property {number | null | undefined} [offset]\n */\n\n/**\n * Get the ending point of `node`.\n *\n * @param node\n *   Node.\n * @returns\n *   Point.\n */\nconst pointEnd = point('end')\n\n/**\n * Get the starting point of `node`.\n *\n * @param node\n *   Node.\n * @returns\n *   Point.\n */\nconst pointStart = point('start')\n\n/**\n * Get the positional info of `node`.\n *\n * @param {'end' | 'start'} type\n *   Side.\n * @returns\n *   Getter.\n */\nfunction point(type) {\n  return point\n\n  /**\n   * Get the point info of `node` at a bound side.\n   *\n   * @param {Node | NodeLike | null | undefined} [node]\n   * @returns {Point | undefined}\n   */\n  function point(node) {\n    const point = (node && node.position && node.position[type]) || {}\n\n    if (\n      typeof point.line === 'number' &&\n      point.line > 0 &&\n      typeof point.column === 'number' &&\n      point.column > 0\n    ) {\n      return {\n        line: point.line,\n        column: point.column,\n        offset:\n          typeof point.offset === 'number' && point.offset > -1\n            ? point.offset\n            : undefined\n      }\n    }\n  }\n}\n\n/**\n * Get the positional info of `node`.\n *\n * @param {Node | NodeLike | null | undefined} [node]\n *   Node.\n * @returns {Position | undefined}\n *   Position.\n */\nfunction position(node) {\n  const start = pointStart(node)\n  const end = pointEnd(node)\n\n  if (start && end) {\n    return {start, end}\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1wb3NpdGlvbi9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLDBCQUEwQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsaUNBQWlDO0FBQy9DO0FBQ0E7QUFDQSxjQUFjLDhCQUE4QjtBQUM1QyxjQUFjLDhCQUE4QjtBQUM1QztBQUNBO0FBQ0EsY0FBYywyQkFBMkI7QUFDekMsY0FBYywyQkFBMkI7QUFDekMsY0FBYywyQkFBMkI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvQ0FBb0M7QUFDakQsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0NBQW9DO0FBQy9DO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQSIsInNvdXJjZXMiOlsiL2hvbWUvcmV2ZXJzZWRfUi9teWRldi93ZWIvaG9tZXBhZ2Uvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtcG9zaXRpb24vbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBvaW50fSBQb2ludFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Qb3NpdGlvbn0gUG9zaXRpb25cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIE5vZGVMaWtlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZVxuICogQHByb3BlcnR5IHtQb3NpdGlvbkxpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBbcG9zaXRpb25dXG4gKlxuICogQHR5cGVkZWYgUG9zaXRpb25MaWtlXG4gKiBAcHJvcGVydHkge1BvaW50TGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFtzdGFydF1cbiAqIEBwcm9wZXJ0eSB7UG9pbnRMaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2VuZF1cbiAqXG4gKiBAdHlwZWRlZiBQb2ludExpa2VcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2xpbmVdXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bGwgfCB1bmRlZmluZWR9IFtjb2x1bW5dXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bGwgfCB1bmRlZmluZWR9IFtvZmZzZXRdXG4gKi9cblxuLyoqXG4gKiBHZXQgdGhlIGVuZGluZyBwb2ludCBvZiBgbm9kZWAuXG4gKlxuICogQHBhcmFtIG5vZGVcbiAqICAgTm9kZS5cbiAqIEByZXR1cm5zXG4gKiAgIFBvaW50LlxuICovXG5leHBvcnQgY29uc3QgcG9pbnRFbmQgPSBwb2ludCgnZW5kJylcblxuLyoqXG4gKiBHZXQgdGhlIHN0YXJ0aW5nIHBvaW50IG9mIGBub2RlYC5cbiAqXG4gKiBAcGFyYW0gbm9kZVxuICogICBOb2RlLlxuICogQHJldHVybnNcbiAqICAgUG9pbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBwb2ludFN0YXJ0ID0gcG9pbnQoJ3N0YXJ0JylcblxuLyoqXG4gKiBHZXQgdGhlIHBvc2l0aW9uYWwgaW5mbyBvZiBgbm9kZWAuXG4gKlxuICogQHBhcmFtIHsnZW5kJyB8ICdzdGFydCd9IHR5cGVcbiAqICAgU2lkZS5cbiAqIEByZXR1cm5zXG4gKiAgIEdldHRlci5cbiAqL1xuZnVuY3Rpb24gcG9pbnQodHlwZSkge1xuICByZXR1cm4gcG9pbnRcblxuICAvKipcbiAgICogR2V0IHRoZSBwb2ludCBpbmZvIG9mIGBub2RlYCBhdCBhIGJvdW5kIHNpZGUuXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZSB8IE5vZGVMaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW25vZGVdXG4gICAqIEByZXR1cm5zIHtQb2ludCB8IHVuZGVmaW5lZH1cbiAgICovXG4gIGZ1bmN0aW9uIHBvaW50KG5vZGUpIHtcbiAgICBjb25zdCBwb2ludCA9IChub2RlICYmIG5vZGUucG9zaXRpb24gJiYgbm9kZS5wb3NpdGlvblt0eXBlXSkgfHwge31cblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBwb2ludC5saW5lID09PSAnbnVtYmVyJyAmJlxuICAgICAgcG9pbnQubGluZSA+IDAgJiZcbiAgICAgIHR5cGVvZiBwb2ludC5jb2x1bW4gPT09ICdudW1iZXInICYmXG4gICAgICBwb2ludC5jb2x1bW4gPiAwXG4gICAgKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaW5lOiBwb2ludC5saW5lLFxuICAgICAgICBjb2x1bW46IHBvaW50LmNvbHVtbixcbiAgICAgICAgb2Zmc2V0OlxuICAgICAgICAgIHR5cGVvZiBwb2ludC5vZmZzZXQgPT09ICdudW1iZXInICYmIHBvaW50Lm9mZnNldCA+IC0xXG4gICAgICAgICAgICA/IHBvaW50Lm9mZnNldFxuICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIHBvc2l0aW9uYWwgaW5mbyBvZiBgbm9kZWAuXG4gKlxuICogQHBhcmFtIHtOb2RlIHwgTm9kZUxpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBbbm9kZV1cbiAqICAgTm9kZS5cbiAqIEByZXR1cm5zIHtQb3NpdGlvbiB8IHVuZGVmaW5lZH1cbiAqICAgUG9zaXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbihub2RlKSB7XG4gIGNvbnN0IHN0YXJ0ID0gcG9pbnRTdGFydChub2RlKVxuICBjb25zdCBlbmQgPSBwb2ludEVuZChub2RlKVxuXG4gIGlmIChzdGFydCAmJiBlbmQpIHtcbiAgICByZXR1cm4ge3N0YXJ0LCBlbmR9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/unist-util-position/lib/index.js\n");

/***/ })

};
;