const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BmvgNQAH.js","./features-animation-CmO_Pgh-.js","./Providers-WL0Y5vQ8.js","./Providers-DCrNsOML.css"])))=>i.map(i=>d[i]);
import { r as reactExports, T as $18f2051aff69b9bf$export$43bb16f9c6d9e3f7, E as $1dfb119a85e764e5$export$cc77c4ff7e8673c5, U as $48a7d519b337145d$export$4eaf04e54aa8eed6, V as $fe16bffc7a557bf0$export$7f54fc3180508a52, W as $14c0b72509d70225$export$b0d6fa1ab32e3295, $ as $c4867b2f328c2698$export$e5c5a5f917a5871c, X as $14c0b72509d70225$export$16a4697467175487, Y as $23f2114a1b82827e$export$4282f70798064fe0, Z as $23f2114a1b82827e$export$e58f029f0fbfdb29, _ as $d447af545b77c9f1$export$b204af158042fbac, Q as $0beb20c9744a2065$export$8467354a121f1b9f, a0 as $390e54f620492c70$export$b4cc09c592e8fdb8, g as $bbaa08b3cd72f041$export$9d1611c77c2fe928, c as $8e9d2fae0ecb9001$export$457c3d6518dd4c6f, k as $390e54f620492c70$export$f680877a34711e37, u as useProviderContext, m as mapPropsVariants, a1 as popover, a2 as createDOMRef, p as mergeProps, o as objectToDeps, w as dataAttr, n as cn, f as forwardRef, j as jsxRuntimeExports, a3 as warn, a4 as m, a5 as LazyMotion, a6 as AnimatePresence, a7 as $f57aed4a881a3485$export$b47c3594eab58386, a8 as __vitePreload, a9 as $4d1jn$react, e as $f645667febf57a63$export$4c014de7c8940b4c, aa as input, a as useDOMRef, ab as isEmpty, ac as safeAriaLabel, l as $f7dceffc5ad7768b$export$4e328f61c538687f, s as $6179b936705e76d3$export$ae780daf29e6d456, ad as $9ab94262bd0047c7$export$420e68273165f4ec, N as $f6c31cce2adf654f$export$45712eceda6fad21, t as chain, v as filterDOMProps, O as CloseFilledIcon, R as $240e9101ba2842f5$export$7d15b64cf5a3a4c4, ae as $507fabe10e71c6fb$export$8397ddfc504fdb9a, af as $1969ac565cfec8d0$export$de79e2c695e052f3, ag as $46d819fcbaf35654$export$8f71654801c2f7cd, ah as $240e9101ba2842f5$export$cb6e0bb50bc19463, ai as slider, z as card_default, B as card_header_default, C as divider_default, A as card_body_default, D as clientExports, P as Providers } from "./Providers-WL0Y5vQ8.js";
import { i as $f11fb0bcf1b2687a$export$61c6a8c84e605fb6, j as $d1116acdf220c2da$export$4c014de7c8940b4c, k as $8f5a2122b0992be3$export$630ff653c5ada6a9, n as $8f5a2122b0992be3$export$b9b3dfddab17db27, o as $2a41e45df1593e64$export$d39e1813b3bdd0e1, u as useSafeLayoutEffect, p as useAriaOverlay, m as mergeRefs, q as getArrowPlacement, t as toReactAriaPlacement, T as TRANSITION_VARIANTS, r as getTransformOrigins, v as $3274bf1495747a7b$export$5add1d006293d136, w as $860f7da480e22816$export$b8473d3665f3a75a, x as useSlottedContext, y as useLabelPlacement, F as FormContext, z as $5c3e21d68f1c4674$export$439d29a4e110a164, f as $3e6197669829fe11$export$40bfa8c7b0832715, s as select_default, l as listbox_item_base_default, h as switch_default } from "./chunk-BJWIL32D-JdWHMGB3.js";
function renderFn({ Component, props, renderCustom }) {
  if (renderCustom && typeof renderCustom === "function") {
    return renderCustom(props);
  } else {
    return reactExports.createElement(Component, props);
  }
}
function $a916eb452884faea$export$b7a616150fdb9f44(options = {}) {
  let { locale } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  return reactExports.useMemo(() => new $1dfb119a85e764e5$export$cc77c4ff7e8673c5(locale, options), [
    locale,
    options
  ]);
}
function $e8a7022cf87cba2a$export$36da96379f79f245(props) {
  let { onMoveStart, onMove, onMoveEnd } = props;
  let state = reactExports.useRef({
    didMove: false,
    lastPosition: null,
    id: null
  });
  let { addGlobalListener, removeGlobalListener } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
  let move = reactExports.useCallback((originalEvent, pointerType, deltaX, deltaY) => {
    if (deltaX === 0 && deltaY === 0) return;
    if (!state.current.didMove) {
      state.current.didMove = true;
      onMoveStart === null || onMoveStart === void 0 ? void 0 : onMoveStart({
        type: "movestart",
        pointerType,
        shiftKey: originalEvent.shiftKey,
        metaKey: originalEvent.metaKey,
        ctrlKey: originalEvent.ctrlKey,
        altKey: originalEvent.altKey
      });
    }
    onMove === null || onMove === void 0 ? void 0 : onMove({
      type: "move",
      pointerType,
      deltaX,
      deltaY,
      shiftKey: originalEvent.shiftKey,
      metaKey: originalEvent.metaKey,
      ctrlKey: originalEvent.ctrlKey,
      altKey: originalEvent.altKey
    });
  }, [
    onMoveStart,
    onMove,
    state
  ]);
  let moveEvent = $fe16bffc7a557bf0$export$7f54fc3180508a52(move);
  let end = reactExports.useCallback((originalEvent, pointerType) => {
    $14c0b72509d70225$export$b0d6fa1ab32e3295();
    if (state.current.didMove) onMoveEnd === null || onMoveEnd === void 0 ? void 0 : onMoveEnd({
      type: "moveend",
      pointerType,
      shiftKey: originalEvent.shiftKey,
      metaKey: originalEvent.metaKey,
      ctrlKey: originalEvent.ctrlKey,
      altKey: originalEvent.altKey
    });
  }, [
    onMoveEnd,
    state
  ]);
  let endEvent = $fe16bffc7a557bf0$export$7f54fc3180508a52(end);
  let [pointerDown, setPointerDown] = reactExports.useState(null);
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    if (pointerDown === "pointer") {
      let onPointerMove = (e) => {
        if (e.pointerId === state.current.id) {
          var _state_current_lastPosition, _state_current_lastPosition1;
          let pointerType = e.pointerType || "mouse";
          var _state_current_lastPosition_pageX, _state_current_lastPosition_pageY;
          moveEvent(e, pointerType, e.pageX - ((_state_current_lastPosition_pageX = (_state_current_lastPosition = state.current.lastPosition) === null || _state_current_lastPosition === void 0 ? void 0 : _state_current_lastPosition.pageX) !== null && _state_current_lastPosition_pageX !== void 0 ? _state_current_lastPosition_pageX : 0), e.pageY - ((_state_current_lastPosition_pageY = (_state_current_lastPosition1 = state.current.lastPosition) === null || _state_current_lastPosition1 === void 0 ? void 0 : _state_current_lastPosition1.pageY) !== null && _state_current_lastPosition_pageY !== void 0 ? _state_current_lastPosition_pageY : 0));
          state.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          };
        }
      };
      let onPointerUp = (e) => {
        if (e.pointerId === state.current.id) {
          let pointerType = e.pointerType || "mouse";
          endEvent(e, pointerType);
          state.current.id = null;
          removeGlobalListener(window, "pointermove", onPointerMove, false);
          removeGlobalListener(window, "pointerup", onPointerUp, false);
          removeGlobalListener(window, "pointercancel", onPointerUp, false);
          setPointerDown(null);
        }
      };
      addGlobalListener(window, "pointermove", onPointerMove, false);
      addGlobalListener(window, "pointerup", onPointerUp, false);
      addGlobalListener(window, "pointercancel", onPointerUp, false);
      return () => {
        removeGlobalListener(window, "pointermove", onPointerMove, false);
        removeGlobalListener(window, "pointerup", onPointerUp, false);
        removeGlobalListener(window, "pointercancel", onPointerUp, false);
      };
    }
  }, [
    pointerDown,
    addGlobalListener,
    removeGlobalListener
  ]);
  let moveProps = reactExports.useMemo(() => {
    let moveProps2 = {};
    let start = () => {
      $14c0b72509d70225$export$16a4697467175487();
      state.current.didMove = false;
    };
    moveProps2.onPointerDown = (e) => {
      if (e.button === 0 && state.current.id == null) {
        start();
        e.stopPropagation();
        e.preventDefault();
        state.current.lastPosition = {
          pageX: e.pageX,
          pageY: e.pageY
        };
        state.current.id = e.pointerId;
        setPointerDown("pointer");
      }
    };
    let triggerKeyboardMove = (e, deltaX, deltaY) => {
      start();
      move(e, "keyboard", deltaX, deltaY);
      end(e, "keyboard");
    };
    moveProps2.onKeyDown = (e) => {
      switch (e.key) {
        case "Left":
        case "ArrowLeft":
          e.preventDefault();
          e.stopPropagation();
          triggerKeyboardMove(e, -1, 0);
          break;
        case "Right":
        case "ArrowRight":
          e.preventDefault();
          e.stopPropagation();
          triggerKeyboardMove(e, 1, 0);
          break;
        case "Up":
        case "ArrowUp":
          e.preventDefault();
          e.stopPropagation();
          triggerKeyboardMove(e, 0, -1);
          break;
        case "Down":
        case "ArrowDown":
          e.preventDefault();
          e.stopPropagation();
          triggerKeyboardMove(e, 0, 1);
          break;
      }
    };
    return moveProps2;
  }, [
    state,
    move,
    end
  ]);
  return {
    moveProps
  };
}
let $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = false;
let $e969f22b6713ca4a$var$hoverCount = 0;
function $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents() {
  $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = false;
  }, 500);
}
function $e969f22b6713ca4a$var$handleGlobalPointerEvent(e) {
  if (e.pointerType === "touch") $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $e969f22b6713ca4a$var$setupGlobalTouchEvents() {
  let ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(null);
  if (typeof ownerDocument === "undefined") return;
  if ($e969f22b6713ca4a$var$hoverCount === 0) {
    if (typeof PointerEvent !== "undefined") ownerDocument.addEventListener("pointerup", $e969f22b6713ca4a$var$handleGlobalPointerEvent);
  }
  $e969f22b6713ca4a$var$hoverCount++;
  return () => {
    $e969f22b6713ca4a$var$hoverCount--;
    if ($e969f22b6713ca4a$var$hoverCount > 0) return;
    if (typeof PointerEvent !== "undefined") ownerDocument.removeEventListener("pointerup", $e969f22b6713ca4a$var$handleGlobalPointerEvent);
  };
}
function $e969f22b6713ca4a$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
  let [isHovered, setHovered] = reactExports.useState(false);
  let state = reactExports.useRef({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  reactExports.useEffect($e969f22b6713ca4a$var$setupGlobalTouchEvents, []);
  let { addGlobalListener, removeAllGlobalListeners } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
  let { hoverProps, triggerHoverEnd } = reactExports.useMemo(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled || pointerType === "touch" || state.isHovered || !$23f2114a1b82827e$export$4282f70798064fe0(event.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(event))) return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      addGlobalListener($d447af545b77c9f1$export$b204af158042fbac($23f2114a1b82827e$export$e58f029f0fbfdb29(event)), "pointerover", (e) => {
        if (state.isHovered && state.target && !$23f2114a1b82827e$export$4282f70798064fe0(state.target, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) triggerHoverEnd2(e, e.pointerType);
      }, {
        capture: true
      });
      if (onHoverStart) onHoverStart({
        type: "hoverstart",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(true);
      setHovered(true);
    };
    let triggerHoverEnd2 = (event, pointerType) => {
      let target = state.target;
      state.pointerType = "";
      state.target = null;
      if (pointerType === "touch" || !state.isHovered || !target) return;
      state.isHovered = false;
      removeAllGlobalListeners();
      if (onHoverEnd) onHoverEnd({
        type: "hoverend",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(false);
      setHovered(false);
    };
    let hoverProps2 = {};
    if (typeof PointerEvent !== "undefined") {
      hoverProps2.onPointerEnter = (e) => {
        if ($e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents && e.pointerType === "mouse") return;
        triggerHoverStart(e, e.pointerType);
      };
      hoverProps2.onPointerLeave = (e) => {
        if (!isDisabled && $23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) triggerHoverEnd2(e, e.pointerType);
      };
    }
    return {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled,
    state,
    addGlobalListener,
    removeAllGlobalListeners
  ]);
  reactExports.useEffect(() => {
    if (isDisabled) triggerHoverEnd({
      currentTarget: state.target
    }, state.pointerType);
  }, [
    isDisabled
  ]);
  return {
    hoverProps,
    isHovered
  };
}
const $fd2148440a13ec26$export$aca958c65c314e6c = {
  badInput: false,
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valueMissing: false,
  valid: true
};
const $fd2148440a13ec26$var$CUSTOM_VALIDITY_STATE = {
  ...$fd2148440a13ec26$export$aca958c65c314e6c,
  customError: true,
  valid: false
};
const $fd2148440a13ec26$export$dad6ae84456c676a = {
  isInvalid: false,
  validationDetails: $fd2148440a13ec26$export$aca958c65c314e6c,
  validationErrors: []
};
const $fd2148440a13ec26$export$571b5131b7e65c11 = reactExports.createContext({});
const $fd2148440a13ec26$export$a763b9476acd3eb = "__reactAriaFormValidationState";
function $fd2148440a13ec26$export$fc1a364ae1f3ff10(props) {
  if (props[$fd2148440a13ec26$export$a763b9476acd3eb]) {
    let { realtimeValidation, displayValidation, updateValidation, resetValidation, commitValidation } = props[$fd2148440a13ec26$export$a763b9476acd3eb];
    return {
      realtimeValidation,
      displayValidation,
      updateValidation,
      resetValidation,
      commitValidation
    };
  }
  return $fd2148440a13ec26$var$useFormValidationStateImpl(props);
}
function $fd2148440a13ec26$var$useFormValidationStateImpl(props) {
  let { isInvalid, validationState, name, value, builtinValidation, validate, validationBehavior = "aria" } = props;
  if (validationState) isInvalid ||= validationState === "invalid";
  let controlledError = isInvalid !== void 0 ? {
    isInvalid,
    validationErrors: [],
    validationDetails: $fd2148440a13ec26$var$CUSTOM_VALIDITY_STATE
  } : null;
  let clientError = reactExports.useMemo(() => {
    if (!validate || value == null) return null;
    let validateErrors = $fd2148440a13ec26$var$runValidate(validate, value);
    return $fd2148440a13ec26$var$getValidationResult(validateErrors);
  }, [
    validate,
    value
  ]);
  if (builtinValidation?.validationDetails.valid) builtinValidation = void 0;
  let serverErrors = reactExports.useContext($fd2148440a13ec26$export$571b5131b7e65c11);
  let serverErrorMessages = reactExports.useMemo(() => {
    if (name) return Array.isArray(name) ? name.flatMap((name2) => $fd2148440a13ec26$var$asArray(serverErrors[name2])) : $fd2148440a13ec26$var$asArray(serverErrors[name]);
    return [];
  }, [
    serverErrors,
    name
  ]);
  let [lastServerErrors, setLastServerErrors] = reactExports.useState(serverErrors);
  let [isServerErrorCleared, setServerErrorCleared] = reactExports.useState(false);
  if (serverErrors !== lastServerErrors) {
    setLastServerErrors(serverErrors);
    setServerErrorCleared(false);
  }
  let serverError = reactExports.useMemo(() => $fd2148440a13ec26$var$getValidationResult(isServerErrorCleared ? [] : serverErrorMessages), [
    isServerErrorCleared,
    serverErrorMessages
  ]);
  let nextValidation = reactExports.useRef($fd2148440a13ec26$export$dad6ae84456c676a);
  let [currentValidity, setCurrentValidity] = reactExports.useState($fd2148440a13ec26$export$dad6ae84456c676a);
  let lastError = reactExports.useRef($fd2148440a13ec26$export$dad6ae84456c676a);
  let commitValidation = () => {
    if (!commitQueued) return;
    setCommitQueued(false);
    let error = clientError || builtinValidation || nextValidation.current;
    if (!$fd2148440a13ec26$var$isEqualValidation(error, lastError.current)) {
      lastError.current = error;
      setCurrentValidity(error);
    }
  };
  let [commitQueued, setCommitQueued] = reactExports.useState(false);
  reactExports.useEffect(commitValidation);
  let realtimeValidation = controlledError || serverError || clientError || builtinValidation || $fd2148440a13ec26$export$dad6ae84456c676a;
  let displayValidation = validationBehavior === "native" ? controlledError || serverError || currentValidity : controlledError || serverError || clientError || builtinValidation || currentValidity;
  return {
    realtimeValidation,
    displayValidation,
    updateValidation(value2) {
      if (validationBehavior === "aria" && !$fd2148440a13ec26$var$isEqualValidation(currentValidity, value2)) setCurrentValidity(value2);
      else nextValidation.current = value2;
    },
    resetValidation() {
      let error = $fd2148440a13ec26$export$dad6ae84456c676a;
      if (!$fd2148440a13ec26$var$isEqualValidation(error, lastError.current)) {
        lastError.current = error;
        setCurrentValidity(error);
      }
      if (validationBehavior === "native") setCommitQueued(false);
      setServerErrorCleared(true);
    },
    commitValidation() {
      if (validationBehavior === "native") setCommitQueued(true);
      setServerErrorCleared(true);
    }
  };
}
function $fd2148440a13ec26$var$asArray(v) {
  if (!v) return [];
  return Array.isArray(v) ? v : [
    v
  ];
}
function $fd2148440a13ec26$var$runValidate(validate, value) {
  if (typeof validate === "function") {
    let e = validate(value);
    if (e && typeof e !== "boolean") return $fd2148440a13ec26$var$asArray(e);
  }
  return [];
}
function $fd2148440a13ec26$var$getValidationResult(errors) {
  return errors.length ? {
    isInvalid: true,
    validationErrors: errors,
    validationDetails: $fd2148440a13ec26$var$CUSTOM_VALIDITY_STATE
  } : null;
}
function $fd2148440a13ec26$var$isEqualValidation(a, b) {
  if (a === b) return true;
  return !!a && !!b && a.isInvalid === b.isInvalid && a.validationErrors.length === b.validationErrors.length && a.validationErrors.every((a2, i) => a2 === b.validationErrors[i]) && Object.entries(a.validationDetails).every(([k, v]) => b.validationDetails[k] === v);
}
function $191c9b6d48a0a4e2$export$294aa081a6c6f55d(props) {
  let { description, errorMessage, isInvalid, validationState } = props;
  let { labelProps, fieldProps } = $0beb20c9744a2065$export$8467354a121f1b9f(props);
  let descriptionId = $390e54f620492c70$export$b4cc09c592e8fdb8([
    Boolean(description),
    Boolean(errorMessage),
    isInvalid,
    validationState
  ]);
  let errorMessageId = $390e54f620492c70$export$b4cc09c592e8fdb8([
    Boolean(description),
    Boolean(errorMessage),
    isInvalid,
    validationState
  ]);
  fieldProps = $bbaa08b3cd72f041$export$9d1611c77c2fe928(fieldProps, {
    "aria-describedby": [
      descriptionId,
      // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
      errorMessageId,
      props["aria-describedby"]
    ].filter(Boolean).join(" ") || void 0
  });
  return {
    labelProps,
    fieldProps,
    descriptionProps: {
      id: descriptionId
    },
    errorMessageProps: {
      id: errorMessageId
    }
  };
}
const $8796f90736e175cb$var$TOOLTIP_DELAY = 1500;
const $8796f90736e175cb$var$TOOLTIP_COOLDOWN = 500;
let $8796f90736e175cb$var$tooltips = {};
let $8796f90736e175cb$var$tooltipId = 0;
let $8796f90736e175cb$var$globalWarmedUp = false;
let $8796f90736e175cb$var$globalWarmUpTimeout = null;
let $8796f90736e175cb$var$globalCooldownTimeout = null;
function $8796f90736e175cb$export$4d40659c25ecb50b(props = {}) {
  let { delay = $8796f90736e175cb$var$TOOLTIP_DELAY, closeDelay = $8796f90736e175cb$var$TOOLTIP_COOLDOWN } = props;
  let { isOpen, open, close } = $f11fb0bcf1b2687a$export$61c6a8c84e605fb6(props);
  let id = reactExports.useMemo(() => `${++$8796f90736e175cb$var$tooltipId}`, []);
  let closeTimeout = reactExports.useRef(null);
  let closeCallback = reactExports.useRef(close);
  let ensureTooltipEntry = () => {
    $8796f90736e175cb$var$tooltips[id] = hideTooltip;
  };
  let closeOpenTooltips = () => {
    for (let hideTooltipId in $8796f90736e175cb$var$tooltips) if (hideTooltipId !== id) {
      $8796f90736e175cb$var$tooltips[hideTooltipId](true);
      delete $8796f90736e175cb$var$tooltips[hideTooltipId];
    }
  };
  let showTooltip = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = null;
    closeOpenTooltips();
    ensureTooltipEntry();
    $8796f90736e175cb$var$globalWarmedUp = true;
    open();
    if ($8796f90736e175cb$var$globalWarmUpTimeout) {
      clearTimeout($8796f90736e175cb$var$globalWarmUpTimeout);
      $8796f90736e175cb$var$globalWarmUpTimeout = null;
    }
    if ($8796f90736e175cb$var$globalCooldownTimeout) {
      clearTimeout($8796f90736e175cb$var$globalCooldownTimeout);
      $8796f90736e175cb$var$globalCooldownTimeout = null;
    }
  };
  let hideTooltip = (immediate) => {
    if (immediate || closeDelay <= 0) {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
      closeCallback.current();
    } else if (!closeTimeout.current) closeTimeout.current = setTimeout(() => {
      closeTimeout.current = null;
      closeCallback.current();
    }, closeDelay);
    if ($8796f90736e175cb$var$globalWarmUpTimeout) {
      clearTimeout($8796f90736e175cb$var$globalWarmUpTimeout);
      $8796f90736e175cb$var$globalWarmUpTimeout = null;
    }
    if ($8796f90736e175cb$var$globalWarmedUp) {
      if ($8796f90736e175cb$var$globalCooldownTimeout) clearTimeout($8796f90736e175cb$var$globalCooldownTimeout);
      $8796f90736e175cb$var$globalCooldownTimeout = setTimeout(() => {
        delete $8796f90736e175cb$var$tooltips[id];
        $8796f90736e175cb$var$globalCooldownTimeout = null;
        $8796f90736e175cb$var$globalWarmedUp = false;
      }, Math.max($8796f90736e175cb$var$TOOLTIP_COOLDOWN, closeDelay));
    }
  };
  let warmupTooltip = () => {
    closeOpenTooltips();
    ensureTooltipEntry();
    if (!isOpen && !$8796f90736e175cb$var$globalWarmedUp) {
      if ($8796f90736e175cb$var$globalWarmUpTimeout) clearTimeout($8796f90736e175cb$var$globalWarmUpTimeout);
      $8796f90736e175cb$var$globalWarmUpTimeout = setTimeout(() => {
        $8796f90736e175cb$var$globalWarmUpTimeout = null;
        $8796f90736e175cb$var$globalWarmedUp = true;
        showTooltip();
      }, delay);
    } else if (!isOpen) showTooltip();
  };
  reactExports.useEffect(() => {
    closeCallback.current = close;
  }, [
    close
  ]);
  reactExports.useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
      let tooltip = $8796f90736e175cb$var$tooltips[id];
      if (tooltip) delete $8796f90736e175cb$var$tooltips[id];
    };
  }, [
    id
  ]);
  return {
    isOpen,
    open: (immediate) => {
      if (!immediate && delay > 0 && !closeTimeout.current) warmupTooltip();
      else showTooltip();
    },
    close: hideTooltip
  };
}
function $326e436e94273fe1$export$1c4b08e0eca38426(props, state) {
  let domProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, {
    labelable: true
  });
  let { hoverProps } = $e969f22b6713ca4a$export$ae780daf29e6d456({
    onHoverStart: () => state === null || state === void 0 ? void 0 : state.open(true),
    onHoverEnd: () => state === null || state === void 0 ? void 0 : state.close()
  });
  return {
    tooltipProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(domProps, hoverProps, {
      role: "tooltip"
    })
  };
}
function $4e1b34546679e357$export$a6da6c504e4bba8b(props, state, ref) {
  let { isDisabled, trigger, shouldCloseOnPress = true } = props;
  let tooltipId = $390e54f620492c70$export$f680877a34711e37();
  let isHovered = reactExports.useRef(false);
  let isFocused = reactExports.useRef(false);
  let handleShow = () => {
    if (isHovered.current || isFocused.current) state.open(isFocused.current);
  };
  let handleHide = (immediate) => {
    if (!isHovered.current && !isFocused.current) state.close(immediate);
  };
  reactExports.useEffect(() => {
    let onKeyDown = (e) => {
      if (ref && ref.current) {
        if (e.key === "Escape") {
          e.stopPropagation();
          state.close(true);
        }
      }
    };
    if (state.isOpen) {
      document.addEventListener("keydown", onKeyDown, true);
      return () => {
        document.removeEventListener("keydown", onKeyDown, true);
      };
    }
  }, [
    ref,
    state
  ]);
  let onHoverStart = () => {
    if (trigger === "focus") return;
    if ($8f5a2122b0992be3$export$630ff653c5ada6a9() === "pointer") isHovered.current = true;
    else isHovered.current = false;
    handleShow();
  };
  let onHoverEnd = () => {
    if (trigger === "focus") return;
    isFocused.current = false;
    isHovered.current = false;
    handleHide();
  };
  let onPressStart = () => {
    if (!shouldCloseOnPress) return;
    isFocused.current = false;
    isHovered.current = false;
    handleHide(true);
  };
  let onFocus = () => {
    let isVisible = $8f5a2122b0992be3$export$b9b3dfddab17db27();
    if (isVisible) {
      isFocused.current = true;
      handleShow();
    }
  };
  let onBlur = () => {
    isFocused.current = false;
    isHovered.current = false;
    handleHide(true);
  };
  let { hoverProps } = $e969f22b6713ca4a$export$ae780daf29e6d456({
    isDisabled,
    onHoverStart,
    onHoverEnd
  });
  let { focusableProps } = $d1116acdf220c2da$export$4c014de7c8940b4c({
    isDisabled,
    onFocus,
    onBlur
  }, ref);
  return {
    triggerProps: {
      "aria-describedby": state.isOpen ? tooltipId : void 0,
      ...$bbaa08b3cd72f041$export$9d1611c77c2fe928(focusableProps, hoverProps, {
        onPointerDown: onPressStart,
        onKeyDown: onPressStart
      }),
      tabIndex: void 0
    },
    tooltipProps: {
      id: tooltipId
    }
  };
}
function useTooltip(originalProps) {
  var _a, _b;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, popover.variantKeys);
  const {
    ref,
    as,
    isOpen: isOpenProp,
    content,
    children,
    defaultOpen,
    onOpenChange,
    isDisabled,
    trigger: triggerAction,
    shouldFlip = true,
    containerPadding = 12,
    placement: placementProp = "top",
    delay = 0,
    closeDelay = 500,
    showArrow = false,
    offset = 7,
    crossOffset = 0,
    isDismissable,
    shouldCloseOnBlur = true,
    portalContainer,
    isKeyboardDismissDisabled = false,
    updatePositionDeps = [],
    shouldCloseOnInteractOutside,
    className,
    onClose,
    motionProps,
    classNames,
    ...otherProps
  } = props;
  const Component = as || "div";
  const disableAnimation = (_b = (_a = originalProps == null ? void 0 : originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const state = $8796f90736e175cb$export$4d40659c25ecb50b({
    delay,
    closeDelay,
    isDisabled,
    defaultOpen,
    isOpen: isOpenProp,
    onOpenChange: (isOpen2) => {
      onOpenChange == null ? void 0 : onOpenChange(isOpen2);
      if (!isOpen2) {
        onClose == null ? void 0 : onClose();
      }
    }
  });
  const triggerRef = reactExports.useRef(null);
  const overlayRef = reactExports.useRef(null);
  const tooltipId = reactExports.useId();
  const isOpen = state.isOpen && !isDisabled;
  reactExports.useImperativeHandle(
    ref,
    () => (
      // @ts-ignore
      createDOMRef(overlayRef)
    )
  );
  const { triggerProps, tooltipProps: triggerTooltipProps } = $4e1b34546679e357$export$a6da6c504e4bba8b(
    {
      isDisabled,
      trigger: triggerAction
    },
    state,
    triggerRef
  );
  const { tooltipProps } = $326e436e94273fe1$export$1c4b08e0eca38426(
    {
      isOpen,
      ...mergeProps(props, triggerTooltipProps)
    },
    state
  );
  const {
    overlayProps: positionProps,
    placement,
    updatePosition
  } = $2a41e45df1593e64$export$d39e1813b3bdd0e1({
    isOpen,
    targetRef: triggerRef,
    placement: toReactAriaPlacement(placementProp),
    overlayRef,
    offset: showArrow ? offset + 3 : offset,
    crossOffset,
    shouldFlip,
    containerPadding
  });
  useSafeLayoutEffect(() => {
    if (!updatePositionDeps.length) return;
    updatePosition();
  }, updatePositionDeps);
  const { overlayProps } = useAriaOverlay(
    {
      isOpen,
      onClose: state.close,
      isDismissable,
      shouldCloseOnBlur,
      isKeyboardDismissDisabled,
      shouldCloseOnInteractOutside
    },
    overlayRef
  );
  const slots = reactExports.useMemo(
    () => {
      var _a2, _b2, _c;
      return popover({
        ...variantProps,
        disableAnimation,
        radius: (_a2 = originalProps == null ? void 0 : originalProps.radius) != null ? _a2 : "md",
        size: (_b2 = originalProps == null ? void 0 : originalProps.size) != null ? _b2 : "md",
        shadow: (_c = originalProps == null ? void 0 : originalProps.shadow) != null ? _c : "sm"
      });
    },
    [
      objectToDeps(variantProps),
      disableAnimation,
      originalProps == null ? void 0 : originalProps.radius,
      originalProps == null ? void 0 : originalProps.size,
      originalProps == null ? void 0 : originalProps.shadow
    ]
  );
  const getTriggerProps = reactExports.useCallback(
    (props2 = {}, _ref = null) => ({
      ...mergeProps(triggerProps, props2),
      ref: mergeRefs(_ref, triggerRef),
      "aria-describedby": isOpen ? tooltipId : void 0
    }),
    [triggerProps, isOpen, tooltipId, state]
  );
  const getTooltipProps = reactExports.useCallback(
    () => ({
      ref: overlayRef,
      "data-slot": "base",
      "data-open": dataAttr(isOpen),
      "data-arrow": dataAttr(showArrow),
      "data-disabled": dataAttr(isDisabled),
      "data-placement": getArrowPlacement(placement || "top", placementProp),
      ...mergeProps(tooltipProps, overlayProps, otherProps),
      style: mergeProps(positionProps.style, otherProps.style, props.style),
      className: slots.base({ class: classNames == null ? void 0 : classNames.base }),
      id: tooltipId
    }),
    [
      slots,
      isOpen,
      showArrow,
      isDisabled,
      placement,
      placementProp,
      tooltipProps,
      overlayProps,
      otherProps,
      positionProps,
      props,
      tooltipId
    ]
  );
  const getTooltipContentProps = reactExports.useCallback(
    () => ({
      "data-slot": "content",
      "data-open": dataAttr(isOpen),
      "data-arrow": dataAttr(showArrow),
      "data-disabled": dataAttr(isDisabled),
      "data-placement": getArrowPlacement(placement || "top", placementProp),
      className: slots.content({ class: cn(classNames == null ? void 0 : classNames.content, className) })
    }),
    [slots, isOpen, showArrow, isDisabled, placement, placementProp, classNames]
  );
  return {
    Component,
    content,
    children,
    isOpen,
    triggerRef,
    showArrow,
    portalContainer,
    placement: placementProp,
    disableAnimation,
    isDisabled,
    motionProps,
    getTooltipContentProps,
    getTriggerProps,
    getTooltipProps
  };
}
var domAnimation = () => __vitePreload(() => import("./index-BmvgNQAH.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0, import.meta.url).then((res) => res.default);
var Tooltip = forwardRef((props, ref) => {
  var _a;
  const {
    Component,
    children,
    content,
    isOpen,
    portalContainer,
    placement,
    disableAnimation,
    motionProps,
    getTriggerProps,
    getTooltipProps,
    getTooltipContentProps
  } = useTooltip({
    ...props,
    ref
  });
  let trigger;
  try {
    const childrenNum = reactExports.Children.count(children);
    if (childrenNum !== 1) throw new Error();
    if (!reactExports.isValidElement(children)) {
      trigger = /* @__PURE__ */ jsxRuntimeExports.jsx("p", { ...getTriggerProps(), children });
    } else {
      const child = children;
      const childRef = (_a = child.props.ref) != null ? _a : child.ref;
      trigger = reactExports.cloneElement(child, getTriggerProps(child.props, childRef));
    }
  } catch {
    trigger = /* @__PURE__ */ jsxRuntimeExports.jsx("span", {});
    warn("Tooltip must have only one child node. Please, check your code.");
  }
  const { ref: tooltipRef, id, style, ...otherTooltipProps } = getTooltipProps();
  const animatedContent = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: tooltipRef, id, style, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    m.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "exit",
      variants: TRANSITION_VARIANTS.scaleSpring,
      ...mergeProps(motionProps, otherTooltipProps),
      style: {
        ...getTransformOrigins(placement)
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ...getTooltipContentProps(), children: content })
    },
    `${id}-tooltip-inner`
  ) }, `${id}-tooltip-content`);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    trigger,
    disableAnimation ? isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx($f57aed4a881a3485$export$b47c3594eab58386, { portalContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: tooltipRef, id, style, ...otherTooltipProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ...getTooltipContentProps(), children: content }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LazyMotion, { features: domAnimation, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx($f57aed4a881a3485$export$b47c3594eab58386, { portalContainer, children: animatedContent }) }) })
  ] });
});
Tooltip.displayName = "HeroUI.Tooltip";
var tooltip_default = Tooltip;
var $458b0a5536c1a7cf$var$_React_useInsertionEffect;
const $458b0a5536c1a7cf$var$useEarlyEffect = typeof document !== "undefined" ? ($458b0a5536c1a7cf$var$_React_useInsertionEffect = $4d1jn$react["useInsertionEffect"]) !== null && $458b0a5536c1a7cf$var$_React_useInsertionEffect !== void 0 ? $458b0a5536c1a7cf$var$_React_useInsertionEffect : $4d1jn$react.useLayoutEffect : () => {
};
function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value, defaultValue, onChange) {
  let [stateValue, setStateValue] = reactExports.useState(value || defaultValue);
  let valueRef = reactExports.useRef(stateValue);
  let isControlledRef = reactExports.useRef(value !== void 0);
  let isControlled = value !== void 0;
  reactExports.useEffect(() => {
    isControlledRef.current;
    isControlledRef.current = isControlled;
  }, [
    isControlled
  ]);
  let currentValue = isControlled ? value : stateValue;
  $458b0a5536c1a7cf$var$useEarlyEffect(() => {
    valueRef.current = currentValue;
  });
  let [, forceUpdate] = reactExports.useReducer(() => ({}), {});
  let setValue = reactExports.useCallback((value2, ...args) => {
    let newValue = typeof value2 === "function" ? value2(valueRef.current) : value2;
    if (!Object.is(valueRef.current, newValue)) {
      valueRef.current = newValue;
      setStateValue(newValue);
      forceUpdate();
      onChange === null || onChange === void 0 ? void 0 : onChange(newValue, ...args);
    }
  }, [
    onChange
  ]);
  return [
    currentValue,
    setValue
  ];
}
function $2d73ec29415bd339$export$712718f7aec83d5(props, ref) {
  let { inputElementType = "input", isDisabled = false, isRequired = false, isReadOnly = false, type = "text", validationBehavior = "aria" } = props;
  let [value, setValue] = $458b0a5536c1a7cf$export$40bfa8c7b0832715(props.value, props.defaultValue || "", props.onChange);
  let { focusableProps } = $f645667febf57a63$export$4c014de7c8940b4c(props, ref);
  let validationState = $fd2148440a13ec26$export$fc1a364ae1f3ff10({
    ...props,
    value
  });
  let { isInvalid, validationErrors, validationDetails } = validationState.displayValidation;
  let { labelProps, fieldProps, descriptionProps, errorMessageProps } = $191c9b6d48a0a4e2$export$294aa081a6c6f55d({
    ...props,
    isInvalid,
    errorMessage: props.errorMessage || validationErrors
  });
  let domProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, {
    labelable: true
  });
  const inputOnlyProps = {
    type,
    pattern: props.pattern
  };
  let [initialValue] = reactExports.useState(value);
  var _props_defaultValue;
  $3274bf1495747a7b$export$5add1d006293d136(ref, (_props_defaultValue = props.defaultValue) !== null && _props_defaultValue !== void 0 ? _props_defaultValue : initialValue, setValue);
  $860f7da480e22816$export$b8473d3665f3a75a(props, validationState, ref);
  return {
    labelProps,
    inputProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(domProps, inputElementType === "input" ? inputOnlyProps : void 0, {
      disabled: isDisabled,
      readOnly: isReadOnly,
      required: isRequired && validationBehavior === "native",
      "aria-required": isRequired && validationBehavior === "aria" || void 0,
      "aria-invalid": isInvalid || void 0,
      "aria-errormessage": props["aria-errormessage"],
      "aria-activedescendant": props["aria-activedescendant"],
      "aria-autocomplete": props["aria-autocomplete"],
      "aria-haspopup": props["aria-haspopup"],
      "aria-controls": props["aria-controls"],
      value,
      onChange: (e) => setValue($23f2114a1b82827e$export$e58f029f0fbfdb29(e).value),
      autoComplete: props.autoComplete,
      autoCapitalize: props.autoCapitalize,
      maxLength: props.maxLength,
      minLength: props.minLength,
      name: props.name,
      form: props.form,
      placeholder: props.placeholder,
      inputMode: props.inputMode,
      autoCorrect: props.autoCorrect,
      spellCheck: props.spellCheck,
      [parseInt($4d1jn$react.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: props.enterKeyHint,
      // Clipboard events
      onCopy: props.onCopy,
      onCut: props.onCut,
      onPaste: props.onPaste,
      // Composition events
      onCompositionEnd: props.onCompositionEnd,
      onCompositionStart: props.onCompositionStart,
      onCompositionUpdate: props.onCompositionUpdate,
      // Selection events
      onSelect: props.onSelect,
      // Input events
      onBeforeInput: props.onBeforeInput,
      onInput: props.onInput,
      ...focusableProps,
      ...fieldProps
    }),
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
    validationDetails
  };
}
function useInput(originalProps) {
  var _a, _b, _c, _d, _e, _f, _g;
  const globalContext = useProviderContext();
  const { validationBehavior: formValidationBehavior } = useSlottedContext(FormContext) || {};
  const [props, variantProps] = mapPropsVariants(originalProps, input.variantKeys);
  const {
    ref,
    as,
    type,
    label,
    baseRef,
    wrapperRef,
    description,
    className,
    classNames,
    autoFocus,
    startContent,
    endContent,
    onClear,
    onChange,
    validationState,
    validationBehavior = (_a = formValidationBehavior != null ? formValidationBehavior : globalContext == null ? void 0 : globalContext.validationBehavior) != null ? _a : "native",
    innerWrapperRef: innerWrapperRefProp,
    onValueChange = () => {
    },
    ...otherProps
  } = props;
  const handleValueChange = reactExports.useCallback(
    (value) => {
      onValueChange(value != null ? value : "");
    },
    [onValueChange]
  );
  const [isFocusWithin, setFocusWithin] = reactExports.useState(false);
  const Component = as || "div";
  const disableAnimation = (_c = (_b = originalProps.disableAnimation) != null ? _b : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _c : false;
  const domRef = useDOMRef(ref);
  const baseDomRef = useDOMRef(baseRef);
  const inputWrapperRef = useDOMRef(wrapperRef);
  const innerWrapperRef = useDOMRef(innerWrapperRefProp);
  const [inputValue, setInputValue] = $458b0a5536c1a7cf$export$40bfa8c7b0832715(
    props.value,
    (_d = props.defaultValue) != null ? _d : "",
    handleValueChange
  );
  const isFileTypeInput = type === "file";
  const hasUploadedFiles = ((_g = (_f = (_e = domRef == null ? void 0 : domRef.current) == null ? void 0 : _e.files) == null ? void 0 : _f.length) != null ? _g : 0) > 0;
  const isFilledByDefault = ["date", "time", "month", "week", "range"].includes(type);
  const isFilled = !isEmpty(inputValue) || isFilledByDefault || hasUploadedFiles;
  const isFilledWithin = isFilled || isFocusWithin;
  const isHiddenType = type === "hidden";
  const isMultiline = originalProps.isMultiline;
  const baseStyles = cn(classNames == null ? void 0 : classNames.base, className, isFilled ? "is-filled" : "");
  const handleClear = reactExports.useCallback(() => {
    var _a2;
    if (isFileTypeInput) {
      domRef.current.value = "";
    } else {
      setInputValue("");
    }
    onClear == null ? void 0 : onClear();
    (_a2 = domRef.current) == null ? void 0 : _a2.focus();
  }, [setInputValue, onClear, isFileTypeInput]);
  useSafeLayoutEffect(() => {
    if (!domRef.current) return;
    setInputValue(domRef.current.value);
  }, [domRef.current]);
  const {
    labelProps,
    inputProps,
    isInvalid: isAriaInvalid,
    validationErrors,
    validationDetails,
    descriptionProps,
    errorMessageProps
  } = $2d73ec29415bd339$export$712718f7aec83d5(
    {
      ...originalProps,
      validationBehavior,
      autoCapitalize: originalProps.autoCapitalize,
      value: inputValue,
      "aria-label": originalProps.label ? originalProps["aria-label"] : safeAriaLabel(originalProps["aria-label"], originalProps.placeholder),
      inputElementType: isMultiline ? "textarea" : "input",
      onChange: setInputValue
    },
    domRef
  );
  if (isFileTypeInput) {
    delete inputProps.value;
    delete inputProps.onChange;
  }
  const { isFocusVisible, isFocused, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f({
    autoFocus,
    isTextInput: true
  });
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled) });
  const { isHovered: isLabelHovered, hoverProps: labelHoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({
    isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled)
  });
  const { focusProps: clearFocusProps, isFocusVisible: isClearButtonFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
    onFocusWithinChange: setFocusWithin
  });
  const { pressProps: clearPressProps } = $f6c31cce2adf654f$export$45712eceda6fad21({
    isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled) || !!(originalProps == null ? void 0 : originalProps.isReadOnly),
    onPress: handleClear
  });
  const isInvalid = validationState === "invalid" || isAriaInvalid;
  const labelPlacement = useLabelPlacement({
    labelPlacement: originalProps.labelPlacement,
    label
  });
  const errorMessage = typeof props.errorMessage === "function" ? props.errorMessage({ isInvalid, validationErrors, validationDetails }) : props.errorMessage || (validationErrors == null ? void 0 : validationErrors.join(" "));
  const isClearable = !!onClear || originalProps.isClearable;
  const hasElements = !!label || !!description || !!errorMessage;
  const hasPlaceholder = !!props.placeholder;
  const hasLabel = !!label;
  const hasHelper = !!description || !!errorMessage;
  const isOutsideLeft = labelPlacement === "outside-left";
  const isOutsideTop = labelPlacement === "outside-top";
  const shouldLabelBeOutside = (
    // label is outside only when some placeholder is there
    labelPlacement === "outside" || // label is outside regardless of placeholder
    isOutsideLeft || isOutsideTop
  );
  const shouldLabelBeInside = labelPlacement === "inside";
  const isPlaceholderShown = domRef.current ? (!domRef.current.value || domRef.current.value === "" || !inputValue || inputValue === "") && hasPlaceholder : false;
  const hasStartContent = !!startContent;
  const isLabelOutside = shouldLabelBeOutside ? isOutsideLeft || isOutsideTop || hasPlaceholder || labelPlacement === "outside" && hasStartContent : false;
  const isLabelOutsideAsPlaceholder = labelPlacement === "outside" && !hasPlaceholder && !hasStartContent;
  const slots = reactExports.useMemo(
    () => input({
      ...variantProps,
      isInvalid,
      labelPlacement,
      isClearable,
      disableAnimation
    }),
    [
      objectToDeps(variantProps),
      isInvalid,
      labelPlacement,
      isClearable,
      hasStartContent,
      disableAnimation
    ]
  );
  const getBaseProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        ref: baseDomRef,
        className: slots.base({ class: baseStyles }),
        "data-slot": "base",
        "data-filled": dataAttr(
          isFilled || hasPlaceholder || hasStartContent || isPlaceholderShown || isFileTypeInput
        ),
        "data-filled-within": dataAttr(
          isFilledWithin || hasPlaceholder || hasStartContent || isPlaceholderShown || isFileTypeInput
        ),
        "data-focus-within": dataAttr(isFocusWithin),
        "data-focus-visible": dataAttr(isFocusVisible),
        "data-readonly": dataAttr(originalProps.isReadOnly),
        "data-focus": dataAttr(isFocused),
        "data-hover": dataAttr(isHovered || isLabelHovered),
        "data-required": dataAttr(originalProps.isRequired),
        "data-invalid": dataAttr(isInvalid),
        "data-disabled": dataAttr(originalProps.isDisabled),
        "data-has-elements": dataAttr(hasElements),
        "data-has-helper": dataAttr(hasHelper),
        "data-has-label": dataAttr(hasLabel),
        "data-has-value": dataAttr(!isPlaceholderShown),
        "data-hidden": dataAttr(isHiddenType),
        ...focusWithinProps,
        ...props2
      };
    },
    [
      slots,
      baseStyles,
      isFilled,
      isFocused,
      isHovered,
      isLabelHovered,
      isInvalid,
      hasHelper,
      hasLabel,
      hasElements,
      isPlaceholderShown,
      hasStartContent,
      isFocusWithin,
      isFocusVisible,
      isFilledWithin,
      hasPlaceholder,
      focusWithinProps,
      isHiddenType,
      originalProps.isReadOnly,
      originalProps.isRequired,
      originalProps.isDisabled
    ]
  );
  const getLabelProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        "data-slot": "label",
        className: slots.label({ class: classNames == null ? void 0 : classNames.label }),
        ...mergeProps(labelProps, labelHoverProps, props2)
      };
    },
    [slots, isLabelHovered, labelProps, classNames == null ? void 0 : classNames.label]
  );
  const handleKeyDown = reactExports.useCallback(
    (e) => {
      if (e.key === "Escape" && inputValue && (isClearable || onClear) && !originalProps.isReadOnly) {
        setInputValue("");
        onClear == null ? void 0 : onClear();
      }
    },
    [inputValue, setInputValue, onClear, isClearable, originalProps.isReadOnly]
  );
  const getInputProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        "data-slot": "input",
        "data-filled": dataAttr(isFilled),
        "data-filled-within": dataAttr(isFilledWithin),
        "data-has-start-content": dataAttr(hasStartContent),
        "data-has-end-content": dataAttr(!!endContent),
        "data-type": type,
        className: slots.input({
          class: cn(
            classNames == null ? void 0 : classNames.input,
            isFilled ? "is-filled" : "",
            isMultiline ? "pe-0" : "",
            type === "password" ? "[&::-ms-reveal]:hidden" : ""
          )
        }),
        ...mergeProps(
          focusProps,
          inputProps,
          filterDOMProps(otherProps, {
            enabled: true,
            labelable: true,
            omitEventNames: new Set(Object.keys(inputProps))
          }),
          props2
        ),
        "aria-readonly": dataAttr(originalProps.isReadOnly),
        onChange: chain(inputProps.onChange, onChange),
        onKeyDown: chain(inputProps.onKeyDown, props2.onKeyDown, handleKeyDown),
        ref: domRef
      };
    },
    [
      slots,
      inputValue,
      focusProps,
      inputProps,
      otherProps,
      isFilled,
      isFilledWithin,
      hasStartContent,
      endContent,
      classNames == null ? void 0 : classNames.input,
      originalProps.isReadOnly,
      originalProps.isRequired,
      onChange,
      handleKeyDown
    ]
  );
  const getInputWrapperProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        ref: inputWrapperRef,
        "data-slot": "input-wrapper",
        "data-hover": dataAttr(isHovered || isLabelHovered),
        "data-focus-visible": dataAttr(isFocusVisible),
        "data-focus": dataAttr(isFocused),
        className: slots.inputWrapper({
          class: cn(classNames == null ? void 0 : classNames.inputWrapper, isFilled ? "is-filled" : "")
        }),
        ...mergeProps(props2, hoverProps),
        onClick: (e) => {
          if (domRef.current && e.currentTarget === e.target) {
            domRef.current.focus();
          }
        },
        style: {
          cursor: "text",
          ...props2.style
        }
      };
    },
    [
      slots,
      isHovered,
      isLabelHovered,
      isFocusVisible,
      isFocused,
      inputValue,
      classNames == null ? void 0 : classNames.inputWrapper
    ]
  );
  const getInnerWrapperProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        ...props2,
        ref: innerWrapperRef,
        "data-slot": "inner-wrapper",
        onClick: (e) => {
          if (domRef.current && e.currentTarget === e.target) {
            domRef.current.focus();
          }
        },
        className: slots.innerWrapper({
          class: cn(classNames == null ? void 0 : classNames.innerWrapper, props2 == null ? void 0 : props2.className)
        })
      };
    },
    [slots, classNames == null ? void 0 : classNames.innerWrapper]
  );
  const getMainWrapperProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        ...props2,
        "data-slot": "main-wrapper",
        className: slots.mainWrapper({
          class: cn(classNames == null ? void 0 : classNames.mainWrapper, props2 == null ? void 0 : props2.className)
        })
      };
    },
    [slots, classNames == null ? void 0 : classNames.mainWrapper]
  );
  const getHelperWrapperProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        ...props2,
        "data-slot": "helper-wrapper",
        className: slots.helperWrapper({
          class: cn(classNames == null ? void 0 : classNames.helperWrapper, props2 == null ? void 0 : props2.className)
        })
      };
    },
    [slots, classNames == null ? void 0 : classNames.helperWrapper]
  );
  const getDescriptionProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        ...props2,
        ...descriptionProps,
        "data-slot": "description",
        className: slots.description({ class: cn(classNames == null ? void 0 : classNames.description, props2 == null ? void 0 : props2.className) })
      };
    },
    [slots, classNames == null ? void 0 : classNames.description]
  );
  const getErrorMessageProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        ...props2,
        ...errorMessageProps,
        "data-slot": "error-message",
        className: slots.errorMessage({ class: cn(classNames == null ? void 0 : classNames.errorMessage, props2 == null ? void 0 : props2.className) })
      };
    },
    [slots, errorMessageProps, classNames == null ? void 0 : classNames.errorMessage]
  );
  const getClearButtonProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        ...props2,
        type: "button",
        tabIndex: -1,
        disabled: originalProps.isDisabled,
        "aria-label": "clear input",
        "data-slot": "clear-button",
        "data-focus-visible": dataAttr(isClearButtonFocusVisible),
        className: slots.clearButton({
          class: cn(classNames == null ? void 0 : classNames.clearButton, props2 == null ? void 0 : props2.className)
        }),
        ...mergeProps(clearPressProps, clearFocusProps)
      };
    },
    [slots, isClearButtonFocusVisible, clearPressProps, clearFocusProps, classNames == null ? void 0 : classNames.clearButton]
  );
  return {
    Component,
    classNames,
    domRef,
    label,
    description,
    startContent,
    endContent,
    labelPlacement,
    isClearable,
    hasHelper,
    hasStartContent,
    isLabelOutside,
    isOutsideLeft,
    isOutsideTop,
    isLabelOutsideAsPlaceholder,
    shouldLabelBeOutside,
    shouldLabelBeInside,
    hasPlaceholder,
    isInvalid,
    errorMessage,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getMainWrapperProps,
    getInputWrapperProps,
    getInnerWrapperProps,
    getHelperWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps
  };
}
var Input = forwardRef((props, ref) => {
  const {
    Component,
    label,
    description,
    isClearable,
    startContent,
    endContent,
    labelPlacement,
    hasHelper,
    isOutsideLeft,
    isOutsideTop,
    shouldLabelBeOutside,
    errorMessage,
    isInvalid,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getInnerWrapperProps,
    getInputWrapperProps,
    getMainWrapperProps,
    getHelperWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps
  } = useInput({ ...props, ref });
  const labelContent = label ? /* @__PURE__ */ jsxRuntimeExports.jsx("label", { ...getLabelProps(), children: label }) : null;
  const end = reactExports.useMemo(() => {
    if (isClearable) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { ...getClearButtonProps(), children: endContent || /* @__PURE__ */ jsxRuntimeExports.jsx(CloseFilledIcon, {}) });
    }
    return endContent;
  }, [isClearable, getClearButtonProps]);
  const helperWrapper = reactExports.useMemo(() => {
    const shouldShowError = isInvalid && errorMessage;
    const hasContent = shouldShowError || description;
    if (!hasHelper || !hasContent) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...getHelperWrapperProps(), children: shouldShowError ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...getErrorMessageProps(), children: errorMessage }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...getDescriptionProps(), children: description }) });
  }, [
    hasHelper,
    isInvalid,
    errorMessage,
    description,
    getHelperWrapperProps,
    getErrorMessageProps,
    getDescriptionProps
  ]);
  const innerWrapper = reactExports.useMemo(() => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getInnerWrapperProps(), children: [
      startContent,
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...getInputProps() }),
      end
    ] });
  }, [startContent, end, getInputProps, getInnerWrapperProps]);
  const mainWrapper = reactExports.useMemo(() => {
    if (shouldLabelBeOutside) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getMainWrapperProps(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getInputWrapperProps(), children: [
          !isOutsideLeft && !isOutsideTop ? labelContent : null,
          innerWrapper
        ] }),
        helperWrapper
      ] });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getInputWrapperProps(), children: [
        labelContent,
        innerWrapper
      ] }),
      helperWrapper
    ] });
  }, [
    labelPlacement,
    helperWrapper,
    shouldLabelBeOutside,
    labelContent,
    innerWrapper,
    errorMessage,
    description,
    getMainWrapperProps,
    getInputWrapperProps,
    getErrorMessageProps,
    getDescriptionProps
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { ...getBaseProps(), children: [
    isOutsideLeft || isOutsideTop ? labelContent : null,
    mainWrapper
  ] });
});
Input.displayName = "HeroUI.Input";
var input_default = Input;
const $aa519ee6cf463259$export$d6c8d9636a3dc49c = /* @__PURE__ */ new WeakMap();
function $aa519ee6cf463259$export$68e648cbec363a18(state, index) {
  let data = $aa519ee6cf463259$export$d6c8d9636a3dc49c.get(state);
  if (!data) throw new Error("Unknown slider state");
  return `${data.id}-${index}`;
}
function $bcca50147b47f54d$export$56b2c08e277f365(props, state, trackRef) {
  let { labelProps, fieldProps } = $0beb20c9744a2065$export$8467354a121f1b9f(props);
  let isVertical = props.orientation === "vertical";
  var _labelProps_id;
  $aa519ee6cf463259$export$d6c8d9636a3dc49c.set(state, {
    id: (_labelProps_id = labelProps.id) !== null && _labelProps_id !== void 0 ? _labelProps_id : fieldProps.id,
    "aria-describedby": props["aria-describedby"],
    "aria-details": props["aria-details"]
  });
  let { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  let { addGlobalListener, removeGlobalListener } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
  const realTimeTrackDraggingIndex = reactExports.useRef(null);
  const reverseX = direction === "rtl";
  const currentPosition = reactExports.useRef(null);
  const { moveProps } = $e8a7022cf87cba2a$export$36da96379f79f245({
    onMoveStart() {
      currentPosition.current = null;
    },
    onMove({ deltaX, deltaY }) {
      if (!trackRef.current) return;
      let { height, width } = trackRef.current.getBoundingClientRect();
      let size = isVertical ? height : width;
      if (currentPosition.current == null && realTimeTrackDraggingIndex.current != null) currentPosition.current = state.getThumbPercent(realTimeTrackDraggingIndex.current) * size;
      let delta = isVertical ? deltaY : deltaX;
      if (isVertical || reverseX) delta = -delta;
      currentPosition.current += delta;
      if (realTimeTrackDraggingIndex.current != null && trackRef.current) {
        const percent = $240e9101ba2842f5$export$7d15b64cf5a3a4c4(currentPosition.current / size, 0, 1);
        state.setThumbPercent(realTimeTrackDraggingIndex.current, percent);
      }
    },
    onMoveEnd() {
      if (realTimeTrackDraggingIndex.current != null) {
        state.setThumbDragging(realTimeTrackDraggingIndex.current, false);
        realTimeTrackDraggingIndex.current = null;
      }
    }
  });
  let currentPointer = reactExports.useRef(void 0);
  let onDownTrack = (e, id, clientX, clientY) => {
    if (trackRef.current && !props.isDisabled && state.values.every((_, i) => !state.isThumbDragging(i))) {
      let { height, width, top, left } = trackRef.current.getBoundingClientRect();
      let size = isVertical ? height : width;
      const trackPosition = isVertical ? top : left;
      const clickPosition = isVertical ? clientY : clientX;
      const offset = clickPosition - trackPosition;
      let percent = offset / size;
      if (direction === "rtl" || isVertical) percent = 1 - percent;
      let value = state.getPercentValue(percent);
      let closestThumb;
      let split = state.values.findIndex((v) => value - v < 0);
      if (split === 0) closestThumb = split;
      else if (split === -1) closestThumb = state.values.length - 1;
      else {
        let lastLeft = state.values[split - 1];
        let firstRight = state.values[split];
        if (Math.abs(lastLeft - value) < Math.abs(firstRight - value)) closestThumb = split - 1;
        else closestThumb = split;
      }
      if (closestThumb >= 0 && state.isThumbEditable(closestThumb)) {
        e.preventDefault();
        realTimeTrackDraggingIndex.current = closestThumb;
        state.setFocusedThumb(closestThumb);
        currentPointer.current = id;
        state.setThumbDragging(realTimeTrackDraggingIndex.current, true);
        state.setThumbValue(closestThumb, value);
        addGlobalListener(window, "mouseup", onUpTrack, false);
        addGlobalListener(window, "touchend", onUpTrack, false);
        addGlobalListener(window, "pointerup", onUpTrack, false);
      } else realTimeTrackDraggingIndex.current = null;
    }
  };
  let onUpTrack = (e) => {
    var _e_changedTouches;
    var _e_pointerId;
    let id = (_e_pointerId = e.pointerId) !== null && _e_pointerId !== void 0 ? _e_pointerId : (_e_changedTouches = e.changedTouches) === null || _e_changedTouches === void 0 ? void 0 : _e_changedTouches[0].identifier;
    if (id === currentPointer.current) {
      if (realTimeTrackDraggingIndex.current != null) {
        state.setThumbDragging(realTimeTrackDraggingIndex.current, false);
        realTimeTrackDraggingIndex.current = null;
      }
      removeGlobalListener(window, "mouseup", onUpTrack, false);
      removeGlobalListener(window, "touchend", onUpTrack, false);
      removeGlobalListener(window, "pointerup", onUpTrack, false);
    }
  };
  if ("htmlFor" in labelProps && labelProps.htmlFor) {
    delete labelProps.htmlFor;
    labelProps.onClick = () => {
      var _document_getElementById;
      (_document_getElementById = document.getElementById($aa519ee6cf463259$export$68e648cbec363a18(state, 0))) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.focus();
      $507fabe10e71c6fb$export$8397ddfc504fdb9a("keyboard");
    };
  }
  return {
    labelProps,
    // The root element of the Slider will have role="group" to group together
    // all the thumb inputs in the Slider.  The label of the Slider will
    // be used to label the group.
    groupProps: {
      role: "group",
      ...fieldProps
    },
    trackProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928({
      onMouseDown(e) {
        if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
        onDownTrack(e, void 0, e.clientX, e.clientY);
      },
      onPointerDown(e) {
        if (e.pointerType === "mouse" && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey)) return;
        onDownTrack(e, e.pointerId, e.clientX, e.clientY);
      },
      onTouchStart(e) {
        onDownTrack(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      },
      style: {
        position: "relative",
        touchAction: "none"
      }
    }, moveProps),
    outputProps: {
      htmlFor: state.values.map((_, index) => $aa519ee6cf463259$export$68e648cbec363a18(state, index)).join(" "),
      "aria-live": "off"
    }
  };
}
function $47b897dc8cdb026b$export$8d15029008292ae(opts, state) {
  let { index = 0, isRequired, validationState, isInvalid, trackRef, inputRef, orientation = state.orientation, name, form } = opts;
  let isDisabled = opts.isDisabled || state.isDisabled;
  let isVertical = orientation === "vertical";
  let { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  let { addGlobalListener, removeGlobalListener } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
  let data = $aa519ee6cf463259$export$d6c8d9636a3dc49c.get(state);
  var _opts_arialabelledby;
  const { labelProps, fieldProps } = $0beb20c9744a2065$export$8467354a121f1b9f({
    ...opts,
    id: $aa519ee6cf463259$export$68e648cbec363a18(state, index),
    "aria-labelledby": `${data.id} ${(_opts_arialabelledby = opts["aria-labelledby"]) !== null && _opts_arialabelledby !== void 0 ? _opts_arialabelledby : ""}`.trim()
  });
  const value = state.values[index];
  const focusInput = reactExports.useCallback(() => {
    if (inputRef.current) $1969ac565cfec8d0$export$de79e2c695e052f3(inputRef.current);
  }, [
    inputRef
  ]);
  const isFocused = state.focusedThumb === index;
  reactExports.useEffect(() => {
    if (isFocused) focusInput();
  }, [
    isFocused,
    focusInput
  ]);
  let reverseX = direction === "rtl";
  let currentPosition = reactExports.useRef(null);
  let { keyboardProps } = $46d819fcbaf35654$export$8f71654801c2f7cd({
    onKeyDown(e) {
      let { getThumbMaxValue, getThumbMinValue, decrementThumb, incrementThumb, setThumbValue, setThumbDragging, pageSize } = state;
      if (!/^(PageUp|PageDown|Home|End)$/.test(e.key)) {
        e.continuePropagation();
        return;
      }
      e.preventDefault();
      setThumbDragging(index, true);
      switch (e.key) {
        case "PageUp":
          incrementThumb(index, pageSize);
          break;
        case "PageDown":
          decrementThumb(index, pageSize);
          break;
        case "Home":
          setThumbValue(index, getThumbMinValue(index));
          break;
        case "End":
          setThumbValue(index, getThumbMaxValue(index));
          break;
      }
      setThumbDragging(index, false);
    }
  });
  let { moveProps } = $e8a7022cf87cba2a$export$36da96379f79f245({
    onMoveStart() {
      currentPosition.current = null;
      state.setThumbDragging(index, true);
    },
    onMove({ deltaX, deltaY, pointerType, shiftKey }) {
      const { getThumbPercent, setThumbPercent, decrementThumb, incrementThumb, step, pageSize } = state;
      if (!trackRef.current) return;
      let { width, height } = trackRef.current.getBoundingClientRect();
      let size = isVertical ? height : width;
      if (currentPosition.current == null) currentPosition.current = getThumbPercent(index) * size;
      if (pointerType === "keyboard") {
        if (deltaX > 0 && reverseX || deltaX < 0 && !reverseX || deltaY > 0) decrementThumb(index, shiftKey ? pageSize : step);
        else incrementThumb(index, shiftKey ? pageSize : step);
      } else {
        let delta = isVertical ? deltaY : deltaX;
        if (isVertical || reverseX) delta = -delta;
        currentPosition.current += delta;
        setThumbPercent(index, $240e9101ba2842f5$export$7d15b64cf5a3a4c4(currentPosition.current / size, 0, 1));
      }
    },
    onMoveEnd() {
      state.setThumbDragging(index, false);
    }
  });
  state.setThumbEditable(index, !isDisabled);
  const { focusableProps } = $f645667febf57a63$export$4c014de7c8940b4c($bbaa08b3cd72f041$export$9d1611c77c2fe928(opts, {
    onFocus: () => state.setFocusedThumb(index),
    onBlur: () => state.setFocusedThumb(void 0)
  }), inputRef);
  let currentPointer = reactExports.useRef(void 0);
  let onDown = (id) => {
    focusInput();
    currentPointer.current = id;
    state.setThumbDragging(index, true);
    addGlobalListener(window, "mouseup", onUp, false);
    addGlobalListener(window, "touchend", onUp, false);
    addGlobalListener(window, "pointerup", onUp, false);
  };
  let onUp = (e) => {
    var _e_changedTouches;
    var _e_pointerId;
    let id = (_e_pointerId = e.pointerId) !== null && _e_pointerId !== void 0 ? _e_pointerId : (_e_changedTouches = e.changedTouches) === null || _e_changedTouches === void 0 ? void 0 : _e_changedTouches[0].identifier;
    if (id === currentPointer.current) {
      focusInput();
      state.setThumbDragging(index, false);
      removeGlobalListener(window, "mouseup", onUp, false);
      removeGlobalListener(window, "touchend", onUp, false);
      removeGlobalListener(window, "pointerup", onUp, false);
    }
  };
  let thumbPosition = state.getThumbPercent(index);
  if (isVertical || direction === "rtl") thumbPosition = 1 - thumbPosition;
  let interactions = !isDisabled ? $bbaa08b3cd72f041$export$9d1611c77c2fe928(keyboardProps, moveProps, {
    onMouseDown: (e) => {
      if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
      onDown();
    },
    onPointerDown: (e) => {
      if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
      onDown(e.pointerId);
    },
    onTouchStart: (e) => {
      onDown(e.changedTouches[0].identifier);
    }
  }) : {};
  $3274bf1495747a7b$export$5add1d006293d136(inputRef, state.defaultValues[index], (v) => {
    state.setThumbValue(index, v);
  });
  return {
    inputProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(focusableProps, fieldProps, {
      type: "range",
      tabIndex: !isDisabled ? 0 : void 0,
      min: state.getThumbMinValue(index),
      max: state.getThumbMaxValue(index),
      step: state.step,
      value,
      name,
      form,
      disabled: isDisabled,
      "aria-orientation": orientation,
      "aria-valuetext": state.getThumbValueLabel(index),
      "aria-required": isRequired || void 0,
      "aria-invalid": isInvalid || validationState === "invalid" || void 0,
      "aria-errormessage": opts["aria-errormessage"],
      "aria-describedby": [
        data["aria-describedby"],
        opts["aria-describedby"]
      ].filter(Boolean).join(" "),
      "aria-details": [
        data["aria-details"],
        opts["aria-details"]
      ].filter(Boolean).join(" "),
      onChange: (e) => {
        state.setThumbValue(index, parseFloat($23f2114a1b82827e$export$e58f029f0fbfdb29(e).value));
      }
    }),
    thumbProps: {
      ...interactions,
      style: {
        position: "absolute",
        [isVertical ? "top" : "left"]: `${thumbPosition * 100}%`,
        transform: "translate(-50%, -50%)",
        touchAction: "none"
      }
    },
    labelProps,
    isDragging: state.isThumbDragging(index),
    isDisabled,
    isFocused
  };
}
function useSliderThumb(props) {
  const {
    ref,
    as,
    state,
    index,
    name,
    trackRef,
    className,
    tooltipProps,
    isVertical,
    showTooltip,
    getTooltipValue,
    formatOptions,
    renderThumb,
    ...otherProps
  } = props;
  const Component = as || "div";
  const domRef = useDOMRef(ref);
  const inputRef = reactExports.useRef(null);
  const numberFormatter = $a916eb452884faea$export$b7a616150fdb9f44(formatOptions);
  const { thumbProps, inputProps, isDragging, isFocused } = $47b897dc8cdb026b$export$8d15029008292ae(
    {
      index,
      trackRef,
      inputRef,
      name,
      ...otherProps
    },
    state
  );
  const { hoverProps, isHovered } = $6179b936705e76d3$export$ae780daf29e6d456({
    isDisabled: state.isDisabled
  });
  const { focusProps, isFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const { pressProps, isPressed } = $f6c31cce2adf654f$export$45712eceda6fad21({
    isDisabled: state.isDisabled
  });
  const getThumbProps = (props2 = {}) => {
    return {
      ref: domRef,
      "data-slot": "thumb",
      "data-hover": dataAttr(isHovered),
      "data-pressed": dataAttr(isPressed),
      "data-dragging": dataAttr(isDragging),
      "data-focused": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocusVisible),
      "aria-label": props2["aria-label"] || `Slider thumb ${index !== void 0 ? `${index + 1}` : ""}`,
      ...mergeProps(thumbProps, pressProps, hoverProps, otherProps),
      className,
      ...props2
    };
  };
  const getTooltipProps = () => {
    const stateValue = (tooltipProps == null ? void 0 : tooltipProps.content) ? tooltipProps.content : getTooltipValue ? state.values.length === 1 ? getTooltipValue(state.values[index != null ? index : 0]) : getTooltipValue(state.values, index != null ? index : 0) : state.values[index != null ? index : 0];
    const value = numberFormatter && typeof stateValue === "number" ? numberFormatter.format(stateValue) : stateValue;
    return {
      ...tooltipProps,
      placement: (tooltipProps == null ? void 0 : tooltipProps.placement) ? tooltipProps == null ? void 0 : tooltipProps.placement : isVertical ? "right" : "top",
      content: (tooltipProps == null ? void 0 : tooltipProps.content) ? tooltipProps == null ? void 0 : tooltipProps.content : value,
      updatePositionDeps: [isDragging, isHovered, isFocused, isFocusVisible, value],
      isOpen: (tooltipProps == null ? void 0 : tooltipProps.isOpen) !== void 0 ? tooltipProps == null ? void 0 : tooltipProps.isOpen : isHovered || isDragging || isFocused || isFocusVisible,
      role: "tooltip",
      "aria-label": `Current value: ${value}`
    };
  };
  const getInputProps = (props2 = {}) => {
    return {
      ref: inputRef,
      ...mergeProps(inputProps, focusProps),
      ...props2
    };
  };
  return {
    Component,
    index,
    showTooltip,
    renderThumb,
    getThumbProps,
    getTooltipProps,
    getInputProps
  };
}
var SliderThumb = forwardRef((props, ref) => {
  const {
    Component,
    index,
    renderThumb,
    showTooltip,
    getTooltipProps,
    getThumbProps,
    getInputProps
  } = useSliderThumb({
    ...props,
    ref
  });
  const thumbProps = {
    ...getThumbProps(),
    index,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx($5c3e21d68f1c4674$export$439d29a4e110a164, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...getInputProps() }) })
  };
  const content = renderFn({
    Component,
    props: thumbProps,
    renderCustom: renderThumb
  });
  return showTooltip ? /* @__PURE__ */ jsxRuntimeExports.jsx(tooltip_default, { ...getTooltipProps(), children: content }) : content;
});
SliderThumb.displayName = "HeroUI.SliderThumb";
var slider_thumb_default = SliderThumb;
const $28f99e3e86e6ec45$var$DEFAULT_MIN_VALUE = 0;
const $28f99e3e86e6ec45$var$DEFAULT_MAX_VALUE = 100;
const $28f99e3e86e6ec45$var$DEFAULT_STEP_VALUE = 1;
function $28f99e3e86e6ec45$export$e5fda3247f5d67f9(props) {
  const { isDisabled = false, minValue = $28f99e3e86e6ec45$var$DEFAULT_MIN_VALUE, maxValue = $28f99e3e86e6ec45$var$DEFAULT_MAX_VALUE, numberFormatter: formatter, step = $28f99e3e86e6ec45$var$DEFAULT_STEP_VALUE, orientation = "horizontal" } = props;
  let pageSize = reactExports.useMemo(() => {
    let calcPageSize = (maxValue - minValue) / 10;
    calcPageSize = $240e9101ba2842f5$export$cb6e0bb50bc19463(calcPageSize, 0, calcPageSize + step, step);
    return Math.max(calcPageSize, step);
  }, [
    step,
    maxValue,
    minValue
  ]);
  let restrictValues = reactExports.useCallback((values2) => values2 === null || values2 === void 0 ? void 0 : values2.map((val, idx) => {
    let min = idx === 0 ? minValue : values2[idx - 1];
    let max = idx === values2.length - 1 ? maxValue : values2[idx + 1];
    return $240e9101ba2842f5$export$cb6e0bb50bc19463(val, min, max, step);
  }), [
    minValue,
    maxValue,
    step
  ]);
  let value = reactExports.useMemo(() => restrictValues($28f99e3e86e6ec45$var$convertValue(props.value)), [
    props.value,
    restrictValues
  ]);
  let defaultValue = reactExports.useMemo(() => {
    var _convertValue;
    return restrictValues((_convertValue = $28f99e3e86e6ec45$var$convertValue(props.defaultValue)) !== null && _convertValue !== void 0 ? _convertValue : [
      minValue
    ]);
  }, [
    props.defaultValue,
    minValue,
    restrictValues
  ]);
  let onChange = $28f99e3e86e6ec45$var$createOnChange(props.value, props.defaultValue, props.onChange);
  let onChangeEnd = $28f99e3e86e6ec45$var$createOnChange(props.value, props.defaultValue, props.onChangeEnd);
  const [values, setValuesState] = $3e6197669829fe11$export$40bfa8c7b0832715(value, defaultValue, onChange);
  let [initialValues] = reactExports.useState(values);
  const [isDraggings, setDraggingsState] = reactExports.useState(new Array(values.length).fill(false));
  const isEditablesRef = reactExports.useRef(new Array(values.length).fill(true));
  const [focusedIndex, setFocusedIndex] = reactExports.useState(void 0);
  const valuesRef = reactExports.useRef(values);
  const isDraggingsRef = reactExports.useRef(isDraggings);
  let setValues = (values2) => {
    valuesRef.current = values2;
    setValuesState(values2);
  };
  let setDraggings = (draggings) => {
    isDraggingsRef.current = draggings;
    setDraggingsState(draggings);
  };
  function getValuePercent(value2) {
    return (value2 - minValue) / (maxValue - minValue);
  }
  function getThumbMinValue(index) {
    return index === 0 ? minValue : values[index - 1];
  }
  function getThumbMaxValue(index) {
    return index === values.length - 1 ? maxValue : values[index + 1];
  }
  function isThumbEditable(index) {
    return isEditablesRef.current[index];
  }
  function setThumbEditable(index, editable) {
    isEditablesRef.current[index] = editable;
  }
  function updateValue(index, value2) {
    if (isDisabled || !isThumbEditable(index)) return;
    const thisMin = getThumbMinValue(index);
    const thisMax = getThumbMaxValue(index);
    value2 = $240e9101ba2842f5$export$cb6e0bb50bc19463(value2, thisMin, thisMax, step);
    let newValues = $28f99e3e86e6ec45$var$replaceIndex(valuesRef.current, index, value2);
    setValues(newValues);
  }
  function updateDragging(index, dragging) {
    if (isDisabled || !isThumbEditable(index)) return;
    if (dragging) valuesRef.current = values;
    const wasDragging = isDraggingsRef.current[index];
    isDraggingsRef.current = $28f99e3e86e6ec45$var$replaceIndex(isDraggingsRef.current, index, dragging);
    setDraggings(isDraggingsRef.current);
    if (onChangeEnd && wasDragging && !isDraggingsRef.current.some(Boolean)) onChangeEnd(valuesRef.current);
  }
  function getFormattedValue(value2) {
    return formatter.format(value2);
  }
  function setThumbPercent(index, percent) {
    updateValue(index, getPercentValue(percent));
  }
  function getRoundedValue(value2) {
    return Math.round((value2 - minValue) / step) * step + minValue;
  }
  function getPercentValue(percent) {
    const val = percent * (maxValue - minValue) + minValue;
    return $240e9101ba2842f5$export$7d15b64cf5a3a4c4(getRoundedValue(val), minValue, maxValue);
  }
  function incrementThumb(index, stepSize = 1) {
    let s = Math.max(stepSize, step);
    updateValue(index, $240e9101ba2842f5$export$cb6e0bb50bc19463(values[index] + s, minValue, maxValue, step));
  }
  function decrementThumb(index, stepSize = 1) {
    let s = Math.max(stepSize, step);
    updateValue(index, $240e9101ba2842f5$export$cb6e0bb50bc19463(values[index] - s, minValue, maxValue, step));
  }
  return {
    values,
    defaultValues: props.defaultValue !== void 0 ? defaultValue : initialValues,
    getThumbValue: (index) => values[index],
    setThumbValue: updateValue,
    setThumbPercent,
    isThumbDragging: (index) => isDraggings[index],
    setThumbDragging: updateDragging,
    focusedThumb: focusedIndex,
    setFocusedThumb: setFocusedIndex,
    getThumbPercent: (index) => getValuePercent(values[index]),
    getValuePercent,
    getThumbValueLabel: (index) => getFormattedValue(values[index]),
    getFormattedValue,
    getThumbMinValue,
    getThumbMaxValue,
    getPercentValue,
    isThumbEditable,
    setThumbEditable,
    incrementThumb,
    decrementThumb,
    step,
    pageSize,
    orientation,
    isDisabled
  };
}
function $28f99e3e86e6ec45$var$replaceIndex(array, index, value) {
  if (array[index] === value) return array;
  return [
    ...array.slice(0, index),
    value,
    ...array.slice(index + 1)
  ];
}
function $28f99e3e86e6ec45$var$convertValue(value) {
  if (value == null) return void 0;
  return Array.isArray(value) ? value : [
    value
  ];
}
function $28f99e3e86e6ec45$var$createOnChange(value, defaultValue, onChange) {
  return (newValue) => {
    if (typeof value === "number" || typeof defaultValue === "number") onChange === null || onChange === void 0 ? void 0 : onChange(newValue[0]);
    else onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  };
}
function useSlider(originalProps) {
  var _a, _b, _c, _d;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, slider.variantKeys);
  const {
    ref,
    as,
    name,
    label,
    formatOptions,
    value: valueProp,
    maxValue = 100,
    minValue = 0,
    step = 1,
    showSteps = false,
    showTooltip = false,
    orientation = "horizontal",
    marks = [],
    startContent,
    endContent,
    fillOffset,
    className,
    classNames,
    renderThumb,
    renderLabel,
    renderValue,
    onChange,
    onChangeEnd,
    getValue,
    getTooltipValue,
    tooltipValueFormatOptions = formatOptions,
    tooltipProps: userTooltipProps = {},
    ...otherProps
  } = props;
  const isFixedValue = minValue === maxValue;
  if (isFixedValue) {
    warn("Min and max values should not be the same. This may cause unexpected behavior.");
  }
  const Component = as || "div";
  const shouldFilterDOMProps = typeof Component === "string";
  const disableAnimation = (_b = (_a = originalProps == null ? void 0 : originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const domRef = useDOMRef(ref);
  const trackRef = reactExports.useRef(null);
  const numberFormatter = $a916eb452884faea$export$b7a616150fdb9f44(formatOptions);
  const { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  const clampValue = reactExports.useCallback(
    (valueToClamp) => {
      return Math.min(Math.max(valueToClamp, minValue), maxValue);
    },
    [minValue, maxValue]
  );
  const validatedValue = reactExports.useMemo(() => {
    if (isFixedValue) return minValue;
    if (valueProp === void 0) return void 0;
    if (Array.isArray(valueProp)) {
      return valueProp.map(clampValue);
    }
    return clampValue(valueProp);
  }, [valueProp, clampValue, isFixedValue, minValue]);
  const state = $28f99e3e86e6ec45$export$e5fda3247f5d67f9({
    ...otherProps,
    value: validatedValue,
    isDisabled: (_c = originalProps == null ? void 0 : originalProps.isDisabled) != null ? _c : false,
    orientation,
    step,
    minValue,
    maxValue,
    numberFormatter,
    onChange,
    onChangeEnd
  });
  const tooltipProps = {
    offset: 5,
    delay: 0,
    size: "sm",
    showArrow: true,
    color: (originalProps == null ? void 0 : originalProps.color) ? originalProps == null ? void 0 : originalProps.color : (_d = slider.defaultVariants) == null ? void 0 : _d.color,
    isDisabled: originalProps.isDisabled,
    ...userTooltipProps
  };
  const { groupProps, trackProps, labelProps, outputProps } = $bcca50147b47f54d$export$56b2c08e277f365(
    originalProps,
    state,
    trackRef
  );
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: originalProps.isDisabled });
  const baseStyles = cn(classNames == null ? void 0 : classNames.base, className);
  const isVertical = orientation === "vertical";
  const hasMarks = (marks == null ? void 0 : marks.length) > 0;
  const hasSingleThumb = fillOffset === void 0 ? state.values.length === 1 : false;
  const slots = reactExports.useMemo(
    () => slider({
      ...variantProps,
      hasMarks,
      disableAnimation,
      hasSingleThumb,
      isVertical
    }),
    [objectToDeps(variantProps), isVertical, disableAnimation, hasSingleThumb, hasMarks]
  );
  const [startOffset, endOffset] = [
    state.values.length > 1 ? state.getThumbPercent(0) : fillOffset !== void 0 ? state.getValuePercent(fillOffset) : 0,
    state.getThumbPercent(state.values.length - 1)
  ].sort();
  const value = state.values.length === 1 ? numberFormatter.format(state.values[0]) : numberFormatter.formatRange(state.values[0], state.values[state.values.length - 1]);
  const steps = showSteps ? Math.floor((maxValue - minValue) / step) + 1 : 0;
  const getBaseProps = (props2 = {}) => {
    return {
      ref: domRef,
      "data-orientation": state.orientation,
      "data-slot": "base",
      "data-hover": isHovered,
      className: slots.base({ class: baseStyles }),
      ...mergeProps(
        groupProps,
        hoverProps,
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps
        }),
        filterDOMProps(props2)
      )
    };
  };
  const getLabelWrapperProps = (props2 = {}) => {
    return {
      className: slots.labelWrapper({ class: classNames == null ? void 0 : classNames.labelWrapper }),
      "data-slot": "labelWrapper",
      ...props2
    };
  };
  const getLabelProps = (props2 = {}) => {
    return {
      "data-slot": "label",
      className: slots.label({ class: classNames == null ? void 0 : classNames.label }),
      children: label,
      ...labelProps,
      ...props2
    };
  };
  const getValueProps = (props2 = {}) => {
    return {
      "data-slot": "value",
      className: slots.value({ class: classNames == null ? void 0 : classNames.value }),
      children: getValue && typeof getValue === "function" ? getValue(state.values) : value,
      ...outputProps,
      ...props2
    };
  };
  const getTrackProps = (props2 = {}) => {
    const fillWidth = (endOffset - startOffset) * 100;
    return {
      ref: trackRef,
      "data-slot": "track",
      "data-thumb-hidden": !!(originalProps == null ? void 0 : originalProps.hideThumb),
      "data-vertical": isVertical,
      ...hasSingleThumb ? {
        "data-fill-start": fillWidth > 0,
        "data-fill-end": fillWidth == 100
      } : {
        "data-fill-start": startOffset == 0,
        "data-fill-end": startOffset * 100 + fillWidth == 100
      },
      className: slots.track({ class: classNames == null ? void 0 : classNames.track }),
      ...trackProps,
      ...props2
    };
  };
  const getTrackWrapperProps = (props2 = {}) => {
    return {
      "data-slot": "track-wrapper",
      className: slots.trackWrapper({ class: classNames == null ? void 0 : classNames.trackWrapper }),
      ...props2
    };
  };
  const getFillerProps = (props2 = {}) => {
    return {
      "data-slot": "filler",
      className: slots.filler({ class: classNames == null ? void 0 : classNames.filler }),
      ...props2,
      style: {
        ...props2.style,
        [isVertical ? "bottom" : direction === "rtl" ? "right" : "left"]: `${startOffset * 100}%`,
        ...isVertical ? {
          height: `${(endOffset - startOffset) * 100}%`
        } : {
          width: `${(endOffset - startOffset) * 100}%`
        }
      }
    };
  };
  const getThumbProps = (index) => {
    return {
      name,
      index,
      state,
      trackRef,
      orientation,
      isVertical,
      tooltipProps,
      getTooltipValue,
      showTooltip,
      renderThumb,
      formatOptions: tooltipValueFormatOptions,
      className: slots.thumb({ class: classNames == null ? void 0 : classNames.thumb })
    };
  };
  const getStepProps = (index) => {
    const percent = state.getValuePercent(index * step + minValue);
    return {
      className: slots.step({ class: classNames == null ? void 0 : classNames.step }),
      "data-slot": "step",
      "data-in-range": percent <= endOffset && percent >= startOffset,
      style: {
        [isVertical ? "bottom" : direction === "rtl" ? "right" : "left"]: `${percent * 100}%`
      }
    };
  };
  const getMarkProps = (mark) => {
    const percent = state.getValuePercent(mark.value);
    return {
      className: slots.mark({ class: classNames == null ? void 0 : classNames.mark }),
      "data-slot": "mark",
      "data-in-range": percent <= endOffset && percent >= startOffset,
      style: {
        [isVertical ? "bottom" : direction === "rtl" ? "right" : "left"]: `${percent * 100}%`
      },
      // avoid `onDownTrack` is being called since when you click the mark,
      // `onDownTrack` will calculate the percent based on the position you click
      // the calculated value will be set instead of the actual value defined in `marks`
      onMouseDown: (e) => e.stopPropagation(),
      onPointerDown: (e) => e.stopPropagation(),
      onClick: (e) => {
        e.stopPropagation();
        if (isFixedValue) return;
        if (state.values.length === 1) {
          state.setThumbPercent(0, percent);
        } else {
          const leftThumbVal = state.values[0];
          const rightThumbVal = state.values[1];
          if (mark.value < leftThumbVal) {
            state.setThumbPercent(0, percent);
          } else if (mark.value > rightThumbVal) {
            state.setThumbPercent(1, percent);
          } else if (Math.abs(mark.value - leftThumbVal) < Math.abs(mark.value - rightThumbVal)) {
            state.setThumbPercent(0, percent);
          } else {
            state.setThumbPercent(1, percent);
          }
        }
      }
    };
  };
  const getStartContentProps = (props2 = {}) => ({
    "data-slot": "startContent",
    className: slots.startContent({ class: classNames == null ? void 0 : classNames.startContent }),
    ...props2
  });
  const getEndContentProps = (props2 = {}) => ({
    "data-slot": "endContent",
    className: slots.endContent({ class: classNames == null ? void 0 : classNames.endContent }),
    ...props2
  });
  return {
    Component,
    state,
    value,
    domRef,
    label,
    steps,
    marks,
    startContent,
    endContent,
    getStepProps,
    getBaseProps,
    getValue,
    renderLabel,
    renderValue,
    getTrackWrapperProps,
    getLabelWrapperProps,
    getLabelProps,
    getValueProps,
    getTrackProps,
    getFillerProps,
    getThumbProps,
    getMarkProps,
    getStartContentProps,
    getEndContentProps
  };
}
var Slider = forwardRef((props, ref) => {
  const {
    Component,
    state,
    label,
    steps,
    marks,
    startContent,
    endContent,
    getStepProps,
    getBaseProps,
    renderValue,
    renderLabel,
    getTrackWrapperProps,
    getLabelWrapperProps,
    getLabelProps,
    getValueProps,
    getTrackProps,
    getFillerProps,
    getThumbProps,
    getMarkProps,
    getStartContentProps,
    getEndContentProps
  } = useSlider({ ...props, ref });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { ...getBaseProps(), children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getLabelWrapperProps(), children: [
      renderFn({
        Component: "label",
        props: getLabelProps(),
        renderCustom: renderLabel
      }),
      renderFn({
        Component: "output",
        props: getValueProps(),
        renderCustom: renderValue
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getTrackWrapperProps(), children: [
      startContent && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...getStartContentProps(), children: startContent }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getTrackProps(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...getFillerProps() }),
        Number.isFinite(steps) && Array.from({ length: steps }, (_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...getStepProps(index) }, index)),
        state.values.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(slider_thumb_default, { ...getThumbProps(index) }, index)),
        (marks == null ? void 0 : marks.length) > 0 && marks.map((mark, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...getMarkProps(mark), children: mark.label }, index))
      ] }),
      endContent && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...getEndContentProps(), children: endContent })
    ] })
  ] });
});
Slider.displayName = "HeroUI.Slider";
var slider_default = Slider;
function SettingsApp() {
  const [settings, setSettings] = reactExports.useState(null);
  const [models, setModels] = reactExports.useState([]);
  reactExports.useEffect(() => {
    void window.api.settings.get().then(setSettings);
    void window.api.models.list().then(setModels);
    return window.api.settings.onChanged(setSettings);
  }, []);
  const save = (patch) => {
    void window.api.settings.set(patch).then(setSettings);
  };
  if (!settings) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "h-full overflow-auto bg-background p-5 text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(card_default, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(card_header_default, { className: "flex-col items-start gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "Settings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-small text-default-500", children: "Defaults apply to the next image you process." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(divider_default, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(card_body_default, { className: "gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        select_default,
        {
          label: "Default model",
          variant: "bordered",
          selectedKeys: [settings.defaultModel],
          onChange: (event) => save({ defaultModel: event.target.value }),
          children: models.map((model) => /* @__PURE__ */ jsxRuntimeExports.jsx(listbox_item_base_default, { children: model.label }, model.id))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          select_default,
          {
            label: "Output format",
            variant: "bordered",
            selectedKeys: [settings.outputFormat],
            onChange: (event) => save({ outputFormat: event.target.value }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(listbox_item_base_default, { children: "PNG" }, "png"),
              /* @__PURE__ */ jsxRuntimeExports.jsx(listbox_item_base_default, { children: "WebP" }, "webp"),
              /* @__PURE__ */ jsxRuntimeExports.jsx(listbox_item_base_default, { children: "JPG" }, "jpg")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          input_default,
          {
            label: "Quality",
            variant: "bordered",
            type: "number",
            min: 1,
            max: 100,
            value: String(settings.outputQuality),
            onChange: (event) => save({ outputQuality: Number(event.target.value) })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          select_default,
          {
            label: "Execution",
            variant: "bordered",
            selectedKeys: [settings.executionProvider],
            onChange: (event) => save({ executionProvider: event.target.value }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(listbox_item_base_default, { children: "CPU" }, "cpu"),
              /* @__PURE__ */ jsxRuntimeExports.jsx(listbox_item_base_default, { children: "CoreML" }, "coreml")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          input_default,
          {
            label: "Max upload MB",
            variant: "bordered",
            type: "number",
            min: 1,
            value: String(settings.maxUploadSizeMB),
            onChange: (event) => save({ maxUploadSizeMB: Number(event.target.value) })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        input_default,
        {
          label: "Solid background",
          variant: "bordered",
          type: "color",
          value: settings.backgroundColor,
          onChange: (event) => save({ backgroundColor: event.target.value })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        switch_default,
        {
          isSelected: settings.transparentBackground,
          onValueChange: (transparentBackground) => save({ transparentBackground }),
          children: "Transparent output when supported"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        switch_default,
        {
          isSelected: settings.alphaMatting.enabled,
          onValueChange: (enabled) => save({ alphaMatting: { ...settings.alphaMatting, enabled } }),
          children: "Alpha matting"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        slider_default,
        {
          label: "Foreground threshold",
          minValue: 1,
          maxValue: 255,
          value: settings.alphaMatting.foregroundThreshold,
          onChange: (value) => save({ alphaMatting: { ...settings.alphaMatting, foregroundThreshold: Number(value) } })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        slider_default,
        {
          label: "Background threshold",
          minValue: 0,
          maxValue: 254,
          value: settings.alphaMatting.backgroundThreshold,
          onChange: (value) => save({ alphaMatting: { ...settings.alphaMatting, backgroundThreshold: Number(value) } })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        slider_default,
        {
          label: "Erode size",
          minValue: 0,
          maxValue: 8,
          value: settings.alphaMatting.erodeSize,
          onChange: (value) => save({ alphaMatting: { ...settings.alphaMatting, erodeSize: Number(value) } })
        }
      )
    ] })
  ] }) });
}
clientExports.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Providers, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsApp, {}) }) })
);
