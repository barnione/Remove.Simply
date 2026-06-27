import { r as reactExports, $ as $c4867b2f328c2698$export$e5c5a5f917a5871c, u as useProviderContext, m as mapPropsVariants, b as buttonGroup, a as useDOMRef, o as objectToDeps, f as forwardRef, j as jsxRuntimeExports, c as $8e9d2fae0ecb9001$export$457c3d6518dd4c6f, d as $caaf0dd3060ed57c$export$7e924b3091a3bd18, e as $f645667febf57a63$export$4c014de7c8940b4c, g as $bbaa08b3cd72f041$export$9d1611c77c2fe928, h as $e8ac3c3f5d4bae7f$export$d6875122194c7b44, i as $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7, k as $390e54f620492c70$export$f680877a34711e37, l as $f7dceffc5ad7768b$export$4e328f61c538687f, n as cn, p as mergeProps, q as getInertValue, s as $6179b936705e76d3$export$ae780daf29e6d456, t as chain, v as filterDOMProps, w as dataAttr, x as tabs, y as addToast, z as card_default, A as card_body_default, B as card_header_default, C as divider_default, D as clientExports, P as Providers } from "./Providers-WL0Y5vQ8.js";
import { B as ButtonGroupProvider, c as createLucideIcon, b as button_default, a as chip_default, p as progress_default } from "./createLucideIcon-sK881ko4.js";
import { $ as $9bf71ea28793e738$export$2d6ec8fc375ceafa, a as $f6ba6936bfd098a0$export$ecf600387e221c37, b as $d667c2af82d35a98$export$d6daf82dcd84e87c, m as mergeRefs, c as $60f19cefd567a3e4$export$253fe78d46329472, d as $d03379b88399b8c5$export$6cd28814d92fa9c9, e as $4a07ac835f260f78$export$6c8a5aaad13c9852, f as $3e6197669829fe11$export$40bfa8c7b0832715, g as $c1d7fb2ec91bae71$export$6d08773d2e66f8f2, s as select_default, l as listbox_item_base_default, h as switch_default } from "./chunk-BJWIL32D-JdWHMGB3.js";
function $83013635b024ae3d$export$eac1895992b9f3d6(ref, options) {
  let isDisabled = options === null || options === void 0 ? void 0 : options.isDisabled;
  let [hasTabbableChild, setHasTabbableChild] = reactExports.useState(false);
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    if ((ref === null || ref === void 0 ? void 0 : ref.current) && !isDisabled) {
      let update = () => {
        if (ref.current) {
          let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(ref.current, {
            tabbable: true
          });
          setHasTabbableChild(!!walker.nextNode());
        }
      };
      update();
      let observer = new MutationObserver(update);
      observer.observe(ref.current, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: [
          "tabIndex",
          "disabled"
        ]
      });
      return () => {
        observer.disconnect();
      };
    }
  });
  return isDisabled ? false : hasTabbableChild;
}
function useButtonGroup(originalProps) {
  var _a, _b;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, buttonGroup.variantKeys);
  const {
    ref,
    as,
    children,
    color = "default",
    size = "md",
    variant = "solid",
    radius,
    isDisabled = false,
    isIconOnly = false,
    disableRipple = (_a = globalContext == null ? void 0 : globalContext.disableRipple) != null ? _a : false,
    disableAnimation = (_b = globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false,
    className,
    ...otherProps
  } = props;
  const Component = as || "div";
  const domRef = useDOMRef(ref);
  const classNames = reactExports.useMemo(
    () => buttonGroup({
      ...variantProps,
      className
    }),
    [objectToDeps(variantProps), className]
  );
  const context = reactExports.useMemo(
    () => ({
      size,
      color,
      variant,
      radius,
      isIconOnly,
      isDisabled,
      disableAnimation,
      disableRipple,
      fullWidth: !!(originalProps == null ? void 0 : originalProps.fullWidth)
    }),
    [
      size,
      color,
      variant,
      radius,
      isDisabled,
      isIconOnly,
      disableAnimation,
      disableRipple,
      originalProps == null ? void 0 : originalProps.fullWidth
    ]
  );
  const getButtonGroupProps = reactExports.useCallback(
    () => ({
      role: "group",
      ...otherProps
    }),
    [otherProps]
  );
  return {
    Component,
    children,
    domRef,
    context,
    classNames,
    getButtonGroupProps
  };
}
var ButtonGroup = forwardRef((props, ref) => {
  const { Component, domRef, context, children, classNames, getButtonGroupProps } = useButtonGroup({
    ...props,
    ref
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonGroupProvider, { value: context, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ref: domRef, className: classNames, ...getButtonGroupProps(), children }) });
});
ButtonGroup.displayName = "HeroUI.ButtonGroup";
var button_group_default = ButtonGroup;
const t$1 = (t2) => "object" == typeof t2 && null != t2 && 1 === t2.nodeType, e = (t2, e2) => (!e2 || "hidden" !== t2) && ("visible" !== t2 && "clip" !== t2), n = (t2, n2) => {
  if (t2.clientHeight < t2.scrollHeight || t2.clientWidth < t2.scrollWidth) {
    const o2 = getComputedStyle(t2, null);
    return e(o2.overflowY, n2) || e(o2.overflowX, n2) || ((t3) => {
      const e2 = ((t4) => {
        if (!t4.ownerDocument || !t4.ownerDocument.defaultView) return null;
        try {
          return t4.ownerDocument.defaultView.frameElement;
        } catch (t5) {
          return null;
        }
      })(t3);
      return !!e2 && (e2.clientHeight < t3.scrollHeight || e2.clientWidth < t3.scrollWidth);
    })(t2);
  }
  return false;
}, o$1 = (t2, e2, n2, o2, l2, r2, i, s) => r2 < t2 && i > e2 || r2 > t2 && i < e2 ? 0 : r2 <= t2 && s <= n2 || i >= e2 && s >= n2 ? r2 - t2 - o2 : i > e2 && s < n2 || r2 < t2 && s > n2 ? i - e2 + l2 : 0, l = (t2) => {
  const e2 = t2.parentElement;
  return null == e2 ? t2.getRootNode().host || null : e2;
}, r = (e2, r2) => {
  var i, s, d, h;
  if ("undefined" == typeof document) return [];
  const { scrollMode: c, block: f, inline: u, boundary: a, skipOverflowHiddenElements: g } = r2, p = "function" == typeof a ? a : (t2) => t2 !== a;
  if (!t$1(e2)) throw new TypeError("Invalid target");
  const m = document.scrollingElement || document.documentElement, w = [];
  let W = e2;
  for (; t$1(W) && p(W); ) {
    if (W = l(W), W === m) {
      w.push(W);
      break;
    }
    null != W && W === document.body && n(W) && !n(document.documentElement) || null != W && n(W, g) && w.push(W);
  }
  const b = null != (s = null == (i = window.visualViewport) ? void 0 : i.width) ? s : innerWidth, H = null != (h = null == (d = window.visualViewport) ? void 0 : d.height) ? h : innerHeight, { scrollX: y, scrollY: M } = window, { height: v, width: E, top: x, right: C, bottom: I, left: R } = e2.getBoundingClientRect(), { top: T, right: B, bottom: F, left: V } = ((t2) => {
    const e3 = window.getComputedStyle(t2);
    return { top: parseFloat(e3.scrollMarginTop) || 0, right: parseFloat(e3.scrollMarginRight) || 0, bottom: parseFloat(e3.scrollMarginBottom) || 0, left: parseFloat(e3.scrollMarginLeft) || 0 };
  })(e2);
  let k = "start" === f || "nearest" === f ? x - T : "end" === f ? I + F : x + v / 2 - T + F, D = "center" === u ? R + E / 2 - V + B : "end" === u ? C + B : R - V;
  const L = [];
  for (let t2 = 0; t2 < w.length; t2++) {
    const e3 = w[t2], { height: l2, width: r3, top: i2, right: s2, bottom: d2, left: h2 } = e3.getBoundingClientRect();
    if ("if-needed" === c && x >= 0 && R >= 0 && I <= H && C <= b && (e3 === m && !n(e3) || x >= i2 && I <= d2 && R >= h2 && C <= s2)) return L;
    const a2 = getComputedStyle(e3), g2 = parseInt(a2.borderLeftWidth, 10), p2 = parseInt(a2.borderTopWidth, 10), W2 = parseInt(a2.borderRightWidth, 10), T2 = parseInt(a2.borderBottomWidth, 10);
    let B2 = 0, F2 = 0;
    const V2 = "offsetWidth" in e3 ? e3.offsetWidth - e3.clientWidth - g2 - W2 : 0, S = "offsetHeight" in e3 ? e3.offsetHeight - e3.clientHeight - p2 - T2 : 0, X = "offsetWidth" in e3 ? 0 === e3.offsetWidth ? 0 : r3 / e3.offsetWidth : 0, Y = "offsetHeight" in e3 ? 0 === e3.offsetHeight ? 0 : l2 / e3.offsetHeight : 0;
    if (m === e3) B2 = "start" === f ? k : "end" === f ? k - H : "nearest" === f ? o$1(M, M + H, H, p2, T2, M + k, M + k + v, v) : k - H / 2, F2 = "start" === u ? D : "center" === u ? D - b / 2 : "end" === u ? D - b : o$1(y, y + b, b, g2, W2, y + D, y + D + E, E), B2 = Math.max(0, B2 + M), F2 = Math.max(0, F2 + y);
    else {
      B2 = "start" === f ? k - i2 - p2 : "end" === f ? k - d2 + T2 + S : "nearest" === f ? o$1(i2, d2, l2, p2, T2 + S, k, k + v, v) : k - (i2 + l2 / 2) + S / 2, F2 = "start" === u ? D - h2 - g2 : "center" === u ? D - (h2 + r3 / 2) + V2 / 2 : "end" === u ? D - s2 + W2 + V2 : o$1(h2, s2, r3, g2, W2 + V2, D, D + E, E);
      const { scrollLeft: t3, scrollTop: n2 } = e3;
      B2 = 0 === Y ? 0 : Math.max(0, Math.min(n2 + B2 / Y, e3.scrollHeight - l2 / Y + S)), F2 = 0 === X ? 0 : Math.max(0, Math.min(t3 + F2 / X, e3.scrollWidth - r3 / X + V2)), k += n2 - B2, D += t3 - F2;
    }
    L.push({ el: e3, top: B2, left: F2 });
  }
  return L;
};
const o = (e2) => false === e2 ? { block: "end", inline: "nearest" } : ((e3) => e3 === Object(e3) && 0 !== Object.keys(e3).length)(e2) ? e2 : { block: "start", inline: "nearest" };
function t(t2, n2) {
  if (!t2.isConnected || !((e2) => {
    let o2 = e2;
    for (; o2 && o2.parentNode; ) {
      if (o2.parentNode === document) return true;
      o2 = o2.parentNode instanceof ShadowRoot ? o2.parentNode.host : o2.parentNode;
    }
    return false;
  })(t2)) return;
  if (((e2) => "object" == typeof e2 && "function" == typeof e2.behavior)(n2)) return n2.behavior(r(t2, n2));
  const r$1 = "boolean" == typeof n2 || null == n2 ? void 0 : n2.behavior;
  for (const { el: i, top: a, left: l2 } of r(t2, o(n2))) i.scroll({ top: a, left: l2, behavior: r$1 });
}
const $99b62ae3ff97ec45$export$c5f62239608282b6 = /* @__PURE__ */ new WeakMap();
function $99b62ae3ff97ec45$export$567fc7097e064344(state, key, role) {
  if (!state)
    return "";
  if (typeof key === "string") key = key.replace(/\s+/g, "");
  let baseId = $99b62ae3ff97ec45$export$c5f62239608282b6.get(state);
  return `${baseId}-${role}-${key}`;
}
function $0175d55c2a017ebc$export$fdf4756d5b8ef90a(props, state, ref) {
  let { key, isDisabled: propsDisabled, shouldSelectOnPressUp } = props;
  let { selectionManager: manager, selectedKey } = state;
  let isSelected = key === selectedKey;
  let isDisabled = propsDisabled || state.isDisabled || state.selectionManager.isDisabled(key);
  let { itemProps, isPressed } = $f6ba6936bfd098a0$export$ecf600387e221c37({
    selectionManager: manager,
    key,
    ref,
    isDisabled,
    shouldSelectOnPressUp,
    linkBehavior: "selection"
  });
  let tabId = $99b62ae3ff97ec45$export$567fc7097e064344(state, key, "tab");
  let tabPanelId = $99b62ae3ff97ec45$export$567fc7097e064344(state, key, "tabpanel");
  let { tabIndex } = itemProps;
  let item = state.collection.getItem(key);
  let domProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(item === null || item === void 0 ? void 0 : item.props, {
    labelable: true
  });
  delete domProps.id;
  let linkProps = $caaf0dd3060ed57c$export$7e924b3091a3bd18(item === null || item === void 0 ? void 0 : item.props);
  let { focusableProps } = $f645667febf57a63$export$4c014de7c8940b4c({
    ...item === null || item === void 0 ? void 0 : item.props,
    isDisabled
  }, ref);
  return {
    tabProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(domProps, focusableProps, linkProps, itemProps, {
      id: tabId,
      "aria-selected": isSelected,
      "aria-disabled": isDisabled || void 0,
      "aria-controls": isSelected ? tabPanelId : void 0,
      tabIndex: isDisabled ? void 0 : tabIndex,
      role: "tab"
    }),
    isSelected,
    isDisabled,
    isPressed
  };
}
function $34bce698202e07cb$export$fae0121b5afe572d(props, state, ref) {
  let tabIndex = $83013635b024ae3d$export$eac1895992b9f3d6(ref) ? void 0 : 0;
  var _props_id;
  const id = $99b62ae3ff97ec45$export$567fc7097e064344(state, (_props_id = props.id) !== null && _props_id !== void 0 ? _props_id : state === null || state === void 0 ? void 0 : state.selectedKey, "tabpanel");
  const tabPanelProps = $e8ac3c3f5d4bae7f$export$d6875122194c7b44({
    ...props,
    id,
    "aria-labelledby": $99b62ae3ff97ec45$export$567fc7097e064344(state, state === null || state === void 0 ? void 0 : state.selectedKey, "tab")
  });
  return {
    tabPanelProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(tabPanelProps, {
      tabIndex,
      role: "tabpanel",
      "aria-describedby": props["aria-describedby"],
      "aria-details": props["aria-details"]
    })
  };
}
class $bfc6f2d60b8a4c40$export$15010ca3c1abe90b {
  getKeyLeftOf(key) {
    if (this.flipDirection) return this.getNextKey(key);
    return this.getPreviousKey(key);
  }
  getKeyRightOf(key) {
    if (this.flipDirection) return this.getPreviousKey(key);
    return this.getNextKey(key);
  }
  isDisabled(key) {
    var _this_collection_getItem_props, _this_collection_getItem;
    return this.disabledKeys.has(key) || !!((_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : (_this_collection_getItem_props = _this_collection_getItem.props) === null || _this_collection_getItem_props === void 0 ? void 0 : _this_collection_getItem_props.isDisabled);
  }
  getFirstKey() {
    let key = this.collection.getFirstKey();
    if (key != null && this.isDisabled(key)) key = this.getNextKey(key);
    return key;
  }
  getLastKey() {
    let key = this.collection.getLastKey();
    if (key != null && this.isDisabled(key)) key = this.getPreviousKey(key);
    return key;
  }
  getKeyAbove(key) {
    if (this.tabDirection) return null;
    return this.getPreviousKey(key);
  }
  getKeyBelow(key) {
    if (this.tabDirection) return null;
    return this.getNextKey(key);
  }
  getNextKey(startKey) {
    let key = startKey;
    do {
      key = this.collection.getKeyAfter(key);
      if (key == null) key = this.collection.getFirstKey();
    } while (key != null && this.isDisabled(key));
    return key;
  }
  getPreviousKey(startKey) {
    let key = startKey;
    do {
      key = this.collection.getKeyBefore(key);
      if (key == null) key = this.collection.getLastKey();
    } while (key != null && this.isDisabled(key));
    return key;
  }
  constructor(collection, direction, orientation, disabledKeys = /* @__PURE__ */ new Set()) {
    this.collection = collection;
    this.flipDirection = direction === "rtl" && orientation === "horizontal";
    this.disabledKeys = disabledKeys;
    this.tabDirection = orientation === "horizontal";
  }
}
function $58d314389b21fa3f$export$773e389e644c5874(props, state, ref) {
  let { orientation = "horizontal", keyboardActivation = "automatic" } = props;
  let { collection, selectionManager: manager, disabledKeys } = state;
  let { direction } = $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7();
  let delegate = reactExports.useMemo(() => new $bfc6f2d60b8a4c40$export$15010ca3c1abe90b(collection, direction, orientation, disabledKeys), [
    collection,
    disabledKeys,
    orientation,
    direction
  ]);
  let { collectionProps } = $d667c2af82d35a98$export$d6daf82dcd84e87c({
    ref,
    selectionManager: manager,
    keyboardDelegate: delegate,
    selectOnFocus: keyboardActivation === "automatic",
    disallowEmptySelection: true,
    scrollRef: ref,
    linkBehavior: "selection"
  });
  let tabsId = $390e54f620492c70$export$f680877a34711e37();
  $99b62ae3ff97ec45$export$c5f62239608282b6.set(state, tabsId);
  let tabListLabelProps = $e8ac3c3f5d4bae7f$export$d6875122194c7b44({
    ...props,
    id: tabsId
  });
  return {
    tabListProps: {
      ...$bbaa08b3cd72f041$export$9d1611c77c2fe928(collectionProps, tabListLabelProps),
      role: "tablist",
      "aria-orientation": orientation,
      tabIndex: void 0
    }
  };
}
var TabPanel = forwardRef((props, ref) => {
  var _a, _b;
  const { as, tabKey, destroyInactiveTabPanel, state, className, slots, classNames, ...otherProps } = props;
  const Component = as || "div";
  const domRef = useDOMRef(ref);
  const { tabPanelProps } = $34bce698202e07cb$export$fae0121b5afe572d({ ...props, id: String(tabKey) }, state, domRef);
  const { focusProps, isFocused, isFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const selectedItem = state.selectedItem;
  const content = state.collection.getItem(tabKey).props.children;
  const tabPanelStyles = cn(classNames == null ? void 0 : classNames.panel, className, (_a = selectedItem == null ? void 0 : selectedItem.props) == null ? void 0 : _a.className);
  const isSelected = tabKey === (selectedItem == null ? void 0 : selectedItem.key);
  if (!content || !isSelected && destroyInactiveTabPanel) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      ref: domRef,
      "data-focus": isFocused,
      "data-focus-visible": isFocusVisible,
      "data-inert": !isSelected ? "true" : void 0,
      inert: getInertValue(!isSelected),
      ...isSelected && mergeProps(tabPanelProps, focusProps, otherProps),
      className: (_b = slots.panel) == null ? void 0 : _b.call(slots, { class: tabPanelStyles }),
      "data-slot": "panel",
      children: content
    }
  );
});
TabPanel.displayName = "HeroUI.TabPanel";
var tab_panel_default = TabPanel;
var Tab = forwardRef((props, ref) => {
  var _a;
  const {
    className,
    as,
    item,
    state,
    classNames,
    isDisabled: isDisabledProp,
    listRef,
    slots,
    shouldSelectOnPressUp,
    tabRef,
    ...otherProps
  } = props;
  const { key } = item;
  const domRef = useDOMRef(ref);
  const Component = as || (props.href ? "a" : "button");
  const shouldFilterDOMProps = typeof Component === "string";
  const {
    tabProps,
    isSelected,
    isDisabled: isDisabledItem,
    isPressed
  } = $0175d55c2a017ebc$export$fdf4756d5b8ef90a({ key, isDisabled: isDisabledProp, shouldSelectOnPressUp }, state, domRef);
  if (props.children == null) {
    delete tabProps["aria-controls"];
  }
  const isDisabled = isDisabledProp || isDisabledItem;
  const { focusProps, isFocused, isFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const { hoverProps, isHovered } = $6179b936705e76d3$export$ae780daf29e6d456({
    isDisabled
  });
  const tabStyles = cn(classNames == null ? void 0 : classNames.tab, className);
  const handleClick = () => {
    if (!(domRef == null ? void 0 : domRef.current) || !(listRef == null ? void 0 : listRef.current)) return;
    t(domRef.current, {
      scrollMode: "if-needed",
      behavior: "smooth",
      block: "end",
      inline: "end",
      boundary: listRef == null ? void 0 : listRef.current
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      ref: mergeRefs(domRef, tabRef),
      "data-disabled": dataAttr(isDisabledItem),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-hover": dataAttr(isHovered),
      "data-hover-unselected": dataAttr((isHovered || isPressed) && !isSelected),
      "data-key": key,
      "data-pressed": dataAttr(isPressed),
      "data-selected": dataAttr(isSelected),
      "data-slot": "tab",
      ...mergeProps(
        tabProps,
        !isDisabled ? {
          ...focusProps,
          ...hoverProps
        } : {},
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps,
          omitPropNames: /* @__PURE__ */ new Set(["title"]),
          // onClick is now from `tabProps`.
          // omit it to avoid executing onClick it twice.
          omitEventNames: /* @__PURE__ */ new Set(["onClick"])
        }),
        { onClick: chain(handleClick, tabProps.onClick) }
      ),
      className: (_a = slots.tab) == null ? void 0 : _a.call(slots, { class: tabStyles }),
      title: otherProps == null ? void 0 : otherProps.titleValue,
      type: Component === "button" ? "button" : void 0,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: slots.tabContent({
            class: classNames == null ? void 0 : classNames.tabContent
          }),
          "data-slot": "tabContent",
          children: item.rendered
        }
      )
    }
  );
});
Tab.displayName = "HeroUI.Tab";
var tab_default = Tab;
class $f664a81d022446b5$export$d085fb9e920b5ca7 {
  constructor(nodes) {
    this.keyMap = /* @__PURE__ */ new Map();
    this.firstKey = null;
    this.lastKey = null;
    this.iterable = nodes;
    let visit = (node) => {
      this.keyMap.set(node.key, node);
      if (node.childNodes && node.type === "section") for (let child of node.childNodes) visit(child);
    };
    for (let node of nodes) visit(node);
    let last = null;
    let index = 0;
    let size = 0;
    for (let [key, node] of this.keyMap) {
      if (last) {
        last.nextKey = key;
        node.prevKey = last.key;
      } else {
        this.firstKey = key;
        node.prevKey = void 0;
      }
      if (node.type === "item") node.index = index++;
      if (node.type === "section" || node.type === "item") size++;
      last = node;
      last.nextKey = void 0;
    }
    this._size = size;
    this.lastKey = last?.key ?? null;
  }
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  get size() {
    return this._size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(key) {
    let node = this.keyMap.get(key);
    return node ? node.prevKey ?? null : null;
  }
  getKeyAfter(key) {
    let node = this.keyMap.get(key);
    return node ? node.nextKey ?? null : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(key) {
    return this.keyMap.get(key) ?? null;
  }
  at(idx) {
    const keys = [
      ...this.getKeys()
    ];
    return this.getItem(keys[idx]);
  }
  getChildren(key) {
    let node = this.keyMap.get(key);
    return node?.childNodes || [];
  }
}
function $b14b6f590b50af39$export$2f645645f7bca764(props) {
  let { filter, layoutDelegate } = props;
  let selectionState = $60f19cefd567a3e4$export$253fe78d46329472(props);
  let disabledKeys = reactExports.useMemo(() => props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set(), [
    props.disabledKeys
  ]);
  let factory = reactExports.useCallback((nodes) => filter ? new $f664a81d022446b5$export$d085fb9e920b5ca7(filter(nodes)) : new $f664a81d022446b5$export$d085fb9e920b5ca7(nodes), [
    filter
  ]);
  let context = reactExports.useMemo(() => ({
    suppressTextValueWarning: props.suppressTextValueWarning
  }), [
    props.suppressTextValueWarning
  ]);
  let collection = $d03379b88399b8c5$export$6cd28814d92fa9c9(props, factory, context);
  let selectionManager = reactExports.useMemo(() => new $4a07ac835f260f78$export$6c8a5aaad13c9852(collection, selectionState, {
    layoutDelegate
  }), [
    collection,
    selectionState,
    layoutDelegate
  ]);
  $b14b6f590b50af39$var$useFocusedKeyReset(collection, selectionManager);
  return {
    collection,
    disabledKeys,
    selectionManager
  };
}
function $b14b6f590b50af39$var$useFocusedKeyReset(collection, selectionManager) {
  const cachedCollection = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (selectionManager.focusedKey != null && !collection.getItem(selectionManager.focusedKey) && cachedCollection.current) {
      let key = cachedCollection.current.getKeyAfter(selectionManager.focusedKey);
      let nextFocusedKey = null;
      while (key != null) {
        let node = collection.getItem(key);
        if (node && node.type === "item" && !selectionManager.isDisabled(key)) {
          nextFocusedKey = key;
          break;
        }
        key = cachedCollection.current.getKeyAfter(key);
      }
      if (nextFocusedKey == null) {
        key = cachedCollection.current.getKeyBefore(selectionManager.focusedKey);
        while (key != null) {
          let node = collection.getItem(key);
          if (node && node.type === "item" && !selectionManager.isDisabled(key)) {
            nextFocusedKey = key;
            break;
          }
          key = cachedCollection.current.getKeyBefore(key);
        }
      }
      selectionManager.setFocusedKey(nextFocusedKey);
    }
    cachedCollection.current = collection;
  }, [
    collection,
    selectionManager
  ]);
}
function $0fdb127d377ffd84$export$e7f05e985daf4b5f(props) {
  let [selectedKey, setSelectedKey] = $3e6197669829fe11$export$40bfa8c7b0832715(props.selectedKey, props.defaultSelectedKey ?? null, props.onSelectionChange);
  let selectedKeys = reactExports.useMemo(() => selectedKey != null ? [
    selectedKey
  ] : [], [
    selectedKey
  ]);
  let { collection, disabledKeys, selectionManager } = $b14b6f590b50af39$export$2f645645f7bca764({
    ...props,
    selectionMode: "single",
    disallowEmptySelection: true,
    allowDuplicateSelectionEvents: true,
    selectedKeys,
    onSelectionChange: (keys) => {
      if (keys === "all") return;
      let key = keys.values().next().value ?? null;
      if (key === selectedKey && props.onSelectionChange) props.onSelectionChange(key);
      setSelectedKey(key);
    }
  });
  let selectedItem = selectedKey != null ? collection.getItem(selectedKey) : null;
  return {
    collection,
    disabledKeys,
    selectionManager,
    selectedKey,
    setSelectedKey,
    selectedItem
  };
}
function $76f919a04c5a7d14$export$4ba071daf4e486(props) {
  var _props_defaultSelectedKey, _ref;
  let state = $0fdb127d377ffd84$export$e7f05e985daf4b5f({
    ...props,
    onSelectionChange: props.onSelectionChange ? (key) => {
      var _props_onSelectionChange;
      if (key != null) (_props_onSelectionChange = props.onSelectionChange) === null || _props_onSelectionChange === void 0 ? void 0 : _props_onSelectionChange.call(props, key);
    } : void 0,
    suppressTextValueWarning: true,
    defaultSelectedKey: (_ref = (_props_defaultSelectedKey = props.defaultSelectedKey) !== null && _props_defaultSelectedKey !== void 0 ? _props_defaultSelectedKey : $76f919a04c5a7d14$var$findDefaultSelectedKey(props.collection, props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set())) !== null && _ref !== void 0 ? _ref : void 0
  });
  let { selectionManager, collection, selectedKey: currentSelectedKey } = state;
  let lastSelectedKey = reactExports.useRef(currentSelectedKey);
  reactExports.useEffect(() => {
    let selectedKey = currentSelectedKey;
    if (props.selectedKey == null && (selectionManager.isEmpty || selectedKey == null || !collection.getItem(selectedKey))) {
      selectedKey = $76f919a04c5a7d14$var$findDefaultSelectedKey(collection, state.disabledKeys);
      if (selectedKey != null)
        selectionManager.setSelectedKeys([
          selectedKey
        ]);
    }
    if (selectedKey != null && selectionManager.focusedKey == null || !selectionManager.isFocused && selectedKey !== lastSelectedKey.current) selectionManager.setFocusedKey(selectedKey);
    lastSelectedKey.current = selectedKey;
  });
  return {
    ...state,
    isDisabled: props.isDisabled || false
  };
}
function $76f919a04c5a7d14$var$findDefaultSelectedKey(collection, disabledKeys) {
  let selectedKey = null;
  if (collection) {
    var _collection_getItem_props, _collection_getItem, _collection_getItem_props1, _collection_getItem1;
    selectedKey = collection.getFirstKey();
    while (selectedKey != null && (disabledKeys.has(selectedKey) || ((_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : (_collection_getItem_props = _collection_getItem.props) === null || _collection_getItem_props === void 0 ? void 0 : _collection_getItem_props.isDisabled)) && selectedKey !== collection.getLastKey()) selectedKey = collection.getKeyAfter(selectedKey);
    if (selectedKey != null && (disabledKeys.has(selectedKey) || ((_collection_getItem1 = collection.getItem(selectedKey)) === null || _collection_getItem1 === void 0 ? void 0 : (_collection_getItem_props1 = _collection_getItem1.props) === null || _collection_getItem_props1 === void 0 ? void 0 : _collection_getItem_props1.isDisabled)) && selectedKey === collection.getLastKey()) selectedKey = collection.getFirstKey();
  }
  return selectedKey;
}
function useTabs(originalProps) {
  var _a, _b, _c;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, tabs.variantKeys);
  const {
    ref,
    as,
    className,
    classNames,
    children,
    disableCursorAnimation,
    isVertical = false,
    shouldSelectOnPressUp = true,
    destroyInactiveTabPanel = true,
    ...otherProps
  } = props;
  const Component = as || "div";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const disableAnimation = (_b = (_a = originalProps == null ? void 0 : originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const placement = (_c = variantProps.placement) != null ? _c : isVertical ? "start" : "top";
  const orientation = isVertical || placement === "start" || placement === "end" ? "vertical" : "horizontal";
  const state = $76f919a04c5a7d14$export$4ba071daf4e486({
    children,
    ...otherProps
  });
  const { tabListProps } = $58d314389b21fa3f$export$773e389e644c5874(
    { ...otherProps, orientation },
    state,
    domRef
  );
  const slots = reactExports.useMemo(
    () => tabs({
      ...variantProps,
      disableAnimation,
      ...isVertical ? { placement: "start" } : {}
    }),
    [objectToDeps(variantProps), disableAnimation, isVertical]
  );
  const baseStyles = cn(classNames == null ? void 0 : classNames.base, className);
  const values = reactExports.useMemo(
    () => ({
      state,
      slots,
      classNames,
      disableAnimation,
      listRef: domRef,
      shouldSelectOnPressUp,
      disableCursorAnimation,
      isDisabled: originalProps == null ? void 0 : originalProps.isDisabled
    }),
    [
      state,
      slots,
      domRef,
      disableAnimation,
      disableCursorAnimation,
      shouldSelectOnPressUp,
      originalProps == null ? void 0 : originalProps.isDisabled,
      classNames
    ]
  );
  const getBaseProps = reactExports.useCallback(
    (props2) => ({
      "data-slot": "base",
      className: slots.base({ class: cn(baseStyles, props2 == null ? void 0 : props2.className) }),
      ...mergeProps(
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps
        }),
        props2
      )
    }),
    [baseStyles, otherProps, slots]
  );
  const getWrapperProps = reactExports.useCallback(
    (props2) => ({
      "data-slot": "tabWrapper",
      className: slots.tabWrapper({ class: cn(classNames == null ? void 0 : classNames.tabWrapper, props2 == null ? void 0 : props2.className) }),
      "data-placement": placement,
      "data-vertical": isVertical || placement === "start" || placement === "end" ? "vertical" : "horizontal"
    }),
    [classNames, slots, placement, isVertical]
  );
  const getTabListProps = reactExports.useCallback(
    (props2) => ({
      ref: domRef,
      "data-slot": "tabList",
      className: slots.tabList({ class: cn(classNames == null ? void 0 : classNames.tabList, props2 == null ? void 0 : props2.className) }),
      ...mergeProps(tabListProps, props2)
    }),
    [domRef, tabListProps, classNames, slots]
  );
  const getTabCursorProps = reactExports.useCallback(
    (props2) => ({
      "data-slot": "cursor",
      className: slots.cursor({
        class: cn(classNames == null ? void 0 : classNames.cursor, props2 == null ? void 0 : props2.className)
      })
    }),
    [classNames, slots]
  );
  return {
    Component,
    domRef,
    state,
    values,
    destroyInactiveTabPanel,
    getBaseProps,
    getTabListProps,
    getWrapperProps,
    getTabCursorProps
  };
}
var Tabs = forwardRef(function Tabs2(props, ref) {
  const {
    Component,
    values,
    state,
    domRef,
    destroyInactiveTabPanel,
    getBaseProps,
    getTabListProps,
    getWrapperProps,
    getTabCursorProps
  } = useTabs({
    ...props,
    ref
  });
  const tabsProps = {
    state,
    listRef: values.listRef,
    slots: values.slots,
    classNames: values.classNames,
    isDisabled: values.isDisabled,
    shouldSelectOnPressUp: values.shouldSelectOnPressUp
  };
  const tabs2 = [...state.collection].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(tab_default, { item, ...tabsProps, ...item.props }, item.key));
  const variant = props == null ? void 0 : props.variant;
  const previousVariant = reactExports.useRef(void 0);
  const isVertical = props == null ? void 0 : props.isVertical;
  const previousIsVertical = reactExports.useRef(void 0);
  const placement = props == null ? void 0 : props.placement;
  const previousPlacement = reactExports.useRef(void 0);
  const cursorRef = reactExports.useRef(null);
  const selectedItem = state.selectedItem;
  const selectedKey = selectedItem == null ? void 0 : selectedItem.key;
  const getCursorStyles = reactExports.useCallback(
    (tabRect) => {
      if (variant === "underlined") {
        return {
          left: `${tabRect.left + tabRect.width * 0.1}px`,
          top: `${tabRect.top + tabRect.height - 2}px`,
          width: `${tabRect.width * 0.8}px`,
          height: ""
        };
      }
      return {
        left: `${tabRect.left}px`,
        top: `${tabRect.top}px`,
        width: `${tabRect.width}px`,
        height: `${tabRect.height}px`
      };
    },
    [variant]
  );
  const withAnimationReset = reactExports.useCallback(
    (callback) => {
      var _a;
      if (variant !== previousVariant.current || isVertical !== previousIsVertical.current || placement !== previousPlacement.current) {
        (_a = cursorRef.current) == null ? void 0 : _a.removeAttribute("data-animated");
      }
      callback();
      previousVariant.current = variant;
      previousIsVertical.current = isVertical;
      previousPlacement.current = placement;
      requestAnimationFrame(() => {
        var _a2, _b;
        (_a2 = cursorRef.current) == null ? void 0 : _a2.setAttribute("data-animated", "true");
        (_b = cursorRef.current) == null ? void 0 : _b.setAttribute("data-initialized", "true");
      });
    },
    [isVertical, variant, placement]
  );
  const updateCursorPosition = reactExports.useCallback(
    (selectedTab) => {
      if (!cursorRef.current) return;
      const tabRect = {
        width: selectedTab.offsetWidth,
        height: selectedTab.offsetHeight,
        left: selectedTab.offsetLeft,
        top: selectedTab.offsetTop
      };
      const styles = getCursorStyles(tabRect);
      withAnimationReset(() => {
        cursorRef.current.style.left = styles.left;
        cursorRef.current.style.top = styles.top;
        cursorRef.current.style.width = styles.width;
        cursorRef.current.style.height = styles.height;
      });
    },
    [cursorRef.current, getCursorStyles, withAnimationReset]
  );
  const onResize = reactExports.useCallback(
    (entries) => {
      const contentRect = entries[0].contentRect;
      if (contentRect.width === 0 && contentRect.height === 0) return;
      updateCursorPosition(entries[0].target);
    },
    [updateCursorPosition]
  );
  reactExports.useEffect(() => {
    var _a;
    const selectedTab = (_a = domRef.current) == null ? void 0 : _a.querySelector(`[data-key="${selectedKey}"]`);
    if (!selectedTab) return;
    const observer = new ResizeObserver(onResize);
    observer.observe(selectedTab);
    return () => observer.disconnect();
  }, [domRef.current, onResize, selectedKey]);
  const renderTabs = reactExports.useMemo(
    () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...getBaseProps(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { ...getTabListProps(), children: [
        !values.disableAnimation && !values.disableCursorAnimation && selectedKey != null && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getTabCursorProps(), ref: cursorRef }),
        tabs2
      ] }) }),
      [...state.collection].map((item) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          tab_panel_default,
          {
            classNames: values.classNames,
            destroyInactiveTabPanel,
            slots: values.slots,
            state: values.state,
            tabKey: item.key
          },
          item.key
        );
      })
    ] }),
    [
      Component,
      getBaseProps,
      getTabListProps,
      getTabCursorProps,
      tabs2,
      selectedKey,
      state.collection,
      values.disableAnimation,
      values.disableCursorAnimation,
      values.classNames,
      values.slots,
      values.state,
      destroyInactiveTabPanel,
      domRef,
      cursorRef,
      variant,
      isVertical
    ]
  );
  if ("placement" in props || "isVertical" in props) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...getWrapperProps(), children: renderTabs });
  }
  return renderTabs;
});
var tabs_default = Tabs;
var TabItemBase = $c1d7fb2ec91bae71$export$6d08773d2e66f8f2;
var tab_item_base_default = TabItemBase;
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$4);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
      key: "g5wo59"
    }
  ],
  ["path", { d: "m5.082 11.09 8.828 8.828", key: "1wx5vj" }]
];
const Eraser = createLucideIcon("eraser", __iconNode$3);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3",
      key: "128dxu"
    }
  ],
  ["path", { d: "m14.305 19.53.923-.382", key: "3m78fa" }],
  ["path", { d: "m15.228 16.852-.923-.383", key: "npixar" }],
  ["path", { d: "m16.852 15.228-.383-.923", key: "5xggr7" }],
  ["path", { d: "m16.852 20.772-.383.924", key: "dpfhf9" }],
  ["path", { d: "m19.148 15.228.383-.923", key: "1reyyz" }],
  ["path", { d: "m19.53 21.696-.382-.924", key: "1goivc" }],
  ["path", { d: "m20.772 16.852.924-.383", key: "htqkph" }],
  ["path", { d: "m20.772 19.148.924.383", key: "9w9pjp" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]
];
const FolderCog = createLucideIcon("folder-cog", __iconNode$2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M16 5h6", key: "1vod17" }],
  ["path", { d: "M19 2v6", key: "4bpg5p" }],
  ["path", { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5", key: "1ue2ih" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]
];
const ImagePlus = createLucideIcon("image-plus", __iconNode$1);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = createLucideIcon("settings", __iconNode);
const formats = ["png", "webp", "jpg"];
function App() {
  const [settings, setSettings] = reactExports.useState(null);
  const [models, setModels] = reactExports.useState([]);
  const [items, setItems] = reactExports.useState([]);
  const [dragging, setDragging] = reactExports.useState(false);
  const [previewMode, setPreviewMode] = reactExports.useState("checker");
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    void window.api.settings.get().then(setSettings);
    void window.api.models.list().then(setModels);
    const offSettings = window.api.settings.onChanged(setSettings);
    const offProgress = window.api.models.onProgress(() => {
      void window.api.models.list().then(setModels);
    });
    return () => {
      offSettings();
      offProgress();
    };
  }, []);
  const readyModels = reactExports.useMemo(() => models.filter((model) => model.cached), [models]);
  const selectedItem = items.find((item) => item.status === "done" && item.resultUrl) ?? items[0];
  const processFile = reactExports.useCallback(
    async (file) => {
      if (!settings) return;
      if (!file.type.startsWith("image/")) {
        addToast({ title: "Unsupported file", description: `${file.name} is not an image.`, color: "danger" });
        return;
      }
      if (file.size > settings.maxUploadSizeMB * 1024 * 1024) {
        addToast({ title: "File too large", description: `${file.name} is above ${settings.maxUploadSizeMB} MB.`, color: "warning" });
        return;
      }
      const id = crypto.randomUUID();
      const item = { id, file, status: "queued", progress: 0 };
      setItems((current) => [item, ...current]);
      const options = {
        modelId: settings.defaultModel,
        format: settings.outputFormat,
        quality: settings.outputQuality,
        transparentBackground: settings.transparentBackground,
        backgroundColor: settings.backgroundColor,
        alphaMatting: settings.alphaMatting
      };
      try {
        setItems((current) => current.map((entry) => entry.id === id ? { ...entry, status: "processing", progress: 35 } : entry));
        const result = await window.api.removeBg(await file.arrayBuffer(), options);
        const blob = new Blob([result.buffer], { type: result.mimeType });
        const resultUrl = URL.createObjectURL(blob);
        setItems(
          (current) => current.map(
            (entry) => entry.id === id ? { ...entry, status: "done", progress: 100, resultUrl, mimeType: result.mimeType } : entry
          )
        );
      } catch (error) {
        setItems(
          (current) => current.map(
            (entry) => entry.id === id ? { ...entry, status: "error", progress: 0, error: error instanceof Error ? error.message : "Processing failed" } : entry
          )
        );
      }
    },
    [settings]
  );
  const addFiles = reactExports.useCallback(
    (files) => {
      Array.from(files).forEach((file) => void processFile(file));
    },
    [processFile]
  );
  reactExports.useEffect(() => {
    const onPaste = (event) => {
      const files = Array.from(event.clipboardData?.files ?? []);
      if (files.length) addFiles(files);
    };
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
  }, [addFiles]);
  const saveSelected = () => {
    if (!selectedItem?.resultUrl || !settings) return;
    const extension = settings.outputFormat === "jpg" ? "jpg" : settings.outputFormat;
    const link = document.createElement("a");
    link.href = selectedItem.resultUrl;
    link.download = selectedItem.file.name.replace(/\.[^.]+$/, "") + `-removed.${extension}`;
    link.click();
  };
  const updateSettings = (patch) => {
    void window.api.settings.set(patch).then(setSettings);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "h-full overflow-auto bg-background p-6 text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(button_group_default, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(button_default, { variant: "flat", startContent: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderCog, { size: 17 }), onPress: () => void window.api.windows.openModels(), children: "Models" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(button_default, { variant: "flat", startContent: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { size: 17 }), onPress: () => void window.api.windows.openSettings(), children: "Settings" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid min-h-[calc(100vh-7rem)] grid-cols-1 gap-4 lg:grid-cols-[390px_minmax(0,1fr)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(card_default, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(card_body_default, { className: "gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          card_default,
          {
            isPressable: true,
            shadow: "none",
            className: dragging ? "border-primary" : "",
            classNames: {
              base: "min-h-72 border-2 border-dashed border-default-200",
              body: "items-center justify-center gap-3 p-8 text-center"
            },
            onDragOver: (event) => {
              event.preventDefault();
              setDragging(true);
            },
            onDragLeave: () => setDragging(false),
            onDrop: (event) => {
              event.preventDefault();
              setDragging(false);
              addFiles(event.dataTransfer.files);
            },
            onClick: () => inputRef.current?.click(),
            role: "button",
            tabIndex: 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(card_body_default, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlus, { size: 40 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: "Drop images here" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-xs text-small text-default-500", children: "PNG, JPG, WebP, or paste directly from the clipboard." }),
                !readyModels.length && /* @__PURE__ */ jsxRuntimeExports.jsx(chip_default, { color: "warning", variant: "flat", children: "No cached model yet. Open Models to download one." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: inputRef, type: "file", accept: "image/*", multiple: true, hidden: true, onChange: (e2) => e2.target.files && addFiles(e2.target.files) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-medium font-semibold", children: "Queue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(chip_default, { variant: "flat", children: [
            items.length,
            " items"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
          items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-small text-default-500", children: "Processed images appear here with progress and download status." }),
          items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(card_default, { shadow: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(card_body_default, { className: "gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-small font-medium", title: item.file.name, children: item.file.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(chip_default, { color: item.status === "done" ? "success" : item.status === "error" ? "danger" : "primary", variant: "flat", children: item.status })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(progress_default, { "aria-label": `${item.file.name} progress`, value: item.progress, size: "sm" }),
            item.error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-tiny text-danger", children: item.error })
          ] }) }, item.id))
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(card_default, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(card_header_default, { className: "justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(tabs_default, { selectedKey: previewMode, onSelectionChange: (key) => setPreviewMode(String(key)), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(tab_item_base_default, { title: "Checker" }, "checker"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(tab_item_base_default, { title: "Solid" }, "solid")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(button_default, { color: "primary", startContent: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 17 }), isDisabled: !selectedItem?.resultUrl, onPress: saveSelected, children: "Download" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(divider_default, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(card_body_default, { className: "gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(card_default, { shadow: "none", className: previewMode === "solid" ? "bg-default-100" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(card_body_default, { className: "min-h-[420px] items-center justify-center overflow-hidden p-6 text-center", children: selectedItem?.resultUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "max-h-[60vh] max-w-full object-contain", src: selectedItem.resultUrl, alt: "Processed result" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid justify-items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eraser, { size: 44 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: "Ready for a clean cutout" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-small text-default-500", children: "Your latest processed result previews here." })
          ] }) }) }),
          settings && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              select_default,
              {
                "aria-label": "Output format",
                label: "Format",
                selectedKeys: [settings.outputFormat],
                onChange: (event) => updateSettings({ outputFormat: event.target.value }),
                size: "sm",
                children: formats.map((format) => /* @__PURE__ */ jsxRuntimeExports.jsx(listbox_item_base_default, { children: format.toUpperCase() }, format))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              switch_default,
              {
                isSelected: settings.transparentBackground,
                onValueChange: (transparentBackground) => updateSettings({ transparentBackground }),
                children: "Transparent"
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
clientExports.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Providers, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) })
);
