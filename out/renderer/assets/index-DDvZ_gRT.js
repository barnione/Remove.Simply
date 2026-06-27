import { aZ as clamp, a_ as NativeAnimation, a$ as motionValue, b0 as supportedWaapiEasing, b1 as supportsLinearEasing, b2 as isBezierDefinition, b3 as memo, b4 as getValueAsType, b5 as numberValueTypes, b6 as frame, b7 as cancelFrame, b8 as camelToDash, b9 as transformPropOrder, ba as transformProps, bb as isHTMLElement, bc as MotionValue, bd as isCSSVar, be as isObject, bf as isMotionValue, bg as collectMotionValues, bh as secondsToMilliseconds, bi as applyGeneratorOptions, bj as mapEasingToNativeEasing, bk as microtask, bl as removeItem, bm as noop, bn as VisualElement, bo as createBox, bp as mixNumber, bq as percent, br as px, bs as addUniqueItem, bt as time, bu as SubscriptionManager, bv as frameData, bw as frameSteps, bx as createDelta, by as resolveMotionValue, bz as scaleCorrectors, bA as visualElementStore, bB as stepsOrder, r as reactExports, bC as useIsomorphicLayoutEffect, bD as LayoutGroupContext, j as jsxRuntimeExports, bE as millisecondsToSeconds, bF as isRefObject, bG as usePresence, bH as SwitchLayoutGroupContext, bI as createMotionProxy, bJ as supportsViewTimeline, bK as supportsScrollTimeline, bL as velocityPerSecond, bM as useConstant, bN as cancelMicrotask, bO as MotionConfigContext, bP as acceleratedValues, bQ as hasReducedMotionListener, bR as initPrefersReducedMotion, bS as prefersReducedMotion, bT as isGenerator, bU as fillWildcards, bV as PresenceContext, bW as motionComponentSymbol, bX as MotionGlobalConfig, bY as optimizedAppearDataId, bZ as startWaapiAnimation, b_ as makeUseVisualState, b$ as MotionContext, c0 as moveItem } from "./Providers-WL0Y5vQ8.js";
import { a6, c1, a5, c2, c3, c4, c5, c6, c7, c8, c9, ca, cb, cc, cd, ce, cf, cg, ch, ci, cj, ck, cl, cm, cn, co, cp, cq, cr, cs, ct, cu, cv, cw, cx, cy, cz, cA, cB, cC, cD, cE, cF, cG, cH, cI, cJ, cK, cL, cM, a4, cN, cO, cP, cQ, cR, cS, cT, cU, cV, cW, cX, cY, cZ, c_, c$, d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, da } from "./Providers-WL0Y5vQ8.js";
import { i as isEasingArray, g as getValueTransition$1, a as animateMotionValue, r as resolveElements, b as isDragging, e as easingDefinitionToFunction, c as interpolate, J as JSAnimation, s as scalePoint, p as progress, d as circOut, h as hasTransform, t as translateAxis, f as transformBox, j as hasScale, k as applyBoxDelta, l as has2DTranslate, m as applyTreeDeltas, n as getOptimisedAppearId, o as addDomEvent, H as HTMLVisualElement, q as addPointerInfo, u as isPrimaryPointer, v as extractEventInfo, w as pipe, x as measurePageBox, y as convertBoxToBoundingBox, z as convertBoundingBoxToBox, A as addValueToWillChange, B as isElementTextInput, F as Feature, C as animations, D as gestureAnimations, E as createDomVisualElement, G as domAnimation, I as defaultOffset$1, K as animateVisualElement, L as setTarget, M as createGeneratorEasing, N as fillOffset, O as reverseEasing, S as SVGVisualElement, P as animateTarget, Q as spring } from "./features-animation-CmO_Pgh-.js";
import { R, T, U, V, W, X, Y, Z, _, $, a0, a1, a2, a3, a4 as a42, a5 as a52, a6 as a62, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO } from "./features-animation-CmO_Pgh-.js";
function formatErrorMessage(message, errorCode) {
  return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
const warned = /* @__PURE__ */ new Set();
function hasWarned(message) {
  return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
  if (condition || warned.has(message))
    return;
  console.warn(formatErrorMessage(message, errorCode));
  warned.add(message);
}
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};
// @__NO_SIDE_EFFECTS__
function steps(numSteps, direction = "end") {
  return (progress2) => {
    progress2 = direction === "end" ? Math.min(progress2, 0.999) : Math.max(progress2, 1e-3);
    const expanded = progress2 * numSteps;
    const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
    return clamp(0, 1, rounded / numSteps);
  };
}
// @__NO_SIDE_EFFECTS__
function getEasingForSegment(easing, i) {
  return isEasingArray(easing) ? easing[wrap(0, easing.length, i)] : easing;
}
class GroupAnimation {
  constructor(animations2) {
    this.stop = () => this.runAll("stop");
    this.animations = animations2.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((animation) => animation.finished));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(propName) {
    return this.animations[0][propName];
  }
  setAll(propName, newValue) {
    for (let i = 0; i < this.animations.length; i++) {
      this.animations[i][propName] = newValue;
    }
  }
  attachTimeline(timeline) {
    const subscriptions = this.animations.map((animation) => animation.attachTimeline(timeline));
    return () => {
      subscriptions.forEach((cancel, i) => {
        cancel && cancel();
        this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(time2) {
    this.setAll("time", time2);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(speed) {
    this.setAll("speed", speed);
  }
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    return getMax(this.animations, "duration");
  }
  get iterationDuration() {
    return getMax(this.animations, "iterationDuration");
  }
  runAll(methodName) {
    this.animations.forEach((controls) => controls[methodName]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function getMax(animations2, propName) {
  let max = 0;
  for (let i = 0; i < animations2.length; i++) {
    const value = animations2[i][propName];
    if (value !== null && value > max) {
      max = value;
    }
  }
  return max;
}
class GroupAnimationWithThen extends GroupAnimation {
  then(onResolve, _onReject) {
    return this.finished.finally(onResolve).then(() => {
    });
  }
}
class NativeAnimationWrapper extends NativeAnimation {
  constructor(animation) {
    super();
    this.animation = animation;
    animation.onfinish = () => {
      this.finishedTime = this.time;
      this.notifyFinished();
    };
  }
}
const animationMaps = /* @__PURE__ */ new WeakMap();
const animationMapKey = (name, pseudoElement = "") => `${name}:${pseudoElement}`;
function getAnimationMap(element) {
  let map = animationMaps.get(element);
  if (!map) {
    map = /* @__PURE__ */ new Map();
    animationMaps.set(element, map);
  }
  return map;
}
const MIN_LAYOUT_DISTANCE = 20;
function bezierPoint(t, origin, control, target) {
  const inv = 1 - t;
  return inv * inv * origin + 2 * inv * t * control + t * t * target;
}
function bezierTangentAngle(t, originX, controlX, targetX, originY, controlY, targetY) {
  const dx = 2 * (1 - t) * (controlX - originX) + 2 * t * (targetX - controlX);
  const dy = 2 * (1 - t) * (controlY - originY) + 2 * t * (targetY - controlY);
  return Math.atan2(dy, dx) * (180 / Math.PI);
}
function computeArcControlPoint(fromX, fromY, toX, toY, strength, peak) {
  const deltaX = toX - fromX;
  const deltaY = toY - fromY;
  const distance2 = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  if (distance2 > 0) {
    const normalPerpX = -deltaY / distance2;
    const normalPerpY = deltaX / distance2;
    const desiredHeight = strength * distance2;
    return {
      x: fromX + deltaX * peak + normalPerpX * desiredHeight,
      y: fromY + deltaY * peak + normalPerpY * desiredHeight
    };
  }
  return { x: fromX, y: fromY };
}
function createArcPath({ strength = 0.5, peak = 0.5, direction, rotate = false } = {}) {
  const rotationScale = rotate === true ? 1 : typeof rotate === "number" ? rotate : 0;
  let prevBulgeSign;
  const createInterpolator = (from, to) => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    let signed;
    if (direction === "cw") {
      signed = -strength;
    } else if (direction === "ccw") {
      signed = strength;
    } else {
      const dom = Math.abs(dx) >= Math.abs(dy) ? dx : dy;
      signed = dom < 0 ? -strength : strength;
    }
    let control = computeArcControlPoint(from.x, from.y, to.x, to.y, signed, peak);
    if (direction === void 0) {
      const isVertical = Math.abs(dx) < Math.abs(dy);
      const midX = from.x + dx * peak;
      const midY = from.y + dy * peak;
      const bulgeSign = isVertical ? Math.sign(control.x - midX) : Math.sign(control.y - midY);
      if (prevBulgeSign !== void 0 && bulgeSign !== 0 && bulgeSign !== prevBulgeSign) {
        signed = -signed;
        control = computeArcControlPoint(from.x, from.y, to.x, to.y, signed, peak);
      } else if (bulgeSign !== 0) {
        prevBulgeSign = bulgeSign;
      }
    }
    const tangent0 = rotationScale ? bezierTangentAngle(0, from.x, control.x, to.x, from.y, control.y, to.y) : 0;
    const tangent1 = rotationScale ? bezierTangentAngle(1, from.x, control.x, to.x, from.y, control.y, to.y) : 0;
    const tangentDelta = rotationScale ? wrap(-180, 180, tangent1 - tangent0) : 0;
    return (t) => {
      const out = {
        x: bezierPoint(t, from.x, control.x, to.x),
        y: bezierPoint(t, from.y, control.y, to.y)
      };
      if (rotationScale) {
        const raw = bezierTangentAngle(t, from.x, control.x, to.x, from.y, control.y, to.y);
        const baseline = tangent0 + tangentDelta * t;
        out.rotate = wrap(-180, 180, raw - baseline) * rotationScale;
      }
      return out;
    };
  };
  return createInterpolator;
}
function arc(options = {}) {
  const sample = createArcPath(options);
  const path = {
    interpolateProjection(delta) {
      const tx = delta.x.translate;
      const ty = delta.y.translate;
      if (Math.sqrt(tx * tx + ty * ty) < MIN_LAYOUT_DISTANCE) {
        return void 0;
      }
      return sample({ x: tx, y: ty }, { x: 0, y: 0 });
    },
    animateVisualElement(visualElement, target, transition, delay2, animations2) {
      if (!("x" in target || "y" in target))
        return;
      const xValue = visualElement.getValue("x", visualElement.latestValues["x"] ?? 0);
      const yValue = visualElement.getValue("y", visualElement.latestValues["y"] ?? 0);
      const xRaw = target.x;
      const yRaw = target.y;
      const xFrom = (Array.isArray(xRaw) && xRaw[0] != null ? xRaw[0] : xValue?.get()) ?? 0;
      const yFrom = (Array.isArray(yRaw) && yRaw[0] != null ? yRaw[0] : yValue?.get()) ?? 0;
      const xTo = Array.isArray(xRaw) ? xRaw[xRaw.length - 1] : xRaw ?? xFrom;
      const yTo = Array.isArray(yRaw) ? yRaw[yRaw.length - 1] : yRaw ?? yFrom;
      const interpolate2 = sample({ x: xFrom, y: yFrom }, { x: xTo, y: yTo });
      const pathRotationValue = interpolate2(0).rotate !== void 0 ? visualElement.getValue("pathRotation", 0) : void 0;
      const pathTransition = {
        delay: delay2,
        ...getValueTransition$1(transition || {}, "x")
      };
      delete pathTransition.path;
      const progress2 = motionValue(0);
      progress2.start(animateMotionValue("", progress2, [0, 1e3], {
        ...pathTransition,
        isSync: true,
        velocity: 0,
        onUpdate: (latest) => {
          const point2 = interpolate2(latest / 1e3);
          xValue?.set(point2.x);
          yValue?.set(point2.y);
          if (pathRotationValue && point2.rotate !== void 0) {
            pathRotationValue.set(point2.rotate);
          }
        },
        onComplete: () => {
          xValue?.set(xTo);
          yValue?.set(yTo);
          pathRotationValue?.set(0);
        },
        // Interrupt/cancel must clear our additive contribution
        // so it can't linger on top of the user's `rotate`.
        onStop: () => pathRotationValue?.set(0),
        onCancel: () => pathRotationValue?.set(0)
      }));
      if (progress2.animation)
        animations2.push(progress2.animation);
      delete target.x;
      delete target.y;
    }
  };
  return path;
}
const pxValues = /* @__PURE__ */ new Set([
  // Border props
  "borderWidth",
  "borderTopWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRadius",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius",
  // Positioning props
  "width",
  "maxWidth",
  "height",
  "maxHeight",
  "top",
  "right",
  "bottom",
  "left",
  "inset",
  "insetBlock",
  "insetBlockStart",
  "insetBlockEnd",
  "insetInline",
  "insetInlineStart",
  "insetInlineEnd",
  // Spacing props
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "paddingBlock",
  "paddingBlockStart",
  "paddingBlockEnd",
  "paddingInline",
  "paddingInlineStart",
  "paddingInlineEnd",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginBlock",
  "marginBlockStart",
  "marginBlockEnd",
  "marginInline",
  "marginInlineStart",
  "marginInlineEnd",
  // Typography
  "fontSize",
  // Misc
  "backgroundPositionX",
  "backgroundPositionY"
]);
function applyPxDefaults(keyframes, name) {
  for (let i = 0; i < keyframes.length; i++) {
    if (typeof keyframes[i] === "number" && pxValues.has(name)) {
      keyframes[i] = keyframes[i] + "px";
    }
  }
}
function isWaapiSupportedEasing(easing) {
  return Boolean(typeof easing === "function" && supportsLinearEasing() || !easing || typeof easing === "string" && (easing in supportedWaapiEasing || supportsLinearEasing()) || isBezierDefinition(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
const supportsPartialKeyframes = /* @__PURE__ */ memo(() => {
  try {
    document.createElement("div").animate({ opacity: [1] });
  } catch (e) {
    return false;
  }
  return true;
});
function createSelectorEffect(subjectEffect) {
  return (subject, values) => {
    const elements = resolveElements(subject);
    const subscriptions = [];
    for (const element of elements) {
      const remove = subjectEffect(element, values);
      subscriptions.push(remove);
    }
    return () => {
      for (const remove of subscriptions)
        remove();
    };
  };
}
class MotionValueState {
  constructor() {
    this.latest = {};
    this.values = /* @__PURE__ */ new Map();
  }
  set(name, value, render, computed, useDefaultValueType = true) {
    const existingValue = this.values.get(name);
    if (existingValue) {
      existingValue.onRemove();
    }
    const onChange = () => {
      const v = value.get();
      if (useDefaultValueType) {
        this.latest[name] = getValueAsType(v, numberValueTypes[name]);
      } else {
        this.latest[name] = v;
      }
      render && frame.render(render);
    };
    onChange();
    const cancelOnChange = value.on("change", onChange);
    computed && value.addDependent(computed);
    const remove = () => {
      cancelOnChange();
      render && cancelFrame(render);
      this.values.delete(name);
      computed && value.removeDependent(computed);
    };
    this.values.set(name, { value, onRemove: remove });
    return remove;
  }
  get(name) {
    return this.values.get(name)?.value;
  }
}
function createEffect(addValue) {
  const stateCache = /* @__PURE__ */ new WeakMap();
  return (subject, values) => {
    const state = stateCache.get(subject) ?? new MotionValueState();
    stateCache.set(subject, state);
    const subscriptions = [];
    for (const key in values) {
      const value = values[key];
      const remove = addValue(subject, state, key, value);
      subscriptions.push(remove);
    }
    return () => {
      for (const cancel of subscriptions)
        cancel();
    };
  };
}
function canSetAsProperty(element, name) {
  if (!(name in element))
    return false;
  const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(element), name) || Object.getOwnPropertyDescriptor(element, name);
  return descriptor && typeof descriptor.set === "function";
}
const addAttrValue = (element, state, key, value) => {
  const isProp = canSetAsProperty(element, key);
  const name = isProp ? key : key.startsWith("data") || key.startsWith("aria") ? camelToDash(key) : key;
  const render = isProp ? () => {
    element[name] = state.latest[key];
  } : () => {
    const v = state.latest[key];
    if (v === null || v === void 0) {
      element.removeAttribute(name);
    } else {
      element.setAttribute(name, String(v));
    }
  };
  return state.set(key, value, render);
};
const attrEffect = /* @__PURE__ */ createSelectorEffect(
  /* @__PURE__ */ createEffect(addAttrValue)
);
const propEffect = /* @__PURE__ */ createEffect((subject, state, key, value) => {
  return state.set(key, value, () => {
    subject[key] = state.latest[key];
  }, void 0, false);
});
const translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
function buildTransform(state) {
  let transform2 = "";
  let transformIsDefault = true;
  for (let i = 0; i < transformPropOrder.length; i++) {
    const key = transformPropOrder[i];
    const value = state.latest[key];
    if (value === void 0)
      continue;
    let valueIsDefault = true;
    if (typeof value === "number") {
      valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
    } else {
      const parsed = parseFloat(value);
      valueIsDefault = key.startsWith("scale") ? parsed === 1 : parsed === 0;
    }
    if (!valueIsDefault) {
      transformIsDefault = false;
      const transformName = translateAlias[key] || key;
      transform2 += `${transformName}(${value}) `;
    }
  }
  const pathRotation = state.latest.pathRotation;
  if (pathRotation) {
    transformIsDefault = false;
    transform2 += `rotate(${typeof pathRotation === "number" ? `${pathRotation}deg` : pathRotation}) `;
  }
  return transformIsDefault ? "none" : transform2.trim();
}
const originProps = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
const addStyleValue = (element, state, key, value) => {
  let render = void 0;
  let computed = void 0;
  if (transformProps.has(key)) {
    if (!state.get("transform")) {
      if (!isHTMLElement(element) && !state.get("transformBox")) {
        addStyleValue(element, state, "transformBox", new MotionValue("fill-box"));
      }
      state.set("transform", new MotionValue("none"), () => {
        element.style.transform = buildTransform(state);
      });
    }
    computed = state.get("transform");
  } else if (originProps.has(key)) {
    if (!state.get("transformOrigin")) {
      state.set("transformOrigin", new MotionValue(""), () => {
        const originX = state.latest.originX ?? "50%";
        const originY = state.latest.originY ?? "50%";
        const originZ = state.latest.originZ ?? 0;
        element.style.transformOrigin = `${originX} ${originY} ${originZ}`;
      });
    }
    computed = state.get("transformOrigin");
  } else if (isCSSVar(key)) {
    render = () => {
      element.style.setProperty(key, state.latest[key]);
    };
  } else {
    render = () => {
      element.style[key] = state.latest[key];
    };
  }
  return state.set(key, value, render, computed);
};
const styleEffect = /* @__PURE__ */ createSelectorEffect(
  /* @__PURE__ */ createEffect(addStyleValue)
);
function addSVGPathValue(element, state, key, value) {
  frame.render(() => element.setAttribute("pathLength", "1"));
  if (key === "pathOffset") {
    return state.set(key, value, () => {
      const offset = state.latest[key];
      element.setAttribute("stroke-dashoffset", `${-offset}`);
    });
  } else {
    if (!state.get("stroke-dasharray")) {
      state.set("stroke-dasharray", new MotionValue("1 1"), () => {
        const { pathLength = 1, pathSpacing } = state.latest;
        element.setAttribute("stroke-dasharray", `${pathLength} ${pathSpacing ?? 1 - Number(pathLength)}`);
      });
    }
    return state.set(key, value, void 0, state.get("stroke-dasharray"));
  }
}
const addSVGValue = (element, state, key, value) => {
  if (key.startsWith("path")) {
    return addSVGPathValue(element, state, key, value);
  } else if (key.startsWith("attr")) {
    return addAttrValue(element, state, convertAttrKey(key), value);
  }
  const handler = key in element.style ? addStyleValue : addAttrValue;
  return handler(element, state, key, value);
};
const svgEffect = /* @__PURE__ */ createSelectorEffect(
  /* @__PURE__ */ createEffect(addSVGValue)
);
function convertAttrKey(key) {
  return key.replace(/^attr([A-Z])/, (_2, firstChar) => firstChar.toLowerCase());
}
function setDragLock(axis) {
  if (axis === "x" || axis === "y") {
    if (isDragging[axis]) {
      return null;
    } else {
      isDragging[axis] = true;
      return () => {
        isDragging[axis] = false;
      };
    }
  } else {
    if (isDragging.x || isDragging.y) {
      return null;
    } else {
      isDragging.x = isDragging.y = true;
      return () => {
        isDragging.x = isDragging.y = false;
      };
    }
  }
}
function getComputedStyle$1(element, name) {
  const computedStyle = window.getComputedStyle(element);
  return isCSSVar(name) ? computedStyle.getPropertyValue(name) : computedStyle[name];
}
function isSVGElement(element) {
  return isObject(element) && "ownerSVGElement" in element;
}
const resizeHandlers = /* @__PURE__ */ new WeakMap();
let observer;
const getSize = (borderBoxAxis, svgAxis, htmlAxis) => (target, borderBoxSize) => {
  if (borderBoxSize && borderBoxSize[0]) {
    return borderBoxSize[0][borderBoxAxis + "Size"];
  } else if (isSVGElement(target) && "getBBox" in target) {
    return target.getBBox()[svgAxis];
  } else {
    return target[htmlAxis];
  }
};
const getWidth = /* @__PURE__ */ getSize("inline", "width", "offsetWidth");
const getHeight = /* @__PURE__ */ getSize("block", "height", "offsetHeight");
function notifyTarget({ target, borderBoxSize }) {
  resizeHandlers.get(target)?.forEach((handler) => {
    handler(target, {
      get width() {
        return getWidth(target, borderBoxSize);
      },
      get height() {
        return getHeight(target, borderBoxSize);
      }
    });
  });
}
function notifyAll(entries) {
  entries.forEach(notifyTarget);
}
function createResizeObserver() {
  if (typeof ResizeObserver === "undefined")
    return;
  observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
  if (!observer)
    createResizeObserver();
  const elements = resolveElements(target);
  elements.forEach((element) => {
    let elementHandlers = resizeHandlers.get(element);
    if (!elementHandlers) {
      elementHandlers = /* @__PURE__ */ new Set();
      resizeHandlers.set(element, elementHandlers);
    }
    elementHandlers.add(handler);
    observer?.observe(element);
  });
  return () => {
    elements.forEach((element) => {
      const elementHandlers = resizeHandlers.get(element);
      elementHandlers?.delete(handler);
      if (!elementHandlers?.size) {
        observer?.unobserve(element);
      }
    });
  };
}
const windowCallbacks = /* @__PURE__ */ new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
  windowResizeHandler = () => {
    const info = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    windowCallbacks.forEach((callback) => callback(info));
  };
  window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
  windowCallbacks.add(callback);
  if (!windowResizeHandler)
    createWindowResizeHandler();
  return () => {
    windowCallbacks.delete(callback);
    if (!windowCallbacks.size && typeof windowResizeHandler === "function") {
      window.removeEventListener("resize", windowResizeHandler);
      windowResizeHandler = void 0;
    }
  };
}
function resize(a, b) {
  return typeof a === "function" ? resizeWindow(a) : resizeElement(a, b);
}
function observeTimeline(update, timeline) {
  let prevProgress;
  const onFrame = () => {
    const { currentTime } = timeline;
    const percentage = currentTime === null ? 0 : currentTime.value;
    const progress2 = percentage / 100;
    if (prevProgress !== progress2) {
      update(progress2);
    }
    prevProgress = progress2;
  };
  frame.preUpdate(onFrame, true);
  return () => cancelFrame(onFrame);
}
const statsBuffer = {
  value: null,
  addProjectionMetrics: null
};
function clearStatsBuffer() {
  statsBuffer.value = null;
  statsBuffer.addProjectionMetrics = null;
}
function recordStats() {
  if (statsBuffer.value) {
    clearStatsBuffer();
    throw new Error("Stats are already being measured");
  }
  const buffer = statsBuffer;
  buffer.value = {
    layoutProjection: {
      nodes: [],
      calculatedTargetDeltas: [],
      calculatedProjections: []
    }
  };
  buffer.addProjectionMetrics = (metrics2) => {
    const { layoutProjection } = buffer.value;
    layoutProjection.nodes.push(metrics2.nodes);
    layoutProjection.calculatedTargetDeltas.push(metrics2.calculatedTargetDeltas);
    layoutProjection.calculatedProjections.push(metrics2.calculatedProjections);
  };
}
function isSVGSVGElement(element) {
  return isSVGElement(element) && element.tagName === "svg";
}
function getOriginIndex(from, total) {
  if (from === "first") {
    return 0;
  } else {
    const lastIndex = total - 1;
    return from === "last" ? lastIndex : lastIndex / 2;
  }
}
function stagger(duration = 0.1, { startDelay = 0, from = 0, ease } = {}) {
  return (i, total) => {
    const fromIndex = typeof from === "number" ? from : getOriginIndex(from, total);
    const distance2 = Math.abs(fromIndex - i);
    let delay2 = duration * distance2;
    if (ease) {
      const maxDelay = total * duration;
      const easingFunction = easingDefinitionToFunction(ease);
      delay2 = easingFunction(delay2 / maxDelay) * maxDelay;
    }
    return startDelay + delay2;
  };
}
function transform(...args) {
  const useImmediate = !Array.isArray(args[0]);
  const argOffset = useImmediate ? 0 : -1;
  const inputValue = args[0 + argOffset];
  const inputRange = args[1 + argOffset];
  const outputRange = args[2 + argOffset];
  const options = args[3 + argOffset];
  const interpolator = interpolate(inputRange, outputRange, options);
  return useImmediate ? interpolator(inputValue) : interpolator;
}
function followValue(source, options) {
  const initialValue = isMotionValue(source) ? source.get() : source;
  const value = motionValue(initialValue);
  attachFollow(value, source, options);
  return value;
}
function attachFollow(value, source, options = {}) {
  const initialValue = value.get();
  let activeAnimation = null;
  let latestValue = initialValue;
  let latestSetter;
  const unit = typeof initialValue === "string" ? initialValue.replace(/[\d.-]/g, "") : void 0;
  const stopAnimation2 = () => {
    if (activeAnimation) {
      activeAnimation.stop();
      activeAnimation = null;
    }
    value.animation = void 0;
  };
  const startAnimation = () => {
    const currentValue = asNumber$1(value.get());
    const targetValue = asNumber$1(latestValue);
    if (currentValue === targetValue) {
      stopAnimation2();
      return;
    }
    const velocity = activeAnimation ? activeAnimation.getGeneratorVelocity() : value.getVelocity();
    stopAnimation2();
    activeAnimation = new JSAnimation({
      keyframes: [currentValue, targetValue],
      velocity,
      // Default to spring if no type specified (matches useSpring behavior)
      type: "spring",
      restDelta: 1e-3,
      restSpeed: 0.01,
      ...options,
      onUpdate: latestSetter
    });
  };
  const scheduleAnimation = () => {
    startAnimation();
    value.animation = activeAnimation ?? void 0;
    value["events"].animationStart?.notify();
    activeAnimation?.then(() => {
      value.animation = void 0;
      value["events"].animationComplete?.notify();
    });
  };
  value.attach((v, set) => {
    latestValue = v;
    latestSetter = (latest) => set(parseValue(latest, unit));
    frame.postRender(scheduleAnimation);
  }, stopAnimation2);
  if (isMotionValue(source)) {
    let skipNextAnimation = options.skipInitialAnimation === true;
    const removeSourceOnChange = source.on("change", (v) => {
      if (skipNextAnimation) {
        skipNextAnimation = false;
        value.jump(parseValue(v, unit), false);
      } else {
        value.set(parseValue(v, unit));
      }
    });
    const removeValueOnDestroy = value.on("destroy", removeSourceOnChange);
    return () => {
      removeSourceOnChange();
      removeValueOnDestroy();
    };
  }
  return stopAnimation2;
}
function parseValue(v, unit) {
  return unit ? v + unit : v;
}
function asNumber$1(v) {
  return typeof v === "number" ? v : parseFloat(v);
}
function subscribeValue(inputValues, outputValue, getLatest) {
  const update = () => outputValue.set(getLatest());
  const scheduleUpdate = () => frame.preRender(update, false, true);
  const subscriptions = inputValues.map((v) => v.on("change", scheduleUpdate));
  outputValue.on("destroy", () => {
    subscriptions.forEach((unsubscribe) => unsubscribe());
    cancelFrame(update);
  });
}
function transformValue(transform2) {
  const collectedValues = [];
  collectMotionValues.current = collectedValues;
  const initialValue = transform2();
  collectMotionValues.current = void 0;
  const value = motionValue(initialValue);
  subscribeValue(collectedValues, value, transform2);
  return value;
}
function mapValue(inputValue, inputRange, outputRange, options) {
  const map = transform(inputRange, outputRange, options);
  return transformValue(() => map(inputValue.get()));
}
function springValue(source, options) {
  return followValue(source, { type: "spring", ...options });
}
function attachSpring(value, source, options) {
  return attachFollow(value, source, { type: "spring", ...options });
}
let nameCount = 0;
const generatedName = () => `motion-view-${nameCount++}`;
const isGeneratedName = (name) => name.startsWith("motion-view-");
function tagClass(element, className, classed) {
  if (!className)
    return;
  element.style?.setProperty("view-transition-class", className);
  classed.push(element);
}
function applyGroup(element, name, group, grouped, clipChildren) {
  if (!group)
    return;
  element.style?.setProperty("view-transition-group", group);
  grouped.push(element);
  if (group !== "none" && clipChildren) {
    const style2 = getComputedStyle(element);
    if (style2.overflowX !== "visible" || style2.overflowY !== "visible") {
      clipChildren.add(name);
    }
  }
}
function assignViewTransitionNames(definition, registry, assigned, forcedNames, className, classed = [], group, grouped = [], clipChildren) {
  const elements = resolveElements(definition);
  if (forcedNames) {
    return elements.map((element, i) => {
      const existing = registry.get(element);
      if (existing)
        return existing;
      const name = forcedNames[i] ?? generatedName();
      element.style?.setProperty("view-transition-name", name);
      assigned.push(element);
      registry.set(element, name);
      tagClass(element, className, classed);
      applyGroup(element, name, group, grouped, clipChildren);
      return name;
    });
  }
  const currentNames = elements.map((element) => registry.has(element) ? void 0 : getComputedStyle(element).getPropertyValue("view-transition-name"));
  return elements.map((element, i) => {
    const existing = registry.get(element);
    if (existing)
      return existing;
    const current2 = currentNames[i];
    let name;
    if (current2 && current2 !== "none" && current2 !== "auto" && current2 !== "match-element" && !isGeneratedName(current2)) {
      name = current2;
    } else {
      name = generatedName();
      element.style?.setProperty("view-transition-name", name);
      assigned.push(element);
    }
    registry.set(element, name);
    tagClass(element, className, classed);
    applyGroup(element, name, group, grouped, clipChildren);
    return name;
  });
}
function releaseViewTransitionNames(assigned, classed = [], grouped = []) {
  for (const element of assigned) {
    element.style?.removeProperty("view-transition-name");
  }
  for (const element of classed) {
    element.style?.removeProperty("view-transition-class");
  }
  for (const element of grouped) {
    element.style?.removeProperty("view-transition-group");
  }
}
function chooseLayerType(valueName) {
  if (valueName === "layout")
    return "group";
  if (valueName === "enter" || valueName === "new")
    return "new";
  return "old";
}
let pendingRules = {};
let style = null;
const css = {
  set: (selector, values) => {
    pendingRules[selector] = values;
  },
  commit: () => {
    if (!style) {
      style = document.createElement("style");
      style.id = "motion-view";
    }
    let cssText = "";
    for (const selector in pendingRules) {
      const rule = pendingRules[selector];
      cssText += `${selector} {
`;
      for (const [property, value] of Object.entries(rule)) {
        cssText += `  ${property}: ${value};
`;
      }
      cssText += "}\n";
    }
    style.textContent = cssText;
    document.head.appendChild(style);
    pendingRules = {};
  },
  remove: () => {
    if (style && style.parentElement) {
      style.parentElement.removeChild(style);
    }
  }
};
function getViewAnimationLayerInfo(pseudoElement) {
  const match = pseudoElement.match(
    // `group-children` (nested transitions) before `group` so it wins.
    /::view-transition-(old|new|group-children|group|image-pair)\((.*?)\)/
  );
  if (!match)
    return null;
  return { layer: match[2], type: match[1] };
}
function getViewAnimations() {
  return document.getAnimations().filter((animation) => {
    const { effect } = animation;
    return !!effect && effect.target === document.documentElement && effect.pseudoElement?.startsWith("::view-transition");
  });
}
function hasTarget(target, targets) {
  return targets.has(target) && Object.keys(targets.get(target)).length > 0;
}
const definitionNames = ["layout", "enter", "exit", "new", "old"];
const typeBuckets = {
  group: ["layout"],
  new: ["new", "enter"],
  old: ["old", "exit"]
};
const ORIGIN_DEFAULTS = {
  new: { opacity: 0, scale: 0.85 },
  old: { opacity: 1, scale: 1 }
};
const ASPECT_TOLERANCE = 0.2;
function startViewAnimation(builder) {
  const { update, targets, resolveDefs, cropOverride, pairs, classNames, flatGroups, options: defaultOptions } = builder;
  if (!document.startViewTransition) {
    return (async () => {
      await update();
      return new GroupAnimation([]);
    })();
  }
  const nameRegistry = /* @__PURE__ */ new Map();
  const assigned = [];
  const classed = [];
  const grouped = [];
  const clipChildren = /* @__PURE__ */ new Set();
  const layerTargets = /* @__PURE__ */ new Map();
  const croppedNames = /* @__PURE__ */ new Set();
  const cropForName = /* @__PURE__ */ new Map();
  const layerStagger = /* @__PURE__ */ new Map();
  const pairNames = /* @__PURE__ */ new Map();
  const pairFrom = /* @__PURE__ */ new Map();
  const resolveLayers = (phase) => {
    targets.forEach((target, definition) => {
      const className = classNames.get(definition);
      const group = definition === "root" || !resolveDefs.has(definition) ? void 0 : flatGroups.has(definition) ? "none" : "contain";
      let names;
      if (definition === "root" || !resolveDefs.has(definition)) {
        names = [definition];
      } else if (pairs.has(definition)) {
        if (phase === "old") {
          pairFrom.set(definition, resolveElements(definition));
          names = assignViewTransitionNames(definition, nameRegistry, assigned, void 0, className, classed, group, grouped, clipChildren);
          pairNames.set(definition, names);
        } else {
          for (const el of pairFrom.get(definition) ?? []) {
            el.style?.removeProperty("view-transition-name");
            nameRegistry.delete(el);
          }
          names = assignViewTransitionNames(pairs.get(definition), nameRegistry, assigned, pairNames.get(definition), className, classed, group, grouped, clipChildren);
        }
      } else {
        names = assignViewTransitionNames(definition, nameRegistry, assigned, void 0, className, classed, group, grouped, clipChildren);
      }
      const override = cropOverride.get(definition);
      names.forEach((name, index) => {
        const existing = layerTargets.get(name);
        layerTargets.set(name, existing && existing !== target ? { ...existing, ...target } : target);
        if (override !== void 0)
          cropForName.set(name, override);
        const stagger2 = layerStagger.get(name) ?? {};
        stagger2[phase] = [index, names.length];
        layerStagger.set(name, stagger2);
      });
    });
  };
  const staggerPosition = (name, type) => {
    const stagger2 = layerStagger.get(name);
    const position = type === "old" ? stagger2?.old : type === "new" ? stagger2?.new : (
      // group / group-children / image-pair persist across both.
      stagger2?.new ?? stagger2?.old
    );
    return position ?? [-1, 1];
  };
  const resolveLayerTransition = (target, type, transitionName, index, total) => {
    const transition2 = mergeTransition(getValueTransition$1(defaultOptions, transitionName), getValueTransition$1(layerOptions(target, type) ?? {}, transitionName));
    if (typeof transition2.delay === "function") {
      transition2.delay = transition2.delay(index, total);
    }
    return transition2;
  };
  const cropBox = /* @__PURE__ */ new Map();
  const measureLayers = (phase) => nameRegistry.forEach((name, element) => {
    const rect = element.getBoundingClientRect?.();
    if (rect && rect.height) {
      const entry = cropBox.get(name) ?? {};
      entry[phase] = { width: rect.width, height: rect.height };
      cropBox.set(name, entry);
    }
  });
  const finalizeCrop = () => {
    croppedNames.clear();
    for (const name of layerStagger.keys()) {
      if (name === "root")
        continue;
      if (cropForName.get(name) ?? aspectChanged(name)) {
        croppedNames.add(name);
      }
    }
  };
  const aspectChanged = (name) => {
    const box = cropBox.get(name);
    if (!box?.old || !box?.new || !box.old.height || !box.new.height) {
      return false;
    }
    return Math.abs(box.old.width / box.old.height - box.new.width / box.new.height) > ASPECT_TOLERANCE;
  };
  const commitViewCSS = () => {
    if (!hasTarget("root", targets)) {
      css.set(":root", { "view-transition-name": "none" });
    }
    css.set("::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)", { "animation-timing-function": "linear !important" });
    croppedNames.forEach((name) => {
      css.set(`::view-transition-group(${name})`, { overflow: "clip" });
      css.set(`::view-transition-old(${name}), ::view-transition-new(${name})`, { width: "100%", height: "100%", "object-fit": "cover" });
    });
    clipChildren.forEach((name) => {
      css.set(`::view-transition-group-children(${name})`, {
        overflow: "clip"
      });
    });
    css.commit();
  };
  const cleanup = () => {
    releaseViewTransitionNames(assigned, classed, grouped);
    css.remove();
  };
  const callback = async () => {
    await update();
    resolveLayers("new");
    measureLayers("new");
    finalizeCrop();
    commitViewCSS();
  };
  let transition;
  try {
    resolveLayers("old");
    measureLayers("old");
    commitViewCSS();
    transition = document.startViewTransition(callback);
  } catch (error) {
    cleanup();
    return Promise.reject(error);
  }
  transition.finished.finally(cleanup);
  return new Promise((resolve, reject) => {
    transition.ready.then(() => {
      const generatedViewAnimations = getViewAnimations();
      const animations2 = [];
      const explicitlyAnimated = /* @__PURE__ */ new Set();
      const opacityAnimated = /* @__PURE__ */ new Set();
      layerTargets.forEach((target, name) => {
        const stagger2 = layerStagger.get(name);
        const enterApplies = !!stagger2?.new && !stagger2?.old;
        const exitApplies = !!stagger2?.old && !stagger2?.new;
        for (const key of definitionNames) {
          if (!target[key])
            continue;
          if (key === "enter" && !enterApplies)
            continue;
          if (key === "exit" && !exitApplies)
            continue;
          const type = chooseLayerType(key);
          const [index, total] = staggerPosition(name, type);
          if (index === -1)
            continue;
          const { keyframes, options } = target[key];
          for (let [valueName, valueKeyframes] of Object.entries(keyframes)) {
            if (valueKeyframes == null)
              continue;
            if (valueName === "x" || valueName === "y") {
              warnOnce(false, `animateView() animates view-transition layers with CSS properties; the "${valueName}" shorthand has no effect - use transform, e.g. { transform: "translateX(40px)" }.`);
              continue;
            }
            if (key === "new" && enterApplies && target.enter?.keyframes[valueName] != null) {
              continue;
            }
            if (key === "old" && exitApplies && target.exit?.keyframes[valueName] != null) {
              continue;
            }
            const valueOptions = mergeTransition(getValueTransition$1(defaultOptions, valueName), getValueTransition$1(options, valueName));
            if (!Array.isArray(valueKeyframes)) {
              const exitValue = key === "enter" ? target.exit?.keyframes[valueName] : void 0;
              const allowDefault = valueName === "opacity" || (type === "new" ? enterApplies : exitApplies);
              const from = exitValue != null ? Array.isArray(exitValue) ? exitValue[exitValue.length - 1] : exitValue : allowDefault ? ORIGIN_DEFAULTS[type]?.[valueName] : void 0;
              if (from !== void 0) {
                valueKeyframes = [from, valueKeyframes];
              }
            }
            if (typeof valueOptions.delay === "function") {
              valueOptions.delay = valueOptions.delay(index, total);
            }
            valueOptions.duration && (valueOptions.duration = secondsToMilliseconds(valueOptions.duration));
            valueOptions.delay && (valueOptions.delay = secondsToMilliseconds(valueOptions.delay));
            animations2.push(new NativeAnimation({
              ...valueOptions,
              element: document.documentElement,
              name: valueName,
              pseudoElement: `::view-transition-${type}(${name})`,
              keyframes: valueKeyframes
            }));
            explicitlyAnimated.add(`${name}:${type}`);
            if (valueName === "opacity") {
              opacityAnimated.add(`${name}:${type}`);
            }
          }
        }
      });
      for (const animation of generatedViewAnimations) {
        if (animation.playState === "finished")
          continue;
        const { effect } = animation;
        if (!effect || !(effect instanceof KeyframeEffect))
          continue;
        const { pseudoElement } = effect;
        if (!pseudoElement)
          continue;
        const name = getViewAnimationLayerInfo(pseudoElement);
        if (!name)
          continue;
        const targetDefinition = layerTargets.get(name.layer);
        if (explicitlyAnimated.has(`${name.layer}:${name.type}`)) {
          const isCrossfade = opacityAnimated.has(`${name.layer}:new`) && opacityAnimated.has(`${name.layer}:old`);
          if (isCrossfade && effect.getKeyframes().some((keyframe) => keyframe.mixBlendMode)) {
            animations2.push(new NativeAnimationWrapper(animation));
          } else {
            animation.cancel();
          }
          continue;
        }
        const stagger2 = layerStagger.get(name.layer);
        const isMorphCrossfade = (name.type === "old" || name.type === "new") && !!stagger2?.old && !!stagger2?.new;
        const timingType = name.type.startsWith("group") || isMorphCrossfade ? "group" : name.type;
        const [index, total] = staggerPosition(name.layer, timingType);
        const transitionName = timingType === "group" ? "layout" : "";
        let animationTransition = resolveLayerTransition(targetDefinition, timingType, transitionName, index === -1 ? 0 : index, total);
        const visualDuration = animationTransition.visualDuration;
        animationTransition.duration && (animationTransition.duration = secondsToMilliseconds(animationTransition.duration));
        animationTransition = applyGeneratorOptions(animationTransition);
        const duration = isMorphCrossfade && visualDuration !== void 0 ? secondsToMilliseconds(visualDuration) : animationTransition.duration;
        const easing = isMorphCrossfade ? "linear" : mapEasingToNativeEasing(animationTransition.ease, animationTransition.duration);
        effect.updateTiming({
          delay: secondsToMilliseconds(animationTransition.delay ?? 0),
          duration,
          easing
        });
        animations2.push(new NativeAnimationWrapper(animation));
      }
      resolve(new GroupAnimation(animations2));
    }).catch(() => (
      /**
       * `ready` rejects when the transition is skipped - no visual
       * change, or superseded by an interrupting transition. The DOM
       * update still applied, so settle with no animations rather than
       * surfacing it as an error to an awaiting caller. A genuine
       * failure in `update()` rejects `updateCallbackDone` (already
       * settled by now), so propagate that instead.
       */
      transition.updateCallbackDone.then(() => resolve(new GroupAnimation([])), reject)
    ));
  });
}
function layerOptions(target, type) {
  for (const bucket of typeBuckets[type] ?? []) {
    const options = target?.[bucket]?.options;
    if (options)
      return options;
  }
}
function mergeTransition(base, override) {
  const merged = { ...base, ...override };
  if (override.duration !== void 0) {
    if (override.visualDuration === void 0)
      delete merged.visualDuration;
    if (override.type === void 0)
      delete merged.type;
  }
  return merged;
}
let builders = [];
let current = null;
function next() {
  current = null;
  const [nextBuilder] = builders;
  if (nextBuilder)
    start(nextBuilder);
}
function start(builder) {
  removeItem(builders, builder);
  current = builder;
  startViewAnimation(builder).then((animation) => {
    builder.notifyReady(animation);
    return animation.finished;
  }).catch((error) => builder.notifyReject(error)).finally(next);
}
function processQueue() {
  for (let i = builders.length - 1; i >= 0; i--) {
    const builder = builders[i];
    const { interrupt } = builder.options;
    if (interrupt === "immediate") {
      const batchedUpdates = builders.slice(0, i + 1).map((b) => b.update);
      const remaining = builders.slice(i + 1);
      builder.update = () => {
        batchedUpdates.forEach((update) => update());
      };
      builders = [builder, ...remaining];
      break;
    }
  }
  if (!current || builders[0]?.options.interrupt === "immediate") {
    next();
  }
}
function addToQueue(builder) {
  builders.push(builder);
  microtask.render(processQueue);
}
class ViewTransitionBuilder {
  constructor(update, options = {}) {
    this.currentSubject = "root";
    this.targets = /* @__PURE__ */ new Map();
    this.resolveDefs = /* @__PURE__ */ new Set();
    this.cropOverride = /* @__PURE__ */ new Map();
    this.pairs = /* @__PURE__ */ new Map();
    this.classNames = /* @__PURE__ */ new Map();
    this.flatGroups = /* @__PURE__ */ new Set();
    this.notifyReady = noop;
    this.notifyReject = noop;
    this.readyPromise = new Promise((resolve, reject) => {
      this.notifyReady = resolve;
      this.notifyReject = reject;
    });
    this.update = update;
    this.options = {
      interrupt: "wait",
      ...options
    };
    this.readyPromise.catch(noop);
    addToQueue(this);
  }
  /**
   * Target elements resolved from a selector or Element, each assigned a
   * `view-transition-name` automatically.
   *
   * Passing a second target pairs them: the first is resolved in the old
   * snapshot and the second in the new, sharing one name so two *different*
   * elements morph into each other (e.g. `.add(card, ".modal")`). Symmetric -
   * pass them the other way round to morph back.
   */
  add(subject, newSubject) {
    this.currentSubject = subject;
    this.resolveDefs.add(subject);
    if (newSubject !== void 0)
      this.pairs.set(subject, newSubject);
    if (!this.targets.has(subject))
      this.targets.set(subject, {});
    return this;
  }
  /**
   * Control this subject's crop (clip + `object-fit: cover` + animated
   * corners). By default a subject auto-crops only when it actually morphs -
   * present in both snapshots (a survivor, or an `.add(a, b)` pair). A
   * fade-only enter/exit has no second box to crop against, so it's left to
   * the browser default; in particular the `overflow: clip` a crop adds would
   * otherwise clip a mis-sized enter/exit layer to nothing.
   *
   * `.crop(false)` forces the crop off (e.g. a text morph, where
   * `object-fit: cover` clips glyphs as the box grows); `.crop(true)` forces
   * it on for a non-morph the default wouldn't otherwise crop.
   */
  crop(enabled = true) {
    this.cropOverride.set(this.currentSubject, enabled);
    return this;
  }
  /**
   * By default a subject's layer nests under its nearest DOM-ancestor layer
   * (`view-transition-group: contain`), so the ancestor's clip/transform/opacity
   * apply to it through the transition - mirroring how the DOM actually paints,
   * and letting a wrapper crop its child for the whole morph rather than only
   * once the live DOM takes back over. (Needs a browser that supports nested
   * view-transition groups; elsewhere it degrades to the flat default.)
   *
   * Call `.group(false)` to opt out: the layer stays flat and top-level, so it
   * animates independently and escapes an ancestor's clip - e.g. an element
   * that should lift out of a card and fly across, which nesting would clip.
   */
  group(enabled = true) {
    enabled ? this.flatGroups.delete(this.currentSubject) : this.flatGroups.add(this.currentSubject);
    return this;
  }
  /**
   * Tag this subject's generated layers with a `view-transition-class`, so
   * they can be targeted from CSS - `::view-transition-group(.name)`,
   * `::view-transition-old/new(.name)`, `::view-transition-image-pair(.name)`
   * - without the opaque generated `view-transition-name`. Because `.add()`
   * can match many elements, a shared class targets them all at once (and,
   * for a pair, both ends). The escape hatch for z-index / custom keyframes
   * on a morph layer.
   */
  class(name) {
    this.classNames.set(this.currentSubject, name);
    return this;
  }
  /**
   * Set the transition for this subject's morph. The morph is enabled
   * automatically by `.add()`; this just customises its timing (duration,
   * easing, a `delay`/`stagger`, …). On the implicit `root` subject it also
   * opts the page into the transition (the root crossfade).
   */
  layout(options = {}) {
    this.updateTarget("layout", {}, options);
    return this;
  }
  enter(keyframes, options) {
    this.updateTarget("enter", keyframes, options);
    return this;
  }
  exit(keyframes, options) {
    this.updateTarget("exit", keyframes, options);
    return this;
  }
  /**
   * Animate the new view directly, whether the element is appearing or
   * persisting (unlike `.enter()`, which only fires for a pure newcomer).
   * Pair with `.old()` for a crossfade or slide-through.
   */
  new(keyframes, options) {
    this.updateTarget("new", keyframes, options);
    return this;
  }
  /**
   * Animate the old view directly, whether the element is leaving or
   * persisting (unlike `.exit()`, which only fires for a pure leaver).
   */
  old(keyframes, options) {
    this.updateTarget("old", keyframes, options);
    return this;
  }
  updateTarget(target, keyframes, options = {}) {
    const { currentSubject, targets } = this;
    if (!targets.has(currentSubject)) {
      targets.set(currentSubject, {});
    }
    const targetData = targets.get(currentSubject);
    targetData[target] = { keyframes, options };
  }
  then(resolve, reject) {
    return this.readyPromise.then(resolve, reject);
  }
}
function animateView(update, options = {}) {
  return new ViewTransitionBuilder(update, options);
}
function isObjectKey(key, object) {
  return key in object;
}
class ObjectVisualElement extends VisualElement {
  constructor() {
    super(...arguments);
    this.type = "object";
  }
  readValueFromInstance(instance, key) {
    if (isObjectKey(key, instance)) {
      const value = instance[key];
      if (typeof value === "string" || typeof value === "number") {
        return value;
      }
    }
    return void 0;
  }
  getBaseTargetFromProps() {
    return void 0;
  }
  removeValueFromRenderState(key, renderState) {
    delete renderState.output[key];
  }
  measureInstanceViewportBox() {
    return createBox();
  }
  build(renderState, latestValues) {
    Object.assign(renderState.output, latestValues);
  }
  renderInstance(instance, { output }) {
    Object.assign(instance, output);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}
function copyAxisDeltaInto(delta, originDelta) {
  delta.translate = originDelta.translate;
  delta.scale = originDelta.scale;
  delta.originPoint = originDelta.originPoint;
  delta.origin = originDelta.origin;
}
const SCALE_PRECISION = 1e-4;
const SCALE_MIN = 1 - SCALE_PRECISION;
const SCALE_MAX = 1 + SCALE_PRECISION;
const TRANSLATE_PRECISION = 0.01;
const TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
const TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
  return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin;
  delta.originPoint = mixNumber(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  delta.translate = mixNumber(target.min, target.max, delta.origin) - delta.originPoint;
  if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) {
    delta.scale = 1;
  }
  if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) {
    delta.translate = 0;
  }
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
  calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
}
function calcRelativeAxis(target, relative, parent, anchor = 0) {
  const anchorPoint = anchor ? mixNumber(parent.min, parent.max, anchor) : parent.min;
  target.min = anchorPoint + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent, anchor) {
  calcRelativeAxis(target.x, relative.x, parent.x, anchor?.x);
  calcRelativeAxis(target.y, relative.y, parent.y, anchor?.y);
}
function calcRelativeAxisPosition(target, layout2, parent, anchor = 0) {
  const anchorPoint = anchor ? mixNumber(parent.min, parent.max, anchor) : parent.min;
  target.min = layout2.min - anchorPoint;
  target.max = target.min + calcLength(layout2);
}
function calcRelativePosition(target, layout2, parent, anchor) {
  calcRelativeAxisPosition(target.x, layout2.x, parent.x, anchor?.x);
  calcRelativeAxisPosition(target.y, layout2.y, parent.y, anchor?.y);
}
function removePointDelta(point2, translate, scale, originPoint, boxScale) {
  point2 -= translate;
  point2 = scalePoint(point2, 1 / scale, originPoint);
  if (boxScale !== void 0) {
    point2 = scalePoint(point2, 1 / boxScale, originPoint);
  }
  return point2;
}
function removeAxisDelta(axis, translate = 0, scale = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    const relativeProgress = mixNumber(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number")
    return;
  let originPoint = mixNumber(originAxis.min, originAxis.max, origin);
  if (axis === originAxis)
    originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
const xKeys = ["x", "scaleX", "originX"];
const yKeys = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
  removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
}
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
  return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
  return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
  return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
}
function boxEqualsRounded(a, b) {
  return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}
function axisDeltaEquals(a, b) {
  return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
}
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}
function buildProjectionTransform(delta, treeScale, latestTransform) {
  let transform2 = "";
  const xTranslate = delta.x.translate / treeScale.x;
  const yTranslate = delta.y.translate / treeScale.y;
  const zTranslate = latestTransform?.z || 0;
  if (xTranslate || yTranslate || zTranslate) {
    transform2 = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
  }
  if (treeScale.x !== 1 || treeScale.y !== 1) {
    transform2 += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
  }
  if (latestTransform) {
    const { transformPerspective, rotate, pathRotation, rotateX, rotateY, skewX, skewY } = latestTransform;
    if (transformPerspective)
      transform2 = `perspective(${transformPerspective}px) ${transform2}`;
    if (rotate)
      transform2 += `rotate(${rotate}deg) `;
    if (pathRotation)
      transform2 += `rotate(${pathRotation}deg) `;
    if (rotateX)
      transform2 += `rotateX(${rotateX}deg) `;
    if (rotateY)
      transform2 += `rotateY(${rotateY}deg) `;
    if (skewX)
      transform2 += `skewX(${skewX}deg) `;
    if (skewY)
      transform2 += `skewY(${skewY}deg) `;
  }
  const elementScaleX = delta.x.scale * treeScale.x;
  const elementScaleY = delta.y.scale * treeScale.y;
  if (elementScaleX !== 1 || elementScaleY !== 1) {
    transform2 += `scale(${elementScaleX}, ${elementScaleY})`;
  }
  return transform2 || "none";
}
const borderLabels = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius"
];
const numBorders = borderLabels.length;
const asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
const isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
  if (shouldCrossfadeOpacity) {
    target.opacity = mixNumber(0, lead.opacity ?? 1, easeCrossfadeIn(progress2));
    target.opacityExit = mixNumber(follow.opacity ?? 1, 0, easeCrossfadeOut(progress2));
  } else if (isOnlyMember) {
    target.opacity = mixNumber(follow.opacity ?? 1, lead.opacity ?? 1, progress2);
  }
  for (let i = 0; i < numBorders; i++) {
    const borderLabel = borderLabels[i];
    let followRadius = getRadius(follow, borderLabel);
    let leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0)
      continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mixNumber(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mixNumber(follow.rotate || 0, lead.rotate || 0, progress2);
  }
}
function getRadius(values, radiusName) {
  return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
const easeCrossfadeIn = /* @__PURE__ */ compress(0, 0.5, circOut);
const easeCrossfadeOut = /* @__PURE__ */ compress(0.5, 0.95, noop);
function compress(min, max, easing) {
  return (p) => {
    if (p < min)
      return 0;
    if (p > max)
      return 1;
    return easing(progress(min, max, p));
  };
}
function animateSingleValue(value, keyframes, options) {
  const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
  motionValue$1.start(animateMotionValue("", motionValue$1, keyframes, options));
  return motionValue$1.animation;
}
const compareByDepth = (a, b) => a.depth - b.depth;
class FlatTree {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  }
  remove(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  }
}
function delay(callback, timeout) {
  const start2 = time.now();
  const checkElapsed = ({ timestamp }) => {
    const elapsed = timestamp - start2;
    if (elapsed >= timeout) {
      cancelFrame(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  frame.setup(checkElapsed, true);
  return () => cancelFrame(checkElapsed);
}
function delayInSeconds(callback, timeout) {
  return delay(callback, secondsToMilliseconds(timeout));
}
class NodeStack {
  constructor() {
    this.members = [];
  }
  add(node) {
    addUniqueItem(this.members, node);
    for (let i = this.members.length - 1; i >= 0; i--) {
      const member = this.members[i];
      if (member === node || member === this.lead || member === this.prevLead)
        continue;
      const inst = member.instance;
      if ((!inst || inst.isConnected === false) && !member.snapshot) {
        removeItem(this.members, member);
        member.unmount();
      }
    }
    node.scheduleRender();
  }
  remove(node) {
    removeItem(this.members, node);
    if (node === this.prevLead)
      this.prevLead = void 0;
    if (node === this.lead) {
      const prevLead = this.members[this.members.length - 1];
      if (prevLead)
        this.promote(prevLead);
    }
  }
  relegate(node) {
    for (let i = this.members.indexOf(node) - 1; i >= 0; i--) {
      const member = this.members[i];
      if (member.isPresent !== false && member.instance?.isConnected !== false) {
        this.promote(member);
        return true;
      }
    }
    return false;
  }
  promote(node, preserveFollowOpacity) {
    const prevLead = this.lead;
    if (node === prevLead)
      return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.updateSnapshot();
      node.scheduleRender();
      const { layoutDependency: prevDep } = prevLead.options;
      const { layoutDependency: nextDep } = node.options;
      if (prevDep === void 0 || prevDep !== nextDep) {
        node.resumeFrom = prevLead;
        if (preserveFollowOpacity)
          prevLead.preserveOpacity = true;
        if (prevLead.snapshot) {
          node.snapshot = prevLead.snapshot;
          node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
        }
        if (node.root?.isUpdating)
          node.isLayoutDirty = true;
      }
      if (node.options.crossfade === false)
        prevLead.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((member) => {
      member.options.onExitComplete?.();
      member.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((member) => member.instance && member.scheduleRender(false));
  }
  removeLeadSnapshot() {
    if (this.lead?.snapshot)
      this.lead.snapshot = void 0;
  }
}
const globalProjectionState = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: true,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: false
};
const metrics = {
  nodes: 0,
  calculatedTargetDeltas: 0,
  calculatedProjections: 0
};
const transformAxes = ["", "X", "Y", "Z"];
const animationTarget = 1e3;
let id$1 = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
  const { latestValues } = visualElement;
  if (latestValues[key]) {
    values[key] = latestValues[key];
    visualElement.setStaticValue(key, 0);
    if (sharedAnimationValues) {
      sharedAnimationValues[key] = 0;
    }
  }
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
  projectionNode.hasCheckedOptimisedAppear = true;
  if (projectionNode.root === projectionNode)
    return;
  const { visualElement } = projectionNode.options;
  if (!visualElement)
    return;
  const appearId = getOptimisedAppearId(visualElement);
  if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
    const { layout: layout2, layoutId } = projectionNode.options;
    window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout2 || layoutId));
  }
  const { parent } = projectionNode;
  if (parent && !parent.hasCheckedOptimisedAppear) {
    cancelTreeOptimisedTransformAnimations(parent);
  }
}
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
  return class ProjectionNode {
    constructor(latestValues = {}, parent = defaultParent?.()) {
      this.id = id$1++;
      this.animationId = 0;
      this.animationCommitId = 0;
      this.children = /* @__PURE__ */ new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.isProjectionDirty = false;
      this.isSharedProjectionDirty = false;
      this.isTransformDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.hasCheckedOptimisedAppear = false;
      this.treeScale = { x: 1, y: 1 };
      this.eventHandlers = /* @__PURE__ */ new Map();
      this.hasTreeAnimated = false;
      this.layoutVersion = 0;
      this.updateScheduled = false;
      this.scheduleUpdate = () => this.update();
      this.projectionUpdateScheduled = false;
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.projectionUpdateScheduled = false;
        if (statsBuffer.value) {
          metrics.nodes = metrics.calculatedTargetDeltas = metrics.calculatedProjections = 0;
        }
        this.nodes.forEach(propagateDirtyNodes);
        this.nodes.forEach(resolveTargetDelta);
        this.nodes.forEach(calcProjection);
        this.nodes.forEach(cleanDirtyNodes);
        if (statsBuffer.addProjectionMetrics) {
          statsBuffer.addProjectionMetrics(metrics);
        }
      };
      this.resolvedRelativeTargetAt = 0;
      this.linkedParentVersion = 0;
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */ new Map();
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [...parent.path, parent] : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this)
        this.nodes = new FlatTree();
    }
    addEventListener(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      const subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager && subscriptionManager.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    /**
     * Lifecycles
     */
    mount(instance) {
      if (this.instance)
        return;
      this.isSVG = isSVGElement(instance) && !isSVGSVGElement(instance);
      this.instance = instance;
      const { layoutId, layout: layout2, visualElement } = this.options;
      if (visualElement && !visualElement.current) {
        visualElement.mount(instance);
      }
      this.root.nodes.add(this);
      this.parent && this.parent.children.add(this);
      if (this.root.hasTreeAnimated && (layout2 || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        let cancelDelay;
        let innerWidth = 0;
        const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
        frame.read(() => {
          innerWidth = window.innerWidth;
        });
        attachResizeListener(instance, () => {
          const newInnerWidth = window.innerWidth;
          if (newInnerWidth === innerWidth)
            return;
          innerWidth = newInnerWidth;
          this.root.updateBlockedByResize = true;
          cancelDelay && cancelDelay();
          cancelDelay = delay(resizeUnblockUpdate, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement && (layoutId || layout2)) {
        this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout: newLayout }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0;
            this.relativeTarget = void 0;
            return;
          }
          const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
          const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
          const hasTargetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout);
          const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
          if (this.options.layoutRoot || this.resumeFrom || hasOnlyRelativeTargetChanged || hasLayoutChanged && (hasTargetChanged || !this.currentAnimation)) {
            if (this.resumeFrom) {
              this.resumingFrom = this.resumeFrom;
              this.resumingFrom.resumingFrom = void 0;
            }
            const animationOptions = {
              ...getValueTransition$1(layoutTransition, "layout"),
              onPlay: onLayoutAnimationStart,
              onComplete: onLayoutAnimationComplete
            };
            if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            this.startAnimation(animationOptions);
            this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged, animationOptions.path);
          } else {
            if (!hasLayoutChanged) {
              finishAnimation(this);
            }
            if (this.isLead() && this.options.onExitComplete) {
              this.options.onExitComplete();
            }
          }
          this.targetLayout = newLayout;
        });
      }
    }
    unmount() {
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      const stack = this.getStack();
      stack && stack.remove(this);
      this.parent && this.parent.children.delete(this);
      this.instance = void 0;
      this.eventHandlers.clear();
      cancelFrame(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    // Note: currently only running on root node
    startUpdate() {
      if (this.isUpdateBlocked())
        return;
      this.isUpdating = true;
      this.nodes && this.nodes.forEach(resetSkewAndRotation);
      this.animationId++;
    }
    getTransformTemplate() {
      const { visualElement } = this.options;
      return visualElement && visualElement.getProps().transformTemplate;
    }
    willUpdate(shouldNotifyListeners = true) {
      this.root.hasTreeAnimated = true;
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
        cancelTreeOptimisedTransformAnimations(this);
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty)
        return;
      this.isLayoutDirty = true;
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        node.shouldResetTransform = true;
        if (typeof node.latestValues.x === "string" || typeof node.latestValues.y === "string") {
          node.isLayoutDirty = true;
        }
        node.updateScroll("snapshot");
        if (node.options.layoutRoot) {
          node.willUpdate(false);
        }
      }
      const { layoutId, layout: layout2 } = this.options;
      if (layoutId === void 0 && !layout2)
        return;
      const transformTemplate = this.getTransformTemplate();
      this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    update() {
      this.updateScheduled = false;
      const updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        const wasBlockedByResize = this.updateBlockedByResize;
        this.unblockUpdate();
        this.updateBlockedByResize = false;
        this.clearAllSnapshots();
        if (wasBlockedByResize) {
          this.nodes.forEach(forceLayoutMeasure);
        }
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(clearIsLayoutDirty);
        return;
      }
      this.animationCommitId = this.animationId;
      if (!this.isUpdating) {
        this.nodes.forEach(clearIsLayoutDirty);
      } else {
        this.isUpdating = false;
        this.nodes.forEach(ensureDraggedNodesSnapshotted);
        this.nodes.forEach(resetTransformStyle);
        this.nodes.forEach(updateLayout);
        this.nodes.forEach(notifyLayoutUpdate);
      }
      this.clearAllSnapshots();
      const now = time.now();
      frameData.delta = clamp(0, 1e3 / 60, now - frameData.timestamp);
      frameData.timestamp = now;
      frameData.isProcessing = true;
      frameSteps.update.process(frameData);
      frameSteps.preRender.process(frameData);
      frameSteps.render.process(frameData);
      frameData.isProcessing = false;
    }
    didUpdate() {
      if (!this.updateScheduled) {
        this.updateScheduled = true;
        microtask.read(this.scheduleUpdate);
      }
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    }
    scheduleUpdateProjection() {
      if (!this.projectionUpdateScheduled) {
        this.projectionUpdateScheduled = true;
        frame.preRender(this.updateProjection, false, true);
      }
    }
    scheduleCheckAfterUnmount() {
      frame.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      if (this.snapshot || !this.instance)
        return;
      this.snapshot = this.measure();
      if (this.snapshot && !calcLength(this.snapshot.measuredBox.x) && !calcLength(this.snapshot.measuredBox.y)) {
        this.snapshot = void 0;
      }
    }
    updateLayout() {
      if (!this.instance)
        return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          node.updateScroll();
        }
      }
      const prevLayout = this.layout;
      this.layout = this.measure(false);
      this.layoutVersion++;
      if (!this.layoutCorrected)
        this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement } = this.options;
      visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
    }
    updateScroll(phase = "measure") {
      let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
        needsMeasurement = false;
      }
      if (needsMeasurement && this.instance) {
        const isRoot = checkIsScrollRoot(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase,
          isRoot,
          offset: measureScroll(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : isRoot
        };
      }
    }
    resetTransform() {
      if (!resetTransform)
        return;
      const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      const transformTemplate = this.getTransformTemplate();
      const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && this.instance && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(removeTransform = true) {
      const pageBox = this.measurePageBox();
      let layoutBox = this.removeElementScroll(pageBox);
      if (removeTransform) {
        layoutBox = this.removeTransform(layoutBox);
      }
      roundBox(layoutBox);
      return {
        animationId: this.root.animationId,
        measuredBox: pageBox,
        layoutBox,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement } = this.options;
      if (!visualElement)
        return createBox();
      const box = visualElement.measureViewportBox();
      const wasInScrollRoot = this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot);
      if (!wasInScrollRoot) {
        const { scroll: scroll2 } = this.root;
        if (scroll2) {
          translateAxis(box.x, scroll2.offset.x);
          translateAxis(box.y, scroll2.offset.y);
        }
      }
      return box;
    }
    removeElementScroll(box) {
      const boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      if (this.scroll?.wasRoot) {
        return boxWithoutScroll;
      }
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        const { scroll: scroll2, options } = node;
        if (node !== this.root && scroll2 && options.layoutScroll) {
          if (scroll2.wasRoot) {
            copyBoxInto(boxWithoutScroll, box);
          }
          translateAxis(boxWithoutScroll.x, scroll2.offset.x);
          translateAxis(boxWithoutScroll.y, scroll2.offset.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = false, output) {
      const withTransforms = output || createBox();
      copyBoxInto(withTransforms, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          translateAxis(withTransforms.x, -node.scroll.offset.x);
          translateAxis(withTransforms.y, -node.scroll.offset.y);
        }
        if (!hasTransform(node.latestValues))
          continue;
        transformBox(withTransforms, node.latestValues, node.layout?.layoutBox);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues, this.layout?.layoutBox);
      }
      return withTransforms;
    }
    removeTransform(box) {
      const boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!hasTransform(node.latestValues))
          continue;
        let sourceBox;
        if (node.instance) {
          hasScale(node.latestValues) && node.updateSnapshot();
          sourceBox = createBox();
          copyBoxInto(sourceBox, node.measurePageBox());
        }
        removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot?.layoutBox, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    }
    setTargetDelta(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
      this.isProjectionDirty = true;
    }
    setOptions(options) {
      this.options = {
        ...this.options,
        ...options,
        crossfade: options.crossfade !== void 0 ? options.crossfade : true
      };
    }
    clearMeasurements() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      if (!this.relativeParent)
        return;
      if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
        this.relativeParent.resolveTargetDelta(true);
      }
    }
    resolveTargetDelta(forceRecalculation = false) {
      const lead = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
      this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
      this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
      if (canSkip)
        return;
      const { layout: layout2, layoutId } = this.options;
      if (!this.layout || !(layout2 || layoutId))
        return;
      this.resolvedRelativeTargetAt = frameData.timestamp;
      const relativeParent = this.getClosestProjectingParent();
      if (relativeParent && this.linkedParentVersion !== relativeParent.layoutVersion && !relativeParent.options.layoutRoot) {
        this.removeRelativeTarget();
      }
      if (!this.targetDelta && !this.relativeTarget) {
        if (this.options.layoutAnchor !== false && relativeParent && relativeParent.layout) {
          this.createRelativeTarget(relativeParent, this.layout.layoutBox, relativeParent.layout.layoutBox);
        } else {
          this.removeRelativeTarget();
        }
      }
      if (!this.relativeTarget && !this.targetDelta)
        return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
        this.forceRelativeParentToResolveTarget();
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.applyTransform(this.layout.layoutBox, false, this.target);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.layoutBox);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        if (this.options.layoutAnchor !== false && relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
          this.createRelativeTarget(relativeParent, this.target, relativeParent.target);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      if (statsBuffer.value) {
        metrics.calculatedTargetDeltas++;
      }
    }
    getClosestProjectingParent() {
      if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
        return void 0;
      }
      if (this.parent.isProjecting()) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(relativeParent, layout2, parentLayout) {
      this.relativeParent = relativeParent;
      this.linkedParentVersion = relativeParent.layoutVersion;
      this.forceRelativeParentToResolveTarget();
      this.relativeTarget = createBox();
      this.relativeTargetOrigin = createBox();
      calcRelativePosition(this.relativeTargetOrigin, layout2, parentLayout, this.options.layoutAnchor || void 0);
      copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const lead = this.getLead();
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      let canSkip = true;
      if (this.isProjectionDirty || this.parent?.isProjectionDirty) {
        canSkip = false;
      }
      if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
        canSkip = false;
      }
      if (this.resolvedRelativeTargetAt === frameData.timestamp) {
        canSkip = false;
      }
      if (canSkip)
        return;
      const { layout: layout2, layoutId } = this.options;
      this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout2 || layoutId))
        return;
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      const prevTreeScaleX = this.treeScale.x;
      const prevTreeScaleY = this.treeScale.y;
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
      if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
        lead.target = lead.layout.layoutBox;
        lead.targetWithTransforms = createBox();
      }
      const { target } = lead;
      if (!target) {
        if (this.prevProjectionDelta) {
          this.createProjectionDeltas();
          this.scheduleRender();
        }
        return;
      }
      if (!this.projectionDelta || !this.prevProjectionDelta) {
        this.createProjectionDeltas();
      } else {
        copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
        copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
      }
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
      if (statsBuffer.value) {
        metrics.calculatedProjections++;
      }
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(notifyAll2 = true) {
      this.options.visualElement?.scheduleRender();
      if (notifyAll2) {
        const stack = this.getStack();
        stack && stack.scheduleRender();
      }
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = createDelta();
      this.projectionDelta = createDelta();
      this.projectionDeltaWithTransform = createDelta();
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false, pathFn) {
      const snapshot = this.snapshot;
      const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
      const mixedValues = { ...this.latestValues };
      const targetDelta = createDelta();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = void 0;
      }
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      const relativeLayout = createBox();
      const snapshotSource = snapshot ? snapshot.source : void 0;
      const layoutSource = this.layout ? this.layout.source : void 0;
      const isSharedLayoutAnimation = snapshotSource !== layoutSource;
      const stack = this.getStack();
      const isOnlyMember = !stack || stack.members.length <= 1;
      const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      let prevRelativeTarget;
      const interpolate2 = pathFn?.interpolateProjection(delta);
      this.mixTargetDelta = (latest) => {
        const progress2 = latest / 1e3;
        const point2 = interpolate2?.(progress2);
        if (point2) {
          targetDelta.x.translate = point2.x;
          targetDelta.x.scale = mixNumber(delta.x.scale, 1, progress2);
          targetDelta.x.origin = delta.x.origin;
          targetDelta.x.originPoint = delta.x.originPoint;
          targetDelta.y.translate = point2.y;
          targetDelta.y.scale = mixNumber(delta.y.scale, 1, progress2);
          targetDelta.y.origin = delta.y.origin;
          targetDelta.y.originPoint = delta.y.originPoint;
        } else {
          mixAxisDeltaLinear(targetDelta.x, delta.x, progress2);
          mixAxisDeltaLinear(targetDelta.y, delta.y, progress2);
        }
        this.setTargetDelta(targetDelta);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0);
          mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress2);
          if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
            this.isProjectionDirty = false;
          }
          if (!prevRelativeTarget)
            prevRelativeTarget = createBox();
          copyBoxInto(prevRelativeTarget, this.relativeTarget);
        }
        if (isSharedLayoutAnimation) {
          this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
        }
        if (point2 && point2.rotate !== void 0) {
          if (!this.animationValues)
            this.animationValues = mixedValues;
          this.animationValues.pathRotation = point2.rotate;
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = progress2;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(options) {
      this.notifyListeners("animationStart");
      this.currentAnimation?.stop();
      this.resumingFrom?.currentAnimation?.stop();
      if (this.pendingAnimation) {
        cancelFrame(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = frame.update(() => {
        globalProjectionState.hasAnimatedSinceResize = true;
        this.motionValue || (this.motionValue = motionValue(0));
        this.motionValue.jump(0, false);
        this.currentAnimation = animateSingleValue(this.motionValue, [0, 1e3], {
          ...options,
          velocity: 0,
          isSync: true,
          onUpdate: (latest) => {
            this.mixTargetDelta(latest);
            options.onUpdate && options.onUpdate(latest);
          },
          onComplete: () => {
            options.onComplete && options.onComplete();
            this.completeAnimation();
          }
        });
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      const stack = this.getStack();
      stack && stack.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      if (this.currentAnimation) {
        this.mixTargetDelta && this.mixTargetDelta(animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const lead = this.getLead();
      let { targetWithTransforms, target, layout: layout2, latestValues } = lead;
      if (!targetWithTransforms || !target || !layout2)
        return;
      if (this !== lead && this.layout && layout2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout2.layoutBox)) {
        target = this.target || createBox();
        const xLength = calcLength(this.layout.layoutBox.x);
        target.x.min = lead.target.x.min;
        target.x.max = target.x.min + xLength;
        const yLength = calcLength(this.layout.layoutBox.y);
        target.y.min = lead.target.y.min;
        target.y.max = target.y.min + yLength;
      }
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    }
    registerSharedNode(layoutId, node) {
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      const stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      const config = node.options.initialPromotionConfig;
      node.promote({
        transition: config ? config.transition : void 0,
        preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
      });
    }
    isLead() {
      const stack = this.getStack();
      return stack ? stack.lead === this : true;
    }
    getLead() {
      const { layoutId } = this.options;
      return layoutId ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId } = this.options;
      return layoutId ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId } = this.options;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    }
    promote({ needsReset, transition, preserveFollowOpacity } = {}) {
      const stack = this.getStack();
      if (stack)
        stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition)
        this.setOptions({ transition });
    }
    relegate() {
      const stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    }
    resetSkewAndRotation() {
      const { visualElement } = this.options;
      if (!visualElement)
        return;
      let hasDistortingTransform = false;
      const { latestValues } = visualElement;
      if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) {
        hasDistortingTransform = true;
      }
      if (!hasDistortingTransform)
        return;
      const resetValues = {};
      if (latestValues.z) {
        resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
      }
      for (let i = 0; i < transformAxes.length; i++) {
        resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
        resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
      }
      visualElement.render();
      for (const key in resetValues) {
        visualElement.setStaticValue(key, resetValues[key]);
        if (this.animationValues) {
          this.animationValues[key] = resetValues[key];
        }
      }
      visualElement.scheduleRender();
    }
    applyProjectionStyles(targetStyle, styleProp) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        targetStyle.visibility = "hidden";
        return;
      }
      const transformTemplate = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        targetStyle.visibility = "";
        targetStyle.opacity = "";
        targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
        targetStyle.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return;
      }
      const lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        if (this.options.layoutId) {
          targetStyle.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
          targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          targetStyle.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return;
      }
      targetStyle.visibility = "";
      const valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      let transform2 = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        transform2 = transformTemplate(valuesToRender, transform2);
      }
      targetStyle.transform = transform2;
      const { x, y } = this.projectionDelta;
      targetStyle.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
      if (lead.animationValues) {
        targetStyle.opacity = lead === this ? valuesToRender.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        targetStyle.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
      }
      for (const key in scaleCorrectors) {
        if (valuesToRender[key] === void 0)
          continue;
        const { correct, applyTo, isCSSVariable } = scaleCorrectors[key];
        const corrected = transform2 === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
        if (applyTo) {
          const num = applyTo.length;
          for (let i = 0; i < num; i++) {
            targetStyle[applyTo[i]] = corrected;
          }
        } else {
          if (isCSSVariable) {
            this.options.visualElement.renderState.vars[key] = corrected;
          } else {
            targetStyle[key] = corrected;
          }
        }
      }
      if (this.options.layoutId) {
        targetStyle.pointerEvents = lead === this ? resolveMotionValue(styleProp?.pointerEvents) || "" : "none";
      }
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((node) => node.currentAnimation?.stop());
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  const snapshot = node.resumeFrom?.snapshot || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    const { layoutBox: layout2, measuredBox: measuredLayout } = node.layout;
    const { animationType } = node.options;
    const isShared = snapshot.source !== node.layout.source;
    if (animationType === "size") {
      eachAxis((axis) => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(axisSnapshot);
        axisSnapshot.min = layout2[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (animationType === "x" || animationType === "y") {
      const snapAxis = animationType === "x" ? "y" : "x";
      copyAxisInto(isShared ? snapshot.measuredBox[snapAxis] : snapshot.layoutBox[snapAxis], layout2[snapAxis]);
    } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout2)) {
      eachAxis((axis) => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(layout2[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
        if (node.relativeTarget && !node.currentAnimation) {
          node.isProjectionDirty = true;
          node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
        }
      });
    }
    const layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout2, snapshot.layoutBox);
    const visualDelta = createDelta();
    if (isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
    } else {
      calcBoxDelta(visualDelta, layout2, snapshot.layoutBox);
    }
    const hasLayoutChanged = !isDeltaZero(layoutDelta);
    let hasRelativeLayoutChanged = false;
    if (!node.resumeFrom) {
      const relativeParent = node.getClosestProjectingParent();
      if (relativeParent && !relativeParent.resumeFrom) {
        const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
        if (parentSnapshot && parentLayout) {
          const anchor = node.options.layoutAnchor || void 0;
          const relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox, anchor);
          const relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout2, parentLayout.layoutBox, anchor);
          if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
            hasRelativeLayoutChanged = true;
          }
          if (relativeParent.options.layoutRoot) {
            node.relativeTarget = relativeLayout;
            node.relativeTargetOrigin = relativeSnapshot;
            node.relativeParent = relativeParent;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout2,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeLayoutChanged
    });
  } else if (node.isLead()) {
    const { onExitComplete } = node.options;
    onExitComplete && onExitComplete();
  }
  node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
  if (statsBuffer.value) {
    metrics.nodes++;
  }
  if (!node.parent)
    return;
  if (!node.isProjecting()) {
    node.isProjectionDirty = node.parent.isProjectionDirty;
  }
  node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
  node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
  node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function forceLayoutMeasure(node) {
  node.isLayoutDirty = true;
  node.updateLayout();
}
function clearIsLayoutDirty(node) {
  node.isLayoutDirty = false;
}
function ensureDraggedNodesSnapshotted(node) {
  if (node.isAnimationBlocked && node.layout && !node.isLayoutDirty) {
    node.snapshot = node.layout;
    node.isLayoutDirty = true;
  }
}
function resetTransformStyle(node) {
  const { visualElement } = node.options;
  if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
    visualElement.notify("BeforeLayoutMeasure");
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
  node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetSkewAndRotation(node) {
  node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDeltaLinear(output, delta, p) {
  output.translate = mixNumber(delta.translate, 0, p);
  output.scale = mixNumber(delta.scale, 1, p);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
  output.min = mixNumber(from.min, to.min, p);
  output.max = mixNumber(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
  mixAxis(output.x, from.x, to.x, p);
  mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}
const defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
const userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
const roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
  axis.min = roundPoint(axis.min);
  axis.max = roundPoint(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout2) {
  return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout2), 0.2);
}
function checkNodeWasScrollRoot(node) {
  return node !== node.root && node.scroll?.wasRoot;
}
const DocumentProjectionNode = createProjectionNode({
  attachResizeListener: (ref, notify2) => addDomEvent(ref, "resize", notify2),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => true
});
const notify = (node) => !node.isLayoutDirty && node.willUpdate(false);
function nodeGroup() {
  const nodes = /* @__PURE__ */ new Set();
  const subscriptions = /* @__PURE__ */ new WeakMap();
  const dirtyAll = () => nodes.forEach(notify);
  return {
    add: (node) => {
      nodes.add(node);
      subscriptions.set(node, node.addEventListener("willUpdate", dirtyAll));
    },
    remove: (node) => {
      nodes.delete(node);
      const unsubscribe = subscriptions.get(node);
      if (unsubscribe) {
        unsubscribe();
        subscriptions.delete(node);
      }
      dirtyAll();
    },
    dirty: dirtyAll
  };
}
const rootProjectionNode = {
  current: void 0
};
const HTMLProjectionNode = createProjectionNode({
  measureScroll: (instance) => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      const documentNode = new DocumentProjectionNode({});
      documentNode.mount(window);
      documentNode.setOptions({ layoutScroll: true });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== void 0 ? value : "none";
  },
  checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
});
const layoutSelector = "[data-layout],[data-layout-id]";
const layoutNodes = /* @__PURE__ */ new WeakMap();
let pendingBuilders;
function collectLayoutElements(scope) {
  const elements = [];
  if (scope instanceof HTMLElement && scope.matches(layoutSelector)) {
    elements.push(scope);
  }
  scope.querySelectorAll(layoutSelector).forEach((element) => {
    if (element instanceof HTMLElement)
      elements.push(element);
  });
  return elements;
}
function flushPendingFrame() {
  if (frameData.isProcessing)
    return;
  const now = time.now();
  frameData.delta = clamp(0, 1e3 / 60, now - frameData.timestamp);
  frameData.timestamp = now;
  frameData.isProcessing = true;
  frameSteps.update.process(frameData);
  frameSteps.preRender.process(frameData);
  frameSteps.render.process(frameData);
  frameData.isProcessing = false;
}
function getProjectionParent(element) {
  let ancestor = element.parentElement;
  while (ancestor) {
    const node = layoutNodes.get(ancestor);
    if (node && node.instance)
      return node;
    ancestor = ancestor.parentElement;
  }
  return void 0;
}
function createVisualElement() {
  return new HTMLVisualElement({
    props: {},
    presenceContext: null,
    visualState: {
      latestValues: {},
      renderState: {
        transform: {},
        transformOrigin: {},
        style: {},
        vars: {}
      }
    }
  }, { allowProjection: true });
}
function readNodeOptions(element, transition) {
  const layoutAttr = element.getAttribute("data-layout");
  const layoutId = element.getAttribute("data-layout-id") ?? void 0;
  return {
    layoutId,
    layout: layoutAttr !== null ? true : void 0,
    animationType: !layoutAttr || layoutAttr === "true" ? "both" : layoutAttr,
    transition
  };
}
function prepareNode(element, transition) {
  let node = layoutNodes.get(element);
  if (!node) {
    let visualElement = visualElementStore.get(element);
    if (!visualElement)
      visualElement = createVisualElement();
    if (element.style.transform && !hasTransform(visualElement.latestValues)) {
      element.style.transform = "";
    }
    node = new HTMLProjectionNode(visualElement.latestValues, getProjectionParent(element));
    visualElement.projection = node;
    node.setOptions({
      ...readNodeOptions(element, transition),
      visualElement
    });
    node.mount(element);
    layoutNodes.set(element, node);
  } else {
    node.setOptions(readNodeOptions(element, transition));
  }
  node.isPresent = true;
  if (node.options.onExitComplete) {
    node.setOptions({ onExitComplete: void 0 });
  }
  return node;
}
function sortDocumentOrder(elements) {
  return [...elements].sort((a, b) => a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
}
function dropNode(element, node) {
  node.setOptions({ onExitComplete: void 0 });
  const stack = node.getStack();
  if (!stack || node.isLead())
    node.currentAnimation?.stop();
  node.unmount();
  layoutNodes.delete(element);
}
function flushPendingBuilders() {
  const builders2 = pendingBuilders;
  pendingBuilders = void 0;
  flushPendingFrame();
  const targets = /* @__PURE__ */ new Map();
  for (const builder of builders2) {
    for (const element of builder.collectTargets()) {
      const owners = targets.get(element);
      owners ? owners.push(builder) : targets.set(element, [builder]);
    }
  }
  const union = /* @__PURE__ */ new Map();
  for (const element of sortDocumentOrder(targets.keys())) {
    const owners = targets.get(element);
    const node = prepareNode(element, owners[owners.length - 1].transitionFor(element));
    for (const owner of owners)
      owner.adopt(element, node);
    union.set(element, node);
  }
  union.forEach((node) => {
    node.isLayoutDirty = false;
    node.willUpdate();
  });
  const updatePromises = [];
  for (const builder of builders2) {
    const result = builder.runUpdate();
    if (result)
      updatePromises.push(result);
  }
  const commit = () => {
    const newMemberIds = /* @__PURE__ */ new Set();
    for (const builder of builders2) {
      builder.reconcileAdditions(newMemberIds);
    }
    for (const builder of builders2) {
      builder.reconcileRemovals(newMemberIds);
    }
    let root;
    union.forEach((node) => root || (root = node.root));
    for (const builder of builders2)
      root || (root = builder.getRoot());
    root?.didUpdate();
    microtask.render(() => {
      for (const builder of builders2)
        builder.finalize();
    });
  };
  updatePromises.length ? Promise.all(updatePromises).then(commit) : commit();
}
class LayoutAnimationBuilder {
  constructor(scope, updateDom, defaultOptions) {
    this.scope = scope;
    this.updateDom = updateDom;
    this.defaultOptions = defaultOptions;
    this.sharedTransitions = /* @__PURE__ */ new Map();
    this.notifyReady = () => {
    };
    this.rejectReady = () => {
    };
    this.tracked = /* @__PURE__ */ new Map();
    this.restorePoints = /* @__PURE__ */ new Map();
    this.readyPromise = new Promise((resolve, reject) => {
      this.notifyReady = resolve;
      this.rejectReady = reject;
    });
    if (!pendingBuilders) {
      pendingBuilders = [];
      queueMicrotask(flushPendingBuilders);
    }
    pendingBuilders.push(this);
  }
  shared(id2, transition) {
    this.sharedTransitions.set(id2, transition);
    return this;
  }
  then(resolve, reject) {
    return this.readyPromise.then(resolve, reject);
  }
  transitionFor(element) {
    const layoutId = element.getAttribute("data-layout-id");
    return layoutId && this.sharedTransitions.get(layoutId) || this.defaultOptions;
  }
  adopt(element, node) {
    this.tracked.set(element, node);
    this.restorePoints.set(element, {
      parent: element.parentElement,
      next: element.nextSibling
    });
  }
  collectTargets() {
    return collectLayoutElements(this.scope);
  }
  runUpdate() {
    try {
      const result = this.updateDom();
      if (result && typeof result.then === "function") {
        return result.then(void 0, (error) => {
          this.updateError = error;
        });
      }
    } catch (error) {
      this.updateError = error;
    }
    return void 0;
  }
  reconcileAdditions(newMemberIds) {
    for (const element of collectLayoutElements(this.scope)) {
      if (this.tracked.has(element))
        continue;
      const node = prepareNode(element, this.transitionFor(element));
      this.adopt(element, node);
      node.options.layoutId && newMemberIds.add(node.options.layoutId);
    }
  }
  reconcileRemovals(newMemberIds) {
    this.tracked.forEach((node, element) => {
      if (element.isConnected)
        return;
      const restore = this.restorePoints.get(element);
      this.restorePoints.delete(element);
      const { layoutId } = node.options;
      const stack = node.getStack();
      const hasSurvivor = stack && stack.members.some((member) => member !== node && member.instance?.isConnected);
      if (layoutId && node.isLead() && hasSurvivor && !newMemberIds.has(layoutId)) {
        if (restore && restore.parent.isConnected) {
          restore.parent.insertBefore(element, restore.next && restore.next.parentNode === restore.parent ? restore.next : null);
          node.isPresent = false;
          node.setOptions({
            onExitComplete: () => {
              element.remove();
              dropNode(element, node);
            }
          });
          if (node.relegate())
            return;
          element.remove();
        }
      }
      dropNode(element, node);
      this.tracked.delete(element);
    });
  }
  getRoot() {
    let root;
    this.tracked.forEach((node) => root || (root = node.root));
    return root;
  }
  finalize() {
    if (this.updateError) {
      this.rejectReady(this.updateError);
      return;
    }
    const animations2 = /* @__PURE__ */ new Set();
    this.tracked.forEach((node) => {
      if (node.instance && node.currentAnimation) {
        animations2.add(node.currentAnimation);
      }
    });
    this.notifyReady(new GroupAnimation([...animations2]));
  }
}
function parseAnimateLayoutArgs(scopeOrUpdateDom, updateDomOrOptions, options) {
  if (typeof scopeOrUpdateDom === "function") {
    return {
      scope: document,
      updateDom: scopeOrUpdateDom,
      defaultOptions: updateDomOrOptions
    };
  }
  const scope = scopeOrUpdateDom instanceof Document ? scopeOrUpdateDom : resolveElements(scopeOrUpdateDom)[0] ?? document;
  return {
    scope,
    updateDom: updateDomOrOptions,
    defaultOptions: options
  };
}
const sync = frame;
const cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = (process) => cancelFrame(process);
  return acc;
}, {});
const DeprecatedLayoutGroupContext = reactExports.createContext(null);
function useIsMounted() {
  const isMounted = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}
