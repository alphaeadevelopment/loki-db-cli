(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("lokijs");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadCollection = __webpack_require__(123);

Object.defineProperty(exports, 'loadCollection', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadCollection).default;
  }
});

var _loadDatabase = __webpack_require__(42);

Object.defineProperty(exports, 'loadDatabase', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadDatabase).default;
  }
});

var _saveDatabase = __webpack_require__(124);

Object.defineProperty(exports, 'saveDatabase', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_saveDatabase).default;
  }
});

var _closeDatabase = __webpack_require__(125);

Object.defineProperty(exports, 'closeDatabase', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_closeDatabase).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(28);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _collectionName = __webpack_require__(122);

Object.defineProperty(exports, 'collectionName', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_collectionName).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(59),
    createAssigner = __webpack_require__(113);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(19),
    isLength = __webpack_require__(35);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(61),
    listCacheDelete = __webpack_require__(62),
    listCacheGet = __webpack_require__(63),
    listCacheHas = __webpack_require__(64),
    listCacheSet = __webpack_require__(65);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(13);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(27),
    getRawTag = __webpack_require__(72),
    objectToString = __webpack_require__(73);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(18);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(87);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function YError (msg) {
  this.name = 'YError'
  this.message = msg || 'yargs error'
  Error.captureStackTrace(this, YError)
}

YError.prototype = Object.create(Error.prototype)
YError.prototype.constructor = YError

module.exports = YError


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(71),
    getValue = __webpack_require__(77);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(14),
    isObject = __webpack_require__(4);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(30);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function objFilter (original, filter) {
  const obj = {}
  filter = filter || ((k, v) => true)
  Object.keys(original || {}).forEach((key) => {
    if (filter(key, original[key])) {
      obj[key] = original[key]
    }
  })
  return obj
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(18),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(20),
    eq = __webpack_require__(13);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(18);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(91);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(33);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(100),
    isObjectLike = __webpack_require__(8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(5),
    stubFalse = __webpack_require__(102);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(104),
    baseUnary = __webpack_require__(105),
    nodeUtil = __webpack_require__(106);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  return key == '__proto__'
    ? undefined
    : object[key];
}

module.exports = safeGet;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(40),
    baseKeysIn = __webpack_require__(111),
    isArrayLike = __webpack_require__(9);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(110),
    isArguments = __webpack_require__(34),
    isArray = __webpack_require__(23),
    isBuffer = __webpack_require__(36),
    isIndex = __webpack_require__(41),
    isTypedArray = __webpack_require__(37);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db, name) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return new Promise(function (res, rej) {
    db.loadDatabase(options, function (err) {
      if (err) rej(err);else res();
    });
  });
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const command = __webpack_require__(44)()
const YError = __webpack_require__(17)

const positionName = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth']

module.exports = function argsert (expected, callerArguments, length) {
  // TODO: should this eventually raise an exception.
  try {
    // preface the argument description with "cmd", so
    // that we can run it through yargs' command parser.
    let position = 0
    let parsed = {demanded: [], optional: []}
    if (typeof expected === 'object') {
      length = callerArguments
      callerArguments = expected
    } else {
      parsed = command.parseCommand(`cmd ${expected}`)
    }
    const args = [].slice.call(callerArguments)

    while (args.length && args[args.length - 1] === undefined) args.pop()
    length = length || args.length

    if (length < parsed.demanded.length) {
      throw new YError(`Not enough arguments provided. Expected ${parsed.demanded.length} but received ${args.length}.`)
    }

    const totalCommands = parsed.demanded.length + parsed.optional.length
    if (length > totalCommands) {
      throw new YError(`Too many arguments provided. Expected max ${totalCommands} but received ${length}.`)
    }

    parsed.demanded.forEach((demanded) => {
      const arg = args.shift()
      const observedType = guessType(arg)
      const matchingTypes = demanded.cmd.filter(type => type === observedType || type === '*')
      if (matchingTypes.length === 0) argumentTypeError(observedType, demanded.cmd, position, false)
      position += 1
    })

    parsed.optional.forEach((optional) => {
      if (args.length === 0) return
      const arg = args.shift()
      const observedType = guessType(arg)
      const matchingTypes = optional.cmd.filter(type => type === observedType || type === '*')
      if (matchingTypes.length === 0) argumentTypeError(observedType, optional.cmd, position, true)
      position += 1
    })
  } catch (err) {
    console.warn(err.stack)
  }
}

function guessType (arg) {
  if (Array.isArray(arg)) {
    return 'array'
  } else if (arg === null) {
    return 'null'
  }
  return typeof arg
}

function argumentTypeError (observedType, allowedTypes, position, optional) {
  throw new YError(`Invalid ${positionName[position] || 'manyith'} argument. Expected ${allowedTypes.join(' or ')} but received ${observedType}.`)
}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const inspect = __webpack_require__(10).inspect
const path = __webpack_require__(0)
const Parser = __webpack_require__(45)

const DEFAULT_MARKER = /(^\*)|(^\$0)/

// handles parsing positional arguments,
// and populating argv with said positional
// arguments.
module.exports = function command (yargs, usage, validation) {
  const self = {}
  let handlers = {}
  let aliasMap = {}
  let defaultCommand
  self.addHandler = function addHandler (cmd, description, builder, handler, middlewares) {
    let aliases = []
    handler = handler || (() => {})
    middlewares = middlewares || []
    if (Array.isArray(cmd)) {
      aliases = cmd.slice(1)
      cmd = cmd[0]
    } else if (typeof cmd === 'object') {
      let command = (Array.isArray(cmd.command) || typeof cmd.command === 'string') ? cmd.command : moduleName(cmd)
      if (cmd.aliases) command = [].concat(command).concat(cmd.aliases)
      self.addHandler(command, extractDesc(cmd), cmd.builder, cmd.handler, cmd.middlewares)
      return
    }

    // allow a module to be provided instead of separate builder and handler
    if (typeof builder === 'object' && builder.builder && typeof builder.handler === 'function') {
      self.addHandler([cmd].concat(aliases), description, builder.builder, builder.handler, builder.middlewares)
      return
    }

    // parse positionals out of cmd string
    const parsedCommand = self.parseCommand(cmd)

    // remove positional args from aliases only
    aliases = aliases.map(alias => self.parseCommand(alias).cmd)

    // check for default and filter out '*''
    let isDefault = false
    const parsedAliases = [parsedCommand.cmd].concat(aliases).filter((c) => {
      if (DEFAULT_MARKER.test(c)) {
        isDefault = true
        return false
      }
      return true
    })

    // standardize on $0 for default command.
    if (parsedAliases.length === 0 && isDefault) parsedAliases.push('$0')

    // shift cmd and aliases after filtering out '*'
    if (isDefault) {
      parsedCommand.cmd = parsedAliases[0]
      aliases = parsedAliases.slice(1)
      cmd = cmd.replace(DEFAULT_MARKER, parsedCommand.cmd)
    }

    // populate aliasMap
    aliases.forEach((alias) => {
      aliasMap[alias] = parsedCommand.cmd
    })

    if (description !== false) {
      usage.command(cmd, description, isDefault, aliases)
    }

    handlers[parsedCommand.cmd] = {
      original: cmd,
      description: description,
      handler,
      builder: builder || {},
      middlewares: middlewares || [],
      demanded: parsedCommand.demanded,
      optional: parsedCommand.optional
    }

    if (isDefault) defaultCommand = handlers[parsedCommand.cmd]
  }

  self.addDirectory = function addDirectory (dir, context, req, callerFile, opts) {
    opts = opts || {}
    // disable recursion to support nested directories of subcommands
    if (typeof opts.recurse !== 'boolean') opts.recurse = false
    // exclude 'json', 'coffee' from require-directory defaults
    if (!Array.isArray(opts.extensions)) opts.extensions = ['js']
    // allow consumer to define their own visitor function
    const parentVisit = typeof opts.visit === 'function' ? opts.visit : o => o
    // call addHandler via visitor function
    opts.visit = function visit (obj, joined, filename) {
      const visited = parentVisit(obj, joined, filename)
      // allow consumer to skip modules with their own visitor
      if (visited) {
        // check for cyclic reference
        // each command file path should only be seen once per execution
        if (~context.files.indexOf(joined)) return visited
        // keep track of visited files in context.files
        context.files.push(joined)
        self.addHandler(visited)
      }
      return visited
    }
    __webpack_require__(146)({ require: req, filename: callerFile }, dir, opts)
  }

  // lookup module object from require()d command and derive name
  // if module was not require()d and no name given, throw error
  function moduleName (obj) {
    const mod = __webpack_require__(147)(obj)
    if (!mod) throw new Error(`No command name given for module: ${inspect(obj)}`)
    return commandFromFilename(mod.filename)
  }

  // derive command name from filename
  function commandFromFilename (filename) {
    return path.basename(filename, path.extname(filename))
  }

  function extractDesc (obj) {
    for (let keys = ['describe', 'description', 'desc'], i = 0, l = keys.length, test; i < l; i++) {
      test = obj[keys[i]]
      if (typeof test === 'string' || typeof test === 'boolean') return test
    }
    return false
  }

  self.parseCommand = function parseCommand (cmd) {
    const extraSpacesStrippedCommand = cmd.replace(/\s{2,}/g, ' ')
    const splitCommand = extraSpacesStrippedCommand.split(/\s+(?![^[]*]|[^<]*>)/)
    const bregex = /\.*[\][<>]/g
    const parsedCommand = {
      cmd: (splitCommand.shift()).replace(bregex, ''),
      demanded: [],
      optional: []
    }
    splitCommand.forEach((cmd, i) => {
      let variadic = false
      cmd = cmd.replace(/\s/g, '')
      if (/\.+[\]>]/.test(cmd) && i === splitCommand.length - 1) variadic = true
      if (/^\[/.test(cmd)) {
        parsedCommand.optional.push({
          cmd: cmd.replace(bregex, '').split('|'),
          variadic
        })
      } else {
        parsedCommand.demanded.push({
          cmd: cmd.replace(bregex, '').split('|'),
          variadic
        })
      }
    })
    return parsedCommand
  }

  self.getCommands = () => Object.keys(handlers).concat(Object.keys(aliasMap))

  self.getCommandHandlers = () => handlers

  self.hasDefaultCommand = () => !!defaultCommand

  self.runCommand = function runCommand (command, yargs, parsed, commandIndex) {
    let aliases = parsed.aliases
    const commandHandler = handlers[command] || handlers[aliasMap[command]] || defaultCommand
    const currentContext = yargs.getContext()
    let numFiles = currentContext.files.length
    const parentCommands = currentContext.commands.slice()

    // what does yargs look like after the buidler is run?
    let innerArgv = parsed.argv
    let innerYargs = null
    let positionalMap = {}
    if (command) {
      currentContext.commands.push(command)
      currentContext.fullCommands.push(commandHandler.original)
    }
    if (typeof commandHandler.builder === 'function') {
      // a function can be provided, which builds
      // up a yargs chain and possibly returns it.
      innerYargs = commandHandler.builder(yargs.reset(parsed.aliases))
      // if the builder function did not yet parse argv with reset yargs
      // and did not explicitly set a usage() string, then apply the
      // original command string as usage() for consistent behavior with
      // options object below.
      if (yargs.parsed === false) {
        if (shouldUpdateUsage(yargs)) {
          yargs.getUsageInstance().usage(
            usageFromParentCommandsCommandHandler(parentCommands, commandHandler),
            commandHandler.description
          )
        }
        innerArgv = innerYargs ? innerYargs._parseArgs(null, null, true, commandIndex) : yargs._parseArgs(null, null, true, commandIndex)
      } else {
        innerArgv = yargs.parsed.argv
      }

      if (innerYargs && yargs.parsed === false) aliases = innerYargs.parsed.aliases
      else aliases = yargs.parsed.aliases
    } else if (typeof commandHandler.builder === 'object') {
      // as a short hand, an object can instead be provided, specifying
      // the options that a command takes.
      innerYargs = yargs.reset(parsed.aliases)
      if (shouldUpdateUsage(innerYargs)) {
        innerYargs.getUsageInstance().usage(
          usageFromParentCommandsCommandHandler(parentCommands, commandHandler),
          commandHandler.description
        )
      }
      Object.keys(commandHandler.builder).forEach((key) => {
        innerYargs.option(key, commandHandler.builder[key])
      })
      innerArgv = innerYargs._parseArgs(null, null, true, commandIndex)
      aliases = innerYargs.parsed.aliases
    }

    if (!yargs._hasOutput()) {
      positionalMap = populatePositionals(commandHandler, innerArgv, currentContext, yargs)
    }

    // we apply validation post-hoc, so that custom
    // checks get passed populated positional arguments.
    if (!yargs._hasOutput()) yargs._runValidation(innerArgv, aliases, positionalMap, yargs.parsed.error)

    if (commandHandler.handler && !yargs._hasOutput()) {
      yargs._setHasOutput()
      if (commandHandler.middlewares.length > 0) {
        const middlewareArgs = commandHandler.middlewares.reduce(function (initialObj, middleware) {
          return Object.assign(initialObj, middleware(innerArgv))
        }, {})
        Object.assign(innerArgv, middlewareArgs)
      }
      const handlerResult = commandHandler.handler(innerArgv)
      if (handlerResult && typeof handlerResult.then === 'function') {
        handlerResult.then(
          null,
          (error) => yargs.getUsageInstance().fail(null, error)
        )
      }
    }

    if (command) {
      currentContext.commands.pop()
      currentContext.fullCommands.pop()
    }
    numFiles = currentContext.files.length - numFiles
    if (numFiles > 0) currentContext.files.splice(numFiles * -1, numFiles)

    return innerArgv
  }

  function shouldUpdateUsage (yargs) {
    return !yargs.getUsageInstance().getUsageDisabled() &&
      yargs.getUsageInstance().getUsage().length === 0
  }

  function usageFromParentCommandsCommandHandler (parentCommands, commandHandler) {
    const c = DEFAULT_MARKER.test(commandHandler.original) ? commandHandler.original.replace(DEFAULT_MARKER, '').trim() : commandHandler.original
    const pc = parentCommands.filter((c) => { return !DEFAULT_MARKER.test(c) })
    pc.push(c)
    return `$0 ${pc.join(' ')}`
  }

  self.runDefaultBuilderOn = function (yargs) {
    if (shouldUpdateUsage(yargs)) {
      // build the root-level command string from the default string.
      const commandString = DEFAULT_MARKER.test(defaultCommand.original)
        ? defaultCommand.original : defaultCommand.original.replace(/^[^[\]<>]*/, '$0 ')
      yargs.getUsageInstance().usage(
        commandString,
        defaultCommand.description
      )
    }
    const builder = defaultCommand.builder
    if (typeof builder === 'function') {
      builder(yargs)
    } else {
      Object.keys(builder).forEach((key) => {
        yargs.option(key, builder[key])
      })
    }
  }

  // transcribe all positional arguments "command <foo> <bar> [apple]"
  // onto argv.
  function populatePositionals (commandHandler, argv, context, yargs) {
    argv._ = argv._.slice(context.commands.length) // nuke the current commands
    const demanded = commandHandler.demanded.slice(0)
    const optional = commandHandler.optional.slice(0)
    const positionalMap = {}

    validation.positionalCount(demanded.length, argv._.length)

    while (demanded.length) {
      const demand = demanded.shift()
      populatePositional(demand, argv, positionalMap)
    }

    while (optional.length) {
      const maybe = optional.shift()
      populatePositional(maybe, argv, positionalMap)
    }

    argv._ = context.commands.concat(argv._)

    postProcessPositionals(argv, positionalMap, self.cmdToParseOptions(commandHandler.original))

    return positionalMap
  }

  function populatePositional (positional, argv, positionalMap, parseOptions) {
    const cmd = positional.cmd[0]
    if (positional.variadic) {
      positionalMap[cmd] = argv._.splice(0).map(String)
    } else {
      if (argv._.length) positionalMap[cmd] = [String(argv._.shift())]
    }
  }

  // we run yargs-parser against the positional arguments
  // applying the same parsing logic used for flags.
  function postProcessPositionals (argv, positionalMap, parseOptions) {
    // combine the parsing hints we've inferred from the command
    // string with explicitly configured parsing hints.
    const options = Object.assign({}, yargs.getOptions())
    options.default = Object.assign(parseOptions.default, options.default)
    options.alias = Object.assign(parseOptions.alias, options.alias)
    options.array = options.array.concat(parseOptions.array)

    const unparsed = []
    Object.keys(positionalMap).forEach((key) => {
      positionalMap[key].map((value) => {
        unparsed.push(`--${key}`)
        unparsed.push(value)
      })
    })

    // short-circuit parse.
    if (!unparsed.length) return

    const parsed = Parser.detailed(unparsed, options)

    if (parsed.error) {
      yargs.getUsageInstance().fail(parsed.error.message, parsed.error)
    } else {
      // only copy over positional keys (don't overwrite
      // flag arguments that were already parsed).
      const positionalKeys = Object.keys(positionalMap)
      Object.keys(positionalMap).forEach((key) => {
        [].push.apply(positionalKeys, parsed.aliases[key])
      })

      Object.keys(parsed.argv).forEach((key) => {
        if (positionalKeys.indexOf(key) !== -1) {
          argv[key] = parsed.argv[key]
        }
      })
    }
  }

  self.cmdToParseOptions = function (cmdString) {
    const parseOptions = {
      array: [],
      default: {},
      alias: {},
      demand: {}
    }

    const parsed = self.parseCommand(cmdString)
    parsed.demanded.forEach((d) => {
      const cmds = d.cmd.slice(0)
      const cmd = cmds.shift()
      if (d.variadic) {
        parseOptions.array.push(cmd)
        parseOptions.default[cmd] = []
      }
      cmds.forEach((c) => {
        parseOptions.alias[cmd] = c
      })
      parseOptions.demand[cmd] = true
    })

    parsed.optional.forEach((o) => {
      const cmds = o.cmd.slice(0)
      const cmd = cmds.shift()
      if (o.variadic) {
        parseOptions.array.push(cmd)
        parseOptions.default[cmd] = []
      }
      cmds.forEach((c) => {
        parseOptions.alias[cmd] = c
      })
    })

    return parseOptions
  }

  self.reset = () => {
    handlers = {}
    aliasMap = {}
    defaultCommand = undefined
    return self
  }

  // used by yargs.parse() to freeze
  // the state of commands such that
  // we can apply .parse() multiple times
  // with the same yargs instance.
  let frozen
  self.freeze = () => {
    frozen = {}
    frozen.handlers = handlers
    frozen.aliasMap = aliasMap
    frozen.defaultCommand = defaultCommand
  }
  self.unfreeze = () => {
    handlers = frozen.handlers
    aliasMap = frozen.aliasMap
    defaultCommand = frozen.defaultCommand
    frozen = undefined
  }

  return self
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var camelCase = __webpack_require__(143)
var path = __webpack_require__(0)
var tokenizeArgString = __webpack_require__(144)
var util = __webpack_require__(10)

function parse (args, opts) {
  if (!opts) opts = {}
  // allow a string argument to be passed in rather
  // than an argv array.
  args = tokenizeArgString(args)
  // aliases might have transitive relationships, normalize this.
  var aliases = combineAliases(opts.alias || {})
  var configuration = assign({
    'short-option-groups': true,
    'camel-case-expansion': true,
    'dot-notation': true,
    'parse-numbers': true,
    'boolean-negation': true,
    'negation-prefix': 'no-',
    'duplicate-arguments-array': true,
    'flatten-duplicate-arrays': true,
    'populate--': false,
    'combine-arrays': false
  }, opts.configuration)
  var defaults = opts.default || {}
  var configObjects = opts.configObjects || []
  var envPrefix = opts.envPrefix
  var notFlagsOption = configuration['populate--']
  var notFlagsArgv = notFlagsOption ? '--' : '_'
  var newAliases = {}
  // allow a i18n handler to be passed in, default to a fake one (util.format).
  var __ = opts.__ || function (str) {
    return util.format.apply(util, Array.prototype.slice.call(arguments))
  }
  var error = null
  var flags = {
    aliases: {},
    arrays: {},
    bools: {},
    strings: {},
    numbers: {},
    counts: {},
    normalize: {},
    configs: {},
    defaulted: {},
    nargs: {},
    coercions: {}
  }
  var negative = /^-[0-9]+(\.[0-9]+)?/
  var negatedBoolean = new RegExp('^--' + configuration['negation-prefix'] + '(.+)')

  ;[].concat(opts.array).filter(Boolean).forEach(function (key) {
    flags.arrays[key] = true
  })

  ;[].concat(opts.boolean).filter(Boolean).forEach(function (key) {
    flags.bools[key] = true
  })

  ;[].concat(opts.string).filter(Boolean).forEach(function (key) {
    flags.strings[key] = true
  })

  ;[].concat(opts.number).filter(Boolean).forEach(function (key) {
    flags.numbers[key] = true
  })

  ;[].concat(opts.count).filter(Boolean).forEach(function (key) {
    flags.counts[key] = true
  })

  ;[].concat(opts.normalize).filter(Boolean).forEach(function (key) {
    flags.normalize[key] = true
  })

  Object.keys(opts.narg || {}).forEach(function (k) {
    flags.nargs[k] = opts.narg[k]
  })

  Object.keys(opts.coerce || {}).forEach(function (k) {
    flags.coercions[k] = opts.coerce[k]
  })

  if (Array.isArray(opts.config) || typeof opts.config === 'string') {
    ;[].concat(opts.config).filter(Boolean).forEach(function (key) {
      flags.configs[key] = true
    })
  } else {
    Object.keys(opts.config || {}).forEach(function (k) {
      flags.configs[k] = opts.config[k]
    })
  }

  // create a lookup table that takes into account all
  // combinations of aliases: {f: ['foo'], foo: ['f']}
  extendAliases(opts.key, aliases, opts.default, flags.arrays)

  // apply default values to all aliases.
  Object.keys(defaults).forEach(function (key) {
    (flags.aliases[key] || []).forEach(function (alias) {
      defaults[alias] = defaults[key]
    })
  })

  var argv = { _: [] }

  Object.keys(flags.bools).forEach(function (key) {
    setArg(key, !(key in defaults) ? false : defaults[key])
    setDefaulted(key)
  })

  var notFlags = []
  if (args.indexOf('--') !== -1) {
    notFlags = args.slice(args.indexOf('--') + 1)
    args = args.slice(0, args.indexOf('--'))
  }

  for (var i = 0; i < args.length; i++) {
    var arg = args[i]
    var broken
    var key
    var letters
    var m
    var next
    var value

    // -- seperated by =
    if (arg.match(/^--.+=/) || (
      !configuration['short-option-groups'] && arg.match(/^-.+=/)
    )) {
      // Using [\s\S] instead of . because js doesn't support the
      // 'dotall' regex modifier. See:
      // http://stackoverflow.com/a/1068308/13216
      m = arg.match(/^--?([^=]+)=([\s\S]*)$/)

      // nargs format = '--f=monkey washing cat'
      if (checkAllAliases(m[1], flags.nargs)) {
        args.splice(i + 1, 0, m[2])
        i = eatNargs(i, m[1], args)
      // arrays format = '--f=a b c'
      } else if (checkAllAliases(m[1], flags.arrays) && args.length > i + 1) {
        args.splice(i + 1, 0, m[2])
        i = eatArray(i, m[1], args)
      } else {
        setArg(m[1], m[2])
      }
    } else if (arg.match(negatedBoolean) && configuration['boolean-negation']) {
      key = arg.match(negatedBoolean)[1]
      setArg(key, false)

    // -- seperated by space.
    } else if (arg.match(/^--.+/) || (
      !configuration['short-option-groups'] && arg.match(/^-.+/)
    )) {
      key = arg.match(/^--?(.+)/)[1]

      // nargs format = '--foo a b c'
      if (checkAllAliases(key, flags.nargs)) {
        i = eatNargs(i, key, args)
      // array format = '--foo a b c'
      } else if (checkAllAliases(key, flags.arrays) && args.length > i + 1) {
        i = eatArray(i, key, args)
      } else {
        next = args[i + 1]

        if (next !== undefined && (!next.match(/^-/) ||
          next.match(negative)) &&
          !checkAllAliases(key, flags.bools) &&
          !checkAllAliases(key, flags.counts)) {
          setArg(key, next)
          i++
        } else if (/^(true|false)$/.test(next)) {
          setArg(key, next)
          i++
        } else {
          setArg(key, defaultForType(guessType(key, flags)))
        }
      }

    // dot-notation flag seperated by '='.
    } else if (arg.match(/^-.\..+=/)) {
      m = arg.match(/^-([^=]+)=([\s\S]*)$/)
      setArg(m[1], m[2])

    // dot-notation flag seperated by space.
    } else if (arg.match(/^-.\..+/)) {
      next = args[i + 1]
      key = arg.match(/^-(.\..+)/)[1]

      if (next !== undefined && !next.match(/^-/) &&
        !checkAllAliases(key, flags.bools) &&
        !checkAllAliases(key, flags.counts)) {
        setArg(key, next)
        i++
      } else {
        setArg(key, defaultForType(guessType(key, flags)))
      }
    } else if (arg.match(/^-[^-]+/) && !arg.match(negative)) {
      letters = arg.slice(1, -1).split('')
      broken = false

      for (var j = 0; j < letters.length; j++) {
        next = arg.slice(j + 2)

        if (letters[j + 1] && letters[j + 1] === '=') {
          value = arg.slice(j + 3)
          key = letters[j]

          // nargs format = '-f=monkey washing cat'
          if (checkAllAliases(key, flags.nargs)) {
            args.splice(i + 1, 0, value)
            i = eatNargs(i, key, args)
          // array format = '-f=a b c'
          } else if (checkAllAliases(key, flags.arrays) && args.length > i + 1) {
            args.splice(i + 1, 0, value)
            i = eatArray(i, key, args)
          } else {
            setArg(key, value)
          }

          broken = true
          break
        }

        if (next === '-') {
          setArg(letters[j], next)
          continue
        }

        // current letter is an alphabetic character and next value is a number
        if (/[A-Za-z]/.test(letters[j]) &&
          /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) {
          setArg(letters[j], next)
          broken = true
          break
        }

        if (letters[j + 1] && letters[j + 1].match(/\W/)) {
          setArg(letters[j], next)
          broken = true
          break
        } else {
          setArg(letters[j], defaultForType(guessType(letters[j], flags)))
        }
      }

      key = arg.slice(-1)[0]

      if (!broken && key !== '-') {
        // nargs format = '-f a b c'
        if (checkAllAliases(key, flags.nargs)) {
          i = eatNargs(i, key, args)
        // array format = '-f a b c'
        } else if (checkAllAliases(key, flags.arrays) && args.length > i + 1) {
          i = eatArray(i, key, args)
        } else {
          next = args[i + 1]

          if (next !== undefined && (!/^(-|--)[^-]/.test(next) ||
            next.match(negative)) &&
            !checkAllAliases(key, flags.bools) &&
            !checkAllAliases(key, flags.counts)) {
            setArg(key, next)
            i++
          } else if (/^(true|false)$/.test(next)) {
            setArg(key, next)
            i++
          } else {
            setArg(key, defaultForType(guessType(key, flags)))
          }
        }
      }
    } else {
      argv._.push(maybeCoerceNumber('_', arg))
    }
  }

  // order of precedence:
  // 1. command line arg
  // 2. value from env var
  // 3. value from config file
  // 4. value from config objects
  // 5. configured default value
  applyEnvVars(argv, true) // special case: check env vars that point to config file
  applyEnvVars(argv, false)
  setConfig(argv)
  setConfigObjects()
  applyDefaultsAndAliases(argv, flags.aliases, defaults)
  applyCoercions(argv)

  // for any counts either not in args or without an explicit default, set to 0
  Object.keys(flags.counts).forEach(function (key) {
    if (!hasKey(argv, key.split('.'))) setArg(key, 0)
  })

  // '--' defaults to undefined.
  if (notFlagsOption && notFlags.length) argv[notFlagsArgv] = []
  notFlags.forEach(function (key) {
    argv[notFlagsArgv].push(key)
  })

  // how many arguments should we consume, based
  // on the nargs option?
  function eatNargs (i, key, args) {
    var ii
    const toEat = checkAllAliases(key, flags.nargs)

    // nargs will not consume flag arguments, e.g., -abc, --foo,
    // and terminates when one is observed.
    var available = 0
    for (ii = i + 1; ii < args.length; ii++) {
      if (!args[ii].match(/^-[^0-9]/)) available++
      else break
    }

    if (available < toEat) error = Error(__('Not enough arguments following: %s', key))

    const consumed = Math.min(available, toEat)
    for (ii = i + 1; ii < (consumed + i + 1); ii++) {
      setArg(key, args[ii])
    }

    return (i + consumed)
  }

  // if an option is an array, eat all non-hyphenated arguments
  // following it... YUM!
  // e.g., --foo apple banana cat becomes ["apple", "banana", "cat"]
  function eatArray (i, key, args) {
    var start = i + 1
    var argsToSet = []
    var multipleArrayFlag = i > 0
    for (var ii = i + 1; ii < args.length; ii++) {
      if (/^-/.test(args[ii]) && !negative.test(args[ii])) {
        if (ii === start) {
          setArg(key, defaultForType('array'))
        }
        multipleArrayFlag = true
        break
      }
      i = ii
      argsToSet.push(args[ii])
    }
    if (multipleArrayFlag) {
      setArg(key, argsToSet.map(function (arg) {
        return processValue(key, arg)
      }))
    } else {
      argsToSet.forEach(function (arg) {
        setArg(key, arg)
      })
    }

    return i
  }

  function setArg (key, val) {
    unsetDefaulted(key)

    if (/-/.test(key) && configuration['camel-case-expansion']) {
      addNewAlias(key, camelCase(key))
    }

    var value = processValue(key, val)

    var splitKey = key.split('.')
    setKey(argv, splitKey, value)

    // handle populating aliases of the full key
    if (flags.aliases[key]) {
      flags.aliases[key].forEach(function (x) {
        x = x.split('.')
        setKey(argv, x, value)
      })
    }

    // handle populating aliases of the first element of the dot-notation key
    if (splitKey.length > 1 && configuration['dot-notation']) {
      ;(flags.aliases[splitKey[0]] || []).forEach(function (x) {
        x = x.split('.')

        // expand alias with nested objects in key
        var a = [].concat(splitKey)
        a.shift() // nuke the old key.
        x = x.concat(a)

        setKey(argv, x, value)
      })
    }

    // Set normalize getter and setter when key is in 'normalize' but isn't an array
    if (checkAllAliases(key, flags.normalize) && !checkAllAliases(key, flags.arrays)) {
      var keys = [key].concat(flags.aliases[key] || [])
      keys.forEach(function (key) {
        argv.__defineSetter__(key, function (v) {
          val = path.normalize(v)
        })

        argv.__defineGetter__(key, function () {
          return typeof val === 'string' ? path.normalize(val) : val
        })
      })
    }
  }

  function addNewAlias (key, alias) {
    if (!(flags.aliases[key] && flags.aliases[key].length)) {
      flags.aliases[key] = [alias]
      newAliases[alias] = true
    }
    if (!(flags.aliases[alias] && flags.aliases[alias].length)) {
      addNewAlias(alias, key)
    }
  }

  function processValue (key, val) {
    // handle parsing boolean arguments --foo=true --bar false.
    if (checkAllAliases(key, flags.bools) || checkAllAliases(key, flags.counts)) {
      if (typeof val === 'string') val = val === 'true'
    }

    var value = maybeCoerceNumber(key, val)

    // increment a count given as arg (either no value or value parsed as boolean)
    if (checkAllAliases(key, flags.counts) && (isUndefined(value) || typeof value === 'boolean')) {
      value = increment
    }

    // Set normalized value when key is in 'normalize' and in 'arrays'
    if (checkAllAliases(key, flags.normalize) && checkAllAliases(key, flags.arrays)) {
      if (Array.isArray(val)) value = val.map(path.normalize)
      else value = path.normalize(val)
    }
    return value
  }

  function maybeCoerceNumber (key, value) {
    if (!checkAllAliases(key, flags.strings) && !checkAllAliases(key, flags.coercions)) {
      const shouldCoerceNumber = isNumber(value) && configuration['parse-numbers'] && (
        Number.isSafeInteger(Math.floor(value))
      )
      if (shouldCoerceNumber || (!isUndefined(value) && checkAllAliases(key, flags.numbers))) value = Number(value)
    }
    return value
  }

  // set args from config.json file, this should be
  // applied last so that defaults can be applied.
  function setConfig (argv) {
    var configLookup = {}

    // expand defaults/aliases, in-case any happen to reference
    // the config.json file.
    applyDefaultsAndAliases(configLookup, flags.aliases, defaults)

    Object.keys(flags.configs).forEach(function (configKey) {
      var configPath = argv[configKey] || configLookup[configKey]
      if (configPath) {
        try {
          var config = null
          var resolvedConfigPath = path.resolve(process.cwd(), configPath)

          if (typeof flags.configs[configKey] === 'function') {
            try {
              config = flags.configs[configKey](resolvedConfigPath)
            } catch (e) {
              config = e
            }
            if (config instanceof Error) {
              error = config
              return
            }
          } else {
            config = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
          }

          setConfigObject(config)
        } catch (ex) {
          if (argv[configKey]) error = Error(__('Invalid JSON config file: %s', configPath))
        }
      }
    })
  }

  // set args from config object.
  // it recursively checks nested objects.
  function setConfigObject (config, prev) {
    Object.keys(config).forEach(function (key) {
      var value = config[key]
      var fullKey = prev ? prev + '.' + key : key

      // if the value is an inner object and we have dot-notation
      // enabled, treat inner objects in config the same as
      // heavily nested dot notations (foo.bar.apple).
      if (typeof value === 'object' && value !== null && !Array.isArray(value) && configuration['dot-notation']) {
        // if the value is an object but not an array, check nested object
        setConfigObject(value, fullKey)
      } else {
        // setting arguments via CLI takes precedence over
        // values within the config file.
        if (!hasKey(argv, fullKey.split('.')) || (flags.defaulted[fullKey]) || (flags.arrays[fullKey] && configuration['combine-arrays'])) {
          setArg(fullKey, value)
        }
      }
    })
  }

  // set all config objects passed in opts
  function setConfigObjects () {
    if (typeof configObjects === 'undefined') return
    configObjects.forEach(function (configObject) {
      setConfigObject(configObject)
    })
  }

  function applyEnvVars (argv, configOnly) {
    if (typeof envPrefix === 'undefined') return

    var prefix = typeof envPrefix === 'string' ? envPrefix : ''
    Object.keys(process.env).forEach(function (envVar) {
      if (prefix === '' || envVar.lastIndexOf(prefix, 0) === 0) {
        // get array of nested keys and convert them to camel case
        var keys = envVar.split('__').map(function (key, i) {
          if (i === 0) {
            key = key.substring(prefix.length)
          }
          return camelCase(key)
        })

        if (((configOnly && flags.configs[keys.join('.')]) || !configOnly) && (!hasKey(argv, keys) || flags.defaulted[keys.join('.')])) {
          setArg(keys.join('.'), process.env[envVar])
        }
      }
    })
  }

  function applyCoercions (argv) {
    var coerce
    var applied = {}
    Object.keys(argv).forEach(function (key) {
      if (!applied.hasOwnProperty(key)) { // If we haven't already coerced this option via one of its aliases
        coerce = checkAllAliases(key, flags.coercions)
        if (typeof coerce === 'function') {
          try {
            var value = coerce(argv[key])
            ;([].concat(flags.aliases[key] || [], key)).forEach(ali => {
              applied[ali] = argv[ali] = value
            })
          } catch (err) {
            error = err
          }
        }
      }
    })
  }

  function applyDefaultsAndAliases (obj, aliases, defaults) {
    Object.keys(defaults).forEach(function (key) {
      if (!hasKey(obj, key.split('.'))) {
        setKey(obj, key.split('.'), defaults[key])

        ;(aliases[key] || []).forEach(function (x) {
          if (hasKey(obj, x.split('.'))) return
          setKey(obj, x.split('.'), defaults[key])
        })
      }
    })
  }

  function hasKey (obj, keys) {
    var o = obj

    if (!configuration['dot-notation']) keys = [keys.join('.')]

    keys.slice(0, -1).forEach(function (key) {
      o = (o[key] || {})
    })

    var key = keys[keys.length - 1]

    if (typeof o !== 'object') return false
    else return key in o
  }

  function setKey (obj, keys, value) {
    var o = obj

    if (!configuration['dot-notation']) keys = [keys.join('.')]

    keys.slice(0, -1).forEach(function (key, index) {
      if (typeof o === 'object' && o[key] === undefined) {
        o[key] = {}
      }

      if (typeof o[key] !== 'object' || Array.isArray(o[key])) {
        // ensure that o[key] is an array, and that the last item is an empty object.
        if (Array.isArray(o[key])) {
          o[key].push({})
        } else {
          o[key] = [o[key], {}]
        }

        // we want to update the empty object at the end of the o[key] array, so set o to that object
        o = o[key][o[key].length - 1]
      } else {
        o = o[key]
      }
    })

    var key = keys[keys.length - 1]

    var isTypeArray = checkAllAliases(keys.join('.'), flags.arrays)
    var isValueArray = Array.isArray(value)
    var duplicate = configuration['duplicate-arguments-array']

    if (value === increment) {
      o[key] = increment(o[key])
    } else if (Array.isArray(o[key])) {
      if (duplicate && isTypeArray && isValueArray) {
        o[key] = configuration['flatten-duplicate-arrays'] ? o[key].concat(value) : [o[key]].concat([value])
      } else if (!duplicate && Boolean(isTypeArray) === Boolean(isValueArray)) {
        o[key] = value
      } else {
        o[key] = o[key].concat([value])
      }
    } else if (o[key] === undefined && isTypeArray) {
      o[key] = isValueArray ? value : [value]
    } else if (duplicate && !(o[key] === undefined || checkAllAliases(key, flags.bools) || checkAllAliases(keys.join('.'), flags.bools) || checkAllAliases(key, flags.counts))) {
      o[key] = [ o[key], value ]
    } else {
      o[key] = value
    }
  }

  // extend the aliases list with inferred aliases.
  function extendAliases () {
    Array.prototype.slice.call(arguments).forEach(function (obj) {
      Object.keys(obj || {}).forEach(function (key) {
        // short-circuit if we've already added a key
        // to the aliases array, for example it might
        // exist in both 'opts.default' and 'opts.key'.
        if (flags.aliases[key]) return

        flags.aliases[key] = [].concat(aliases[key] || [])
        // For "--option-name", also set argv.optionName
        flags.aliases[key].concat(key).forEach(function (x) {
          if (/-/.test(x) && configuration['camel-case-expansion']) {
            var c = camelCase(x)
            if (c !== key && flags.aliases[key].indexOf(c) === -1) {
              flags.aliases[key].push(c)
              newAliases[c] = true
            }
          }
        })
        flags.aliases[key].forEach(function (x) {
          flags.aliases[x] = [key].concat(flags.aliases[key].filter(function (y) {
            return x !== y
          }))
        })
      })
    })
  }

  // check if a flag is set for any of a key's aliases.
  function checkAllAliases (key, flag) {
    var isSet = false
    var toCheck = [].concat(flags.aliases[key] || [], key)

    toCheck.forEach(function (key) {
      if (flag[key]) isSet = flag[key]
    })

    return isSet
  }

  function setDefaulted (key) {
    [].concat(flags.aliases[key] || [], key).forEach(function (k) {
      flags.defaulted[k] = true
    })
  }

  function unsetDefaulted (key) {
    [].concat(flags.aliases[key] || [], key).forEach(function (k) {
      delete flags.defaulted[k]
    })
  }

  // return a default value, given the type of a flag.,
  // e.g., key of type 'string' will default to '', rather than 'true'.
  function defaultForType (type) {
    var def = {
      boolean: true,
      string: '',
      number: undefined,
      array: []
    }

    return def[type]
  }

  // given a flag, enforce a default type.
  function guessType (key, flags) {
    var type = 'boolean'

    if (checkAllAliases(key, flags.strings)) type = 'string'
    else if (checkAllAliases(key, flags.numbers)) type = 'number'
    else if (checkAllAliases(key, flags.arrays)) type = 'array'

    return type
  }

  function isNumber (x) {
    if (typeof x === 'number') return true
    if (/^0x[0-9a-f]+$/i.test(x)) return true
    return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x)
  }

  function isUndefined (num) {
    return num === undefined
  }

  return {
    argv: argv,
    error: error,
    aliases: flags.aliases,
    newAliases: newAliases,
    configuration: configuration
  }
}

