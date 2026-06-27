import { i as $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7, r as reactExports, E as $1dfb119a85e764e5$export$cc77c4ff7e8673c5, F as tv, G as createContext2, u as useProviderContext, a as useDOMRef, l as $f7dceffc5ad7768b$export$4e328f61c538687f, H as button, I as useRipple, J as useAriaButton, t as chain, s as $6179b936705e76d3$export$ae780daf29e6d456, p as mergeProps, v as filterDOMProps, w as dataAttr, f as forwardRef, j as jsxRuntimeExports, K as ripple_default, L as spinner_default, m as mapPropsVariants, M as chip, n as cn, o as objectToDeps, N as $f6c31cce2adf654f$export$45712eceda6fad21, O as CloseFilledIcon, c as $8e9d2fae0ecb9001$export$457c3d6518dd4c6f, Q as $0beb20c9744a2065$export$8467354a121f1b9f, g as $bbaa08b3cd72f041$export$9d1611c77c2fe928, R as $240e9101ba2842f5$export$7d15b64cf5a3a4c4, S as clampPercentage } from "./Providers-WL0Y5vQ8.js";
function $bd90acf18e792be6$export$b7a616150fdb9f44(options = {}) {
  let { locale } = $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7();
  return reactExports.useMemo(() => new $1dfb119a85e764e5$export$cc77c4ff7e8673c5(locale, options), [
    locale,
    options
  ]);
}
var progress = tv(
  {
    slots: {
      base: "flex flex-col gap-2 w-full",
      label: "",
      labelWrapper: "flex justify-between",
      value: "",
      track: "z-0 relative bg-default-300/50 overflow-hidden rtl:rotate-180",
      indicator: "h-full"
    },
    variants: {
      color: {
        default: {
          indicator: "bg-default-400"
        },
        primary: {
          indicator: "bg-primary"
        },
        secondary: {
          indicator: "bg-secondary"
        },
        success: {
          indicator: "bg-success"
        },
        warning: {
          indicator: "bg-warning"
        },
        danger: {
          indicator: "bg-danger"
        }
      },
      size: {
        sm: {
          label: "text-small",
          value: "text-small",
          track: "h-1"
        },
        md: {
          label: "text-medium",
          value: "text-medium",
          track: "h-3"
        },
        lg: {
          label: "text-large",
          value: "text-large",
          track: "h-5"
        }
      },
      radius: {
        none: {
          track: "rounded-none",
          indicator: "rounded-none"
        },
        sm: {
          track: "rounded-small",
          indicator: "rounded-small"
        },
        md: {
          track: "rounded-medium",
          indicator: "rounded-medium"
        },
        lg: {
          track: "rounded-large",
          indicator: "rounded-large"
        },
        full: {
          track: "rounded-full",
          indicator: "rounded-full"
        }
      },
      isStriped: {
        true: {
          indicator: "bg-stripe-gradient-default bg-stripe-size"
        }
      },
      isIndeterminate: {
        true: {
          indicator: ["absolute", "w-full", "origin-left", "animate-indeterminate-bar"]
        }
      },
      isDisabled: {
        true: {
          base: "opacity-disabled cursor-not-allowed"
        }
      },
      disableAnimation: {
        true: {},
        false: {
          indicator: "transition-transform !duration-500"
        }
      }
    },
    defaultVariants: {
      color: "primary",
      size: "md",
      radius: "full",
      isStriped: false,
      isIndeterminate: false,
      isDisabled: false
    },
    compoundVariants: [
      // disableAnimation && !isIndeterminate
      {
        disableAnimation: true,
        isIndeterminate: false,
        class: {
          indicator: "!transition-none motion-reduce:transition-none"
        }
      },
      {
        color: "primary",
        isStriped: true,
        class: {
          indicator: "bg-stripe-gradient-primary bg-stripe-size"
        }
      },
      {
        color: "secondary",
        isStriped: true,
        class: {
          indicator: "bg-stripe-gradient-secondary bg-stripe-size"
        }
      },
      {
        color: "success",
        isStriped: true,
        class: {
          indicator: "bg-stripe-gradient-success bg-stripe-size"
        }
      },
      {
        color: "warning",
        isStriped: true,
        class: {
          indicator: "bg-stripe-gradient-warning bg-stripe-size"
        }
      },
      {
        color: "danger",
        isStriped: true,
        class: {
          indicator: "bg-stripe-gradient-danger bg-stripe-size"
        }
      }
    ]
  },
  {
    twMerge: true
  }
);
tv({
  slots: {
    base: "flex flex-col justify-center gap-1 max-w-fit items-center",
    label: "",
    svgWrapper: "relative block",
    svg: "z-0 relative overflow-hidden",
    track: "h-full stroke-default-300/50",
    indicator: "h-full stroke-current",
    value: "absolute font-normal inset-0 flex items-center justify-center"
  },
  variants: {
    color: {
      default: {
        svg: "text-default-400"
      },
      primary: {
        svg: "text-primary"
      },
      secondary: {
        svg: "text-secondary"
      },
      success: {
        svg: "text-success"
      },
      warning: {
        svg: "text-warning"
      },
      danger: {
        svg: "text-danger"
      }
    },
    size: {
      sm: {
        svg: "w-8 h-8",
        label: "text-small",
        value: "text-[0.5rem]"
      },
      md: {
        svg: "w-10 h-10",
        label: "text-small",
        value: "text-[0.55rem]"
      },
      lg: {
        svg: "w-12 h-12",
        label: "text-medium",
        value: "text-[0.6rem]"
      }
    },
    isIndeterminate: {
      true: {
        svg: "animate-spinner-ease-spin"
      }
    },
    isDisabled: {
      true: {
        base: "opacity-disabled cursor-not-allowed"
      }
    },
    disableAnimation: {
      true: {},
      false: {
        indicator: "transition-all !duration-500"
      }
    }
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    isDisabled: false
  },
  compoundVariants: [
    // disableAnimation && !isIndeterminate
    {
      disableAnimation: true,
      isIndeterminate: false,
      class: {
        svg: "!transition-none motion-reduce:transition-none"
      }
    }
  ]
});
var [ButtonGroupProvider, useButtonGroupContext] = createContext2({
  name: "ButtonGroupContext",
  strict: false
});
function useButton(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const groupContext = useButtonGroupContext();
  const globalContext = useProviderContext();
  const isInGroup = !!groupContext;
  const {
    ref,
    as,
    children,
    startContent: startContentProp,
    endContent: endContentProp,
    autoFocus,
    className,
    spinner,
    isLoading = false,
    disableRipple: disableRippleProp,
    fullWidth = (_a = groupContext == null ? void 0 : groupContext.fullWidth) != null ? _a : false,
    radius = groupContext == null ? void 0 : groupContext.radius,
    size = (_b = groupContext == null ? void 0 : groupContext.size) != null ? _b : "md",
    color = (_c = groupContext == null ? void 0 : groupContext.color) != null ? _c : "default",
    variant = (_d = groupContext == null ? void 0 : groupContext.variant) != null ? _d : "solid",
    disableAnimation = (_f = (_e = groupContext == null ? void 0 : groupContext.disableAnimation) != null ? _e : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _f : false,
    isDisabled: isDisabledProp = (_g = groupContext == null ? void 0 : groupContext.isDisabled) != null ? _g : false,
    isIconOnly = (_h = groupContext == null ? void 0 : groupContext.isIconOnly) != null ? _h : false,
    spinnerPlacement = "start",
    onPress,
    onClick,
    ...otherProps
  } = props;
  const Component = as || "button";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const disableRipple = (_i = disableRippleProp != null ? disableRippleProp : globalContext == null ? void 0 : globalContext.disableRipple) != null ? _i : disableAnimation;
  const { isFocusVisible, isFocused, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f({
    autoFocus
  });
  const isDisabled = isDisabledProp || isLoading;
  const styles = reactExports.useMemo(
    () => button({
      size,
      color,
      variant,
      radius,
      fullWidth,
      isDisabled,
      isInGroup,
      disableAnimation,
      isIconOnly,
      className
    }),
    [
      size,
      color,
      variant,
      radius,
      fullWidth,
      isDisabled,
      isInGroup,
      isIconOnly,
      disableAnimation,
      className
    ]
  );
  const { onPress: onRipplePressHandler, onClear: onClearRipple, ripples } = useRipple();
  const handlePress = reactExports.useCallback(
    (e) => {
      if (disableRipple || isDisabled || disableAnimation) return;
      domRef.current && onRipplePressHandler(e);
    },
    [disableRipple, isDisabled, disableAnimation, domRef, onRipplePressHandler]
  );
  const { buttonProps: ariaButtonProps, isPressed } = useAriaButton(
    {
      elementType: as,
      isDisabled,
      onPress: chain(onPress, handlePress),
      onClick,
      ...otherProps
    },
    domRef
  );
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled });
  const getButtonProps = reactExports.useCallback(
    (props2 = {}) => ({
      "data-disabled": dataAttr(isDisabled),
      "data-focus": dataAttr(isFocused),
      "data-pressed": dataAttr(isPressed),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-hover": dataAttr(isHovered),
      "data-loading": dataAttr(isLoading),
      ...mergeProps(
        ariaButtonProps,
        focusProps,
        hoverProps,
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps
        }),
        filterDOMProps(props2)
      ),
      className: styles
    }),
    [
      isLoading,
      isDisabled,
      isFocused,
      isPressed,
      shouldFilterDOMProps,
      isFocusVisible,
      isHovered,
      ariaButtonProps,
      focusProps,
      hoverProps,
      otherProps,
      styles
    ]
  );
  const getIconClone = (icon) => reactExports.isValidElement(icon) ? reactExports.cloneElement(icon, {
    // @ts-ignore
    "aria-hidden": true,
    focusable: false
  }) : null;
  const startContent = getIconClone(startContentProp);
  const endContent = getIconClone(endContentProp);
  const spinnerSize = reactExports.useMemo(() => {
    const buttonSpinnerSizeMap = {
      sm: "sm",
      md: "sm",
      lg: "md"
    };
    return buttonSpinnerSizeMap[size];
  }, [size]);
  const getRippleProps = reactExports.useCallback(
    () => ({ ripples, onClear: onClearRipple }),
    [ripples, onClearRipple]
  );
  return {
    Component,
    children,
    domRef,
    spinner,
    styles,
    startContent,
    endContent,
    isLoading,
    spinnerPlacement,
    spinnerSize,
    disableRipple,
    getButtonProps,
    getRippleProps,
    isIconOnly
  };
}
var Button = forwardRef((props, ref) => {
  const {
    Component,
    domRef,
    children,
    spinnerSize,
    spinner = /* @__PURE__ */ jsxRuntimeExports.jsx(spinner_default, { color: "current", size: spinnerSize }),
    spinnerPlacement,
    startContent,
    endContent,
    isLoading,
    disableRipple,
    getButtonProps,
    getRippleProps,
    isIconOnly
  } = useButton({ ...props, ref });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { ref: domRef, ...getButtonProps(), children: [
    startContent,
    isLoading && spinnerPlacement === "start" && spinner,
    isLoading && isIconOnly ? null : children,
    isLoading && spinnerPlacement === "end" && spinner,
    endContent,
    !disableRipple && /* @__PURE__ */ jsxRuntimeExports.jsx(ripple_default, { ...getRippleProps() })
  ] });
});
Button.displayName = "HeroUI.Button";
var button_default = Button;
function useChip(originalProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, chip.variantKeys);
  const {
    ref,
    as,
    children,
    avatar,
    startContent,
    endContent,
    onClose,
    classNames,
    className,
    ...otherProps
  } = props;
  const Component = as || "div";
  const domRef = useDOMRef(ref);
  const baseStyles = cn(classNames == null ? void 0 : classNames.base, className);
  const isCloseable = !!onClose;
  const isDotVariant = originalProps.variant === "dot";
  const { focusProps: closeFocusProps, isFocusVisible: isCloseButtonFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const isOneChar = reactExports.useMemo(
    () => typeof children === "string" && (children == null ? void 0 : children.length) === 1,
    [children]
  );
  const hasStartContent = reactExports.useMemo(() => !!avatar || !!startContent, [avatar, startContent]);
  const hasEndContent = reactExports.useMemo(() => !!endContent || isCloseable, [endContent, isCloseable]);
  const slots = reactExports.useMemo(
    () => chip({
      ...variantProps,
      hasStartContent,
      hasEndContent,
      isOneChar,
      isCloseable,
      isCloseButtonFocusVisible
    }),
    [
      objectToDeps(variantProps),
      isCloseButtonFocusVisible,
      hasStartContent,
      hasEndContent,
      isOneChar,
      isCloseable
    ]
  );
  const { pressProps: closePressProps } = $f6c31cce2adf654f$export$45712eceda6fad21({
    isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled),
    onPress: onClose
  });
  const getChipProps = () => {
    return {
      ref: domRef,
      className: slots.base({ class: baseStyles }),
      ...otherProps
    };
  };
  const getCloseButtonProps = () => {
    return {
      role: "button",
      tabIndex: 0,
      className: slots.closeButton({ class: classNames == null ? void 0 : classNames.closeButton }),
      "aria-label": "close chip",
      ...mergeProps(closePressProps, closeFocusProps)
    };
  };
  const getAvatarClone = (avatar2) => {
    if (!reactExports.isValidElement(avatar2)) return null;
    return reactExports.cloneElement(avatar2, {
      // @ts-ignore
      className: slots.avatar({ class: classNames == null ? void 0 : classNames.avatar })
    });
  };
  const getContentClone = (content) => reactExports.isValidElement(content) ? reactExports.cloneElement(content, {
    // @ts-ignore
    className: cn("max-h-[80%]", content.props.className)
  }) : null;
  return {
    Component,
    children,
    slots,
    classNames,
    isDot: isDotVariant,
    isCloseable,
    startContent: getAvatarClone(avatar) || getContentClone(startContent),
    endContent: getContentClone(endContent),
    getCloseButtonProps,
    getChipProps
  };
}
var Chip = forwardRef((props, ref) => {
  const {
    Component,
    children,
    slots,
    classNames,
    isDot,
    isCloseable,
    startContent,
    endContent,
    getCloseButtonProps,
    getChipProps
  } = useChip({
    ...props,
    ref
  });
  const start = reactExports.useMemo(() => {
    if (isDot && !startContent) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: slots.dot({ class: classNames == null ? void 0 : classNames.dot }) });
    }
    return startContent;
  }, [slots, startContent, isDot]);
  const end = reactExports.useMemo(() => {
    if (isCloseable) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getCloseButtonProps(), children: endContent || /* @__PURE__ */ jsxRuntimeExports.jsx(CloseFilledIcon, {}) });
    }
    return endContent;
  }, [endContent, isCloseable, getCloseButtonProps]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { ...getChipProps(), children: [
    start,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: slots.content({ class: classNames == null ? void 0 : classNames.content }), children }),
    end
  ] });
});
Chip.displayName = "HeroUI.Chip";
var chip_default = Chip;
function useIsMounted(props = {}) {
  const { rerender = false, delay = 0 } = props;
  const isMountedRef = reactExports.useRef(false);
  const [isMounted, setIsMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    isMountedRef.current = true;
    let timer = null;
    if (rerender) {
      if (delay > 0) {
        timer = setTimeout(() => {
          setIsMounted(true);
        }, delay);
      } else {
        setIsMounted(true);
      }
    }
    return () => {
      isMountedRef.current = false;
      if (rerender) {
        setIsMounted(false);
      }
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [rerender]);
  return [reactExports.useCallback(() => isMountedRef.current, []), isMounted];
}
function $204d9ebcedfb8806$export$ed5abd763a836edc(props) {
  let { value = 0, minValue = 0, maxValue = 100, valueLabel, isIndeterminate, formatOptions = {
    style: "percent"
  } } = props;
  let domProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, {
    labelable: true
  });
  let { labelProps, fieldProps } = $0beb20c9744a2065$export$8467354a121f1b9f({
    ...props,
    // Progress bar is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span"
  });
  value = $240e9101ba2842f5$export$7d15b64cf5a3a4c4(value, minValue, maxValue);
  let percentage = (value - minValue) / (maxValue - minValue);
  let formatter = $bd90acf18e792be6$export$b7a616150fdb9f44(formatOptions);
  if (!isIndeterminate && !valueLabel) {
    let valueToFormat = formatOptions.style === "percent" ? percentage : value;
    valueLabel = formatter.format(valueToFormat);
  }
  return {
    progressBarProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(domProps, {
      ...fieldProps,
      "aria-valuenow": isIndeterminate ? void 0 : value,
      "aria-valuemin": minValue,
      "aria-valuemax": maxValue,
      "aria-valuetext": isIndeterminate ? void 0 : valueLabel,
      role: "progressbar"
    }),
    labelProps
  };
}
function useProgress(originalProps) {
  var _a, _b;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, progress.variantKeys);
  const {
    ref,
    as,
    id,
    className,
    classNames,
    label,
    valueLabel,
    value = 0,
    minValue = 0,
    maxValue = 100,
    showValueLabel = false,
    formatOptions = {
      style: "percent"
    },
    ...otherProps
  } = props;
  const Component = as || "div";
  const domRef = useDOMRef(ref);
  const baseStyles = cn(classNames == null ? void 0 : classNames.base, className);
  const [, isMounted] = useIsMounted({
    rerender: true,
    delay: 100
  });
  const isIndeterminate = originalProps.isIndeterminate;
  const disableAnimation = (_b = (_a = originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const { progressBarProps, labelProps } = $204d9ebcedfb8806$export$ed5abd763a836edc({
    id,
    label,
    value,
    minValue,
    maxValue,
    valueLabel,
    formatOptions,
    isIndeterminate,
    "aria-labelledby": originalProps["aria-labelledby"],
    "aria-label": originalProps["aria-label"]
  });
  const slots = reactExports.useMemo(
    () => progress({
      ...variantProps,
      disableAnimation
    }),
    [objectToDeps(variantProps), disableAnimation]
  );
  const selfMounted = disableAnimation ? true : isMounted;
  const percentage = reactExports.useMemo(
    () => isIndeterminate || !selfMounted ? void 0 : clampPercentage((value - minValue) / (maxValue - minValue) * 100),
    [selfMounted, isIndeterminate, value, minValue, maxValue]
  );
  const getProgressBarProps = reactExports.useCallback(
    (props2 = {}) => ({
      ref: domRef,
      "data-indeterminate": dataAttr(isIndeterminate),
      "data-disabled": dataAttr(originalProps.isDisabled),
      className: slots.base({ class: baseStyles }),
      ...mergeProps(progressBarProps, otherProps, props2)
    }),
    [
      domRef,
      slots,
      isIndeterminate,
      originalProps.isDisabled,
      baseStyles,
      progressBarProps,
      otherProps
    ]
  );
  const getLabelProps = reactExports.useCallback(
    (props2 = {}) => ({
      className: slots.label({ class: classNames == null ? void 0 : classNames.label }),
      ...mergeProps(labelProps, props2)
    }),
    [slots, classNames, labelProps]
  );
  return {
    Component,
    domRef,
    slots,
    classNames,
    label,
    percentage,
    showValueLabel,
    getProgressBarProps,
    getLabelProps
  };
}
var Progress = forwardRef((props, ref) => {
  const {
    Component,
    slots,
    classNames,
    label,
    percentage,
    showValueLabel,
    getProgressBarProps,
    getLabelProps
  } = useProgress({ ...props, ref });
  const progressBarProps = getProgressBarProps();
  const shouldShowLabelWrapper = label || showValueLabel;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { ...progressBarProps, children: [
    shouldShowLabelWrapper ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: slots.labelWrapper({ class: classNames == null ? void 0 : classNames.labelWrapper }), children: [
      label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getLabelProps(), children: label }),
      showValueLabel && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: slots.value({ class: classNames == null ? void 0 : classNames.value }), children: progressBarProps["aria-valuetext"] })
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: slots.track({ class: classNames == null ? void 0 : classNames.track }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: slots.indicator({ class: classNames == null ? void 0 : classNames.indicator }),
        style: {
          transform: `translateX(-${100 - (percentage || 0)}%)`
        }
      }
    ) })
  ] });
});
Progress.displayName = "HeroUI.Progress";
var progress_default = Progress;
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
export {
  ButtonGroupProvider as B,
  chip_default as a,
  button_default as b,
  createLucideIcon as c,
  progress_default as p
};