function useForceUpdate() {
  const isMounted = useIsMounted();
  const [forcedRenderCount, setForcedRenderCount] = reactExports.useState(0);
  const forceRender = reactExports.useCallback(() => {
    isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
  }, [forcedRenderCount]);
  const deferredForceRender = reactExports.useCallback(() => frame.postRender(forceRender), [forceRender]);
  return [deferredForceRender, forcedRenderCount];
}
const shouldInheritGroup = (inherit) => inherit === true;
const shouldInheritId = (inherit) => shouldInheritGroup(inherit === true) || inherit === "id";
const LayoutGroup = ({ children, id: id2, inherit = true }) => {
  const layoutGroupContext = reactExports.useContext(LayoutGroupContext);
  const deprecatedLayoutGroupContext = reactExports.useContext(DeprecatedLayoutGroupContext);
  const [forceRender, key] = useForceUpdate();
  const context = reactExports.useRef(null);
  const upstreamId = layoutGroupContext.id || deprecatedLayoutGroupContext;
  if (context.current === null) {
    if (shouldInheritId(inherit) && upstreamId) {
      id2 = id2 ? upstreamId + "-" + id2 : upstreamId;
    }
    context.current = {
      id: id2,
      group: shouldInheritGroup(inherit) ? layoutGroupContext.group || nodeGroup() : nodeGroup()
    };
  }
  const memoizedContext = reactExports.useMemo(() => ({ ...context.current, forceRender }), [key]);
  return jsxRuntimeExports.jsx(LayoutGroupContext.Provider, { value: memoizedContext, children });
};
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}
const getContextWindow = ({ current: current2 }) => {
  return current2 ? current2.ownerDocument.defaultView : null;
};
const distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
  const xDelta = distance(a.x, b.x);
  const yDelta = distance(a.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}