// if any aliases reference each other, we should
// merge them together.
function combineAliases (aliases) {
  var aliasArrays = []
  var change = true
  var combined = {}

  // turn alias lookup hash {key: ['alias1', 'alias2']} into
  // a simple array ['key', 'alias1', 'alias2']
  Object.keys(aliases).forEach(function (key) {
    aliasArrays.push(
      [].concat(aliases[key], key)
    )
  })

  // combine arrays until zero changes are
  // made in an iteration.
  while (change) {
    change = false
    for (var i = 0; i < aliasArrays.length; i++) {
      for (var ii = i + 1; ii < aliasArrays.length; ii++) {
        var intersect = aliasArrays[i].filter(function (v) {
          return aliasArrays[ii].indexOf(v) !== -1
        })

        if (intersect.length) {
          aliasArrays[i] = aliasArrays[i].concat(aliasArrays[ii])
          aliasArrays.splice(ii, 1)
          change = true
          break
        }
      }
    }
  }

  // map arrays back to the hash-lookup (de-dupe while
  // we're at it).
  aliasArrays.forEach(function (aliasArray) {
    aliasArray = aliasArray.filter(function (v, i, self) {
      return self.indexOf(v) === i
    })
    combined[aliasArray.pop()] = aliasArray
  })

  return combined
}

function assign (defaults, configuration) {
  var o = {}
  configuration = configuration || {}

  Object.keys(defaults).forEach(function (k) {
    o[k] = defaults[k]
  })
  Object.keys(configuration).forEach(function (k) {
    o[k] = configuration[k]
  })

  return o
}

// this function should only be called when a count is given as an arg
// it is NOT called to set a default value
// thus we can start the count at 1 instead of 0
function increment (orig) {
  return orig !== undefined ? orig + 1 : 1
}

function Parser (args, opts) {
  var result = parse(args.slice(), opts)

  return result.argv
}

// parse arguments and return detailed
// meta information, aliases, etc.
Parser.detailed = function (args, opts) {
  return parse(args.slice(), opts)
}

module.exports = Parser


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const stripAnsi = __webpack_require__(47);
const isFullwidthCodePoint = __webpack_require__(151);

module.exports = str => {
	if (typeof str !== 'string' || str.length === 0) {
		return 0;
	}

	str = stripAnsi(str);

	let width = 0;

	for (let i = 0; i < str.length; i++) {
		const code = str.codePointAt(i);

		// Ignore control characters
		if (code <= 0x1F || (code >= 0x7F && code <= 0x9F)) {
			continue;
		}

		// Ignore combining characters
		if (code >= 0x300 && code <= 0x36F) {
			continue;
		}

		// Surrogates
		if (code > 0xFFFF) {
			i++;
		}

		width += isFullwidthCodePoint(code) ? 2 : 1;
	}

	return width;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const ansiRegex = __webpack_require__(150);

module.exports = input => typeof input === 'string' ? input.replace(ansiRegex(), '') : input;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function (blocking) {
  [process.stdout, process.stderr].forEach(function (stream) {
    if (stream._handle && stream.isTTY && typeof stream._handle.setBlocking === 'function') {
      stream._handle.setBlocking(blocking)
    }
  })
}


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ansiRegex = __webpack_require__(155)();

module.exports = function (str) {
	return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 50;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 51;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(0);
var which = __webpack_require__(177);
var LRU = __webpack_require__(54);

var commandCache = new LRU({ max: 50, maxAge: 30 * 1000 });  // Cache just for 30sec

function resolveCommand(command, noExtension) {
    var resolved;

    noExtension = !!noExtension;
    resolved = commandCache.get(command + '!' + noExtension);

    // Check if its resolved in the cache
    if (commandCache.has(command)) {
        return commandCache.get(command);
    }

    try {
        resolved = !noExtension ?
            which.sync(command) :
            which.sync(command, { pathExt: path.delimiter + (process.env.PATHEXT || '') });
    } catch (e) { /* empty */ }

    commandCache.set(command + '!' + noExtension, resolved);

    return resolved;
}

module.exports = resolveCommand;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = LRUCache

// This will be a proper iterable 'Map' in engines that support it,
// or a fakey-fake PseudoMap in older versions.
var Map = __webpack_require__(181)
var util = __webpack_require__(10)

// A linked list to keep track of recently-used-ness
var Yallist = __webpack_require__(183)

// use symbols if possible, otherwise just _props
var hasSymbol = typeof Symbol === 'function'
var makeSymbol
if (hasSymbol) {
  makeSymbol = function (key) {
    return Symbol.for(key)
  }
} else {
  makeSymbol = function (key) {
    return '_' + key
  }
}

var MAX = makeSymbol('max')
var LENGTH = makeSymbol('length')
var LENGTH_CALCULATOR = makeSymbol('lengthCalculator')
var ALLOW_STALE = makeSymbol('allowStale')
var MAX_AGE = makeSymbol('maxAge')
var DISPOSE = makeSymbol('dispose')
var NO_DISPOSE_ON_SET = makeSymbol('noDisposeOnSet')
var LRU_LIST = makeSymbol('lruList')
var CACHE = makeSymbol('cache')

function naiveLength () { return 1 }

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
function LRUCache (options) {
  if (!(this instanceof LRUCache)) {
    return new LRUCache(options)
  }

  if (typeof options === 'number') {
    options = { max: options }
  }

  if (!options) {
    options = {}
  }

  var max = this[MAX] = options.max
  // Kind of weird to have a default max of Infinity, but oh well.
  if (!max ||
      !(typeof max === 'number') ||
      max <= 0) {
    this[MAX] = Infinity
  }

  var lc = options.length || naiveLength
  if (typeof lc !== 'function') {
    lc = naiveLength
  }
  this[LENGTH_CALCULATOR] = lc

  this[ALLOW_STALE] = options.stale || false
  this[MAX_AGE] = options.maxAge || 0
  this[DISPOSE] = options.dispose
  this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
  this.reset()
}

// resize the cache when the max changes.
Object.defineProperty(LRUCache.prototype, 'max', {
  set: function (mL) {
    if (!mL || !(typeof mL === 'number') || mL <= 0) {
      mL = Infinity
    }
    this[MAX] = mL
    trim(this)
  },
  get: function () {
    return this[MAX]
  },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'allowStale', {
  set: function (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  },
  get: function () {
    return this[ALLOW_STALE]
  },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'maxAge', {
  set: function (mA) {
    if (!mA || !(typeof mA === 'number') || mA < 0) {
      mA = 0
    }
    this[MAX_AGE] = mA
    trim(this)
  },
  get: function () {
    return this[MAX_AGE]
  },
  enumerable: true
})

// resize the cache when the lengthCalculator changes.
Object.defineProperty(LRUCache.prototype, 'lengthCalculator', {
  set: function (lC) {
    if (typeof lC !== 'function') {
      lC = naiveLength
    }
    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(function (hit) {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      }, this)
    }
    trim(this)
  },
  get: function () { return this[LENGTH_CALCULATOR] },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'length', {
  get: function () { return this[LENGTH] },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'itemCount', {
  get: function () { return this[LRU_LIST].length },
  enumerable: true
})

LRUCache.prototype.rforEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this[LRU_LIST].tail; walker !== null;) {
    var prev = walker.prev
    forEachStep(this, fn, walker, thisp)
    walker = prev
  }
}

function forEachStep (self, fn, node, thisp) {
  var hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE]) {
      hit = undefined
    }
  }
  if (hit) {
    fn.call(thisp, hit.value, hit.key, self)
  }
}

LRUCache.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this[LRU_LIST].head; walker !== null;) {
    var next = walker.next
    forEachStep(this, fn, walker, thisp)
    walker = next
  }
}

LRUCache.prototype.keys = function () {
  return this[LRU_LIST].toArray().map(function (k) {
    return k.key
  }, this)
}

LRUCache.prototype.values = function () {
  return this[LRU_LIST].toArray().map(function (k) {
    return k.value
  }, this)
}

LRUCache.prototype.reset = function () {
  if (this[DISPOSE] &&
      this[LRU_LIST] &&
      this[LRU_LIST].length) {
    this[LRU_LIST].forEach(function (hit) {
      this[DISPOSE](hit.key, hit.value)
    }, this)
  }

  this[CACHE] = new Map() // hash of items by key
  this[LRU_LIST] = new Yallist() // list of items in order of use recency
  this[LENGTH] = 0 // length of items in the list
}

LRUCache.prototype.dump = function () {
  return this[LRU_LIST].map(function (hit) {
    if (!isStale(this, hit)) {
      return {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }
    }
  }, this).toArray().filter(function (h) {
    return h
  })
}

LRUCache.prototype.dumpLru = function () {
  return this[LRU_LIST]
}

LRUCache.prototype.inspect = function (n, opts) {
  var str = 'LRUCache {'
  var extras = false

  var as = this[ALLOW_STALE]
  if (as) {
    str += '\n  allowStale: true'
    extras = true
  }

  var max = this[MAX]
  if (max && max !== Infinity) {
    if (extras) {
      str += ','
    }
    str += '\n  max: ' + util.inspect(max, opts)
    extras = true
  }

  var maxAge = this[MAX_AGE]
  if (maxAge) {
    if (extras) {
      str += ','
    }
    str += '\n  maxAge: ' + util.inspect(maxAge, opts)
    extras = true
  }

  var lc = this[LENGTH_CALCULATOR]
  if (lc && lc !== naiveLength) {
    if (extras) {
      str += ','
    }
    str += '\n  length: ' + util.inspect(this[LENGTH], opts)
    extras = true
  }

  var didFirst = false
  this[LRU_LIST].forEach(function (item) {
    if (didFirst) {
      str += ',\n  '
    } else {
      if (extras) {
        str += ',\n'
      }
      didFirst = true
      str += '\n  '
    }
    var key = util.inspect(item.key).split('\n').join('\n  ')
    var val = { value: item.value }
    if (item.maxAge !== maxAge) {
      val.maxAge = item.maxAge
    }
    if (lc !== naiveLength) {
      val.length = item.length
    }
    if (isStale(this, item)) {
      val.stale = true
    }

    val = util.inspect(val, opts).split('\n').join('\n  ')
    str += key + ' => ' + val
  })

  if (didFirst || extras) {
    str += '\n'
  }
  str += '}'

  return str
}

LRUCache.prototype.set = function (key, value, maxAge) {
  maxAge = maxAge || this[MAX_AGE]

  var now = maxAge ? Date.now() : 0
  var len = this[LENGTH_CALCULATOR](value, key)

  if (this[CACHE].has(key)) {
    if (len > this[MAX]) {
      del(this, this[CACHE].get(key))
      return false
    }

    var node = this[CACHE].get(key)
    var item = node.value

    // dispose of the old one before overwriting
    // split out into 2 ifs for better coverage tracking
    if (this[DISPOSE]) {
      if (!this[NO_DISPOSE_ON_SET]) {
        this[DISPOSE](key, item.value)
      }
    }

    item.now = now
    item.maxAge = maxAge
    item.value = value
    this[LENGTH] += len - item.length
    item.length = len
    this.get(key)
    trim(this)
    return true
  }

  var hit = new Entry(key, value, len, now, maxAge)

  // oversized objects fall out of cache automatically.
  if (hit.length > this[MAX]) {
    if (this[DISPOSE]) {
      this[DISPOSE](key, value)
    }
    return false
  }

  this[LENGTH] += hit.length
  this[LRU_LIST].unshift(hit)
  this[CACHE].set(key, this[LRU_LIST].head)
  trim(this)
  return true
}

LRUCache.prototype.has = function (key) {
  if (!this[CACHE].has(key)) return false
  var hit = this[CACHE].get(key).value
  if (isStale(this, hit)) {
    return false
  }
  return true
}

LRUCache.prototype.get = function (key) {
  return get(this, key, true)
}

LRUCache.prototype.peek = function (key) {
  return get(this, key, false)
}

LRUCache.prototype.pop = function () {
  var node = this[LRU_LIST].tail
  if (!node) return null
  del(this, node)
  return node.value
}

LRUCache.prototype.del = function (key) {
  del(this, this[CACHE].get(key))
}