const overflowStyles$1 = /* @__PURE__ */ new Set(["auto", "scroll"]);
class PanSession {
  constructor(event, handlers, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3, element } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.lastRawMoveEventInfo = null;
    this.handlers = {};
    this.contextWindow = window;
    this.scrollPositions = /* @__PURE__ */ new Map();
    this.removeScrollListeners = null;
    this.onElementScroll = (event2) => {
      this.handleScroll(event2.target);
    };
    this.onWindowScroll = () => {
      this.handleScroll(window);
    };
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      if (this.lastRawMoveEventInfo) {
        this.lastMoveEventInfo = transformPoint(this.lastRawMoveEventInfo, this.transformPagePoint);
      }
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2D(info2.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { point: point3 } = info2;
      const { timestamp: timestamp2 } = frameData;
      this.history.push({ ...point3, timestamp: timestamp2 });
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart && onStart(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove && onMove(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.lastMoveEvent = event2;
      this.lastRawMoveEventInfo = info2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      frame.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.end();
      const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
      if (this.dragSnapToOrigin || !this.startEvent) {
        resumeAnimation && resumeAnimation();
      }
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
      if (this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (!isPrimaryPointer(event))
      return;
    this.dragSnapToOrigin = dragSnapToOrigin;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    this.distanceThreshold = distanceThreshold;
    this.contextWindow = contextWindow || window;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const { point: point2 } = initialInfo;
    const { timestamp } = frameData;
    this.history = [{ ...point2, timestamp }];
    const { onSessionStart } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    const eventOptions = { passive: true, capture: true };
    this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove, eventOptions), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp, eventOptions), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp, eventOptions));
    if (element) {
      this.startScrollTracking(element);
    }
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(element) {
    let current2 = element.parentElement;
    while (current2) {
      const style2 = getComputedStyle(current2);
      if (overflowStyles$1.has(style2.overflowX) || overflowStyles$1.has(style2.overflowY)) {
        this.scrollPositions.set(current2, {
          x: current2.scrollLeft,
          y: current2.scrollTop
        });
      }
      current2 = current2.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    });
    window.addEventListener("scroll", this.onElementScroll, {
      capture: true
    });
    window.addEventListener("scroll", this.onWindowScroll);
    this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: true
      });
      window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(target) {
    const initial = this.scrollPositions.get(target);
    if (!initial)
      return;
    const isWindow = target === window;
    const current2 = isWindow ? { x: window.scrollX, y: window.scrollY } : {
      x: target.scrollLeft,
      y: target.scrollTop
    };
    const delta = { x: current2.x - initial.x, y: current2.y - initial.y };
    if (delta.x === 0 && delta.y === 0)
      return;
    if (isWindow) {
      if (this.lastMoveEventInfo) {
        this.lastMoveEventInfo.point.x += delta.x;
        this.lastMoveEventInfo.point.y += delta.y;
      }
    } else {
      if (this.history.length > 0) {
        this.history[0].x -= delta.x;
        this.history[0].y -= delta.y;
      }
    }
    this.scrollPositions.set(target, current2);
    frame.update(this.updatePoint, true);
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners && this.removeListeners();
    this.removeScrollListeners && this.removeScrollListeners();
    this.scrollPositions.clear();
    cancelFrame(this.updatePoint);
  }
}
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo({ point: point2 }, history) {
  return {
    point: point2,
    delta: subtractPoint(point2, lastDevicePoint(history)),
    offset: subtractPoint(point2, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  if (timestampedPoint === history[0] && history.length > 2 && lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta) * 2) {
    timestampedPoint = history[1];
  }
  const time2 = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
  if (time2 === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time2,
    y: (lastPoint.y - timestampedPoint.y) / time2
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}
function applyConstraints(point2, { min, max }, elastic) {
  if (min !== void 0 && point2 < min) {
    point2 = elastic ? mixNumber(min, point2, elastic.min) : Math.max(point2, min);
  } else if (max !== void 0 && point2 > max) {
    point2 = elastic ? mixNumber(max, point2, elastic.max) : Math.min(point2, max);
  }
  return point2;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min = constraintsAxis.min - layoutAxis.min;
  let max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min, max] = [max, min];
  }
  return { min, max };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout2, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout2.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout2.min;
  }
  return relativeConstraints;
}
const defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}
const elementDragControls = /* @__PURE__ */ new WeakMap();
class VisualElementDragControls {
  constructor(visualElement) {
    this.openDragLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.latestPointerEvent = null;
    this.latestPanInfo = null;
    this.visualElement = visualElement;
  }
  start(originEvent, { snapToCursor = false, distanceThreshold } = {}) {
    const { presenceContext } = this.visualElement;
    if (presenceContext && presenceContext.isPresent === false)
      return;
    const onSessionStart = (event) => {
      if (snapToCursor) {
        this.snapToCursor(extractEventInfo(event).point);
      }
      this.stopAnimation();
    };
    const onStart = (event, info) => {
      const { drag: drag2, dragPropagation, onDragStart } = this.getProps();
      if (drag2 && !dragPropagation) {
        if (this.openDragLock)
          this.openDragLock();
        this.openDragLock = setDragLock(drag2);
        if (!this.openDragLock)
          return;
      }
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = void 0;
      }
      eachAxis((axis) => {
        let current2 = this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current2)) {
          const { projection } = this.visualElement;
          if (projection && projection.layout) {
            const measuredAxis = projection.layout.layoutBox[axis];
            if (measuredAxis) {
              const length = calcLength(measuredAxis);
              current2 = length * (parseFloat(current2) / 100);
            }
          }
        }
        this.originPoint[axis] = current2;
      });
      if (onDragStart) {
        frame.update(() => onDragStart(event, info), false, true);
      }
      addValueToWillChange(this.visualElement, "transform");
      const { animationState } = this.visualElement;
      animationState && animationState.setActive("whileDrag", true);
    };
    const onMove = (event, info) => {
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
      if (!dragPropagation && !this.openDragLock)
        return;
      const { offset } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset);
        if (this.currentDirection !== null) {
          onDirectionLock && onDirectionLock(this.currentDirection);
        }
        return;
      }
      this.updateAxis("x", info.point, offset);
      this.updateAxis("y", info.point, offset);
      this.visualElement.render();
      if (onDrag) {
        frame.update(() => onDrag(event, info), false, true);
      }
    };
    const onSessionEnd = (event, info) => {
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      this.stop(event, info);
      this.latestPointerEvent = null;
      this.latestPanInfo = null;
    };
    const resumeAnimation = () => {
      const { dragSnapToOrigin: snap } = this.getProps();
      if (snap || this.constraints) {
        this.startAnimation({ x: 0, y: 0 });
      }
    };
    const { dragSnapToOrigin } = this.getProps();
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd,
      resumeAnimation
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin,
      distanceThreshold,
      contextWindow: getContextWindow(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(event, panInfo) {
    const finalEvent = event || this.latestPointerEvent;
    const finalPanInfo = panInfo || this.latestPanInfo;
    const isDragging2 = this.isDragging;
    this.cancel();
    if (!isDragging2 || !finalPanInfo || !finalEvent)
      return;
    const { velocity } = finalPanInfo;
    this.startAnimation(velocity);
    const { onDragEnd } = this.getProps();
    if (onDragEnd) {
      frame.postRender(() => onDragEnd(finalEvent, finalPanInfo));
    }
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = false;
    const { projection, animationState } = this.visualElement;
    if (projection) {
      projection.isAnimationBlocked = false;
    }
    this.endPanSession();
    const { dragPropagation } = this.getProps();
    if (!dragPropagation && this.openDragLock) {
      this.openDragLock();
      this.openDragLock = null;
    }
    animationState && animationState.setActive("whileDrag", false);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end();
    this.panSession = void 0;
  }
  updateAxis(axis, _point, offset) {
    const { drag: drag2 } = this.getProps();
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    const axisValue = this.getAxisMotionValue(axis);
    let next2 = this.originPoint[axis] + offset[axis];
    if (this.constraints && this.constraints[axis]) {
      next2 = applyConstraints(next2, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next2);
  }
  resolveConstraints() {
    const { dragConstraints, dragElastic } = this.getProps();
    const layout2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout;
    const prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout2) {
        this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && !isRefObject(dragConstraints) && layout2 && this.constraints && !this.hasMutatedConstraints) {
      eachAxis((axis) => {
        if (this.constraints !== false && this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
    if (!constraints || !isRefObject(constraints))
      return false;
    const constraintsElement = constraints.current;
    const { projection } = this.visualElement;
    if (!projection || !projection.layout)
      return false;
    if (projection.root) {
      projection.root.scroll = void 0;
      projection.root.updateScroll();
    }
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity) {
    const { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, this.currentDirection)) {
        return;
      }
      let transition = constraints && constraints[axis] || {};
      if (dragSnapToOrigin === true || dragSnapToOrigin === axis)
        transition = { min: 0, max: 0 };
      const bounceStiffness = dragElastic ? 200 : 1e6;
      const bounceDamping = dragElastic ? 40 : 1e7;
      const inertia = {
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...dragTransition,
        ...transition
      };
      return this.startAxisValueAnimation(axis, inertia);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    addValueToWillChange(this.visualElement, axis);
    return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
  }
  stopAnimation() {
    eachAxis((axis) => this.getAxisMotionValue(axis).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(axis) {
    const dragKey = `_drag${axis.toUpperCase()}`;
    const props = this.visualElement.getProps();
    const externalMotionValue = props[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, this.visualElement.latestValues[axis] ?? 0);
  }
  snapToCursor(point2) {
    eachAxis((axis) => {
      const { drag: drag2 } = this.getProps();
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      const { projection } = this.visualElement;
      const axisValue = this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        const { min, max } = projection.layout.layoutBox[axis];
        const current2 = axisValue.get() || 0;
        axisValue.set(point2[axis] - mixNumber(min, max, 0.5) + current2);
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: drag2, dragConstraints } = this.getProps();
    const { projection } = this.visualElement;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    const boxProgress = { x: 0, y: 0 };
    eachAxis((axis) => {
      const axisValue = this.getAxisMotionValue(axis);
      if (axisValue && this.constraints !== false) {
        const latest = axisValue.get();
        boxProgress[axis] = calcOrigin({ min: latest, max: latest }, this.constraints[axis]);
      }
    });
    const { transformTemplate } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    projection.root && projection.root.updateScroll();
    projection.updateLayout();
    this.constraints = false;
    this.resolveConstraints();
    eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, null))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      const { min, max } = this.constraints[axis];
      axisValue.set(mixNumber(min, max, boxProgress[axis]));
    });
    this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
      const { drag: drag2, dragListener = true } = this.getProps();
      const target = event.target;
      const isClickingTextInputChild = target !== element && isElementTextInput(target);
      if (drag2 && dragListener && !isClickingTextInputChild) {
        this.start(event);
      }
    });
    let stopResizeObservers;
    const measureDragConstraints = () => {
      const { dragConstraints } = this.getProps();
      if (isRefObject(dragConstraints) && dragConstraints.current) {
        this.constraints = this.resolveRefConstraints();
        if (!stopResizeObservers) {
          stopResizeObservers = startResizeObservers(element, dragConstraints.current, () => this.scalePositionWithinConstraints());
        }
      }
    };
    const { projection } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
    }
    frame.read(measureDragConstraints);
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis((axis) => {
          const motionValue2 = this.getAxisMotionValue(axis);
          if (!motionValue2)
            return;
          this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    }));
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener && stopLayoutUpdateListener();
      stopResizeObservers && stopResizeObservers();
    };
  }
  getProps() {
    const props = this.visualElement.getProps();
    const { drag: drag2 = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
    return {
      ...props,
      drag: drag2,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    };
  }
}
function skipFirstCall(callback) {
  let isFirst = true;
  return () => {
    if (isFirst) {
      isFirst = false;
      return;
    }
    callback();
  };
}
function startResizeObservers(element, constraintsElement, onResize) {
  const stopElement = resize(element, skipFirstCall(onResize));
  const stopContainer = resize(constraintsElement, skipFirstCall(onResize));
  return () => {
    stopElement();
    stopContainer();
  };
}
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}
class DragGesture extends Feature {
  constructor(node) {
    super(node);
    this.removeGroupControls = noop;
    this.removeListeners = noop;
    this.controls = new VisualElementDragControls(node);
  }
  mount() {
    const { dragControls } = this.node.getProps();
    if (dragControls) {
      this.removeGroupControls = dragControls.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || noop;
  }
  update() {
    const { dragControls } = this.node.getProps();
    const { dragControls: prevDragControls } = this.node.prevProps || {};
    if (dragControls !== prevDragControls) {
      this.removeGroupControls();
      if (dragControls) {
        this.removeGroupControls = dragControls.subscribe(this.controls);
      }
    }
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
    if (!this.controls.isDragging) {
      this.controls.endPanSession();
    }
  }
}
const asyncHandler = (handler) => (event, info) => {
  if (handler) {
    frame.update(() => handler(event, info), false, true);
  }
};
class PanGesture extends Feature {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = noop;
  }
  onPointerDown(pointerDownEvent) {
    this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: getContextWindow(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(onPanSessionStart),
      onStart: asyncHandler(onPanStart),
      onMove: asyncHandler(onPan),
      onEnd: (event, info) => {
        delete this.session;
        if (onPanEnd) {
          frame.postRender(() => onPanEnd(event, info));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener();
    this.session && this.session.end();
  }
}
let hasTakenAnySnapshot = false;
class MeasureLayoutWithContext extends reactExports.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
    const { projection } = visualElement;
    if (projection) {
      if (layoutGroup.group)
        layoutGroup.group.add(projection);
      if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
        switchLayoutGroup.register(projection);
      }
      if (hasTakenAnySnapshot) {
        projection.root.didUpdate();
      }
      projection.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      projection.setOptions({
        ...projection.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove()
      });
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const { layoutDependency, visualElement, drag: drag2, isPresent } = this.props;
    const { projection } = visualElement;
    if (!projection)
      return null;
    projection.isPresent = isPresent;
    if (prevProps.layoutDependency !== layoutDependency) {
      projection.setOptions({
        ...projection.options,
        layoutDependency
      });
    }
    hasTakenAnySnapshot = true;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0 || prevProps.isPresent !== isPresent) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent) {
      if (isPresent) {
        projection.promote();
      } else if (!projection.relegate()) {
        frame.postRender(() => {
          const stack = projection.getStack();
          if (!stack || !stack.members.length) {
            this.safeToRemove();
          }
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const { visualElement, layoutAnchor } = this.props;
    const { projection } = visualElement;
    if (projection) {
      projection.options.layoutAnchor = layoutAnchor;
      projection.root.didUpdate();
      microtask.postRender(() => {
        if (!projection.currentAnimation && projection.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
    const { projection } = visualElement;
    hasTakenAnySnapshot = true;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup && layoutGroup.group)
        layoutGroup.group.remove(projection);
      if (promoteContext && promoteContext.deregister)
        promoteContext.deregister(projection);
    }
  }
  safeToRemove() {
    const { safeToRemove } = this.props;
    safeToRemove && safeToRemove();
  }
  render() {
    return null;
  }
}
function MeasureLayout(props) {
  const [isPresent, safeToRemove] = usePresence();
  const layoutGroup = reactExports.useContext(LayoutGroupContext);
  return jsxRuntimeExports.jsx(MeasureLayoutWithContext, { ...props, layoutGroup, switchLayoutGroup: reactExports.useContext(SwitchLayoutGroupContext), isPresent, safeToRemove });
}
const drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};
const layout = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};
const featureBundle = {
  ...animations,
  ...gestureAnimations,
  ...drag,
  ...layout
};
const motion = /* @__PURE__ */ createMotionProxy(featureBundle, createDomVisualElement);
function useUnmountEffect(callback) {
  return reactExports.useEffect(() => () => callback(), []);
}
const domMax = {
  ...domAnimation,
  ...drag,
  ...layout
};
const domMin = {
  renderer: createDomVisualElement,
  ...animations
};
function useMotionValueEvent(value, event, callback) {
  reactExports.useInsertionEffect(() => value.on(event, callback), [value, event, callback]);
}
function canUseNativeTimeline(target) {
  if (typeof window === "undefined")
    return false;
  return target ? supportsViewTimeline() : supportsScrollTimeline();
}
const maxElapsed = 50;
const createAxisInfo = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
});
const createScrollInfo = () => ({
  time: 0,
  x: createAxisInfo(),
  y: createAxisInfo()
});
const keys = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function updateAxisInfo(element, axisName, info, time2) {
  const axis = info[axisName];
  const { length, position } = keys[axisName];
  const prev = axis.current;
  const prevTime = info.time;
  axis.current = Math.abs(element[`scroll${position}`]);
  axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
  axis.offset.length = 0;
  axis.offset[0] = 0;
  axis.offset[1] = axis.scrollLength;
  axis.progress = progress(0, axis.scrollLength, axis.current);
  const elapsed = time2 - prevTime;
  axis.velocity = elapsed > maxElapsed ? 0 : velocityPerSecond(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time2) {
  updateAxisInfo(element, "x", info, time2);
  updateAxisInfo(element, "y", info, time2);
  info.time = time2;
}
function calcInset(element, container) {
  const inset = { x: 0, y: 0 };
  let current2 = element;
  while (current2 && current2 !== container) {
    if (isHTMLElement(current2)) {
      inset.x += current2.offsetLeft;
      inset.y += current2.offsetTop;
      current2 = current2.offsetParent;
    } else if (current2.tagName === "svg") {
      const svgBoundingBox = current2.getBoundingClientRect();
      current2 = current2.parentElement;
      const parentBoundingBox = current2.getBoundingClientRect();
      inset.x += svgBoundingBox.left - parentBoundingBox.left;
      inset.y += svgBoundingBox.top - parentBoundingBox.top;
    } else if (current2 instanceof SVGGraphicsElement) {
      const { x, y } = current2.getBBox();
      inset.x += x;
      inset.y += y;
      let svg = null;
      let parent = current2.parentNode;
      while (!svg) {
        if (parent.tagName === "svg") {
          svg = parent;
        }
        parent = current2.parentNode;
      }
      current2 = svg;
    } else {
      break;
    }
  }
  return inset;
}
const namedEdges = {
  start: 0,
  center: 0.5,
  end: 1
};
function resolveEdge(edge, length, inset = 0) {
  let delta = 0;
  if (edge in namedEdges) {
    edge = namedEdges[edge];
  }
  if (typeof edge === "string") {
    const asNumber2 = parseFloat(edge);
    if (edge.endsWith("px")) {
      delta = asNumber2;
    } else if (edge.endsWith("%")) {
      edge = asNumber2 / 100;
    } else if (edge.endsWith("vw")) {
      delta = asNumber2 / 100 * document.documentElement.clientWidth;
    } else if (edge.endsWith("vh")) {
      delta = asNumber2 / 100 * document.documentElement.clientHeight;
    } else {
      edge = asNumber2;
    }
  }
  if (typeof edge === "number") {
    delta = length * edge;
  }
  return inset + delta;
}
const defaultOffset = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
  let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
  let targetPoint = 0;
  let containerPoint = 0;
  if (typeof offset === "number") {
    offsetDefinition = [offset, offset];
  } else if (typeof offset === "string") {
    offset = offset.trim();
    if (offset.includes(" ")) {
      offsetDefinition = offset.split(" ");
    } else {
      offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
    }
  }
  targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
  containerPoint = resolveEdge(offsetDefinition[1], containerLength);
  return targetPoint - containerPoint;
}
const ScrollOffset = {
  Enter: [
    [0, 1],
    [1, 1]
  ],
  Exit: [
    [0, 0],
    [1, 0]
  ],
  Any: [
    [1, 0],
    [0, 1]
  ],
  All: [
    [0, 0],
    [1, 1]
  ]
};
const point = { x: 0, y: 0 };
function getTargetSize(target) {
  return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : { width: target.clientWidth, height: target.clientHeight };
}
function resolveOffsets(container, info, options) {
  const { offset: offsetDefinition = ScrollOffset.All } = options;
  const { target = container, axis = "y" } = options;
  const lengthLabel = axis === "y" ? "height" : "width";
  const inset = target !== container ? calcInset(target, container) : point;
  const targetSize = target === container ? { width: container.scrollWidth, height: container.scrollHeight } : getTargetSize(target);
  const containerSize = {
    width: container.clientWidth,
    height: container.clientHeight
  };
  info[axis].offset.length = 0;
  let hasChanged = !info[axis].interpolate;
  const numOffsets = offsetDefinition.length;
  for (let i = 0; i < numOffsets; i++) {
    const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
    if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
      hasChanged = true;
    }
    info[axis].offset[i] = offset;
  }
  if (hasChanged) {
    info[axis].interpolate = interpolate(info[axis].offset, defaultOffset$1(offsetDefinition), { clamp: false });
    info[axis].interpolatorOffsets = [...info[axis].offset];
  }
  info[axis].progress = clamp(0, 1, info[axis].interpolate(info[axis].current));
}
function measure(container, target = container, info) {
  info.x.targetOffset = 0;
  info.y.targetOffset = 0;
  if (target !== container) {
    let node = target;
    while (node && node !== container) {
      info.x.targetOffset += node.offsetLeft;
      info.y.targetOffset += node.offsetTop;
      node = node.offsetParent;
    }
  }
  info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
  info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
  info.x.containerLength = container.clientWidth;
  info.y.containerLength = container.clientHeight;
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
  return {
    measure: (time2) => {
      measure(element, options.target, info);
      updateScrollInfo(element, info, time2);
      if (options.offset || options.target) {
        resolveOffsets(element, info, options);
      }
    },
    notify: () => onScroll(info)
  };
}
const scrollListeners = /* @__PURE__ */ new WeakMap();
const resizeListeners = /* @__PURE__ */ new WeakMap();
const onScrollHandlers = /* @__PURE__ */ new WeakMap();
const scrollSize = /* @__PURE__ */ new WeakMap();
const dimensionCheckProcesses = /* @__PURE__ */ new WeakMap();
const getEventTarget = (element) => element === document.scrollingElement ? window : element;
function scrollInfo(onScroll, { container = document.scrollingElement, trackContentSize = false, ...options } = {}) {
  if (!container)
    return noop;
  let containerHandlers = onScrollHandlers.get(container);
  if (!containerHandlers) {
    containerHandlers = /* @__PURE__ */ new Set();
    onScrollHandlers.set(container, containerHandlers);
  }
  const info = createScrollInfo();
  const containerHandler = createOnScrollHandler(container, onScroll, info, options);
  containerHandlers.add(containerHandler);
  if (!scrollListeners.has(container)) {
    const measureAll = () => {
      for (const handler of containerHandlers) {
        handler.measure(frameData.timestamp);
      }
      frame.preUpdate(notifyAll2);
    };
    const notifyAll2 = () => {
      for (const handler of containerHandlers) {
        handler.notify();
      }
    };
    const listener2 = () => frame.read(measureAll);
    scrollListeners.set(container, listener2);
    const target = getEventTarget(container);
    window.addEventListener("resize", listener2);
    if (container !== document.documentElement) {
      resizeListeners.set(container, resize(container, listener2));
    }
    target.addEventListener("scroll", listener2);
    listener2();
  }
  if (trackContentSize && !dimensionCheckProcesses.has(container)) {
    const listener2 = scrollListeners.get(container);
    const size = {
      width: container.scrollWidth,
      height: container.scrollHeight
    };
    scrollSize.set(container, size);
    const checkScrollDimensions = () => {
      const newWidth = container.scrollWidth;
      const newHeight = container.scrollHeight;
      if (size.width !== newWidth || size.height !== newHeight) {
        listener2();
        size.width = newWidth;
        size.height = newHeight;
      }
    };
    const dimensionCheckProcess = frame.read(checkScrollDimensions, true);
    dimensionCheckProcesses.set(container, dimensionCheckProcess);
  }
  const listener = scrollListeners.get(container);
  frame.read(listener, false, true);
  return () => {
    cancelFrame(listener);
    const currentHandlers = onScrollHandlers.get(container);
    if (!currentHandlers)
      return;
    currentHandlers.delete(containerHandler);
    if (currentHandlers.size)
      return;
    const scrollListener = scrollListeners.get(container);
    scrollListeners.delete(container);
    if (scrollListener) {
      getEventTarget(container).removeEventListener("scroll", scrollListener);
      resizeListeners.get(container)?.();
      window.removeEventListener("resize", scrollListener);
    }
    const dimensionCheckProcess = dimensionCheckProcesses.get(container);
    if (dimensionCheckProcess) {
      cancelFrame(dimensionCheckProcess);
      dimensionCheckProcesses.delete(container);
    }
    scrollSize.delete(container);
  };
}
const presets = [
  [ScrollOffset.Enter, "entry"],
  [ScrollOffset.Exit, "exit"],
  [ScrollOffset.Any, "cover"],
  [ScrollOffset.All, "contain"]
];
const stringToProgress = {
  start: 0,
  end: 1
};
function parseStringOffset(s) {
  const parts = s.trim().split(/\s+/);
  if (parts.length !== 2)
    return void 0;
  const a = stringToProgress[parts[0]];
  const b = stringToProgress[parts[1]];
  if (a === void 0 || b === void 0)
    return void 0;
  return [a, b];
}
function normaliseOffset(offset) {
  if (offset.length !== 2)
    return void 0;
  const result = [];
  for (const item of offset) {
    if (Array.isArray(item)) {
      result.push(item);
    } else if (typeof item === "string") {
      const parsed = parseStringOffset(item);
      if (!parsed)
        return void 0;
      result.push(parsed);
    } else {
      return void 0;
    }
  }
  return result;
}
function matchesPreset(offset, preset) {
  const normalised = normaliseOffset(offset);
  if (!normalised)
    return false;
  for (let i = 0; i < 2; i++) {
    const o = normalised[i];
    const p = preset[i];
    if (o[0] !== p[0] || o[1] !== p[1])
      return false;
  }
  return true;
}
function offsetToViewTimelineRange(offset) {
  if (!offset) {
    return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
  }
  for (const [preset, name] of presets) {
    if (matchesPreset(offset, preset)) {
      return { rangeStart: `${name} 0%`, rangeEnd: `${name} 100%` };
    }
  }
  return void 0;
}
const timelineCache = /* @__PURE__ */ new Map();
function scrollTimelineFallback(options) {
  const currentTime = { value: 0 };
  const cancel = scrollInfo((info) => {
    currentTime.value = info[options.axis].progress * 100;
  }, options);
  return { currentTime, cancel };
}
function getTimeline({ source, container, ...options }) {
  const { axis } = options;
  if (source)
    container = source;
  let containerCache = timelineCache.get(container);
  if (!containerCache) {
    containerCache = /* @__PURE__ */ new Map();
    timelineCache.set(container, containerCache);
  }
  const targetKey = options.target ?? "self";
  let targetCache = containerCache.get(targetKey);
  if (!targetCache) {
    targetCache = {};
    containerCache.set(targetKey, targetCache);
  }
  const axisKey = axis + (options.offset ?? []).join(",");
  if (!targetCache[axisKey]) {
    if (options.target && canUseNativeTimeline(options.target)) {
      const range = offsetToViewTimelineRange(options.offset);
      if (range) {
        targetCache[axisKey] = new ViewTimeline({
          subject: options.target,
          axis
        });
      } else {
        targetCache[axisKey] = scrollTimelineFallback({
          container,
          ...options
        });
      }
    } else if (canUseNativeTimeline()) {
      targetCache[axisKey] = new ScrollTimeline({
        source: container,
        axis
      });
    } else {
      targetCache[axisKey] = scrollTimelineFallback({
        container,
        ...options
      });
    }
  }
  return targetCache[axisKey];
}
function attachToAnimation(animation, options) {
  const timeline = getTimeline(options);
  const range = options.target ? offsetToViewTimelineRange(options.offset) : void 0;
  const useNative = options.target ? canUseNativeTimeline(options.target) && !!range : canUseNativeTimeline();
  return animation.attachTimeline({
    timeline: useNative ? timeline : void 0,
    ...range && useNative && {
      rangeStart: range.rangeStart,
      rangeEnd: range.rangeEnd
    },
    observe: (valueAnimation) => {
      valueAnimation.pause();
      return observeTimeline((progress2) => {
        valueAnimation.time = valueAnimation.iterationDuration * progress2;
      }, timeline);
    }
  });
}
function isElementTracking(options) {
  return options && (options.target || options.offset);
}
function isOnScrollWithInfo(onScroll) {
  return onScroll.length === 2;
}
function attachToFunction(onScroll, options) {
  if (isOnScrollWithInfo(onScroll) || isElementTracking(options)) {
    return scrollInfo((info) => {
      onScroll(info[options.axis].progress, info);
    }, options);
  } else {
    return observeTimeline(onScroll, getTimeline(options));
  }
}
function scroll(onScroll, { axis = "y", container = document.scrollingElement, ...options } = {}) {
  if (!container)
    return noop;
  const optionsWithDefaults = { axis, container, ...options };
  return typeof onScroll === "function" ? attachToFunction(onScroll, optionsWithDefaults) : attachToAnimation(onScroll, optionsWithDefaults);
}
const createScrollMotionValues = () => ({
  scrollX: motionValue(0),
  scrollY: motionValue(0),
  scrollXProgress: motionValue(0),
  scrollYProgress: motionValue(0)
});
const isRefPending = (ref) => {
  if (!ref)
    return false;
  return !ref.current;
};
function makeAccelerateConfig(axis, options, container, target) {
  return {
    // Refs attach child-first; defer so target.current is populated
    // before scroll() reads it.
    factory: (animation) => {
      let cleanup;
      const start2 = () => {
        if (isRefPending(container) || isRefPending(target)) {
          microtask.read(start2);
          return;
        }
        cleanup = scroll(animation, {
          ...options,
          axis,
          container: container?.current || void 0,
          target: target?.current || void 0
        });
      };
      microtask.read(start2);
      return () => {
        cancelMicrotask(start2);
        cleanup?.();
      };
    },
    times: [0, 1],
    keyframes: [0, 1],
    ease: (v) => v,
    duration: 1
  };
}
function canAccelerateScroll(target, offset) {
  if (typeof window === "undefined")
    return false;
  return target ? supportsViewTimeline() && !!offsetToViewTimelineRange(offset) : supportsScrollTimeline();
}
function useScroll({ container, target, ...options } = {}) {
  const values = useConstant(createScrollMotionValues);
  if (canAccelerateScroll(target, options.offset)) {
    values.scrollXProgress.accelerate = makeAccelerateConfig("x", options, container, target);
    values.scrollYProgress.accelerate = makeAccelerateConfig("y", options, container, target);
  }
  const scrollAnimation = reactExports.useRef(null);
  const needsStart = reactExports.useRef(false);
  const start2 = reactExports.useCallback(() => {
    scrollAnimation.current = scroll((_progress, { x, y }) => {
      values.scrollX.set(x.current);
      values.scrollXProgress.set(x.progress);
      values.scrollY.set(y.current);
      values.scrollYProgress.set(y.progress);
    }, {
      ...options,
      container: container?.current || void 0,
      target: target?.current || void 0
    });
    return () => {
      scrollAnimation.current?.();
    };
  }, [container, target, JSON.stringify(options.offset)]);
  useIsomorphicLayoutEffect(() => {
    needsStart.current = false;
    if (isRefPending(container) || isRefPending(target)) {
      needsStart.current = true;
      return;
    } else {
      return start2();
    }
  }, [start2]);
  reactExports.useEffect(() => {
    if (!needsStart.current)
      return;
    let cleanup;
    const tryStart = () => {
      const containerPending = isRefPending(container);
      const targetPending = isRefPending(target);
      if (!containerPending && !targetPending)
        cleanup = start2();
    };
    microtask.read(tryStart);
    return () => {
      cancelMicrotask(tryStart);
      cleanup?.();
    };
  }, [start2]);
  return values;
}
function useElementScroll(ref) {
  return useScroll({ container: ref });
}
function useViewportScroll() {
  return useScroll();
}
function useMotionValue(initial) {
  const value = useConstant(() => motionValue(initial));
  const { isStatic } = reactExports.useContext(MotionConfigContext);
  if (isStatic) {
    const [, setLatest] = reactExports.useState(initial);
    reactExports.useEffect(() => value.on("change", setLatest), []);
  }
  return value;
}
function useCombineMotionValues(values, combineValues) {
  const value = useMotionValue(combineValues());
  const updateValue = () => value.set(combineValues());
  updateValue();
  useIsomorphicLayoutEffect(() => {
    const scheduleUpdate = () => frame.preRender(updateValue, false, true);
    const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
    return () => {
      subscriptions.forEach((unsubscribe) => unsubscribe());
      cancelFrame(updateValue);
    };
  });
  return value;
}
function useMotionTemplate(fragments, ...values) {
  const numFragments = fragments.length;
  function buildValue() {
    let output = ``;
    for (let i = 0; i < numFragments; i++) {
      output += fragments[i];
      const value = values[i];
      if (value) {
        output += isMotionValue(value) ? value.get() : value;
      }
    }
    return output;
  }
  return useCombineMotionValues(values.filter(isMotionValue), buildValue);
}
function useComputed(compute) {
  collectMotionValues.current = [];
  compute();
  const value = useCombineMotionValues(collectMotionValues.current, compute);
  collectMotionValues.current = void 0;
  return value;
}
function useTransform(input, inputRangeOrTransformer, outputRangeOrMap, options) {
  if (typeof input === "function") {
    return useComputed(input);
  }
  const isOutputMap = outputRangeOrMap !== void 0 && !Array.isArray(outputRangeOrMap) && typeof inputRangeOrTransformer !== "function";
  if (isOutputMap) {
    return useMapTransform(input, inputRangeOrTransformer, outputRangeOrMap, options);
  }
  const outputRange = outputRangeOrMap;
  const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
  const result = Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
  const inputAccelerate = !Array.isArray(input) ? input.accelerate : void 0;
  if (inputAccelerate && !inputAccelerate.isTransformed && typeof inputRangeOrTransformer !== "function" && Array.isArray(outputRangeOrMap) && options?.clamp !== false) {
    result.accelerate = {
      ...inputAccelerate,
      times: inputRangeOrTransformer,
      keyframes: outputRangeOrMap,
      isTransformed: true,
      ...options?.ease ? { ease: options.ease } : {}
    };
  }
  return result;
}
function useListTransform(values, transformer) {
  const latest = useConstant(() => []);
  return useCombineMotionValues(values, () => {
    latest.length = 0;
    const numValues = values.length;
    for (let i = 0; i < numValues; i++) {
      latest[i] = values[i].get();
    }
    return transformer(latest);
  });
}
function useMapTransform(inputValue, inputRange, outputMap, options) {
  const keys2 = useConstant(() => Object.keys(outputMap));
  const output = useConstant(() => ({}));
  for (const key of keys2) {
    output[key] = useTransform(inputValue, inputRange, outputMap[key], options);
  }
  return output;
}
function useFollowValue(source, options = {}) {
  const { isStatic } = reactExports.useContext(MotionConfigContext);
  const getFromSource = () => isMotionValue(source) ? source.get() : source;
  if (isStatic) {
    return useTransform(getFromSource);
  }
  const value = useMotionValue(getFromSource());
  reactExports.useInsertionEffect(() => {
    return attachFollow(value, source, options);
  }, [value, JSON.stringify(options)]);
  return value;
}
function useSpring(source, options = {}) {
  return useFollowValue(source, { type: "spring", ...options });
}
function useAnimationFrame(callback) {
  const initialTimestamp = reactExports.useRef(0);
  const { isStatic } = reactExports.useContext(MotionConfigContext);
  reactExports.useEffect(() => {
    if (isStatic)
      return;
    const provideTimeSinceStart = ({ timestamp, delta }) => {
      if (!initialTimestamp.current)
        initialTimestamp.current = timestamp;
      callback(timestamp - initialTimestamp.current, delta);
    };
    frame.update(provideTimeSinceStart, true);
    return () => cancelFrame(provideTimeSinceStart);
  }, [callback]);
}
function useTime() {
  const time2 = useMotionValue(0);
  useAnimationFrame((t) => time2.set(t));
  return time2;
}
function useVelocity(value) {
  const velocity = useMotionValue(value.getVelocity());
  const updateVelocity = () => {
    const latest = value.getVelocity();
    velocity.set(latest);
    if (latest)
      frame.update(updateVelocity);
  };
  useMotionValueEvent(value, "change", () => {
    frame.update(updateVelocity, false, true);
  });
  return velocity;
}
class WillChangeMotionValue extends MotionValue {
  constructor() {
    super(...arguments);
    this.isEnabled = false;
  }
  add(name) {
    if (transformProps.has(name) || acceleratedValues.has(name)) {
      this.isEnabled = true;
      this.update();
    }
  }
  update() {
    this.set(this.isEnabled ? "transform" : "auto");
  }
}
function useWillChange() {
  return useConstant(() => new WillChangeMotionValue("auto"));
}
function useReducedMotion() {
  !hasReducedMotionListener.current && initPrefersReducedMotion();
  const [shouldReduceMotion] = reactExports.useState(prefersReducedMotion.current);
  return shouldReduceMotion;
}
function useReducedMotionConfig() {
  const reducedMotionPreference = useReducedMotion();
  const { reducedMotion } = reactExports.useContext(MotionConfigContext);
  if (reducedMotion === "never") {
    return false;
  } else if (reducedMotion === "always") {
    return true;
  } else {
    return reducedMotionPreference;
  }
}
function stopAnimation(visualElement) {
  visualElement.values.forEach((value) => value.stop());
}
function setVariants(visualElement, variantLabels) {
  const reversedLabels = [...variantLabels].reverse();
  reversedLabels.forEach((key) => {
    const variant = visualElement.getVariant(key);
    variant && setTarget(visualElement, variant);
    if (visualElement.variantChildren) {
      visualElement.variantChildren.forEach((child) => {
        setVariants(child, variantLabels);
      });
    }
  });
}
function setValues(visualElement, definition) {
  if (Array.isArray(definition)) {
    return setVariants(visualElement, definition);
  } else if (typeof definition === "string") {
    return setVariants(visualElement, [definition]);
  } else {
    setTarget(visualElement, definition);
  }
}
function animationControls() {
  const subscribers = /* @__PURE__ */ new Set();
  const controls = {
    subscribe(visualElement) {
      subscribers.add(visualElement);
      return () => void subscribers.delete(visualElement);
    },
    start(definition, transitionOverride) {
      const animations2 = [];
      subscribers.forEach((visualElement) => {
        animations2.push(animateVisualElement(visualElement, definition, {
          transitionOverride
        }));
      });
      return Promise.all(animations2);
    },
    set(definition) {
      return subscribers.forEach((visualElement) => {
        setValues(visualElement, definition);
      });
    },
    stop() {
      subscribers.forEach((visualElement) => {
        stopAnimation(visualElement);
      });
    },
    mount() {
      return () => {
        controls.stop();
      };
    }
  };
  return controls;
}
function isDOMKeyframes(keyframes) {
  return typeof keyframes === "object" && !Array.isArray(keyframes);
}
function resolveSubjects(subject, keyframes, scope, selectorCache) {
  if (subject == null) {
    return [];
  }
  if (typeof subject === "string" && isDOMKeyframes(keyframes)) {
    return resolveElements(subject, scope, selectorCache);
  } else if (subject instanceof NodeList) {
    return Array.from(subject);
  } else if (Array.isArray(subject)) {
    return subject.filter((s) => s != null);
  } else {
    return [subject];
  }
}
function calculateRepeatDuration(duration, repeat, repeatDelay) {
  return duration * (repeat + 1) + repeatDelay * repeat;
}
function calcNextTime(current2, next2, prev, labels) {
  if (typeof next2 === "number") {
    return next2;
  } else if (next2.startsWith("-") || next2.startsWith("+")) {
    return Math.max(0, current2 + parseFloat(next2));
  } else if (next2 === "<") {
    return prev;
  } else if (next2.startsWith("<")) {
    return Math.max(0, prev + parseFloat(next2.slice(1)));
  } else {
    return labels.get(next2) ?? current2;
  }
}
function eraseKeyframes(sequence, startTime, endTime) {
  for (let i = 0; i < sequence.length; i++) {
    const keyframe = sequence[i];
    if (keyframe.at > startTime && keyframe.at < endTime) {
      removeItem(sequence, keyframe);
      i--;
    }
  }
}
function addKeyframes(sequence, keyframes, easing, offset, startTime, endTime) {
  eraseKeyframes(sequence, startTime, endTime);
  for (let i = 0; i < keyframes.length; i++) {
    sequence.push({
      value: keyframes[i],
      at: mixNumber(startTime, endTime, offset[i]),
      easing: /* @__PURE__ */ getEasingForSegment(easing, i)
    });
  }
}
function normalizeTimes(times, repeat, repeatDelayUnits = 0) {
  const totalUnits = repeat + 1 + repeat * repeatDelayUnits;
  for (let i = 0; i < times.length; i++) {
    times[i] = times[i] / totalUnits;
  }
}
function compareByTime(a, b) {
  if (a.at === b.at) {
    if (a.value === null)
      return 1;
    if (b.value === null)
      return -1;
    return 0;
  } else {
    return a.at - b.at;
  }
}
const defaultSegmentEasing = "easeInOut";
const MAX_REPEAT = 20;
function createAnimationsFromSequence(sequence, { defaultTransition = {}, ...sequenceTransition } = {}, scope, generators) {
  const defaultDuration = defaultTransition.duration || 0.3;
  const animationDefinitions = /* @__PURE__ */ new Map();
  const sequences = /* @__PURE__ */ new Map();
  const elementCache = {};
  const timeLabels = /* @__PURE__ */ new Map();
  let prevTime = 0;
  let currentTime = 0;
  let totalDuration = 0;
  for (let i = 0; i < sequence.length; i++) {
    const segment = sequence[i];
    if (typeof segment === "string") {
      timeLabels.set(segment, currentTime);
      continue;
    } else if (!Array.isArray(segment)) {
      timeLabels.set(segment.name, calcNextTime(currentTime, segment.at, prevTime, timeLabels));
      continue;
    }
    let [subject, keyframes, transition = {}] = segment;
    if (transition.at !== void 0) {
      currentTime = calcNextTime(currentTime, transition.at, prevTime, timeLabels);
    }
    let maxDuration = 0;
    const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numSubjects = 0) => {
      const valueKeyframesAsList = keyframesAsList(valueKeyframes);
      const { delay: delay2 = 0, times = defaultOffset$1(valueKeyframesAsList), type = defaultTransition.type || "keyframes", repeat, repeatType, repeatDelay = 0, ...remainingTransition } = valueTransition;
      let { ease = defaultTransition.ease || "easeOut", duration } = valueTransition;
      const calculatedDelay = typeof delay2 === "function" ? delay2(elementIndex, numSubjects) : delay2;
      const numKeyframes = valueKeyframesAsList.length;
      const createGenerator = isGenerator(type) ? type : generators?.[type || "keyframes"];
      if (numKeyframes <= 2 && createGenerator) {
        let absoluteDelta = 100;
        if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
          const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
          absoluteDelta = Math.abs(delta);
        }
        const springTransition = {
          ...defaultTransition,
          ...remainingTransition
        };
        if (duration !== void 0) {
          springTransition.duration = secondsToMilliseconds(duration);
        }
        const springEasing = createGeneratorEasing(springTransition, absoluteDelta, createGenerator);
        ease = springEasing.ease;
        duration = springEasing.duration;
      }
      duration ?? (duration = defaultDuration);
      const startTime = currentTime + calculatedDelay;
      if (times.length === 1 && times[0] === 0) {
        times[1] = 1;
      }
      const remainder = times.length - valueKeyframesAsList.length;
      remainder > 0 && fillOffset(times, remainder);
      valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
      if (repeat && repeat < MAX_REPEAT) {
        const repeatDelayUnits = duration > 0 ? repeatDelay / duration : 0;
        duration = calculateRepeatDuration(duration, repeat, repeatDelay);
        const originalKeyframes = [...valueKeyframesAsList];
        const originalTimes = [...times];
        ease = Array.isArray(ease) ? [...ease] : [ease];
        const originalEase = [...ease];
        const isFlipping = repeatType === "reverse" || repeatType === "mirror";
        let flippedKeyframes = originalKeyframes;
        let flippedEases = originalEase;
        if (isFlipping) {
          flippedKeyframes = [...originalKeyframes].reverse();
          if (repeatType === "reverse") {
            flippedEases = [...originalEase].reverse().map((e) => typeof e === "function" ? reverseEasing(e) : e);
          }
        }
        for (let repeatIndex = 0; repeatIndex < repeat; repeatIndex++) {
          const isFlipped = isFlipping && repeatIndex % 2 === 0;
          const iterKeyframes = isFlipped ? flippedKeyframes : originalKeyframes;
          const iterEase = isFlipped ? flippedEases : originalEase;
          const iterStartOffset = (repeatIndex + 1) * (1 + repeatDelayUnits);
          if (repeatDelayUnits > 0) {
            valueKeyframesAsList.push(valueKeyframesAsList[valueKeyframesAsList.length - 1]);
            times.push(iterStartOffset);
            ease.push("linear");
          }
          valueKeyframesAsList.push(...iterKeyframes);
          for (let keyframeIndex = 0; keyframeIndex < iterKeyframes.length; keyframeIndex++) {
            times.push(originalTimes[keyframeIndex] + iterStartOffset);
            ease.push(keyframeIndex === 0 ? "linear" : /* @__PURE__ */ getEasingForSegment(iterEase, keyframeIndex - 1));
          }
        }
        normalizeTimes(times, repeat, repeatDelayUnits);
      }
      const targetTime = startTime + duration;
      addKeyframes(valueSequence, valueKeyframesAsList, ease, times, startTime, targetTime);
      maxDuration = Math.max(calculatedDelay + duration, maxDuration);
      totalDuration = Math.max(targetTime, totalDuration);
    };
    if (isMotionValue(subject)) {
      const subjectSequence = getSubjectSequence(subject, sequences);
      resolveValueSequence(keyframes, transition, getValueSequence("default", subjectSequence));
    } else {
      const subjects = resolveSubjects(subject, keyframes, scope, elementCache);
      const numSubjects = subjects.length;
      for (let subjectIndex = 0; subjectIndex < numSubjects; subjectIndex++) {
        keyframes = keyframes;
        transition = transition;
        const thisSubject = subjects[subjectIndex];
        const subjectSequence = getSubjectSequence(thisSubject, sequences);
        for (const key in keyframes) {
          resolveValueSequence(keyframes[key], getValueTransition(transition, key), getValueSequence(key, subjectSequence), subjectIndex, numSubjects);
        }
      }
    }
    prevTime = currentTime;
    currentTime += maxDuration;
  }
  sequences.forEach((valueSequences, element) => {
    for (const key in valueSequences) {
      const valueSequence = valueSequences[key];
      valueSequence.sort(compareByTime);
      const keyframes = [];
      const valueOffset = [];
      const valueEasing = [];
      for (let i = 0; i < valueSequence.length; i++) {
        const { at: at2, value, easing } = valueSequence[i];
        keyframes.push(value);
        valueOffset.push(progress(0, totalDuration, at2));
        valueEasing.push(easing || "easeOut");
      }
      if (valueOffset[0] !== 0) {
        valueOffset.unshift(0);
        keyframes.unshift(keyframes[0]);
        valueEasing.unshift(defaultSegmentEasing);
      }
      if (valueOffset[valueOffset.length - 1] !== 1) {
        valueOffset.push(1);
        keyframes.push(null);
      }
      if (!animationDefinitions.has(element)) {
        animationDefinitions.set(element, {
          keyframes: {},
          transition: {}
        });
      }
      const definition = animationDefinitions.get(element);
      definition.keyframes[key] = keyframes;
      const { type: _type, ...remainingDefaultTransition } = defaultTransition;
      definition.transition[key] = {
        ...remainingDefaultTransition,
        duration: totalDuration,
        ease: valueEasing,
        times: valueOffset,
        ...sequenceTransition
      };
    }
  });
  return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
  !sequences.has(subject) && sequences.set(subject, {});
  return sequences.get(subject);
}
function getValueSequence(name, sequences) {
  if (!sequences[name])
    sequences[name] = [];
  return sequences[name];
}
function keyframesAsList(keyframes) {
  return Array.isArray(keyframes) ? keyframes : [keyframes];
}
function getValueTransition(transition, key) {
  return transition && transition[key] ? {
    ...transition,
    ...transition[key]
  } : { ...transition };
}
const isNumber = (keyframe) => typeof keyframe === "number";
const isNumberKeyframesArray = (keyframes) => keyframes.every(isNumber);
function createDOMVisualElement(element) {
  const options = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        transform: {},
        transformOrigin: {},
        style: {},
        vars: {},
        attrs: {}
      },
      latestValues: {}
    }
  };
  const node = isSVGElement(element) && !isSVGSVGElement(element) ? new SVGVisualElement(options) : new HTMLVisualElement(options);
  node.mount(element);
  visualElementStore.set(element, node);
}
function createObjectVisualElement(subject) {
  const options = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  };
  const node = new ObjectVisualElement(options);
  node.mount(subject);
  visualElementStore.set(subject, node);
}
function isSingleValue(subject, keyframes) {
  return isMotionValue(subject) || typeof subject === "number" || typeof subject === "string" && !isDOMKeyframes(keyframes);
}
function animateSubject(subject, keyframes, options, scope) {
  const animations2 = [];
  if (isSingleValue(subject, keyframes)) {
    animations2.push(animateSingleValue(subject, isDOMKeyframes(keyframes) ? keyframes.default || keyframes : keyframes, options ? options.default || options : options));
  } else {
    if (subject == null) {
      return animations2;
    }
    const subjects = resolveSubjects(subject, keyframes, scope);
    const numSubjects = subjects.length;
    for (let i = 0; i < numSubjects; i++) {
      const thisSubject = subjects[i];
      const createVisualElement2 = thisSubject instanceof Element ? createDOMVisualElement : createObjectVisualElement;
      if (!visualElementStore.has(thisSubject)) {
        createVisualElement2(thisSubject);
      }
      const visualElement = visualElementStore.get(thisSubject);
      const transition = { ...options };
      if ("delay" in transition && typeof transition.delay === "function") {
        transition.delay = transition.delay(i, numSubjects);
      }
      animations2.push(...animateTarget(visualElement, { ...keyframes, transition }, {}));
    }
  }
  return animations2;
}
function animateSequence(sequence, options, scope) {
  const animations2 = [];
  const processedSequence = sequence.map((segment) => {
    if (Array.isArray(segment) && typeof segment[0] === "function") {
      const callback = segment[0];
      const mv = motionValue(0);
      mv.on("change", callback);
      if (segment.length === 1) {
        return [mv, [0, 1]];
      } else if (segment.length === 2) {
        return [mv, [0, 1], segment[1]];
      } else {
        return [mv, segment[1], segment[2]];
      }
    }
    return segment;
  });
  const animationDefinitions = createAnimationsFromSequence(processedSequence, options, scope, { spring });
  animationDefinitions.forEach(({ keyframes, transition }, subject) => {
    animations2.push(...animateSubject(subject, keyframes, transition));
  });
  return animations2;
}
function isSequence(value) {
  return Array.isArray(value) && value.some(Array.isArray);
}
function createScopedAnimate(options = {}) {
  const { scope, reduceMotion, skipAnimations } = options;
  function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options2) {
    let animations2 = [];
    let animationOnComplete;
    const inherited = {};
    if (reduceMotion !== void 0)
      inherited.reduceMotion = reduceMotion;
    if (skipAnimations !== void 0)
      inherited.skipAnimations = skipAnimations;
    if (isSequence(subjectOrSequence)) {
      const { onComplete, ...sequenceOptions } = optionsOrKeyframes || {};
      if (typeof onComplete === "function") {
        animationOnComplete = onComplete;
      }
      animations2 = animateSequence(subjectOrSequence, { ...inherited, ...sequenceOptions }, scope);
    } else {
      const { onComplete, ...rest } = options2 || {};
      if (typeof onComplete === "function") {
        animationOnComplete = onComplete;
      }
      animations2 = animateSubject(subjectOrSequence, optionsOrKeyframes, { ...inherited, ...rest }, scope);
    }
    const animation = new GroupAnimationWithThen(animations2);
    if (animationOnComplete) {
      animation.finished.then(animationOnComplete);
    }
    if (scope) {
      scope.animations.push(animation);
      animation.finished.then(() => {
        removeItem(scope.animations, animation);
      });
    }
    return animation;
  }
  return scopedAnimate;
}
const animate = createScopedAnimate();
function useAnimate() {
  const scope = useConstant(() => ({
    current: null,
    // Will be hydrated by React
    animations: []
  }));
  const reduceMotion = useReducedMotionConfig() ?? void 0;
  const { skipAnimations } = reactExports.useContext(MotionConfigContext);
  const animate2 = reactExports.useMemo(() => createScopedAnimate({ scope, reduceMotion, skipAnimations }), [scope, reduceMotion, skipAnimations]);
  useUnmountEffect(() => {
    scope.animations.forEach((animation) => animation.stop());
    scope.animations.length = 0;
  });
  return [scope, animate2];
}
function animateElements(elementOrSelector, keyframes, options, scope) {
  if (elementOrSelector == null) {
    return [];
  }
  const elements = resolveElements(elementOrSelector, scope);
  const numElements = elements.length;
  const animationDefinitions = [];
  for (let i = 0; i < numElements; i++) {
    const element = elements[i];
    const elementTransition = { ...options };
    if (typeof elementTransition.delay === "function") {
      elementTransition.delay = elementTransition.delay(i, numElements);
    }
    for (const valueName in keyframes) {
      let valueKeyframes = keyframes[valueName];
      if (!Array.isArray(valueKeyframes)) {
        valueKeyframes = [valueKeyframes];
      }
      const valueOptions = {
        ...getValueTransition$1(elementTransition, valueName)
      };
      valueOptions.duration && (valueOptions.duration = secondsToMilliseconds(valueOptions.duration));
      valueOptions.delay && (valueOptions.delay = secondsToMilliseconds(valueOptions.delay));
      const map = getAnimationMap(element);
      const key = animationMapKey(valueName, valueOptions.pseudoElement || "");
      const currentAnimation = map.get(key);
      currentAnimation && currentAnimation.stop();
      animationDefinitions.push({
        map,
        key,
        unresolvedKeyframes: valueKeyframes,
        options: {
          ...valueOptions,
          element,
          name: valueName,
          allowFlatten: !elementTransition.type && !elementTransition.ease
        }
      });
    }
  }
  for (let i = 0; i < animationDefinitions.length; i++) {
    const { unresolvedKeyframes, options: animationOptions } = animationDefinitions[i];
    const { element, name, pseudoElement } = animationOptions;
    if (!pseudoElement && unresolvedKeyframes[0] === null) {
      unresolvedKeyframes[0] = getComputedStyle$1(element, name);
    }
    fillWildcards(unresolvedKeyframes);
    applyPxDefaults(unresolvedKeyframes, name);
    if (!pseudoElement && unresolvedKeyframes.length < 2) {
      unresolvedKeyframes.unshift(getComputedStyle$1(element, name));
    }
    animationOptions.keyframes = unresolvedKeyframes;
  }
  const animations2 = [];
  for (let i = 0; i < animationDefinitions.length; i++) {
    const { map, key, options: animationOptions } = animationDefinitions[i];
    const animation = new NativeAnimation(animationOptions);
    map.set(key, animation);
    animation.finished.finally(() => map.delete(key));
    animations2.push(animation);
  }
  return animations2;
}
const createScopedWaapiAnimate = (scope) => {
  function scopedAnimate(elementOrSelector, keyframes, options) {
    return new GroupAnimationWithThen(animateElements(elementOrSelector, keyframes, options, scope));
  }
  return scopedAnimate;
};
const animateMini = /* @__PURE__ */ createScopedWaapiAnimate();
function useAnimateMini() {
  const scope = useConstant(() => ({
    current: null,
    // Will be hydrated by React
    animations: []
  }));
  const animate2 = useConstant(() => createScopedWaapiAnimate(scope));
  useUnmountEffect(() => {
    scope.animations.forEach((animation) => animation.stop());
  });
  return [scope, animate2];
}
function useAnimationControls() {
  const controls = useConstant(animationControls);
  useIsomorphicLayoutEffect(controls.mount, []);
  return controls;
}
const useAnimation = useAnimationControls;
function usePresenceData() {
  const context = reactExports.useContext(PresenceContext);
  return context ? context.custom : void 0;
}
function useDomEvent(ref, eventName, handler, options) {
  reactExports.useEffect(() => {
    const element = ref.current;
    if (handler && element) {
      return addDomEvent(element, eventName, handler, options);
    }
  }, [ref, eventName, handler, options]);
}
class DragControls {
  constructor() {
    this.componentControls = /* @__PURE__ */ new Set();
  }
  /**
   * Subscribe a component's internal `VisualElementDragControls` to the user-facing API.
   *
   * @internal
   */
  subscribe(controls) {
    this.componentControls.add(controls);
    return () => this.componentControls.delete(controls);
  }
  /**
   * Start a drag gesture on every `motion` component that has this set of drag controls
   * passed into it via the `dragControls` prop.
   *
   * ```jsx
   * dragControls.start(e, {
   *   snapToCursor: true
   * })
   * ```
   *
   * @param event - PointerEvent
   * @param options - Options
   *
   * @public
   */
  start(event, options) {
    this.componentControls.forEach((controls) => {
      controls.start(event.nativeEvent || event, options);
    });
  }
  /**
   * Cancels a drag gesture.
   *
   * ```jsx
   * dragControls.cancel()
   * ```
   *
   * @public
   */
  cancel() {
    this.componentControls.forEach((controls) => {
      controls.cancel();
    });
  }
  /**
   * Stops a drag gesture.
   *
   * ```jsx
   * dragControls.stop()
   * ```
   *
   * @public
   */
  stop() {
    this.componentControls.forEach((controls) => {
      controls.stop();
    });
  }
}
const createDragControls = () => new DragControls();
function useDragControls() {
  return useConstant(createDragControls);
}
function isMotionComponent(component) {
  return component !== null && typeof component === "object" && motionComponentSymbol in component;
}
function unwrapMotionComponent(component) {
  if (isMotionComponent(component)) {
    return component[motionComponentSymbol];
  }
  return void 0;
}
function useInstantLayoutTransition() {
  return startTransition;
}
function startTransition(callback) {
  if (!rootProjectionNode.current)
    return;
  rootProjectionNode.current.isUpdating = false;
  rootProjectionNode.current.blockUpdate();
  callback && callback();
}
function useResetProjection() {
  const reset = reactExports.useCallback(() => {
    const root = rootProjectionNode.current;
    if (!root)
      return;
    root.resetTree();
  }, []);
  return reset;
}
function useCycle(...items) {
  const index = reactExports.useRef(0);
  const [item, setItem] = reactExports.useState(items[index.current]);
  const runCycle = reactExports.useCallback(
    (next2) => {
      index.current = typeof next2 !== "number" ? wrap(0, items.length, index.current + 1) : next2;
      setItem(items[index.current]);
    },
    // The array will change on each call, but by putting items.length at
    // the front of this array, we guarantee the dependency comparison will match up
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items.length, ...items]
  );
  return [item, runCycle];
}
const thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry.target, entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer2.unobserve(entry.target);
        }
      } else if (typeof onEnd === "function") {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer2 = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer2.observe(element));
  return () => observer2.disconnect();
}
function useInView(ref, { root, margin, amount, once = false, initial = false } = {}) {
  const [isInView, setInView] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}