LRUCache.prototype.load = function (arr) {
  // reset the cache
  this.reset()

  var now = Date.now()
  // A previous serialized cache has the most recent items first
  for (var l = arr.length - 1; l >= 0; l--) {
    var hit = arr[l]
    var expiresAt = hit.e || 0
    if (expiresAt === 0) {
      // the item was created without expiration in a non aged cache
      this.set(hit.k, hit.v)
    } else {
      var maxAge = expiresAt - now
      // dont add already expired items
      if (maxAge > 0) {
        this.set(hit.k, hit.v, maxAge)
      }
    }
  }
}

LRUCache.prototype.prune = function () {
  var self = this
  this[CACHE].forEach(function (value, key) {
    get(self, key, false)
  })
}

function get (self, key, doUse) {
  var node = self[CACHE].get(key)
  if (node) {
    var hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE]) hit = undefined
    } else {
      if (doUse) {
        self[LRU_LIST].unshiftNode(node)
      }
    }
    if (hit) hit = hit.value
  }
  return hit
}

function isStale (self, hit) {
  if (!hit || (!hit.maxAge && !self[MAX_AGE])) {
    return false
  }
  var stale = false
  var diff = Date.now() - hit.now
  if (hit.maxAge) {
    stale = diff > hit.maxAge
  } else {
    stale = self[MAX_AGE] && (diff > self[MAX_AGE])
  }
  return stale
}

function trim (self) {
  if (self[LENGTH] > self[MAX]) {
    for (var walker = self[LRU_LIST].tail;
         self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      var prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

function del (self, node) {
  if (node) {
    var hit = node.value
    if (self[DISPOSE]) {
      self[DISPOSE](hit.key, hit.value)
    }
    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

// classy, since V8 prefers predictable objects.
function Entry (key, value, length, now, maxAge) {
  this.key = key
  this.value = value
  this.length = length
  this.now = now
  this.maxAge = maxAge || 0
}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function escapeArgument(arg, quote) {
    // Convert to string
    arg = '' + arg;

    // If we are not going to quote the argument,
    // escape shell metacharacters, including double and single quotes:
    if (!quote) {
        arg = arg.replace(/([()%!^<>&|;,"'\s])/g, '^$1');
    } else {
        // Sequence of backslashes followed by a double quote:
        // double up all the backslashes and escape the double quote
        arg = arg.replace(/(\\*)"/g, '$1$1\\"');

        // Sequence of backslashes followed by the end of the string
        // (which will become a double quote later):
        // double up all the backslashes
        arg = arg.replace(/(\\*)$/, '$1$1');

        // All other backslashes occur literally

        // Quote the whole thing:
        arg = '"' + arg + '"';
    }

    return arg;
}

module.exports = escapeArgument;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(57);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _addCollection = __webpack_require__(58);

var _addCollection2 = _interopRequireDefault(_addCollection);

var _listCollections = __webpack_require__(126);

var _listCollections2 = _interopRequireDefault(_listCollections);

var _removeCollection = __webpack_require__(136);

var _removeCollection2 = _interopRequireDefault(_removeCollection);

var _dumpCollection = __webpack_require__(137);

var _dumpCollection2 = _interopRequireDefault(_dumpCollection);

var _insert = __webpack_require__(138);

var _insert2 = _interopRequireDefault(_insert);

var _findBy = __webpack_require__(139);

var _findBy2 = _interopRequireDefault(_findBy);

var _query = __webpack_require__(140);

var _query2 = _interopRequireDefault(_query);

var _findAndRemove = __webpack_require__(141);

var _findAndRemove2 = _interopRequireDefault(_findAndRemove);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var yargs = __webpack_require__(142);

// eslint-disable-next-line no-unused-expressions
yargs(process.argv.slice(2)).command(_listCollections2.default).command(_addCollection2.default).command(_removeCollection2.default).command(_dumpCollection2.default).command(_findAndRemove2.default).command(_findBy2.default).command(_query2.default).command(_insert2.default).options({
  'filename': {
    alias: 'f',
    type: 'string',
    default: 'loki.db',
    description: 'The filename of the database',
    demandOption: false
  }
}).demandCommand().strict().help().argv;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lokijs = __webpack_require__(2);

var _lokijs2 = _interopRequireDefault(_lokijs);

var _merge = __webpack_require__(7);

var _merge2 = _interopRequireDefault(_merge);

var _commonOptions = __webpack_require__(6);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var builder = function builder(yargs) {
  yargs.options((0, _merge2.default)(_commonOptions.collectionName, {
    'unique': {
      alias: 'u',
      type: 'array',
      description: 'Property names to define unique constraints for',
      demandOption: true
    }
  }));
};

var handler = function handler(_ref) {
  var name = _ref.name,
      filename = _ref.filename,
      unique = _ref.unique;

  var db = new _lokijs2.default(filename);
  db.addCollection(name, { unique: unique });
  (0, _utils.saveDatabase)(db).then(function () {
    (0, _utils.closeDatabase)(db).then(function () {
      return null;
    });
  }).catch(function (err) {
    console.error(err);
    process.exit(1);
  });
};

exports.default = {
  command: 'addCollection',
  desc: 'Adds a collection',
  builder: builder,
  handler: handler
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(60),
    assignMergeValue = __webpack_require__(29),
    baseFor = __webpack_require__(31),
    baseMergeDeep = __webpack_require__(92),
    isObject = __webpack_require__(4),
    keysIn = __webpack_require__(39),
    safeGet = __webpack_require__(38);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(11),
    stackClear = __webpack_require__(66),
    stackDelete = __webpack_require__(67),
    stackGet = __webpack_require__(68),
    stackHas = __webpack_require__(69),
    stackSet = __webpack_require__(70);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(12);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(12);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(12);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(12);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(11);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(11),
    Map = __webpack_require__(26),
    MapCache = __webpack_require__(78);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(19),
    isMasked = __webpack_require__(74),
    isObject = __webpack_require__(4),
    toSource = __webpack_require__(76);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(27);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(75);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(79),
    mapCacheDelete = __webpack_require__(86),
    mapCacheGet = __webpack_require__(88),
    mapCacheHas = __webpack_require__(89),
    mapCacheSet = __webpack_require__(90);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(80),
    ListCache = __webpack_require__(11),
    Map = __webpack_require__(26);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(81),
    hashDelete = __webpack_require__(82),
    hashGet = __webpack_require__(83),
    hashHas = __webpack_require__(84),
    hashSet = __webpack_require__(85);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(15);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(15);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(15);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(15);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(16);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(16);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(16);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(16);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(29),
    cloneBuffer = __webpack_require__(93),
    cloneTypedArray = __webpack_require__(94),
    copyArray = __webpack_require__(97),
    initCloneObject = __webpack_require__(98),
    isArguments = __webpack_require__(34),
    isArray = __webpack_require__(23),
    isArrayLikeObject = __webpack_require__(101),
    isBuffer = __webpack_require__(36),
    isFunction = __webpack_require__(19),
    isObject = __webpack_require__(4),
    isPlainObject = __webpack_require__(103),
    isTypedArray = __webpack_require__(37),
    safeGet = __webpack_require__(38),
    toPlainObject = __webpack_require__(107);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(5);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(95);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(96);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(99),
    getPrototype = __webpack_require__(32),
    isPrototype = __webpack_require__(22);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(14),
    isObjectLike = __webpack_require__(8);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(9),
    isObjectLike = __webpack_require__(8);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(14),
    getPrototype = __webpack_require__(32),
    isObjectLike = __webpack_require__(8);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(14),
    isLength = __webpack_require__(35),
    isObjectLike = __webpack_require__(8);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(28);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(108),
    keysIn = __webpack_require__(39);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(109),
    baseAssignValue = __webpack_require__(20);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(20),
    eq = __webpack_require__(13);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4),
    isPrototype = __webpack_require__(22),
    nativeKeysIn = __webpack_require__(112);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(114),
    isIterateeCall = __webpack_require__(121);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(24),
    overRest = __webpack_require__(115),
    setToString = __webpack_require__(117);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(116);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(118),
    shortOut = __webpack_require__(120);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(119),
    defineProperty = __webpack_require__(30),
    identity = __webpack_require__(24);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(13),
    isArrayLike = __webpack_require__(9),
    isIndex = __webpack_require__(41),
    isObject = __webpack_require__(4);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'name': {
    alias: 'n',
    type: 'string',
    description: 'The name of the collection',
    demandOption: true
  }
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadDatabase = __webpack_require__(42);

var _loadDatabase2 = _interopRequireDefault(_loadDatabase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (db, name) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return new Promise(function (res, rej) {
    (0, _loadDatabase2.default)(db).then(function () {
      try {
        var collection = db.getCollection(name);
        if (!collection) rej('Collection not known: ' + name);else res(collection);
      } catch (e) {
        rej(e);
      }
    }).catch(function (e) {
      return rej(e);
    });
  });
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  return new Promise(function (res, rej) {
    db.saveDatabase(function (err) {
      if (err) {
        rej(err);
      } else res();
    });
  });
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  return new Promise(function (res, rej) {
    db.close(function (err) {
      if (err) {
        rej(err);
      } else res();
    });
  });
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lokijs = __webpack_require__(2);

var _lokijs2 = _interopRequireDefault(_lokijs);

var _forEach = __webpack_require__(127);

var _forEach2 = _interopRequireDefault(_forEach);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var builder = function builder() {};

var handler = function handler(_ref) {
  var filename = _ref.filename;

  var db = new _lokijs2.default(filename);
  try {
    (0, _utils.loadDatabase)(db).then(function () {
      var colls = db.listCollections();
      (0, _forEach2.default)(colls, function (c) {
        return console.log(c.name);
      }); // eslint-disable-line no-console
      (0, _utils.closeDatabase)(db);
    }).catch(function (err) {
      console.error(err); // eslint-disable-line no-console
      process.exit(1);
    });
  } catch (err) {
    console.error(err); // eslint-disable-line no-console
    process.exit(1);
  }
};

exports.default = {
  command: 'listCollections',
  builder: builder,
  desc: 'Lists the collections in a database',
  handler: handler
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(128),
    baseEach = __webpack_require__(129),
    castFunction = __webpack_require__(135),
    isArray = __webpack_require__(23);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(130),
    createBaseEach = __webpack_require__(134);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(31),
    keys = __webpack_require__(131);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(40),
    baseKeys = __webpack_require__(132),
    isArrayLike = __webpack_require__(9);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(22),
    nativeKeys = __webpack_require__(133);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(33);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(9);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(24);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lokijs = __webpack_require__(2);

var _lokijs2 = _interopRequireDefault(_lokijs);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var builder = function builder() {};

var handler = function handler(_ref) {
  var name = _ref.name,
      filename = _ref.filename;

  var db = new _lokijs2.default(filename);
  db.removeCollection(name);
  (0, _utils.saveDatabase)(db);
  (0, _utils.closeDatabase)(db).catch(function (err) {
    console.error(err); // eslint-disable-line no-console
    process.exit(1);
  });
};

exports.default = {
  command: 'removeCollection',
  desc: 'Removes the given collection',
  builder: builder,
  handler: handler
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lokijs = __webpack_require__(2);

var _lokijs2 = _interopRequireDefault(_lokijs);

var _commonOptions = __webpack_require__(6);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var builder = function builder(yargs) {
  yargs.options(_commonOptions.collectionName);
};

var handler = function handler(_ref) {
  var name = _ref.name,
      filename = _ref.filename;

  var db = new _lokijs2.default(filename);
  (0, _utils.loadCollection)(db, name).then(function (collection) {
    var data = collection.find({});
    console.log(JSON.stringify(data, null, 2)); // eslint-disable-line no-console
    (0, _utils.closeDatabase)(db);
  }).catch(function (err) {
    console.error(err); // eslint-disable-line no-console
    process.exit(1);
  });
};

exports.default = {
  command: 'dumpCollection',
  desc: 'Dumps the full contents of a collection',
  builder: builder,
  handler: handler
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lokijs = __webpack_require__(2);

var _lokijs2 = _interopRequireDefault(_lokijs);

var _merge = __webpack_require__(7);

var _merge2 = _interopRequireDefault(_merge);

var _commonOptions = __webpack_require__(6);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var builder = function builder(yargs) {
  yargs.options((0, _merge2.default)(_commonOptions.collectionName, {
    'data': {
      alias: 'd',
      type: 'string',
      description: 'The data',
      default: '{}'
    }
  }));
};

var handler = function handler(_ref) {
  var name = _ref.name,
      filename = _ref.filename,
      data = _ref.data;

  var db = new _lokijs2.default(filename);
  (0, _utils.loadCollection)(db, name).then(function (collection) {
    var item = void 0;
    try {
      item = JSON.parse(data);
    } catch (e) {
      console.error('Error parsing JSON: %s', data); // eslint-disable-line no-console
      process.exit(1);
    }
    collection.insert(item);
    (0, _utils.saveDatabase)(db).then(function () {
      (0, _utils.closeDatabase)(db).then(function () {
        return null;
      });
    });
  }).catch(function (err) {
    console.error(err); // eslint-disable-line no-console
    process.exit(1);
  });
};

exports.default = {
  command: 'insert',
  desc: 'Inserts data into a collection',
  builder: builder,
  handler: handler
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lokijs = __webpack_require__(2);

var _lokijs2 = _interopRequireDefault(_lokijs);

var _merge = __webpack_require__(7);

var _merge2 = _interopRequireDefault(_merge);

var _commonOptions = __webpack_require__(6);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var builder = function builder(yargs) {
  yargs.options((0, _merge2.default)(_commonOptions.collectionName, {
    'field': {
      alias: ['c', 'column'],
      type: 'string',
      description: 'The unique field',
      demandOption: true
    },
    'value': {
      alias: 'v',
      type: 'string',
      description: 'The value',
      demandOption: true
    }
  }));
};

var handler = function handler(_ref) {
  var name = _ref.name,
      filename = _ref.filename,
      field = _ref.field,
      value = _ref.value;

  var db = new _lokijs2.default(filename);
  (0, _utils.loadCollection)(db, name).then(function (collection) {
    var data = collection.by(field, value);
    if (data) console.log(JSON.stringify(data, null, 2));
    (0, _utils.closeDatabase)(db).then(function () {
      return null;
    });
  }).catch(function (err) {
    console.error(err); // eslint-disable-line no-console
    process.exit(1);
  });
};

exports.default = {
  command: 'findBy',
  desc: 'Find by index value',
  builder: builder,
  handler: handler
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lokijs = __webpack_require__(2);

var _lokijs2 = _interopRequireDefault(_lokijs);

var _merge = __webpack_require__(7);

var _merge2 = _interopRequireDefault(_merge);

var _commonOptions = __webpack_require__(6);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var builder = function builder(yargs) {
  yargs.options((0, _merge2.default)(_commonOptions.collectionName, {
    'query': {
      alias: 'q',
      type: 'string',
      description: 'The query',
      default: '{}'
    }
  }));
};

var handler = function handler(_ref) {
  var name = _ref.name,
      filename = _ref.filename,
      query = _ref.query;

  var db = new _lokijs2.default(filename);
  (0, _utils.loadCollection)(db, name).then(function (collection) {
    var dbQuery = void 0;
    try {
      dbQuery = JSON.parse(query);
    } catch (e) {
      console.error('Error parsing JSON: %s', query); // eslint-disable-line no-console
      process.exit(1);
    }
    var data = collection.find(dbQuery);
    if (data) console.log(JSON.stringify(data, null, 2)); // eslint-disable-line no-console
    (0, _utils.closeDatabase)(db).then(function () {
      return null;
    });
  }).catch(function (err) {
    console.error(err); // eslint-disable-line no-console
    process.exit(1);
  });
};

exports.default = {
  command: 'query',
  desc: 'Executes the given query on a collection',
  builder: builder,
  handler: handler
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lokijs = __webpack_require__(2);

var _lokijs2 = _interopRequireDefault(_lokijs);

var _merge = __webpack_require__(7);

var _merge2 = _interopRequireDefault(_merge);

var _commonOptions = __webpack_require__(6);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var builder = function builder(yargs) {
  yargs.options((0, _merge2.default)(_commonOptions.collectionName, {
    'query': {
      alias: 'q',
      type: 'string',
      description: 'The query',
      default: '{}'
    }
  }));
};

var handler = function handler(_ref) {
  var name = _ref.name,
      filename = _ref.filename,
      query = _ref.query;

  var db = new _lokijs2.default(filename);
  (0, _utils.loadCollection)(db, name).then(function (collection) {
    var dbQuery = void 0;
    try {
      dbQuery = JSON.parse(query);
    } catch (e) {
      console.error('Error parsing JSON: %s', query); // eslint-disable-line no-console
      process.exit(1);
    }
    collection.findAndRemove(dbQuery);
    (0, _utils.saveDatabase)(db).then(function () {
      (0, _utils.closeDatabase)(db).then(function () {
        return null;
      });
    });
  }).catch(function (err) {
    console.error(err); // eslint-disable-line no-console
    process.exit(1);
  });
};

exports.default = {
  command: 'findAndRemove',
  desc: 'Removes the results of a query from a collection',
  builder: builder,
  handler: handler
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
const argsert = __webpack_require__(43)
const fs = __webpack_require__(1)
const Command = __webpack_require__(44)
const Completion = __webpack_require__(148)
const Parser = __webpack_require__(45)
const path = __webpack_require__(0)
const Usage = __webpack_require__(149)
const Validation = __webpack_require__(160)
const Y18n = __webpack_require__(162)
const objFilter = __webpack_require__(25)
const setBlocking = __webpack_require__(48)
const applyExtends = __webpack_require__(163)
const YError = __webpack_require__(17)

exports = module.exports = Yargs
function Yargs (processArgs, cwd, parentRequire) {
  processArgs = processArgs || [] // handle calling yargs().

  const self = {}
  let command = null
  let completion = null
  let groups = {}
  let output = ''
  let preservedGroups = {}
  let usage = null
  let validation = null

  const y18n = Y18n({
    directory: path.resolve(__dirname, './locales'),
    updateFiles: false
  })

  if (!cwd) cwd = process.cwd()

  self.$0 = process.argv
    .slice(0, 2)
    .map((x, i) => {
      // ignore the node bin, specify this in your
      // bin file with #!/usr/bin/env node
      if (i === 0 && /\b(node|iojs)(\.exe)?$/.test(x)) return
      const b = rebase(cwd, x)
      return x.match(/^(\/|([a-zA-Z]:)?\\)/) && b.length < x.length ? b : x
    })
    .join(' ').trim()

  if (process.env._ !== undefined && process.argv[1] === process.env._) {
    self.$0 = process.env._.replace(
      `${path.dirname(process.execPath)}/`, ''
    )
  }

  // use context object to keep track of resets, subcommand execution, etc
  // submodules should modify and check the state of context as necessary
  const context = { resets: -1, commands: [], fullCommands: [], files: [] }
  self.getContext = () => context

  // puts yargs back into an initial state. any keys
  // that have been set to "global" will not be reset
  // by this action.
  let options
  self.resetOptions = self.reset = function resetOptions (aliases) {
    context.resets++
    aliases = aliases || {}
    options = options || {}
    // put yargs back into an initial state, this
    // logic is used to build a nested command
    // hierarchy.
    const tmpOptions = {}
    tmpOptions.local = options.local ? options.local : []
    tmpOptions.configObjects = options.configObjects ? options.configObjects : []

    // if a key has been explicitly set as local,
    // we should reset it before passing options to command.
    const localLookup = {}
    tmpOptions.local.forEach((l) => {
      localLookup[l] = true
      ;(aliases[l] || []).forEach((a) => {
        localLookup[a] = true
      })
    })

    // preserve all groups not set to local.
    preservedGroups = Object.keys(groups).reduce((acc, groupName) => {
      const keys = groups[groupName].filter(key => !(key in localLookup))
      if (keys.length > 0) {
        acc[groupName] = keys
      }
      return acc
    }, {})
    // groups can now be reset
    groups = {}

    const arrayOptions = [
      'array', 'boolean', 'string', 'skipValidation',
      'count', 'normalize', 'number'
    ]

    const objectOptions = [
      'narg', 'key', 'alias', 'default', 'defaultDescription',
      'config', 'choices', 'demandedOptions', 'demandedCommands', 'coerce'
    ]

    arrayOptions.forEach((k) => {
      tmpOptions[k] = (options[k] || []).filter(k => !localLookup[k])
    })

    objectOptions.forEach((k) => {
      tmpOptions[k] = objFilter(options[k], (k, v) => !localLookup[k])
    })

    tmpOptions.envPrefix = options.envPrefix
    options = tmpOptions

    // if this is the first time being executed, create
    // instances of all our helpers -- otherwise just reset.
    usage = usage ? usage.reset(localLookup) : Usage(self, y18n)
    validation = validation ? validation.reset(localLookup) : Validation(self, usage, y18n)
    command = command ? command.reset() : Command(self, usage, validation)
    if (!completion) completion = Completion(self, usage, command)

    completionCommand = null
    output = ''
    exitError = null
    hasOutput = false
    self.parsed = false

    return self
  }
  self.resetOptions()

  // temporary hack: allow "freezing" of reset-able state for parse(msg, cb)
  let frozen
  function freeze () {
    frozen = {}
    frozen.options = options
    frozen.configObjects = options.configObjects.slice(0)
    frozen.exitProcess = exitProcess
    frozen.groups = groups
    usage.freeze()
    validation.freeze()
    command.freeze()
    frozen.strict = strict
    frozen.completionCommand = completionCommand
    frozen.output = output
    frozen.exitError = exitError
    frozen.hasOutput = hasOutput
    frozen.parsed = self.parsed
  }
  function unfreeze () {
    options = frozen.options
    options.configObjects = frozen.configObjects
    exitProcess = frozen.exitProcess
    groups = frozen.groups
    output = frozen.output
    exitError = frozen.exitError
    hasOutput = frozen.hasOutput
    self.parsed = frozen.parsed
    usage.unfreeze()
    validation.unfreeze()
    command.unfreeze()
    strict = frozen.strict
    completionCommand = frozen.completionCommand
    parseFn = null
    parseContext = null
    frozen = undefined
  }

  self.boolean = function (keys) {
    argsert('<array|string>', [keys], arguments.length)
    populateParserHintArray('boolean', keys)
    return self
  }

  self.array = function (keys) {
    argsert('<array|string>', [keys], arguments.length)
    populateParserHintArray('array', keys)
    return self
  }

  self.number = function (keys) {
    argsert('<array|string>', [keys], arguments.length)
    populateParserHintArray('number', keys)
    return self
  }

  self.normalize = function (keys) {
    argsert('<array|string>', [keys], arguments.length)
    populateParserHintArray('normalize', keys)
    return self
  }

  self.count = function (keys) {
    argsert('<array|string>', [keys], arguments.length)
    populateParserHintArray('count', keys)
    return self
  }

  self.string = function (keys) {
    argsert('<array|string>', [keys], arguments.length)
    populateParserHintArray('string', keys)
    return self
  }

  self.requiresArg = function (keys) {
    argsert('<array|string>', [keys], arguments.length)
    populateParserHintObject(self.nargs, false, 'narg', keys, 1)
    return self
  }

  self.skipValidation = function (keys) {
    argsert('<array|string>', [keys], arguments.length)
    populateParserHintArray('skipValidation', keys)
    return self
  }

  function populateParserHintArray (type, keys, value) {
    keys = [].concat(keys)
    keys.forEach((key) => {
      options[type].push(key)
    })
  }

  self.nargs = function (key, value) {
    argsert('<string|object|array> [number]', [key, value], arguments.length)
    populateParserHintObject(self.nargs, false, 'narg', key, value)
    return self
  }

  self.choices = function (key, value) {
    argsert('<object|string|array> [string|array]', [key, value], arguments.length)
    populateParserHintObject(self.choices, true, 'choices', key, value)
    return self
  }

  self.alias = function (key, value) {
    argsert('<object|string|array> [string|array]', [key, value], arguments.length)
    populateParserHintObject(self.alias, true, 'alias', key, value)
    return self
  }

  // TODO: actually deprecate self.defaults.
  self.default = self.defaults = function (key, value, defaultDescription) {
    argsert('<object|string|array> [*] [string]', [key, value, defaultDescription], arguments.length)
    if (defaultDescription) options.defaultDescription[key] = defaultDescription
    if (typeof value === 'function') {
      if (!options.defaultDescription[key]) options.defaultDescription[key] = usage.functionDescription(value)
      value = value.call()
    }
    populateParserHintObject(self.default, false, 'default', key, value)
    return self
  }

  self.describe = function (key, desc) {
    argsert('<object|string|array> [string]', [key, desc], arguments.length)
    populateParserHintObject(self.describe, false, 'key', key, true)
    usage.describe(key, desc)
    return self
  }

  self.demandOption = function (keys, msg) {
    argsert('<object|string|array> [string]', [keys, msg], arguments.length)
    populateParserHintObject(self.demandOption, false, 'demandedOptions', keys, msg)
    return self
  }

  self.coerce = function (keys, value) {
    argsert('<object|string|array> [function]', [keys, value], arguments.length)
    populateParserHintObject(self.coerce, false, 'coerce', keys, value)
    return self
  }

  function populateParserHintObject (builder, isArray, type, key, value) {
    if (Array.isArray(key)) {
      // an array of keys with one value ['x', 'y', 'z'], function parse () {}
      const temp = {}
      key.forEach((k) => {
        temp[k] = value
      })
      builder(temp)
    } else if (typeof key === 'object') {
      // an object of key value pairs: {'x': parse () {}, 'y': parse() {}}
      Object.keys(key).forEach((k) => {
        builder(k, key[k])
      })
    } else {
      // a single key value pair 'x', parse() {}
      if (isArray) {
        options[type][key] = (options[type][key] || []).concat(value)
      } else {
        options[type][key] = value
      }
    }
  }

  function deleteFromParserHintObject (optionKey) {
    // delete from all parsing hints:
    // boolean, array, key, alias, etc.
    Object.keys(options).forEach((hintKey) => {
      const hint = options[hintKey]
      if (Array.isArray(hint)) {
        if (~hint.indexOf(optionKey)) hint.splice(hint.indexOf(optionKey), 1)
      } else if (typeof hint === 'object') {
        delete hint[optionKey]
      }
    })
    // now delete the description from usage.js.
    delete usage.getDescriptions()[optionKey]
  }

  self.config = function config (key, msg, parseFn) {
    argsert('[object|string] [string|function] [function]', [key, msg, parseFn], arguments.length)
    // allow a config object to be provided directly.
    if (typeof key === 'object') {
      key = applyExtends(key, cwd)
      options.configObjects = (options.configObjects || []).concat(key)
      return self
    }

    // allow for a custom parsing function.
    if (typeof msg === 'function') {
      parseFn = msg
      msg = null
    }

    key = key || 'config'
    self.describe(key, msg || usage.deferY18nLookup('Path to JSON config file'))
    ;(Array.isArray(key) ? key : [key]).forEach((k) => {
      options.config[k] = parseFn || true
    })

    return self
  }

  self.example = function (cmd, description) {
    argsert('<string> [string]', [cmd, description], arguments.length)
    usage.example(cmd, description)
    return self
  }

  self.command = function (cmd, description, builder, handler, middlewares) {
    argsert('<string|array|object> [string|boolean] [function|object] [function] [array]', [cmd, description, builder, handler, middlewares], arguments.length)
    command.addHandler(cmd, description, builder, handler, middlewares)
    return self
  }

  self.commandDir = function (dir, opts) {
    argsert('<string> [object]', [dir, opts], arguments.length)
    const req = parentRequire || !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    command.addDirectory(dir, self.getContext(), req, __webpack_require__(164)(), opts)
    return self
  }

  // TODO: deprecate self.demand in favor of
  // .demandCommand() .demandOption().
  self.demand = self.required = self.require = function demand (keys, max, msg) {
    // you can optionally provide a 'max' key,
    // which will raise an exception if too many '_'
    // options are provided.
    if (Array.isArray(max)) {
      max.forEach((key) => {
        self.demandOption(key, msg)
      })
      max = Infinity
    } else if (typeof max !== 'number') {
      msg = max
      max = Infinity
    }

    if (typeof keys === 'number') {
      self.demandCommand(keys, max, msg, msg)
    } else if (Array.isArray(keys)) {
      keys.forEach((key) => {
        self.demandOption(key, msg)
      })
    } else {
      if (typeof msg === 'string') {
        self.demandOption(keys, msg)
      } else if (msg === true || typeof msg === 'undefined') {
        self.demandOption(keys)
      }
    }

    return self
  }

  self.demandCommand = function demandCommand (min, max, minMsg, maxMsg) {
    argsert('[number] [number|string] [string|null|undefined] [string|null|undefined]', [min, max, minMsg, maxMsg], arguments.length)

    if (typeof min === 'undefined') min = 1

    if (typeof max !== 'number') {
      minMsg = max
      max = Infinity
    }

    self.global('_', false)

    options.demandedCommands._ = {
      min,
      max,
      minMsg,
      maxMsg
    }

    return self
  }

  self.getDemandedOptions = () => {
    argsert([], 0)
    return options.demandedOptions
  }

  self.getDemandedCommands = () => {
    argsert([], 0)
    return options.demandedCommands
  }

  self.implies = function (key, value) {
    argsert('<string|object> [number|string|array]', [key, value], arguments.length)
    validation.implies(key, value)
    return self
  }

  self.conflicts = function (key1, key2) {
    argsert('<string|object> [string|array]', [key1, key2], arguments.length)
    validation.conflicts(key1, key2)
    return self
  }

  self.usage = function (msg, description, builder, handler) {
    argsert('<string|null|undefined> [string|boolean] [function|object] [function]', [msg, description, builder, handler], arguments.length)

    if (description !== undefined) {
      // .usage() can be used as an alias for defining
      // a default command.
      if ((msg || '').match(/^\$0( |$)/)) {
        return self.command(msg, description, builder, handler)
      } else {
        throw new YError('.usage() description must start with $0 if being used as alias for .command()')
      }
    } else {
      usage.usage(msg)
      return self
    }
  }

  self.epilogue = self.epilog = function (msg) {
    argsert('<string>', [msg], arguments.length)
    usage.epilog(msg)
    return self
  }

  self.fail = function (f) {
    argsert('<function>', [f], arguments.length)
    usage.failFn(f)
    return self
  }

  self.check = function (f, _global) {
    argsert('<function> [boolean]', [f, _global], arguments.length)
    validation.check(f, _global !== false)
    return self
  }

  self.global = function global (globals, global) {
    argsert('<string|array> [boolean]', [globals, global], arguments.length)
    globals = [].concat(globals)
    if (global !== false) {
      options.local = options.local.filter(l => globals.indexOf(l) === -1)
    } else {
      globals.forEach((g) => {
        if (options.local.indexOf(g) === -1) options.local.push(g)
      })
    }
    return self
  }

  self.pkgConf = function pkgConf (key, path) {
    argsert('<string> [string]', [key, path], arguments.length)
    let conf = null
    // prefer cwd to require-main-filename in this method
    // since we're looking for e.g. "nyc" config in nyc consumer
    // rather than "yargs" config in nyc (where nyc is the main filename)
    const obj = pkgUp(path || cwd)

    // If an object exists in the key, add it to options.configObjects
    if (obj[key] && typeof obj[key] === 'object') {
      conf = applyExtends(obj[key], path || cwd)
      options.configObjects = (options.configObjects || []).concat(conf)
    }

    return self
  }

  const pkgs = {}
  function pkgUp (path) {
    const npath = path || '*'
    if (pkgs[npath]) return pkgs[npath]
    const findUp = __webpack_require__(165)

    let obj = {}
    try {
      const pkgJsonPath = findUp.sync('package.json', {
        cwd: path || __webpack_require__(0).dirname(__webpack_require__(171)(parentRequire || !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))),
        normalize: false
      })
      obj = JSON.parse(fs.readFileSync(pkgJsonPath))
    } catch (noop) {}

    pkgs[npath] = obj || {}
    return pkgs[npath]
  }

  let parseFn = null
  let parseContext = null
  self.parse = function parse (args, shortCircuit, _parseFn) {
    argsert('[string|array] [function|boolean|object] [function]', [args, shortCircuit, _parseFn], arguments.length)
    if (typeof args === 'undefined') args = processArgs

    // a context object can optionally be provided, this allows
    // additional information to be passed to a command handler.
    if (typeof shortCircuit === 'object') {
      parseContext = shortCircuit
      shortCircuit = _parseFn
    }

    // by providing a function as a second argument to
    // parse you can capture output that would otherwise
    // default to printing to stdout/stderr.
    if (typeof shortCircuit === 'function') {
      parseFn = shortCircuit
      shortCircuit = null
    }
    // completion short-circuits the parsing process,
    // skipping validation, etc.
    if (!shortCircuit) processArgs = args

    freeze()
    if (parseFn) exitProcess = false

    const parsed = self._parseArgs(args, shortCircuit)
    if (parseFn) parseFn(exitError, parsed, output)
    unfreeze()

    return parsed
  }

  self._getParseContext = () => parseContext || {}

  self._hasParseCallback = () => !!parseFn

  self.option = self.options = function option (key, opt) {
    argsert('<string|object> [object]', [key, opt], arguments.length)
    if (typeof key === 'object') {
      Object.keys(key).forEach((k) => {
        self.options(k, key[k])
      })
    } else {
      if (typeof opt !== 'object') {
        opt = {}
      }

      options.key[key] = true // track manually set keys.

      if (opt.alias) self.alias(key, opt.alias)

      const demand = opt.demand || opt.required || opt.require

      // deprecated, use 'demandOption' instead
      if (demand) {
        self.demand(key, demand)
      }

      if (opt.demandOption) {
        self.demandOption(key, typeof opt.demandOption === 'string' ? opt.demandOption : undefined)
      }

      if ('conflicts' in opt) {
        self.conflicts(key, opt.conflicts)
      }

      if ('default' in opt) {
        self.default(key, opt.default)
      }

      if ('implies' in opt) {
        self.implies(key, opt.implies)
      }

      if ('nargs' in opt) {
        self.nargs(key, opt.nargs)
      }

      if (opt.config) {
        self.config(key, opt.configParser)
      }

      if (opt.normalize) {
        self.normalize(key)
      }

      if ('choices' in opt) {
        self.choices(key, opt.choices)
      }

      if ('coerce' in opt) {
        self.coerce(key, opt.coerce)
      }

      if ('group' in opt) {
        self.group(key, opt.group)
      }

      if (opt.boolean || opt.type === 'boolean') {
        self.boolean(key)
        if (opt.alias) self.boolean(opt.alias)
      }

      if (opt.array || opt.type === 'array') {
        self.array(key)
        if (opt.alias) self.array(opt.alias)
      }

      if (opt.number || opt.type === 'number') {
        self.number(key)
        if (opt.alias) self.number(opt.alias)
      }

      if (opt.string || opt.type === 'string') {
        self.string(key)
        if (opt.alias) self.string(opt.alias)
      }

      if (opt.count || opt.type === 'count') {
        self.count(key)
      }

      if (typeof opt.global === 'boolean') {
        self.global(key, opt.global)
      }

      if (opt.defaultDescription) {
        options.defaultDescription[key] = opt.defaultDescription
      }

      if (opt.skipValidation) {
        self.skipValidation(key)
      }

      const desc = opt.describe || opt.description || opt.desc
      if (!opt.hidden) {
        self.describe(key, desc)
      }

      if (opt.requiresArg) {
        self.requiresArg(key)
      }
    }

    return self
  }
  self.getOptions = () => options

  self.positional = function (key, opts) {
    argsert('<string> <object>', [key, opts], arguments.length)
    if (context.resets === 0) {
      throw new YError(".positional() can only be called in a command's builder function")
    }

    // .positional() only supports a subset of the configuration
    // options availble to .option().
    const supportedOpts = ['default', 'implies', 'normalize',
      'choices', 'conflicts', 'coerce', 'type', 'describe',
      'desc', 'description', 'alias']
    opts = objFilter(opts, (k, v) => {
      let accept = supportedOpts.indexOf(k) !== -1
      // type can be one of string|number|boolean.
      if (k === 'type' && ['string', 'number', 'boolean'].indexOf(v) === -1) accept = false
      return accept
    })

    // copy over any settings that can be inferred from the command string.
    const fullCommand = context.fullCommands[context.fullCommands.length - 1]
    const parseOptions = fullCommand ? command.cmdToParseOptions(fullCommand) : {
      array: [],
      alias: {},
      default: {},
      demand: {}
    }
    Object.keys(parseOptions).forEach((pk) => {
      if (Array.isArray(parseOptions[pk])) {
        if (parseOptions[pk].indexOf(key) !== -1) opts[pk] = true
      } else {
        if (parseOptions[pk][key] && !(pk in opts)) opts[pk] = parseOptions[pk][key]
      }
    })
    self.group(key, usage.getPositionalGroupName())
    return self.option(key, opts)
  }

  self.group = function group (opts, groupName) {
    argsert('<string|array> <string>', [opts, groupName], arguments.length)
    const existing = preservedGroups[groupName] || groups[groupName]
    if (preservedGroups[groupName]) {
      // we now only need to track this group name in groups.
      delete preservedGroups[groupName]
    }

    const seen = {}
    groups[groupName] = (existing || []).concat(opts).filter((key) => {
      if (seen[key]) return false
      return (seen[key] = true)
    })
    return self
  }
  // combine explicit and preserved groups. explicit groups should be first
  self.getGroups = () => Object.assign({}, groups, preservedGroups)

  // as long as options.envPrefix is not undefined,
  // parser will apply env vars matching prefix to argv
  self.env = function (prefix) {
    argsert('[string|boolean]', [prefix], arguments.length)
    if (prefix === false) options.envPrefix = undefined
    else options.envPrefix = prefix || ''
    return self
  }

  self.wrap = function (cols) {
    argsert('<number|null|undefined>', [cols], arguments.length)
    usage.wrap(cols)
    return self
  }

  let strict = false
  self.strict = function (enabled) {
    argsert('[boolean]', [enabled], arguments.length)
    strict = enabled !== false
    return self
  }
  self.getStrict = () => strict

  self.showHelp = function (level) {
    argsert('[string|function]', [level], arguments.length)
    if (!self.parsed) self._parseArgs(processArgs) // run parser, if it has not already been executed.
    if (command.hasDefaultCommand()) {
      context.resets++ // override the restriction on top-level positoinals.
      command.runDefaultBuilderOn(self, true)
    }
    usage.showHelp(level)
    return self
  }

  let versionOpt = null
  self.version = function version (opt, msg, ver) {
    const defaultVersionOpt = 'version'
    argsert('[boolean|string] [string] [string]', [opt, msg, ver], arguments.length)

    // nuke the key previously configured
    // to return version #.
    if (versionOpt) {
      deleteFromParserHintObject(versionOpt)
      usage.version(undefined)
      versionOpt = null
    }

    if (arguments.length === 0) {
      ver = guessVersion()
      opt = defaultVersionOpt
    } else if (arguments.length === 1) {
      if (opt === false) { // disable default 'version' key.
        return self
      }
      ver = opt
      opt = defaultVersionOpt
    } else if (arguments.length === 2) {
      ver = msg
      msg = null
    }

    versionOpt = typeof opt === 'string' ? opt : defaultVersionOpt
    msg = msg || usage.deferY18nLookup('Show version number')

    usage.version(ver || undefined)
    self.boolean(versionOpt)
    self.describe(versionOpt, msg)
    return self
  }

  function guessVersion () {
    const obj = pkgUp()

    return obj.version || 'unknown'
  }

  let helpOpt = null
  self.addHelpOpt = self.help = function addHelpOpt (opt, msg) {
    const defaultHelpOpt = 'help'
    argsert('[string|boolean] [string]', [opt, msg], arguments.length)

    // nuke the key previously configured
    // to return help.
    if (helpOpt) {
      deleteFromParserHintObject(helpOpt)
      helpOpt = null
    }

    if (arguments.length === 1) {
      if (opt === false) return self
    }

    // use arguments, fallback to defaults for opt and msg
    helpOpt = typeof opt === 'string' ? opt : defaultHelpOpt
    self.boolean(helpOpt)
    self.describe(helpOpt, msg || usage.deferY18nLookup('Show help'))
    return self
  }

  self.showHelpOnFail = function showHelpOnFail (enabled, message) {
    argsert('[boolean|string] [string]', [enabled, message], arguments.length)
    usage.showHelpOnFail(enabled, message)
    return self
  }

  var exitProcess = true
  self.exitProcess = function (enabled) {
    argsert('[boolean]', [enabled], arguments.length)
    if (typeof enabled !== 'boolean') {
      enabled = true
    }
    exitProcess = enabled
    return self
  }
  self.getExitProcess = () => exitProcess

  var completionCommand = null
  self.completion = function (cmd, desc, fn) {
    argsert('[string] [string|boolean|function] [function]', [cmd, desc, fn], arguments.length)

    // a function to execute when generating
    // completions can be provided as the second
    // or third argument to completion.
    if (typeof desc === 'function') {
      fn = desc
      desc = null
    }

    // register the completion command.
    completionCommand = cmd || 'completion'
    if (!desc && desc !== false) {
      desc = 'generate bash completion script'
    }
    self.command(completionCommand, desc)

    // a function can be provided
    if (fn) completion.registerFunction(fn)

    return self
  }

  self.showCompletionScript = function ($0) {
    argsert('[string]', [$0], arguments.length)
    $0 = $0 || self.$0
    _logger.log(completion.generateCompletionScript($0, completionCommand))
    return self
  }

  self.getCompletion = function (args, done) {
    argsert('<array> <function>', [args, done], arguments.length)
    completion.getCompletion(args, done)
  }

  self.locale = function (locale) {
    argsert('[string]', [locale], arguments.length)
    if (arguments.length === 0) {
      guessLocale()
      return y18n.getLocale()
    }
    detectLocale = false
    y18n.setLocale(locale)
    return self
  }

  self.updateStrings = self.updateLocale = function (obj) {
    argsert('<object>', [obj], arguments.length)
    detectLocale = false
    y18n.updateLocale(obj)
    return self
  }

  let detectLocale = true
  self.detectLocale = function (detect) {
    argsert('<boolean>', [detect], arguments.length)
    detectLocale = detect
    return self
  }
  self.getDetectLocale = () => detectLocale

  var hasOutput = false
  var exitError = null
  // maybe exit, always capture
  // context about why we wanted to exit.
  self.exit = (code, err) => {
    hasOutput = true
    exitError = err
    if (exitProcess) process.exit(code)
  }

  // we use a custom logger that buffers output,
  // so that we can print to non-CLIs, e.g., chat-bots.
  const _logger = {
    log () {
      const args = []
      for (let i = 0; i < arguments.length; i++) args.push(arguments[i])
      if (!self._hasParseCallback()) console.log.apply(console, args)
      hasOutput = true
      if (output.length) output += '\n'
      output += args.join(' ')
    },
    error () {
      const args = []
      for (let i = 0; i < arguments.length; i++) args.push(arguments[i])
      if (!self._hasParseCallback()) console.error.apply(console, args)
      hasOutput = true
      if (output.length) output += '\n'
      output += args.join(' ')
    }
  }
  self._getLoggerInstance = () => _logger
  // has yargs output an error our help
  // message in the current execution context.
  self._hasOutput = () => hasOutput

  self._setHasOutput = () => {
    hasOutput = true
  }

  let recommendCommands
  self.recommendCommands = function (recommend) {
    argsert('[boolean]', [recommend], arguments.length)
    recommendCommands = typeof recommend === 'boolean' ? recommend : true
    return self
  }

  self.getUsageInstance = () => usage

  self.getValidationInstance = () => validation

  self.getCommandInstance = () => command

  self.terminalWidth = () => {
    argsert([], 0)
    return typeof process.stdout.columns !== 'undefined' ? process.stdout.columns : null
  }

  Object.defineProperty(self, 'argv', {
    get: () => self._parseArgs(processArgs),
    enumerable: true
  })

  self._parseArgs = function parseArgs (args, shortCircuit, _skipValidation, commandIndex) {
    let skipValidation = !!_skipValidation
    args = args || processArgs

    options.__ = y18n.__
    options.configuration = pkgUp()['yargs'] || {}

    const parsed = Parser.detailed(args, options)
    let argv = parsed.argv
    if (parseContext) argv = Object.assign({}, argv, parseContext)
    const aliases = parsed.aliases

    argv.$0 = self.$0
    self.parsed = parsed

    try {
      guessLocale() // guess locale lazily, so that it can be turned off in chain.

      // while building up the argv object, there
      // are two passes through the parser. If completion
      // is being performed short-circuit on the first pass.
      if (shortCircuit) {
        return argv
      }

      // if there's a handler associated with a
      // command defer processing to it.
      if (helpOpt) {
        // consider any multi-char helpOpt alias as a valid help command
        // unless all helpOpt aliases are single-char
        // note that parsed.aliases is a normalized bidirectional map :)
        const helpCmds = [helpOpt]
          .concat(aliases[helpOpt] || [])
          .filter(k => k.length > 1)
        // check if help should trigger and strip it from _.
        if (~helpCmds.indexOf(argv._[argv._.length - 1])) {
          argv._.pop()
          argv[helpOpt] = true
        }
      }
      const handlerKeys = command.getCommands()
      const skipDefaultCommand = argv[helpOpt] && (handlerKeys.length > 1 || handlerKeys[0] !== '$0')

      if (argv._.length) {
        if (handlerKeys.length) {
          let firstUnknownCommand
          for (let i = (commandIndex || 0), cmd; argv._[i] !== undefined; i++) {
            cmd = String(argv._[i])
            if (~handlerKeys.indexOf(cmd) && cmd !== completionCommand) {
              setPlaceholderKeys(argv)
              // commands are executed using a recursive algorithm that executes
              // the deepest command first; we keep track of the position in the
              // argv._ array that is currently being executed.
              return command.runCommand(cmd, self, parsed, i + 1)
            } else if (!firstUnknownCommand && cmd !== completionCommand) {
              firstUnknownCommand = cmd
              break
            }
          }

          // run the default command, if defined
          if (command.hasDefaultCommand() && !skipDefaultCommand) {
            setPlaceholderKeys(argv)
            return command.runCommand(null, self, parsed)
          }

          // recommend a command if recommendCommands() has
          // been enabled, and no commands were found to execute
          if (recommendCommands && firstUnknownCommand && !argv[helpOpt]) {
            validation.recommendCommands(firstUnknownCommand, handlerKeys)
          }
        }

        // generate a completion script for adding to ~/.bashrc.
        if (completionCommand && ~argv._.indexOf(completionCommand) && !argv[completion.completionKey]) {
          if (exitProcess) setBlocking(true)
          self.showCompletionScript()
          self.exit(0)
        }
      } else if (command.hasDefaultCommand() && !skipDefaultCommand) {
        setPlaceholderKeys(argv)
        return command.runCommand(null, self, parsed)
      }

      // we must run completions first, a user might
      // want to complete the --help or --version option.
      if (completion.completionKey in argv) {
        if (exitProcess) setBlocking(true)

        // we allow for asynchronous completions,
        // e.g., loading in a list of commands from an API.
        const completionArgs = args.slice(args.indexOf(`--${completion.completionKey}`) + 1)
        completion.getCompletion(completionArgs, (completions) => {
          ;(completions || []).forEach((completion) => {
            _logger.log(completion)
          })

          self.exit(0)
        })
        return setPlaceholderKeys(argv)
      }

      // Handle 'help' and 'version' options
      // if we haven't already output help!
      if (!hasOutput) {
        Object.keys(argv).forEach((key) => {
          if (key === helpOpt && argv[key]) {
            if (exitProcess) setBlocking(true)

            skipValidation = true
            self.showHelp('log')
            self.exit(0)
          } else if (key === versionOpt && argv[key]) {
            if (exitProcess) setBlocking(true)

            skipValidation = true
            usage.showVersion()
            self.exit(0)
          }
        })
      }

      // Check if any of the options to skip validation were provided
      if (!skipValidation && options.skipValidation.length > 0) {
        skipValidation = Object.keys(argv).some(key => options.skipValidation.indexOf(key) >= 0 && argv[key] === true)
      }

      // If the help or version options where used and exitProcess is false,
      // or if explicitly skipped, we won't run validations.
      if (!skipValidation) {
        if (parsed.error) throw new YError(parsed.error.message)

        // if we're executed via bash completion, don't
        // bother with validation.
        if (!argv[completion.completionKey]) {
          self._runValidation(argv, aliases, {}, parsed.error)
        }
      }
    } catch (err) {
      if (err instanceof YError) usage.fail(err.message, err)
      else throw err
    }

    return setPlaceholderKeys(argv)
  }

  self._runValidation = function runValidation (argv, aliases, positionalMap, parseErrors) {
    if (parseErrors) throw new YError(parseErrors.message)
    validation.nonOptionCount(argv)
    validation.requiredArguments(argv)
    if (strict) validation.unknownArguments(argv, aliases, positionalMap)
    validation.customChecks(argv, aliases)
    validation.limitedChoices(argv)
    validation.implications(argv)
    validation.conflicting(argv)
  }

  function guessLocale () {
    if (!detectLocale) return

    try {
      const osLocale = __webpack_require__(173)
      self.locale(osLocale.sync({ spawn: false }))
    } catch (err) {
      // if we explode looking up locale just noop
      // we'll keep using the default language 'en'.
    }
  }

  function setPlaceholderKeys (argv) {
    Object.keys(options.key).forEach((key) => {
      // don't set placeholder keys for dot
      // notation options 'foo.bar'.
      if (~key.indexOf('.')) return
      if (typeof argv[key] === 'undefined') argv[key] = undefined
    })
    return argv
  }

  // an app should almost always have --version and --help,
  // if you *really* want to disable this use .help(false)/.version(false).
  self.help()
  self.version()

  return self
}

// rebase an absolute path to a relative one with respect to a base directory
// exported for tests
exports.rebase = rebase
function rebase (base, dir) {
  return path.relative(base, dir)
}

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function preserveCamelCase(str) {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < str.length; i++) {
		const c = str[i];

		if (isLastCharLower && /[a-zA-Z]/.test(c) && c.toUpperCase() === c) {
			str = str.substr(0, i) + '-' + str.substr(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(c) && c.toLowerCase() === c) {
			str = str.substr(0, i - 1) + '-' + str.substr(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = c.toLowerCase() === c;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = c.toUpperCase() === c;
		}
	}

	return str;
}

module.exports = function (str) {
	if (arguments.length > 1) {
		str = Array.from(arguments)
			.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		str = str.trim();
	}

	if (str.length === 0) {
		return '';
	}

	if (str.length === 1) {
		return str.toLowerCase();
	}

	if (/^[a-z0-9]+$/.test(str)) {
		return str;
	}

	const hasUpperCase = str !== str.toLowerCase();

	if (hasUpperCase) {
		str = preserveCamelCase(str);
	}

	return str
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, (m, p1) => p1.toUpperCase());
};


/***/ }),
/* 144 */
/***/ (function(module, exports) {

// take an un-split argv string and tokenize it.
module.exports = function (argString) {
  if (Array.isArray(argString)) return argString

  argString = argString.trim()

  var i = 0
  var prevC = null
  var c = null
  var opening = null
  var args = []

  for (var ii = 0; ii < argString.length; ii++) {
    prevC = c
    c = argString.charAt(ii)

    // split on spaces unless we're in quotes.
    if (c === ' ' && !opening) {
      if (!(prevC === ' ')) {
        i++
      }
      continue
    }

    // don't split the string if we're in matching
    // opening or closing single and double quotes.
    if (c === opening) {
      opening = null
      continue
    } else if ((c === "'" || c === '"') && !opening) {
      opening = c
      continue
    }

    if (!args[i]) args[i] = ''
    args[i] += c
  }

  return args
}


/***/ }),
/* 145 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 145;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs = __webpack_require__(1),
  join = __webpack_require__(0).join,
  resolve = __webpack_require__(0).resolve,
  dirname = __webpack_require__(0).dirname,
  defaultOptions = {
    extensions: ['js', 'json', 'coffee'],
    recurse: true,
    rename: function (name) {
      return name;
    },
    visit: function (obj) {
      return obj;
    }
  };

function checkFileInclusion(path, filename, options) {
  return (
    // verify file has valid extension
    (new RegExp('\\.(' + options.extensions.join('|') + ')$', 'i').test(filename)) &&

    // if options.include is a RegExp, evaluate it and make sure the path passes
    !(options.include && options.include instanceof RegExp && !options.include.test(path)) &&

    // if options.include is a function, evaluate it and make sure the path passes
    !(options.include && typeof options.include === 'function' && !options.include(path, filename)) &&

    // if options.exclude is a RegExp, evaluate it and make sure the path doesn't pass
    !(options.exclude && options.exclude instanceof RegExp && options.exclude.test(path)) &&

    // if options.exclude is a function, evaluate it and make sure the path doesn't pass
    !(options.exclude && typeof options.exclude === 'function' && options.exclude(path, filename))
  );
}

function requireDirectory(m, path, options) {
  var retval = {};

  // path is optional
  if (path && !options && typeof path !== 'string') {
    options = path;
    path = null;
  }

  // default options
  options = options || {};
  for (var prop in defaultOptions) {
    if (typeof options[prop] === 'undefined') {
      options[prop] = defaultOptions[prop];
    }
  }

  // if no path was passed in, assume the equivelant of __dirname from caller
  // otherwise, resolve path relative to the equivalent of __dirname
  path = !path ? dirname(m.filename) : resolve(dirname(m.filename), path);

  // get the path of each file in specified directory, append to current tree node, recurse
  fs.readdirSync(path).forEach(function (filename) {
    var joined = join(path, filename),
      files,
      key,
      obj;

    if (fs.statSync(joined).isDirectory() && options.recurse) {
      // this node is a directory; recurse
      files = requireDirectory(m, joined, options);
      // exclude empty directories
      if (Object.keys(files).length) {
        retval[options.rename(filename, joined, filename)] = files;
      }
    } else {
      if (joined !== m.filename && checkFileInclusion(joined, filename, options)) {
        // hash node key shouldn't include file extension
        key = filename.substring(0, filename.lastIndexOf('.'));
        obj = m.require(joined);
        retval[options.rename(key, joined, filename)] = options.visit(obj, joined, filename) || obj;
      }
    }
  });

  return retval;
}

module.exports = requireDirectory;
module.exports.defaults = defaultOptions;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function whichModule (exported) {
  for (var i = 0, files = Object.keys(__webpack_require__.c), mod; i < files.length; i++) {
    mod = __webpack_require__.c[files[i]]
    if (mod.exports === exported) return mod
  }
  return null
}


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
const fs = __webpack_require__(1)
const path = __webpack_require__(0)

// add bash completions to your
//  yargs-powered applications.
module.exports = function completion (yargs, usage, command) {
  const self = {
    completionKey: 'get-yargs-completions'
  }

  // get a list of completion commands.
  // 'args' is the array of strings from the line to be completed
  self.getCompletion = function getCompletion (args, done) {
    const completions = []
    const current = args.length ? args[args.length - 1] : ''
    const argv = yargs.parse(args, true)
    const aliases = yargs.parsed.aliases

    // a custom completion function can be provided
    // to completion().
    if (completionFunction) {
      if (completionFunction.length < 3) {
        const result = completionFunction(current, argv)

        // promise based completion function.
        if (typeof result.then === 'function') {
          return result.then((list) => {
            process.nextTick(() => { done(list) })
          }).catch((err) => {
            process.nextTick(() => { throw err })
          })
        }

        // synchronous completion function.
        return done(result)
      } else {
        // asynchronous completion function
        return completionFunction(current, argv, (completions) => {
          done(completions)
        })
      }
    }

    const handlers = command.getCommandHandlers()
    for (let i = 0, ii = args.length; i < ii; ++i) {
      if (handlers[args[i]] && handlers[args[i]].builder) {
        const builder = handlers[args[i]].builder
        if (typeof builder === 'function') {
          const y = yargs.reset()
          builder(y)
          return y.argv
        }
      }
    }

    if (!current.match(/^-/)) {
      usage.getCommands().forEach((usageCommand) => {
        const commandName = command.parseCommand(usageCommand[0]).cmd
        if (args.indexOf(commandName) === -1) {
          completions.push(commandName)
        }
      })
    }

    if (current.match(/^-/)) {
      Object.keys(yargs.getOptions().key).forEach((key) => {
        // If the key and its aliases aren't in 'args', add the key to 'completions'
        const keyAndAliases = [key].concat(aliases[key] || [])
        const notInArgs = keyAndAliases.every(val => args.indexOf(`--${val}`) === -1)
        if (notInArgs) {
          completions.push(`--${key}`)
        }
      })
    }

    done(completions)
  }

  // generate the completion script to add to your .bashrc.
  self.generateCompletionScript = function generateCompletionScript ($0, cmd) {
    let script = fs.readFileSync(
      path.resolve(__dirname, '../completion.sh.hbs'),
      'utf-8'
    )
    const name = path.basename($0)

    // add ./to applications not yet installed as bin.
    if ($0.match(/\.js$/)) $0 = `./${$0}`

    script = script.replace(/{{app_name}}/g, name)
    script = script.replace(/{{completion_command}}/g, cmd)
    return script.replace(/{{app_path}}/g, $0)
  }

  // register a function to perform your own custom
  // completions., this function can be either
  // synchrnous or asynchronous.
  let completionFunction = null
  self.registerFunction = (fn) => {
    completionFunction = fn
  }

  return self
}

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// this file handles outputting usage instructions,
// failures, etc. keeps logging in one place.
const stringWidth = __webpack_require__(46)
const objFilter = __webpack_require__(25)
const path = __webpack_require__(0)
const setBlocking = __webpack_require__(48)
const YError = __webpack_require__(17)

module.exports = function usage (yargs, y18n) {
  const __ = y18n.__
  const self = {}

  // methods for ouputting/building failure message.
  const fails = []
  self.failFn = function failFn (f) {
    fails.push(f)
  }

  let failMessage = null
  let showHelpOnFail = true
  self.showHelpOnFail = function showHelpOnFailFn (enabled, message) {
    if (typeof enabled === 'string') {
      message = enabled
      enabled = true
    } else if (typeof enabled === 'undefined') {
      enabled = true
    }
    failMessage = message
    showHelpOnFail = enabled
    return self
  }

  let failureOutput = false
  self.fail = function fail (msg, err) {
    const logger = yargs._getLoggerInstance()

    if (fails.length) {
      for (let i = fails.length - 1; i >= 0; --i) {
        fails[i](msg, err, self)
      }
    } else {
      if (yargs.getExitProcess()) setBlocking(true)

      // don't output failure message more than once
      if (!failureOutput) {
        failureOutput = true
        if (showHelpOnFail) yargs.showHelp('error')
        if (msg || err) logger.error(msg || err)
        if (failMessage) {
          if (msg || err) logger.error('')
          logger.error(failMessage)
        }
      }

      err = err || new YError(msg)
      if (yargs.getExitProcess()) {
        return yargs.exit(1)
      } else if (yargs._hasParseCallback()) {
        return yargs.exit(1, err)
      } else {
        throw err
      }
    }
  }

  // methods for ouputting/building help (usage) message.
  let usages = []
  let usageDisabled = false
  self.usage = (msg, description) => {
    if (msg === null) {
      usageDisabled = true
      usages = []
      return
    }
    usageDisabled = false
    usages.push([msg, description || ''])
    return self
  }
  self.getUsage = () => {
    return usages
  }
  self.getUsageDisabled = () => {
    return usageDisabled
  }

  self.getPositionalGroupName = () => {
    return __('Positionals:')
  }

  let examples = []
  self.example = (cmd, description) => {
    examples.push([cmd, description || ''])
  }

  let commands = []
  self.command = function command (cmd, description, isDefault, aliases) {
    // the last default wins, so cancel out any previously set default
    if (isDefault) {
      commands = commands.map((cmdArray) => {
        cmdArray[2] = false
        return cmdArray
      })
    }
    commands.push([cmd, description || '', isDefault, aliases])
  }
  self.getCommands = () => commands

  let descriptions = {}
  self.describe = function describe (key, desc) {
    if (typeof key === 'object') {
      Object.keys(key).forEach((k) => {
        self.describe(k, key[k])
      })
    } else {
      descriptions[key] = desc
    }
  }
  self.getDescriptions = () => descriptions

  let epilog
  self.epilog = (msg) => {
    epilog = msg
  }

  let wrapSet = false
  let wrap
  self.wrap = (cols) => {
    wrapSet = true
    wrap = cols
  }

  function getWrap () {
    if (!wrapSet) {
      wrap = windowWidth()
      wrapSet = true
    }

    return wrap
  }

  const deferY18nLookupPrefix = '__yargsString__:'
  self.deferY18nLookup = str => deferY18nLookupPrefix + str

  const defaultGroup = 'Options:'
  self.help = function help () {
    normalizeAliases()

    // handle old demanded API
    const base$0 = path.basename(yargs.$0)
    const demandedOptions = yargs.getDemandedOptions()
    const demandedCommands = yargs.getDemandedCommands()
    const groups = yargs.getGroups()
    const options = yargs.getOptions()
    let keys = Object.keys(
      Object.keys(descriptions)
      .concat(Object.keys(demandedOptions))
      .concat(Object.keys(demandedCommands))
      .concat(Object.keys(options.default))
      .reduce((acc, key) => {
        if (key !== '_') acc[key] = true
        return acc
      }, {})
    )

    const theWrap = getWrap()
    const ui = __webpack_require__(152)({
      width: theWrap,
      wrap: !!theWrap
    })

    // the usage string.
    if (!usageDisabled) {
      if (usages.length) {
        // user-defined usage.
        usages.forEach((usage) => {
          ui.div(`${usage[0].replace(/\$0/g, base$0)}`)
          if (usage[1]) {
            ui.div({text: `${usage[1]}`, padding: [1, 0, 0, 0]})
          }
        })
        ui.div()
      } else if (commands.length) {
        let u = null
        // demonstrate how commands are used.
        if (demandedCommands._) {
          u = `${base$0} <${__('command')}>\n`
        } else {
          u = `${base$0} [${__('command')}]\n`
        }
        ui.div(`${u}`)
      }
    }

    // your application's commands, i.e., non-option
    // arguments populated in '_'.
    if (commands.length) {
      ui.div(__('Commands:'))

      const context = yargs.getContext()
      const parentCommands = context.commands.length ? `${context.commands.join(' ')} ` : ''

      commands.forEach((command) => {
        const commandString = `${base$0} ${parentCommands}${command[0].replace(/^\$0 ?/, '')}` // drop $0 from default commands.
        ui.span(
          {
            text: commandString,
            padding: [0, 2, 0, 2],
            width: maxWidth(commands, theWrap, `${base$0}${parentCommands}`) + 4
          },
          {text: command[1]}
        )
        const hints = []
        if (command[2]) hints.push(`[${__('default:').slice(0, -1)}]`) // TODO hacking around i18n here
        if (command[3] && command[3].length) {
          hints.push(`[${__('aliases:')} ${command[3].join(', ')}]`)
        }
        if (hints.length) {
          ui.div({text: hints.join(' '), padding: [0, 0, 0, 2], align: 'right'})
        } else {
          ui.div()
        }
      })

      ui.div()
    }

    // perform some cleanup on the keys array, making it
    // only include top-level keys not their aliases.
    const aliasKeys = (Object.keys(options.alias) || [])
      .concat(Object.keys(yargs.parsed.newAliases) || [])

    keys = keys.filter(key => !yargs.parsed.newAliases[key] && aliasKeys.every(alias => (options.alias[alias] || []).indexOf(key) === -1))

    // populate 'Options:' group with any keys that have not
    // explicitly had a group set.
    if (!groups[defaultGroup]) groups[defaultGroup] = []
    addUngroupedKeys(keys, options.alias, groups)

    // display 'Options:' table along with any custom tables:
    Object.keys(groups).forEach((groupName) => {
      if (!groups[groupName].length) return

      ui.div(__(groupName))

      // if we've grouped the key 'f', but 'f' aliases 'foobar',
      // normalizedKeys should contain only 'foobar'.
      const normalizedKeys = groups[groupName].map((key) => {
        if (~aliasKeys.indexOf(key)) return key
        for (let i = 0, aliasKey; (aliasKey = aliasKeys[i]) !== undefined; i++) {
          if (~(options.alias[aliasKey] || []).indexOf(key)) return aliasKey
        }
        return key
      })

      // actually generate the switches string --foo, -f, --bar.
      const switches = normalizedKeys.reduce((acc, key) => {
        acc[key] = [ key ].concat(options.alias[key] || [])
          .map(sw => {
            // for the special positional group don't
            // add '--' or '-' prefix.
            if (groupName === self.getPositionalGroupName()) return sw
            else return (sw.length > 1 ? '--' : '-') + sw
          })
          .join(', ')

        return acc
      }, {})

      normalizedKeys.forEach((key) => {
        const kswitch = switches[key]
        let desc = descriptions[key] || ''
        let type = null

        if (~desc.lastIndexOf(deferY18nLookupPrefix)) desc = __(desc.substring(deferY18nLookupPrefix.length))

        if (~options.boolean.indexOf(key)) type = `[${__('boolean')}]`
        if (~options.count.indexOf(key)) type = `[${__('count')}]`
        if (~options.string.indexOf(key)) type = `[${__('string')}]`
        if (~options.normalize.indexOf(key)) type = `[${__('string')}]`
        if (~options.array.indexOf(key)) type = `[${__('array')}]`
        if (~options.number.indexOf(key)) type = `[${__('number')}]`

        const extra = [
          type,
          (key in demandedOptions) ? `[${__('required')}]` : null,
          options.choices && options.choices[key] ? `[${__('choices:')} ${
            self.stringifiedValues(options.choices[key])}]` : null,
          defaultString(options.default[key], options.defaultDescription[key])
        ].filter(Boolean).join(' ')

        ui.span(
          {text: kswitch, padding: [0, 2, 0, 2], width: maxWidth(switches, theWrap) + 4},
          desc
        )

        if (extra) ui.div({text: extra, padding: [0, 0, 0, 2], align: 'right'})
        else ui.div()
      })

      ui.div()
    })

    // describe some common use-cases for your application.
    if (examples.length) {
      ui.div(__('Examples:'))

      examples.forEach((example) => {
        example[0] = example[0].replace(/\$0/g, base$0)
      })

      examples.forEach((example) => {
        if (example[1] === '') {
          ui.div(
            {
              text: example[0],
              padding: [0, 2, 0, 2]
            }
          )
        } else {
          ui.div(
            {
              text: example[0],
              padding: [0, 2, 0, 2],
              width: maxWidth(examples, theWrap) + 4
            }, {
              text: example[1]
            }
          )
        }
      })

      ui.div()
    }

    // the usage string.
    if (epilog) {
      const e = epilog.replace(/\$0/g, base$0)
      ui.div(`${e}\n`)
    }

    return ui.toString()
  }

  // return the maximum width of a string
  // in the left-hand column of a table.
  function maxWidth (table, theWrap, modifier) {
    let width = 0

    // table might be of the form [leftColumn],
    // or {key: leftColumn}
    if (!Array.isArray(table)) {
      table = Object.keys(table).map(key => [table[key]])
    }

    table.forEach((v) => {
      width = Math.max(
        stringWidth(modifier ? `${modifier} ${v[0]}` : v[0]),
        width
      )
    })

    // if we've enabled 'wrap' we should limit
    // the max-width of the left-column.
    if (theWrap) width = Math.min(width, parseInt(theWrap * 0.5, 10))

    return width
  }

  // make sure any options set for aliases,
  // are copied to the keys being aliased.
  function normalizeAliases () {
    // handle old demanded API
    const demandedOptions = yargs.getDemandedOptions()
    const options = yargs.getOptions()

    ;(Object.keys(options.alias) || []).forEach((key) => {
      options.alias[key].forEach((alias) => {
        // copy descriptions.
        if (descriptions[alias]) self.describe(key, descriptions[alias])
        // copy demanded.
        if (alias in demandedOptions) yargs.demandOption(key, demandedOptions[alias])
        // type messages.
        if (~options.boolean.indexOf(alias)) yargs.boolean(key)
        if (~options.count.indexOf(alias)) yargs.count(key)
        if (~options.string.indexOf(alias)) yargs.string(key)
        if (~options.normalize.indexOf(alias)) yargs.normalize(key)
        if (~options.array.indexOf(alias)) yargs.array(key)
        if (~options.number.indexOf(alias)) yargs.number(key)
      })
    })
  }

  // given a set of keys, place any keys that are
  // ungrouped under the 'Options:' grouping.
  function addUngroupedKeys (keys, aliases, groups) {
    let groupedKeys = []
    let toCheck = null
    Object.keys(groups).forEach((group) => {
      groupedKeys = groupedKeys.concat(groups[group])
    })

    keys.forEach((key) => {
      toCheck = [key].concat(aliases[key])
      if (!toCheck.some(k => groupedKeys.indexOf(k) !== -1)) {
        groups[defaultGroup].push(key)
      }
    })
    return groupedKeys
  }

  self.showHelp = (level) => {
    const logger = yargs._getLoggerInstance()
    if (!level) level = 'error'
    const emit = typeof level === 'function' ? level : logger[level]
    emit(self.help())
  }

  self.functionDescription = (fn) => {
    const description = fn.name ? __webpack_require__(159)(fn.name, '-') : __('generated-value')
    return ['(', description, ')'].join('')
  }

  self.stringifiedValues = function stringifiedValues (values, separator) {
    let string = ''
    const sep = separator || ', '
    const array = [].concat(values)

    if (!values || !array.length) return string

    array.forEach((value) => {
      if (string.length) string += sep
      string += JSON.stringify(value)
    })

    return string
  }

  // format the default-value-string displayed in
  // the right-hand column.
  function defaultString (value, defaultDescription) {
    let string = `[${__('default:')} `

    if (value === undefined && !defaultDescription) return null

    if (defaultDescription) {
      string += defaultDescription
    } else {
      switch (typeof value) {
        case 'string':
          string += `"${value}"`
          break
        case 'object':
          string += JSON.stringify(value)
          break
        default:
          string += value
      }
    }

    return `${string}]`
  }

  // guess the width of the console window, max-width 80.
  function windowWidth () {
    const maxWidth = 80
    if (typeof process === 'object' && process.stdout && process.stdout.columns) {
      return Math.min(maxWidth, process.stdout.columns)
    } else {
      return maxWidth
    }
  }

  // logic for displaying application version.
  let version = null
  self.version = (ver) => {
    version = ver
  }

  self.showVersion = () => {
    const logger = yargs._getLoggerInstance()
    logger.log(version)
  }

  self.reset = function reset (localLookup) {
    // do not reset wrap here
    // do not reset fails here
    failMessage = null
    failureOutput = false
    usages = []
    usageDisabled = false
    epilog = undefined
    examples = []
    commands = []
    descriptions = objFilter(descriptions, (k, v) => !localLookup[k])
    return self
  }

  let frozen
  self.freeze = function freeze () {
    frozen = {}
    frozen.failMessage = failMessage
    frozen.failureOutput = failureOutput
    frozen.usages = usages
    frozen.usageDisabled = usageDisabled
    frozen.epilog = epilog
    frozen.examples = examples
    frozen.commands = commands
    frozen.descriptions = descriptions
  }
  self.unfreeze = function unfreeze () {
    failMessage = frozen.failMessage
    failureOutput = frozen.failureOutput
    usages = frozen.usages
    usageDisabled = frozen.usageDisabled
    epilog = frozen.epilog
    examples = frozen.examples
    commands = frozen.commands
    descriptions = frozen.descriptions
    frozen = undefined
  }

  return self
}


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = () => {
	const pattern = [
		'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)',
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))'
	].join('|');

	return new RegExp(pattern, 'g');
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable yoda */
module.exports = x => {
	if (Number.isNaN(x)) {
		return false;
	}

	// code points are derived from:
	// http://www.unix.org/Public/UNIDATA/EastAsianWidth.txt
	if (
		x >= 0x1100 && (
			x <= 0x115f ||  // Hangul Jamo
			x === 0x2329 || // LEFT-POINTING ANGLE BRACKET
			x === 0x232a || // RIGHT-POINTING ANGLE BRACKET
			// CJK Radicals Supplement .. Enclosed CJK Letters and Months
			(0x2e80 <= x && x <= 0x3247 && x !== 0x303f) ||
			// Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
			(0x3250 <= x && x <= 0x4dbf) ||
			// CJK Unified Ideographs .. Yi Radicals
			(0x4e00 <= x && x <= 0xa4c6) ||
			// Hangul Jamo Extended-A
			(0xa960 <= x && x <= 0xa97c) ||
			// Hangul Syllables
			(0xac00 <= x && x <= 0xd7a3) ||
			// CJK Compatibility Ideographs
			(0xf900 <= x && x <= 0xfaff) ||
			// Vertical Forms
			(0xfe10 <= x && x <= 0xfe19) ||
			// CJK Compatibility Forms .. Small Form Variants
			(0xfe30 <= x && x <= 0xfe6b) ||
			// Halfwidth and Fullwidth Forms
			(0xff01 <= x && x <= 0xff60) ||
			(0xffe0 <= x && x <= 0xffe6) ||
			// Kana Supplement
			(0x1b000 <= x && x <= 0x1b001) ||
			// Enclosed Ideographic Supplement
			(0x1f200 <= x && x <= 0x1f251) ||
			// CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
			(0x20000 <= x && x <= 0x3fffd)
		)
	) {
		return true;
	}

	return false;
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var stringWidth = __webpack_require__(46)
var stripAnsi = __webpack_require__(47)
var wrap = __webpack_require__(153)
var align = {
  right: alignRight,
  center: alignCenter
}
var top = 0
var right = 1
var bottom = 2
var left = 3

function UI (opts) {
  this.width = opts.width
  this.wrap = opts.wrap
  this.rows = []
}

UI.prototype.span = function () {
  var cols = this.div.apply(this, arguments)
  cols.span = true
}

UI.prototype.div = function () {
  if (arguments.length === 0) this.div('')
  if (this.wrap && this._shouldApplyLayoutDSL.apply(this, arguments)) {
    return this._applyLayoutDSL(arguments[0])
  }

  var cols = []

  for (var i = 0, arg; (arg = arguments[i]) !== undefined; i++) {
    if (typeof arg === 'string') cols.push(this._colFromString(arg))
    else cols.push(arg)
  }

  this.rows.push(cols)
  return cols
}

UI.prototype._shouldApplyLayoutDSL = function () {
  return arguments.length === 1 && typeof arguments[0] === 'string' &&
    /[\t\n]/.test(arguments[0])
}

UI.prototype._applyLayoutDSL = function (str) {
  var _this = this
  var rows = str.split('\n')
  var leftColumnWidth = 0

  // simple heuristic for layout, make sure the
  // second column lines up along the left-hand.
  // don't allow the first column to take up more
  // than 50% of the screen.
  rows.forEach(function (row) {
    var columns = row.split('\t')
    if (columns.length > 1 && stringWidth(columns[0]) > leftColumnWidth) {
      leftColumnWidth = Math.min(
        Math.floor(_this.width * 0.5),
        stringWidth(columns[0])
      )
    }
  })

  // generate a table:
  //  replacing ' ' with padding calculations.
  //  using the algorithmically generated width.
  rows.forEach(function (row) {
    var columns = row.split('\t')
    _this.div.apply(_this, columns.map(function (r, i) {
      return {
        text: r.trim(),
        padding: _this._measurePadding(r),
        width: (i === 0 && columns.length > 1) ? leftColumnWidth : undefined
      }
    }))
  })

  return this.rows[this.rows.length - 1]
}

UI.prototype._colFromString = function (str) {
  return {
    text: str,
    padding: this._measurePadding(str)
  }
}

UI.prototype._measurePadding = function (str) {
  // measure padding without ansi escape codes
  var noAnsi = stripAnsi(str)
  return [0, noAnsi.match(/\s*$/)[0].length, 0, noAnsi.match(/^\s*/)[0].length]
}

UI.prototype.toString = function () {
  var _this = this
  var lines = []

  _this.rows.forEach(function (row, i) {
    _this.rowToString(row, lines)
  })

  // don't display any lines with the
  // hidden flag set.
  lines = lines.filter(function (line) {
    return !line.hidden
  })

  return lines.map(function (line) {
    return line.text
  }).join('\n')
}

UI.prototype.rowToString = function (row, lines) {
  var _this = this
  var padding
  var rrows = this._rasterize(row)
  var str = ''
  var ts
  var width
  var wrapWidth

  rrows.forEach(function (rrow, r) {
    str = ''
    rrow.forEach(function (col, c) {
      ts = '' // temporary string used during alignment/padding.
      width = row[c].width // the width with padding.
      wrapWidth = _this._negatePadding(row[c]) // the width without padding.

      ts += col

      for (var i = 0; i < wrapWidth - stringWidth(col); i++) {
        ts += ' '
      }

      // align the string within its column.
      if (row[c].align && row[c].align !== 'left' && _this.wrap) {
        ts = align[row[c].align](ts, wrapWidth)
        if (stringWidth(ts) < wrapWidth) ts += new Array(width - stringWidth(ts)).join(' ')
      }

      // apply border and padding to string.
      padding = row[c].padding || [0, 0, 0, 0]
      if (padding[left]) str += new Array(padding[left] + 1).join(' ')
      str += addBorder(row[c], ts, '| ')
      str += ts
      str += addBorder(row[c], ts, ' |')
      if (padding[right]) str += new Array(padding[right] + 1).join(' ')

      // if prior row is span, try to render the
      // current row on the prior line.
      if (r === 0 && lines.length > 0) {
        str = _this._renderInline(str, lines[lines.length - 1])
      }
    })

    // remove trailing whitespace.
    lines.push({
      text: str.replace(/ +$/, ''),
      span: row.span
    })
  })

  return lines
}

function addBorder (col, ts, style) {
  if (col.border) {
    if (/[.']-+[.']/.test(ts)) return ''
    else if (ts.trim().length) return style
    else return '  '
  }
  return ''
}

// if the full 'source' can render in
// the target line, do so.
UI.prototype._renderInline = function (source, previousLine) {
  var leadingWhitespace = source.match(/^ */)[0].length
  var target = previousLine.text
  var targetTextWidth = stringWidth(target.trimRight())

  if (!previousLine.span) return source

  // if we're not applying wrapping logic,
  // just always append to the span.
  if (!this.wrap) {
    previousLine.hidden = true
    return target + source
  }

  if (leadingWhitespace < targetTextWidth) return source

  previousLine.hidden = true

  return target.trimRight() + new Array(leadingWhitespace - targetTextWidth + 1).join(' ') + source.trimLeft()
}

UI.prototype._rasterize = function (row) {
  var _this = this
  var i
  var rrow
  var rrows = []
  var widths = this._columnWidths(row)
  var wrapped

  // word wrap all columns, and create
  // a data-structure that is easy to rasterize.
  row.forEach(function (col, c) {
    // leave room for left and right padding.
    col.width = widths[c]
    if (_this.wrap) wrapped = wrap(col.text, _this._negatePadding(col), {hard: true}).split('\n')
    else wrapped = col.text.split('\n')

    if (col.border) {
      wrapped.unshift('.' + new Array(_this._negatePadding(col) + 3).join('-') + '.')
      wrapped.push("'" + new Array(_this._negatePadding(col) + 3).join('-') + "'")
    }

    // add top and bottom padding.
    if (col.padding) {
      for (i = 0; i < (col.padding[top] || 0); i++) wrapped.unshift('')
      for (i = 0; i < (col.padding[bottom] || 0); i++) wrapped.push('')
    }

    wrapped.forEach(function (str, r) {
      if (!rrows[r]) rrows.push([])

      rrow = rrows[r]

      for (var i = 0; i < c; i++) {
        if (rrow[i] === undefined) rrow.push('')
      }
      rrow.push(str)
    })
  })

  return rrows
}

UI.prototype._negatePadding = function (col) {
  var wrapWidth = col.width
  if (col.padding) wrapWidth -= (col.padding[left] || 0) + (col.padding[right] || 0)
  if (col.border) wrapWidth -= 4
  return wrapWidth
}

UI.prototype._columnWidths = function (row) {
  var _this = this
  var widths = []
  var unset = row.length
  var unsetWidth
  var remainingWidth = this.width

  // column widths can be set in config.
  row.forEach(function (col, i) {
    if (col.width) {
      unset--
      widths[i] = col.width
      remainingWidth -= col.width
    } else {
      widths[i] = undefined
    }
  })

  // any unset widths should be calculated.
  if (unset) unsetWidth = Math.floor(remainingWidth / unset)
  widths.forEach(function (w, i) {
    if (!_this.wrap) widths[i] = row[i].width || stringWidth(row[i].text)
    else if (w === undefined) widths[i] = Math.max(unsetWidth, _minWidth(row[i]))
  })

  return widths
}

// calculates the minimum width of
// a column, based on padding preferences.
function _minWidth (col) {
  var padding = col.padding || []
  var minWidth = 1 + (padding[left] || 0) + (padding[right] || 0)
  if (col.border) minWidth += 4
  return minWidth
}

function getWindowWidth () {
  if (typeof process === 'object' && process.stdout && process.stdout.columns) return process.stdout.columns
}

function alignRight (str, width) {
  str = str.trim()
  var padding = ''
  var strWidth = stringWidth(str)

  if (strWidth < width) {
    padding = new Array(width - strWidth + 1).join(' ')
  }

  return padding + str
}

function alignCenter (str, width) {
  str = str.trim()
  var padding = ''
  var strWidth = stringWidth(str.trim())

  if (strWidth < width) {
    padding = new Array(parseInt((width - strWidth) / 2, 10) + 1).join(' ')
  }

  return padding + str
}

module.exports = function (opts) {
  opts = opts || {}

  return new UI({
    width: (opts || {}).width || getWindowWidth() || 80,
    wrap: typeof opts.wrap === 'boolean' ? opts.wrap : true
  })
}


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var stringWidth = __webpack_require__(154);
var stripAnsi = __webpack_require__(49);

var ESCAPES = [
	'\u001b',
	'\u009b'
];

var END_CODE = 39;

var ESCAPE_CODES = {
	0: 0,
	1: 22,
	2: 22,
	3: 23,
	4: 24,
	7: 27,
	8: 28,
	9: 29,
	30: 39,
	31: 39,
	32: 39,
	33: 39,
	34: 39,
	35: 39,
	36: 39,
	37: 39,
	90: 39,
	40: 49,
	41: 49,
	42: 49,
	43: 49,
	44: 49,
	45: 49,
	46: 49,
	47: 49
};

function wrapAnsi(code) {
	return ESCAPES[0] + '[' + code + 'm';
}

// calculate the length of words split on ' ', ignoring
// the extra characters added by ansi escape codes.
function wordLengths(str) {
	return str.split(' ').map(function (s) {
		return stringWidth(s);
	});
}

// wrap a long word across multiple rows.
// ansi escape codes do not count towards length.
function wrapWord(rows, word, cols) {
	var insideEscape = false;
	var visible = stripAnsi(rows[rows.length - 1]).length;

	for (var i = 0; i < word.length; i++) {
		var x = word[i];

		rows[rows.length - 1] += x;

		if (ESCAPES.indexOf(x) !== -1) {
			insideEscape = true;
		} else if (insideEscape && x === 'm') {
			insideEscape = false;
			continue;
		}

		if (insideEscape) {
			continue;
		}

		visible++;

		if (visible >= cols && i < word.length - 1) {
			rows.push('');
			visible = 0;
		}
	}

	// it's possible that the last row we copy over is only
	// ansi escape characters, handle this edge-case.
	if (!visible && rows[rows.length - 1].length > 0 && rows.length > 1) {
		rows[rows.length - 2] += rows.pop();
	}
}

// the wrap-ansi module can be invoked
// in either 'hard' or 'soft' wrap mode.
//
// 'hard' will never allow a string to take up more
// than cols characters.
//
// 'soft' allows long words to expand past the column length.
function exec(str, cols, opts) {
	var options = opts || {};

	var pre = '';
	var ret = '';
	var escapeCode;

	var lengths = wordLengths(str);
	var words = str.split(' ');
	var rows = [''];

	for (var i = 0, word; (word = words[i]) !== undefined; i++) {
		var rowLength = stringWidth(rows[rows.length - 1]);

		if (rowLength) {
			rows[rows.length - 1] += ' ';
			rowLength++;
		}

		// in 'hard' wrap mode, the length of a line is
		// never allowed to extend past 'cols'.
		if (lengths[i] > cols && options.hard) {
			if (rowLength) {
				rows.push('');
			}
			wrapWord(rows, word, cols);
			continue;
		}

		if (rowLength + lengths[i] > cols && rowLength > 0) {
			if (options.wordWrap === false && rowLength < cols) {
				wrapWord(rows, word, cols);
				continue;
			}

			rows.push('');
		}

		rows[rows.length - 1] += word;
	}

	pre = rows.map(function (r) {
		return r.trim();
	}).join('\n');

	for (var j = 0; j < pre.length; j++) {
		var y = pre[j];

		ret += y;

		if (ESCAPES.indexOf(y) !== -1) {
			var code = parseFloat(/[0-9][^m]*/.exec(pre.slice(j, j + 4)));
			escapeCode = code === END_CODE ? null : code;
		}

		if (escapeCode && ESCAPE_CODES[escapeCode]) {
			if (pre[j + 1] === '\n') {
				ret += wrapAnsi(ESCAPE_CODES[escapeCode]);
			} else if (y === '\n') {
				ret += wrapAnsi(escapeCode);
			}
		}
	}

	return ret;
}

// for each line break, invoke the method separately.
module.exports = function (str, cols, opts) {
	return String(str).split('\n').map(function (substr) {
		return exec(substr, cols, opts);
	}).join('\n');
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var stripAnsi = __webpack_require__(49);
var codePointAt = __webpack_require__(156);
var isFullwidthCodePoint = __webpack_require__(157);

// https://github.com/nodejs/io.js/blob/cff7300a578be1b10001f2d967aaedc88aee6402/lib/readline.js#L1345
module.exports = function (str) {
	if (typeof str !== 'string' || str.length === 0) {
		return 0;
	}

	var width = 0;

	str = stripAnsi(str);

	for (var i = 0; i < str.length; i++) {
		var code = codePointAt(str, i);

		// ignore control characters
		if (code <= 0x1f || (code >= 0x7f && code <= 0x9f)) {
			continue;
		}

		// surrogates
		if (code >= 0x10000) {
			i++;
		}

		if (isFullwidthCodePoint(code)) {
			width += 2;
		} else {
			width++;
		}
	}

	return width;
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function () {
	return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable babel/new-cap, xo/throw-new-error */

module.exports = function (str, pos) {
	if (str === null || str === undefined) {
		throw TypeError();
	}

	str = String(str);

	var size = str.length;
	var i = pos ? Number(pos) : 0;

	if (Number.isNaN(i)) {
		i = 0;
	}

	if (i < 0 || i >= size) {
		return undefined;
	}

	var first = str.charCodeAt(i);

	if (first >= 0xD800 && first <= 0xDBFF && size > i + 1) {
		var second = str.charCodeAt(i + 1);

		if (second >= 0xDC00 && second <= 0xDFFF) {
			return ((first - 0xD800) * 0x400) + second - 0xDC00 + 0x10000;
		}
	}

	return first;
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var numberIsNan = __webpack_require__(158);

module.exports = function (x) {
	if (numberIsNan(x)) {
		return false;
	}

	// https://github.com/nodejs/io.js/blob/cff7300a578be1b10001f2d967aaedc88aee6402/lib/readline.js#L1369

	// code points are derived from:
	// http://www.unix.org/Public/UNIDATA/EastAsianWidth.txt
	if (x >= 0x1100 && (
		x <= 0x115f ||  // Hangul Jamo
		0x2329 === x || // LEFT-POINTING ANGLE BRACKET
		0x232a === x || // RIGHT-POINTING ANGLE BRACKET
		// CJK Radicals Supplement .. Enclosed CJK Letters and Months
		(0x2e80 <= x && x <= 0x3247 && x !== 0x303f) ||
		// Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
		0x3250 <= x && x <= 0x4dbf ||
		// CJK Unified Ideographs .. Yi Radicals
		0x4e00 <= x && x <= 0xa4c6 ||
		// Hangul Jamo Extended-A
		0xa960 <= x && x <= 0xa97c ||
		// Hangul Syllables
		0xac00 <= x && x <= 0xd7a3 ||
		// CJK Compatibility Ideographs
		0xf900 <= x && x <= 0xfaff ||
		// Vertical Forms
		0xfe10 <= x && x <= 0xfe19 ||
		// CJK Compatibility Forms .. Small Form Variants
		0xfe30 <= x && x <= 0xfe6b ||
		// Halfwidth and Fullwidth Forms
		0xff01 <= x && x <= 0xff60 ||
		0xffe0 <= x && x <= 0xffe6 ||
		// Kana Supplement
		0x1b000 <= x && x <= 0x1b001 ||
		// Enclosed Ideographic Supplement
		0x1f200 <= x && x <= 0x1f251 ||
		// CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
		0x20000 <= x && x <= 0x3fffd)) {
		return true;
	}

	return false;
}


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Number.isNaN || function (x) {
	return x !== x;
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str, sep) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	sep = typeof sep === 'undefined' ? '_' : sep;

	return str
		.replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2')
		.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
		.toLowerCase();
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const argsert = __webpack_require__(43)
const objFilter = __webpack_require__(25)
const specialKeys = ['$0', '--', '_']

// validation-type-stuff, missing params,
// bad implications, custom checks.
module.exports = function validation (yargs, usage, y18n) {
  const __ = y18n.__
  const __n = y18n.__n
  const self = {}

  // validate appropriate # of non-option
  // arguments were provided, i.e., '_'.
  self.nonOptionCount = function nonOptionCount (argv) {
    const demandedCommands = yargs.getDemandedCommands()
    // don't count currently executing commands
    const _s = argv._.length - yargs.getContext().commands.length

    if (demandedCommands._ && (_s < demandedCommands._.min || _s > demandedCommands._.max)) {
      if (_s < demandedCommands._.min) {
        if (demandedCommands._.minMsg !== undefined) {
          usage.fail(
            // replace $0 with observed, $1 with expected.
            demandedCommands._.minMsg ? demandedCommands._.minMsg.replace(/\$0/g, _s).replace(/\$1/, demandedCommands._.min) : null
          )
        } else {
          usage.fail(
            __('Not enough non-option arguments: got %s, need at least %s', _s, demandedCommands._.min)
          )
        }
      } else if (_s > demandedCommands._.max) {
        if (demandedCommands._.maxMsg !== undefined) {
          usage.fail(
            // replace $0 with observed, $1 with expected.
            demandedCommands._.maxMsg ? demandedCommands._.maxMsg.replace(/\$0/g, _s).replace(/\$1/, demandedCommands._.max) : null
          )
        } else {
          usage.fail(
          __('Too many non-option arguments: got %s, maximum of %s', _s, demandedCommands._.max)
          )
        }
      }
    }
  }

  // validate the appropriate # of <required>
  // positional arguments were provided:
  self.positionalCount = function positionalCount (required, observed) {
    if (observed < required) {
      usage.fail(
        __('Not enough non-option arguments: got %s, need at least %s', observed, required)
      )
    }
  }

  // make sure all the required arguments are present.
  self.requiredArguments = function requiredArguments (argv) {
    const demandedOptions = yargs.getDemandedOptions()
    let missing = null

    Object.keys(demandedOptions).forEach((key) => {
      if (!argv.hasOwnProperty(key) || typeof argv[key] === 'undefined') {
        missing = missing || {}
        missing[key] = demandedOptions[key]
      }
    })

    if (missing) {
      const customMsgs = []
      Object.keys(missing).forEach((key) => {
        const msg = missing[key]
        if (msg && customMsgs.indexOf(msg) < 0) {
          customMsgs.push(msg)
        }
      })

      const customMsg = customMsgs.length ? `\n${customMsgs.join('\n')}` : ''

      usage.fail(__n(
        'Missing required argument: %s',
        'Missing required arguments: %s',
        Object.keys(missing).length,
        Object.keys(missing).join(', ') + customMsg
      ))
    }
  }

  // check for unknown arguments (strict-mode).
  self.unknownArguments = function unknownArguments (argv, aliases, positionalMap) {
    const commandKeys = yargs.getCommandInstance().getCommands()
    const unknown = []
    const currentContext = yargs.getContext()

    Object.keys(argv).forEach((key) => {
      if (specialKeys.indexOf(key) === -1 &&
        !positionalMap.hasOwnProperty(key) &&
        !yargs._getParseContext().hasOwnProperty(key) &&
        !aliases.hasOwnProperty(key)
      ) {
        unknown.push(key)
      }
    })

    if (commandKeys.length > 0) {
      argv._.slice(currentContext.commands.length).forEach((key) => {
        if (commandKeys.indexOf(key) === -1) {
          unknown.push(key)
        }
      })
    }

    if (unknown.length > 0) {
      usage.fail(__n(
        'Unknown argument: %s',
        'Unknown arguments: %s',
        unknown.length,
        unknown.join(', ')
      ))
    }
  }

  // validate arguments limited to enumerated choices
  self.limitedChoices = function limitedChoices (argv) {
    const options = yargs.getOptions()
    const invalid = {}

    if (!Object.keys(options.choices).length) return

    Object.keys(argv).forEach((key) => {
      if (specialKeys.indexOf(key) === -1 &&
        options.choices.hasOwnProperty(key)) {
        [].concat(argv[key]).forEach((value) => {
          // TODO case-insensitive configurability
          if (options.choices[key].indexOf(value) === -1 &&
              value !== undefined) {
            invalid[key] = (invalid[key] || []).concat(value)
          }
        })
      }
    })

    const invalidKeys = Object.keys(invalid)

    if (!invalidKeys.length) return

    let msg = __('Invalid values:')
    invalidKeys.forEach((key) => {
      msg += `\n  ${__(
        'Argument: %s, Given: %s, Choices: %s',
        key,
        usage.stringifiedValues(invalid[key]),
        usage.stringifiedValues(options.choices[key])
      )}`
    })
    usage.fail(msg)
  }

  // custom checks, added using the `check` option on yargs.
  let checks = []
  self.check = function check (f, global) {
    checks.push({
      func: f,
      global
    })
  }

  self.customChecks = function customChecks (argv, aliases) {
    for (let i = 0, f; (f = checks[i]) !== undefined; i++) {
      const func = f.func
      let result = null
      try {
        result = func(argv, aliases)
      } catch (err) {
        usage.fail(err.message ? err.message : err, err)
        continue
      }

      if (!result) {
        usage.fail(__('Argument check failed: %s', func.toString()))
      } else if (typeof result === 'string' || result instanceof Error) {
        usage.fail(result.toString(), result)
      }
    }
  }

  // check implications, argument foo implies => argument bar.
  let implied = {}
  self.implies = function implies (key, value) {
    argsert('<string|object> [array|number|string]', [key, value], arguments.length)

    if (typeof key === 'object') {
      Object.keys(key).forEach((k) => {
        self.implies(k, key[k])
      })
    } else {
      yargs.global(key)
      if (!implied[key]) {
        implied[key] = []
      }
      if (Array.isArray(value)) {
        value.forEach((i) => self.implies(key, i))
      } else {
        implied[key].push(value)
      }
    }
  }
  self.getImplied = function getImplied () {
    return implied
  }

  self.implications = function implications (argv) {
    const implyFail = []

    Object.keys(implied).forEach((key) => {
      const origKey = key
      ;(implied[key] || []).forEach((value) => {
        let num
        let key = origKey
        const origValue = value

        // convert string '1' to number 1
        num = Number(key)
        key = isNaN(num) ? key : num

        if (typeof key === 'number') {
          // check length of argv._
          key = argv._.length >= key
        } else if (key.match(/^--no-.+/)) {
          // check if key doesn't exist
          key = key.match(/^--no-(.+)/)[1]
          key = !argv[key]
        } else {
          // check if key exists
          key = argv[key]
        }

        num = Number(value)
        value = isNaN(num) ? value : num

        if (typeof value === 'number') {
          value = argv._.length >= value
        } else if (value.match(/^--no-.+/)) {
          value = value.match(/^--no-(.+)/)[1]
          value = !argv[value]
        } else {
          value = argv[value]
        }
        if (key && !value) {
          implyFail.push(` ${origKey} -> ${origValue}`)
        }
      })
    })

    if (implyFail.length) {
      let msg = `${__('Implications failed:')}\n`

      implyFail.forEach((value) => {
        msg += (value)
      })

      usage.fail(msg)
    }
  }

  let conflicting = {}
  self.conflicts = function conflicts (key, value) {
    argsert('<string|object> [array|string]', [key, value], arguments.length)

    if (typeof key === 'object') {
      Object.keys(key).forEach((k) => {
        self.conflicts(k, key[k])
      })
    } else {
      yargs.global(key)
      if (!conflicting[key]) {
        conflicting[key] = []
      }
      if (Array.isArray(value)) {
        value.forEach((i) => self.conflicts(key, i))
      } else {
        conflicting[key].push(value)
      }
    }
  }
  self.getConflicting = () => conflicting

  self.conflicting = function conflictingFn (argv) {
    Object.keys(argv).forEach((key) => {
      if (conflicting[key]) {
        conflicting[key].forEach((value) => {
          // we default keys to 'undefined' that have been configured, we should not
          // apply conflicting check unless they are a value other than 'undefined'.
          if (value && argv[key] !== undefined && argv[value] !== undefined) {
            usage.fail(__(`Arguments ${key} and ${value} are mutually exclusive`))
          }
        })
      }
    })
  }

  self.recommendCommands = function recommendCommands (cmd, potentialCommands) {
    const distance = __webpack_require__(161)
    const threshold = 3 // if it takes more than three edits, let's move on.
    potentialCommands = potentialCommands.sort((a, b) => b.length - a.length)

    let recommended = null
    let bestDistance = Infinity
    for (let i = 0, candidate; (candidate = potentialCommands[i]) !== undefined; i++) {
      const d = distance(cmd, candidate)
      if (d <= threshold && d < bestDistance) {
        bestDistance = d
        recommended = candidate
      }
    }
    if (recommended) usage.fail(__('Did you mean %s?', recommended))
  }

  self.reset = function reset (localLookup) {
    implied = objFilter(implied, (k, v) => !localLookup[k])
    conflicting = objFilter(conflicting, (k, v) => !localLookup[k])
    checks = checks.filter(c => c.global)
    return self
  }

  let frozen
  self.freeze = function freeze () {
    frozen = {}
    frozen.implied = implied
    frozen.checks = checks
    frozen.conflicting = conflicting
  }
  self.unfreeze = function unfreeze () {
    implied = frozen.implied
    checks = frozen.checks
    conflicting = frozen.conflicting
    frozen = undefined
  }

  return self
}


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2011 Andrei Mackenzie

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// levenshtein distance algorithm, pulled from Andrei Mackenzie's MIT licensed.
// gist, which can be found here: https://gist.github.com/andrei-m/982927

// Compute the edit distance between the two given strings
module.exports = function levenshtein (a, b) {
  if (a.length === 0) return b.length
  if (b.length === 0) return a.length

  const matrix = []

  // increment along the first column of each row
  let i
  for (i = 0; i <= b.length; i++) {
    matrix[i] = [i]
  }

  // increment each column in the first row
  let j
  for (j = 0; j <= a.length; j++) {
    matrix[0][j] = j
  }

  // Fill in the rest of the matrix
  for (i = 1; i <= b.length; i++) {
    for (j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
                                Math.min(matrix[i][j - 1] + 1, // insertion
                                         matrix[i - 1][j] + 1)) // deletion
      }
    }
  }

  return matrix[b.length][a.length]
}


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(1)
var path = __webpack_require__(0)
var util = __webpack_require__(10)

function Y18N (opts) {
  // configurable options.
  opts = opts || {}
  this.directory = opts.directory || './locales'
  this.updateFiles = typeof opts.updateFiles === 'boolean' ? opts.updateFiles : true
  this.locale = opts.locale || 'en'
  this.fallbackToLanguage = typeof opts.fallbackToLanguage === 'boolean' ? opts.fallbackToLanguage : true

  // internal stuff.
  this.cache = {}
  this.writeQueue = []
}

Y18N.prototype.__ = function () {
  var args = Array.prototype.slice.call(arguments)
  var str = args.shift()
  var cb = function () {} // start with noop.

  if (typeof args[args.length - 1] === 'function') cb = args.pop()
  cb = cb || function () {} // noop.

  if (!this.cache[this.locale]) this._readLocaleFile()

  // we've observed a new string, update the language file.
  if (!this.cache[this.locale][str] && this.updateFiles) {
    this.cache[this.locale][str] = str

    // include the current directory and locale,
    // since these values could change before the
    // write is performed.
    this._enqueueWrite([this.directory, this.locale, cb])
  } else {
    cb()
  }

  return util.format.apply(util, [this.cache[this.locale][str] || str].concat(args))
}

Y18N.prototype._enqueueWrite = function (work) {
  this.writeQueue.push(work)
  if (this.writeQueue.length === 1) this._processWriteQueue()
}

Y18N.prototype._processWriteQueue = function () {
  var _this = this
  var work = this.writeQueue[0]

  // destructure the enqueued work.
  var directory = work[0]
  var locale = work[1]
  var cb = work[2]

  var languageFile = this._resolveLocaleFile(directory, locale)
  var serializedLocale = JSON.stringify(this.cache[locale], null, 2)

  fs.writeFile(languageFile, serializedLocale, 'utf-8', function (err) {
    _this.writeQueue.shift()
    if (_this.writeQueue.length > 0) _this._processWriteQueue()
    cb(err)
  })
}

Y18N.prototype._readLocaleFile = function () {
  var localeLookup = {}
  var languageFile = this._resolveLocaleFile(this.directory, this.locale)

  try {
    localeLookup = JSON.parse(fs.readFileSync(languageFile, 'utf-8'))
  } catch (err) {
    if (err instanceof SyntaxError) {
      err.message = 'syntax error in ' + languageFile
    }

    if (err.code === 'ENOENT') localeLookup = {}
    else throw err
  }

  this.cache[this.locale] = localeLookup
}

Y18N.prototype._resolveLocaleFile = function (directory, locale) {
  var file = path.resolve(directory, './', locale + '.json')
  if (this.fallbackToLanguage && !this._fileExistsSync(file) && ~locale.lastIndexOf('_')) {
    // attempt fallback to language only
    var languageFile = path.resolve(directory, './', locale.split('_')[0] + '.json')
    if (this._fileExistsSync(languageFile)) file = languageFile
  }
  return file
}

// this only exists because fs.existsSync() "will be deprecated"
// see https://nodejs.org/api/fs.html#fs_fs_existssync_path
Y18N.prototype._fileExistsSync = function (file) {
  try {
    return fs.statSync(file).isFile()
  } catch (err) {
    return false
  }
}

Y18N.prototype.__n = function () {
  var args = Array.prototype.slice.call(arguments)
  var singular = args.shift()
  var plural = args.shift()
  var quantity = args.shift()

  var cb = function () {} // start with noop.
  if (typeof args[args.length - 1] === 'function') cb = args.pop()

  if (!this.cache[this.locale]) this._readLocaleFile()

  var str = quantity === 1 ? singular : plural
  if (this.cache[this.locale][singular]) {
    str = this.cache[this.locale][singular][quantity === 1 ? 'one' : 'other']
  }

  // we've observed a new string, update the language file.
  if (!this.cache[this.locale][singular] && this.updateFiles) {
    this.cache[this.locale][singular] = {
      one: singular,
      other: plural
    }

    // include the current directory and locale,
    // since these values could change before the
    // write is performed.
    this._enqueueWrite([this.directory, this.locale, cb])
  } else {
    cb()
  }

  // if a %d placeholder is provided, add quantity
  // to the arguments expanded by util.format.
  var values = [str]
  if (~str.indexOf('%d')) values.push(quantity)

  return util.format.apply(util, values.concat(args))
}

Y18N.prototype.setLocale = function (locale) {
  this.locale = locale
}

Y18N.prototype.getLocale = function () {
  return this.locale
}

Y18N.prototype.updateLocale = function (obj) {
  if (!this.cache[this.locale]) this._readLocaleFile()

  for (var key in obj) {
    this.cache[this.locale][key] = obj[key]
  }
}

module.exports = function (opts) {
  var y18n = new Y18N(opts)

  // bind all functions to y18n, so that
  // they can be used in isolation.
  for (var key in y18n) {
    if (typeof y18n[key] === 'function') {
      y18n[key] = y18n[key].bind(y18n)
    }
  }

  return y18n
}


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(1)
const path = __webpack_require__(0)
const YError = __webpack_require__(17)

let previouslyVisitedConfigs = []

function checkForCircularExtends (path) {
  if (previouslyVisitedConfigs.indexOf(path) > -1) {
    throw new YError(`Circular extended configurations: '${path}'.`)
  }
}

function getPathToDefaultConfig (cwd, pathToExtend) {
  return path.resolve(cwd, pathToExtend)
}

function applyExtends (config, cwd) {
  let defaultConfig = {}

  if (config.hasOwnProperty('extends')) {
    if (typeof config.extends !== 'string') return defaultConfig
    const isPath = /\.json$/.test(config.extends)
    let pathToDefault = null
    if (!isPath) {
      try {
        pathToDefault = /*require.resolve*/(!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
      } catch (err) {
        // most likely this simply isn't a module.
      }
    } else {
      pathToDefault = getPathToDefaultConfig(cwd, config.extends)
    }
    // maybe the module uses key for some other reason,
    // err on side of caution.
    if (!pathToDefault && !isPath) return config

    checkForCircularExtends(pathToDefault)

    previouslyVisitedConfigs.push(pathToDefault)

    defaultConfig = isPath ? JSON.parse(fs.readFileSync(pathToDefault, 'utf8')) : !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    delete config.extends
    defaultConfig = applyExtends(defaultConfig, path.dirname(pathToDefault))
  }

  previouslyVisitedConfigs = []

  return Object.assign({}, defaultConfig, config)
}

module.exports = applyExtends


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Call this function in a another function to find out the file from
// which that function was called from. (Inspects the v8 stack trace)
//
// Inspired by http://stackoverflow.com/questions/13227489

module.exports = function getCallerFile(_position) {
  var oldPrepareStackTrace = Error.prepareStackTrace;
  Error.prepareStackTrace = function(err, stack) { return stack; };
  var stack = new Error().stack;
  Error.prepareStackTrace = oldPrepareStackTrace;

  var position = _position ? _position : 2;

  // stack[0] holds this file
  // stack[1] holds where this function was called
  // stack[2] holds the file we're interested in
  return stack[position] ? stack[position].getFileName() : undefined;
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const path = __webpack_require__(0);
const locatePath = __webpack_require__(166);

module.exports = (filename, opts) => {
	opts = opts || {};

	const startDir = path.resolve(opts.cwd || '');
	const root = path.parse(startDir).root;

	const filenames = [].concat(filename);

	return new Promise(resolve => {
		(function find(dir) {
			locatePath(filenames, {cwd: dir}).then(file => {
				if (file) {
					resolve(path.join(dir, file));
				} else if (dir === root) {
					resolve(null);
				} else {
					find(path.dirname(dir));
				}
			});
		})(startDir);
	});
};

module.exports.sync = (filename, opts) => {
	opts = opts || {};

	let dir = path.resolve(opts.cwd || '');
	const root = path.parse(dir).root;

	const filenames = [].concat(filename);

	// eslint-disable-next-line no-constant-condition
	while (true) {
		const file = locatePath.sync(filenames, {cwd: dir});

		if (file) {
			return path.join(dir, file);
		} else if (dir === root) {
			return null;
		}

		dir = path.dirname(dir);
	}
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const path = __webpack_require__(0);
const pathExists = __webpack_require__(167);
const pLocate = __webpack_require__(168);

module.exports = (iterable, opts) => {
	opts = Object.assign({
		cwd: process.cwd()
	}, opts);

	return pLocate(iterable, el => pathExists(path.resolve(opts.cwd, el)), opts);
};

module.exports.sync = (iterable, opts) => {
	opts = Object.assign({
		cwd: process.cwd()
	}, opts);

	for (const el of iterable) {
		if (pathExists.sync(path.resolve(opts.cwd, el))) {
			return el;
		}
	}
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const fs = __webpack_require__(1);

module.exports = fp => new Promise(resolve => {
	fs.access(fp, err => {
		resolve(!err);
	});
});

module.exports.sync = fp => {
	try {
		fs.accessSync(fp);
		return true;
	} catch (err) {
		return false;
	}
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const pLimit = __webpack_require__(169);

class EndError extends Error {
	constructor(value) {
		super();
		this.value = value;
	}
}

// the input can also be a promise, so we `Promise.all()` them both
const finder = el => Promise.all(el).then(val => val[1] === true && Promise.reject(new EndError(val[0])));

module.exports = (iterable, tester, opts) => {
	opts = Object.assign({
		concurrency: Infinity,
		preserveOrder: true
	}, opts);

	const limit = pLimit(opts.concurrency);

	// start all the promises concurrently with optional limit
	const items = Array.from(iterable).map(el => [el, limit(() => Promise.resolve(el).then(tester))]);

	// check the promises either serially or concurrently
	const checkLimit = pLimit(opts.preserveOrder ? 1 : Infinity);

	return Promise.all(items.map(el => checkLimit(() => finder(el))))
		.then(() => {})
		.catch(err => err instanceof EndError ? err.value : Promise.reject(err));
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const pTry = __webpack_require__(170);

module.exports = concurrency => {
	if (concurrency < 1) {
		throw new TypeError('Expected `concurrency` to be a number from 1 and up');
	}

	const queue = [];
	let activeCount = 0;

	const next = () => {
		activeCount--;

		if (queue.length > 0) {
			queue.shift()();
		}
	};

	return fn => new Promise((resolve, reject) => {
		const run = () => {
			activeCount++;

			pTry(() => fn()).then(
				val => {
					resolve(val);
					next();
				},
				err => {
					reject(err);
					next();
				}
			);
		};

		if (activeCount < concurrency) {
			run();
		} else {
			queue.push(run);
		}
	});
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = cb => new Promise(resolve => {
	resolve(cb());
});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (_require) {
  _require = _require || !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  var main = _require.main
  if (main && isIISNode(main)) return handleIISNode(main)
  else return main ? main.filename : process.cwd()
}

function isIISNode (main) {
  return /\\iisnode\\/.test(main.filename)
}

function handleIISNode (main) {
  if (!main.children.length) {
    return main.filename
  } else {
    return main.children[0].filename
  }
}


/***/ }),
/* 172 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 172;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const execa = __webpack_require__(174);
const lcid = __webpack_require__(204);
const mem = __webpack_require__(207);

const defaultOpts = {spawn: true};
const defaultLocale = 'en_US';

function getEnvLocale(env) {
	env = env || process.env;
	return env.LC_ALL || env.LC_MESSAGES || env.LANG || env.LANGUAGE;
}

function parseLocale(x) {
	const env = x.split('\n').reduce((env, def) => {
		def = def.split('=');
		env[def[0]] = def[1].replace(/^"|"$/g, '');
		return env;
	}, {});
	return getEnvLocale(env);
}

function getLocale(str) {
	return (str && str.replace(/[.:].*/, ''));
}

function getAppleLocale() {
	return execa.stdout('defaults', ['read', '-g', 'AppleLocale']);
}

function getAppleLocaleSync() {
	return execa.sync('defaults', ['read', '-g', 'AppleLocale']).stdout;
}

function getUnixLocale() {
	if (process.platform === 'darwin') {
		return getAppleLocale();
	}

	return execa.stdout('locale')
		.then(stdout => getLocale(parseLocale(stdout)));
}

function getUnixLocaleSync() {
	if (process.platform === 'darwin') {
		return getAppleLocaleSync();
	}

	return getLocale(parseLocale(execa.sync('locale').stdout));
}

function getWinLocale() {
	return execa.stdout('wmic', ['os', 'get', 'locale'])
		.then(stdout => {
			const lcidCode = parseInt(stdout.replace('Locale', ''), 16);
			return lcid.from(lcidCode);
		});
}

function getWinLocaleSync() {
	const stdout = execa.sync('wmic', ['os', 'get', 'locale']).stdout;
	const lcidCode = parseInt(stdout.replace('Locale', ''), 16);
	return lcid.from(lcidCode);
}

module.exports = mem(opts => {
	opts = opts || defaultOpts;
	const envLocale = getEnvLocale();
	let thenable;

	if (envLocale || opts.spawn === false) {
		thenable = Promise.resolve(getLocale(envLocale));
	} else if (process.platform === 'win32') {
		thenable = getWinLocale();
	} else {
		thenable = getUnixLocale();
	}

	return thenable.then(locale => locale || defaultLocale)
		.catch(() => defaultLocale);
});

module.exports.sync = mem(opts => {
	opts = opts || defaultOpts;
	const envLocale = getEnvLocale();
	let res;

	if (envLocale || opts.spawn === false) {
		res = getLocale(envLocale);
	} else {
		try {
			if (process.platform === 'win32') {
				res = getWinLocaleSync();
			} else {
				res = getUnixLocaleSync();
			}
		} catch (err) {}
	}

	return res || defaultLocale;
});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const childProcess = __webpack_require__(52);
const util = __webpack_require__(10);
const crossSpawn = __webpack_require__(175);
const stripEof = __webpack_require__(190);
const npmRunPath = __webpack_require__(191);
const isStream = __webpack_require__(193);
const _getStream = __webpack_require__(194);
const pFinally = __webpack_require__(197);
const onExit = __webpack_require__(198);
const errname = __webpack_require__(202);
const stdio = __webpack_require__(203);

const TEN_MEGABYTES = 1000 * 1000 * 10;

function handleArgs(cmd, args, opts) {
	let parsed;

	if (opts && opts.env && opts.extendEnv !== false) {
		opts.env = Object.assign({}, process.env, opts.env);
	}

	if (opts && opts.__winShell === true) {
		delete opts.__winShell;
		parsed = {
			command: cmd,
			args,
			options: opts,
			file: cmd,
			original: cmd
		};
	} else {
		parsed = crossSpawn._parse(cmd, args, opts);
	}

	opts = Object.assign({
		maxBuffer: TEN_MEGABYTES,
		stripEof: true,
		preferLocal: true,
		localDir: parsed.options.cwd || process.cwd(),
		encoding: 'utf8',
		reject: true,
		cleanup: true
	}, parsed.options);

	opts.stdio = stdio(opts);

	if (opts.preferLocal) {
		opts.env = npmRunPath.env(Object.assign({}, opts, {cwd: opts.localDir}));
	}

	return {
		cmd: parsed.command,
		args: parsed.args,
		opts,
		parsed
	};
}

function handleInput(spawned, opts) {
	const input = opts.input;

	if (input === null || input === undefined) {
		return;
	}

	if (isStream(input)) {
		input.pipe(spawned.stdin);
	} else {
		spawned.stdin.end(input);
	}
}

function handleOutput(opts, val) {
	if (val && opts.stripEof) {
		val = stripEof(val);
	}

	return val;
}

function handleShell(fn, cmd, opts) {
	let file = '/bin/sh';
	let args = ['-c', cmd];

	opts = Object.assign({}, opts);

	if (process.platform === 'win32') {
		opts.__winShell = true;
		file = process.env.comspec || 'cmd.exe';
		args = ['/s', '/c', `"${cmd}"`];
		opts.windowsVerbatimArguments = true;
	}

	if (opts.shell) {
		file = opts.shell;
		delete opts.shell;
	}

	return fn(file, args, opts);
}

function getStream(process, stream, encoding, maxBuffer) {
	if (!process[stream]) {
		return null;
	}

	let ret;

	if (encoding) {
		ret = _getStream(process[stream], {
			encoding,
			maxBuffer
		});
	} else {
		ret = _getStream.buffer(process[stream], {maxBuffer});
	}

	return ret.catch(err => {
		err.stream = stream;
		err.message = `${stream} ${err.message}`;
		throw err;
	});
}

module.exports = (cmd, args, opts) => {
	let joinedCmd = cmd;

	if (Array.isArray(args) && args.length > 0) {
		joinedCmd += ' ' + args.join(' ');
	}

	const parsed = handleArgs(cmd, args, opts);
	const encoding = parsed.opts.encoding;
	const maxBuffer = parsed.opts.maxBuffer;

	let spawned;
	try {
		spawned = childProcess.spawn(parsed.cmd, parsed.args, parsed.opts);
	} catch (err) {
		return Promise.reject(err);
	}

	let removeExitHandler;
	if (parsed.opts.cleanup) {
		removeExitHandler = onExit(() => {
			spawned.kill();
		});
	}

	let timeoutId = null;
	let timedOut = false;

	const cleanupTimeout = () => {
		if (timeoutId) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}
	};

	if (parsed.opts.timeout > 0) {
		timeoutId = setTimeout(() => {
			timeoutId = null;
			timedOut = true;
			spawned.kill(parsed.opts.killSignal);
		}, parsed.opts.timeout);
	}

	const processDone = new Promise(resolve => {
		spawned.on('exit', (code, signal) => {
			cleanupTimeout();
			resolve({code, signal});
		});

		spawned.on('error', err => {
			cleanupTimeout();
			resolve({err});
		});

		if (spawned.stdin) {
			spawned.stdin.on('error', err => {
				cleanupTimeout();
				resolve({err});
			});
		}
	});

	function destroy() {
		if (spawned.stdout) {
			spawned.stdout.destroy();
		}

		if (spawned.stderr) {
			spawned.stderr.destroy();
		}
	}

	const promise = pFinally(Promise.all([
		processDone,
		getStream(spawned, 'stdout', encoding, maxBuffer),
		getStream(spawned, 'stderr', encoding, maxBuffer)
	]).then(arr => {
		const result = arr[0];
		const stdout = arr[1];
		const stderr = arr[2];

		let err = result.err;
		const code = result.code;
		const signal = result.signal;

		if (removeExitHandler) {
			removeExitHandler();
		}

		if (err || code !== 0 || signal !== null) {
			if (!err) {
				let output = '';

				if (Array.isArray(parsed.opts.stdio)) {
					if (parsed.opts.stdio[2] !== 'inherit') {
						output += output.length > 0 ? stderr : `\n${stderr}`;
					}

					if (parsed.opts.stdio[1] !== 'inherit') {
						output += `\n${stdout}`;
					}
				} else if (parsed.opts.stdio !== 'inherit') {
					output = `\n${stderr}${stdout}`;
				}

				err = new Error(`Command failed: ${joinedCmd}${output}`);
				err.code = code < 0 ? errname(code) : code;
			}

			// TODO: missing some timeout logic for killed
			// https://github.com/nodejs/node/blob/master/lib/child_process.js#L203
			// err.killed = spawned.killed || killed;
			err.killed = err.killed || spawned.killed;

			err.stdout = stdout;
			err.stderr = stderr;
			err.failed = true;
			err.signal = signal || null;
			err.cmd = joinedCmd;
			err.timedOut = timedOut;

			if (!parsed.opts.reject) {
				return err;
			}

			throw err;
		}

		return {
			stdout: handleOutput(parsed.opts, stdout),
			stderr: handleOutput(parsed.opts, stderr),
			code: 0,
			failed: false,
			killed: false,
			signal: null,
			cmd: joinedCmd,
			timedOut: false
		};
	}), destroy);

	crossSpawn._enoent.hookChildProcess(spawned, parsed.parsed);

	handleInput(spawned, parsed.opts);

	spawned.then = promise.then.bind(promise);
	spawned.catch = promise.catch.bind(promise);

	return spawned;
};

module.exports.stdout = function () {
	// TODO: set `stderr: 'ignore'` when that option is implemented
	return module.exports.apply(null, arguments).then(x => x.stdout);
};

module.exports.stderr = function () {
	// TODO: set `stdout: 'ignore'` when that option is implemented
	return module.exports.apply(null, arguments).then(x => x.stderr);
};

module.exports.shell = (cmd, opts) => handleShell(module.exports, cmd, opts);

module.exports.sync = (cmd, args, opts) => {
	const parsed = handleArgs(cmd, args, opts);

	if (isStream(parsed.opts.input)) {
		throw new TypeError('The `input` option cannot be a stream in sync mode');
	}

	const result = childProcess.spawnSync(parsed.cmd, parsed.args, parsed.opts);

	if (result.error || result.status !== 0) {
		throw (result.error || new Error(result.stderr === '' ? result.stdout : result.stderr));
	}

	result.stdout = handleOutput(parsed.opts, result.stdout);
	result.stderr = handleOutput(parsed.opts, result.stderr);

	return result;
};

module.exports.shellSync = (cmd, opts) => handleShell(module.exports.sync, cmd, opts);

module.exports.spawn = util.deprecate(module.exports, 'execa.spawn() is deprecated. Use execa() instead.');


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cp = __webpack_require__(52);
var parse = __webpack_require__(176);
var enoent = __webpack_require__(189);

var cpSpawnSync = cp.spawnSync;

function spawn(command, args, options) {
    var parsed;
    var spawned;

    // Parse the arguments
    parsed = parse(command, args, options);

    // Spawn the child process
    spawned = cp.spawn(parsed.command, parsed.args, parsed.options);

    // Hook into child process "exit" event to emit an error if the command
    // does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    enoent.hookChildProcess(spawned, parsed);

    return spawned;
}

function spawnSync(command, args, options) {
    var parsed;
    var result;

    if (!cpSpawnSync) {
        try {
            cpSpawnSync = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"spawn-sync\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));  // eslint-disable-line global-require
        } catch (ex) {
            throw new Error(
                'In order to use spawnSync on node 0.10 or older, you must ' +
                'install spawn-sync:\n\n' +
                '  npm install spawn-sync --save'
            );
        }
    }

    // Parse the arguments
    parsed = parse(command, args, options);

    // Spawn the child process
    result = cpSpawnSync(parsed.command, parsed.args, parsed.options);

    // Analyze if the command does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);

    return result;
}

module.exports = spawn;
module.exports.spawn = spawn;
module.exports.sync = spawnSync;

module.exports._parse = parse;
module.exports._enoent = enoent;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resolveCommand = __webpack_require__(53);
var hasEmptyArgumentBug = __webpack_require__(184);
var escapeArgument = __webpack_require__(55);
var escapeCommand = __webpack_require__(185);
var readShebang = __webpack_require__(186);

var isWin = process.platform === 'win32';
var skipShellRegExp = /\.(?:com|exe)$/i;

// Supported in Node >= 6 and >= 4.8
var supportsShellOption = parseInt(process.version.substr(1).split('.')[0], 10) >= 6 ||
 parseInt(process.version.substr(1).split('.')[0], 10) === 4 && parseInt(process.version.substr(1).split('.')[1], 10) >= 8;

function parseNonShell(parsed) {
    var shebang;
    var needsShell;
    var applyQuotes;

    if (!isWin) {
        return parsed;
    }

    // Detect & add support for shebangs
    parsed.file = resolveCommand(parsed.command);
    parsed.file = parsed.file || resolveCommand(parsed.command, true);
    shebang = parsed.file && readShebang(parsed.file);

    if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;
        needsShell = hasEmptyArgumentBug || !skipShellRegExp.test(resolveCommand(shebang) || resolveCommand(shebang, true));
    } else {
        needsShell = hasEmptyArgumentBug || !skipShellRegExp.test(parsed.file);
    }

    // If a shell is required, use cmd.exe and take care of escaping everything correctly
    if (needsShell) {
        // Escape command & arguments
        applyQuotes = (parsed.command !== 'echo');  // Do not quote arguments for the special "echo" command
        parsed.command = escapeCommand(parsed.command);
        parsed.args = parsed.args.map(function (arg) {
            return escapeArgument(arg, applyQuotes);
        });

        // Make use of cmd.exe
        parsed.args = ['/d', '/s', '/c', '"' + parsed.command + (parsed.args.length ? ' ' + parsed.args.join(' ') : '') + '"'];
        parsed.command = process.env.comspec || 'cmd.exe';
        parsed.options.windowsVerbatimArguments = true;  // Tell node's spawn that the arguments are already escaped
    }

    return parsed;
}

function parseShell(parsed) {
    var shellCommand;

    // If node supports the shell option, there's no need to mimic its behavior
    if (supportsShellOption) {
        return parsed;
    }

    // Mimic node shell option, see: https://github.com/nodejs/node/blob/b9f6a2dc059a1062776133f3d4fd848c4da7d150/lib/child_process.js#L335
    shellCommand = [parsed.command].concat(parsed.args).join(' ');

    if (isWin) {
        parsed.command = typeof parsed.options.shell === 'string' ? parsed.options.shell : process.env.comspec || 'cmd.exe';
        parsed.args = ['/d', '/s', '/c', '"' + shellCommand + '"'];
        parsed.options.windowsVerbatimArguments = true;  // Tell node's spawn that the arguments are already escaped
    } else {
        if (typeof parsed.options.shell === 'string') {
            parsed.command = parsed.options.shell;
        } else if (process.platform === 'android') {
            parsed.command = '/system/bin/sh';
        } else {
            parsed.command = '/bin/sh';
        }

        parsed.args = ['-c', shellCommand];
    }

    return parsed;
}

// ------------------------------------------------

function parse(command, args, options) {
    var parsed;

    // Normalize arguments, similar to nodejs
    if (args && !Array.isArray(args)) {
        options = args;
        args = null;
    }

    args = args ? args.slice(0) : [];  // Clone array to avoid changing the original
    options = options || {};

    // Build our parsed object
    parsed = {
        command: command,
        args: args,
        options: options,
        file: undefined,
        original: command,
    };

    // Delegate further parsing to shell or non-shell
    return options.shell ? parseShell(parsed) : parseNonShell(parsed);
}

module.exports = parse;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = which
which.sync = whichSync

var isWindows = process.platform === 'win32' ||
    process.env.OSTYPE === 'cygwin' ||
    process.env.OSTYPE === 'msys'

var path = __webpack_require__(0)
var COLON = isWindows ? ';' : ':'
var isexe = __webpack_require__(178)

function getNotFoundError (cmd) {
  var er = new Error('not found: ' + cmd)
  er.code = 'ENOENT'

  return er
}

function getPathInfo (cmd, opt) {
  var colon = opt.colon || COLON
  var pathEnv = opt.path || process.env.PATH || ''
  var pathExt = ['']

  pathEnv = pathEnv.split(colon)

  var pathExtExe = ''
  if (isWindows) {
    pathEnv.unshift(process.cwd())
    pathExtExe = (opt.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM')
    pathExt = pathExtExe.split(colon)


    // Always test the cmd itself first.  isexe will check to make sure
    // it's found in the pathExt set.
    if (cmd.indexOf('.') !== -1 && pathExt[0] !== '')
      pathExt.unshift('')
  }

  // If it has a slash, then we don't bother searching the pathenv.
  // just check the file itself, and that's it.
  if (cmd.match(/\//) || isWindows && cmd.match(/\\/))
    pathEnv = ['']

  return {
    env: pathEnv,
    ext: pathExt,
    extExe: pathExtExe
  }
}

function which (cmd, opt, cb) {
  if (typeof opt === 'function') {
    cb = opt
    opt = {}
  }

  var info = getPathInfo(cmd, opt)
  var pathEnv = info.env
  var pathExt = info.ext
  var pathExtExe = info.extExe
  var found = []

  ;(function F (i, l) {
    if (i === l) {
      if (opt.all && found.length)
        return cb(null, found)
      else
        return cb(getNotFoundError(cmd))
    }

    var pathPart = pathEnv[i]
    if (pathPart.charAt(0) === '"' && pathPart.slice(-1) === '"')
      pathPart = pathPart.slice(1, -1)

    var p = path.join(pathPart, cmd)
    if (!pathPart && (/^\.[\\\/]/).test(cmd)) {
      p = cmd.slice(0, 2) + p
    }
    ;(function E (ii, ll) {
      if (ii === ll) return F(i + 1, l)
      var ext = pathExt[ii]
      isexe(p + ext, { pathExt: pathExtExe }, function (er, is) {
        if (!er && is) {
          if (opt.all)
            found.push(p + ext)
          else
            return cb(null, p + ext)
        }
        return E(ii + 1, ll)
      })
    })(0, pathExt.length)
  })(0, pathEnv.length)
}

function whichSync (cmd, opt) {
  opt = opt || {}

  var info = getPathInfo(cmd, opt)
  var pathEnv = info.env
  var pathExt = info.ext
  var pathExtExe = info.extExe
  var found = []

  for (var i = 0, l = pathEnv.length; i < l; i ++) {
    var pathPart = pathEnv[i]
    if (pathPart.charAt(0) === '"' && pathPart.slice(-1) === '"')
      pathPart = pathPart.slice(1, -1)

    var p = path.join(pathPart, cmd)
    if (!pathPart && /^\.[\\\/]/.test(cmd)) {
      p = cmd.slice(0, 2) + p
    }
    for (var j = 0, ll = pathExt.length; j < ll; j ++) {
      var cur = p + pathExt[j]
      var is
      try {
        is = isexe.sync(cur, { pathExt: pathExtExe })
        if (is) {
          if (opt.all)
            found.push(cur)
          else
            return cur
        }
      } catch (ex) {}
    }
  }

  if (opt.all && found.length)
    return found

  if (opt.nothrow)
    return null

  throw getNotFoundError(cmd)
}


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(1)
var core
if (process.platform === 'win32' || global.TESTING_WINDOWS) {
  core = __webpack_require__(179)
} else {
  core = __webpack_require__(180)
}

module.exports = isexe
isexe.sync = sync

function isexe (path, options, cb) {
  if (typeof options === 'function') {
    cb = options
    options = {}
  }

  if (!cb) {
    if (typeof Promise !== 'function') {
      throw new TypeError('callback not provided')
    }

    return new Promise(function (resolve, reject) {
      isexe(path, options || {}, function (er, is) {
        if (er) {
          reject(er)
        } else {
          resolve(is)
        }
      })
    })
  }

  core(path, options || {}, function (er, is) {
    // ignore EACCES because that just means we aren't allowed to run it
    if (er) {
      if (er.code === 'EACCES' || options && options.ignoreErrors) {
        er = null
        is = false
      }
    }
    cb(er, is)
  })
}

function sync (path, options) {
  // my kingdom for a filtered catch
  try {
    return core.sync(path, options || {})
  } catch (er) {
    if (options && options.ignoreErrors || er.code === 'EACCES') {
      return false
    } else {
      throw er
    }
  }
}


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = isexe
isexe.sync = sync

var fs = __webpack_require__(1)

function checkPathExt (path, options) {
  var pathext = options.pathExt !== undefined ?
    options.pathExt : process.env.PATHEXT

  if (!pathext) {
    return true
  }

  pathext = pathext.split(';')
  if (pathext.indexOf('') !== -1) {
    return true
  }
  for (var i = 0; i < pathext.length; i++) {
    var p = pathext[i].toLowerCase()
    if (p && path.substr(-p.length).toLowerCase() === p) {
      return true
    }
  }
  return false
}

function checkStat (stat, path, options) {
  if (!stat.isSymbolicLink() && !stat.isFile()) {
    return false
  }
  return checkPathExt(path, options)
}

function isexe (path, options, cb) {
  fs.stat(path, function (er, stat) {
    cb(er, er ? false : checkStat(stat, path, options))
  })
}

function sync (path, options) {
  return checkStat(fs.statSync(path), path, options)
}


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = isexe
isexe.sync = sync

var fs = __webpack_require__(1)

function isexe (path, options, cb) {
  fs.stat(path, function (er, stat) {
    cb(er, er ? false : checkStat(stat, options))
  })
}

function sync (path, options) {
  return checkStat(fs.statSync(path), options)
}

function checkStat (stat, options) {
  return stat.isFile() && checkMode(stat, options)
}

function checkMode (stat, options) {
  var mod = stat.mode
  var uid = stat.uid
  var gid = stat.gid

  var myUid = options.uid !== undefined ?
    options.uid : process.getuid && process.getuid()
  var myGid = options.gid !== undefined ?
    options.gid : process.getgid && process.getgid()

  var u = parseInt('100', 8)
  var g = parseInt('010', 8)
  var o = parseInt('001', 8)
  var ug = u | g

  var ret = (mod & o) ||
    (mod & g) && gid === myGid ||
    (mod & u) && uid === myUid ||
    (mod & ug) && myUid === 0

  return ret
}


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

if (process.env.npm_package_name === 'pseudomap' &&
    process.env.npm_lifecycle_script === 'test')
  process.env.TEST_PSEUDOMAP = 'true'

if (typeof Map === 'function' && !process.env.TEST_PSEUDOMAP) {
  module.exports = Map
} else {
  module.exports = __webpack_require__(182)
}


/***/ }),
/* 182 */
/***/ (function(module, exports) {

var hasOwnProperty = Object.prototype.hasOwnProperty

module.exports = PseudoMap

function PseudoMap (set) {
  if (!(this instanceof PseudoMap)) // whyyyyyyy
    throw new TypeError("Constructor PseudoMap requires 'new'")

  this.clear()

  if (set) {
    if ((set instanceof PseudoMap) ||
        (typeof Map === 'function' && set instanceof Map))
      set.forEach(function (value, key) {
        this.set(key, value)
      }, this)
    else if (Array.isArray(set))
      set.forEach(function (kv) {
        this.set(kv[0], kv[1])
      }, this)
    else
      throw new TypeError('invalid argument')
  }
}

PseudoMap.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  Object.keys(this._data).forEach(function (k) {
    if (k !== 'size')
      fn.call(thisp, this._data[k].value, this._data[k].key)
  }, this)
}

PseudoMap.prototype.has = function (k) {
  return !!find(this._data, k)
}

PseudoMap.prototype.get = function (k) {
  var res = find(this._data, k)
  return res && res.value
}

PseudoMap.prototype.set = function (k, v) {
  set(this._data, k, v)
}

PseudoMap.prototype.delete = function (k) {
  var res = find(this._data, k)
  if (res) {
    delete this._data[res._index]
    this._data.size--
  }
}

PseudoMap.prototype.clear = function () {
  var data = Object.create(null)
  data.size = 0

  Object.defineProperty(this, '_data', {
    value: data,
    enumerable: false,
    configurable: true,
    writable: false
  })
}

Object.defineProperty(PseudoMap.prototype, 'size', {
  get: function () {
    return this._data.size
  },
  set: function (n) {},
  enumerable: true,
  configurable: true
})

PseudoMap.prototype.values =
PseudoMap.prototype.keys =
PseudoMap.prototype.entries = function () {
  throw new Error('iterators are not implemented in this version')
}

// Either identical, or both NaN
function same (a, b) {
  return a === b || a !== a && b !== b
}

function Entry (k, v, i) {
  this.key = k
  this.value = v
  this._index = i
}

function find (data, k) {
  for (var i = 0, s = '_' + k, key = s;
       hasOwnProperty.call(data, key);
       key = s + i++) {
    if (same(data[key].key, k))
      return data[key]
  }
}

function set (data, k, v) {
  for (var i = 0, s = '_' + k, key = s;
       hasOwnProperty.call(data, key);
       key = s + i++) {
    if (same(data[key].key, k)) {
      data[key].value = v
      return
    }
  }
  data.size++
  data[key] = new Entry(k, v, key)
}


/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// See: https://github.com/IndigoUnited/node-cross-spawn/pull/34#issuecomment-221623455
function hasEmptyArgumentBug() {
    var nodeVer;

    if (process.platform !== 'win32') {
        return false;
    }

    nodeVer = process.version.substr(1).split('.').map(function (num) {
        return parseInt(num, 10);
    });

    return (nodeVer[0] === 0 && nodeVer[1] < 12);
}

module.exports = hasEmptyArgumentBug();


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var escapeArgument = __webpack_require__(55);

function escapeCommand(command) {
    // Do not escape if this command is not dangerous..
    // We do this so that commands like "echo" or "ifconfig" work
    // Quoting them, will make them unaccessible
    return /^[a-z0-9_-]+$/i.test(command) ? command : escapeArgument(command, true);
}

module.exports = escapeCommand;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs = __webpack_require__(1);
var LRU = __webpack_require__(54);
var shebangCommand = __webpack_require__(187);

var shebangCache = new LRU({ max: 50, maxAge: 30 * 1000 });  // Cache just for 30sec

function readShebang(command) {
    var buffer;
    var fd;
    var shebang;

    // Check if it is in the cache first
    if (shebangCache.has(command)) {
        return shebangCache.get(command);
    }

    // Read the first 150 bytes from the file
    buffer = new Buffer(150);

    try {
        fd = fs.openSync(command, 'r');
        fs.readSync(fd, buffer, 0, 150, 0);
        fs.closeSync(fd);
    } catch (e) { /* empty */ }

    // Attempt to extract shebang (null is returned if not a shebang)
    shebang = shebangCommand(buffer.toString());

    // Store the shebang in the cache
    shebangCache.set(command, shebang);

    return shebang;
}

module.exports = readShebang;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shebangRegex = __webpack_require__(188);

module.exports = function (str) {
	var match = str.match(shebangRegex);

	if (!match) {
		return null;
	}

	var arr = match[0].replace(/#! ?/, '').split(' ');
	var bin = arr[0].split('/').pop();
	var arg = arr[1];

	return (bin === 'env' ?
		arg :
		bin + (arg ? ' ' + arg : '')
	);
};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = /^#!.*/;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isWin = process.platform === 'win32';
var resolveCommand = __webpack_require__(53);

var isNode10 = process.version.indexOf('v0.10.') === 0;

function notFoundError(command, syscall) {
    var err;

    err = new Error(syscall + ' ' + command + ' ENOENT');
    err.code = err.errno = 'ENOENT';
    err.syscall = syscall + ' ' + command;

    return err;
}

function hookChildProcess(cp, parsed) {
    var originalEmit;

    if (!isWin) {
        return;
    }

    originalEmit = cp.emit;
    cp.emit = function (name, arg1) {
        var err;

        // If emitting "exit" event and exit code is 1, we need to check if
        // the command exists and emit an "error" instead
        // See: https://github.com/IndigoUnited/node-cross-spawn/issues/16
        if (name === 'exit') {
            err = verifyENOENT(arg1, parsed, 'spawn');

            if (err) {
                return originalEmit.call(cp, 'error', err);
            }
        }

        return originalEmit.apply(cp, arguments);
    };
}

function verifyENOENT(status, parsed) {
    if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, 'spawn');
    }

    return null;
}

function verifyENOENTSync(status, parsed) {
    if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, 'spawnSync');
    }

    // If we are in node 10, then we are using spawn-sync; if it exited
    // with -1 it probably means that the command does not exist
    if (isNode10 && status === -1) {
        parsed.file = isWin ? parsed.file : resolveCommand(parsed.original);

        if (!parsed.file) {
            return notFoundError(parsed.original, 'spawnSync');
        }
    }

    return null;
}

module.exports.hookChildProcess = hookChildProcess;
module.exports.verifyENOENT = verifyENOENT;
module.exports.verifyENOENTSync = verifyENOENTSync;
module.exports.notFoundError = notFoundError;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (x) {
	var lf = typeof x === 'string' ? '\n' : '\n'.charCodeAt();
	var cr = typeof x === 'string' ? '\r' : '\r'.charCodeAt();

	if (x[x.length - 1] === lf) {
		x = x.slice(0, x.length - 1);
	}

	if (x[x.length - 1] === cr) {
		x = x.slice(0, x.length - 1);
	}

	return x;
};


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const path = __webpack_require__(0);
const pathKey = __webpack_require__(192);

module.exports = opts => {
	opts = Object.assign({
		cwd: process.cwd(),
		path: process.env[pathKey()]
	}, opts);

	let prev;
	let pth = path.resolve(opts.cwd);
	const ret = [];

	while (prev !== pth) {
		ret.push(path.join(pth, 'node_modules/.bin'));
		prev = pth;
		pth = path.resolve(pth, '..');
	}

	// ensure the running `node` binary is used
	ret.push(path.dirname(process.execPath));

	return ret.concat(opts.path).join(path.delimiter);
};

module.exports.env = opts => {
	opts = Object.assign({
		env: process.env
	}, opts);

	const env = Object.assign({}, opts.env);
	const path = pathKey({env});

	opts.path = env[path];
	env[path] = module.exports(opts);

	return env;
};


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = opts => {
	opts = opts || {};

	const env = opts.env || process.env;
	const platform = opts.platform || process.platform;

	if (platform !== 'win32') {
		return 'PATH';
	}

	return Object.keys(env).find(x => x.toUpperCase() === 'PATH') || 'Path';
};


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isStream = module.exports = function (stream) {
	return stream !== null && typeof stream === 'object' && typeof stream.pipe === 'function';
};

isStream.writable = function (stream) {
	return isStream(stream) && stream.writable !== false && typeof stream._write === 'function' && typeof stream._writableState === 'object';
};

isStream.readable = function (stream) {
	return isStream(stream) && stream.readable !== false && typeof stream._read === 'function' && typeof stream._readableState === 'object';
};

isStream.duplex = function (stream) {
	return isStream.writable(stream) && isStream.readable(stream);
};

isStream.transform = function (stream) {
	return isStream.duplex(stream) && typeof stream._transform === 'function' && typeof stream._transformState === 'object';
};


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const bufferStream = __webpack_require__(195);

function getStream(inputStream, opts) {
	if (!inputStream) {
		return Promise.reject(new Error('Expected a stream'));
	}

	opts = Object.assign({maxBuffer: Infinity}, opts);

	const maxBuffer = opts.maxBuffer;
	let stream;
	let clean;

	const p = new Promise((resolve, reject) => {
		const error = err => {
			if (err) { // null check
				err.bufferedData = stream.getBufferedValue();
			}

			reject(err);
		};

		stream = bufferStream(opts);
		inputStream.once('error', error);
		inputStream.pipe(stream);

		stream.on('data', () => {
			if (stream.getBufferedLength() > maxBuffer) {
				reject(new Error('maxBuffer exceeded'));
			}
		});
		stream.once('error', error);
		stream.on('end', resolve);

		clean = () => {
			// some streams doesn't implement the `stream.Readable` interface correctly
			if (inputStream.unpipe) {
				inputStream.unpipe(stream);
			}
		};
	});

	p.then(clean, clean);

	return p.then(() => stream.getBufferedValue());
}

module.exports = getStream;
module.exports.buffer = (stream, opts) => getStream(stream, Object.assign({}, opts, {encoding: 'buffer'}));
module.exports.array = (stream, opts) => getStream(stream, Object.assign({}, opts, {array: true}));


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const PassThrough = __webpack_require__(196).PassThrough;

module.exports = opts => {
	opts = Object.assign({}, opts);

	const array = opts.array;
	let encoding = opts.encoding;
	const buffer = encoding === 'buffer';
	let objectMode = false;

	if (array) {
		objectMode = !(encoding || buffer);
	} else {
		encoding = encoding || 'utf8';
	}

	if (buffer) {
		encoding = null;
	}

	let len = 0;
	const ret = [];
	const stream = new PassThrough({objectMode});

	if (encoding) {
		stream.setEncoding(encoding);
	}

	stream.on('data', chunk => {
		ret.push(chunk);

		if (objectMode) {
			len = ret.length;
		} else {
			len += chunk.length;
		}
	});

	stream.getBufferedValue = () => {
		if (array) {
			return ret;
		}

		return buffer ? Buffer.concat(ret, len) : ret.join('');
	};

	stream.getBufferedLength = () => len;

	return stream;
};


/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = (promise, onFinally) => {
	onFinally = onFinally || (() => {});

	return promise.then(
		val => new Promise(resolve => {
			resolve(onFinally());
		}).then(() => val),
		err => new Promise(resolve => {
			resolve(onFinally());
		}).then(() => {
			throw err;
		})
	);
};


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

// Note: since nyc uses this module to output coverage, any lines
// that are in the direct sync flow of nyc's outputCoverage are
// ignored, since we can never get coverage for them.
var assert = __webpack_require__(199)
var signals = __webpack_require__(200)

var EE = __webpack_require__(201)
/* istanbul ignore if */
if (typeof EE !== 'function') {
  EE = EE.EventEmitter
}

var emitter
if (process.__signal_exit_emitter__) {
  emitter = process.__signal_exit_emitter__
} else {
  emitter = process.__signal_exit_emitter__ = new EE()
  emitter.count = 0
  emitter.emitted = {}
}

// Because this emitter is a global, we have to check to see if a
// previous version of this library failed to enable infinite listeners.
// I know what you're about to say.  But literally everything about
// signal-exit is a compromise with evil.  Get used to it.
if (!emitter.infinite) {
  emitter.setMaxListeners(Infinity)
  emitter.infinite = true
}

module.exports = function (cb, opts) {
  assert.equal(typeof cb, 'function', 'a callback must be provided for exit handler')

  if (loaded === false) {
    load()
  }

  var ev = 'exit'
  if (opts && opts.alwaysLast) {
    ev = 'afterexit'
  }

  var remove = function () {
    emitter.removeListener(ev, cb)
    if (emitter.listeners('exit').length === 0 &&
        emitter.listeners('afterexit').length === 0) {
      unload()
    }
  }
  emitter.on(ev, cb)

  return remove
}

module.exports.unload = unload
function unload () {
  if (!loaded) {
    return
  }
  loaded = false

  signals.forEach(function (sig) {
    try {
      process.removeListener(sig, sigListeners[sig])
    } catch (er) {}
  })
  process.emit = originalProcessEmit
  process.reallyExit = originalProcessReallyExit
  emitter.count -= 1
}

function emit (event, code, signal) {
  if (emitter.emitted[event]) {
    return
  }
  emitter.emitted[event] = true
  emitter.emit(event, code, signal)
}

// { <signal>: <listener fn>, ... }
var sigListeners = {}
signals.forEach(function (sig) {
  sigListeners[sig] = function listener () {
    // If there are no other listeners, an exit is coming!
    // Simplest way: remove us and then re-send the signal.
    // We know that this will kill the process, so we can
    // safely emit now.
    var listeners = process.listeners(sig)
    if (listeners.length === emitter.count) {
      unload()
      emit('exit', null, sig)
      /* istanbul ignore next */
      emit('afterexit', null, sig)
      /* istanbul ignore next */
      process.kill(process.pid, sig)
    }
  }
})

module.exports.signals = function () {
  return signals
}

module.exports.load = load

var loaded = false

function load () {
  if (loaded) {
    return
  }
  loaded = true

  // This is the number of onSignalExit's that are in play.
  // It's important so that we can count the correct number of
  // listeners on signals, and don't wait for the other one to
  // handle it instead of us.
  emitter.count += 1

  signals = signals.filter(function (sig) {
    try {
      process.on(sig, sigListeners[sig])
      return true
    } catch (er) {
      return false
    }
  })

  process.emit = processEmit
  process.reallyExit = processReallyExit
}

var originalProcessReallyExit = process.reallyExit
function processReallyExit (code) {
  process.exitCode = code || 0
  emit('exit', process.exitCode, null)
  /* istanbul ignore next */
  emit('afterexit', process.exitCode, null)
  /* istanbul ignore next */
  originalProcessReallyExit.call(process, process.exitCode)
}

var originalProcessEmit = process.emit
function processEmit (ev, arg) {
  if (ev === 'exit') {
    if (arg !== undefined) {
      process.exitCode = arg
    }
    var ret = originalProcessEmit.apply(this, arguments)
    emit('exit', process.exitCode, null)
    /* istanbul ignore next */
    emit('afterexit', process.exitCode, null)
    return ret
  } else {
    return originalProcessEmit.apply(this, arguments)
  }
}


/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 200 */
/***/ (function(module, exports) {

// This is not the set of all possible signals.
//
// It IS, however, the set of all signals that trigger
// an exit on either Linux or BSD systems.  Linux is a
// superset of the signal names supported on BSD, and
// the unknown signals just fail to register, so we can
// catch that easily enough.
//
// Don't bother with SIGKILL.  It's uncatchable, which
// means that we can't fire any callbacks anyway.
//
// If a user does happen to register a handler on a non-
// fatal signal like SIGWINCH or something, and then
// exit, it'll end up firing `process.emit('exit')`, so
// the handler will be fired anyway.
//
// SIGBUS, SIGFPE, SIGSEGV and SIGILL, when not raised
// artificially, inherently leave the process in a
// state from which it is not safe to try and enter JS
// listeners.
module.exports = [
  'SIGABRT',
  'SIGALRM',
  'SIGHUP',
  'SIGINT',
  'SIGTERM'
]

if (process.platform !== 'win32') {
  module.exports.push(
    'SIGVTALRM',
    'SIGXCPU',
    'SIGXFSZ',
    'SIGUSR2',
    'SIGTRAP',
    'SIGSYS',
    'SIGQUIT',
    'SIGIOT'
    // should detect profiler and enable/disable accordingly.
    // see #21
    // 'SIGPROF'
  )
}

if (process.platform === 'linux') {
  module.exports.push(
    'SIGIO',
    'SIGPOLL',
    'SIGPWR',
    'SIGSTKFLT',
    'SIGUNUSED'
  )
}


/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The Node team wants to deprecate `process.bind(...)`.
//   https://github.com/nodejs/node/pull/2768
//
// However, we need the 'uv' binding for errname support.
// This is a defensive wrapper around it so `execa` will not fail entirely if it stops working someday.
//
// If this ever stops working. See: https://github.com/sindresorhus/execa/issues/31#issuecomment-215939939 for another possible solution.
let uv;

try {
	uv = process.binding('uv');

	if (typeof uv.errname !== 'function') {
		throw new TypeError('uv.errname is not a function');
	}
} catch (err) {
	console.error('execa/lib/errname: unable to establish process.binding(\'uv\')', err);
	uv = null;
}

function errname(uv, code) {
	if (uv) {
		return uv.errname(code);
	}

	if (!(code < 0)) {
		throw new Error('err >= 0');
	}

	return `Unknown system error ${code}`;
}

module.exports = code => errname(uv, code);

// Used for testing the fallback behavior
module.exports.__test__ = errname;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const alias = ['stdin', 'stdout', 'stderr'];

const hasAlias = opts => alias.some(x => Boolean(opts[x]));

module.exports = opts => {
	if (!opts) {
		return null;
	}

	if (opts.stdio && hasAlias(opts)) {
		throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${alias.map(x => `\`${x}\``).join(', ')}`);
	}

	if (typeof opts.stdio === 'string') {
		return opts.stdio;
	}

	const stdio = opts.stdio || [];

	if (!Array.isArray(stdio)) {
		throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
	}

	const result = [];
	const len = Math.max(stdio.length, alias.length);

	for (let i = 0; i < len; i++) {
		let value = null;

		if (stdio[i] !== undefined) {
			value = stdio[i];
		} else if (opts[alias[i]] !== undefined) {
			value = opts[alias[i]];
		}

		result[i] = value;
	}

	return result;
};


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var invertKv = __webpack_require__(205);
var all = __webpack_require__(206);
var inverted = invertKv(all);

exports.from = function (lcidCode) {
	if (typeof lcidCode !== 'number') {
		throw new TypeError('Expected a number');
	}

	return inverted[lcidCode];
};

exports.to = function (localeId) {
	if (typeof localeId !== 'string') {
		throw new TypeError('Expected a string');
	}

	return all[localeId];
};

exports.all = all;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (obj) {
	if (typeof obj !== 'object') {
		throw new TypeError('Expected an object');
	}

	var ret = {};

	for (var key in obj) {
		var val = obj[key];
		ret[val] = key;
	}

	return ret;
};


/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = {"af_ZA":1078,"am_ET":1118,"ar_AE":14337,"ar_BH":15361,"ar_DZ":5121,"ar_EG":3073,"ar_IQ":2049,"ar_JO":11265,"ar_KW":13313,"ar_LB":12289,"ar_LY":4097,"ar_MA":6145,"ar_OM":8193,"ar_QA":16385,"ar_SA":1025,"ar_SY":10241,"ar_TN":7169,"ar_YE":9217,"arn_CL":1146,"as_IN":1101,"az_AZ":2092,"ba_RU":1133,"be_BY":1059,"bg_BG":1026,"bn_IN":1093,"bo_BT":2129,"bo_CN":1105,"br_FR":1150,"bs_BA":8218,"ca_ES":1027,"co_FR":1155,"cs_CZ":1029,"cy_GB":1106,"da_DK":1030,"de_AT":3079,"de_CH":2055,"de_DE":1031,"de_LI":5127,"de_LU":4103,"div_MV":1125,"dsb_DE":2094,"el_GR":1032,"en_AU":3081,"en_BZ":10249,"en_CA":4105,"en_CB":9225,"en_GB":2057,"en_IE":6153,"en_IN":18441,"en_JA":8201,"en_MY":17417,"en_NZ":5129,"en_PH":13321,"en_TT":11273,"en_US":1033,"en_ZA":7177,"en_ZW":12297,"es_AR":11274,"es_BO":16394,"es_CL":13322,"es_CO":9226,"es_CR":5130,"es_DO":7178,"es_EC":12298,"es_ES":3082,"es_GT":4106,"es_HN":18442,"es_MX":2058,"es_NI":19466,"es_PA":6154,"es_PE":10250,"es_PR":20490,"es_PY":15370,"es_SV":17418,"es_UR":14346,"es_US":21514,"es_VE":8202,"et_EE":1061,"eu_ES":1069,"fa_IR":1065,"fi_FI":1035,"fil_PH":1124,"fo_FO":1080,"fr_BE":2060,"fr_CA":3084,"fr_CH":4108,"fr_FR":1036,"fr_LU":5132,"fr_MC":6156,"fy_NL":1122,"ga_IE":2108,"gbz_AF":1164,"gl_ES":1110,"gsw_FR":1156,"gu_IN":1095,"ha_NG":1128,"he_IL":1037,"hi_IN":1081,"hr_BA":4122,"hr_HR":1050,"hu_HU":1038,"hy_AM":1067,"id_ID":1057,"ii_CN":1144,"is_IS":1039,"it_CH":2064,"it_IT":1040,"iu_CA":2141,"ja_JP":1041,"ka_GE":1079,"kh_KH":1107,"kk_KZ":1087,"kl_GL":1135,"kn_IN":1099,"ko_KR":1042,"kok_IN":1111,"ky_KG":1088,"lb_LU":1134,"lo_LA":1108,"lt_LT":1063,"lv_LV":1062,"mi_NZ":1153,"mk_MK":1071,"ml_IN":1100,"mn_CN":2128,"mn_MN":1104,"moh_CA":1148,"mr_IN":1102,"ms_BN":2110,"ms_MY":1086,"mt_MT":1082,"my_MM":1109,"nb_NO":1044,"ne_NP":1121,"nl_BE":2067,"nl_NL":1043,"nn_NO":2068,"ns_ZA":1132,"oc_FR":1154,"or_IN":1096,"pa_IN":1094,"pl_PL":1045,"ps_AF":1123,"pt_BR":1046,"pt_PT":2070,"qut_GT":1158,"quz_BO":1131,"quz_EC":2155,"quz_PE":3179,"rm_CH":1047,"ro_RO":1048,"ru_RU":1049,"rw_RW":1159,"sa_IN":1103,"sah_RU":1157,"se_FI":3131,"se_NO":1083,"se_SE":2107,"si_LK":1115,"sk_SK":1051,"sl_SI":1060,"sma_NO":6203,"sma_SE":7227,"smj_NO":4155,"smj_SE":5179,"smn_FI":9275,"sms_FI":8251,"sq_AL":1052,"sr_BA":7194,"sr_SP":3098,"sv_FI":2077,"sv_SE":1053,"sw_KE":1089,"syr_SY":1114,"ta_IN":1097,"te_IN":1098,"tg_TJ":1064,"th_TH":1054,"tk_TM":1090,"tmz_DZ":2143,"tn_ZA":1074,"tr_TR":1055,"tt_RU":1092,"ug_CN":1152,"uk_UA":1058,"ur_IN":2080,"ur_PK":1056,"uz_UZ":2115,"vi_VN":1066,"wen_DE":1070,"wo_SN":1160,"xh_ZA":1076,"yo_NG":1130,"zh_CHS":4,"zh_CHT":31748,"zh_CN":2052,"zh_HK":3076,"zh_MO":5124,"zh_SG":4100,"zh_TW":1028,"zu_ZA":1077}

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const mimicFn = __webpack_require__(208);

const cacheStore = new WeakMap();

const defaultCacheKey = function (x) {
	if (arguments.length === 1 && (x === null || x === undefined || (typeof x !== 'function' && typeof x !== 'object'))) {
		return x;
	}

	return JSON.stringify(arguments);
};

module.exports = (fn, opts) => {
	opts = Object.assign({
		cacheKey: defaultCacheKey,
		cache: new Map()
	}, opts);

	const memoized = function () {
		const cache = cacheStore.get(memoized);
		const key = opts.cacheKey.apply(null, arguments);

		if (cache.has(key)) {
			const c = cache.get(key);

			if (typeof opts.maxAge !== 'number' || Date.now() < c.maxAge) {
				return c.data;
			}
		}

		const ret = fn.apply(null, arguments);

		cache.set(key, {
			data: ret,
			maxAge: Date.now() + (opts.maxAge || 0)
		});

		return ret;
	};

	mimicFn(memoized, fn);

	cacheStore.set(memoized, opts.cache);

	return memoized;
};

module.exports.clear = fn => {
	const cache = cacheStore.get(fn);

	if (cache && typeof cache.clear === 'function') {
		cache.clear();
	}
};


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = (to, from) => {
	// TODO: use `Reflect.ownKeys()` when targeting Node.js 6
	for (const prop of Object.getOwnPropertyNames(from).concat(Object.getOwnPropertySymbols(from))) {
		Object.defineProperty(to, prop, Object.getOwnPropertyDescriptor(from, prop));
	}

	return to;
};


/***/ })
/******/ ])));