function useInstantTransition() {
  const [forceUpdate, forcedRenderCount] = useForceUpdate();
  const startInstantLayoutTransition = useInstantLayoutTransition();
  const unlockOnFrameRef = reactExports.useRef(-1);
  reactExports.useEffect(() => {
    frame.postRender(() => frame.postRender(() => {
      if (forcedRenderCount !== unlockOnFrameRef.current)
        return;
      MotionGlobalConfig.instantAnimations = false;
    }));
  }, [forcedRenderCount]);
  return (callback) => {
    startInstantLayoutTransition(() => {
      MotionGlobalConfig.instantAnimations = true;
      forceUpdate();
      callback();
      unlockOnFrameRef.current = forcedRenderCount + 1;
    });
  };
}
function disableInstantTransitions() {
  MotionGlobalConfig.instantAnimations = false;
}
function usePageInView() {
  const [isInView, setIsInView] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const handleVisibilityChange = () => setIsInView(!document.hidden);
    if (document.hidden) {
      handleVisibilityChange();
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  return isInView;
}
function transformViewBoxPoint(svgRef) {
  return (point2) => {
    const svg = svgRef.current;
    if (!svg) {
      return point2;
    }
    const viewBox = svg.viewBox?.baseVal;
    if (!viewBox || viewBox.width === 0 && viewBox.height === 0) {
      return point2;
    }
    const bbox = svg.getBoundingClientRect();
    if (bbox.width === 0 || bbox.height === 0) {
      return point2;
    }
    const scaleX = viewBox.width / bbox.width;
    const scaleY = viewBox.height / bbox.height;
    const svgX = bbox.left + window.scrollX;
    const svgY = bbox.top + window.scrollY;
    return {
      x: (point2.x - svgX) * scaleX + svgX,
      y: (point2.y - svgY) * scaleY + svgY
    };
  };
}
function correctParentTransform(parentRef) {
  return (point2) => {
    const parent = parentRef.current;
    if (!parent)
      return point2;
    const inv = getInverseMatrix(parent);
    if (!inv)
      return point2;
    const rect = parent.getBoundingClientRect();
    const cx2 = rect.left + window.scrollX + rect.width / 2;
    const cy2 = rect.top + window.scrollY + rect.height / 2;
    const dx = point2.x - cx2;
    const dy = point2.y - cy2;
    return {
      x: cx2 + inv.a * dx + inv.c * dy,
      y: cy2 + inv.b * dx + inv.d * dy
    };
  };
}
function getInverseMatrix(element) {
  const { transform: transform2 } = getComputedStyle(element);
  if (!transform2 || transform2 === "none")
    return null;
  const match = transform2.match(/^matrix3d\((.*)\)$/u) || transform2.match(/^matrix\((.*)\)$/u);
  if (!match)
    return null;
  const v = match[1].split(",").map(Number);
  const is3d = transform2.startsWith("matrix3d");
  const a = v[0], b = v[1];
  const c = is3d ? v[4] : v[2];
  const d = is3d ? v[5] : v[3];
  const det = a * d - b * c;
  if (Math.abs(det) < 1e-10)
    return null;
  return { a: d / det, b: -b / det, c: -c / det, d: a / det };
}
const appearAnimationStore = /* @__PURE__ */ new Map();
const appearComplete = /* @__PURE__ */ new Map();
const appearStoreId = (elementId, valueName) => {
  const key = transformProps.has(valueName) ? "transform" : valueName;
  return `${elementId}: ${key}`;
};
function handoffOptimizedAppearAnimation(elementId, valueName, frame2) {
  const storeId = appearStoreId(elementId, valueName);
  const optimisedAnimation = appearAnimationStore.get(storeId);
  if (!optimisedAnimation) {
    return null;
  }
  const { animation, startTime } = optimisedAnimation;
  function cancelAnimation() {
    window.MotionCancelOptimisedAnimation?.(elementId, valueName, frame2);
  }
  animation.onfinish = cancelAnimation;
  if (startTime === null || window.MotionHandoffIsComplete?.(elementId)) {
    cancelAnimation();
    return null;
  } else {
    return startTime;
  }
}
let startFrameTime;
let readyAnimation;
const suspendedAnimations = /* @__PURE__ */ new Set();
function resumeSuspendedAnimations() {
  suspendedAnimations.forEach((data) => {
    data.animation.play();
    data.animation.startTime = data.startTime;
  });
  suspendedAnimations.clear();
}
function startOptimizedAppearAnimation(element, name, keyframes, options, onReady) {
  if (window.MotionIsMounted) {
    return;
  }
  const id2 = element.dataset[optimizedAppearDataId];
  if (!id2)
    return;
  window.MotionHandoffAnimation = handoffOptimizedAppearAnimation;
  const storeId = appearStoreId(id2, name);
  if (!readyAnimation) {
    readyAnimation = startWaapiAnimation(
      element,
      name,
      [keyframes[0], keyframes[0]],
      /**
       * 10 secs is basically just a super-safe duration to give Chrome
       * long enough to get the animation ready.
       */
      { duration: 1e4, ease: "linear" }
    );
    appearAnimationStore.set(storeId, {
      animation: readyAnimation,
      startTime: null
    });
    window.MotionHandoffAnimation = handoffOptimizedAppearAnimation;
    window.MotionHasOptimisedAnimation = (elementId, valueName) => {
      if (!elementId)
        return false;
      if (!valueName) {
        return appearComplete.has(elementId);
      }
      const animationId = appearStoreId(elementId, valueName);
      return Boolean(appearAnimationStore.get(animationId));
    };
    window.MotionHandoffMarkAsComplete = (elementId) => {
      if (appearComplete.has(elementId)) {
        appearComplete.set(elementId, true);
      }
    };
    window.MotionHandoffIsComplete = (elementId) => {
      return appearComplete.get(elementId) === true;
    };
    window.MotionCancelOptimisedAnimation = (elementId, valueName, frame2, canResume) => {
      const animationId = appearStoreId(elementId, valueName);
      const data = appearAnimationStore.get(animationId);
      if (!data)
        return;
      if (frame2 && canResume === void 0) {
        frame2.postRender(() => {
          frame2.postRender(() => {
            data.animation.cancel();
          });
        });
      } else {
        data.animation.cancel();
      }
      if (frame2 && canResume) {
        suspendedAnimations.add(data);
        frame2.render(resumeSuspendedAnimations);
      } else {
        appearAnimationStore.delete(animationId);
        if (!appearAnimationStore.size) {
          window.MotionCancelOptimisedAnimation = void 0;
        }
      }
    };
    window.MotionCheckAppearSync = (visualElement, valueName, value) => {
      const appearId = getOptimisedAppearId(visualElement);
      if (!appearId)
        return;
      const valueIsOptimised = window.MotionHasOptimisedAnimation?.(appearId, valueName);
      const externalAnimationValue = visualElement.props.values?.[valueName];
      if (!valueIsOptimised || !externalAnimationValue)
        return;
      const removeSyncCheck = value.on("change", (latestValue) => {
        if (externalAnimationValue.get() !== latestValue) {
          window.MotionCancelOptimisedAnimation?.(appearId, valueName);
          removeSyncCheck();
        }
      });
      return removeSyncCheck;
    };
  }
  const startAnimation = () => {
    readyAnimation.cancel();
    const appearAnimation = startWaapiAnimation(element, name, keyframes, options);
    if (startFrameTime === void 0) {
      startFrameTime = performance.now();
    }
    appearAnimation.startTime = startFrameTime;
    appearAnimationStore.set(storeId, {
      animation: appearAnimation,
      startTime: startFrameTime
    });
    if (onReady)
      onReady(appearAnimation);
  };
  appearComplete.set(id2, false);
  if (readyAnimation.ready) {
    readyAnimation.ready.then(startAnimation).catch(noop);
  } else {
    startAnimation();
  }
}
const createObject = () => ({});
class StateVisualElement extends VisualElement {
  constructor() {
    super(...arguments);
    this.measureInstanceViewportBox = createBox;
  }
  build() {
  }
  resetTransform() {
  }
  restoreTransform() {
  }
  removeValueFromRenderState() {
  }
  renderInstance() {
  }
  scrapeMotionValuesFromProps() {
    return createObject();
  }
  getBaseTargetFromProps() {
    return void 0;
  }
  readValueFromInstance(_state, key, options) {
    return options.initialState[key] || 0;
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
const useVisualState = makeUseVisualState({
  scrapeMotionValuesFromProps: createObject,
  createRenderState: createObject
});
function useAnimatedState(initialState) {
  const [animationState, setAnimationState] = reactExports.useState(initialState);
  const visualState = useVisualState({}, false);
  const element = useConstant(() => {
    return new StateVisualElement({
      props: {
        onUpdate: (v) => {
          setAnimationState({ ...v });
        }
      },
      visualState,
      presenceContext: null
    }, { initialState });
  });
  reactExports.useLayoutEffect(() => {
    element.mount({});
    return () => element.unmount();
  }, [element]);
  const startAnimation = useConstant(() => (animationDefinition) => {
    return animateVisualElement(element, animationDefinition);
  });
  return [animationState, startAnimation];
}
let id = 0;
const AnimateSharedLayout = ({ children }) => {
  reactExports.useEffect(() => {
  }, []);
  return jsxRuntimeExports.jsx(LayoutGroup, { id: useConstant(() => `asl-${id++}`), children });
};
const maxScale = 1e5;
const invertScale = (scale) => scale > 1e-3 ? 1 / scale : maxScale;
function useInvertedScale(scale) {
  let parentScaleX = useMotionValue(1);
  let parentScaleY = useMotionValue(1);
  const { visualElement } = reactExports.useContext(MotionContext);
  if (scale) {
    parentScaleX = scale.scaleX || parentScaleX;
    parentScaleY = scale.scaleY || parentScaleY;
  } else if (visualElement) {
    parentScaleX = visualElement.getValue("scaleX", 1);
    parentScaleY = visualElement.getValue("scaleY", 1);
  }
  const scaleX = useTransform(parentScaleX, invertScale);
  const scaleY = useTransform(parentScaleY, invertScale);
  return { scaleX, scaleY };
}
const ReorderContext = reactExports.createContext(null);
function checkReorder(order, value, offset, velocity) {
  if (!velocity)
    return order;
  const index = order.findIndex((item2) => item2.value === value);
  if (index === -1)
    return order;
  const nextOffset = velocity > 0 ? 1 : -1;
  const nextItem = order[index + nextOffset];
  if (!nextItem)
    return order;
  const item = order[index];
  const nextLayout = nextItem.layout;
  const nextItemCenter = mixNumber(nextLayout.min, nextLayout.max, 0.5);
  if (nextOffset === 1 && item.layout.max + offset > nextItemCenter || nextOffset === -1 && item.layout.min + offset < nextItemCenter) {
    return moveItem(order, index, index + nextOffset);
  }
  return order;
}
function ReorderGroupComponent({ children, as: as2 = "ul", axis = "y", onReorder, values, ...props }, externalRef) {
  const Component = useConstant(() => motion[as2]);
  const order = [];
  const isReordering = reactExports.useRef(false);
  const groupRef = reactExports.useRef(null);
  const context = {
    axis,
    groupRef,
    registerItem: (value, layout2) => {
      const idx = order.findIndex((entry) => value === entry.value);
      if (idx !== -1) {
        order[idx].layout = layout2[axis];
      } else {
        order.push({ value, layout: layout2[axis] });
      }
      order.sort(compareMin);
    },
    updateOrder: (item, offset, velocity) => {
      if (isReordering.current)
        return;
      const newOrder = checkReorder(order, item, offset, velocity);
      if (order !== newOrder) {
        isReordering.current = true;
        const newValues = [...values];
        for (let i = 0; i < newOrder.length; i++) {
          if (order[i].value !== newOrder[i].value) {
            const a = values.indexOf(order[i].value);
            const b = values.indexOf(newOrder[i].value);
            if (a !== -1 && b !== -1) {
              [newValues[a], newValues[b]] = [newValues[b], newValues[a]];
            }
            break;
          }
        }
        onReorder(newValues);
      }
    }
  };
  reactExports.useEffect(() => {
    isReordering.current = false;
  });
  const setRef = (element) => {
    groupRef.current = element;
    if (typeof externalRef === "function") {
      externalRef(element);
    } else if (externalRef) {
      externalRef.current = element;
    }
  };
  const groupStyle = {
    overflowAnchor: "none",
    ...props.style
  };
  return jsxRuntimeExports.jsx(Component, { ...props, style: groupStyle, ref: setRef, ignoreStrict: true, children: jsxRuntimeExports.jsx(ReorderContext.Provider, { value: context, children }) });
}
const ReorderGroup = /* @__PURE__ */ reactExports.forwardRef(ReorderGroupComponent);
function compareMin(a, b) {
  return a.layout.min - b.layout.min;
}
const threshold = 50;
const maxSpeed = 25;
const overflowStyles = /* @__PURE__ */ new Set(["auto", "scroll"]);
const initialScrollLimits = /* @__PURE__ */ new WeakMap();
const activeScrollEdge = /* @__PURE__ */ new WeakMap();
let currentGroupElement = null;
function resetAutoScrollState() {
  if (currentGroupElement) {
    const scrollableAncestor = findScrollableAncestor(currentGroupElement, "y");
    if (scrollableAncestor) {
      activeScrollEdge.delete(scrollableAncestor);
      initialScrollLimits.delete(scrollableAncestor);
    }
    const scrollableAncestorX = findScrollableAncestor(currentGroupElement, "x");
    if (scrollableAncestorX && scrollableAncestorX !== scrollableAncestor) {
      activeScrollEdge.delete(scrollableAncestorX);
      initialScrollLimits.delete(scrollableAncestorX);
    }
    currentGroupElement = null;
  }
}
function isScrollableElement(element, axis) {
  const style2 = getComputedStyle(element);
  const overflow = axis === "x" ? style2.overflowX : style2.overflowY;
  const isDocumentScroll = element === document.body || element === document.documentElement;
  return overflowStyles.has(overflow) || isDocumentScroll;
}
function findScrollableAncestor(element, axis) {
  let current2 = element?.parentElement;
  while (current2) {
    if (isScrollableElement(current2, axis)) {
      return current2;
    }
    current2 = current2.parentElement;
  }
  return null;
}
function getScrollAmount(pointerPosition, scrollElement, axis) {
  const rect = scrollElement.getBoundingClientRect();
  const start2 = axis === "x" ? Math.max(0, rect.left) : Math.max(0, rect.top);
  const end = axis === "x" ? Math.min(window.innerWidth, rect.right) : Math.min(window.innerHeight, rect.bottom);
  const distanceFromStart = pointerPosition - start2;
  const distanceFromEnd = end - pointerPosition;
  if (distanceFromStart < threshold) {
    const intensity = 1 - distanceFromStart / threshold;
    return { amount: -maxSpeed * intensity * intensity, edge: "start" };
  } else if (distanceFromEnd < threshold) {
    const intensity = 1 - distanceFromEnd / threshold;
    return { amount: maxSpeed * intensity * intensity, edge: "end" };
  }
  return { amount: 0, edge: null };
}
function autoScrollIfNeeded(groupElement, pointerPosition, axis, velocity) {
  if (!groupElement)
    return;
  currentGroupElement = groupElement;
  const scrollableAncestor = findScrollableAncestor(groupElement, axis);
  if (!scrollableAncestor)
    return;
  const viewportPointerPosition = pointerPosition - (axis === "x" ? window.scrollX : window.scrollY);
  const { amount: scrollAmount, edge } = getScrollAmount(viewportPointerPosition, scrollableAncestor, axis);
  if (edge === null) {
    activeScrollEdge.delete(scrollableAncestor);
    initialScrollLimits.delete(scrollableAncestor);
    return;
  }
  const currentActiveEdge = activeScrollEdge.get(scrollableAncestor);
  const isDocumentScroll = scrollableAncestor === document.body || scrollableAncestor === document.documentElement;
  if (currentActiveEdge !== edge) {
    const shouldStart = edge === "start" && velocity < 0 || edge === "end" && velocity > 0;
    if (!shouldStart)
      return;
    activeScrollEdge.set(scrollableAncestor, edge);
    const maxScroll = axis === "x" ? scrollableAncestor.scrollWidth - (isDocumentScroll ? window.innerWidth : scrollableAncestor.clientWidth) : scrollableAncestor.scrollHeight - (isDocumentScroll ? window.innerHeight : scrollableAncestor.clientHeight);
    initialScrollLimits.set(scrollableAncestor, maxScroll);
  }
  if (scrollAmount > 0) {
    const initialLimit = initialScrollLimits.get(scrollableAncestor);
    const currentScroll = axis === "x" ? isDocumentScroll ? window.scrollX : scrollableAncestor.scrollLeft : isDocumentScroll ? window.scrollY : scrollableAncestor.scrollTop;
    if (currentScroll >= initialLimit)
      return;
  }
  if (axis === "x") {
    if (isDocumentScroll) {
      window.scrollBy({ left: scrollAmount });
    } else {
      scrollableAncestor.scrollLeft += scrollAmount;
    }
  } else {
    if (isDocumentScroll) {
      window.scrollBy({ top: scrollAmount });
    } else {
      scrollableAncestor.scrollTop += scrollAmount;
    }
  }
}
function useDefaultMotionValue(value, defaultValue = 0) {
  return isMotionValue(value) ? value : useMotionValue(defaultValue);
}
function ReorderItemComponent({ children, style: style2 = {}, value, as: as2 = "li", onDrag, onDragEnd, layout: layout2 = true, ...props }, externalRef) {
  const Component = useConstant(() => motion[as2]);
  const context = reactExports.useContext(ReorderContext);
  const point2 = {
    x: useDefaultMotionValue(style2.x),
    y: useDefaultMotionValue(style2.y)
  };
  const zIndex = useTransform([point2.x, point2.y], ([latestX, latestY]) => latestX || latestY ? 1 : "unset");
  const { axis, registerItem, updateOrder, groupRef } = context;
  return jsxRuntimeExports.jsx(Component, { drag: axis, ...props, dragSnapToOrigin: true, style: { ...style2, x: point2.x, y: point2.y, zIndex }, layout: layout2, onDrag: (event, gesturePoint) => {
    const { velocity, point: pointerPoint } = gesturePoint;
    const offset = point2[axis].get();
    updateOrder(value, offset, velocity[axis]);
    autoScrollIfNeeded(groupRef.current, pointerPoint[axis], axis, velocity[axis]);
    onDrag && onDrag(event, gesturePoint);
  }, onDragEnd: (event, gesturePoint) => {
    resetAutoScrollState();
    onDragEnd && onDragEnd(event, gesturePoint);
  }, onLayoutMeasure: (measured) => {
    registerItem(value, measured);
  }, ref: externalRef, ignoreStrict: true, children });
}
const ReorderItem = /* @__PURE__ */ reactExports.forwardRef(ReorderItemComponent);
const namespace = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Group: ReorderGroup,
  Item: ReorderItem
}, Symbol.toStringTag, { value: "Module" }));
export {
  a6 as AnimatePresence,
  AnimateSharedLayout,
  R as AsyncMotionValueAnimation,
  T as DOMKeyframesResolver,
  U as DOMVisualElement,
  DeprecatedLayoutGroupContext,
  DocumentProjectionNode,
  DragControls,
  Feature,
  FlatTree,
  GroupAnimation,
  GroupAnimationWithThen,
  HTMLProjectionNode,
  HTMLVisualElement,
  JSAnimation,
  c1 as KeyframeResolver,
  LayoutAnimationBuilder,
  LayoutGroup,
  LayoutGroupContext,
  a5 as LazyMotion,
  c2 as MotionConfig,
  MotionConfigContext,
  MotionContext,
  MotionGlobalConfig,
  MotionValue,
  NativeAnimation,
  V as NativeAnimationExtended,
  NativeAnimationWrapper,
  NodeStack,
  ObjectVisualElement,
  c3 as PopChild,
  c4 as PresenceChild,
  PresenceContext,
  namespace as Reorder,
  SVGVisualElement,
  SubscriptionManager,
  SwitchLayoutGroupContext,
  ViewTransitionBuilder,
  VisualElement,
  WillChangeMotionValue,
  acceleratedValues,
  addAttrValue,
  addDomEvent,
  addPointerEvent,
  addPointerInfo,
  c5 as addScaleCorrector,
  addStyleValue,
  addUniqueItem,
  addValueToWillChange,
  c6 as alpha,
  c7 as analyseComplexValue,
  animate,
  animateMini,
  animateMotionValue,
  animateSingleValue,
  animateTarget,
  W as animateValue,
  X as animateVariant,
  animateView,
  animateVisualElement,
  animationControls,
  animationMapKey,
  animations,
  Y as anticipate,
  Z as applyAxisDelta,
  applyBoxDelta,
  applyGeneratorOptions,
  _ as applyPointDelta,
  applyPxDefaults,
  applyTreeDeltas,
  arc,
  aspectRatio,
  attachFollow,
  attachSpring,
  attrEffect,
  axisDeltaEquals,
  axisEquals,
  axisEqualsRounded,
  $ as backIn,
  a0 as backInOut,
  a1 as backOut,
  boxEquals,
  boxEqualsRounded,
  c8 as buildHTMLStyles,
  buildProjectionTransform,
  c9 as buildSVGAttrs,
  ca as buildSVGPath,
  cb as buildTransform,
  calcAxisDelta,
  calcBoxDelta,
  a2 as calcChildStagger,
  a3 as calcGeneratorDuration,
  calcLength,
  calcRelativeAxis,
  calcRelativeAxisPosition,
  calcRelativeBox,
  calcRelativePosition,
  a42 as camelCaseAttributes,
  camelToDash,
  cancelFrame,
  cancelMicrotask,
  cancelSync,
  a52 as checkVariantsDidChange,
  a62 as circIn,
  a7 as circInOut,
  circOut,
  clamp,
  cleanDirtyNodes,
  collectMotionValues,
  cc as color,
  compareByDepth,
  cd as complex,
  ce as containsCSSVariable,
  convertBoundingBoxToBox,
  convertBoxToBoundingBox,
  a8 as convertOffsetToTimes,
  copyAxisDeltaInto,
  copyAxisInto,
  copyBoxInto,
  cf as correctBorderRadius,
  cg as correctBoxShadow,
  correctParentTransform,
  a9 as createAnimationState,
  ch as createAxis,
  ci as createAxisDelta,
  createBox,
  createDelta,
  createGeneratorEasing,
  createProjectionNode,
  cj as createRenderBatcher,
  createScopedAnimate,
  aa as cubicBezier,
  ck as cubicBezierAsString,
  ab as defaultEasing,
  defaultOffset$1 as defaultOffset,
  cl as defaultTransformValue,
  cm as defaultValueTypes,
  cn as degrees,
  delay,
  delayInSeconds,
  co as dimensionValueTypes,
  disableInstantTransitions,
  distance,
  distance2D,
  domAnimation,
  domMax,
  domMin,
  eachAxis,
  ac as easeIn,
  ad as easeInOut,
  ae as easeOut,
  easingDefinitionToFunction,
  fillOffset,
  fillWildcards,
  cp as filterProps,
  cq as findDimensionValueType,
  cr as findValueType,
  cs as flushKeyframeResolvers,
  followValue,
  frame,
  frameData,
  frameSteps,
  ct as generateLinearEasing,
  cu as getAnimatableNone,
  getAnimationMap,
  getComputedStyle$1 as getComputedStyle,
  af as getDefaultTransition,
  cv as getDefaultValueType,
  getEasingForSegment,
  cw as getFeatureDefinitions,
  cx as getFinalKeyframe,
  ag as getMixer,
  getOptimisedAppearId,
  getOriginIndex,
  getValueAsType,
  getValueTransition$1 as getValueTransition,
  ah as getVariableValue,
  ai as getVariantContext,
  getViewAnimationLayerInfo,
  getViewAnimations,
  globalProjectionState,
  has2DTranslate,
  hasReducedMotionListener,
  hasScale,
  hasTransform,
  hasWarned,
  cy as hex,
  aj as hover,
  cz as hsla,
  ak as hslaToRgba,
  inView,
  al as inertia,
  initPrefersReducedMotion,
  interpolate,
  cA as invariant,
  am as invisibleValues,
  cB as isAnimationControls,
  isBezierDefinition,
  cC as isBrowser,
  cD as isCSSVariableName,
  cE as isCSSVariableToken,
  cF as isControllingVariants,
  isDeltaZero,
  an as isDragActive,
  isDragging,
  isEasingArray,
  ao as isElementKeyboardAccessible,
  isElementTextInput,
  cG as isForcedMotionValue,
  isGenerator,
  isHTMLElement,
  ap as isKeyframesTarget,
  isMotionComponent,
  isMotionValue,
  isNear,
  aq as isNodeOrChild,
  cH as isNumericalString,
  isObject,
  isPrimaryPointer,
  isSVGElement,
  isSVGSVGElement,
  cI as isSVGTag,
  ar as isTransitionDefined,
  cJ as isValidMotionProp,
  cK as isVariantLabel,
  cL as isVariantNode,
  isWaapiSupportedEasing,
  as as isWillChangeMotionValue,
  cM as isZeroValueString,
  at as keyframes,
  a4 as m,
  au as makeAnimationInstant,
  makeUseVisualState,
  mapEasingToNativeEasing,
  mapValue,
  av as maxGeneratorDuration,
  measurePageBox,
  aw as measureViewportBox,
  memo,
  microtask,
  millisecondsToSeconds,
  ax as mirrorEasing,
  ay as mix,
  az as mixArray,
  aA as mixColor,
  aB as mixComplex,
  aC as mixImmediate,
  aD as mixLinearColor,
  mixNumber,
  aE as mixObject,
  mixValues,
  aF as mixVisibility,
  motion,
  motionValue,
  moveItem,
  nodeGroup,
  noop,
  cN as number,
  numberValueTypes,
  observeTimeline,
  cO as optimizedAppearDataAttribute,
  optimizedAppearDataId,
  parseAnimateLayoutArgs,
  aG as parseCSSVariable,
  cP as parseValueFromTransform,
  percent,
  pipe,
  cQ as pixelsToPercent,
  aH as positionalKeys,
  prefersReducedMotion,
  aI as press,
  progress,
  cR as progressPercentage,
  propEffect,
  propagateDirtyNodes,
  px,
  cS as readTransformValue,
  recordStats,
  removeAxisDelta,
  removeAxisTransforms,
  removeBoxTransforms,
  removeItem,
  removePointDelta,
  aJ as renderHTML,
  aK as renderSVG,
  resize,
  resolveElements,
  resolveMotionValue,
  cT as resolveTransition,
  aL as resolveVariant,
  cU as resolveVariantFromProps,
  reverseEasing,
  cV as rgbUnit,
  cW as rgba,
  rootProjectionNode,
  cX as scale,
  scaleCorrectors,
  scalePoint,
  cY as scrapeHTMLMotionValuesFromProps,
  cZ as scrapeSVGMotionValuesFromProps,
  scroll,
  scrollInfo,
  secondsToMilliseconds,
  setDragLock,
  c_ as setFeatureDefinitions,
  c$ as setStyle,
  setTarget,
  spring,
  springValue,
  stagger,
  startOptimizedAppearAnimation,
  startWaapiAnimation,
  statsBuffer,
  steps,
  styleEffect,
  supportedWaapiEasing,
  aM as supportsBrowserAnimation,
  d0 as supportsFlags,
  supportsLinearEasing,
  supportsPartialKeyframes,
  supportsScrollTimeline,
  supportsViewTimeline,
  svgEffect,
  sync,
  d1 as testValueType,
  time,
  transform,
  aN as transformAxis,
  transformBox,
  aO as transformBoxPoints,
  transformPropOrder,
  transformProps,
  transformValue,
  d2 as transformValueTypes,
  transformViewBoxPoint,
  translateAxis,
  unwrapMotionComponent,
  d3 as updateMotionValuesFromProps,
  useAnimate,
  useAnimateMini,
  useAnimation,
  useAnimationControls,
  useAnimationFrame,
  d4 as useComposedRefs,
  useCycle,
  useAnimatedState as useDeprecatedAnimatedState,
  useInvertedScale as useDeprecatedInvertedScale,
  useDomEvent,
  useDragControls,
  useElementScroll,
  useFollowValue,
  useForceUpdate,
  useInView,
  useInstantLayoutTransition,
  useInstantTransition,
  d5 as useIsPresent,
  useIsomorphicLayoutEffect,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  usePageInView,
  usePresence,
  usePresenceData,
  useReducedMotion,
  useReducedMotionConfig,
  useResetProjection,
  useScroll,
  useSpring,
  useTime,
  useTransform,
  useUnmountEffect,
  useVelocity,
  useViewportScroll,
  useWillChange,
  d6 as variantPriorityOrder,
  d7 as variantProps,
  velocityPerSecond,
  d8 as vh,
  visualElementStore,
  d9 as vw,
  warnOnce,
  da as warning,
  wrap
};
