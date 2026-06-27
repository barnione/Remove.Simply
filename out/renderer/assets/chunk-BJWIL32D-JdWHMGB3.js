const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BmvgNQAH.js","./features-animation-CmO_Pgh-.js","./Providers-WL0Y5vQ8.js","./Providers-DCrNsOML.css"])))=>i.map(i=>d[i]);
import { aj as isFunction, ak as $6a20a7989e6c817a$export$98658e8c59125e6a, Y as $23f2114a1b82827e$export$4282f70798064fe0, r as reactExports, $ as $c4867b2f328c2698$export$e5c5a5f917a5871c, V as $fe16bffc7a557bf0$export$7f54fc3180508a52, al as $2add3ce32c6007eb$export$9ac100e40613ea10, am as $2add3ce32c6007eb$export$fedb369cb70207f1, an as $d447af545b77c9f1$export$f21a1ffae260145a, T as $18f2051aff69b9bf$export$43bb16f9c6d9e3f7, ao as $bdb11010cef70236$export$f680877a34711e37, a9 as $4d1jn$react, ap as $2add3ce32c6007eb$export$78551043582a6a98, R as $240e9101ba2842f5$export$7d15b64cf5a3a4c4, Z as $23f2114a1b82827e$export$e58f029f0fbfdb29, i as $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7, aq as $23f2114a1b82827e$export$b4f377a2b6254582, ar as $23f2114a1b82827e$export$cd4e5573fbe2b576, _ as $d447af545b77c9f1$export$b204af158042fbac, as as $3b8b240c1bf84ab9$export$bebd5a1431fec25d, at as $3b8b240c1bf84ab9$export$4c063cf1350e6fed, au as $2add3ce32c6007eb$export$a11b0059900ceec8, av as $2add3ce32c6007eb$export$6446a186d09e379e, aw as $3ad3f6e1647bc98d$export$80f3e147d781571c, ax as $507fabe10e71c6fb$export$630ff653c5ada6a9, af as $1969ac565cfec8d0$export$de79e2c695e052f3, ay as $081cb5757e08788e$export$24490316f764c430, U as $48a7d519b337145d$export$4eaf04e54aa8eed6, az as $b5c62b033c25b96d$export$29bf1b5f2c56cf63, g as $bbaa08b3cd72f041$export$9d1611c77c2fe928, aA as $b7115c395c64f7b5$export$4debdb1a3f0fa79e, aB as $caaf0dd3060ed57c$export$95185d699e05d4d7, aC as $b5c62b033c25b96d$export$60278871457622de, aD as $a4e76a5424781910$export$e08e3b67e392101e, k as $390e54f620492c70$export$f680877a34711e37, aE as $cf2482eff2eeeec2$export$f12b703ca79dfbb1, h as $e8ac3c3f5d4bae7f$export$d6875122194c7b44, aF as $c7eafbbe1ea5834e$export$535bd6ca7f90a273, aG as $96b38030c423d352$export$9fc1347d4195ccb3, aH as $3wX5A$reactdom, u as useProviderContext, F as tv, j as jsxRuntimeExports, c as $8e9d2fae0ecb9001$export$457c3d6518dd4c6f, aI as mergeRefs$1, p as mergeProps, ad as $9ab94262bd0047c7$export$420e68273165f4ec, m as mapPropsVariants, aJ as toggle, l as $f7dceffc5ad7768b$export$4e328f61c538687f, s as $6179b936705e76d3$export$ae780daf29e6d456, o as objectToDeps, n as cn, t as chain, w as dataAttr, f as forwardRef, a1 as popover, a as useDOMRef, a0 as $390e54f620492c70$export$b4cc09c592e8fdb8, a5 as LazyMotion, a4 as m, a8 as __vitePreload, aK as $2add3ce32c6007eb$export$e1865c3bedcd822b, aL as $caaf0dd3060ed57c$export$9a302a45f65d0572, aM as reactDomExports, aN as capitalize, aO as $bdb11010cef70236$export$b4cc09c592e8fdb8, aP as $3ef42575df84b30b$export$9d1611c77c2fe928, aQ as $65484d02dcb7eb3e$export$457c3d6518dd4c6f, aR as $ff5963eb1fccf552$export$e08e3b67e392101e, ae as $507fabe10e71c6fb$export$8397ddfc504fdb9a, aS as select, N as $f6c31cce2adf654f$export$45712eceda6fad21, J as useAriaButton, v as filterDOMProps, Q as $0beb20c9744a2065$export$8467354a121f1b9f, aT as $507fabe10e71c6fb$export$b9b3dfddab17db27, d as $caaf0dd3060ed57c$export$7e924b3091a3bd18, aU as menu, aV as menuItem, aW as useIsMobile, aX as removeEvents, aY as menuSection, C as divider_default, ab as isEmpty, O as CloseFilledIcon, L as spinner_default, a6 as AnimatePresence } from "./Providers-WL0Y5vQ8.js";
function assignRef(ref, value) {
  if (ref == null) return;
  if (isFunction(ref)) {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
}
const $8b2399d051d06d4c$export$447a38995de2c711 = "react-aria-clear-focus";
const $8b2399d051d06d4c$export$831c820ad60f9d12 = "react-aria-focus";
class $654b97e09f2a30c1$export$63eb3ababa9c55c4 {
  constructor(doc, root, whatToShow, filter) {
    this._walkerStack = [];
    this._currentSetFor = /* @__PURE__ */ new Set();
    this._acceptNode = (node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const shadowRoot2 = node.shadowRoot;
        if (shadowRoot2) {
          const walker = this._doc.createTreeWalker(shadowRoot2, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          this._walkerStack.unshift(walker);
          return NodeFilter.FILTER_ACCEPT;
        } else {
          if (typeof this.filter === "function") return this.filter(node);
          else if (this.filter?.acceptNode) return this.filter.acceptNode(node);
          else if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
        }
      }
      return NodeFilter.FILTER_SKIP;
    };
    this._doc = doc;
    this.root = root;
    this.filter = filter ?? null;
    this.whatToShow = whatToShow ?? NodeFilter.SHOW_ALL;
    this._currentNode = root;
    this._walkerStack.unshift(doc.createTreeWalker(root, whatToShow, this._acceptNode));
    const shadowRoot = root.shadowRoot;
    if (shadowRoot) {
      const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      this._walkerStack.unshift(walker);
    }
  }
  get currentNode() {
    return this._currentNode;
  }
  set currentNode(node) {
    if (!$23f2114a1b82827e$export$4282f70798064fe0(this.root, node)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
    const walkers = [];
    let curNode = node;
    let currentWalkerCurrentNode = node;
    this._currentNode = node;
    while (curNode && curNode !== this.root) if (curNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      const shadowRoot = curNode;
      const walker2 = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      walkers.push(walker2);
      walker2.currentNode = currentWalkerCurrentNode;
      this._currentSetFor.add(walker2);
      curNode = currentWalkerCurrentNode = shadowRoot.host;
    } else curNode = curNode.parentNode;
    const walker = this._doc.createTreeWalker(this.root, this.whatToShow, {
      acceptNode: this._acceptNode
    });
    walkers.push(walker);
    walker.currentNode = currentWalkerCurrentNode;
    this._currentSetFor.add(walker);
    this._walkerStack = walkers;
  }
  get doc() {
    return this._doc;
  }
  firstChild() {
    let currentNode = this.currentNode;
    let newNode = this.nextNode();
    if (!$23f2114a1b82827e$export$4282f70798064fe0(currentNode, newNode)) {
      this.currentNode = currentNode;
      return null;
    }
    if (newNode) this.currentNode = newNode;
    return newNode;
  }
  lastChild() {
    let walker = this._walkerStack[0];
    let newNode = walker.lastChild();
    if (newNode) this.currentNode = newNode;
    return newNode;
  }
  nextNode() {
    const nextNode = this._walkerStack[0].nextNode();
    if (nextNode) {
      const shadowRoot = nextNode.shadowRoot;
      if (shadowRoot) {
        let nodeResult;
        if (typeof this.filter === "function") nodeResult = this.filter(nextNode);
        else if (this.filter?.acceptNode) nodeResult = this.filter.acceptNode(nextNode);
        if (nodeResult === NodeFilter.FILTER_ACCEPT) {
          this.currentNode = nextNode;
          return nextNode;
        }
        let newNode = this.nextNode();
        if (newNode) this.currentNode = newNode;
        return newNode;
      }
      if (nextNode) this.currentNode = nextNode;
      return nextNode;
    } else {
      if (this._walkerStack.length > 1) {
        this._walkerStack.shift();
        let newNode = this.nextNode();
        if (newNode) this.currentNode = newNode;
        return newNode;
      } else return null;
    }
  }
  previousNode() {
    const currentWalker = this._walkerStack[0];
    if (currentWalker.currentNode === currentWalker.root) {
      if (this._currentSetFor.has(currentWalker)) {
        this._currentSetFor.delete(currentWalker);
        if (this._walkerStack.length > 1) {
          this._walkerStack.shift();
          let newNode = this.previousNode();
          if (newNode) this.currentNode = newNode;
          return newNode;
        } else return null;
      }
      return null;
    }
    const previousNode = currentWalker.previousNode();
    if (previousNode) {
      const shadowRoot = previousNode.shadowRoot;
      if (shadowRoot) {
        let nodeResult;
        if (typeof this.filter === "function") nodeResult = this.filter(previousNode);
        else if (this.filter?.acceptNode) nodeResult = this.filter.acceptNode(previousNode);
        if (nodeResult === NodeFilter.FILTER_ACCEPT) {
          if (previousNode) this.currentNode = previousNode;
          return previousNode;
        }
        let newNode = this.lastChild();
        if (newNode) this.currentNode = newNode;
        return newNode;
      }
      if (previousNode) this.currentNode = previousNode;
      return previousNode;
    } else {
      if (this._walkerStack.length > 1) {
        this._walkerStack.shift();
        let newNode = this.previousNode();
        if (newNode) this.currentNode = newNode;
        return newNode;
      } else return null;
    }
  }
  /**
  * @deprecated
  */
  nextSibling() {
    return null;
  }
  /**
  * @deprecated
  */
  previousSibling() {
    return null;
  }
  /**
  * @deprecated
  */
  parentNode() {
    return null;
  }
}
function $654b97e09f2a30c1$export$4d0f8be8b12a7ef6(doc, root, whatToShow, filter) {
  if ($6a20a7989e6c817a$export$98658e8c59125e6a()) return new $654b97e09f2a30c1$export$63eb3ababa9c55c4(doc, root, whatToShow, filter);
  return doc.createTreeWalker(root, whatToShow, filter);
}
function $a475cdc2445827b5$export$72ef708ab07251f1(effect, dependencies) {
  const isInitialMount = reactExports.useRef(true);
  const lastDeps = reactExports.useRef(null);
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    isInitialMount.current = true;
    return () => {
      isInitialMount.current = false;
    };
  }, []);
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    if (isInitialMount.current) isInitialMount.current = false;
    else if (!lastDeps.current || dependencies.some((dep, i) => !Object.is(dep, lastDeps[i]))) effect();
    lastDeps.current = dependencies;
  }, dependencies);
}
function $970072cf4b13fde3$var$hasResizeObserver() {
  return typeof window.ResizeObserver !== "undefined";
}
function $970072cf4b13fde3$export$683480f191c0e3ea(options) {
  const { ref, box, onResize } = options;
  let onResizeEvent = $fe16bffc7a557bf0$export$7f54fc3180508a52(onResize);
  reactExports.useEffect(() => {
    let element = ref?.current;
    if (!element) return;
    if (!$970072cf4b13fde3$var$hasResizeObserver()) {
      window.addEventListener("resize", onResizeEvent, false);
      return () => {
        window.removeEventListener("resize", onResizeEvent, false);
      };
    } else {
      const resizeObserverInstance = new window.ResizeObserver((entries) => {
        if (!entries.length) return;
        onResizeEvent();
      });
      resizeObserverInstance.observe(element, {
        box
      });
      return () => {
        if (element) resizeObserverInstance.unobserve(element);
      };
    }
  }, [
    ref,
    box
  ]);
}
function $901761b40e390936$export$2bb74740c4e19def(node, checkForOverflow) {
  if (!node) return false;
  let style = window.getComputedStyle(node);
  let root = document.scrollingElement || document.documentElement;
  let isScrollable = /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
  if (node === root && style.overflow !== "hidden") isScrollable = true;
  if (isScrollable && checkForOverflow) isScrollable = node.scrollHeight !== node.clientHeight || node.scrollWidth !== node.clientWidth;
  return isScrollable;
}
function $3578607fe3d4b096$export$cfa2225e87938781(node, checkForOverflow) {
  let scrollableNode = node;
  if ($901761b40e390936$export$2bb74740c4e19def(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
  while (scrollableNode && !$901761b40e390936$export$2bb74740c4e19def(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
  return scrollableNode || document.scrollingElement || document.documentElement;
}
function $76d97191f0f90600$export$94ed1c92c7beeb22(node, checkForOverflow) {
  let parentElements = [];
  let root = document.scrollingElement || document.documentElement;
  while (node) {
    if ($901761b40e390936$export$2bb74740c4e19def(node, checkForOverflow)) parentElements.push(node);
    if (node === root) break;
    node = node.parentElement;
  }
  return parentElements;
}
function $bb39c0fc1c19b34c$export$16792effe837dba3(e) {
  if ($2add3ce32c6007eb$export$9ac100e40613ea10()) return e.metaKey;
  return e.ctrlKey;
}
const $bb39c0fc1c19b34c$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $bb39c0fc1c19b34c$export$c57958e35f31ed73(target) {
  return target instanceof HTMLInputElement && !$bb39c0fc1c19b34c$var$nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}
let $121970af65029459$var$descriptionId = 0;
const $121970af65029459$var$descriptionNodes = /* @__PURE__ */ new Map();
function $121970af65029459$export$f8aeda7b10753fa1(description) {
  let [id, setId] = reactExports.useState();
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    if (!description) return;
    let desc = $121970af65029459$var$descriptionNodes.get(description);
    if (!desc) {
      let id2 = `react-aria-description-${$121970af65029459$var$descriptionId++}`;
      setId(id2);
      let node = document.createElement("div");
      node.id = id2;
      node.style.display = "none";
      node.textContent = description;
      document.body.appendChild(node);
      desc = {
        refCount: 0,
        element: node
      };
      $121970af65029459$var$descriptionNodes.set(description, desc);
    } else setId(desc.element.id);
    desc.refCount++;
    return () => {
      if (desc && --desc.refCount === 0) {
        desc.element.remove();
        $121970af65029459$var$descriptionNodes.delete(description);
      }
    };
  }, [
    description
  ]);
  return {
    "aria-describedby": description ? id : void 0
  };
}
function $600b3cf69ae46262$export$90fc3a17d93f704c(ref, event, handler, options) {
  let handleEvent = $fe16bffc7a557bf0$export$7f54fc3180508a52(handler);
  let isDisabled = handler == null;
  reactExports.useEffect(() => {
    if (isDisabled || !ref.current) return;
    let element = ref.current;
    element.addEventListener(event, handleEvent, options);
    return () => {
      element.removeEventListener(event, handleEvent, options);
    };
  }, [
    ref,
    event,
    options,
    isDisabled
  ]);
}
function $51a3e22a5186a962$export$53a0910f038337bd(scrollView, element, opts = {}) {
  let { block = "nearest", inline = "nearest" } = opts;
  if (scrollView === element) return;
  let y = scrollView.scrollTop;
  let x = scrollView.scrollLeft;
  let target = element.getBoundingClientRect();
  let view = scrollView.getBoundingClientRect();
  let itemStyle = window.getComputedStyle(element);
  let viewStyle = window.getComputedStyle(scrollView);
  let root = document.scrollingElement || document.documentElement;
  let isRoot = scrollView === root;
  let viewTop = scrollView === root ? 0 : view.top;
  let viewBottom = scrollView === root ? scrollView.clientHeight : view.bottom;
  let viewLeft = scrollView === root ? 0 : view.left;
  let viewRight = scrollView === root ? scrollView.clientWidth : view.right;
  let scrollMarginTop = parseFloat(itemStyle.scrollMarginTop) || 0;
  let scrollMarginBottom = parseFloat(itemStyle.scrollMarginBottom) || 0;
  let scrollMarginLeft = parseFloat(itemStyle.scrollMarginLeft) || 0;
  let scrollMarginRight = parseFloat(itemStyle.scrollMarginRight) || 0;
  let scrollPaddingTop = parseFloat(viewStyle.scrollPaddingTop) || 0;
  let scrollPaddingBottom = parseFloat(viewStyle.scrollPaddingBottom) || 0;
  let scrollPaddingLeft = parseFloat(viewStyle.scrollPaddingLeft) || 0;
  let scrollPaddingRight = parseFloat(viewStyle.scrollPaddingRight) || 0;
  let borderTopWidth = parseFloat(viewStyle.borderTopWidth) || 0;
  let borderBottomWidth = parseFloat(viewStyle.borderBottomWidth) || 0;
  let borderLeftWidth = parseFloat(viewStyle.borderLeftWidth) || 0;
  let borderRightWidth = parseFloat(viewStyle.borderRightWidth) || 0;
  let scrollAreaTop = target.top - scrollMarginTop;
  let scrollAreaBottom = target.bottom + scrollMarginBottom;
  let scrollAreaLeft = target.left - scrollMarginLeft;
  let scrollAreaRight = target.right + scrollMarginRight;
  let scrollBarOffsetX = scrollView === root ? 0 : borderLeftWidth + borderRightWidth;
  let scrollBarOffsetY = scrollView === root ? 0 : borderTopWidth + borderBottomWidth;
  let scrollBarWidth = scrollView === root ? 0 : scrollView.offsetWidth - scrollView.clientWidth - scrollBarOffsetX;
  let scrollBarHeight = scrollView === root ? 0 : scrollView.offsetHeight - scrollView.clientHeight - scrollBarOffsetY;
  let scrollPortTop = viewTop + (isRoot ? 0 : borderTopWidth) + scrollPaddingTop;
  let scrollPortBottom = viewBottom - (isRoot ? 0 : borderBottomWidth) - scrollPaddingBottom - scrollBarHeight;
  let scrollPortLeft = viewLeft + (isRoot ? 0 : borderLeftWidth) + scrollPaddingLeft;
  let scrollPortRight = viewRight - (isRoot ? 0 : borderRightWidth) - scrollPaddingRight;
  if (viewStyle.direction === "rtl" && !$2add3ce32c6007eb$export$fedb369cb70207f1()) scrollPortLeft += scrollBarWidth;
  else scrollPortRight -= scrollBarWidth;
  let shouldScrollBlock = scrollAreaTop < scrollPortTop || scrollAreaBottom > scrollPortBottom;
  let shouldScrollInline = scrollAreaLeft < scrollPortLeft || scrollAreaRight > scrollPortRight;
  if (shouldScrollBlock && block === "start") y += scrollAreaTop - scrollPortTop;
  else if (shouldScrollBlock && block === "center") y += (scrollAreaTop + scrollAreaBottom) / 2 - (scrollPortTop + scrollPortBottom) / 2;
  else if (shouldScrollBlock && block === "end") y += scrollAreaBottom - scrollPortBottom;
  else if (shouldScrollBlock && block === "nearest") {
    let start = scrollAreaTop - scrollPortTop;
    let end = scrollAreaBottom - scrollPortBottom;
    y += Math.abs(start) <= Math.abs(end) ? start : end;
  }
  if (shouldScrollInline && inline === "start") x += scrollAreaLeft - scrollPortLeft;
  else if (shouldScrollInline && inline === "center") x += (scrollAreaLeft + scrollAreaRight) / 2 - (scrollPortLeft + scrollPortRight) / 2;
  else if (shouldScrollInline && inline === "end") x += scrollAreaRight - scrollPortRight;
  else if (shouldScrollInline && inline === "nearest") {
    let start = scrollAreaLeft - scrollPortLeft;
    let end = scrollAreaRight - scrollPortRight;
    x += Math.abs(start) <= Math.abs(end) ? start : end;
  }
  scrollView.scrollTo({
    left: x,
    top: y
  });
}
function $51a3e22a5186a962$export$c826860796309d1b(targetElement, opts = {}) {
  let { containingElement } = opts;
  if (targetElement && targetElement.isConnected) {
    let root = document.scrollingElement || document.documentElement;
    let isScrollPrevented = window.getComputedStyle(root).overflow === "hidden";
    if (!isScrollPrevented) {
      let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
      targetElement?.scrollIntoView?.({
        block: "nearest"
      });
      let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
      if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
        containingElement?.scrollIntoView?.({
          block: "center",
          inline: "center"
        });
        targetElement.scrollIntoView?.({
          block: "nearest"
        });
      }
    } else {
      let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
      let scrollParents = $76d97191f0f90600$export$94ed1c92c7beeb22(targetElement, true);
      for (let scrollParent of scrollParents) $51a3e22a5186a962$export$53a0910f038337bd(scrollParent, targetElement);
      let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
      if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
        scrollParents = containingElement ? $76d97191f0f90600$export$94ed1c92c7beeb22(containingElement, true) : [];
        for (let scrollParent of scrollParents) $51a3e22a5186a962$export$53a0910f038337bd(scrollParent, containingElement, {
          block: "center",
          inline: "center"
        });
        for (let scrollParent of $76d97191f0f90600$export$94ed1c92c7beeb22(targetElement, true)) $51a3e22a5186a962$export$53a0910f038337bd(scrollParent, targetElement);
      }
    }
  }
}
function $3274bf1495747a7b$export$5add1d006293d136(ref, initialValue, onReset) {
  let handleReset = $fe16bffc7a557bf0$export$7f54fc3180508a52((e) => {
    if (onReset && !e.defaultPrevented) onReset(initialValue);
  });
  reactExports.useEffect(() => {
    let form2 = ref?.current?.form;
    form2?.addEventListener("reset", handleReset);
    return () => {
      form2?.removeEventListener("reset", handleReset);
    };
  }, [
    ref
  ]);
}
function $2b2d34ff061957fb$var$getWebpackNonce(doc) {
  let ownerWindow = doc?.defaultView;
  return ownerWindow?.__webpack_nonce__ || globalThis["__webpack_nonce__"] || void 0;
}
let $2b2d34ff061957fb$var$nonceCache = /* @__PURE__ */ new WeakMap();
function $2b2d34ff061957fb$export$2b85b721e524d74b(doc) {
  let d = doc ?? (typeof document !== "undefined" ? document : void 0);
  if (!d) return $2b2d34ff061957fb$var$getWebpackNonce(d);
  if ($2b2d34ff061957fb$var$nonceCache.has(d)) return $2b2d34ff061957fb$var$nonceCache.get(d);
  let meta = d.querySelector('meta[property="csp-nonce"]');
  let nonce = meta && meta instanceof $d447af545b77c9f1$export$f21a1ffae260145a(meta).HTMLMetaElement && (meta.nonce || meta.content) || $2b2d34ff061957fb$var$getWebpackNonce(d) || void 0;
  if (nonce !== void 0) $2b2d34ff061957fb$var$nonceCache.set(d, nonce);
  return nonce;
}
let $325a3faab7a68acd$var$cache = /* @__PURE__ */ new Map();
function $325a3faab7a68acd$export$a16aca283550c30d(options) {
  let { locale } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : "");
  if ($325a3faab7a68acd$var$cache.has(cacheKey)) return $325a3faab7a68acd$var$cache.get(cacheKey);
  let formatter = new Intl.Collator(locale, options);
  $325a3faab7a68acd$var$cache.set(cacheKey, formatter);
  return formatter;
}
function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
  let { id, "aria-label": label, "aria-labelledby": labelledBy } = props;
  id = $bdb11010cef70236$export$f680877a34711e37(id);
  if (labelledBy && label) {
    let ids = /* @__PURE__ */ new Set([
      id,
      ...labelledBy.trim().split(/\s+/)
    ]);
    labelledBy = [
      ...ids
    ].join(" ");
  } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(" ");
  if (!label && !labelledBy && defaultLabel) label = defaultLabel;
  return {
    id,
    "aria-label": label,
    "aria-labelledby": labelledBy
  };
}
const $3e6197669829fe11$var$useEarlyEffect = typeof document !== "undefined" ? $4d1jn$react["useInsertionEffect"] ?? $4d1jn$react.useLayoutEffect : () => {
};
function $3e6197669829fe11$export$40bfa8c7b0832715(value, defaultValue, onChange) {
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
  $3e6197669829fe11$var$useEarlyEffect(() => {
    valueRef.current = currentValue;
  });
  let [, forceUpdate] = reactExports.useReducer(() => ({}), {});
  let setValue = reactExports.useCallback((value2, ...args) => {
    let newValue = typeof value2 === "function" ? value2(valueRef.current) : value2;
    if (!Object.is(valueRef.current, newValue)) {
      valueRef.current = newValue;
      setStateValue(newValue);
      forceUpdate();
      onChange?.(newValue, ...args);
    }
  }, [
    onChange
  ]);
  return [
    currentValue,
    setValue
  ];
}
const $edcf132a9284368a$var$AXIS = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left"
};
const $edcf132a9284368a$var$FLIPPED_DIRECTION = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
const $edcf132a9284368a$var$CROSS_AXIS = {
  top: "left",
  left: "top"
};
const $edcf132a9284368a$var$AXIS_SIZE = {
  top: "height",
  left: "width"
};
const $edcf132a9284368a$var$TOTAL_SIZE = {
  width: "totalWidth",
  height: "totalHeight"
};
const $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE = {};
let $edcf132a9284368a$var$getVisualViewport = () => typeof document !== "undefined" ? window.visualViewport : null;
function $edcf132a9284368a$var$getContainerDimensions(containerNode, visualViewport) {
  let width = 0, height = 0, totalWidth = 0, totalHeight = 0, top = 0, left = 0;
  let scroll = {};
  var _visualViewport_scale;
  let isPinchZoomedIn = ((_visualViewport_scale = visualViewport === null || visualViewport === void 0 ? void 0 : visualViewport.scale) !== null && _visualViewport_scale !== void 0 ? _visualViewport_scale : 1) > 1;
  if (containerNode.tagName === "BODY" || containerNode.tagName === "HTML") {
    let documentElement = document.documentElement;
    totalWidth = documentElement.clientWidth;
    totalHeight = documentElement.clientHeight;
    var _visualViewport_width;
    width = (_visualViewport_width = visualViewport === null || visualViewport === void 0 ? void 0 : visualViewport.width) !== null && _visualViewport_width !== void 0 ? _visualViewport_width : totalWidth;
    var _visualViewport_height;
    height = (_visualViewport_height = visualViewport === null || visualViewport === void 0 ? void 0 : visualViewport.height) !== null && _visualViewport_height !== void 0 ? _visualViewport_height : totalHeight;
    scroll.top = documentElement.scrollTop || containerNode.scrollTop;
    scroll.left = documentElement.scrollLeft || containerNode.scrollLeft;
    if (visualViewport) {
      top = visualViewport.offsetTop;
      left = visualViewport.offsetLeft;
    }
  } else {
    ({ width, height, top, left } = $edcf132a9284368a$var$getOffset(containerNode, false));
    scroll.top = containerNode.scrollTop;
    scroll.left = containerNode.scrollLeft;
    totalWidth = width;
    totalHeight = height;
  }
  if ($2add3ce32c6007eb$export$78551043582a6a98() && (containerNode.tagName === "BODY" || containerNode.tagName === "HTML") && isPinchZoomedIn) {
    scroll.top = 0;
    scroll.left = 0;
    var _visualViewport_pageTop;
    top = (_visualViewport_pageTop = visualViewport === null || visualViewport === void 0 ? void 0 : visualViewport.pageTop) !== null && _visualViewport_pageTop !== void 0 ? _visualViewport_pageTop : 0;
    var _visualViewport_pageLeft;
    left = (_visualViewport_pageLeft = visualViewport === null || visualViewport === void 0 ? void 0 : visualViewport.pageLeft) !== null && _visualViewport_pageLeft !== void 0 ? _visualViewport_pageLeft : 0;
  }
  return {
    width,
    height,
    totalWidth,
    totalHeight,
    scroll,
    top,
    left
  };
}
function $edcf132a9284368a$var$getScroll(node) {
  return {
    top: node.scrollTop,
    left: node.scrollLeft,
    width: node.scrollWidth,
    height: node.scrollHeight
  };
}
function $edcf132a9284368a$var$getDelta(axis, offset, size, boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary) {
  var _containerDimensions_scroll_axis;
  let containerScroll = (_containerDimensions_scroll_axis = containerDimensions.scroll[axis]) !== null && _containerDimensions_scroll_axis !== void 0 ? _containerDimensions_scroll_axis : 0;
  let boundarySize = boundaryDimensions[$edcf132a9284368a$var$AXIS_SIZE[axis]];
  let boundaryStartEdge = containerOffsetWithBoundary[axis] + boundaryDimensions.scroll[$edcf132a9284368a$var$AXIS[axis]] + padding;
  let boundaryEndEdge = containerOffsetWithBoundary[axis] + boundaryDimensions.scroll[$edcf132a9284368a$var$AXIS[axis]] + boundarySize - padding;
  let startEdgeOffset = offset - containerScroll + boundaryDimensions.scroll[$edcf132a9284368a$var$AXIS[axis]] + containerOffsetWithBoundary[axis] - boundaryDimensions[$edcf132a9284368a$var$AXIS[axis]];
  let endEdgeOffset = offset - containerScroll + size + boundaryDimensions.scroll[$edcf132a9284368a$var$AXIS[axis]] + containerOffsetWithBoundary[axis] - boundaryDimensions[$edcf132a9284368a$var$AXIS[axis]];
  if (startEdgeOffset < boundaryStartEdge) return boundaryStartEdge - startEdgeOffset;
  else if (endEdgeOffset > boundaryEndEdge) return Math.max(boundaryEndEdge - endEdgeOffset, boundaryStartEdge - startEdgeOffset);
  else return 0;
}
function $edcf132a9284368a$var$getMargins(node) {
  let style = window.getComputedStyle(node);
  return {
    top: parseInt(style.marginTop, 10) || 0,
    bottom: parseInt(style.marginBottom, 10) || 0,
    left: parseInt(style.marginLeft, 10) || 0,
    right: parseInt(style.marginRight, 10) || 0
  };
}
function $edcf132a9284368a$var$parsePlacement(input) {
  if ($edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input]) return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];
  let [placement, crossPlacement] = input.split(" ");
  let axis = $edcf132a9284368a$var$AXIS[placement] || "right";
  let crossAxis = $edcf132a9284368a$var$CROSS_AXIS[axis];
  if (!$edcf132a9284368a$var$AXIS[crossPlacement]) crossPlacement = "center";
  let size = $edcf132a9284368a$var$AXIS_SIZE[axis];
  let crossSize = $edcf132a9284368a$var$AXIS_SIZE[crossAxis];
  $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input] = {
    placement,
    crossPlacement,
    axis,
    crossAxis,
    size,
    crossSize
  };
  return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];
}
function $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions) {
  let { placement, crossPlacement, axis, crossAxis, size, crossSize } = placementInfo;
  let position = {};
  var _childOffset_crossAxis;
  position[crossAxis] = (_childOffset_crossAxis = childOffset[crossAxis]) !== null && _childOffset_crossAxis !== void 0 ? _childOffset_crossAxis : 0;
  var _childOffset_crossSize, _overlaySize_crossSize, _childOffset_crossSize1, _overlaySize_crossSize1;
  if (crossPlacement === "center")
    position[crossAxis] += (((_childOffset_crossSize = childOffset[crossSize]) !== null && _childOffset_crossSize !== void 0 ? _childOffset_crossSize : 0) - ((_overlaySize_crossSize = overlaySize[crossSize]) !== null && _overlaySize_crossSize !== void 0 ? _overlaySize_crossSize : 0)) / 2;
  else if (crossPlacement !== crossAxis)
    position[crossAxis] += ((_childOffset_crossSize1 = childOffset[crossSize]) !== null && _childOffset_crossSize1 !== void 0 ? _childOffset_crossSize1 : 0) - ((_overlaySize_crossSize1 = overlaySize[crossSize]) !== null && _overlaySize_crossSize1 !== void 0 ? _overlaySize_crossSize1 : 0);
  position[crossAxis] += crossOffset;
  const minPosition = childOffset[crossAxis] - overlaySize[crossSize] + arrowSize + arrowBoundaryOffset;
  const maxPosition = childOffset[crossAxis] + childOffset[crossSize] - arrowSize - arrowBoundaryOffset;
  position[crossAxis] = $240e9101ba2842f5$export$7d15b64cf5a3a4c4(position[crossAxis], minPosition, maxPosition);
  if (placement === axis) {
    let containerHeight = isContainerPositioned ? containerDimensions[size] : containerDimensions[$edcf132a9284368a$var$TOTAL_SIZE[size]];
    position[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] = Math.floor(containerHeight - childOffset[axis] + offset);
  } else position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
  return position;
}
function $edcf132a9284368a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlayHeight, heightGrowthDirection, containerDimensions, isContainerDescendentOfBoundary, visualViewport) {
  var _position_bottom, _containerDimensions_scroll_top;
  let overlayTop = (position.top != null ? position.top : containerDimensions[$edcf132a9284368a$var$TOTAL_SIZE.height] - ((_position_bottom = position.bottom) !== null && _position_bottom !== void 0 ? _position_bottom : 0) - overlayHeight) - ((_containerDimensions_scroll_top = containerDimensions.scroll.top) !== null && _containerDimensions_scroll_top !== void 0 ? _containerDimensions_scroll_top : 0);
  let boundaryToContainerTransformOffset = isContainerDescendentOfBoundary ? containerOffsetWithBoundary.top : 0;
  var _visualViewport_offsetTop, _visualViewport_offsetTop1, _visualViewport_height;
  let boundingRect = {
    // This should be boundary top in container coord system vs viewport top in container coord system
    // For the viewport top, there are several cases
    // 1. pinchzoom case where we want the viewports offset top as top here
    // 2. case where container is offset from the boundary and is contained by the boundary. In this case the top we want here is NOT 0, we want to take boundary's top even though is is a negative number OR the visual viewport, whichever is more restrictive
    top: Math.max(boundaryDimensions.top + boundaryToContainerTransformOffset, ((_visualViewport_offsetTop = visualViewport === null || visualViewport === void 0 ? void 0 : visualViewport.offsetTop) !== null && _visualViewport_offsetTop !== void 0 ? _visualViewport_offsetTop : boundaryDimensions.top) + boundaryToContainerTransformOffset),
    bottom: Math.min(boundaryDimensions.top + boundaryDimensions.height + boundaryToContainerTransformOffset, ((_visualViewport_offsetTop1 = visualViewport === null || visualViewport === void 0 ? void 0 : visualViewport.offsetTop) !== null && _visualViewport_offsetTop1 !== void 0 ? _visualViewport_offsetTop1 : 0) + ((_visualViewport_height = visualViewport === null || visualViewport === void 0 ? void 0 : visualViewport.height) !== null && _visualViewport_height !== void 0 ? _visualViewport_height : 0))
  };
  var _margins_top, _margins_bottom, _margins_top1, _margins_bottom1;
  let maxHeight = heightGrowthDirection !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, boundingRect.bottom - overlayTop - (((_margins_top = margins.top) !== null && _margins_top !== void 0 ? _margins_top : 0) + ((_margins_bottom = margins.bottom) !== null && _margins_bottom !== void 0 ? _margins_bottom : 0) + padding))
  ) : Math.max(0, overlayTop + overlayHeight - boundingRect.top - (((_margins_top1 = margins.top) !== null && _margins_top1 !== void 0 ? _margins_top1 : 0) + ((_margins_bottom1 = margins.bottom) !== null && _margins_bottom1 !== void 0 ? _margins_bottom1 : 0) + padding));
  return maxHeight;
}
function $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding, placementInfo, containerDimensions, isContainerDescendentOfBoundary) {
  let { placement, axis, size } = placementInfo;
  var _containerDimensions_scroll_axis, _margins_axis;
  if (placement === axis) return Math.max(0, childOffset[axis] - ((_containerDimensions_scroll_axis = containerDimensions.scroll[axis]) !== null && _containerDimensions_scroll_axis !== void 0 ? _containerDimensions_scroll_axis : 0) - (boundaryDimensions[axis] + (isContainerDescendentOfBoundary ? containerOffsetWithBoundary[axis] : 0)) - ((_margins_axis = margins[axis]) !== null && _margins_axis !== void 0 ? _margins_axis : 0) - margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] - padding);
  var _containerDimensions_scroll_axis1, _margins_axis1;
  return Math.max(0, boundaryDimensions[size] + boundaryDimensions[axis] + (isContainerDescendentOfBoundary ? containerOffsetWithBoundary[axis] : 0) - childOffset[axis] - childOffset[size] + ((_containerDimensions_scroll_axis1 = containerDimensions.scroll[axis]) !== null && _containerDimensions_scroll_axis1 !== void 0 ? _containerDimensions_scroll_axis1 : 0) - ((_margins_axis1 = margins[axis]) !== null && _margins_axis1 !== void 0 ? _margins_axis1 : 0) - margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] - padding);
}
function $edcf132a9284368a$export$6839422d1f33cee9(placementInput, childOffset, overlaySize, scrollSize, margins, padding, flip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, userSetMaxHeight, arrowSize, arrowBoundaryOffset, isContainerDescendentOfBoundary, visualViewport) {
  let placementInfo = $edcf132a9284368a$var$parsePlacement(placementInput);
  let { size, crossAxis, crossSize, placement, crossPlacement } = placementInfo;
  let position = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions);
  let normalizedOffset = offset;
  let space = $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, placementInfo, containerDimensions, isContainerDescendentOfBoundary);
  if (flip && overlaySize[size] > space) {
    let flippedPlacementInfo = $edcf132a9284368a$var$parsePlacement(`${$edcf132a9284368a$var$FLIPPED_DIRECTION[placement]} ${crossPlacement}`);
    let flippedPosition = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, flippedPlacementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions);
    let flippedSpace = $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, flippedPlacementInfo, containerDimensions, isContainerDescendentOfBoundary);
    if (flippedSpace > space) {
      placementInfo = flippedPlacementInfo;
      position = flippedPosition;
      normalizedOffset = offset;
    }
  }
  let heightGrowthDirection = "bottom";
  if (placementInfo.axis === "top") {
    if (placementInfo.placement === "top") heightGrowthDirection = "top";
    else if (placementInfo.placement === "bottom") heightGrowthDirection = "bottom";
  } else if (placementInfo.crossAxis === "top") {
    if (placementInfo.crossPlacement === "top") heightGrowthDirection = "bottom";
    else if (placementInfo.crossPlacement === "bottom") heightGrowthDirection = "top";
  }
  let delta = $edcf132a9284368a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
  position[crossAxis] += delta;
  let maxHeight = $edcf132a9284368a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlaySize.height, heightGrowthDirection, containerDimensions, isContainerDescendentOfBoundary, visualViewport);
  if (userSetMaxHeight && userSetMaxHeight < maxHeight) maxHeight = userSetMaxHeight;
  overlaySize.height = Math.min(overlaySize.height, maxHeight);
  position = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, normalizedOffset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions);
  delta = $edcf132a9284368a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
  position[crossAxis] += delta;
  let arrowPosition = {};
  let origin = childOffset[crossAxis] - position[crossAxis] - margins[$edcf132a9284368a$var$AXIS[crossAxis]];
  let preferredArrowPosition = origin + 0.5 * childOffset[crossSize];
  const arrowMinPosition = arrowSize / 2 + arrowBoundaryOffset;
  var _margins_left, _margins_right, _margins_top, _margins_bottom;
  const overlayMargin = $edcf132a9284368a$var$AXIS[crossAxis] === "left" ? ((_margins_left = margins.left) !== null && _margins_left !== void 0 ? _margins_left : 0) + ((_margins_right = margins.right) !== null && _margins_right !== void 0 ? _margins_right : 0) : ((_margins_top = margins.top) !== null && _margins_top !== void 0 ? _margins_top : 0) + ((_margins_bottom = margins.bottom) !== null && _margins_bottom !== void 0 ? _margins_bottom : 0);
  const arrowMaxPosition = overlaySize[crossSize] - overlayMargin - arrowSize / 2 - arrowBoundaryOffset;
  const arrowOverlappingChildMinEdge = childOffset[crossAxis] + arrowSize / 2 - (position[crossAxis] + margins[$edcf132a9284368a$var$AXIS[crossAxis]]);
  const arrowOverlappingChildMaxEdge = childOffset[crossAxis] + childOffset[crossSize] - arrowSize / 2 - (position[crossAxis] + margins[$edcf132a9284368a$var$AXIS[crossAxis]]);
  const arrowPositionOverlappingChild = $240e9101ba2842f5$export$7d15b64cf5a3a4c4(preferredArrowPosition, arrowOverlappingChildMinEdge, arrowOverlappingChildMaxEdge);
  arrowPosition[crossAxis] = $240e9101ba2842f5$export$7d15b64cf5a3a4c4(arrowPositionOverlappingChild, arrowMinPosition, arrowMaxPosition);
  ({ placement, crossPlacement } = placementInfo);
  if (arrowSize) origin = arrowPosition[crossAxis];
  else if (crossPlacement === "right") origin += childOffset[crossSize];
  else if (crossPlacement === "center") origin += childOffset[crossSize] / 2;
  let crossOrigin = placement === "left" || placement === "top" ? overlaySize[size] : 0;
  let triggerAnchorPoint = {
    x: placement === "top" || placement === "bottom" ? origin : crossOrigin,
    y: placement === "left" || placement === "right" ? origin : crossOrigin
  };
  return {
    position,
    maxHeight,
    arrowOffsetLeft: arrowPosition.left,
    arrowOffsetTop: arrowPosition.top,
    placement,
    triggerAnchorPoint
  };
}
function $edcf132a9284368a$export$b3ceb0cbf1056d98(opts) {
  let { placement, targetNode, overlayNode, scrollNode, padding, shouldFlip, boundaryElement, offset, crossOffset, maxHeight, arrowSize = 0, arrowBoundaryOffset = 0 } = opts;
  let visualViewport = $edcf132a9284368a$var$getVisualViewport();
  let container = overlayNode instanceof HTMLElement ? $edcf132a9284368a$var$getContainingBlock(overlayNode) : document.documentElement;
  let isViewportContainer = container === document.documentElement;
  const containerPositionStyle = window.getComputedStyle(container).position;
  let isContainerPositioned = !!containerPositionStyle && containerPositionStyle !== "static";
  let childOffset = isViewportContainer ? $edcf132a9284368a$var$getOffset(targetNode, false) : $edcf132a9284368a$var$getPosition(targetNode, container, false);
  if (!isViewportContainer) {
    let { marginTop, marginLeft } = window.getComputedStyle(targetNode);
    childOffset.top += parseInt(marginTop, 10) || 0;
    childOffset.left += parseInt(marginLeft, 10) || 0;
  }
  let overlaySize = $edcf132a9284368a$var$getOffset(overlayNode, true);
  let margins = $edcf132a9284368a$var$getMargins(overlayNode);
  var _margins_left, _margins_right;
  overlaySize.width += ((_margins_left = margins.left) !== null && _margins_left !== void 0 ? _margins_left : 0) + ((_margins_right = margins.right) !== null && _margins_right !== void 0 ? _margins_right : 0);
  var _margins_top, _margins_bottom;
  overlaySize.height += ((_margins_top = margins.top) !== null && _margins_top !== void 0 ? _margins_top : 0) + ((_margins_bottom = margins.bottom) !== null && _margins_bottom !== void 0 ? _margins_bottom : 0);
  let scrollSize = $edcf132a9284368a$var$getScroll(scrollNode);
  let boundaryDimensions = $edcf132a9284368a$var$getContainerDimensions(boundaryElement, visualViewport);
  let containerDimensions = $edcf132a9284368a$var$getContainerDimensions(container, visualViewport);
  let containerOffsetWithBoundary;
  if ((boundaryElement.tagName === "BODY" || boundaryElement.tagName === "HTML") && !isViewportContainer) {
    let containerRect = $edcf132a9284368a$export$4b834cebd9e5cebe(container, false);
    containerOffsetWithBoundary = {
      top: -(containerRect.top - boundaryDimensions.top),
      left: -(containerRect.left - boundaryDimensions.left),
      width: 0,
      height: 0
    };
  } else if ((boundaryElement.tagName === "BODY" || boundaryElement.tagName === "HTML") && isViewportContainer)
    containerOffsetWithBoundary = {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
  else
    containerOffsetWithBoundary = $edcf132a9284368a$var$getPosition(boundaryElement, container, false);
  let isContainerDescendentOfBoundary = $23f2114a1b82827e$export$4282f70798064fe0(boundaryElement, container);
  return $edcf132a9284368a$export$6839422d1f33cee9(placement, childOffset, overlaySize, scrollSize, margins, padding, shouldFlip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, maxHeight, arrowSize, arrowBoundaryOffset, isContainerDescendentOfBoundary, visualViewport);
}
function $edcf132a9284368a$export$4b834cebd9e5cebe(node, ignoreScale) {
  let { top, left, width, height } = node.getBoundingClientRect();
  if (ignoreScale && node instanceof node.ownerDocument.defaultView.HTMLElement) {
    width = node.offsetWidth;
    height = node.offsetHeight;
  }
  return {
    top,
    left,
    width,
    height
  };
}
function $edcf132a9284368a$var$getOffset(node, ignoreScale) {
  let { top, left, width, height } = $edcf132a9284368a$export$4b834cebd9e5cebe(node, ignoreScale);
  let { scrollTop, scrollLeft, clientTop, clientLeft } = document.documentElement;
  return {
    top: top + scrollTop - clientTop,
    left: left + scrollLeft - clientLeft,
    width,
    height
  };
}
function $edcf132a9284368a$var$getPosition(node, parent, ignoreScale) {
  let style = window.getComputedStyle(node);
  let offset;
  if (style.position === "fixed") offset = $edcf132a9284368a$export$4b834cebd9e5cebe(node, ignoreScale);
  else {
    offset = $edcf132a9284368a$var$getOffset(node, ignoreScale);
    let parentOffset = $edcf132a9284368a$var$getOffset(parent, ignoreScale);
    let parentStyle = window.getComputedStyle(parent);
    parentOffset.top += (parseInt(parentStyle.borderTopWidth, 10) || 0) - parent.scrollTop;
    parentOffset.left += (parseInt(parentStyle.borderLeftWidth, 10) || 0) - parent.scrollLeft;
    offset.top -= parentOffset.top;
    offset.left -= parentOffset.left;
  }
  offset.top -= parseInt(style.marginTop, 10) || 0;
  offset.left -= parseInt(style.marginLeft, 10) || 0;
  return offset;
}
function $edcf132a9284368a$var$getContainingBlock(node) {
  let offsetParent = node.offsetParent;
  if (offsetParent && offsetParent === document.body && window.getComputedStyle(offsetParent).position === "static" && !$edcf132a9284368a$var$isContainingBlock(offsetParent)) offsetParent = document.documentElement;
  if (offsetParent == null) {
    offsetParent = node.parentElement;
    while (offsetParent && !$edcf132a9284368a$var$isContainingBlock(offsetParent)) offsetParent = offsetParent.parentElement;
  }
  return offsetParent || document.documentElement;
}
function $edcf132a9284368a$var$isContainingBlock(node) {
  let style = window.getComputedStyle(node);
  return style.transform !== "none" || /transform|perspective/.test(style.willChange) || style.filter !== "none" || style.contain === "paint" || "backdropFilter" in style && style.backdropFilter !== "none" || "WebkitBackdropFilter" in style && style.WebkitBackdropFilter !== "none";
}
const $dd149f63282afbbf$export$f6211563215e3b37 = /* @__PURE__ */ new WeakMap();
function $dd149f63282afbbf$export$18fc8428861184da(opts) {
  let { triggerRef, isOpen, onClose } = opts;
  reactExports.useEffect(() => {
    if (!isOpen || onClose === null) return;
    let onScroll = (e) => {
      let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
      if (!triggerRef.current || target instanceof Node && !$23f2114a1b82827e$export$4282f70798064fe0(target, triggerRef.current)) return;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
      let onCloseHandler = onClose || $dd149f63282afbbf$export$f6211563215e3b37.get(triggerRef.current);
      if (onCloseHandler) onCloseHandler();
    };
    window.addEventListener("scroll", onScroll, true);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [
    isOpen,
    onClose,
    triggerRef
  ]);
}
let $673d46fce3e5717d$var$cache = /* @__PURE__ */ new Map();
function $673d46fce3e5717d$export$a16aca283550c30d(options) {
  let { locale } = $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7();
  let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : "");
  if ($673d46fce3e5717d$var$cache.has(cacheKey)) return $673d46fce3e5717d$var$cache.get(cacheKey);
  let formatter = new Intl.Collator(locale, options);
  $673d46fce3e5717d$var$cache.set(cacheKey, formatter);
  return formatter;
}
let $2a41e45df1593e64$var$visualViewport = typeof document !== "undefined" ? window.visualViewport : null;
function $2a41e45df1593e64$export$d39e1813b3bdd0e1(props) {
  let { direction } = $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7();
  let { arrowSize, targetRef, overlayRef, arrowRef, scrollRef = overlayRef, placement = "bottom", containerPadding = 12, shouldFlip = true, boundaryElement = typeof document !== "undefined" ? document.body : null, offset = 0, crossOffset = 0, shouldUpdatePosition = true, isOpen = true, onClose, maxHeight, arrowBoundaryOffset = 0 } = props;
  let [position, setPosition] = reactExports.useState(null);
  let deps = [
    shouldUpdatePosition,
    placement,
    overlayRef.current,
    targetRef.current,
    arrowRef === null || arrowRef === void 0 ? void 0 : arrowRef.current,
    scrollRef.current,
    containerPadding,
    shouldFlip,
    boundaryElement,
    offset,
    crossOffset,
    isOpen,
    direction,
    maxHeight,
    arrowBoundaryOffset,
    arrowSize
  ];
  let lastScale = reactExports.useRef($2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.scale);
  reactExports.useEffect(() => {
    if (isOpen) lastScale.current = $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.scale;
  }, [
    isOpen
  ]);
  let updatePosition = reactExports.useCallback(() => {
    if (shouldUpdatePosition === false || !isOpen || !overlayRef.current || !targetRef.current || !boundaryElement) return;
    if (($2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.scale) !== lastScale.current) return;
    let anchor = null;
    if (scrollRef.current && $23f2114a1b82827e$export$b4f377a2b6254582(scrollRef.current)) {
      var _getActiveElement;
      let anchorRect = (_getActiveElement = $23f2114a1b82827e$export$cd4e5573fbe2b576()) === null || _getActiveElement === void 0 ? void 0 : _getActiveElement.getBoundingClientRect();
      let scrollRect = scrollRef.current.getBoundingClientRect();
      var _anchorRect_top;
      anchor = {
        type: "top",
        offset: ((_anchorRect_top = anchorRect === null || anchorRect === void 0 ? void 0 : anchorRect.top) !== null && _anchorRect_top !== void 0 ? _anchorRect_top : 0) - scrollRect.top
      };
      if (anchor.offset > scrollRect.height / 2) {
        anchor.type = "bottom";
        var _anchorRect_bottom;
        anchor.offset = ((_anchorRect_bottom = anchorRect === null || anchorRect === void 0 ? void 0 : anchorRect.bottom) !== null && _anchorRect_bottom !== void 0 ? _anchorRect_bottom : 0) - scrollRect.bottom;
      }
    }
    let overlay = overlayRef.current;
    if (!maxHeight && overlayRef.current) {
      var _window_visualViewport;
      overlay.style.top = "0px";
      overlay.style.bottom = "";
      var _window_visualViewport_height;
      overlay.style.maxHeight = ((_window_visualViewport_height = (_window_visualViewport = window.visualViewport) === null || _window_visualViewport === void 0 ? void 0 : _window_visualViewport.height) !== null && _window_visualViewport_height !== void 0 ? _window_visualViewport_height : window.innerHeight) + "px";
    }
    let position2 = $edcf132a9284368a$export$b3ceb0cbf1056d98({
      placement: $2a41e45df1593e64$var$translateRTL(placement, direction),
      overlayNode: overlayRef.current,
      targetNode: targetRef.current,
      scrollNode: scrollRef.current || overlayRef.current,
      padding: containerPadding,
      shouldFlip,
      boundaryElement,
      offset,
      crossOffset,
      maxHeight,
      arrowSize: arrowSize !== null && arrowSize !== void 0 ? arrowSize : (arrowRef === null || arrowRef === void 0 ? void 0 : arrowRef.current) ? $edcf132a9284368a$export$4b834cebd9e5cebe(arrowRef.current, true).width : 0,
      arrowBoundaryOffset
    });
    if (!position2.position) return;
    overlay.style.top = "";
    overlay.style.bottom = "";
    overlay.style.left = "";
    overlay.style.right = "";
    Object.keys(position2.position).forEach((key) => overlay.style[key] = position2.position[key] + "px");
    overlay.style.maxHeight = position2.maxHeight != null ? position2.maxHeight + "px" : "";
    let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576();
    if (anchor && activeElement && scrollRef.current) {
      let anchorRect = activeElement.getBoundingClientRect();
      let scrollRect = scrollRef.current.getBoundingClientRect();
      let newOffset = anchorRect[anchor.type] - scrollRect[anchor.type];
      scrollRef.current.scrollTop += newOffset - anchor.offset;
    }
    setPosition(position2);
  }, deps);
  $c4867b2f328c2698$export$e5c5a5f917a5871c(updatePosition, deps);
  $2a41e45df1593e64$var$useResize(updatePosition);
  $970072cf4b13fde3$export$683480f191c0e3ea({
    ref: overlayRef,
    onResize: updatePosition
  });
  $970072cf4b13fde3$export$683480f191c0e3ea({
    ref: targetRef,
    onResize: updatePosition
  });
  let isResizing = reactExports.useRef(false);
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    let timeout;
    let onResize = () => {
      isResizing.current = true;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isResizing.current = false;
      }, 500);
      updatePosition();
    };
    let onScroll = () => {
      if (isResizing.current) onResize();
    };
    $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.addEventListener("resize", onResize);
    $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.addEventListener("scroll", onScroll);
    return () => {
      $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.removeEventListener("resize", onResize);
      $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.removeEventListener("scroll", onScroll);
    };
  }, [
    updatePosition
  ]);
  let close = reactExports.useCallback(() => {
    if (!isResizing.current) onClose === null || onClose === void 0 ? void 0 : onClose();
  }, [
    onClose,
    isResizing
  ]);
  $dd149f63282afbbf$export$18fc8428861184da({
    triggerRef: targetRef,
    isOpen,
    onClose: onClose && close
  });
  var _position_maxHeight, _position_placement, _position_triggerAnchorPoint;
  return {
    overlayProps: {
      style: {
        position: position ? "absolute" : "fixed",
        top: !position ? 0 : void 0,
        left: !position ? 0 : void 0,
        zIndex: 1e5,
        ...position === null || position === void 0 ? void 0 : position.position,
        maxHeight: (_position_maxHeight = position === null || position === void 0 ? void 0 : position.maxHeight) !== null && _position_maxHeight !== void 0 ? _position_maxHeight : "100vh"
      }
    },
    placement: (_position_placement = position === null || position === void 0 ? void 0 : position.placement) !== null && _position_placement !== void 0 ? _position_placement : null,
    triggerAnchorPoint: (_position_triggerAnchorPoint = position === null || position === void 0 ? void 0 : position.triggerAnchorPoint) !== null && _position_triggerAnchorPoint !== void 0 ? _position_triggerAnchorPoint : null,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: position === null || position === void 0 ? void 0 : position.arrowOffsetLeft,
        top: position === null || position === void 0 ? void 0 : position.arrowOffsetTop
      }
    },
    updatePosition
  };
}
function $2a41e45df1593e64$var$useResize(onResize) {
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    window.addEventListener("resize", onResize, false);
    return () => {
      window.removeEventListener("resize", onResize, false);
    };
  }, [
    onResize
  ]);
}
function $2a41e45df1593e64$var$translateRTL(position, direction) {
  if (direction === "rtl") return position.replace("start", "right").replace("end", "left");
  return position.replace("start", "left").replace("end", "right");
}
function $e0b6e0b68ec7f50f$export$872b660ac5a1ff98(props) {
  let { ref, onInteractOutside, isDisabled, onInteractOutsideStart } = props;
  let stateRef = reactExports.useRef({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false
  });
  let onPointerDown = $fe16bffc7a557bf0$export$7f54fc3180508a52((e) => {
    if (onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
      if (onInteractOutsideStart) onInteractOutsideStart(e);
      stateRef.current.isPointerDown = true;
    }
  });
  let triggerInteractOutside = $fe16bffc7a557bf0$export$7f54fc3180508a52((e) => {
    if (onInteractOutside) onInteractOutside(e);
  });
  reactExports.useEffect(() => {
    let state = stateRef.current;
    if (isDisabled) return;
    const element = ref.current;
    const documentObject = $d447af545b77c9f1$export$b204af158042fbac(element);
    if (typeof PointerEvent !== "undefined") {
      let onClick = (e) => {
        if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
        state.isPointerDown = false;
      };
      documentObject.addEventListener("pointerdown", onPointerDown, true);
      documentObject.addEventListener("click", onClick, true);
      return () => {
        documentObject.removeEventListener("pointerdown", onPointerDown, true);
        documentObject.removeEventListener("click", onClick, true);
      };
    }
  }, [
    ref,
    isDisabled
  ]);
}
function $e0b6e0b68ec7f50f$var$isValidEvent(event, ref) {
  if (event.button > 0) return false;
  let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(event);
  if (target) {
    const ownerDocument = target.ownerDocument;
    if (!ownerDocument || !$23f2114a1b82827e$export$4282f70798064fe0(ownerDocument.documentElement, target)) return false;
    if (target.closest("[data-react-aria-top-layer]")) return false;
  }
  if (!ref.current) return false;
  return !event.composedPath().includes(ref.current);
}
const $9bf71ea28793e738$var$FocusContext = /* @__PURE__ */ $4d1jn$react.createContext(null);
const $9bf71ea28793e738$var$RESTORE_FOCUS_EVENT = "react-aria-focus-scope-restore";
let $9bf71ea28793e738$var$activeScope = null;
function $9bf71ea28793e738$export$20e40289641fbbb6(props) {
  let { children, contain, restoreFocus, autoFocus } = props;
  let startRef = reactExports.useRef(null);
  let endRef = reactExports.useRef(null);
  let scopeRef = reactExports.useRef([]);
  let { parentNode } = reactExports.useContext($9bf71ea28793e738$var$FocusContext) || {};
  let node = reactExports.useMemo(() => new $9bf71ea28793e738$var$TreeNode({
    scopeRef
  }), [
    scopeRef
  ]);
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    let parent = parentNode || $9bf71ea28793e738$export$d06fae2ee68b101e.root;
    if ($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parent.scopeRef) && $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, parent.scopeRef)) {
      let activeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
      if (activeNode) parent = activeNode;
    }
    parent.addChild(node);
    $9bf71ea28793e738$export$d06fae2ee68b101e.addNode(node);
  }, [
    node,
    parentNode
  ]);
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    let node2 = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
    if (node2) node2.contain = !!contain;
  }, [
    contain
  ]);
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    var _startRef_current;
    let node2 = (_startRef_current = startRef.current) === null || _startRef_current === void 0 ? void 0 : _startRef_current.nextSibling;
    let nodes = [];
    let stopPropagation = (e) => e.stopPropagation();
    while (node2 && node2 !== endRef.current) {
      nodes.push(node2);
      node2.addEventListener($9bf71ea28793e738$var$RESTORE_FOCUS_EVENT, stopPropagation);
      node2 = node2.nextSibling;
    }
    scopeRef.current = nodes;
    return () => {
      for (let node3 of nodes) node3.removeEventListener($9bf71ea28793e738$var$RESTORE_FOCUS_EVENT, stopPropagation);
    };
  }, [
    children
  ]);
  $9bf71ea28793e738$var$useActiveScopeTracker(scopeRef, restoreFocus, contain);
  $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain);
  $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain);
  $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus);
  reactExports.useEffect(() => {
    const activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576($d447af545b77c9f1$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0));
    let scope = null;
    if ($9bf71ea28793e738$var$isElementInScope(activeElement, scopeRef.current)) {
      for (let node2 of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse()) if (node2.scopeRef && $9bf71ea28793e738$var$isElementInScope(activeElement, node2.scopeRef.current)) scope = node2;
      if (scope === $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef)) $9bf71ea28793e738$var$activeScope = scope.scopeRef;
    }
  }, [
    scopeRef
  ]);
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    return () => {
      var _focusScopeTree_getTreeNode_parent, _focusScopeTree_getTreeNode;
      var _focusScopeTree_getTreeNode_parent_scopeRef;
      let parentScope = (_focusScopeTree_getTreeNode_parent_scopeRef = (_focusScopeTree_getTreeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef)) === null || _focusScopeTree_getTreeNode === void 0 ? void 0 : (_focusScopeTree_getTreeNode_parent = _focusScopeTree_getTreeNode.parent) === null || _focusScopeTree_getTreeNode_parent === void 0 ? void 0 : _focusScopeTree_getTreeNode_parent.scopeRef) !== null && _focusScopeTree_getTreeNode_parent_scopeRef !== void 0 ? _focusScopeTree_getTreeNode_parent_scopeRef : null;
      if ((scopeRef === $9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope(scopeRef, $9bf71ea28793e738$var$activeScope)) && (!parentScope || $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parentScope))) $9bf71ea28793e738$var$activeScope = parentScope;
      $9bf71ea28793e738$export$d06fae2ee68b101e.removeTreeNode(scopeRef);
    };
  }, [
    scopeRef
  ]);
  let focusManager = reactExports.useMemo(() => $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef), []);
  let value = reactExports.useMemo(() => ({
    focusManager,
    parentNode: node
  }), [
    node,
    focusManager
  ]);
  return /* @__PURE__ */ $4d1jn$react.createElement($9bf71ea28793e738$var$FocusContext.Provider, {
    value
  }, /* @__PURE__ */ $4d1jn$react.createElement("span", {
    "data-focus-scope-start": true,
    hidden: true,
    ref: startRef
  }), children, /* @__PURE__ */ $4d1jn$react.createElement("span", {
    "data-focus-scope-end": true,
    hidden: true,
    ref: endRef
  }));
}
function $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef) {
  return {
    focusNext(opts = {}) {
      let scope = scopeRef.current;
      let { from, tabbable, wrap, accept } = opts;
      var _scope_;
      let node = from || $23f2114a1b82827e$export$cd4e5573fbe2b576($d447af545b77c9f1$export$b204af158042fbac((_scope_ = scope[0]) !== null && _scope_ !== void 0 ? _scope_ : void 0));
      let sentinel = scope[0].previousElementSibling;
      let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
        tabbable,
        accept
      }, scope);
      walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
      let nextNode = walker.nextNode();
      if (!nextNode && wrap) {
        walker.currentNode = sentinel;
        nextNode = walker.nextNode();
      }
      if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
      return nextNode;
    },
    focusPrevious(opts = {}) {
      let scope = scopeRef.current;
      let { from, tabbable, wrap, accept } = opts;
      var _scope_;
      let node = from || $23f2114a1b82827e$export$cd4e5573fbe2b576($d447af545b77c9f1$export$b204af158042fbac((_scope_ = scope[0]) !== null && _scope_ !== void 0 ? _scope_ : void 0));
      let sentinel = scope[scope.length - 1].nextElementSibling;
      let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
        tabbable,
        accept
      }, scope);
      walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
      let previousNode = walker.previousNode();
      if (!previousNode && wrap) {
        walker.currentNode = sentinel;
        previousNode = walker.previousNode();
      }
      if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
      return previousNode;
    },
    focusFirst(opts = {}) {
      let scope = scopeRef.current;
      let { tabbable, accept } = opts;
      let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
        tabbable,
        accept
      }, scope);
      walker.currentNode = scope[0].previousElementSibling;
      let nextNode = walker.nextNode();
      if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
      return nextNode;
    },
    focusLast(opts = {}) {
      let scope = scopeRef.current;
      let { tabbable, accept } = opts;
      let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
        tabbable,
        accept
      }, scope);
      walker.currentNode = scope[scope.length - 1].nextElementSibling;
      let previousNode = walker.previousNode();
      if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
      return previousNode;
    }
  };
}
function $9bf71ea28793e738$var$getScopeRoot(scope) {
  return scope[0].parentElement;
}
function $9bf71ea28793e738$var$shouldContainFocus(scopeRef) {
  let scope = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
  while (scope && scope.scopeRef !== scopeRef) {
    if (scope.contain) return false;
    scope = scope.parent;
  }
  return true;
}
function $9bf71ea28793e738$var$getRadiosInGroup(element) {
  if (!element.form)
    return Array.from($d447af545b77c9f1$export$b204af158042fbac(element).querySelectorAll(`input[type="radio"][name="${CSS.escape(element.name)}"]`)).filter((radio) => !radio.form);
  const radioList = element.form.elements.namedItem(element.name);
  let ownerWindow = $d447af545b77c9f1$export$f21a1ffae260145a(element);
  if (radioList instanceof ownerWindow.RadioNodeList) return Array.from(radioList).filter((el) => el instanceof ownerWindow.HTMLInputElement);
  if (radioList instanceof ownerWindow.HTMLInputElement) return [
    radioList
  ];
  return [];
}
function $9bf71ea28793e738$var$isTabbableRadio(element) {
  if (element.checked) return true;
  const radios = $9bf71ea28793e738$var$getRadiosInGroup(element);
  return radios.length > 0 && !radios.some((radio) => radio.checked);
}
function $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain) {
  let focusedNode = reactExports.useRef(void 0);
  let raf = reactExports.useRef(void 0);
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    let scope = scopeRef.current;
    if (!contain) {
      if (raf.current) {
        cancelAnimationFrame(raf.current);
        raf.current = void 0;
      }
      return;
    }
    const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(scope ? scope[0] : void 0);
    let onKeyDown = (e) => {
      if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey || !$9bf71ea28793e738$var$shouldContainFocus(scopeRef) || e.isComposing) return;
      let focusedElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
      let scope2 = scopeRef.current;
      if (!scope2 || !$9bf71ea28793e738$var$isElementInScope(focusedElement, scope2)) return;
      let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope2);
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
        tabbable: true
      }, scope2);
      if (!focusedElement) return;
      walker.currentNode = focusedElement;
      let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
      if (!nextElement) {
        walker.currentNode = e.shiftKey ? scope2[scope2.length - 1].nextElementSibling : scope2[0].previousElementSibling;
        nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
      }
      e.preventDefault();
      if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
    };
    let onFocus = (e) => {
      if ((!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) && $9bf71ea28793e738$var$isElementInScope($23f2114a1b82827e$export$e58f029f0fbfdb29(e), scopeRef.current)) {
        $9bf71ea28793e738$var$activeScope = scopeRef;
        focusedNode.current = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
      } else if ($9bf71ea28793e738$var$shouldContainFocus(scopeRef) && !$9bf71ea28793e738$var$isElementInChildScope($23f2114a1b82827e$export$e58f029f0fbfdb29(e), scopeRef)) {
        if (focusedNode.current) focusedNode.current.focus();
        else if ($9bf71ea28793e738$var$activeScope && $9bf71ea28793e738$var$activeScope.current) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
      } else if ($9bf71ea28793e738$var$shouldContainFocus(scopeRef)) focusedNode.current = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
    };
    let onBlur = (e) => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        let modality = $507fabe10e71c6fb$export$630ff653c5ada6a9();
        let shouldSkipFocusRestore = (modality === "virtual" || modality === null) && $2add3ce32c6007eb$export$a11b0059900ceec8() && $2add3ce32c6007eb$export$6446a186d09e379e();
        let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
        if (!shouldSkipFocusRestore && activeElement && $9bf71ea28793e738$var$shouldContainFocus(scopeRef) && !$9bf71ea28793e738$var$isElementInChildScope(activeElement, scopeRef)) {
          $9bf71ea28793e738$var$activeScope = scopeRef;
          let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
          if (target && target.isConnected) {
            var _focusedNode_current;
            focusedNode.current = target;
            (_focusedNode_current = focusedNode.current) === null || _focusedNode_current === void 0 ? void 0 : _focusedNode_current.focus();
          } else if ($9bf71ea28793e738$var$activeScope.current) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
        }
      });
    };
    ownerDocument.addEventListener("keydown", onKeyDown, false);
    ownerDocument.addEventListener("focusin", onFocus, false);
    scope === null || scope === void 0 ? void 0 : scope.forEach((element) => element.addEventListener("focusin", onFocus, false));
    scope === null || scope === void 0 ? void 0 : scope.forEach((element) => element.addEventListener("focusout", onBlur, false));
    return () => {
      ownerDocument.removeEventListener("keydown", onKeyDown, false);
      ownerDocument.removeEventListener("focusin", onFocus, false);
      scope === null || scope === void 0 ? void 0 : scope.forEach((element) => element.removeEventListener("focusin", onFocus, false));
      scope === null || scope === void 0 ? void 0 : scope.forEach((element) => element.removeEventListener("focusout", onBlur, false));
    };
  }, [
    scopeRef,
    contain
  ]);
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [
    raf
  ]);
}
function $9bf71ea28793e738$var$isElementInAnyScope(element) {
  return $9bf71ea28793e738$var$isElementInChildScope(element);
}
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
  if (!element) return false;
  if (!scope) return false;
  return scope.some((node) => $23f2114a1b82827e$export$4282f70798064fe0(node, element));
}
function $9bf71ea28793e738$var$isElementInChildScope(element, scope = null) {
  if (element instanceof Element && element.closest("[data-react-aria-top-layer]")) return true;
  for (let { scopeRef: s } of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope))) {
    if (s && $9bf71ea28793e738$var$isElementInScope(element, s.current)) return true;
  }
  return false;
}
function $9bf71ea28793e738$export$1258395f99bf9cbf(element) {
  return $9bf71ea28793e738$var$isElementInChildScope(element, $9bf71ea28793e738$var$activeScope);
}
function $9bf71ea28793e738$var$isAncestorScope(ancestor, scope) {
  var _focusScopeTree_getTreeNode;
  let parent = (_focusScopeTree_getTreeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope)) === null || _focusScopeTree_getTreeNode === void 0 ? void 0 : _focusScopeTree_getTreeNode.parent;
  while (parent) {
    if (parent.scopeRef === ancestor) return true;
    parent = parent.parent;
  }
  return false;
}
function $9bf71ea28793e738$var$focusElement(element, scroll = false) {
  if (element != null && !scroll) try {
    (0, $3ad3f6e1647bc98d$export$80f3e147d781571c)(element);
  } catch {
  }
  else if (element != null) try {
    element.focus();
  } catch {
  }
}
function $9bf71ea28793e738$var$getFirstInScope(scope, tabbable = true) {
  let sentinel = scope[0].previousElementSibling;
  let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
  let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
    tabbable
  }, scope);
  walker.currentNode = sentinel;
  let nextNode = walker.nextNode();
  if (tabbable && !nextNode) {
    scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
    walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
      tabbable: false
    }, scope);
    walker.currentNode = sentinel;
    nextNode = walker.nextNode();
  }
  return nextNode;
}
function $9bf71ea28793e738$var$focusFirstInScope(scope, tabbable = true) {
  $9bf71ea28793e738$var$focusElement($9bf71ea28793e738$var$getFirstInScope(scope, tabbable));
}
function $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus) {
  const autoFocusRef = $4d1jn$react.useRef(autoFocus);
  reactExports.useEffect(() => {
    if (autoFocusRef.current) {
      $9bf71ea28793e738$var$activeScope = scopeRef;
      const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0);
      if (!$9bf71ea28793e738$var$isElementInScope($23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument), $9bf71ea28793e738$var$activeScope.current) && scopeRef.current) $9bf71ea28793e738$var$focusFirstInScope(scopeRef.current);
    }
    autoFocusRef.current = false;
  }, [
    scopeRef
  ]);
}
function $9bf71ea28793e738$var$useActiveScopeTracker(scopeRef, restore, contain) {
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    if (restore || contain) return;
    let scope = scopeRef.current;
    const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(scope ? scope[0] : void 0);
    let onFocus = (e) => {
      let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
      if ($9bf71ea28793e738$var$isElementInScope(target, scopeRef.current)) $9bf71ea28793e738$var$activeScope = scopeRef;
      else if (!$9bf71ea28793e738$var$isElementInAnyScope(target)) $9bf71ea28793e738$var$activeScope = null;
    };
    ownerDocument.addEventListener("focusin", onFocus, false);
    scope === null || scope === void 0 ? void 0 : scope.forEach((element) => element.addEventListener("focusin", onFocus, false));
    return () => {
      ownerDocument.removeEventListener("focusin", onFocus, false);
      scope === null || scope === void 0 ? void 0 : scope.forEach((element) => element.removeEventListener("focusin", onFocus, false));
    };
  }, [
    scopeRef,
    restore,
    contain
  ]);
}
function $9bf71ea28793e738$var$shouldRestoreFocus(scopeRef) {
  let scope = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
  while (scope && scope.scopeRef !== scopeRef) {
    if (scope.nodeToRestore) return false;
    scope = scope.parent;
  }
  return (scope === null || scope === void 0 ? void 0 : scope.scopeRef) === scopeRef;
}
function $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
  const nodeToRestoreRef = reactExports.useRef(typeof document !== "undefined" ? $23f2114a1b82827e$export$cd4e5573fbe2b576($d447af545b77c9f1$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0)) : null);
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    let scope = scopeRef.current;
    const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(scope ? scope[0] : void 0);
    if (!restoreFocus || contain) return;
    let onFocus = () => {
      if ((!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) && $9bf71ea28793e738$var$isElementInScope($23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument), scopeRef.current)) $9bf71ea28793e738$var$activeScope = scopeRef;
    };
    ownerDocument.addEventListener("focusin", onFocus, false);
    scope === null || scope === void 0 ? void 0 : scope.forEach((element) => element.addEventListener("focusin", onFocus, false));
    return () => {
      ownerDocument.removeEventListener("focusin", onFocus, false);
      scope === null || scope === void 0 ? void 0 : scope.forEach((element) => element.removeEventListener("focusin", onFocus, false));
    };
  }, [
    scopeRef,
    contain
  ]);
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0);
    if (!restoreFocus) return;
    let onKeyDown = (e) => {
      if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey || !$9bf71ea28793e738$var$shouldContainFocus(scopeRef) || e.isComposing) return;
      let focusedElement = ownerDocument.activeElement;
      if (!$9bf71ea28793e738$var$isElementInChildScope(focusedElement, scopeRef) || !$9bf71ea28793e738$var$shouldRestoreFocus(scopeRef)) return;
      let treeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
      if (!treeNode) return;
      let nodeToRestore = treeNode.nodeToRestore;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(ownerDocument.body, {
        tabbable: true
      });
      walker.currentNode = focusedElement;
      let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
      if (!nodeToRestore || !nodeToRestore.isConnected || nodeToRestore === ownerDocument.body) {
        nodeToRestore = void 0;
        treeNode.nodeToRestore = void 0;
      }
      if ((!nextElement || !$9bf71ea28793e738$var$isElementInChildScope(nextElement, scopeRef)) && nodeToRestore) {
        walker.currentNode = nodeToRestore;
        do
          nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
        while ($9bf71ea28793e738$var$isElementInChildScope(nextElement, scopeRef));
        e.preventDefault();
        e.stopPropagation();
        if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
        else if (!$9bf71ea28793e738$var$isElementInAnyScope(nodeToRestore)) focusedElement.blur();
        else $9bf71ea28793e738$var$focusElement(nodeToRestore, true);
      }
    };
    if (!contain) ownerDocument.addEventListener("keydown", onKeyDown, true);
    return () => {
      if (!contain) ownerDocument.removeEventListener("keydown", onKeyDown, true);
    };
  }, [
    scopeRef,
    restoreFocus,
    contain
  ]);
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0);
    if (!restoreFocus) return;
    let treeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
    if (!treeNode) return;
    var _nodeToRestoreRef_current;
    treeNode.nodeToRestore = (_nodeToRestoreRef_current = nodeToRestoreRef.current) !== null && _nodeToRestoreRef_current !== void 0 ? _nodeToRestoreRef_current : void 0;
    return () => {
      let treeNode2 = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
      if (!treeNode2) return;
      let nodeToRestore = treeNode2.nodeToRestore;
      let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
      if (restoreFocus && nodeToRestore && (activeElement && $9bf71ea28793e738$var$isElementInChildScope(activeElement, scopeRef) || activeElement === ownerDocument.body && $9bf71ea28793e738$var$shouldRestoreFocus(scopeRef))) {
        let clonedTree = $9bf71ea28793e738$export$d06fae2ee68b101e.clone();
        requestAnimationFrame(() => {
          if (ownerDocument.activeElement === ownerDocument.body) {
            let treeNode3 = clonedTree.getTreeNode(scopeRef);
            while (treeNode3) {
              if (treeNode3.nodeToRestore && treeNode3.nodeToRestore.isConnected) {
                $9bf71ea28793e738$var$restoreFocusToElement(treeNode3.nodeToRestore);
                return;
              }
              treeNode3 = treeNode3.parent;
            }
            treeNode3 = clonedTree.getTreeNode(scopeRef);
            while (treeNode3) {
              if (treeNode3.scopeRef && treeNode3.scopeRef.current && $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(treeNode3.scopeRef)) {
                let node = $9bf71ea28793e738$var$getFirstInScope(treeNode3.scopeRef.current, true);
                $9bf71ea28793e738$var$restoreFocusToElement(node);
                return;
              }
              treeNode3 = treeNode3.parent;
            }
          }
        });
      }
    };
  }, [
    scopeRef,
    restoreFocus
  ]);
}
function $9bf71ea28793e738$var$restoreFocusToElement(node) {
  if (node.dispatchEvent(new CustomEvent($9bf71ea28793e738$var$RESTORE_FOCUS_EVENT, {
    bubbles: true,
    cancelable: true
  }))) $9bf71ea28793e738$var$focusElement(node);
}
function $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, opts, scope) {
  let filter = (opts === null || opts === void 0 ? void 0 : opts.tabbable) ? $3b8b240c1bf84ab9$export$bebd5a1431fec25d : $3b8b240c1bf84ab9$export$4c063cf1350e6fed;
  let rootElement = (root === null || root === void 0 ? void 0 : root.nodeType) === Node.ELEMENT_NODE ? root : null;
  let doc = $d447af545b77c9f1$export$b204af158042fbac(rootElement);
  let walker = $654b97e09f2a30c1$export$4d0f8be8b12a7ef6(doc, root || doc, NodeFilter.SHOW_ELEMENT, {
    acceptNode(node) {
      if ($23f2114a1b82827e$export$4282f70798064fe0(opts === null || opts === void 0 ? void 0 : opts.from, node)) return NodeFilter.FILTER_REJECT;
      if ((opts === null || opts === void 0 ? void 0 : opts.tabbable) && node.tagName === "INPUT" && node.getAttribute("type") === "radio") {
        if (!$9bf71ea28793e738$var$isTabbableRadio(node)) return NodeFilter.FILTER_REJECT;
        if (walker.currentNode.tagName === "INPUT" && walker.currentNode.type === "radio" && walker.currentNode.name === node.name) return NodeFilter.FILTER_REJECT;
      }
      if (filter(node) && (!scope || $9bf71ea28793e738$var$isElementInScope(node, scope)) && (!(opts === null || opts === void 0 ? void 0 : opts.accept) || opts.accept(node))) return NodeFilter.FILTER_ACCEPT;
      return NodeFilter.FILTER_SKIP;
    }
  });
  if (opts === null || opts === void 0 ? void 0 : opts.from) walker.currentNode = opts.from;
  return walker;
}
class $9bf71ea28793e738$var$Tree {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(data) {
    return this.fastMap.get(data);
  }
  addTreeNode(scopeRef, parent, nodeToRestore) {
    let parentNode = this.fastMap.get(parent !== null && parent !== void 0 ? parent : null);
    if (!parentNode) return;
    let node = new $9bf71ea28793e738$var$TreeNode({
      scopeRef
    });
    parentNode.addChild(node);
    node.parent = parentNode;
    this.fastMap.set(scopeRef, node);
    if (nodeToRestore) node.nodeToRestore = nodeToRestore;
  }
  addNode(node) {
    this.fastMap.set(node.scopeRef, node);
  }
  removeTreeNode(scopeRef) {
    if (scopeRef === null) return;
    let node = this.fastMap.get(scopeRef);
    if (!node) return;
    let parentNode = node.parent;
    for (let current of this.traverse()) if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && $9bf71ea28793e738$var$isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
    let children = node.children;
    if (parentNode) {
      parentNode.removeChild(node);
      if (children.size > 0) children.forEach((child) => parentNode && parentNode.addChild(child));
    }
    this.fastMap.delete(node.scopeRef);
  }
  // Pre Order Depth First
  *traverse(node = this.root) {
    if (node.scopeRef != null) yield node;
    if (node.children.size > 0) for (let child of node.children) yield* this.traverse(child);
  }
  clone() {
    var _node_parent;
    let newTree = new $9bf71ea28793e738$var$Tree();
    var _node_parent_scopeRef;
    for (let node of this.traverse()) newTree.addTreeNode(node.scopeRef, (_node_parent_scopeRef = (_node_parent = node.parent) === null || _node_parent === void 0 ? void 0 : _node_parent.scopeRef) !== null && _node_parent_scopeRef !== void 0 ? _node_parent_scopeRef : null, node.nodeToRestore);
    return newTree;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map();
    this.root = new $9bf71ea28793e738$var$TreeNode({
      scopeRef: null
    });
    this.fastMap.set(null, this.root);
  }
}
class $9bf71ea28793e738$var$TreeNode {
  addChild(node) {
    this.children.add(node);
    node.parent = this;
  }
  removeChild(node) {
    this.children.delete(node);
    node.parent = void 0;
  }
  constructor(props) {
    this.children = /* @__PURE__ */ new Set();
    this.contain = false;
    this.scopeRef = props.scopeRef;
  }
}
let $9bf71ea28793e738$export$d06fae2ee68b101e = new $9bf71ea28793e738$var$Tree();
function $a92dc41f639950be$export$525bc4921d56d4a(nativeEvent) {
  let event = nativeEvent;
  event.nativeEvent = nativeEvent;
  event.isDefaultPrevented = () => event.defaultPrevented;
  event.isPropagationStopped = () => event.cancelBubble;
  event.persist = () => {
  };
  return event;
}
function $a92dc41f639950be$export$c2b7abe5d61ec696(event, target) {
  Object.defineProperty(event, "target", {
    value: target
  });
  Object.defineProperty(event, "currentTarget", {
    value: target
  });
}
function $a92dc41f639950be$export$715c682d09d639cc(onBlur) {
  let stateRef = reactExports.useRef({
    isFocused: false,
    observer: null
  });
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    const state = stateRef.current;
    return () => {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
    };
  }, []);
  return reactExports.useCallback((e) => {
    let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
    if (eventTarget instanceof HTMLButtonElement || eventTarget instanceof HTMLInputElement || eventTarget instanceof HTMLTextAreaElement || eventTarget instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = eventTarget;
      let onBlurHandler = (e2) => {
        stateRef.current.isFocused = false;
        if (target.disabled) {
          let event = $a92dc41f639950be$export$525bc4921d56d4a(e2);
          onBlur?.(event);
        }
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect();
          stateRef.current.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          stateRef.current.observer?.disconnect();
          let relatedTargetEl = target === $23f2114a1b82827e$export$cd4e5573fbe2b576() ? null : $23f2114a1b82827e$export$cd4e5573fbe2b576();
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          }));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: relatedTargetEl
          }));
        }
      });
      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    onBlur
  ]);
}
let $a92dc41f639950be$export$fda7da73ab5d4c48 = false;
function $a92dc41f639950be$export$cabe61c495ee3649(target) {
  while (target && !$3b8b240c1bf84ab9$export$4c063cf1350e6fed(target, {
    skipVisibilityCheck: true
  })) target = target.parentElement;
  let window2 = $d447af545b77c9f1$export$f21a1ffae260145a(target);
  let activeElement = window2.document.activeElement;
  if (!activeElement || activeElement === target) return;
  $a92dc41f639950be$export$fda7da73ab5d4c48 = true;
  let isRefocusing = false;
  let onBlur = (e) => {
    if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e) === activeElement || isRefocusing) e.stopImmediatePropagation();
  };
  let onFocusOut = (e) => {
    if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e) === activeElement || isRefocusing) {
      e.stopImmediatePropagation();
      if (!target && !isRefocusing) {
        isRefocusing = true;
        $1969ac565cfec8d0$export$de79e2c695e052f3(activeElement);
        cleanup();
      }
    }
  };
  let onFocus = (e) => {
    if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e) === target || isRefocusing) e.stopImmediatePropagation();
  };
  let onFocusIn = (e) => {
    if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e) === target || isRefocusing) {
      e.stopImmediatePropagation();
      if (!isRefocusing) {
        isRefocusing = true;
        $1969ac565cfec8d0$export$de79e2c695e052f3(activeElement);
        cleanup();
      }
    }
  };
  window2.addEventListener("blur", onBlur, true);
  window2.addEventListener("focusout", onFocusOut, true);
  window2.addEventListener("focusin", onFocusIn, true);
  window2.addEventListener("focus", onFocus, true);
  let cleanup = () => {
    cancelAnimationFrame(raf);
    window2.removeEventListener("blur", onBlur, true);
    window2.removeEventListener("focusout", onFocusOut, true);
    window2.removeEventListener("focusin", onFocusIn, true);
    window2.removeEventListener("focus", onFocus, true);
    $a92dc41f639950be$export$fda7da73ab5d4c48 = false;
    isRefocusing = false;
  };
  let raf = requestAnimationFrame(cleanup);
  return cleanup;
}
let $cbf007e418543821$var$state = "default";
let $cbf007e418543821$var$savedUserSelect = "";
let $cbf007e418543821$var$modifiedElementMap = /* @__PURE__ */ new WeakMap();
function $cbf007e418543821$export$16a4697467175487(target) {
  if ($2add3ce32c6007eb$export$fedb369cb70207f1()) {
    if ($cbf007e418543821$var$state === "default") {
      const documentObject = $d447af545b77c9f1$export$b204af158042fbac(target);
      $cbf007e418543821$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
      documentObject.documentElement.style.webkitUserSelect = "none";
    }
    $cbf007e418543821$var$state = "disabled";
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    let property = "userSelect" in target.style ? "userSelect" : "webkitUserSelect";
    $cbf007e418543821$var$modifiedElementMap.set(target, target.style[property]);
    target.style[property] = "none";
  }
}
function $cbf007e418543821$export$b0d6fa1ab32e3295(target) {
  if ($2add3ce32c6007eb$export$fedb369cb70207f1()) {
    if ($cbf007e418543821$var$state !== "disabled") return;
    $cbf007e418543821$var$state = "restoring";
    setTimeout(() => {
      $081cb5757e08788e$export$24490316f764c430(() => {
        if ($cbf007e418543821$var$state === "restoring") {
          const documentObject = $d447af545b77c9f1$export$b204af158042fbac(target);
          if (documentObject.documentElement.style.webkitUserSelect === "none") documentObject.documentElement.style.webkitUserSelect = $cbf007e418543821$var$savedUserSelect || "";
          $cbf007e418543821$var$savedUserSelect = "";
          $cbf007e418543821$var$state = "default";
        }
      });
    }, 300);
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    if (target && $cbf007e418543821$var$modifiedElementMap.has(target)) {
      let targetOldUserSelect = $cbf007e418543821$var$modifiedElementMap.get(target);
      let property = "userSelect" in target.style ? "userSelect" : "webkitUserSelect";
      if (target.style[property] === "none") target.style[property] = targetOldUserSelect;
      if (target.getAttribute("style") === "") target.removeAttribute("style");
      $cbf007e418543821$var$modifiedElementMap.delete(target);
    }
  }
}
const $24f9a20f226ad820$export$5165eccb35aaadb5 = $4d1jn$react.createContext({
  register: () => {
  }
});
$24f9a20f226ad820$export$5165eccb35aaadb5.displayName = "PressResponderContext";
function $d27d541f9569d26d$var$usePressResponderContext(props) {
  let context = reactExports.useContext($24f9a20f226ad820$export$5165eccb35aaadb5);
  if (context) {
    let { register, ref, ...contextProps } = context;
    props = $bbaa08b3cd72f041$export$9d1611c77c2fe928(contextProps, props);
    register();
  }
  $b7115c395c64f7b5$export$4debdb1a3f0fa79e(context, props.ref);
  return props;
}
class $d27d541f9569d26d$var$PressEvent {
  #shouldStopPropagation;
  constructor(type, pointerType, originalEvent, state) {
    this.#shouldStopPropagation = true;
    let currentTarget = state?.target ?? originalEvent.currentTarget;
    const rect = currentTarget?.getBoundingClientRect();
    let x, y = 0;
    let clientX, clientY = null;
    if (originalEvent.clientX != null && originalEvent.clientY != null) {
      clientX = originalEvent.clientX;
      clientY = originalEvent.clientY;
    }
    if (rect) {
      if (clientX != null && clientY != null) {
        x = clientX - rect.left;
        y = clientY - rect.top;
      } else {
        x = rect.width / 2;
        y = rect.height / 2;
      }
    }
    this.type = type;
    this.pointerType = pointerType;
    this.target = originalEvent.currentTarget;
    this.shiftKey = originalEvent.shiftKey;
    this.metaKey = originalEvent.metaKey;
    this.ctrlKey = originalEvent.ctrlKey;
    this.altKey = originalEvent.altKey;
    this.x = x;
    this.y = y;
    this.key = originalEvent.key;
  }
  continuePropagation() {
    this.#shouldStopPropagation = false;
  }
  get shouldStopPropagation() {
    return this.#shouldStopPropagation;
  }
}
const $d27d541f9569d26d$var$LINK_CLICKED = Symbol("linkClicked");
const $d27d541f9569d26d$var$STYLE_ID = "react-aria-pressable-style";
const $d27d541f9569d26d$var$PRESSABLE_ATTRIBUTE = "data-react-aria-pressable";
function $d27d541f9569d26d$export$45712eceda6fad21(props) {
  let { onPress, onPressChange, onPressStart, onPressEnd, onPressUp, onClick, isDisabled, isPressed: isPressedProp, preventFocusOnPress, shouldCancelOnPointerExit, allowTextSelectionOnPress, ref: domRef, ...domProps } = $d27d541f9569d26d$var$usePressResponderContext(props);
  let [isPressed, setPressed] = reactExports.useState(false);
  let ref = reactExports.useRef({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    didFirePressStart: false,
    isTriggeringEvent: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null,
    disposables: []
  });
  let { addGlobalListener, removeAllGlobalListeners } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
  let triggerPressStart = reactExports.useCallback((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled || state.didFirePressStart) return false;
    let shouldStopPropagation = true;
    state.isTriggeringEvent = true;
    if (onPressStart) {
      let event = new $d27d541f9569d26d$var$PressEvent("pressstart", pointerType, originalEvent);
      onPressStart(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(true);
    state.isTriggeringEvent = false;
    state.didFirePressStart = true;
    setPressed(true);
    return shouldStopPropagation;
  }, [
    isDisabled,
    onPressStart,
    onPressChange
  ]);
  let triggerPressEnd = reactExports.useCallback((originalEvent, pointerType, wasPressed = true) => {
    let state = ref.current;
    if (!state.didFirePressStart) return false;
    state.didFirePressStart = false;
    state.isTriggeringEvent = true;
    let shouldStopPropagation = true;
    if (onPressEnd) {
      let event = new $d27d541f9569d26d$var$PressEvent("pressend", pointerType, originalEvent);
      onPressEnd(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(false);
    setPressed(false);
    if (onPress && wasPressed && !isDisabled) {
      let event = new $d27d541f9569d26d$var$PressEvent("press", pointerType, originalEvent);
      onPress(event);
      shouldStopPropagation &&= event.shouldStopPropagation;
    }
    state.isTriggeringEvent = false;
    return shouldStopPropagation;
  }, [
    isDisabled,
    onPressEnd,
    onPressChange,
    onPress
  ]);
  let triggerPressEndEvent = $fe16bffc7a557bf0$export$7f54fc3180508a52(triggerPressEnd);
  let triggerPressUp = reactExports.useCallback((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled) return false;
    if (onPressUp) {
      state.isTriggeringEvent = true;
      let event = new $d27d541f9569d26d$var$PressEvent("pressup", pointerType, originalEvent);
      onPressUp(event);
      state.isTriggeringEvent = false;
      return event.shouldStopPropagation;
    }
    return true;
  }, [
    isDisabled,
    onPressUp
  ]);
  let triggerPressUpEvent = $fe16bffc7a557bf0$export$7f54fc3180508a52(triggerPressUp);
  let cancel = reactExports.useCallback((e) => {
    let state = ref.current;
    if (state.isPressed && state.target) {
      if (state.didFirePressStart && state.pointerType != null) triggerPressEnd($d27d541f9569d26d$var$createEvent(state.target, e), state.pointerType, false);
      state.isPressed = false;
      state.isOverTarget = false;
      state.activePointerId = null;
      state.pointerType = null;
      removeAllGlobalListeners();
      if (!allowTextSelectionOnPress) $cbf007e418543821$export$b0d6fa1ab32e3295(state.target);
      for (let dispose of state.disposables) dispose();
      state.disposables = [];
    }
  }, [
    allowTextSelectionOnPress,
    removeAllGlobalListeners,
    triggerPressEnd
  ]);
  let cancelEvent = $fe16bffc7a557bf0$export$7f54fc3180508a52(cancel);
  reactExports.useEffect(() => {
    if (isDisabled && ref.current.isPressed) cancelEvent({
      currentTarget: ref.current.target,
      shiftKey: false,
      ctrlKey: false,
      metaKey: false,
      altKey: false
    });
  }, [
    isDisabled
  ]);
  let cancelOnPointerExit = reactExports.useCallback((e) => {
    if (shouldCancelOnPointerExit) cancel(e);
  }, [
    shouldCancelOnPointerExit,
    cancel
  ]);
  let triggerClick = reactExports.useCallback((e) => {
    if (isDisabled) return;
    onClick?.(e);
  }, [
    isDisabled,
    onClick
  ]);
  let triggerSyntheticClick = reactExports.useCallback((e, target) => {
    if (isDisabled) return;
    if (onClick) {
      let event = new MouseEvent("click", e);
      $a92dc41f639950be$export$c2b7abe5d61ec696(event, target);
      onClick($a92dc41f639950be$export$525bc4921d56d4a(event));
    }
  }, [
    isDisabled,
    onClick
  ]);
  let pressProps = reactExports.useMemo(() => {
    let state = ref.current;
    let pressProps2 = {
      onKeyDown(e) {
        if ($d27d541f9569d26d$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && $23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) {
          if ($d27d541f9569d26d$var$shouldPreventDefaultKeyboard($23f2114a1b82827e$export$e58f029f0fbfdb29(e), e.key)) e.preventDefault();
          let shouldStopPropagation = true;
          if (!state.isPressed && !e.repeat) {
            state.target = e.currentTarget;
            state.isPressed = true;
            state.pointerType = "keyboard";
            shouldStopPropagation = triggerPressStart(e, "keyboard");
          }
          let originalTarget = e.currentTarget;
          let pressUp = (e2) => {
            if ($d27d541f9569d26d$var$isValidKeyboardEvent(e2, originalTarget) && !e2.repeat && $23f2114a1b82827e$export$4282f70798064fe0(originalTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e2)) && state.target)
              triggerPressUpEvent($d27d541f9569d26d$var$createEvent(state.target, e2), "keyboard");
          };
          addGlobalListener($d447af545b77c9f1$export$b204af158042fbac(e.currentTarget), "keyup", $a4e76a5424781910$export$e08e3b67e392101e(pressUp, onKeyUp), true);
          if (shouldStopPropagation) e.stopPropagation();
          if (e.metaKey && $2add3ce32c6007eb$export$9ac100e40613ea10()) state.metaKeyEvents?.set(e.key, e.nativeEvent);
        } else if (e.key === "Meta") state.metaKeyEvents = /* @__PURE__ */ new Map();
      },
      onClick(e) {
        if (e && !$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
        if (e && e.button === 0 && !state.isTriggeringEvent && !$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening) {
          let shouldStopPropagation = true;
          if (isDisabled) e.preventDefault();
          if (!state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || $b5c62b033c25b96d$export$60278871457622de(e.nativeEvent))) {
            let stopPressStart = triggerPressStart(e, "virtual");
            let stopPressUp = triggerPressUpEvent(e, "virtual");
            let stopPressEnd = triggerPressEndEvent(e, "virtual");
            triggerClick(e);
            shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
          } else if (state.isPressed && state.pointerType !== "keyboard") {
            let pointerType = state.pointerType || e.nativeEvent.pointerType || "virtual";
            let stopPressUp = triggerPressUpEvent($d27d541f9569d26d$var$createEvent(e.currentTarget, e), pointerType);
            let stopPressEnd = triggerPressEndEvent($d27d541f9569d26d$var$createEvent(e.currentTarget, e), pointerType, true);
            shouldStopPropagation = stopPressUp && stopPressEnd;
            state.isOverTarget = false;
            triggerClick(e);
            cancelEvent(e);
          }
          state.ignoreEmulatedMouseEvents = false;
          if (shouldStopPropagation) e.stopPropagation();
        }
      }
    };
    let onKeyUp = (e) => {
      if (state.isPressed && state.target && $d27d541f9569d26d$var$isValidKeyboardEvent(e, state.target)) {
        if ($d27d541f9569d26d$var$shouldPreventDefaultKeyboard($23f2114a1b82827e$export$e58f029f0fbfdb29(e), e.key)) e.preventDefault();
        let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
        let wasPressed = $23f2114a1b82827e$export$4282f70798064fe0(state.target, target);
        triggerPressEndEvent($d27d541f9569d26d$var$createEvent(state.target, e), "keyboard", wasPressed);
        if (wasPressed) triggerSyntheticClick(e, state.target);
        removeAllGlobalListeners();
        if (e.key !== "Enter" && $d27d541f9569d26d$var$isHTMLAnchorLink(state.target) && $23f2114a1b82827e$export$4282f70798064fe0(state.target, target) && !e[$d27d541f9569d26d$var$LINK_CLICKED]) {
          e[$d27d541f9569d26d$var$LINK_CLICKED] = true;
          $caaf0dd3060ed57c$export$95185d699e05d4d7(state.target, e, false);
        }
        state.isPressed = false;
        state.metaKeyEvents?.delete(e.key);
      } else if (e.key === "Meta" && state.metaKeyEvents?.size) {
        let events = state.metaKeyEvents;
        state.metaKeyEvents = void 0;
        for (let event of events.values()) state.target?.dispatchEvent(new KeyboardEvent("keyup", event));
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps2.onPointerDown = (e) => {
        if (e.button !== 0 || !$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
        if ($b5c62b033c25b96d$export$29bf1b5f2c56cf63(e.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        state.pointerType = e.pointerType;
        let shouldStopPropagation = true;
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e.pointerId;
          state.target = e.currentTarget;
          if (!allowTextSelectionOnPress) $cbf007e418543821$export$16a4697467175487(state.target);
          shouldStopPropagation = triggerPressStart(e, state.pointerType);
          let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
          if ("releasePointerCapture" in target) {
            if ("hasPointerCapture" in target) {
              if (target.hasPointerCapture(e.pointerId)) target.releasePointerCapture(e.pointerId);
            } else target.releasePointerCapture(e.pointerId);
          }
          addGlobalListener($d447af545b77c9f1$export$b204af158042fbac(e.currentTarget), "pointerup", onPointerUp, false);
          addGlobalListener($d447af545b77c9f1$export$b204af158042fbac(e.currentTarget), "pointercancel", onPointerCancel, false);
        }
        if (shouldStopPropagation) e.stopPropagation();
      };
      pressProps2.onMouseDown = (e) => {
        if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
        if (e.button === 0) {
          if (preventFocusOnPress) {
            let dispose = $a92dc41f639950be$export$cabe61c495ee3649(e.target);
            if (dispose) state.disposables.push(dispose);
          }
          e.stopPropagation();
        }
      };
      pressProps2.onPointerUp = (e) => {
        if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e)) || state.pointerType === "virtual") return;
        if (e.button === 0 && !state.isPressed)
          triggerPressUpEvent(e, state.pointerType || e.pointerType);
      };
      pressProps2.onPointerEnter = (e) => {
        if (e.pointerId === state.activePointerId && state.target && !state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = true;
          triggerPressStart($d27d541f9569d26d$var$createEvent(state.target, e), state.pointerType);
        }
      };
      pressProps2.onPointerLeave = (e) => {
        if (e.pointerId === state.activePointerId && state.target && state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          triggerPressEndEvent($d27d541f9569d26d$var$createEvent(state.target, e), state.pointerType, false);
          cancelOnPointerExit(e);
        }
      };
      let onPointerUp = (e) => {
        if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
          if ($23f2114a1b82827e$export$4282f70798064fe0(state.target, $23f2114a1b82827e$export$e58f029f0fbfdb29(e)) && state.pointerType != null) {
            let clicked = false;
            let timeout = setTimeout(() => {
              if (state.isPressed && state.target instanceof HTMLElement) {
                if (clicked)
                  cancelEvent(e);
                else {
                  $1969ac565cfec8d0$export$de79e2c695e052f3(state.target);
                  state.target.click();
                }
              }
            }, 80);
            addGlobalListener(e.currentTarget, "click", () => clicked = true, true);
            state.disposables.push(() => clearTimeout(timeout));
          } else
            cancelEvent(e);
          state.isOverTarget = false;
        }
      };
      let onPointerCancel = (e) => {
        cancelEvent(e);
      };
      pressProps2.onDragStart = (e) => {
        if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
        cancelEvent(e);
      };
    }
    return pressProps2;
  }, [
    addGlobalListener,
    isDisabled,
    preventFocusOnPress,
    removeAllGlobalListeners,
    allowTextSelectionOnPress,
    cancelOnPointerExit,
    triggerPressStart,
    triggerClick,
    triggerSyntheticClick
  ]);
  reactExports.useEffect(() => {
    if (!domRef || false) return;
    const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(domRef.current);
    if (!ownerDocument || !ownerDocument.head || ownerDocument.getElementById($d27d541f9569d26d$var$STYLE_ID)) return;
    const style = ownerDocument.createElement("style");
    style.id = $d27d541f9569d26d$var$STYLE_ID;
    let nonce = $2b2d34ff061957fb$export$2b85b721e524d74b(ownerDocument);
    if (nonce) style.nonce = nonce;
    style.textContent = `
@layer {
  [${$d27d541f9569d26d$var$PRESSABLE_ATTRIBUTE}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim();
    ownerDocument.head.prepend(style);
  }, [
    domRef
  ]);
  reactExports.useEffect(() => {
    let state = ref.current;
    return () => {
      if (!allowTextSelectionOnPress) $cbf007e418543821$export$b0d6fa1ab32e3295(state.target ?? void 0);
      for (let dispose of state.disposables) dispose();
      state.disposables = [];
    };
  }, [
    allowTextSelectionOnPress
  ]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(domProps, pressProps, {
      [$d27d541f9569d26d$var$PRESSABLE_ATTRIBUTE]: true
    })
  };
}
function $d27d541f9569d26d$var$isHTMLAnchorLink(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function $d27d541f9569d26d$var$isValidKeyboardEvent(event, currentTarget) {
  const { key, code } = event;
  const element = currentTarget;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof $d447af545b77c9f1$export$f21a1ffae260145a(element).HTMLInputElement && !$d27d541f9569d26d$var$isValidInputKey(element, key) || element instanceof $d447af545b77c9f1$export$f21a1ffae260145a(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
  !((role === "link" || !role && $d27d541f9569d26d$var$isHTMLAnchorLink(element)) && key !== "Enter");
}
function $d27d541f9569d26d$var$createEvent(target, e) {
  let clientX = e.clientX;
  let clientY = e.clientY;
  return {
    currentTarget: target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey,
    clientX,
    clientY,
    key: e.key
  };
}
function $d27d541f9569d26d$var$shouldPreventDefaultUp(target) {
  if (target instanceof HTMLInputElement) return false;
  if (target instanceof HTMLButtonElement) return target.type !== "submit" && target.type !== "reset";
  if ($d27d541f9569d26d$var$isHTMLAnchorLink(target)) return false;
  return true;
}
function $d27d541f9569d26d$var$shouldPreventDefaultKeyboard(target, key) {
  if (target instanceof HTMLInputElement) return !$d27d541f9569d26d$var$isValidInputKey(target, key);
  return $d27d541f9569d26d$var$shouldPreventDefaultUp(target);
}
const $d27d541f9569d26d$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $d27d541f9569d26d$var$isValidInputKey(target, key) {
  return target.type === "checkbox" || target.type === "radio" ? key === " " : $d27d541f9569d26d$var$nonTextInputTypes.has(target.type);
}
let $8f5a2122b0992be3$var$currentModality = null;
const $8f5a2122b0992be3$export$901e90a13c50a14e = /* @__PURE__ */ new Set();
let $8f5a2122b0992be3$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
let $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
let $8f5a2122b0992be3$var$hasBlurredWindowRecently = false;
function $8f5a2122b0992be3$var$triggerChangeHandlers(modality, e) {
  for (let handler of $8f5a2122b0992be3$export$901e90a13c50a14e) handler(modality, e);
}
function $8f5a2122b0992be3$var$isValidKey(e) {
  return !(e.metaKey || !$2add3ce32c6007eb$export$9ac100e40613ea10() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $8f5a2122b0992be3$var$handleKeyboardEvent(e) {
  $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
  if (!$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening && $8f5a2122b0992be3$var$isValidKey(e)) {
    $8f5a2122b0992be3$var$currentModality = "keyboard";
    $8f5a2122b0992be3$var$triggerChangeHandlers("keyboard", e);
  }
}
function $8f5a2122b0992be3$var$handlePointerEvent(e) {
  $8f5a2122b0992be3$var$currentModality = "pointer";
  "pointerType" in e ? e.pointerType : "mouse";
  if (e.type === "mousedown" || e.type === "pointerdown") {
    $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
    $8f5a2122b0992be3$var$triggerChangeHandlers("pointer", e);
  }
}
function $8f5a2122b0992be3$var$handleClickEvent(e) {
  if (!$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening && $b5c62b033c25b96d$export$60278871457622de(e)) {
    $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
    $8f5a2122b0992be3$var$currentModality = "virtual";
  }
}
function $8f5a2122b0992be3$var$handleFocusEvent(e) {
  let ownerWindow = $d447af545b77c9f1$export$f21a1ffae260145a($23f2114a1b82827e$export$e58f029f0fbfdb29(e));
  let ownerDocument = $d447af545b77c9f1$export$b204af158042fbac($23f2114a1b82827e$export$e58f029f0fbfdb29(e));
  if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e) === ownerWindow || $23f2114a1b82827e$export$e58f029f0fbfdb29(e) === ownerDocument || $a92dc41f639950be$export$fda7da73ab5d4c48 || !e.isTrusted) return;
  if (!$8f5a2122b0992be3$var$hasEventBeforeFocus && !$8f5a2122b0992be3$var$hasBlurredWindowRecently) {
    $8f5a2122b0992be3$var$currentModality = "virtual";
    $8f5a2122b0992be3$var$triggerChangeHandlers("virtual", e);
  }
  $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
  $8f5a2122b0992be3$var$hasBlurredWindowRecently = false;
}
function $8f5a2122b0992be3$var$handleWindowBlur() {
  if ($a92dc41f639950be$export$fda7da73ab5d4c48) return;
  $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
  $8f5a2122b0992be3$var$hasBlurredWindowRecently = true;
}
function $8f5a2122b0992be3$var$setupGlobalFocusEvents(element) {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const windowObject = $d447af545b77c9f1$export$f21a1ffae260145a(element);
  const documentObject = $d447af545b77c9f1$export$b204af158042fbac(element);
  if ($8f5a2122b0992be3$export$d90243b58daecda7.get(windowObject)) return;
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  documentObject.addEventListener("keydown", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
  documentObject.addEventListener("keyup", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
  documentObject.addEventListener("click", $8f5a2122b0992be3$var$handleClickEvent, true);
  windowObject.addEventListener("focus", $8f5a2122b0992be3$var$handleFocusEvent, true);
  windowObject.addEventListener("blur", $8f5a2122b0992be3$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.addEventListener("pointermove", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.addEventListener("pointerup", $8f5a2122b0992be3$var$handlePointerEvent, true);
  }
  windowObject.addEventListener("beforeunload", () => {
    $8f5a2122b0992be3$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  });
  $8f5a2122b0992be3$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
const $8f5a2122b0992be3$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = $d447af545b77c9f1$export$f21a1ffae260145a(element);
  const documentObject = $d447af545b77c9f1$export$b204af158042fbac(element);
  if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$8f5a2122b0992be3$export$d90243b58daecda7.has(windowObject)) return;
  windowObject.HTMLElement.prototype.focus = $8f5a2122b0992be3$export$d90243b58daecda7.get(windowObject).focus;
  documentObject.removeEventListener("keydown", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("keyup", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("click", $8f5a2122b0992be3$var$handleClickEvent, true);
  windowObject.removeEventListener("focus", $8f5a2122b0992be3$var$handleFocusEvent, true);
  windowObject.removeEventListener("blur", $8f5a2122b0992be3$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointermove", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointerup", $8f5a2122b0992be3$var$handlePointerEvent, true);
  }
  $8f5a2122b0992be3$export$d90243b58daecda7.delete(windowObject);
};
function $8f5a2122b0992be3$export$2f1888112f558a7d(element) {
  const documentObject = $d447af545b77c9f1$export$b204af158042fbac(element);
  let loadListener;
  if (documentObject.readyState !== "loading") $8f5a2122b0992be3$var$setupGlobalFocusEvents(element);
  else {
    loadListener = () => {
      $8f5a2122b0992be3$var$setupGlobalFocusEvents(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $8f5a2122b0992be3$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined") $8f5a2122b0992be3$export$2f1888112f558a7d();
function $8f5a2122b0992be3$export$b9b3dfddab17db27() {
  return $8f5a2122b0992be3$var$currentModality !== "pointer";
}
function $8f5a2122b0992be3$export$630ff653c5ada6a9() {
  return $8f5a2122b0992be3$var$currentModality;
}
function $8f5a2122b0992be3$export$8397ddfc504fdb9a(modality) {
  $8f5a2122b0992be3$var$currentModality = modality;
  $8f5a2122b0992be3$var$triggerChangeHandlers(modality, null);
}
function $f192c2f16961cbe0$export$80f3e147d781571c(element) {
  if (!element.isConnected) return;
  const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(element);
  if ($8f5a2122b0992be3$export$630ff653c5ada6a9() === "virtual") {
    let lastFocusedElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
    $081cb5757e08788e$export$24490316f764c430(() => {
      const activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
      if ((activeElement === lastFocusedElement || activeElement === ownerDocument.body) && element.isConnected) $1969ac565cfec8d0$export$de79e2c695e052f3(element);
    });
  } else $1969ac565cfec8d0$export$de79e2c695e052f3(element);
}
function $1e74c67db218ce67$export$f8168d8dd8fd66e6(props) {
  let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = reactExports.useCallback((e) => {
    if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e) === e.currentTarget) {
      if (onBlurProp) onBlurProp(e);
      if (onFocusChange) onFocusChange(false);
      return true;
    }
  }, [
    onBlurProp,
    onFocusChange
  ]);
  const onSyntheticFocus = $a92dc41f639950be$export$715c682d09d639cc(onBlur);
  const onFocus = reactExports.useCallback((e) => {
    let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
    const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(eventTarget);
    const activeElement = ownerDocument ? $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument) : $23f2114a1b82827e$export$cd4e5573fbe2b576();
    if (eventTarget === e.currentTarget && eventTarget === activeElement) {
      if (onFocusProp) onFocusProp(e);
      if (onFocusChange) onFocusChange(true);
      onSyntheticFocus(e);
    }
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}
function $8dba16319206abb6$export$48d1ea6320830260(handler) {
  if (!handler) return void 0;
  let shouldStopPropagation = true;
  return (e) => {
    let event = {
      ...e,
      preventDefault() {
        e.preventDefault();
      },
      isDefaultPrevented() {
        return e.isDefaultPrevented();
      },
      stopPropagation() {
        shouldStopPropagation = true;
      },
      continuePropagation() {
        shouldStopPropagation = false;
      },
      isPropagationStopped() {
        return shouldStopPropagation;
      }
    };
    handler(event);
    if (shouldStopPropagation) e.stopPropagation();
  };
}
function $8296dad1a4c5e0dc$export$8f71654801c2f7cd(props) {
  return {
    keyboardProps: props.isDisabled ? {} : {
      onKeyDown: $8dba16319206abb6$export$48d1ea6320830260(props.onKeyDown),
      onKeyUp: $8dba16319206abb6$export$48d1ea6320830260(props.onKeyUp)
    }
  };
}
let $d1116acdf220c2da$export$f9762fab77588ecb = /* @__PURE__ */ $4d1jn$react.createContext(null);
function $d1116acdf220c2da$var$useFocusableContext(ref) {
  let context = reactExports.useContext($d1116acdf220c2da$export$f9762fab77588ecb) || {};
  $b7115c395c64f7b5$export$4debdb1a3f0fa79e(context, ref);
  let { ref: _, ...otherProps } = context;
  return otherProps;
}
function $d1116acdf220c2da$export$4c014de7c8940b4c(props, domRef) {
  let { focusProps } = $1e74c67db218ce67$export$f8168d8dd8fd66e6(props);
  let { keyboardProps } = $8296dad1a4c5e0dc$export$8f71654801c2f7cd(props);
  let interactions = $bbaa08b3cd72f041$export$9d1611c77c2fe928(focusProps, keyboardProps);
  let domProps = $d1116acdf220c2da$var$useFocusableContext(domRef);
  let interactionProps = props.isDisabled ? {} : domProps;
  let autoFocusRef = reactExports.useRef(props.autoFocus);
  reactExports.useEffect(() => {
    if (autoFocusRef.current && domRef.current) $f192c2f16961cbe0$export$80f3e147d781571c(domRef.current);
    autoFocusRef.current = false;
  }, [
    domRef
  ]);
  let tabIndex = props.excludeFromTabOrder ? -1 : 0;
  if (props.isDisabled) tabIndex = void 0;
  return {
    focusableProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928({
      ...interactions,
      tabIndex
    }, interactionProps)
  };
}
function $0d47b37c475c5231$export$cf75428e0b9ed1ea({ children }) {
  let context = reactExports.useMemo(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ $4d1jn$react.createElement($24f9a20f226ad820$export$5165eccb35aaadb5.Provider, {
    value: context
  }, children);
}
function $2c9edc598a03d523$export$420e68273165f4ec(props) {
  let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
  let state = reactExports.useRef({
    isFocusWithin: false
  });
  let { addGlobalListener, removeAllGlobalListeners } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
  let onBlur = reactExports.useCallback((e) => {
    if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
    if (state.current.isFocusWithin && !$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, e.relatedTarget)) {
      state.current.isFocusWithin = false;
      removeAllGlobalListeners();
      if (onBlurWithin) onBlurWithin(e);
      if (onFocusWithinChange) onFocusWithinChange(false);
    }
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state,
    removeAllGlobalListeners
  ]);
  let onSyntheticFocus = $a92dc41f639950be$export$715c682d09d639cc(onBlur);
  let onFocus = reactExports.useCallback((e) => {
    if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
    let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
    const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(eventTarget);
    const activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
    if (!state.current.isFocusWithin && activeElement === eventTarget) {
      if (onFocusWithin) onFocusWithin(e);
      if (onFocusWithinChange) onFocusWithinChange(true);
      state.current.isFocusWithin = true;
      onSyntheticFocus(e);
      let currentTarget = e.currentTarget;
      addGlobalListener(ownerDocument, "focus", (e2) => {
        let eventTarget2 = $23f2114a1b82827e$export$e58f029f0fbfdb29(e2);
        if (state.current.isFocusWithin && !$23f2114a1b82827e$export$4282f70798064fe0(currentTarget, eventTarget2)) {
          let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", {
            relatedTarget: eventTarget2
          });
          $a92dc41f639950be$export$c2b7abe5d61ec696(nativeEvent, currentTarget);
          let event = $a92dc41f639950be$export$525bc4921d56d4a(nativeEvent);
          onBlur(event);
        }
      }, {
        capture: true
      });
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus,
    addGlobalListener,
    onBlur
  ]);
  if (isDisabled) return {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}
const $7b01448eaad0fe7c$var$DEFAULT_THRESHOLD = 500;
function $7b01448eaad0fe7c$export$c24ed0104d07eab9(props) {
  let { isDisabled, onLongPressStart, onLongPressEnd, onLongPress, threshold = $7b01448eaad0fe7c$var$DEFAULT_THRESHOLD, accessibilityDescription } = props;
  const timeRef = reactExports.useRef(void 0);
  let { addGlobalListener, removeGlobalListener } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
  let { pressProps } = $d27d541f9569d26d$export$45712eceda6fad21({
    isDisabled,
    onPressStart(e) {
      e.continuePropagation();
      if (e.pointerType === "mouse" || e.pointerType === "touch") {
        if (onLongPressStart) onLongPressStart({
          ...e,
          type: "longpressstart"
        });
        timeRef.current = setTimeout(() => {
          e.target.dispatchEvent(new PointerEvent("pointercancel", {
            bubbles: true
          }));
          if ($d447af545b77c9f1$export$b204af158042fbac(e.target).activeElement !== e.target) $1969ac565cfec8d0$export$de79e2c695e052f3(e.target);
          if (onLongPress) onLongPress({
            ...e,
            type: "longpress"
          });
          timeRef.current = void 0;
        }, threshold);
        if (e.pointerType === "touch") {
          let onContextMenu = (e2) => {
            e2.preventDefault();
          };
          let ownerWindow = $d447af545b77c9f1$export$f21a1ffae260145a(e.target);
          addGlobalListener(e.target, "contextmenu", onContextMenu, {
            once: true
          });
          addGlobalListener(ownerWindow, "pointerup", () => {
            setTimeout(() => {
              removeGlobalListener(e.target, "contextmenu", onContextMenu);
            }, 30);
          }, {
            once: true
          });
        }
      }
    },
    onPressEnd(e) {
      if (timeRef.current) clearTimeout(timeRef.current);
      if (onLongPressEnd && (e.pointerType === "mouse" || e.pointerType === "touch")) onLongPressEnd({
        ...e,
        type: "longpressend"
      });
    }
  });
  let descriptionProps = $121970af65029459$export$f8aeda7b10753fa1(onLongPress && !isDisabled ? accessibilityDescription : void 0);
  return {
    longPressProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(pressProps, descriptionProps)
  };
}
function $628037886ba31236$export$f9d5c8beee7d008d(props, state, ref) {
  let { type } = props;
  let { isOpen } = state;
  reactExports.useEffect(() => {
    if (ref && ref.current) $dd149f63282afbbf$export$f6211563215e3b37.set(ref.current, state.close);
  });
  let ariaHasPopup = void 0;
  if (type === "menu") ariaHasPopup = true;
  else if (type === "listbox") ariaHasPopup = "listbox";
  let overlayId = $390e54f620492c70$export$f680877a34711e37();
  return {
    triggerProps: {
      "aria-haspopup": ariaHasPopup,
      "aria-expanded": isOpen,
      "aria-controls": isOpen ? overlayId : void 0,
      onPress: state.toggle
    },
    overlayProps: {
      id: overlayId
    }
  };
}
const $49c51c25361d4cd2$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
let $49c51c25361d4cd2$var$preventScrollCount = 0;
let $49c51c25361d4cd2$var$restore;
function $49c51c25361d4cd2$export$ee0f7cc6afcd1c18(options = {}) {
  let { isDisabled } = options;
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    if (isDisabled) return;
    $49c51c25361d4cd2$var$preventScrollCount++;
    if ($49c51c25361d4cd2$var$preventScrollCount === 1) {
      if ($2add3ce32c6007eb$export$fedb369cb70207f1()) $49c51c25361d4cd2$var$restore = $49c51c25361d4cd2$var$preventScrollMobileSafari();
      else $49c51c25361d4cd2$var$restore = $49c51c25361d4cd2$var$preventScrollStandard();
    }
    return () => {
      $49c51c25361d4cd2$var$preventScrollCount--;
      if ($49c51c25361d4cd2$var$preventScrollCount === 0) $49c51c25361d4cd2$var$restore();
    };
  }, [
    isDisabled
  ]);
}
function $49c51c25361d4cd2$var$preventScrollStandard() {
  let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  return $a4e76a5424781910$export$e08e3b67e392101e(scrollbarWidth > 0 && // Use scrollbar-gutter when supported because it also works for fixed positioned elements.
  ("scrollbarGutter" in document.documentElement.style ? $49c51c25361d4cd2$var$setStyle(document.documentElement, "scrollbarGutter", "stable") : $49c51c25361d4cd2$var$setStyle(document.documentElement, "paddingRight", `${scrollbarWidth}px`)), $49c51c25361d4cd2$var$setStyle(document.documentElement, "overflow", "hidden"));
}
function $49c51c25361d4cd2$var$preventScrollMobileSafari() {
  let restoreOverflow = $49c51c25361d4cd2$var$setStyle(document.documentElement, "overflow", "hidden");
  let scrollable;
  let allowTouchMove = false;
  let onTouchStart = (e) => {
    let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
    scrollable = $901761b40e390936$export$2bb74740c4e19def(target) ? target : $3578607fe3d4b096$export$cfa2225e87938781(target, true);
    allowTouchMove = false;
    let selection = target.ownerDocument.defaultView.getSelection();
    if (selection && !selection.isCollapsed && selection.containsNode(target, true)) allowTouchMove = true;
    if (e.composedPath().some((el) => el instanceof HTMLInputElement && el.type === "range")) allowTouchMove = true;
    if ("selectionStart" in target && "selectionEnd" in target && target.selectionStart < target.selectionEnd && target.ownerDocument.activeElement === target) allowTouchMove = true;
  };
  let style = document.createElement("style");
  style.textContent = `
@layer {
  * {
    overscroll-behavior: contain;
  }
}`.trim();
  document.head.prepend(style);
  let onTouchMove = (e) => {
    if (e.touches.length === 2 || allowTouchMove) return;
    if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
      e.preventDefault();
      return;
    }
    if (scrollable.scrollHeight === scrollable.clientHeight && scrollable.scrollWidth === scrollable.clientWidth) e.preventDefault();
  };
  let onBlur = (e) => {
    let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
    let relatedTarget = e.relatedTarget;
    if (relatedTarget && $bb39c0fc1c19b34c$export$c57958e35f31ed73(relatedTarget)) {
      relatedTarget.focus({
        preventScroll: true
      });
      $49c51c25361d4cd2$var$scrollIntoViewWhenReady(relatedTarget, $bb39c0fc1c19b34c$export$c57958e35f31ed73(target));
    } else if (!relatedTarget) {
      var _target_parentElement;
      let focusable = (_target_parentElement = target.parentElement) === null || _target_parentElement === void 0 ? void 0 : _target_parentElement.closest("[tabindex]");
      focusable === null || focusable === void 0 ? void 0 : focusable.focus({
        preventScroll: true
      });
    }
  };
  let focus = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function(opts) {
    let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576();
    let wasKeyboardVisible = activeElement != null && $bb39c0fc1c19b34c$export$c57958e35f31ed73(activeElement);
    focus.call(this, {
      ...opts,
      preventScroll: true
    });
    if (!opts || !opts.preventScroll) $49c51c25361d4cd2$var$scrollIntoViewWhenReady(this, wasKeyboardVisible);
  };
  let removeEvents2 = $a4e76a5424781910$export$e08e3b67e392101e($49c51c25361d4cd2$var$addEvent(document, "touchstart", onTouchStart, {
    passive: false,
    capture: true
  }), $49c51c25361d4cd2$var$addEvent(document, "touchmove", onTouchMove, {
    passive: false,
    capture: true
  }), $49c51c25361d4cd2$var$addEvent(document, "blur", onBlur, true));
  return () => {
    restoreOverflow();
    removeEvents2();
    style.remove();
    HTMLElement.prototype.focus = focus;
  };
}
function $49c51c25361d4cd2$var$setStyle(element, style, value) {
  let cur = element.style[style];
  element.style[style] = value;
  return () => {
    element.style[style] = cur;
  };
}
function $49c51c25361d4cd2$var$addEvent(target, event, handler, options) {
  target.addEventListener(event, handler, options);
  return () => {
    target.removeEventListener(event, handler, options);
  };
}
function $49c51c25361d4cd2$var$scrollIntoViewWhenReady(target, wasKeyboardVisible) {
  if (wasKeyboardVisible || !$49c51c25361d4cd2$var$visualViewport)
    $49c51c25361d4cd2$var$scrollIntoView(target);
  else
    $49c51c25361d4cd2$var$visualViewport.addEventListener("resize", () => $49c51c25361d4cd2$var$scrollIntoView(target), {
      once: true
    });
}
function $49c51c25361d4cd2$var$scrollIntoView(target) {
  let root = document.scrollingElement || document.documentElement;
  let nextTarget = target;
  while (nextTarget && nextTarget !== root) {
    let scrollable = $3578607fe3d4b096$export$cfa2225e87938781(nextTarget);
    if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== nextTarget) {
      let scrollableRect = scrollable.getBoundingClientRect();
      let targetRect = nextTarget.getBoundingClientRect();
      if (targetRect.top < scrollableRect.top || targetRect.bottom > scrollableRect.top + nextTarget.clientHeight) {
        let bottom = scrollableRect.bottom;
        if ($49c51c25361d4cd2$var$visualViewport) bottom = Math.min(bottom, $49c51c25361d4cd2$var$visualViewport.offsetTop + $49c51c25361d4cd2$var$visualViewport.height);
        let adjustment = targetRect.top - scrollableRect.top - ((bottom - scrollableRect.top) / 2 - targetRect.height / 2);
        scrollable.scrollTo({
          // Clamp to the valid range to prevent over-scrolling.
          top: Math.max(0, Math.min(scrollable.scrollHeight - scrollable.clientHeight, scrollable.scrollTop + adjustment)),
          behavior: "smooth"
        });
      }
    }
    nextTarget = scrollable.parentElement;
  }
}
var $773d5888b972f1cf$exports = {};
$773d5888b972f1cf$exports = {
  "dismiss": `تجاهل`
};
var $d11f19852b941573$exports = {};
$d11f19852b941573$exports = {
  "dismiss": `Отхвърляне`
};
var $b983974c2ee1efb3$exports = {};
$b983974c2ee1efb3$exports = {
  "dismiss": `Odstranit`
};
var $5809cc9d4e92de73$exports = {};
$5809cc9d4e92de73$exports = {
  "dismiss": `Luk`
};
var $c68c2e4fc74398d1$exports = {};
$c68c2e4fc74398d1$exports = {
  "dismiss": `Schließen`
};
var $0898b4c153db2b77$exports = {};
$0898b4c153db2b77$exports = {
  "dismiss": `Απόρριψη`
};
var $6d74810286a15183$exports = {};
$6d74810286a15183$exports = {
  "dismiss": `Dismiss`
};
var $309d73dc65f78055$exports = {};
$309d73dc65f78055$exports = {
  "dismiss": `Descartar`
};
var $44ad94f7205cf593$exports = {};
$44ad94f7205cf593$exports = {
  "dismiss": `Lõpeta`
};
var $7c28f5687f0779a9$exports = {};
$7c28f5687f0779a9$exports = {
  "dismiss": `Hylkää`
};
var $e6d75df4b68bd73a$exports = {};
$e6d75df4b68bd73a$exports = {
  "dismiss": `Rejeter`
};
var $87505c9dab186d0f$exports = {};
$87505c9dab186d0f$exports = {
  "dismiss": `התעלם`
};
var $553439c3ffb3e492$exports = {};
$553439c3ffb3e492$exports = {
  "dismiss": `Odbaci`
};
var $74cf411061b983a2$exports = {};
$74cf411061b983a2$exports = {
  "dismiss": `Elutasítás`
};
var $e933f298574dc435$exports = {};
$e933f298574dc435$exports = {
  "dismiss": `Ignora`
};
var $ac91fc9fe02f71f6$exports = {};
$ac91fc9fe02f71f6$exports = {
  "dismiss": `閉じる`
};
var $52b96f86422025af$exports = {};
$52b96f86422025af$exports = {
  "dismiss": `무시`
};
var $c0d724c3e51dafa6$exports = {};
$c0d724c3e51dafa6$exports = {
  "dismiss": `Atmesti`
};
var $c92899672a3fe72e$exports = {};
$c92899672a3fe72e$exports = {
  "dismiss": `Nerādīt`
};
var $9f576b39d8e7a9d6$exports = {};
$9f576b39d8e7a9d6$exports = {
  "dismiss": `Lukk`
};
var $9d025808aeec81a7$exports = {};
$9d025808aeec81a7$exports = {
  "dismiss": `Negeren`
};
var $fce709921e2c0fa6$exports = {};
$fce709921e2c0fa6$exports = {
  "dismiss": `Zignoruj`
};
var $2599cf0c4ab37f59$exports = {};
$2599cf0c4ab37f59$exports = {
  "dismiss": `Descartar`
};
var $3c220ae7ef8a35fd$exports = {};
$3c220ae7ef8a35fd$exports = {
  "dismiss": `Dispensar`
};
var $93562b5094072f54$exports = {};
$93562b5094072f54$exports = {
  "dismiss": `Revocare`
};
var $cd9e2abd0d06c7b4$exports = {};
$cd9e2abd0d06c7b4$exports = {
  "dismiss": `Пропустить`
};
var $45375701f409adf1$exports = {};
$45375701f409adf1$exports = {
  "dismiss": `Zrušiť`
};
var $27fab53a576de9dd$exports = {};
$27fab53a576de9dd$exports = {
  "dismiss": `Opusti`
};
var $4438748d9952e7c7$exports = {};
$4438748d9952e7c7$exports = {
  "dismiss": `Odbaci`
};
var $0936d7347ef4da4c$exports = {};
$0936d7347ef4da4c$exports = {
  "dismiss": `Avvisa`
};
var $29700c92185d38f8$exports = {};
$29700c92185d38f8$exports = {
  "dismiss": `Kapat`
};
var $662ccaf2be4c25b3$exports = {};
$662ccaf2be4c25b3$exports = {
  "dismiss": `Скасувати`
};
var $d80a27deda7cdb3c$exports = {};
$d80a27deda7cdb3c$exports = {
  "dismiss": `取消`
};
var $2b2734393847c884$exports = {};
$2b2734393847c884$exports = {
  "dismiss": `關閉`
};
var $a2f21f5f14f60553$exports = {};
$a2f21f5f14f60553$exports = {
  "ar-AE": $773d5888b972f1cf$exports,
  "bg-BG": $d11f19852b941573$exports,
  "cs-CZ": $b983974c2ee1efb3$exports,
  "da-DK": $5809cc9d4e92de73$exports,
  "de-DE": $c68c2e4fc74398d1$exports,
  "el-GR": $0898b4c153db2b77$exports,
  "en-US": $6d74810286a15183$exports,
  "es-ES": $309d73dc65f78055$exports,
  "et-EE": $44ad94f7205cf593$exports,
  "fi-FI": $7c28f5687f0779a9$exports,
  "fr-FR": $e6d75df4b68bd73a$exports,
  "he-IL": $87505c9dab186d0f$exports,
  "hr-HR": $553439c3ffb3e492$exports,
  "hu-HU": $74cf411061b983a2$exports,
  "it-IT": $e933f298574dc435$exports,
  "ja-JP": $ac91fc9fe02f71f6$exports,
  "ko-KR": $52b96f86422025af$exports,
  "lt-LT": $c0d724c3e51dafa6$exports,
  "lv-LV": $c92899672a3fe72e$exports,
  "nb-NO": $9f576b39d8e7a9d6$exports,
  "nl-NL": $9d025808aeec81a7$exports,
  "pl-PL": $fce709921e2c0fa6$exports,
  "pt-BR": $2599cf0c4ab37f59$exports,
  "pt-PT": $3c220ae7ef8a35fd$exports,
  "ro-RO": $93562b5094072f54$exports,
  "ru-RU": $cd9e2abd0d06c7b4$exports,
  "sk-SK": $45375701f409adf1$exports,
  "sl-SI": $27fab53a576de9dd$exports,
  "sr-SP": $4438748d9952e7c7$exports,
  "sv-SE": $0936d7347ef4da4c$exports,
  "tr-TR": $29700c92185d38f8$exports,
  "uk-UA": $662ccaf2be4c25b3$exports,
  "zh-CN": $d80a27deda7cdb3c$exports,
  "zh-TW": $2b2734393847c884$exports
};
const $5c3e21d68f1c4674$var$styles = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};
function $5c3e21d68f1c4674$export$a966af930f325cab(props = {}) {
  let { style, isFocusable } = props;
  let [isFocused, setFocused] = reactExports.useState(false);
  let { focusWithinProps } = $2c9edc598a03d523$export$420e68273165f4ec({
    isDisabled: !isFocusable,
    onFocusWithinChange: (val) => setFocused(val)
  });
  let combinedStyles = reactExports.useMemo(() => {
    if (isFocused) return style;
    else if (style) return {
      ...$5c3e21d68f1c4674$var$styles,
      ...style
    };
    else return $5c3e21d68f1c4674$var$styles;
  }, [
    isFocused
  ]);
  return {
    visuallyHiddenProps: {
      ...focusWithinProps,
      style: combinedStyles
    }
  };
}
function $5c3e21d68f1c4674$export$439d29a4e110a164(props) {
  let { children, elementType: Element2 = "div", isFocusable, style, ...otherProps } = props;
  let { visuallyHiddenProps } = $5c3e21d68f1c4674$export$a966af930f325cab(props);
  return /* @__PURE__ */ $4d1jn$react.createElement(Element2, $bbaa08b3cd72f041$export$9d1611c77c2fe928(otherProps, visuallyHiddenProps), children);
}
function $parcel$interopDefault$1(a) {
  return a && a.__esModule ? a.default : a;
}
function $86ea4cb521eb2e37$export$2317d149ed6f78c4(props) {
  let { onDismiss, ...otherProps } = props;
  let stringFormatter = $cf2482eff2eeeec2$export$f12b703ca79dfbb1($parcel$interopDefault$1($a2f21f5f14f60553$exports), "@react-aria/overlays");
  let labels = $e8ac3c3f5d4bae7f$export$d6875122194c7b44(otherProps, stringFormatter.format("dismiss"));
  let onClick = () => {
    if (onDismiss) onDismiss();
  };
  return /* @__PURE__ */ $4d1jn$react.createElement($5c3e21d68f1c4674$export$439d29a4e110a164, null, /* @__PURE__ */ $4d1jn$react.createElement("button", {
    ...labels,
    tabIndex: -1,
    onClick,
    style: {
      width: 1,
      height: 1
    }
  }));
}
const $337b884510726a0d$export$a2200b96afd16271 = /* @__PURE__ */ $4d1jn$react.createContext(null);
function $337b884510726a0d$export$c6fdb837b070b4ff(props) {
  let isSSR = $c7eafbbe1ea5834e$export$535bd6ca7f90a273();
  let { portalContainer = isSSR ? null : document.body, isExiting } = props;
  let [contain, setContain] = reactExports.useState(false);
  let contextValue = reactExports.useMemo(() => ({
    contain,
    setContain
  }), [
    contain,
    setContain
  ]);
  let { getContainer } = $96b38030c423d352$export$9fc1347d4195ccb3();
  if (!props.portalContainer && getContainer) portalContainer = getContainer();
  if (!portalContainer) return null;
  let contents = props.children;
  if (!props.disableFocusManagement) contents = /* @__PURE__ */ $4d1jn$react.createElement($9bf71ea28793e738$export$20e40289641fbbb6, {
    restoreFocus: true,
    contain: (props.shouldContainFocus || contain) && !isExiting
  }, contents);
  contents = /* @__PURE__ */ $4d1jn$react.createElement($337b884510726a0d$export$a2200b96afd16271.Provider, {
    value: contextValue
  }, /* @__PURE__ */ $4d1jn$react.createElement($0d47b37c475c5231$export$cf75428e0b9ed1ea, null, contents));
  return /* @__PURE__ */ $3wX5A$reactdom.createPortal(contents, portalContainer);
}
function $337b884510726a0d$export$14c98a7594375490() {
  let ctx = reactExports.useContext($337b884510726a0d$export$a2200b96afd16271);
  let setContain = ctx === null || ctx === void 0 ? void 0 : ctx.setContain;
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    setContain === null || setContain === void 0 ? void 0 : setContain(true);
  }, [
    setContain
  ]);
}
function useLabelPlacement(props) {
  const globalContext = useProviderContext();
  const globalLabelPlacement = globalContext == null ? void 0 : globalContext.labelPlacement;
  return reactExports.useMemo(() => {
    var _a, _b;
    const labelPlacement = (_b = (_a = props.labelPlacement) != null ? _a : globalLabelPlacement) != null ? _b : "inside";
    if (labelPlacement === "inside" && !props.label) {
      return "outside";
    }
    return labelPlacement;
  }, [props.labelPlacement, globalLabelPlacement, props.label]);
}
var verticalShadow = [
  "data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
  "data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
  "data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"
];
var horizontalShadow = [
  "data-[left-scroll=true]:[mask-image:linear-gradient(270deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
  "data-[right-scroll=true]:[mask-image:linear-gradient(90deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
  "data-[left-right-scroll=true]:[mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"
];
var scrollShadow = tv({
  base: [],
  variants: {
    orientation: {
      vertical: ["overflow-y-auto", ...verticalShadow],
      horizontal: ["overflow-x-auto", ...horizontalShadow]
    },
    hideScrollBar: {
      true: "scrollbar-hide",
      false: ""
    }
  },
  defaultVariants: {
    orientation: "vertical",
    hideScrollBar: false
  }
});
var form = tv({
  base: "flex flex-col gap-2 items-start"
});
function $feb5ffebff200149$export$c3d8340acf92597f(collectionRef, key) {
  var _collectionRef_current, _collectionRef_current1;
  let selector = `[data-key="${CSS.escape(String(key))}"]`;
  let collection = (_collectionRef_current = collectionRef.current) === null || _collectionRef_current === void 0 ? void 0 : _collectionRef_current.dataset.collection;
  if (collection) selector = `[data-collection="${CSS.escape(collection)}"]${selector}`;
  return (_collectionRef_current1 = collectionRef.current) === null || _collectionRef_current1 === void 0 ? void 0 : _collectionRef_current1.querySelector(selector);
}
const $fb3050f43d946246$var$TYPEAHEAD_DEBOUNCE_WAIT_MS = 1e3;
function $fb3050f43d946246$export$e32c88dfddc6e1d8(options) {
  let { keyboardDelegate, selectionManager, onTypeSelect } = options;
  let state = reactExports.useRef({
    search: "",
    timeout: void 0
  }).current;
  let onKeyDown = (e) => {
    let character = $fb3050f43d946246$var$getStringForKey(e.key);
    if (!character || e.ctrlKey || e.metaKey || !$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e)) || state.search.length === 0 && character === " ") return;
    if (character === " " && state.search.trim().length > 0) {
      e.preventDefault();
      if (!("continuePropagation" in e)) e.stopPropagation();
    }
    state.search += character;
    if (keyboardDelegate.getKeyForSearch != null) {
      let key = keyboardDelegate.getKeyForSearch(state.search, selectionManager.focusedKey);
      if (key == null) key = keyboardDelegate.getKeyForSearch(state.search);
      if (key != null) {
        selectionManager.setFocusedKey(key);
        if (onTypeSelect) onTypeSelect(key);
      }
    }
    clearTimeout(state.timeout);
    state.timeout = setTimeout(() => {
      state.search = "";
    }, $fb3050f43d946246$var$TYPEAHEAD_DEBOUNCE_WAIT_MS);
  };
  return {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDown : void 0
    }
  };
}
function $fb3050f43d946246$var$getStringForKey(key) {
  if (key.length === 1 || !/^[A-Z]/i.test(key)) return key;
  return "";
}
class $657e4dc4a6e88df0$export$8f5ed9ff9f511381 {
  getItemRect(key) {
    let container = this.ref.current;
    if (!container) return null;
    let item = key != null ? $feb5ffebff200149$export$c3d8340acf92597f(this.ref, key) : null;
    if (!item) return null;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    return {
      x: itemRect.left - containerRect.left - container.clientLeft + container.scrollLeft,
      y: itemRect.top - containerRect.top - container.clientTop + container.scrollTop,
      width: itemRect.width,
      height: itemRect.height
    };
  }
  getContentSize() {
    let container = this.ref.current;
    var _container_scrollWidth, _container_scrollHeight;
    return {
      width: (_container_scrollWidth = container === null || container === void 0 ? void 0 : container.scrollWidth) !== null && _container_scrollWidth !== void 0 ? _container_scrollWidth : 0,
      height: (_container_scrollHeight = container === null || container === void 0 ? void 0 : container.scrollHeight) !== null && _container_scrollHeight !== void 0 ? _container_scrollHeight : 0
    };
  }
  getVisibleRect() {
    let container = this.ref.current;
    var _container_scrollLeft, _container_scrollTop, _container_clientWidth, _container_clientHeight;
    return {
      x: (_container_scrollLeft = container === null || container === void 0 ? void 0 : container.scrollLeft) !== null && _container_scrollLeft !== void 0 ? _container_scrollLeft : 0,
      y: (_container_scrollTop = container === null || container === void 0 ? void 0 : container.scrollTop) !== null && _container_scrollTop !== void 0 ? _container_scrollTop : 0,
      width: (_container_clientWidth = container === null || container === void 0 ? void 0 : container.clientWidth) !== null && _container_clientWidth !== void 0 ? _container_clientWidth : 0,
      height: (_container_clientHeight = container === null || container === void 0 ? void 0 : container.clientHeight) !== null && _container_clientHeight !== void 0 ? _container_clientHeight : 0
    };
  }
  constructor(ref) {
    this.ref = ref;
  }
}
class $2a25aae57d74318e$export$a05409b8bb224a5a {
  isDisabled(item) {
    var _item_props;
    return this.disabledBehavior === "all" && (((_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.isDisabled) || this.disabledKeys.has(item.key));
  }
  findNextNonDisabled(key, getNext) {
    let nextKey = key;
    while (nextKey != null) {
      let item = this.collection.getItem(nextKey);
      if ((item === null || item === void 0 ? void 0 : item.type) === "item" && !this.isDisabled(item)) return nextKey;
      nextKey = getNext(nextKey);
    }
    return null;
  }
  getNextKey(key) {
    let nextKey = key;
    nextKey = this.collection.getKeyAfter(nextKey);
    return this.findNextNonDisabled(nextKey, (key2) => this.collection.getKeyAfter(key2));
  }
  getPreviousKey(key) {
    let nextKey = key;
    nextKey = this.collection.getKeyBefore(nextKey);
    return this.findNextNonDisabled(nextKey, (key2) => this.collection.getKeyBefore(key2));
  }
  findKey(key, nextKey, shouldSkip) {
    let tempKey = key;
    let itemRect = this.layoutDelegate.getItemRect(tempKey);
    if (!itemRect || tempKey == null) return null;
    let prevRect = itemRect;
    do {
      tempKey = nextKey(tempKey);
      if (tempKey == null) break;
      itemRect = this.layoutDelegate.getItemRect(tempKey);
    } while (itemRect && shouldSkip(prevRect, itemRect) && tempKey != null);
    return tempKey;
  }
  isSameRow(prevRect, itemRect) {
    return prevRect.y === itemRect.y || prevRect.x !== itemRect.x;
  }
  isSameColumn(prevRect, itemRect) {
    return prevRect.x === itemRect.x || prevRect.y !== itemRect.y;
  }
  getKeyBelow(key) {
    if (this.layout === "grid" && this.orientation === "vertical") return this.findKey(key, (key2) => this.getNextKey(key2), this.isSameRow);
    else return this.getNextKey(key);
  }
  getKeyAbove(key) {
    if (this.layout === "grid" && this.orientation === "vertical") return this.findKey(key, (key2) => this.getPreviousKey(key2), this.isSameRow);
    else return this.getPreviousKey(key);
  }
  getNextColumn(key, right) {
    return right ? this.getPreviousKey(key) : this.getNextKey(key);
  }
  getKeyRightOf(key) {
    let layoutDelegateMethod = this.direction === "ltr" ? "getKeyRightOf" : "getKeyLeftOf";
    if (this.layoutDelegate[layoutDelegateMethod]) {
      key = this.layoutDelegate[layoutDelegateMethod](key);
      return this.findNextNonDisabled(key, (key2) => this.layoutDelegate[layoutDelegateMethod](key2));
    }
    if (this.layout === "grid") {
      if (this.orientation === "vertical") return this.getNextColumn(key, this.direction === "rtl");
      else return this.findKey(key, (key2) => this.getNextColumn(key2, this.direction === "rtl"), this.isSameColumn);
    } else if (this.orientation === "horizontal") return this.getNextColumn(key, this.direction === "rtl");
    return null;
  }
  getKeyLeftOf(key) {
    let layoutDelegateMethod = this.direction === "ltr" ? "getKeyLeftOf" : "getKeyRightOf";
    if (this.layoutDelegate[layoutDelegateMethod]) {
      key = this.layoutDelegate[layoutDelegateMethod](key);
      return this.findNextNonDisabled(key, (key2) => this.layoutDelegate[layoutDelegateMethod](key2));
    }
    if (this.layout === "grid") {
      if (this.orientation === "vertical") return this.getNextColumn(key, this.direction === "ltr");
      else return this.findKey(key, (key2) => this.getNextColumn(key2, this.direction === "ltr"), this.isSameColumn);
    } else if (this.orientation === "horizontal") return this.getNextColumn(key, this.direction === "ltr");
    return null;
  }
  getFirstKey() {
    let key = this.collection.getFirstKey();
    return this.findNextNonDisabled(key, (key2) => this.collection.getKeyAfter(key2));
  }
  getLastKey() {
    let key = this.collection.getLastKey();
    return this.findNextNonDisabled(key, (key2) => this.collection.getKeyBefore(key2));
  }
  getKeyPageAbove(key) {
    let menu2 = this.ref.current;
    let itemRect = this.layoutDelegate.getItemRect(key);
    if (!itemRect) return null;
    if (menu2 && !$901761b40e390936$export$2bb74740c4e19def(menu2)) return this.getFirstKey();
    let nextKey = key;
    if (this.orientation === "horizontal") {
      let pageX = Math.max(0, itemRect.x + itemRect.width - this.layoutDelegate.getVisibleRect().width);
      while (itemRect && itemRect.x > pageX && nextKey != null) {
        nextKey = this.getKeyAbove(nextKey);
        itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
      }
    } else {
      let pageY = Math.max(0, itemRect.y + itemRect.height - this.layoutDelegate.getVisibleRect().height);
      while (itemRect && itemRect.y > pageY && nextKey != null) {
        nextKey = this.getKeyAbove(nextKey);
        itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
      }
    }
    return nextKey !== null && nextKey !== void 0 ? nextKey : this.getFirstKey();
  }
  getKeyPageBelow(key) {
    let menu2 = this.ref.current;
    let itemRect = this.layoutDelegate.getItemRect(key);
    if (!itemRect) return null;
    if (menu2 && !$901761b40e390936$export$2bb74740c4e19def(menu2)) return this.getLastKey();
    let nextKey = key;
    if (this.orientation === "horizontal") {
      let pageX = Math.min(this.layoutDelegate.getContentSize().width, itemRect.y - itemRect.width + this.layoutDelegate.getVisibleRect().width);
      while (itemRect && itemRect.x < pageX && nextKey != null) {
        nextKey = this.getKeyBelow(nextKey);
        itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
      }
    } else {
      let pageY = Math.min(this.layoutDelegate.getContentSize().height, itemRect.y - itemRect.height + this.layoutDelegate.getVisibleRect().height);
      while (itemRect && itemRect.y < pageY && nextKey != null) {
        nextKey = this.getKeyBelow(nextKey);
        itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
      }
    }
    return nextKey !== null && nextKey !== void 0 ? nextKey : this.getLastKey();
  }
  getKeyForSearch(search, fromKey) {
    if (!this.collator) return null;
    let collection = this.collection;
    let key = fromKey || this.getFirstKey();
    while (key != null) {
      let item = collection.getItem(key);
      if (!item) return null;
      let substring = item.textValue.slice(0, search.length);
      if (item.textValue && this.collator.compare(substring, search) === 0) return key;
      key = this.getNextKey(key);
    }
    return null;
  }
  constructor(...args) {
    if (args.length === 1) {
      let opts = args[0];
      this.collection = opts.collection;
      this.ref = opts.ref;
      this.collator = opts.collator;
      this.disabledKeys = opts.disabledKeys || /* @__PURE__ */ new Set();
      this.disabledBehavior = opts.disabledBehavior || "all";
      this.orientation = opts.orientation || "vertical";
      this.direction = opts.direction;
      this.layout = opts.layout || "stack";
      this.layoutDelegate = opts.layoutDelegate || new $657e4dc4a6e88df0$export$8f5ed9ff9f511381(opts.ref);
    } else {
      this.collection = args[0];
      this.disabledKeys = args[1];
      this.ref = args[2];
      this.collator = args[3];
      this.layout = "stack";
      this.orientation = "vertical";
      this.disabledBehavior = "all";
      this.layoutDelegate = new $657e4dc4a6e88df0$export$8f5ed9ff9f511381(this.ref);
    }
    if (this.layout === "stack" && this.orientation === "vertical") {
      this.getKeyLeftOf = void 0;
      this.getKeyRightOf = void 0;
    }
  }
}
var ChevronDownIcon = ({ strokeWidth = 1.5, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    focusable: "false",
    height: "1em",
    role: "presentation",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth,
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m6 9 6 6 6-6" })
  }
);
var TRANSITION_EASINGS = {
  ease: [0.36, 0.66, 0.4, 1]
};
var TRANSITION_VARIANTS = {
  scaleSpring: {
    enter: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.2
      }
    },
    exit: {
      transform: "scale(0.85)",
      opacity: 0,
      transition: {
        type: "easeOut",
        duration: 0.15
      }
    }
  },
  scaleSpringOpacity: {
    initial: {
      opacity: 0,
      transform: "scale(0.8)"
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transform: "scale(0.96)",
      transition: {
        type: "easeOut",
        bounce: 0,
        duration: 0.15
      }
    }
  },
  fade: {
    enter: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: TRANSITION_EASINGS.ease
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: TRANSITION_EASINGS.ease
      }
    }
  }
};
class $8b2540e09867b15e$export$52baac22726c72bf extends Set {
  constructor(keys, anchorKey, currentKey) {
    super(keys);
    if (keys instanceof $8b2540e09867b15e$export$52baac22726c72bf) {
      this.anchorKey = anchorKey ?? keys.anchorKey;
      this.currentKey = currentKey ?? keys.currentKey;
    } else {
      this.anchorKey = anchorKey ?? null;
      this.currentKey = currentKey ?? null;
    }
  }
}
function $60f19cefd567a3e4$var$equalSets(setA, setB) {
  if (setA.size !== setB.size) return false;
  for (let item of setA) {
    if (!setB.has(item)) return false;
  }
  return true;
}
function $60f19cefd567a3e4$export$253fe78d46329472(props) {
  let { selectionMode = "none", disallowEmptySelection = false, allowDuplicateSelectionEvents, selectionBehavior: selectionBehaviorProp = "toggle", disabledBehavior = "all" } = props;
  let isFocusedRef = reactExports.useRef(false);
  let [, setFocused] = reactExports.useState(false);
  let focusedKeyRef = reactExports.useRef(null);
  let childFocusStrategyRef = reactExports.useRef(null);
  let [, setFocusedKey] = reactExports.useState(null);
  let selectedKeysProp = reactExports.useMemo(() => $60f19cefd567a3e4$var$convertSelection(props.selectedKeys), [
    props.selectedKeys
  ]);
  let defaultSelectedKeys = reactExports.useMemo(() => $60f19cefd567a3e4$var$convertSelection(props.defaultSelectedKeys, new $8b2540e09867b15e$export$52baac22726c72bf()), [
    props.defaultSelectedKeys
  ]);
  let [selectedKeys, setSelectedKeys] = $3e6197669829fe11$export$40bfa8c7b0832715(selectedKeysProp, defaultSelectedKeys, props.onSelectionChange);
  let disabledKeysProp = reactExports.useMemo(() => props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set(), [
    props.disabledKeys
  ]);
  let [selectionBehavior, setSelectionBehavior] = reactExports.useState(selectionBehaviorProp);
  if (selectionBehaviorProp === "replace" && selectionBehavior === "toggle" && typeof selectedKeys === "object" && selectedKeys.size === 0) setSelectionBehavior("replace");
  let lastSelectionBehavior = reactExports.useRef(selectionBehaviorProp);
  reactExports.useEffect(() => {
    if (selectionBehaviorProp !== lastSelectionBehavior.current) {
      setSelectionBehavior(selectionBehaviorProp);
      lastSelectionBehavior.current = selectionBehaviorProp;
    }
  }, [
    selectionBehaviorProp
  ]);
  return {
    selectionMode,
    disallowEmptySelection,
    selectionBehavior,
    setSelectionBehavior,
    get isFocused() {
      return isFocusedRef.current;
    },
    setFocused(f) {
      isFocusedRef.current = f;
      setFocused(f);
    },
    get focusedKey() {
      return focusedKeyRef.current;
    },
    get childFocusStrategy() {
      return childFocusStrategyRef.current;
    },
    setFocusedKey(k, childFocusStrategy = "first") {
      focusedKeyRef.current = k;
      childFocusStrategyRef.current = childFocusStrategy;
      setFocusedKey(k);
    },
    selectedKeys,
    setSelectedKeys(keys) {
      if (allowDuplicateSelectionEvents || !$60f19cefd567a3e4$var$equalSets(keys, selectedKeys)) setSelectedKeys(keys);
    },
    disabledKeys: disabledKeysProp,
    disabledBehavior
  };
}
function $60f19cefd567a3e4$var$convertSelection(selection, defaultValue) {
  if (!selection) return defaultValue;
  return selection === "all" ? "all" : new $8b2540e09867b15e$export$52baac22726c72bf(selection);
}
function $cd5ea4b915021f1d$export$1005530eda016c13(node, collection) {
  if (typeof collection.getChildren === "function") return collection.getChildren(node.key);
  return node.childNodes;
}
function $cd5ea4b915021f1d$export$fbdeaa6a76694f71(iterable) {
  return $cd5ea4b915021f1d$export$5f3398f8733f90e2(iterable);
}
function $cd5ea4b915021f1d$export$5f3398f8733f90e2(iterable, index) {
  for (let item of iterable) {
    return item;
  }
}
function $cd5ea4b915021f1d$export$8c434b3a7a4dad6(collection, a, b) {
  if (a.parentKey === b.parentKey) return a.index - b.index;
  let aAncestors = [
    ...$cd5ea4b915021f1d$var$getAncestors(collection, a),
    a
  ];
  let bAncestors = [
    ...$cd5ea4b915021f1d$var$getAncestors(collection, b),
    b
  ];
  let firstNonMatchingAncestor = aAncestors.slice(0, bAncestors.length).findIndex((a2, i) => a2 !== bAncestors[i]);
  if (firstNonMatchingAncestor !== -1) {
    a = aAncestors[firstNonMatchingAncestor];
    b = bAncestors[firstNonMatchingAncestor];
    return a.index - b.index;
  }
  if (aAncestors.findIndex((node) => node === b) >= 0) return 1;
  else if (bAncestors.findIndex((node) => node === a) >= 0) return -1;
  return -1;
}
function $cd5ea4b915021f1d$var$getAncestors(collection, node) {
  let parents = [];
  let currNode = node;
  while (currNode?.parentKey != null) {
    currNode = collection.getItem(currNode.parentKey);
    if (currNode) parents.unshift(currNode);
  }
  return parents;
}
class $4a07ac835f260f78$export$6c8a5aaad13c9852 {
  constructor(collection, state, options) {
    this.collection = collection;
    this.state = state;
    this.allowsCellSelection = options?.allowsCellSelection ?? false;
    this._isSelectAll = null;
    this.layoutDelegate = options?.layoutDelegate || null;
    this.fullCollection = options?.fullCollection || null;
  }
  /**
  * The type of selection that is allowed in the collection.
  */
  get selectionMode() {
    return this.state.selectionMode;
  }
  /**
  * Whether the collection allows empty selection.
  */
  get disallowEmptySelection() {
    return this.state.disallowEmptySelection;
  }
  /**
  * The selection behavior for the collection.
  */
  get selectionBehavior() {
    return this.state.selectionBehavior;
  }
  /**
  * Sets the selection behavior for the collection.
  */
  setSelectionBehavior(selectionBehavior) {
    this.state.setSelectionBehavior(selectionBehavior);
  }
  /**
  * Whether the collection is currently focused.
  */
  get isFocused() {
    return this.state.isFocused;
  }
  /**
  * Sets whether the collection is focused.
  */
  setFocused(isFocused) {
    this.state.setFocused(isFocused);
  }
  /**
  * The current focused key in the collection.
  */
  get focusedKey() {
    return this.state.focusedKey;
  }
  /** Whether the first or last child of the focused key should receive focus. */
  get childFocusStrategy() {
    return this.state.childFocusStrategy;
  }
  /**
  * Sets the focused key.
  */
  setFocusedKey(key, childFocusStrategy) {
    if (key == null || this.collection.getItem(key)) this.state.setFocusedKey(key, childFocusStrategy);
  }
  /**
  * The currently selected keys in the collection.
  */
  get selectedKeys() {
    return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
  }
  /**
  * The raw selection value for the collection.
  * Either 'all' for select all, or a set of keys.
  */
  get rawSelection() {
    return this.state.selectedKeys;
  }
  /**
  * Returns whether a key is selected.
  */
  isSelected(key) {
    if (this.state.selectionMode === "none") return false;
    let mappedKey = this.getKey(key);
    if (mappedKey == null) return false;
    return this.state.selectedKeys === "all" ? this.canSelectItem(mappedKey) : this.state.selectedKeys.has(mappedKey);
  }
  /**
  * Whether the selection is empty.
  */
  get isEmpty() {
    return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
  }
  /**
  * Whether all items in the collection are selected.
  */
  get isSelectAll() {
    if (this.isEmpty) return false;
    if (this.state.selectedKeys === "all") return true;
    if (this._isSelectAll != null) return this._isSelectAll;
    let allKeys = this.getSelectAllKeys();
    let selectedKeys = this.state.selectedKeys;
    this._isSelectAll = allKeys.every((k) => selectedKeys.has(k));
    return this._isSelectAll;
  }
  get firstSelectedKey() {
    let first = null;
    for (let key of this.state.selectedKeys) {
      let item = this.collection.getItem(key);
      if (!first || item && $cd5ea4b915021f1d$export$8c434b3a7a4dad6(this.collection, item, first) < 0) first = item;
    }
    return first?.key ?? null;
  }
  get lastSelectedKey() {
    let last = null;
    for (let key of this.state.selectedKeys) {
      let item = this.collection.getItem(key);
      if (!last || item && $cd5ea4b915021f1d$export$8c434b3a7a4dad6(this.collection, item, last) > 0) last = item;
    }
    return last?.key ?? null;
  }
  get disabledKeys() {
    return this.state.disabledKeys;
  }
  get disabledBehavior() {
    return this.state.disabledBehavior;
  }
  /**
  * Extends the selection to the given key.
  */
  extendSelection(toKey) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single") {
      this.replaceSelection(toKey);
      return;
    }
    let mappedToKey = this.getKey(toKey);
    if (mappedToKey == null) return;
    let selection;
    if (this.state.selectedKeys === "all") selection = new $8b2540e09867b15e$export$52baac22726c72bf([
      mappedToKey
    ], mappedToKey, mappedToKey);
    else {
      let selectedKeys = this.state.selectedKeys;
      let anchorKey = selectedKeys.anchorKey ?? mappedToKey;
      selection = new $8b2540e09867b15e$export$52baac22726c72bf(selectedKeys, anchorKey, mappedToKey);
      for (let key of this.getKeyRange(anchorKey, selectedKeys.currentKey ?? mappedToKey)) selection.delete(key);
      for (let key of this.getKeyRange(mappedToKey, anchorKey)) if (this.canSelectItem(key)) selection.add(key);
    }
    this.state.setSelectedKeys(selection);
  }
  getKeyRange(from, to) {
    let fromItem = this.collection.getItem(from);
    let toItem = this.collection.getItem(to);
    if (fromItem && toItem) {
      if ($cd5ea4b915021f1d$export$8c434b3a7a4dad6(this.collection, fromItem, toItem) <= 0) return this.getKeyRangeInternal(from, to);
      return this.getKeyRangeInternal(to, from);
    }
    return [];
  }
  getKeyRangeInternal(from, to) {
    if (this.layoutDelegate?.getKeyRange) return this.layoutDelegate.getKeyRange(from, to);
    let keys = [];
    let key = from;
    while (key != null) {
      let item = this.collection.getItem(key);
      if (item && (item.type === "item" || item.type === "cell" && this.allowsCellSelection)) keys.push(key);
      if (key === to) return keys;
      key = this.collection.getKeyAfter(key);
    }
    return [];
  }
  getKey(key) {
    let item = this.collection.getItem(key);
    if (!item)
      return key;
    if (item.type === "cell" && this.allowsCellSelection) return key;
    while (item && item.type !== "item" && item.parentKey != null) item = this.collection.getItem(item.parentKey);
    if (!item || item.type !== "item") return null;
    return item.key;
  }
  /**
  * Toggles whether the given key is selected.
  */
  toggleSelection(key) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single" && !this.isSelected(key)) {
      this.replaceSelection(key);
      return;
    }
    let mappedKey = this.getKey(key);
    if (mappedKey == null) return;
    let keys = new $8b2540e09867b15e$export$52baac22726c72bf(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
    if (keys.has(mappedKey)) keys.delete(mappedKey);
    else if (this.canSelectItem(mappedKey)) {
      keys.add(mappedKey);
      keys.anchorKey = mappedKey;
      keys.currentKey = mappedKey;
    }
    if (this.disallowEmptySelection && keys.size === 0) return;
    this.state.setSelectedKeys(keys);
  }
  /**
  * Replaces the selection with only the given key.
  */
  replaceSelection(key) {
    if (this.selectionMode === "none") return;
    let mappedKey = this.getKey(key);
    if (mappedKey == null) return;
    let selection = this.canSelectItem(mappedKey) ? new $8b2540e09867b15e$export$52baac22726c72bf([
      mappedKey
    ], mappedKey, mappedKey) : new $8b2540e09867b15e$export$52baac22726c72bf();
    this.state.setSelectedKeys(selection);
  }
  /**
  * Replaces the selection with the given keys.
  */
  setSelectedKeys(keys) {
    if (this.selectionMode === "none") return;
    let selection = new $8b2540e09867b15e$export$52baac22726c72bf();
    for (let key of keys) {
      let mappedKey = this.getKey(key);
      if (mappedKey != null) {
        selection.add(mappedKey);
        if (this.selectionMode === "single") break;
      }
    }
    this.state.setSelectedKeys(selection);
  }
  getSelectAllKeys() {
    let collection = this.fullCollection ?? this.collection;
    let keys = [];
    let addKeys = (key) => {
      while (key != null) {
        if (this.canSelectItemIn(key, collection)) {
          let item = collection.getItem(key);
          if (item?.type === "item") keys.push(key);
          if (item?.hasChildNodes && (this.allowsCellSelection || item.type !== "item")) addKeys($cd5ea4b915021f1d$export$fbdeaa6a76694f71($cd5ea4b915021f1d$export$1005530eda016c13(item, collection))?.key ?? null);
        }
        key = collection.getKeyAfter(key);
      }
    };
    addKeys(collection.getFirstKey());
    return keys;
  }
  /**
  * Selects all items in the collection.
  */
  selectAll() {
    if (!this.isSelectAll && this.selectionMode === "multiple") this.state.setSelectedKeys("all");
  }
  /**
  * Removes all keys from the selection.
  */
  clearSelection() {
    if (!this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0)) this.state.setSelectedKeys(new $8b2540e09867b15e$export$52baac22726c72bf());
  }
  /**
  * Toggles between select all and an empty selection.
  */
  toggleSelectAll() {
    if (this.isSelectAll) this.clearSelection();
    else this.selectAll();
  }
  select(key, e) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single") {
      if (this.isSelected(key) && !this.disallowEmptySelection) this.toggleSelection(key);
      else this.replaceSelection(key);
    } else if (this.selectionBehavior === "toggle" || e && (e.pointerType === "touch" || e.pointerType === "virtual"))
      this.toggleSelection(key);
    else this.replaceSelection(key);
  }
  /**
  * Returns whether the current selection is equal to the given selection.
  */
  isSelectionEqual(selection) {
    if (selection === this.state.selectedKeys) return true;
    let selectedKeys = this.selectedKeys;
    if (selection.size !== selectedKeys.size) return false;
    for (let key of selection) {
      if (!selectedKeys.has(key)) return false;
    }
    for (let key of selectedKeys) {
      if (!selection.has(key)) return false;
    }
    return true;
  }
  canSelectItem(key) {
    return this.canSelectItemIn(key, this.collection);
  }
  canSelectItemIn(key, collection) {
    if (this.state.selectionMode === "none" || this.state.disabledKeys.has(key)) return false;
    let item = collection.getItem(key);
    if (!item || item?.props?.isDisabled || item.type === "cell" && !this.allowsCellSelection) return false;
    return true;
  }
  isDisabled(key) {
    let item = this.collection.getItem(key);
    return this.state.disabledBehavior === "all" && (this.state.disabledKeys.has(key) || !!item?.props?.isDisabled) && item?.props?.disabledBehavior !== "selection";
  }
  isLink(key) {
    return !!this.collection.getItem(key)?.props?.href;
  }
  getItemProps(key) {
    return this.collection.getItem(key)?.props;
  }
  withCollection(collection) {
    return new $4a07ac835f260f78$export$6c8a5aaad13c9852(collection, this.state, {
      allowsCellSelection: this.allowsCellSelection,
      layoutDelegate: this.layoutDelegate || void 0,
      fullCollection: this.fullCollection ?? this.collection
    });
  }
}
class $bda7a7e55e1ff206$export$bf788dd355e3a401 {
  build(props, context) {
    this.context = context;
    return $bda7a7e55e1ff206$var$iterable(() => this.iterateCollection(props));
  }
  *iterateCollection(props) {
    let { children, items } = props;
    if ($4d1jn$react.isValidElement(children) && children.type === $4d1jn$react.Fragment) yield* this.iterateCollection({
      children: children.props.children,
      items
    });
    else if (typeof children === "function") {
      if (!items) throw new Error("props.children was a function but props.items is missing");
      let index = 0;
      for (let item of items) {
        yield* this.getFullNode({
          value: item,
          index
        }, {
          renderer: children
        });
        index++;
      }
    } else {
      let items2 = [];
      $4d1jn$react.Children.forEach(children, (child) => {
        if (child) items2.push(child);
      });
      let index = 0;
      for (let item of items2) {
        let nodes = this.getFullNode({
          element: item,
          index
        }, {});
        for (let node of nodes) {
          index++;
          yield node;
        }
      }
    }
  }
  getKey(item, partialNode, state, parentKey) {
    if (item.key != null) return item.key;
    if (partialNode.type === "cell" && partialNode.key != null) return `${parentKey}${partialNode.key}`;
    let v = partialNode.value;
    if (v != null) {
      let key = v.key ?? v.id;
      if (key == null) throw new Error("No key found for item");
      return key;
    }
    return parentKey ? `${parentKey}.${partialNode.index}` : `$.${partialNode.index}`;
  }
  getChildState(state, partialNode) {
    return {
      renderer: partialNode.renderer || state.renderer
    };
  }
  *getFullNode(partialNode, state, parentKey, parentNode) {
    if ($4d1jn$react.isValidElement(partialNode.element) && partialNode.element.type === $4d1jn$react.Fragment) {
      let children = [];
      $4d1jn$react.Children.forEach(partialNode.element.props.children, (child) => {
        children.push(child);
      });
      let index = partialNode.index ?? 0;
      for (const child of children) yield* this.getFullNode({
        element: child,
        index: index++
      }, state, parentKey, parentNode);
      return;
    }
    let element = partialNode.element;
    if (!element && partialNode.value && state && state.renderer) {
      let cached = this.cache.get(partialNode.value);
      if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
        cached.index = partialNode.index;
        cached.parentKey = parentNode ? parentNode.key : null;
        yield cached;
        return;
      }
      element = state.renderer(partialNode.value);
    }
    if ($4d1jn$react.isValidElement(element)) {
      let type = element.type;
      if (typeof type !== "function" && typeof type.getCollectionNode !== "function") {
        let name = element.type;
        throw new Error(`Unknown element <${name}> in collection.`);
      }
      let childNodes = type.getCollectionNode(element.props, this.context);
      let index = partialNode.index ?? 0;
      let result = childNodes.next();
      while (!result.done && result.value) {
        let childNode = result.value;
        partialNode.index = index;
        let nodeKey = childNode.key ?? null;
        if (nodeKey == null) nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
        let nodes = this.getFullNode({
          ...childNode,
          key: nodeKey,
          index,
          wrapper: $bda7a7e55e1ff206$var$compose(partialNode.wrapper, childNode.wrapper)
        }, this.getChildState(state, childNode), parentKey ? `${parentKey}${element.key}` : element.key, parentNode);
        let children = [
          ...nodes
        ];
        for (let node2 of children) {
          node2.value = childNode.value ?? partialNode.value ?? null;
          if (node2.value) this.cache.set(node2.value, node2);
          if (partialNode.type && node2.type !== partialNode.type) throw new Error(`Unsupported type <${$bda7a7e55e1ff206$var$capitalize(node2.type)}> in <${$bda7a7e55e1ff206$var$capitalize(parentNode?.type ?? "unknown parent type")}>. Only <${$bda7a7e55e1ff206$var$capitalize(partialNode.type)}> is supported.`);
          index++;
          yield node2;
        }
        result = childNodes.next(children);
      }
      return;
    }
    if (partialNode.key == null || partialNode.type == null) return;
    let builder = this;
    let node = {
      type: partialNode.type,
      props: partialNode.props,
      key: partialNode.key,
      parentKey: parentNode ? parentNode.key : null,
      value: partialNode.value ?? null,
      level: (parentNode?.level ?? 0) + (parentNode?.type === "item" ? 1 : 0),
      index: partialNode.index,
      rendered: partialNode.rendered,
      textValue: partialNode.textValue ?? "",
      "aria-label": partialNode["aria-label"],
      wrapper: partialNode.wrapper,
      shouldInvalidate: partialNode.shouldInvalidate,
      hasChildNodes: partialNode.hasChildNodes || false,
      childNodes: $bda7a7e55e1ff206$var$iterable(function* () {
        if (!partialNode.hasChildNodes || !partialNode.childNodes) return;
        let index = 0;
        for (let child of partialNode.childNodes()) {
          if (child.key != null)
            child.key = `${node.key}${child.key}`;
          let nodes = builder.getFullNode({
            ...child,
            index
          }, builder.getChildState(state, child), node.key, node);
          for (let node2 of nodes) {
            index++;
            yield node2;
          }
        }
      })
    };
    yield node;
  }
  constructor() {
    this.cache = /* @__PURE__ */ new WeakMap();
  }
}
function $bda7a7e55e1ff206$var$iterable(iterator) {
  let cache = [];
  let iterable = null;
  return {
    *[Symbol.iterator]() {
      for (let item of cache) yield item;
      if (!iterable) iterable = iterator();
      for (let item of iterable) {
        cache.push(item);
        yield item;
      }
    }
  };
}
function $bda7a7e55e1ff206$var$compose(outer, inner) {
  if (outer && inner) return (element) => outer(inner(element));
  if (outer) return outer;
  if (inner) return inner;
}
function $bda7a7e55e1ff206$var$capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
function $d03379b88399b8c5$export$6cd28814d92fa9c9(props, factory, context) {
  let builder = reactExports.useMemo(() => new $bda7a7e55e1ff206$export$bf788dd355e3a401(), []);
  let { children, items, collection } = props;
  let result = reactExports.useMemo(() => {
    if (collection) return collection;
    let nodes = builder.build({
      children,
      items
    }, context);
    return factory(nodes);
  }, [
    builder,
    children,
    items,
    collection,
    context,
    factory
  ]);
  return result;
}
const $2efe10d3f1f9e31e$var$cache = /* @__PURE__ */ new WeakMap();
function $2efe10d3f1f9e31e$export$77d5aafae4e095b2(collection) {
  let count = $2efe10d3f1f9e31e$var$cache.get(collection);
  if (count != null) return count;
  let counter = 0;
  let countItems = (items) => {
    for (let item of items) {
      if (item.type === "section") countItems($cd5ea4b915021f1d$export$1005530eda016c13(item, collection));
      else if (item.type === "item") counter++;
    }
  };
  countItems(collection);
  $2efe10d3f1f9e31e$var$cache.set(collection, counter);
  return counter;
}
function $c1d7fb2ec91bae71$var$Item(props) {
  return null;
}
$c1d7fb2ec91bae71$var$Item.getCollectionNode = function* getCollectionNode(props, context) {
  let { childItems, title, children } = props;
  let rendered = props.title || props.children;
  let textValue = props.textValue || (typeof rendered === "string" ? rendered : "") || props["aria-label"] || "";
  if (!textValue && !(context === null || context === void 0 ? void 0 : context.suppressTextValueWarning) && false) ;
  yield {
    type: "item",
    props,
    rendered,
    textValue,
    "aria-label": props["aria-label"],
    hasChildNodes: $c1d7fb2ec91bae71$var$hasChildItems(props),
    *childNodes() {
      if (childItems) for (let child of childItems) yield {
        type: "item",
        value: child
      };
      else if (title) {
        let items = [];
        $4d1jn$react.Children.forEach(children, (child) => {
          items.push({
            type: "item",
            element: child
          });
        });
        yield* items;
      }
    }
  };
};
function $c1d7fb2ec91bae71$var$hasChildItems(props) {
  if (props.hasChildItems != null) return props.hasChildItems;
  if (props.childItems) return true;
  if (props.title && $4d1jn$react.Children.count(props.children) > 0) return true;
  return false;
}
let $c1d7fb2ec91bae71$export$6d08773d2e66f8f2 = $c1d7fb2ec91bae71$var$Item;
var getTransformOrigins = (placement) => {
  const origins = {
    top: {
      originY: 1
    },
    bottom: {
      originY: 0
    },
    left: {
      originX: 1
    },
    right: {
      originX: 0
    },
    "top-start": {
      originX: 0,
      originY: 1
    },
    "top-end": {
      originX: 1,
      originY: 1
    },
    "bottom-start": {
      originX: 0,
      originY: 0
    },
    "bottom-end": {
      originX: 1,
      originY: 0
    },
    "right-start": {
      originX: 0,
      originY: 0
    },
    "right-end": {
      originX: 0,
      originY: 1
    },
    "left-start": {
      originX: 1,
      originY: 0
    },
    "left-end": {
      originX: 1,
      originY: 1
    }
  };
  return (origins == null ? void 0 : origins[placement]) || {};
};
var toReactAriaPlacement = (placement) => {
  const mapPositions = {
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
    "top-start": "top start",
    "top-end": "top end",
    "bottom-start": "bottom start",
    "bottom-end": "bottom end",
    "left-start": "left top",
    "left-end": "left bottom",
    "right-start": "right top",
    "right-end": "right bottom"
  };
  return mapPositions[placement];
};
var getShouldUseAxisPlacement = (axisPlacement, overlayPlacement) => {
  if (overlayPlacement.includes("-")) {
    const [position] = overlayPlacement.split("-");
    if (position.includes(axisPlacement)) {
      return false;
    }
  }
  return true;
};
var getArrowPlacement = (dynamicPlacement, placement) => {
  if (placement.includes("-")) {
    const [, position] = placement.split("-");
    return `${dynamicPlacement}-${position}`;
  }
  return dynamicPlacement;
};
var refCountMap = /* @__PURE__ */ new WeakMap();
var observerStack = [];
function ariaHideOutside(targets, root = document.body) {
  let visibleNodes = new Set(targets);
  let hiddenNodes = /* @__PURE__ */ new Set();
  let walk = (root2) => {
    for (let element of root2.querySelectorAll(
      "[data-live-announcer], [data-react-aria-top-layer]"
    )) {
      visibleNodes.add(element);
    }
    let acceptNode = (node) => {
      if (visibleNodes.has(node) || node.parentElement && hiddenNodes.has(node.parentElement) && node.parentElement.getAttribute("role") !== "row") {
        return NodeFilter.FILTER_REJECT;
      }
      for (let target of visibleNodes) {
        if (node.contains(target)) {
          return NodeFilter.FILTER_SKIP;
        }
      }
      return NodeFilter.FILTER_ACCEPT;
    };
    let walker = document.createTreeWalker(root2, NodeFilter.SHOW_ELEMENT, { acceptNode });
    let acceptRoot = acceptNode(root2);
    if (acceptRoot === NodeFilter.FILTER_ACCEPT) {
      hide(root2);
    }
    if (acceptRoot !== NodeFilter.FILTER_REJECT) {
      let node = walker.nextNode();
      while (node != null) {
        hide(node);
        node = walker.nextNode();
      }
    }
  };
  let hide = (node) => {
    var _a;
    let refCount = (_a = refCountMap.get(node)) != null ? _a : 0;
    if (node.getAttribute("aria-hidden") === "true" && refCount === 0) {
      return;
    }
    if (refCount === 0) {
      node.setAttribute("aria-hidden", "true");
    }
    hiddenNodes.add(node);
    refCountMap.set(node, refCount + 1);
  };
  if (observerStack.length) {
    observerStack[observerStack.length - 1].disconnect();
  }
  walk(root);
  let observer = new MutationObserver((changes) => {
    for (let change of changes) {
      if (change.type !== "childList" || change.addedNodes.length === 0) {
        continue;
      }
      if (![...visibleNodes, ...hiddenNodes].some((node) => node.contains(change.target))) {
        for (let node of change.removedNodes) {
          if (node instanceof Element) {
            visibleNodes.delete(node);
            hiddenNodes.delete(node);
          }
        }
        for (let node of change.addedNodes) {
          if ((node instanceof HTMLElement || node instanceof SVGElement) && (node.dataset.liveAnnouncer === "true" || node.dataset.reactAriaTopLayer === "true")) {
            visibleNodes.add(node);
          } else if (node instanceof Element) {
            walk(node);
          }
        }
      }
    }
  });
  observer.observe(root, { childList: true, subtree: true });
  let observerWrapper = {
    visibleNodes,
    hiddenNodes,
    observe() {
      observer.observe(root, { childList: true, subtree: true });
    },
    disconnect() {
      observer.disconnect();
    }
  };
  observerStack.push(observerWrapper);
  return () => {
    observer.disconnect();
    for (let node of hiddenNodes) {
      let count = refCountMap.get(node);
      if (count == null) {
        continue;
      }
      if (count === 1) {
        node.removeAttribute("aria-hidden");
        refCountMap.delete(node);
      } else {
        refCountMap.set(node, count - 1);
      }
    }
    if (observerWrapper === observerStack[observerStack.length - 1]) {
      observerStack.pop();
      if (observerStack.length) {
        observerStack[observerStack.length - 1].observe();
      }
    } else {
      observerStack.splice(observerStack.indexOf(observerWrapper), 1);
    }
  };
}
function keepVisible(element) {
  let observer = observerStack[observerStack.length - 1];
  if (observer && !observer.visibleNodes.has(element)) {
    observer.visibleNodes.add(element);
    return () => {
      observer.visibleNodes.delete(element);
    };
  }
}
var useSafeLayoutEffect = Boolean(globalThis == null ? void 0 : globalThis.document) ? reactExports.useLayoutEffect : reactExports.useEffect;
function $860f7da480e22816$export$b8473d3665f3a75a(props, state, ref) {
  let { validationBehavior, focus } = props;
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    if (validationBehavior === "native" && ref?.current && !ref.current.disabled) {
      let errorMessage = state.realtimeValidation.isInvalid ? state.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      ref.current.setCustomValidity(errorMessage);
      if (!ref.current.hasAttribute("title")) ref.current.title = "";
      if (!state.realtimeValidation.isInvalid) state.updateValidation($860f7da480e22816$var$getNativeValidity(ref.current));
    }
  });
  let isIgnoredReset = reactExports.useRef(false);
  let onReset = $fe16bffc7a557bf0$export$7f54fc3180508a52(() => {
    if (!isIgnoredReset.current) state.resetValidation();
  });
  let onInvalid = $fe16bffc7a557bf0$export$7f54fc3180508a52((e) => {
    if (!state.displayValidation.isInvalid) state.commitValidation();
    let form2 = ref?.current?.form;
    if (!e.defaultPrevented && ref && form2 && $860f7da480e22816$var$getFirstInvalidInput(form2) === ref.current) {
      if (focus) focus();
      else ref.current?.focus();
      $8f5a2122b0992be3$export$8397ddfc504fdb9a("keyboard");
    }
    e.preventDefault();
  });
  let onChange = $fe16bffc7a557bf0$export$7f54fc3180508a52(() => {
    state.commitValidation();
  });
  reactExports.useEffect(() => {
    let input = ref?.current;
    if (!input) return;
    let form2 = input.form;
    let reset = form2?.reset;
    if (form2)
      form2.reset = () => {
        isIgnoredReset.current = !window.event || window.event.type === "message" && $23f2114a1b82827e$export$e58f029f0fbfdb29(window.event) instanceof MessagePort;
        reset?.call(form2);
        isIgnoredReset.current = false;
      };
    input.addEventListener("invalid", onInvalid);
    input.addEventListener("change", onChange);
    form2?.addEventListener("reset", onReset);
    return () => {
      input.removeEventListener("invalid", onInvalid);
      input.removeEventListener("change", onChange);
      form2?.removeEventListener("reset", onReset);
      if (form2)
        form2.reset = reset;
    };
  }, [
    ref,
    validationBehavior
  ]);
}
function $860f7da480e22816$var$getValidity(input) {
  let validity = input.validity;
  return {
    badInput: validity.badInput,
    customError: validity.customError,
    patternMismatch: validity.patternMismatch,
    rangeOverflow: validity.rangeOverflow,
    rangeUnderflow: validity.rangeUnderflow,
    stepMismatch: validity.stepMismatch,
    tooLong: validity.tooLong,
    tooShort: validity.tooShort,
    typeMismatch: validity.typeMismatch,
    valueMissing: validity.valueMissing,
    valid: validity.valid
  };
}
function $860f7da480e22816$var$getNativeValidity(input) {
  return {
    isInvalid: !input.validity.valid,
    validationDetails: $860f7da480e22816$var$getValidity(input),
    validationErrors: input.validationMessage ? [
      input.validationMessage
    ] : []
  };
}
function $860f7da480e22816$var$getFirstInvalidInput(form2) {
  for (let i = 0; i < form2.elements.length; i++) {
    let element = form2.elements[i];
    if (element.validity?.valid === false) return element;
  }
  return null;
}
function $4c14b02d5228be26$export$9d4c57ee4c6ffdd8(initialState = true) {
  let [hasSlot, setHasSlot] = reactExports.useState(initialState);
  let hasRun = reactExports.useRef(false);
  let ref = reactExports.useCallback((el) => {
    hasRun.current = true;
    setHasSlot(!!el);
  }, []);
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    if (!hasRun.current) setHasSlot(false);
  }, []);
  return [
    ref,
    hasSlot
  ];
}
function $4c14b02d5228be26$export$ed2feabec4a533f4(initialState = true) {
  let id = $390e54f620492c70$export$f680877a34711e37();
  let [ref, hasSlot] = $4c14b02d5228be26$export$9d4c57ee4c6ffdd8(initialState);
  return {
    id: hasSlot ? id : void 0,
    ref
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
function $876b6f32ca5a04c3$export$cbe85ee05b554577(props, state, ref) {
  let { isDisabled = false, isReadOnly = false, value, name, form: form2, children, isRequired, validationBehavior = "aria", "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, "aria-describedby": ariaDescribedby, onPressStart, onPressEnd, onPressChange, onPress, onPressUp, onClick } = props;
  let validationState = $fd2148440a13ec26$export$fc1a364ae1f3ff10({
    ...props,
    value: state.isSelected
  });
  let { isInvalid, validationErrors, validationDetails } = validationState.displayValidation;
  $860f7da480e22816$export$b8473d3665f3a75a(props, validationState, ref);
  let onChange = (e) => {
    e.stopPropagation();
    state.setSelected($23f2114a1b82827e$export$e58f029f0fbfdb29(e).checked);
  };
  let { pressProps, isPressed } = $d27d541f9569d26d$export$45712eceda6fad21({
    onPressStart,
    onPressEnd,
    onPressChange,
    onPress,
    onPressUp,
    onClick,
    isDisabled
  });
  let [isLabelPressed, setLabelPressed] = reactExports.useState(false);
  let { pressProps: labelProps } = $d27d541f9569d26d$export$45712eceda6fad21({
    onPressStart(e) {
      if (e.pointerType === "keyboard" || e.pointerType === "virtual") {
        e.continuePropagation();
        return;
      }
      onPressStart?.(e);
      onPressChange?.(true);
      setLabelPressed(true);
    },
    onPressEnd(e) {
      if (e.pointerType === "keyboard" || e.pointerType === "virtual") {
        e.continuePropagation();
        return;
      }
      onPressEnd?.(e);
      onPressChange?.(false);
      setLabelPressed(false);
    },
    onPressUp(e) {
      if (e.pointerType === "keyboard" || e.pointerType === "virtual") {
        e.continuePropagation();
        return;
      }
      onPressUp?.(e);
    },
    onClick,
    onPress(e) {
      if (e.pointerType === "keyboard" || e.pointerType === "virtual") {
        e.continuePropagation();
        return;
      }
      onPress?.(e);
      state.toggle();
      ref.current?.focus();
      let { [$fd2148440a13ec26$export$a763b9476acd3eb]: groupValidationState } = props;
      let { commitValidation } = groupValidationState ? groupValidationState : validationState;
      commitValidation();
    },
    isDisabled: isDisabled || isReadOnly
  });
  let { focusableProps } = $d1116acdf220c2da$export$4c014de7c8940b4c(props, ref);
  let interactions = $bbaa08b3cd72f041$export$9d1611c77c2fe928(pressProps, focusableProps);
  let domProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, {
    labelable: true
  });
  $3274bf1495747a7b$export$5add1d006293d136(ref, state.defaultSelected, state.setSelected);
  let descriptionProps = $4c14b02d5228be26$export$ed2feabec4a533f4();
  let errorMessageProps = $4c14b02d5228be26$export$ed2feabec4a533f4();
  return {
    labelProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(labelProps, {
      onClick: (e) => e.preventDefault()
    }),
    inputProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(domProps, {
      checked: state.isSelected,
      "aria-required": isRequired && validationBehavior === "aria" || void 0,
      required: isRequired && validationBehavior === "native",
      "aria-invalid": isInvalid || props.validationState === "invalid" || void 0,
      "aria-errormessage": props["aria-errormessage"],
      "aria-controls": props["aria-controls"],
      "aria-readonly": isReadOnly || void 0,
      "aria-describedby": [
        descriptionProps.id,
        errorMessageProps.id,
        ariaDescribedby
      ].filter(Boolean).join(" ") || void 0,
      onChange,
      disabled: isDisabled,
      ...value == null ? {} : {
        value
      },
      name,
      form: form2,
      type: "checkbox",
      ...interactions
    }),
    descriptionProps,
    errorMessageProps,
    isSelected: state.isSelected,
    isPressed: isPressed || isLabelPressed,
    isDisabled,
    isReadOnly,
    isInvalid: isInvalid || props.validationState === "invalid",
    validationErrors,
    validationDetails
  };
}
function $3017fa7ffdddec74$export$8042c6c013fd5226(props = {}) {
  let { isReadOnly } = props;
  let [isSelected, setSelected] = $3e6197669829fe11$export$40bfa8c7b0832715(props.isSelected, props.defaultSelected || false, props.onChange);
  let [initialValue] = reactExports.useState(isSelected);
  function updateSelected(value) {
    if (!isReadOnly) setSelected(value);
  }
  function toggleState() {
    if (!isReadOnly) setSelected(!isSelected);
  }
  var _props_defaultSelected;
  return {
    isSelected,
    defaultSelected: (_props_defaultSelected = props.defaultSelected) !== null && _props_defaultSelected !== void 0 ? _props_defaultSelected : initialValue,
    setSelected: updateSelected,
    toggle: toggleState
  };
}
var DEFAULT_SLOT = Symbol("default");
function useObjectRef(ref) {
  const objRef = reactExports.useRef(null);
  const cleanupRef = reactExports.useRef(void 0);
  const refEffect = reactExports.useCallback(
    (instance) => {
      if (typeof ref === "function") {
        const refCallback = ref;
        const refCleanup = refCallback(instance);
        return () => {
          if (typeof refCleanup === "function") {
            refCleanup();
          } else {
            refCallback(null);
          }
        };
      } else if (ref) {
        ref.current = instance;
        return () => {
          ref.current = null;
        };
      }
    },
    [ref]
  );
  return reactExports.useMemo(
    () => ({
      get current() {
        return objRef.current;
      },
      set current(value) {
        objRef.current = value;
        if (cleanupRef.current) {
          cleanupRef.current();
          cleanupRef.current = void 0;
        }
        if (value != null) {
          cleanupRef.current = refEffect(value);
        }
      }
    }),
    [refEffect]
  );
}
function useSlottedContext(context, slot) {
  let ctx = reactExports.useContext(context);
  if (slot === null) {
    return null;
  }
  if (ctx && typeof ctx === "object" && "slots" in ctx && ctx.slots) {
    let availableSlots = new Intl.ListFormat().format(Object.keys(ctx.slots).map((p) => `"${p}"`));
    if (!slot && !ctx.slots[DEFAULT_SLOT]) {
      throw new Error(`A slot prop is required. Valid slot names are ${availableSlots}.`);
    }
    let slotKey = slot || DEFAULT_SLOT;
    if (!ctx.slots[slotKey]) {
      throw new Error(`Invalid slot "${slot}". Valid slot names are ${availableSlots}.`);
    }
    return ctx.slots[slotKey];
  }
  return ctx;
}
function useContextProps(props, ref, context) {
  let ctx = useSlottedContext(context, props.slot) || {};
  let { ref: contextRef, ...contextProps } = ctx;
  let mergedRef = useObjectRef(reactExports.useMemo(() => mergeRefs$1(ref, contextRef), [ref, contextRef]));
  let mergedProps = mergeProps(contextProps, props);
  if ("style" in contextProps && contextProps.style && "style" in props && props.style) {
    if (typeof contextProps.style === "function" || typeof props.style === "function") {
      mergedProps.style = (renderProps) => {
        let contextStyle = typeof contextProps.style === "function" ? contextProps.style(renderProps) : contextProps.style;
        let defaultStyle = { ...renderProps.defaultStyle, ...contextStyle };
        let style = typeof props.style === "function" ? props.style({ ...renderProps, defaultStyle }) : props.style;
        return { ...defaultStyle, ...style };
      };
    } else {
      mergedProps.style = { ...contextProps.style, ...props.style };
    }
  }
  return [mergedProps, mergedRef];
}
const $e5be200c675c3b3a$export$aca958c65c314e6c = {
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
const $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE = {
  ...$e5be200c675c3b3a$export$aca958c65c314e6c,
  customError: true,
  valid: false
};
const $e5be200c675c3b3a$export$dad6ae84456c676a = {
  isInvalid: false,
  validationDetails: $e5be200c675c3b3a$export$aca958c65c314e6c,
  validationErrors: []
};
const $e5be200c675c3b3a$export$571b5131b7e65c11 = reactExports.createContext({});
const $e5be200c675c3b3a$export$a763b9476acd3eb = "__formValidationState" + Date.now();
function $e5be200c675c3b3a$export$fc1a364ae1f3ff10(props) {
  if (props[$e5be200c675c3b3a$export$a763b9476acd3eb]) {
    let { realtimeValidation, displayValidation, updateValidation, resetValidation, commitValidation } = props[$e5be200c675c3b3a$export$a763b9476acd3eb];
    return {
      realtimeValidation,
      displayValidation,
      updateValidation,
      resetValidation,
      commitValidation
    };
  }
  return $e5be200c675c3b3a$var$useFormValidationStateImpl(props);
}
function $e5be200c675c3b3a$var$useFormValidationStateImpl(props) {
  let { isInvalid, validationState, name, value, builtinValidation, validate, validationBehavior = "aria" } = props;
  if (validationState) isInvalid || (isInvalid = validationState === "invalid");
  let controlledError = isInvalid !== void 0 ? {
    isInvalid,
    validationErrors: [],
    validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
  } : null;
  let clientError = reactExports.useMemo(() => {
    if (!validate || value == null) return null;
    let validateErrors = $e5be200c675c3b3a$var$runValidate(validate, value);
    return $e5be200c675c3b3a$var$getValidationResult(validateErrors);
  }, [
    validate,
    value
  ]);
  if (builtinValidation === null || builtinValidation === void 0 ? void 0 : builtinValidation.validationDetails.valid) builtinValidation = void 0;
  let serverErrors = reactExports.useContext($e5be200c675c3b3a$export$571b5131b7e65c11);
  let serverErrorMessages = reactExports.useMemo(() => {
    if (name) return Array.isArray(name) ? name.flatMap((name2) => $e5be200c675c3b3a$var$asArray(serverErrors[name2])) : $e5be200c675c3b3a$var$asArray(serverErrors[name]);
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
  let serverError = reactExports.useMemo(() => $e5be200c675c3b3a$var$getValidationResult(isServerErrorCleared ? [] : serverErrorMessages), [
    isServerErrorCleared,
    serverErrorMessages
  ]);
  let nextValidation = reactExports.useRef($e5be200c675c3b3a$export$dad6ae84456c676a);
  let [currentValidity, setCurrentValidity] = reactExports.useState($e5be200c675c3b3a$export$dad6ae84456c676a);
  let lastError = reactExports.useRef($e5be200c675c3b3a$export$dad6ae84456c676a);
  let commitValidation = () => {
    if (!commitQueued) return;
    setCommitQueued(false);
    let error = clientError || builtinValidation || nextValidation.current;
    if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
      lastError.current = error;
      setCurrentValidity(error);
    }
  };
  let [commitQueued, setCommitQueued] = reactExports.useState(false);
  reactExports.useEffect(commitValidation);
  let realtimeValidation = controlledError || serverError || clientError || builtinValidation || $e5be200c675c3b3a$export$dad6ae84456c676a;
  let displayValidation = validationBehavior === "native" ? controlledError || serverError || currentValidity : controlledError || serverError || clientError || builtinValidation || currentValidity;
  return {
    realtimeValidation,
    displayValidation,
    updateValidation(value2) {
      if (validationBehavior === "aria" && !$e5be200c675c3b3a$var$isEqualValidation(currentValidity, value2)) setCurrentValidity(value2);
      else nextValidation.current = value2;
    },
    resetValidation() {
      let error = $e5be200c675c3b3a$export$dad6ae84456c676a;
      if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
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
function $e5be200c675c3b3a$var$asArray(v) {
  if (!v) return [];
  return Array.isArray(v) ? v : [
    v
  ];
}
function $e5be200c675c3b3a$var$runValidate(validate, value) {
  if (typeof validate === "function") {
    let e = validate(value);
    if (e && typeof e !== "boolean") return $e5be200c675c3b3a$var$asArray(e);
  }
  return [];
}
function $e5be200c675c3b3a$var$getValidationResult(errors) {
  return errors.length ? {
    isInvalid: true,
    validationErrors: errors,
    validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
  } : null;
}
function $e5be200c675c3b3a$var$isEqualValidation(a, b) {
  if (a === b) return true;
  return !!a && !!b && a.isInvalid === b.isInvalid && a.validationErrors.length === b.validationErrors.length && a.validationErrors.every((a2, i) => a2 === b.validationErrors[i]) && Object.entries(a.validationDetails).every(([k, v]) => b.validationDetails[k] === v);
}
var FormContext = reactExports.createContext(null);
reactExports.forwardRef(function Form2(props, ref) {
  [props, ref] = useContextProps(props, ref, FormContext);
  let { validationErrors, validationBehavior = "native", children, className, ...domProps } = props;
  const styles = reactExports.useMemo(() => form({ className }), [className]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("form", { noValidate: validationBehavior !== "native", ...domProps, ref, className: styles, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormContext.Provider, { value: { ...props, validationBehavior }, children: /* @__PURE__ */ jsxRuntimeExports.jsx($e5be200c675c3b3a$export$571b5131b7e65c11.Provider, { value: validationErrors != null ? validationErrors : {}, children }) }) });
});
function $f11fb0bcf1b2687a$export$61c6a8c84e605fb6(props) {
  let [isOpen, setOpen] = $3e6197669829fe11$export$40bfa8c7b0832715(props.isOpen, props.defaultOpen || false, props.onOpenChange);
  const open = reactExports.useCallback(() => {
    setOpen(true);
  }, [
    setOpen
  ]);
  const close = reactExports.useCallback(() => {
    setOpen(false);
  }, [
    setOpen
  ]);
  const toggle2 = reactExports.useCallback(() => {
    setOpen(!isOpen);
  }, [
    setOpen,
    isOpen
  ]);
  return {
    isOpen,
    setOpen,
    open,
    close,
    toggle: toggle2
  };
}
var visibleOverlays = [];
function useAriaOverlay(props, ref) {
  const {
    disableOutsideEvents = true,
    isDismissable = false,
    isKeyboardDismissDisabled = false,
    isOpen,
    onClose,
    shouldCloseOnBlur,
    shouldCloseOnInteractOutside
  } = props;
  reactExports.useEffect(() => {
    if (isOpen && !visibleOverlays.includes(ref)) {
      visibleOverlays.push(ref);
      return () => {
        let index = visibleOverlays.indexOf(ref);
        if (index >= 0) {
          visibleOverlays.splice(index, 1);
        }
      };
    }
  }, [isOpen, ref]);
  const onHide = () => {
    if (visibleOverlays[visibleOverlays.length - 1] === ref && onClose) {
      onClose();
    }
  };
  const onInteractOutsideStart = (e) => {
    if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
      if (visibleOverlays[visibleOverlays.length - 1] === ref) {
        if (disableOutsideEvents) {
          e.stopPropagation();
          e.preventDefault();
        }
      }
      if (getOverlayInteractionType(ref) !== "pressEnd") {
        onHide();
      }
    }
  };
  const onInteractOutside = (e) => {
    if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
      if (visibleOverlays[visibleOverlays.length - 1] === ref) {
        if (disableOutsideEvents) {
          e.stopPropagation();
          e.preventDefault();
        }
      }
      onHide();
    }
  };
  const onKeyDown = (e) => {
    if (e.key === "Escape" && !isKeyboardDismissDisabled && !e.nativeEvent.isComposing) {
      e.stopPropagation();
      e.preventDefault();
      onHide();
    }
  };
  $e0b6e0b68ec7f50f$export$872b660ac5a1ff98({
    isDisabled: !(isDismissable && isOpen),
    onInteractOutside: isDismissable && isOpen ? onInteractOutside : void 0,
    onInteractOutsideStart,
    ref
  });
  const { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
    isDisabled: !shouldCloseOnBlur,
    onBlurWithin: (e) => {
      if (!e.relatedTarget || $9bf71ea28793e738$export$1258395f99bf9cbf(e.relatedTarget)) {
        return;
      }
      if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.relatedTarget)) {
        onHide();
      }
    }
  });
  const onPointerDownUnderlay = (e) => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
    }
  };
  function getOverlayInteractionType(ref2) {
    const el = ref2.current;
    if (!el) return "unknown";
    const role = (el.getAttribute("role") || "").toLowerCase();
    const ariaModalAttr = el.getAttribute("aria-modal");
    if ((role === "dialog" || role === "alertdialog") && (ariaModalAttr === null || ariaModalAttr.toLowerCase() === "true")) {
      return "pressEnd";
    }
    if (["listbox", "menu", "tree", "grid", "combobox"].includes(role)) {
      return "pressStart";
    }
    return "unknown";
  }
  return {
    overlayProps: {
      onKeyDown,
      ...focusWithinProps
    },
    underlayProps: {
      onPointerDown: onPointerDownUnderlay
    }
  };
}
function $b418ec0c85c52f27$export$d853f7095ae95f88(props, state, ref) {
  let { labelProps, inputProps, isSelected, isPressed, isDisabled, isReadOnly } = $876b6f32ca5a04c3$export$cbe85ee05b554577(props, state, ref);
  return {
    labelProps,
    inputProps: {
      ...inputProps,
      role: "switch",
      checked: isSelected
    },
    isSelected,
    isPressed,
    isDisabled,
    isReadOnly
  };
}
function useSwitch(originalProps = {}) {
  var _a, _b;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, toggle.variantKeys);
  const {
    ref,
    as,
    name,
    value = "",
    isReadOnly: isReadOnlyProp = false,
    autoFocus = false,
    startContent,
    endContent,
    defaultSelected,
    isSelected: isSelectedProp,
    children,
    thumbIcon,
    className,
    classNames,
    onChange,
    onValueChange,
    ...otherProps
  } = props;
  const Component = as || "label";
  const domRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  const disableAnimation = (_b = (_a = originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const labelId = reactExports.useId();
  const ariaSwitchProps = reactExports.useMemo(() => {
    const ariaLabel = otherProps["aria-label"] || typeof children === "string" ? children : void 0;
    return {
      name,
      value,
      children,
      autoFocus,
      defaultSelected,
      isSelected: isSelectedProp,
      isDisabled: !!originalProps.isDisabled,
      isReadOnly: isReadOnlyProp,
      "aria-label": ariaLabel,
      "aria-labelledby": otherProps["aria-labelledby"] || labelId,
      onChange: onValueChange
    };
  }, [
    value,
    name,
    labelId,
    children,
    autoFocus,
    isReadOnlyProp,
    isSelectedProp,
    defaultSelected,
    originalProps.isDisabled,
    otherProps["aria-label"],
    otherProps["aria-labelledby"],
    onValueChange
  ]);
  const state = $3017fa7ffdddec74$export$8042c6c013fd5226(ariaSwitchProps);
  useSafeLayoutEffect(() => {
    if (!inputRef.current) return;
    const isInputRefChecked = !!inputRef.current.checked;
    state.setSelected(isInputRefChecked);
  }, [inputRef.current]);
  const { inputProps, isPressed, isReadOnly } = $b418ec0c85c52f27$export$d853f7095ae95f88(ariaSwitchProps, state, inputRef);
  const { focusProps, isFocused, isFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: inputProps.autoFocus });
  const { hoverProps, isHovered } = $6179b936705e76d3$export$ae780daf29e6d456({
    isDisabled: inputProps.disabled
  });
  const isInteractionDisabled = ariaSwitchProps.isDisabled || isReadOnly;
  const pressed = isInteractionDisabled ? false : isPressed;
  const isSelected = inputProps.checked;
  const isDisabled = inputProps.disabled;
  const slots = reactExports.useMemo(
    () => toggle({
      ...variantProps,
      disableAnimation
    }),
    [objectToDeps(variantProps), disableAnimation]
  );
  const baseStyles = cn(classNames == null ? void 0 : classNames.base, className);
  const getBaseProps = (props2) => {
    return {
      ...mergeProps(hoverProps, otherProps, props2),
      ref: domRef,
      className: slots.base({ class: cn(baseStyles, props2 == null ? void 0 : props2.className) }),
      "data-disabled": dataAttr(isDisabled),
      "data-selected": dataAttr(isSelected),
      "data-readonly": dataAttr(isReadOnly),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-hover": dataAttr(isHovered),
      "data-pressed": dataAttr(pressed)
    };
  };
  const getWrapperProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        ...props2,
        "aria-hidden": true,
        className: slots.wrapper({ class: cn(classNames == null ? void 0 : classNames.wrapper, props2 == null ? void 0 : props2.className) })
      };
    },
    [slots, classNames == null ? void 0 : classNames.wrapper]
  );
  const getInputProps = (props2 = {}) => {
    return {
      ...mergeProps(inputProps, focusProps, props2),
      ref: mergeRefs(inputRef, ref),
      id: inputProps.id,
      className: slots.hiddenInput({ class: classNames == null ? void 0 : classNames.hiddenInput }),
      onChange: chain(onChange, inputProps.onChange)
    };
  };
  const getThumbProps = reactExports.useCallback(
    (props2 = {}) => ({
      ...props2,
      className: slots.thumb({ class: cn(classNames == null ? void 0 : classNames.thumb, props2 == null ? void 0 : props2.className) })
    }),
    [slots, classNames == null ? void 0 : classNames.thumb]
  );
  const getLabelProps = reactExports.useCallback(
    (props2 = {}) => ({
      ...props2,
      id: labelId,
      className: slots.label({ class: cn(classNames == null ? void 0 : classNames.label, props2 == null ? void 0 : props2.className) })
    }),
    [slots, classNames == null ? void 0 : classNames.label, isDisabled, isSelected]
  );
  const getThumbIconProps = reactExports.useCallback(
    (props2 = {
      includeStateProps: false
    }) => mergeProps(
      {
        width: "1em",
        height: "1em",
        className: slots.thumbIcon({ class: cn(classNames == null ? void 0 : classNames.thumbIcon) })
      },
      props2.includeStateProps ? {
        isSelected
      } : {}
    ),
    [slots, classNames == null ? void 0 : classNames.thumbIcon, isSelected]
  );
  const getStartContentProps = reactExports.useCallback(
    (props2 = {}) => ({
      width: "1em",
      height: "1em",
      ...props2,
      className: slots.startContent({ class: cn(classNames == null ? void 0 : classNames.startContent, props2 == null ? void 0 : props2.className) })
    }),
    [slots, classNames == null ? void 0 : classNames.startContent, isSelected]
  );
  const getEndContentProps = reactExports.useCallback(
    (props2 = {}) => ({
      width: "1em",
      height: "1em",
      ...props2,
      className: slots.endContent({ class: cn(classNames == null ? void 0 : classNames.endContent, props2 == null ? void 0 : props2.className) })
    }),
    [slots, classNames == null ? void 0 : classNames.endContent, isSelected]
  );
  return {
    Component,
    slots,
    classNames,
    domRef,
    children,
    thumbIcon,
    startContent,
    endContent,
    isHovered,
    isSelected,
    isPressed: pressed,
    isFocused,
    isFocusVisible,
    isDisabled,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getThumbProps,
    getThumbIconProps,
    getStartContentProps,
    getEndContentProps
  };
}
var Switch = forwardRef((props, ref) => {
  const {
    Component,
    children,
    startContent,
    endContent,
    thumbIcon,
    getBaseProps,
    getInputProps,
    getWrapperProps,
    getThumbProps,
    getThumbIconProps,
    getLabelProps,
    getStartContentProps,
    getEndContentProps
  } = useSwitch({ ...props, ref });
  const clonedThumbIcon = typeof thumbIcon === "function" ? thumbIcon(getThumbIconProps({ includeStateProps: true })) : thumbIcon && reactExports.cloneElement(thumbIcon, getThumbIconProps());
  const clonedStartContent = startContent && reactExports.cloneElement(startContent, getStartContentProps());
  const clonedEndContent = endContent && reactExports.cloneElement(endContent, getEndContentProps());
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { ...getBaseProps(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...getInputProps() }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ...getWrapperProps(), children: [
      startContent && clonedStartContent,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getThumbProps(), children: thumbIcon && clonedThumbIcon }),
      endContent && clonedEndContent
    ] }),
    children && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getLabelProps(), children })
  ] });
});
Switch.displayName = "HeroUI.Switch";
var switch_default = Switch;
function useReactAriaPopover(props, state) {
  const {
    groupRef,
    triggerRef,
    popoverRef,
    showArrow,
    offset = 7,
    crossOffset = 0,
    scrollRef,
    shouldFlip,
    boundaryElement,
    isDismissable = true,
    shouldCloseOnBlur = true,
    shouldCloseOnScroll = true,
    placement: placementProp = "top",
    containerPadding,
    shouldCloseOnInteractOutside,
    isNonModal: isNonModalProp,
    isKeyboardDismissDisabled,
    updatePositionDeps = [],
    ...otherProps
  } = props;
  const isNonModal = isNonModalProp != null ? isNonModalProp : true;
  const isSubmenu = otherProps["trigger"] === "SubmenuTrigger";
  const { overlayProps, underlayProps } = useAriaOverlay(
    {
      isOpen: state.isOpen,
      onClose: state.close,
      shouldCloseOnBlur,
      isDismissable: isDismissable || isSubmenu,
      isKeyboardDismissDisabled,
      shouldCloseOnInteractOutside: shouldCloseOnInteractOutside || ((el) => {
        var _a;
        return !((_a = triggerRef.current) == null ? void 0 : _a.contains(el));
      }),
      disableOutsideEvents: !isNonModal
    },
    popoverRef
  );
  const {
    overlayProps: positionProps,
    arrowProps,
    placement,
    updatePosition,
    triggerAnchorPoint: origin
  } = $2a41e45df1593e64$export$d39e1813b3bdd0e1({
    ...otherProps,
    shouldFlip,
    crossOffset,
    targetRef: triggerRef,
    overlayRef: popoverRef,
    isOpen: state.isOpen,
    scrollRef,
    boundaryElement,
    containerPadding,
    placement: toReactAriaPlacement(placementProp),
    offset: showArrow ? offset + 3 : offset,
    onClose: isNonModal && !isSubmenu && shouldCloseOnScroll ? state.close : () => {
    }
  });
  useSafeLayoutEffect(() => {
    if (!updatePositionDeps.length) return;
    updatePosition();
  }, updatePositionDeps);
  reactExports.useEffect(() => {
    var _a, _b;
    if (state.isOpen && popoverRef.current) {
      if (isNonModal) {
        return keepVisible((_a = groupRef == null ? void 0 : groupRef.current) != null ? _a : popoverRef.current);
      } else {
        return ariaHideOutside([(_b = groupRef == null ? void 0 : groupRef.current) != null ? _b : popoverRef.current]);
      }
    }
  }, [isNonModal, state.isOpen, popoverRef, groupRef]);
  return {
    popoverProps: mergeProps(overlayProps, positionProps),
    arrowProps,
    underlayProps,
    placement,
    triggerAnchorPoint: origin
  };
}
function $fc909762b330b746$export$61c6a8c84e605fb6(props) {
  let [isOpen, setOpen] = $3e6197669829fe11$export$40bfa8c7b0832715(props.isOpen, props.defaultOpen || false, props.onOpenChange);
  const open = reactExports.useCallback(() => {
    setOpen(true);
  }, [
    setOpen
  ]);
  const close = reactExports.useCallback(() => {
    setOpen(false);
  }, [
    setOpen
  ]);
  const toggle2 = reactExports.useCallback(() => {
    setOpen(!isOpen);
  }, [
    setOpen,
    isOpen
  ]);
  return {
    isOpen,
    setOpen,
    open,
    close,
    toggle: toggle2
  };
}
var DEFAULT_PLACEMENT = "top";
function usePopover(originalProps) {
  var _a, _b, _c;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, popover.variantKeys);
  const {
    as,
    ref,
    children,
    state: stateProp,
    triggerRef: triggerRefProp,
    scrollRef,
    defaultOpen,
    onOpenChange,
    isOpen: isOpenProp,
    isNonModal = true,
    shouldFlip = true,
    containerPadding = 12,
    shouldBlockScroll = false,
    isDismissable = true,
    shouldCloseOnBlur,
    portalContainer,
    updatePositionDeps,
    dialogProps: dialogPropsProp,
    placement: placementProp = DEFAULT_PLACEMENT,
    triggerType = "dialog",
    showArrow = false,
    offset = 7,
    crossOffset = 0,
    boundaryElement,
    isKeyboardDismissDisabled,
    shouldCloseOnInteractOutside,
    shouldCloseOnScroll,
    triggerAnchorPoint,
    motionProps,
    className,
    classNames,
    onClose,
    ...otherProps
  } = props;
  const Component = as || "div";
  const domRef = useDOMRef(ref);
  const domTriggerRef = reactExports.useRef(null);
  const wasTriggerPressedRef = reactExports.useRef(false);
  const triggerRef = triggerRefProp || domTriggerRef;
  const disableAnimation = (_b = (_a = originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const innerState = $fc909762b330b746$export$61c6a8c84e605fb6({
    isOpen: isOpenProp,
    defaultOpen,
    onOpenChange: (isOpen) => {
      onOpenChange == null ? void 0 : onOpenChange(isOpen);
      if (!isOpen) {
        onClose == null ? void 0 : onClose();
      }
    }
  });
  const state = stateProp || innerState;
  const {
    popoverProps,
    underlayProps,
    placement: ariaPlacement
  } = useReactAriaPopover(
    {
      triggerRef,
      isNonModal,
      popoverRef: domRef,
      placement: placementProp,
      offset,
      scrollRef,
      isDismissable,
      shouldCloseOnBlur,
      boundaryElement,
      crossOffset,
      shouldFlip,
      containerPadding,
      updatePositionDeps,
      isKeyboardDismissDisabled,
      shouldCloseOnScroll,
      shouldCloseOnInteractOutside,
      triggerAnchorPoint
    },
    state
  );
  const placement = reactExports.useMemo(() => {
    if (!ariaPlacement) {
      return null;
    }
    return getShouldUseAxisPlacement(ariaPlacement, placementProp) ? ariaPlacement : placementProp;
  }, [ariaPlacement, placementProp]);
  const { triggerProps } = $628037886ba31236$export$f9d5c8beee7d008d({ type: triggerType }, state, triggerRef);
  const { isFocusVisible, isFocused, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const slots = reactExports.useMemo(
    () => popover({
      ...variantProps
    }),
    [objectToDeps(variantProps)]
  );
  const baseStyles = cn(classNames == null ? void 0 : classNames.base, className);
  const anchorStyles = {
    "--trigger-anchor-point": triggerAnchorPoint ? `${triggerAnchorPoint.x}px ${triggerAnchorPoint.y}px` : void 0
  };
  $49c51c25361d4cd2$export$ee0f7cc6afcd1c18({
    isDisabled: !(shouldBlockScroll && state.isOpen)
  });
  const getPopoverProps = (props2 = {}) => ({
    ref: domRef,
    ...mergeProps(popoverProps, otherProps, props2),
    style: mergeProps(popoverProps.style, otherProps.style, props2.style)
  });
  const getDialogProps = (props2 = {}) => ({
    // `ref` and `dialogProps` from `useDialog` are passed from props
    // if we use `useDialog` here, dialogRef won't be focused on mount
    "data-slot": "base",
    "data-open": dataAttr(state.isOpen),
    "data-focus": dataAttr(isFocused),
    "data-arrow": dataAttr(showArrow),
    "data-focus-visible": dataAttr(isFocusVisible),
    "data-placement": ariaPlacement ? getArrowPlacement(ariaPlacement, placementProp) : void 0,
    ...mergeProps(focusProps, dialogPropsProp, props2),
    className: slots.base({ class: cn(baseStyles) }),
    style: {
      // this prevent the dialog to have a default outline
      outline: "none",
      ...anchorStyles
    }
  });
  const getContentProps = reactExports.useCallback(
    (props2 = {}) => ({
      "data-slot": "content",
      "data-open": dataAttr(state.isOpen),
      "data-arrow": dataAttr(showArrow),
      "data-placement": ariaPlacement ? getArrowPlacement(ariaPlacement, placementProp) : void 0,
      className: slots.content({ class: cn(classNames == null ? void 0 : classNames.content, props2.className) })
    }),
    [slots, state.isOpen, showArrow, placement, placementProp, classNames, ariaPlacement]
  );
  const onPress = reactExports.useCallback(
    (e) => {
      var _a2;
      let pressTimer;
      if (e.pointerType === "touch" && ((originalProps == null ? void 0 : originalProps.backdrop) === "blur" || (originalProps == null ? void 0 : originalProps.backdrop) === "opaque")) {
        pressTimer = setTimeout(() => {
          wasTriggerPressedRef.current = true;
        }, 100);
      } else {
        wasTriggerPressedRef.current = true;
      }
      (_a2 = triggerProps.onPress) == null ? void 0 : _a2.call(triggerProps, e);
      return () => {
        clearTimeout(pressTimer);
      };
    },
    [triggerProps == null ? void 0 : triggerProps.onPress]
  );
  const getTriggerProps = reactExports.useCallback(
    (props2 = {}, _ref = null) => {
      const { isDisabled, ...otherProps2 } = props2;
      return {
        "data-slot": "trigger",
        ...mergeProps({ "aria-haspopup": "dialog" }, triggerProps, otherProps2),
        onPress,
        isDisabled,
        className: slots.trigger({
          class: cn(classNames == null ? void 0 : classNames.trigger, props2.className),
          // apply isDisabled class names to make the trigger child disabled
          // e.g. for elements like div or HeroUI elements that don't have `isDisabled` prop
          isTriggerDisabled: isDisabled
        }),
        ref: mergeRefs$1(_ref, triggerRef)
      };
    },
    [state, triggerProps, onPress, triggerRef]
  );
  const getBackdropProps = reactExports.useCallback(
    (props2 = {}) => ({
      "data-slot": "backdrop",
      className: slots.backdrop({ class: classNames == null ? void 0 : classNames.backdrop }),
      onClick: (e) => {
        if (!wasTriggerPressedRef.current) {
          e.preventDefault();
          return;
        }
        state.close();
        wasTriggerPressedRef.current = false;
      },
      ...underlayProps,
      ...props2
    }),
    [slots, state.isOpen, classNames, underlayProps]
  );
  return {
    state,
    Component,
    children,
    classNames,
    showArrow,
    triggerRef,
    placement,
    isNonModal,
    popoverRef: domRef,
    portalContainer,
    isOpen: state.isOpen,
    onClose: state.close,
    disableAnimation,
    shouldBlockScroll,
    backdrop: (_c = originalProps.backdrop) != null ? _c : "transparent",
    motionProps,
    getBackdropProps,
    getPopoverProps,
    getTriggerProps,
    getDialogProps,
    getContentProps
  };
}
function $40df3f8667284809$export$d55e7ee900f34e93(props, ref) {
  let { role = "dialog" } = props;
  let titleId = $390e54f620492c70$export$b4cc09c592e8fdb8();
  titleId = props["aria-label"] ? void 0 : titleId;
  let isRefocusing = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (ref.current && !$23f2114a1b82827e$export$b4f377a2b6254582(ref.current)) {
      $f192c2f16961cbe0$export$80f3e147d781571c(ref.current);
      let timeout = setTimeout(() => {
        if ($23f2114a1b82827e$export$cd4e5573fbe2b576() === ref.current || $23f2114a1b82827e$export$cd4e5573fbe2b576() === document.body) {
          isRefocusing.current = true;
          if (ref.current) {
            ref.current.blur();
            $f192c2f16961cbe0$export$80f3e147d781571c(ref.current);
          }
          isRefocusing.current = false;
        }
      }, 500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [
    ref
  ]);
  $337b884510726a0d$export$14c98a7594375490();
  return {
    dialogProps: {
      ...$8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, {
        labelable: true
      }),
      role,
      tabIndex: -1,
      "aria-labelledby": props["aria-labelledby"] || titleId,
      // Prevent blur events from reaching useOverlay, which may cause
      // popovers to close. Since focus is contained within the dialog,
      // we don't want this to occur due to the above useEffect.
      onBlur: (e) => {
        if (isRefocusing.current) e.stopPropagation();
      }
    },
    titleProps: {
      id: titleId
    }
  };
}
var domAnimation = () => __vitePreload(() => import("./index-BmvgNQAH.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0, import.meta.url).then((res) => res.default);
var FreeSoloPopoverWrapper = forwardRef(
  ({
    children,
    motionProps,
    placement,
    disableAnimation,
    style: styleProp = {},
    transformOrigin = {},
    ...otherProps
  }, ref) => {
    let style = styleProp;
    if (transformOrigin.originX !== void 0 || transformOrigin.originY !== void 0) {
      style = {
        ...style,
        // @ts-ignore
        transformOrigin
      };
    } else if (placement) {
      style = {
        ...style,
        ...getTransformOrigins(placement === "center" ? "top" : placement)
      };
    }
    return disableAnimation ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...otherProps, ref, children }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LazyMotion, { features: domAnimation, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      m.div,
      {
        ref,
        animate: "enter",
        exit: "exit",
        initial: "initial",
        style,
        variants: TRANSITION_VARIANTS.scaleSpringOpacity,
        ...mergeProps(otherProps, motionProps),
        children
      }
    ) });
  }
);
FreeSoloPopoverWrapper.displayName = "HeroUI.FreeSoloPopoverWrapper";
var FreeSoloPopover = forwardRef(
  ({ children, transformOrigin, disableDialogFocus = false, ...props }, ref) => {
    const {
      Component,
      state,
      placement,
      backdrop,
      portalContainer,
      disableAnimation,
      motionProps,
      isNonModal,
      getPopoverProps,
      getBackdropProps,
      getDialogProps,
      getContentProps
    } = usePopover({
      ...props,
      ref
    });
    const dialogRef = reactExports.useRef(null);
    const { dialogProps: ariaDialogProps, titleProps } = $40df3f8667284809$export$d55e7ee900f34e93({}, dialogRef);
    const dialogProps = getDialogProps({
      // by default, focus is moved into the dialog on mount
      // we can use `disableDialogFocus` to disable this behaviour
      // e.g. in autocomplete, the focus should be moved to the input (handled in autocomplete hook) instead of the dialog first
      ...!disableDialogFocus && { ref: dialogRef },
      ...ariaDialogProps
    });
    const backdropContent = reactExports.useMemo(() => {
      if (backdrop === "transparent") {
        return null;
      }
      if (disableAnimation) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...getBackdropProps() });
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(LazyMotion, { features: domAnimation, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        m.div,
        {
          animate: "enter",
          exit: "exit",
          initial: "exit",
          variants: TRANSITION_VARIANTS.fade,
          ...getBackdropProps()
        }
      ) });
    }, [backdrop, disableAnimation, getBackdropProps]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs($337b884510726a0d$export$c6fdb837b070b4ff, { portalContainer, children: [
      !isNonModal && backdropContent,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ...getPopoverProps(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        FreeSoloPopoverWrapper,
        {
          disableAnimation,
          motionProps,
          placement,
          tabIndex: -1,
          transformOrigin,
          ...dialogProps,
          children: [
            !isNonModal && /* @__PURE__ */ jsxRuntimeExports.jsx($86ea4cb521eb2e37$export$2317d149ed6f78c4, { onDismiss: state.close }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...getContentProps(), children: typeof children === "function" ? children(titleProps) : children }),
            /* @__PURE__ */ jsxRuntimeExports.jsx($86ea4cb521eb2e37$export$2317d149ed6f78c4, { onDismiss: state.close })
          ]
        }
      ) })
    ] });
  }
);
FreeSoloPopover.displayName = "HeroUI.FreeSoloPopover";
var free_solo_popover_default = FreeSoloPopover;
var $c0398ad35c3639b7$exports = {};
$c0398ad35c3639b7$exports = {
  "longPressMessage": `اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة`
};
var $7af657c4165927c3$exports = {};
$7af657c4165927c3$exports = {
  "longPressMessage": `Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто`
};
var $d95d4da6d531ab81$exports = {};
$d95d4da6d531ab81$exports = {
  "longPressMessage": `Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku`
};
var $24ebda9c775dca17$exports = {};
$24ebda9c775dca17$exports = {
  "longPressMessage": `Langt tryk eller tryk på Alt + pil ned for at åbne menuen`
};
var $743e0dfca6cab1e9$exports = {};
$743e0dfca6cab1e9$exports = {
  "longPressMessage": `Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen`
};
var $a2f41026e05f1c84$exports = {};
$a2f41026e05f1c84$exports = {
  "longPressMessage": `Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού`
};
var $43b800e97c901737$exports = {};
$43b800e97c901737$exports = {
  "longPressMessage": `Long press or press Alt + ArrowDown to open menu`
};
var $442f5f6ac211e29f$exports = {};
$442f5f6ac211e29f$exports = {
  "longPressMessage": `Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú`
};
var $dff280acfeb2d8ac$exports = {};
$dff280acfeb2d8ac$exports = {
  "longPressMessage": `Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool`
};
var $51608325613944d7$exports = {};
$51608325613944d7$exports = {
  "longPressMessage": `Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli`
};
var $c4a1b1eabeaa87be$exports = {};
$c4a1b1eabeaa87be$exports = {
  "longPressMessage": `Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu.`
};
var $8c74815cdee18d1b$exports = {};
$8c74815cdee18d1b$exports = {
  "longPressMessage": `לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט`
};
var $fd0e9ef6a7fe0ec9$exports = {};
$fd0e9ef6a7fe0ec9$exports = {
  "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika`
};
var $a89a74a39eba465a$exports = {};
$a89a74a39eba465a$exports = {
  "longPressMessage": `Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához`
};
var $edc7c66594a0ae8a$exports = {};
$edc7c66594a0ae8a$exports = {
  "longPressMessage": `Premi a lungo o premi Alt + Freccia giù per aprire il menu`
};
var $f1ab51510712db52$exports = {};
$f1ab51510712db52$exports = {
  "longPressMessage": `長押しまたは Alt+下矢印キーでメニューを開く`
};
var $f9b672d9b82fa3d6$exports = {};
$f9b672d9b82fa3d6$exports = {
  "longPressMessage": `길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기`
};
var $a385f3910feda499$exports = {};
$a385f3910feda499$exports = {
  "longPressMessage": `Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“.`
};
var $4f1bde932c441789$exports = {};
$4f1bde932c441789$exports = {
  "longPressMessage": `Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa`
};
var $914a51a8a594d5be$exports = {};
$914a51a8a594d5be$exports = {
  "longPressMessage": `Langt trykk eller trykk Alt + PilNed for å åpne menyen`
};
var $89aaf803103bb500$exports = {};
$89aaf803103bb500$exports = {
  "longPressMessage": `Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen`
};
var $c685891476dbaaca$exports = {};
$c685891476dbaaca$exports = {
  "longPressMessage": `Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu`
};
var $885879b9b10c2959$exports = {};
$885879b9b10c2959$exports = {
  "longPressMessage": `Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu`
};
var $6b39616688a51692$exports = {};
$6b39616688a51692$exports = {
  "longPressMessage": `Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu`
};
var $f26362aed63f47e2$exports = {};
$f26362aed63f47e2$exports = {
  "longPressMessage": `Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul`
};
var $06cbade644558bf0$exports = {};
$06cbade644558bf0$exports = {
  "longPressMessage": `Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню`
};
var $0a391ff68f9d59b1$exports = {};
$0a391ff68f9d59b1$exports = {
  "longPressMessage": `Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol`
};
var $8193cf0e649c7928$exports = {};
$8193cf0e649c7928$exports = {
  "longPressMessage": `Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol`
};
var $f398debcce5a5c55$exports = {};
$f398debcce5a5c55$exports = {
  "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni`
};
var $9e9fef000aa4c013$exports = {};
$9e9fef000aa4c013$exports = {
  "longPressMessage": `Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn`
};
var $c016c8183bbe3d68$exports = {};
$c016c8183bbe3d68$exports = {
  "longPressMessage": `Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın`
};
var $ca4f6c8462244e62$exports = {};
$ca4f6c8462244e62$exports = {
  "longPressMessage": `Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню`
};
var $2d9960c02ccac927$exports = {};
$2d9960c02ccac927$exports = {
  "longPressMessage": `长按或按 Alt + 向下方向键以打开菜单`
};
var $f1b682a4c8c5631c$exports = {};
$f1b682a4c8c5631c$exports = {
  "longPressMessage": `長按或按 Alt+向下鍵以開啟功能表`
};
var $2cbb7ca666678a14$exports = {};
$2cbb7ca666678a14$exports = {
  "ar-AE": $c0398ad35c3639b7$exports,
  "bg-BG": $7af657c4165927c3$exports,
  "cs-CZ": $d95d4da6d531ab81$exports,
  "da-DK": $24ebda9c775dca17$exports,
  "de-DE": $743e0dfca6cab1e9$exports,
  "el-GR": $a2f41026e05f1c84$exports,
  "en-US": $43b800e97c901737$exports,
  "es-ES": $442f5f6ac211e29f$exports,
  "et-EE": $dff280acfeb2d8ac$exports,
  "fi-FI": $51608325613944d7$exports,
  "fr-FR": $c4a1b1eabeaa87be$exports,
  "he-IL": $8c74815cdee18d1b$exports,
  "hr-HR": $fd0e9ef6a7fe0ec9$exports,
  "hu-HU": $a89a74a39eba465a$exports,
  "it-IT": $edc7c66594a0ae8a$exports,
  "ja-JP": $f1ab51510712db52$exports,
  "ko-KR": $f9b672d9b82fa3d6$exports,
  "lt-LT": $a385f3910feda499$exports,
  "lv-LV": $4f1bde932c441789$exports,
  "nb-NO": $914a51a8a594d5be$exports,
  "nl-NL": $89aaf803103bb500$exports,
  "pl-PL": $c685891476dbaaca$exports,
  "pt-BR": $885879b9b10c2959$exports,
  "pt-PT": $6b39616688a51692$exports,
  "ro-RO": $f26362aed63f47e2$exports,
  "ru-RU": $06cbade644558bf0$exports,
  "sk-SK": $0a391ff68f9d59b1$exports,
  "sl-SI": $8193cf0e649c7928$exports,
  "sr-SP": $f398debcce5a5c55$exports,
  "sv-SE": $9e9fef000aa4c013$exports,
  "tr-TR": $c016c8183bbe3d68$exports,
  "uk-UA": $ca4f6c8462244e62$exports,
  "zh-CN": $2d9960c02ccac927$exports,
  "zh-TW": $f1b682a4c8c5631c$exports
};
const $22e2f5f6490788e8$export$f6211563215e3b37 = /* @__PURE__ */ new WeakMap();
function $535772f9d2c1f38d$var$getRadiosInGroup(element) {
  if (!element.form)
    return Array.from($d447af545b77c9f1$export$b204af158042fbac(element).querySelectorAll(`input[type="radio"][name="${CSS.escape(element.name)}"]`)).filter((radio) => !radio.form);
  const radioList = element.form.elements.namedItem(element.name);
  let ownerWindow = $d447af545b77c9f1$export$f21a1ffae260145a(element);
  if (radioList instanceof ownerWindow.RadioNodeList) return Array.from(radioList).filter((el) => el instanceof ownerWindow.HTMLInputElement);
  if (radioList instanceof ownerWindow.HTMLInputElement) return [
    radioList
  ];
  return [];
}
function $535772f9d2c1f38d$var$isTabbableRadio(element) {
  if (element.checked) return true;
  const radios = $535772f9d2c1f38d$var$getRadiosInGroup(element);
  return radios.length > 0 && !radios.some((radio) => radio.checked);
}
function $535772f9d2c1f38d$var$isElementInScope(element, scope) {
  if (!element) return false;
  if (!scope) return false;
  return scope.some((node) => $23f2114a1b82827e$export$4282f70798064fe0(node, element));
}
function $535772f9d2c1f38d$export$2d6ec8fc375ceafa(root, opts, scope) {
  let filter = opts?.tabbable ? $3b8b240c1bf84ab9$export$bebd5a1431fec25d : $3b8b240c1bf84ab9$export$4c063cf1350e6fed;
  let rootElement = root?.nodeType === Node.ELEMENT_NODE ? root : null;
  let doc = $d447af545b77c9f1$export$b204af158042fbac(rootElement);
  let walker = $654b97e09f2a30c1$export$4d0f8be8b12a7ef6(doc, root || doc, NodeFilter.SHOW_ELEMENT, {
    acceptNode(node) {
      if ($23f2114a1b82827e$export$4282f70798064fe0(opts?.from, node)) return NodeFilter.FILTER_REJECT;
      if (opts?.tabbable && node.tagName === "INPUT" && node.getAttribute("type") === "radio") {
        if (!$535772f9d2c1f38d$var$isTabbableRadio(node)) return NodeFilter.FILTER_REJECT;
        if (walker.currentNode.tagName === "INPUT" && walker.currentNode.type === "radio" && walker.currentNode.name === node.name) return NodeFilter.FILTER_REJECT;
      }
      if (filter(node) && (!scope || $535772f9d2c1f38d$var$isElementInScope(node, scope)) && (!opts?.accept || opts.accept(node))) return NodeFilter.FILTER_ACCEPT;
      return NodeFilter.FILTER_SKIP;
    }
  });
  if (opts?.from) walker.currentNode = opts.from;
  return walker;
}
class $535772f9d2c1f38d$var$Tree {
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map();
    this.root = new $535772f9d2c1f38d$var$TreeNode({
      scopeRef: null
    });
    this.fastMap.set(null, this.root);
  }
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(data) {
    return this.fastMap.get(data);
  }
  addTreeNode(scopeRef, parent, nodeToRestore) {
    let parentNode = this.fastMap.get(parent ?? null);
    if (!parentNode) return;
    let node = new $535772f9d2c1f38d$var$TreeNode({
      scopeRef
    });
    parentNode.addChild(node);
    node.parent = parentNode;
    this.fastMap.set(scopeRef, node);
    if (nodeToRestore) node.nodeToRestore = nodeToRestore;
  }
  addNode(node) {
    this.fastMap.set(node.scopeRef, node);
  }
  removeTreeNode(scopeRef) {
    if (scopeRef === null) return;
    let node = this.fastMap.get(scopeRef);
    if (!node) return;
    let parentNode = node.parent;
    for (let current of this.traverse()) if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && $535772f9d2c1f38d$var$isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
    let children = node.children;
    if (parentNode) {
      parentNode.removeChild(node);
      if (children.size > 0) children.forEach((child) => parentNode && parentNode.addChild(child));
    }
    this.fastMap.delete(node.scopeRef);
  }
  // Pre Order Depth First
  *traverse(node = this.root) {
    if (node.scopeRef != null) yield node;
    if (node.children.size > 0) for (let child of node.children) yield* this.traverse(child);
  }
  clone() {
    let newTree = new $535772f9d2c1f38d$var$Tree();
    for (let node of this.traverse()) newTree.addTreeNode(node.scopeRef, node.parent?.scopeRef ?? null, node.nodeToRestore);
    return newTree;
  }
}
class $535772f9d2c1f38d$var$TreeNode {
  constructor(props) {
    this.children = /* @__PURE__ */ new Set();
    this.contain = false;
    this.scopeRef = props.scopeRef;
  }
  addChild(node) {
    this.children.add(node);
    node.parent = this;
  }
  removeChild(node) {
    this.children.delete(node);
    node.parent = void 0;
  }
}
new $535772f9d2c1f38d$var$Tree();
function $f282e36c29c025e8$export$f9d5c8beee7d008d(props, state, ref) {
  let { type } = props;
  let { isOpen } = state;
  reactExports.useEffect(() => {
    if (ref && ref.current) $22e2f5f6490788e8$export$f6211563215e3b37.set(ref.current, state.close);
  });
  let ariaHasPopup = void 0;
  if (type === "menu") ariaHasPopup = true;
  else if (type === "listbox") ariaHasPopup = "listbox";
  let overlayId = $390e54f620492c70$export$f680877a34711e37();
  return {
    triggerProps: {
      "aria-haspopup": ariaHasPopup,
      "aria-expanded": isOpen,
      "aria-controls": isOpen ? overlayId : void 0,
      onPress: state.toggle
    },
    overlayProps: {
      id: overlayId
    }
  };
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $168583247155ddda$export$dc9c12ed27dd1b49(props, state, ref) {
  let { type = "menu", isDisabled, trigger = "press" } = props;
  let menuTriggerId = $390e54f620492c70$export$f680877a34711e37();
  let { triggerProps, overlayProps } = $f282e36c29c025e8$export$f9d5c8beee7d008d({
    type
  }, state, ref);
  let onKeyDown = (e) => {
    if (isDisabled) return;
    if (trigger === "longPress" && !e.altKey) return;
    if (ref && ref.current) switch (e.key) {
      case "Enter":
      case " ":
        if (trigger === "longPress" || e.isDefaultPrevented()) return;
      // fallthrough
      case "ArrowDown":
        if (!("continuePropagation" in e)) e.stopPropagation();
        e.preventDefault();
        state.toggle("first");
        break;
      case "ArrowUp":
        if (!("continuePropagation" in e)) e.stopPropagation();
        e.preventDefault();
        state.toggle("last");
        break;
      default:
        if ("continuePropagation" in e) e.continuePropagation();
    }
  };
  let stringFormatter = $cf2482eff2eeeec2$export$f12b703ca79dfbb1($parcel$interopDefault($2cbb7ca666678a14$exports), "@react-aria/menu");
  let { longPressProps } = $7b01448eaad0fe7c$export$c24ed0104d07eab9({
    isDisabled: isDisabled || trigger !== "longPress",
    accessibilityDescription: stringFormatter.format("longPressMessage"),
    onLongPressStart() {
      state.close();
    },
    onLongPress() {
      state.open("first");
    }
  });
  let pressProps = {
    preventFocusOnPress: true,
    onPressStart(e) {
      if (e.pointerType !== "touch" && e.pointerType !== "keyboard" && !isDisabled) {
        $1969ac565cfec8d0$export$de79e2c695e052f3(e.target);
        state.open(e.pointerType === "virtual" ? "first" : null);
      }
    },
    onPress(e) {
      if (e.pointerType === "touch" && !isDisabled) {
        $1969ac565cfec8d0$export$de79e2c695e052f3(e.target);
        state.toggle();
      }
    }
  };
  delete triggerProps.onPress;
  return {
    // @ts-ignore - TODO we pass out both DOMAttributes AND AriaButtonProps, but useButton will discard the longPress event handlers, it's only through PressResponder magic that this works for RSP and RAC. it does not work in aria examples
    menuTriggerProps: {
      ...triggerProps,
      ...trigger === "press" ? pressProps : longPressProps,
      id: menuTriggerId,
      onKeyDown
    },
    menuProps: {
      ...overlayProps,
      "aria-labelledby": menuTriggerId,
      autoFocus: state.focusStrategy || true,
      onClose: state.close
    }
  };
}
function $b72f3f7b3b5f42c6$export$76e4e37e5339496d(to) {
  let from = $b72f3f7b3b5f42c6$export$759df0d867455a91($d447af545b77c9f1$export$b204af158042fbac(to));
  if (from !== to) {
    if (from) $b72f3f7b3b5f42c6$export$6c5dc7e81d2cc29a(from, to);
    if (to) $b72f3f7b3b5f42c6$export$2b35b76d2e30e129(to, from);
  }
}
function $b72f3f7b3b5f42c6$export$6c5dc7e81d2cc29a(from, to) {
  from.dispatchEvent(new FocusEvent("blur", {
    relatedTarget: to
  }));
  from.dispatchEvent(new FocusEvent("focusout", {
    bubbles: true,
    relatedTarget: to
  }));
}
function $b72f3f7b3b5f42c6$export$2b35b76d2e30e129(to, from) {
  to.dispatchEvent(new FocusEvent("focus", {
    relatedTarget: from
  }));
  to.dispatchEvent(new FocusEvent("focusin", {
    bubbles: true,
    relatedTarget: from
  }));
}
function $b72f3f7b3b5f42c6$export$759df0d867455a91(document2) {
  let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(document2);
  let activeDescendant = activeElement?.getAttribute("aria-activedescendant");
  if (activeDescendant) return document2.getElementById(activeDescendant) || activeElement;
  return activeElement;
}
function $22bbea12c2567021$export$d3e3bd3e26688c04(e) {
  return $2add3ce32c6007eb$export$e1865c3bedcd822b() ? e.altKey : e.ctrlKey;
}
function $22bbea12c2567021$export$c3d8340acf92597f(collectionRef, key) {
  let selector = `[data-key="${CSS.escape(String(key))}"]`;
  let collection = collectionRef.current?.dataset.collection;
  if (collection) selector = `[data-collection="${CSS.escape(collection)}"]${selector}`;
  return collectionRef.current?.querySelector(selector);
}
const $22bbea12c2567021$var$collectionMap = /* @__PURE__ */ new WeakMap();
function $22bbea12c2567021$export$881eb0d9f3605d9d(collection) {
  let id = $390e54f620492c70$export$f680877a34711e37();
  $22bbea12c2567021$var$collectionMap.set(collection, id);
  return id;
}
function $22bbea12c2567021$export$6aeb1680a0ae8741(collection) {
  return $22bbea12c2567021$var$collectionMap.get(collection);
}
const $f5a4a9a3486154da$var$TYPEAHEAD_DEBOUNCE_WAIT_MS = 1e3;
function $f5a4a9a3486154da$export$e32c88dfddc6e1d8(options) {
  let { keyboardDelegate, selectionManager, onTypeSelect } = options;
  let state = reactExports.useRef({
    search: "",
    timeout: void 0
  }).current;
  let onKeyDown = (e) => {
    let character = $f5a4a9a3486154da$var$getStringForKey(e.key);
    if (!character || e.ctrlKey || e.metaKey || !$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e)) || state.search.length === 0 && character === " ") return;
    if (character === " " && state.search.trim().length > 0) {
      e.preventDefault();
      if (!("continuePropagation" in e)) e.stopPropagation();
    }
    state.search += character;
    if (keyboardDelegate.getKeyForSearch != null) {
      let key = keyboardDelegate.getKeyForSearch(state.search, selectionManager.focusedKey);
      if (key == null) key = keyboardDelegate.getKeyForSearch(state.search);
      if (key != null) {
        selectionManager.setFocusedKey(key);
        if (onTypeSelect) onTypeSelect(key);
      }
    }
    clearTimeout(state.timeout);
    state.timeout = setTimeout(() => {
      state.search = "";
    }, $f5a4a9a3486154da$var$TYPEAHEAD_DEBOUNCE_WAIT_MS);
  };
  return {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDown : void 0
    }
  };
}
function $f5a4a9a3486154da$var$getStringForKey(key) {
  if (key.length === 1 || !/^[A-Z]/i.test(key)) return key;
  return "";
}
function $d667c2af82d35a98$export$d6daf82dcd84e87c(options) {
  let { selectionManager: manager, keyboardDelegate: delegate, ref, autoFocus = false, shouldFocusWrap = false, disallowEmptySelection = false, disallowSelectAll = false, escapeKeyBehavior = "clearSelection", selectOnFocus = manager.selectionBehavior === "replace", disallowTypeAhead = false, shouldUseVirtualFocus, allowsTabNavigation = false, scrollRef = ref, linkBehavior = "action" } = options;
  let { direction } = $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7();
  let router = $caaf0dd3060ed57c$export$9a302a45f65d0572();
  let onKeyDown = (e) => {
    if (e.altKey && e.key === "Tab") e.preventDefault();
    if (!ref.current || !$23f2114a1b82827e$export$4282f70798064fe0(ref.current, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
    const navigateToKey = (key, childFocus) => {
      if (key != null) {
        if (manager.isLink(key) && linkBehavior === "selection" && selectOnFocus && !$22bbea12c2567021$export$d3e3bd3e26688c04(e)) {
          reactDomExports.flushSync(() => {
            manager.setFocusedKey(key, childFocus);
          });
          let item = $22bbea12c2567021$export$c3d8340acf92597f(ref, key);
          let itemProps = manager.getItemProps(key);
          if (item) router.open(item, e, itemProps.href, itemProps.routerOptions);
          return;
        }
        manager.setFocusedKey(key, childFocus);
        if (manager.isLink(key) && linkBehavior === "override") return;
        if (e.shiftKey && manager.selectionMode === "multiple") manager.extendSelection(key);
        else if (selectOnFocus && !$22bbea12c2567021$export$d3e3bd3e26688c04(e)) manager.replaceSelection(key);
      }
    };
    switch (e.key) {
      case "ArrowDown":
        if (delegate.getKeyBelow) {
          let nextKey = manager.focusedKey != null ? delegate.getKeyBelow?.(manager.focusedKey) : delegate.getFirstKey?.();
          if (nextKey == null && shouldFocusWrap) nextKey = delegate.getFirstKey?.(manager.focusedKey);
          if (nextKey != null) {
            e.preventDefault();
            navigateToKey(nextKey);
          }
        }
        break;
      case "ArrowUp":
        if (delegate.getKeyAbove) {
          let nextKey = manager.focusedKey != null ? delegate.getKeyAbove?.(manager.focusedKey) : delegate.getLastKey?.();
          if (nextKey == null && shouldFocusWrap) nextKey = delegate.getLastKey?.(manager.focusedKey);
          if (nextKey != null) {
            e.preventDefault();
            navigateToKey(nextKey);
          }
        }
        break;
      case "ArrowLeft":
        if (delegate.getKeyLeftOf) {
          let nextKey = manager.focusedKey != null ? delegate.getKeyLeftOf?.(manager.focusedKey) : delegate.getFirstKey?.();
          if (nextKey == null && shouldFocusWrap) nextKey = direction === "rtl" ? delegate.getFirstKey?.(manager.focusedKey) : delegate.getLastKey?.(manager.focusedKey);
          if (nextKey != null) {
            e.preventDefault();
            navigateToKey(nextKey, direction === "rtl" ? "first" : "last");
          }
        }
        break;
      case "ArrowRight":
        if (delegate.getKeyRightOf) {
          let nextKey = manager.focusedKey != null ? delegate.getKeyRightOf?.(manager.focusedKey) : delegate.getFirstKey?.();
          if (nextKey == null && shouldFocusWrap) nextKey = direction === "rtl" ? delegate.getLastKey?.(manager.focusedKey) : delegate.getFirstKey?.(manager.focusedKey);
          if (nextKey != null) {
            e.preventDefault();
            navigateToKey(nextKey, direction === "rtl" ? "last" : "first");
          }
        }
        break;
      case "Home":
        if (delegate.getFirstKey) {
          if (manager.focusedKey === null && e.shiftKey) return;
          e.preventDefault();
          let firstKey = delegate.getFirstKey(manager.focusedKey, $bb39c0fc1c19b34c$export$16792effe837dba3(e));
          manager.setFocusedKey(firstKey);
          if (firstKey != null) {
            if ($bb39c0fc1c19b34c$export$16792effe837dba3(e) && e.shiftKey && manager.selectionMode === "multiple") manager.extendSelection(firstKey);
            else if (selectOnFocus) manager.replaceSelection(firstKey);
          }
        }
        break;
      case "End":
        if (delegate.getLastKey) {
          if (manager.focusedKey === null && e.shiftKey) return;
          e.preventDefault();
          let lastKey = delegate.getLastKey(manager.focusedKey, $bb39c0fc1c19b34c$export$16792effe837dba3(e));
          manager.setFocusedKey(lastKey);
          if (lastKey != null) {
            if ($bb39c0fc1c19b34c$export$16792effe837dba3(e) && e.shiftKey && manager.selectionMode === "multiple") manager.extendSelection(lastKey);
            else if (selectOnFocus) manager.replaceSelection(lastKey);
          }
        }
        break;
      case "PageDown":
        if (delegate.getKeyPageBelow && manager.focusedKey != null) {
          let nextKey = delegate.getKeyPageBelow(manager.focusedKey);
          if (nextKey != null) {
            e.preventDefault();
            navigateToKey(nextKey);
          }
        }
        break;
      case "PageUp":
        if (delegate.getKeyPageAbove && manager.focusedKey != null) {
          let nextKey = delegate.getKeyPageAbove(manager.focusedKey);
          if (nextKey != null) {
            e.preventDefault();
            navigateToKey(nextKey);
          }
        }
        break;
      case "a":
        if ($bb39c0fc1c19b34c$export$16792effe837dba3(e) && manager.selectionMode === "multiple" && disallowSelectAll !== true) {
          e.preventDefault();
          manager.selectAll();
        }
        break;
      case "Escape":
        if (escapeKeyBehavior === "clearSelection" && !disallowEmptySelection && manager.selectedKeys.size !== 0) {
          e.stopPropagation();
          e.preventDefault();
          manager.clearSelection();
        }
        break;
      case "Tab":
        if (!allowsTabNavigation) {
          if (e.shiftKey) ref.current.focus();
          else {
            let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa(ref.current, {
              tabbable: true
            });
            let next = void 0;
            let last;
            do {
              last = walker.lastChild();
              if (last) next = last;
            } while (last);
            let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576();
            if (next && (!$23f2114a1b82827e$export$b4f377a2b6254582(next) || activeElement && !$3b8b240c1bf84ab9$export$bebd5a1431fec25d(activeElement))) $1969ac565cfec8d0$export$de79e2c695e052f3(next);
          }
          break;
        }
    }
  };
  let scrollPos = reactExports.useRef({
    top: 0,
    left: 0
  });
  $600b3cf69ae46262$export$90fc3a17d93f704c(scrollRef, "scroll", () => {
    scrollPos.current = {
      top: scrollRef.current?.scrollTop ?? 0,
      left: scrollRef.current?.scrollLeft ?? 0
    };
  });
  let onFocus = (e) => {
    if (manager.isFocused) {
      if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) manager.setFocused(false);
      return;
    }
    if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
    manager.setFocused(true);
    if (manager.focusedKey == null) {
      let navigateToKey = (key) => {
        if (key != null) {
          manager.setFocusedKey(key);
          if (selectOnFocus && !manager.isSelected(key)) manager.replaceSelection(key);
        }
      };
      let relatedTarget = e.relatedTarget;
      if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) navigateToKey(manager.lastSelectedKey ?? delegate.getLastKey?.());
      else navigateToKey(manager.firstSelectedKey ?? delegate.getFirstKey?.());
    } else if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollPos.current.top;
      scrollRef.current.scrollLeft = scrollPos.current.left;
    }
    if (manager.focusedKey != null && scrollRef.current) {
      let element = $22bbea12c2567021$export$c3d8340acf92597f(ref, manager.focusedKey);
      if (element instanceof HTMLElement) {
        if (!$23f2114a1b82827e$export$b4f377a2b6254582(element) && !shouldUseVirtualFocus) $1969ac565cfec8d0$export$de79e2c695e052f3(element);
        let modality = $8f5a2122b0992be3$export$630ff653c5ada6a9();
        if (modality === "keyboard") $51a3e22a5186a962$export$c826860796309d1b(element, {
          containingElement: ref.current
        });
      }
    }
  };
  let onBlur = (e) => {
    if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, e.relatedTarget)) manager.setFocused(false);
  };
  let shouldVirtualFocusFirst = reactExports.useRef(false);
  $600b3cf69ae46262$export$90fc3a17d93f704c(ref, $8b2399d051d06d4c$export$831c820ad60f9d12, !shouldUseVirtualFocus ? void 0 : (e) => {
    let { detail } = e;
    e.stopPropagation();
    manager.setFocused(true);
    if (detail?.focusStrategy === "first") shouldVirtualFocusFirst.current = true;
  });
  $a475cdc2445827b5$export$72ef708ab07251f1(() => {
    if (shouldVirtualFocusFirst.current) {
      let keyToFocus = delegate.getFirstKey?.() ?? null;
      if (keyToFocus == null) {
        let previousActiveElement = $23f2114a1b82827e$export$cd4e5573fbe2b576();
        $b72f3f7b3b5f42c6$export$76e4e37e5339496d(ref.current);
        $b72f3f7b3b5f42c6$export$2b35b76d2e30e129(previousActiveElement, null);
        if (manager.collection.size > 0) shouldVirtualFocusFirst.current = false;
      } else {
        manager.setFocusedKey(keyToFocus);
        shouldVirtualFocusFirst.current = false;
      }
    }
  }, [
    manager.collection
  ]);
  $a475cdc2445827b5$export$72ef708ab07251f1(() => {
    if (manager.collection.size > 0) shouldVirtualFocusFirst.current = false;
  }, [
    manager.focusedKey
  ]);
  $600b3cf69ae46262$export$90fc3a17d93f704c(ref, $8b2399d051d06d4c$export$447a38995de2c711, !shouldUseVirtualFocus ? void 0 : (e) => {
    e.stopPropagation();
    manager.setFocused(false);
    if (e.detail?.clearFocusKey) manager.setFocusedKey(null);
  });
  const autoFocusRef = reactExports.useRef(autoFocus);
  const didAutoFocusRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (autoFocusRef.current) {
      let focusedKey = null;
      if (autoFocus === "first") focusedKey = delegate.getFirstKey?.() ?? null;
      if (autoFocus === "last") focusedKey = delegate.getLastKey?.() ?? null;
      let selectedKeys = manager.selectedKeys;
      if (selectedKeys.size) {
        for (let key of selectedKeys) if (manager.canSelectItem(key)) {
          focusedKey = key;
          break;
        }
      }
      manager.setFocused(true);
      manager.setFocusedKey(focusedKey);
      if (focusedKey == null && !shouldUseVirtualFocus && ref.current) $f192c2f16961cbe0$export$80f3e147d781571c(ref.current);
      if (manager.collection.size > 0) {
        autoFocusRef.current = false;
        didAutoFocusRef.current = true;
      }
    }
  });
  let lastFocusedKey = reactExports.useRef(manager.focusedKey);
  let raf = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (manager.isFocused && manager.focusedKey != null && (manager.focusedKey !== lastFocusedKey.current || didAutoFocusRef.current) && scrollRef.current && ref.current) {
      let modality = $8f5a2122b0992be3$export$630ff653c5ada6a9();
      let element = $22bbea12c2567021$export$c3d8340acf92597f(ref, manager.focusedKey);
      if (!(element instanceof HTMLElement))
        return;
      if (modality === "keyboard" || didAutoFocusRef.current) {
        if (raf.current) cancelAnimationFrame(raf.current);
        raf.current = requestAnimationFrame(() => {
          if (scrollRef.current) {
            $51a3e22a5186a962$export$53a0910f038337bd(scrollRef.current, element);
            if (modality !== "virtual") $51a3e22a5186a962$export$c826860796309d1b(element, {
              containingElement: ref.current
            });
          }
        });
      }
    }
    if (!shouldUseVirtualFocus && manager.isFocused && manager.focusedKey == null && lastFocusedKey.current != null && ref.current) $f192c2f16961cbe0$export$80f3e147d781571c(ref.current);
    lastFocusedKey.current = manager.focusedKey;
    didAutoFocusRef.current = false;
  });
  reactExports.useEffect(() => {
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);
  $600b3cf69ae46262$export$90fc3a17d93f704c(ref, "react-aria-focus-scope-restore", (e) => {
    e.preventDefault();
    manager.setFocused(true);
  });
  let handlers = {
    onKeyDown,
    onFocus,
    onBlur,
    onMouseDown(e) {
      if (scrollRef.current === $23f2114a1b82827e$export$e58f029f0fbfdb29(e))
        e.preventDefault();
    }
  };
  let { typeSelectProps } = $f5a4a9a3486154da$export$e32c88dfddc6e1d8({
    keyboardDelegate: delegate,
    selectionManager: manager
  });
  if (!disallowTypeAhead) handlers = $bbaa08b3cd72f041$export$9d1611c77c2fe928(typeSelectProps, handlers);
  let tabIndex = void 0;
  if (!shouldUseVirtualFocus) tabIndex = manager.focusedKey == null ? 0 : -1;
  let collectionId = $22bbea12c2567021$export$881eb0d9f3605d9d(manager.collection);
  return {
    collectionProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(handlers, {
      tabIndex,
      "data-collection": collectionId
    })
  };
}
function $f6ba6936bfd098a0$export$ecf600387e221c37(options) {
  let { id, selectionManager: manager, key, ref, shouldSelectOnPressUp, shouldUseVirtualFocus, focus, isDisabled, onAction, allowsDifferentPressOrigin, linkBehavior = "action" } = options;
  let router = $caaf0dd3060ed57c$export$9a302a45f65d0572();
  id = $390e54f620492c70$export$f680877a34711e37(id);
  let onSelect = (e) => {
    if (e.pointerType === "keyboard" && $22bbea12c2567021$export$d3e3bd3e26688c04(e)) manager.toggleSelection(key);
    else {
      if (manager.selectionMode === "none") return;
      if (manager.isLink(key)) {
        if (linkBehavior === "selection" && ref.current) {
          let itemProps2 = manager.getItemProps(key);
          router.open(ref.current, e, itemProps2.href, itemProps2.routerOptions);
          manager.setSelectedKeys(manager.selectedKeys);
          return;
        } else if (linkBehavior === "override" || linkBehavior === "none") return;
      }
      if (manager.selectionMode === "single") {
        if (manager.isSelected(key) && !manager.disallowEmptySelection) manager.toggleSelection(key);
        else manager.replaceSelection(key);
      } else if (e && e.shiftKey) manager.extendSelection(key);
      else if (manager.selectionBehavior === "toggle" || e && ($bb39c0fc1c19b34c$export$16792effe837dba3(e) || e.pointerType === "touch" || e.pointerType === "virtual"))
        manager.toggleSelection(key);
      else manager.replaceSelection(key);
    }
  };
  reactExports.useEffect(() => {
    let isFocused = key === manager.focusedKey;
    if (isFocused && manager.isFocused) {
      if (!shouldUseVirtualFocus) {
        if (focus) focus();
        else if ($23f2114a1b82827e$export$cd4e5573fbe2b576() !== ref.current && ref.current) $f192c2f16961cbe0$export$80f3e147d781571c(ref.current);
      } else $b72f3f7b3b5f42c6$export$76e4e37e5339496d(ref.current);
    }
  }, [
    ref,
    key,
    manager.focusedKey,
    manager.childFocusStrategy,
    manager.isFocused,
    shouldUseVirtualFocus
  ]);
  isDisabled = isDisabled || manager.isDisabled(key);
  let itemProps = {};
  if (!shouldUseVirtualFocus && !isDisabled) itemProps = {
    tabIndex: key === manager.focusedKey ? 0 : -1,
    onFocus(e) {
      if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e) === ref.current) manager.setFocusedKey(key);
    }
  };
  else if (isDisabled) itemProps.onMouseDown = (e) => {
    e.preventDefault();
  };
  reactExports.useEffect(() => {
    if (isDisabled && manager.focusedKey === key) manager.setFocusedKey(null);
  }, [
    manager,
    isDisabled,
    key
  ]);
  let isLinkOverride = manager.isLink(key) && linkBehavior === "override";
  let isActionOverride = onAction && options["UNSTABLE_itemBehavior"] === "action";
  let hasLinkAction = manager.isLink(key) && linkBehavior !== "selection" && linkBehavior !== "none";
  let allowsSelection = !isDisabled && manager.canSelectItem(key) && !isLinkOverride && !isActionOverride;
  let allowsActions = (onAction || hasLinkAction) && !isDisabled;
  let hasPrimaryAction = allowsActions && (manager.selectionBehavior === "replace" ? !allowsSelection : !allowsSelection || manager.isEmpty);
  let hasSecondaryAction = allowsActions && allowsSelection && manager.selectionBehavior === "replace";
  let hasAction = hasPrimaryAction || hasSecondaryAction;
  let modality = reactExports.useRef(null);
  let longPressEnabled = hasAction && allowsSelection;
  let longPressEnabledOnPressStart = reactExports.useRef(false);
  let hadPrimaryActionOnPressStart = reactExports.useRef(false);
  let collectionItemProps = manager.getItemProps(key);
  let performAction = (e) => {
    if (onAction) {
      onAction();
      ref.current?.dispatchEvent(new CustomEvent("react-aria-item-action", {
        bubbles: true
      }));
    }
    if (hasLinkAction && ref.current) router.open(ref.current, e, collectionItemProps.href, collectionItemProps.routerOptions);
  };
  let itemPressProps = {
    ref
  };
  if (shouldSelectOnPressUp) {
    itemPressProps.onPressStart = (e) => {
      modality.current = e.pointerType;
      longPressEnabledOnPressStart.current = longPressEnabled;
      if (e.pointerType === "keyboard" && (!hasAction || $f6ba6936bfd098a0$var$isSelectionKey(e.key))) onSelect(e);
    };
    if (!allowsDifferentPressOrigin) itemPressProps.onPress = (e) => {
      if (hasPrimaryAction || hasSecondaryAction && e.pointerType !== "mouse") {
        if (e.pointerType === "keyboard" && !$f6ba6936bfd098a0$var$isActionKey(e.key)) return;
        performAction(e);
      } else if (e.pointerType !== "keyboard" && allowsSelection) onSelect(e);
    };
    else {
      itemPressProps.onPressUp = hasPrimaryAction ? void 0 : (e) => {
        if (e.pointerType === "mouse" && allowsSelection) onSelect(e);
      };
      itemPressProps.onPress = hasPrimaryAction ? performAction : (e) => {
        if (e.pointerType !== "keyboard" && e.pointerType !== "mouse" && allowsSelection) onSelect(e);
      };
    }
  } else {
    itemPressProps.onPressStart = (e) => {
      modality.current = e.pointerType;
      longPressEnabledOnPressStart.current = longPressEnabled;
      hadPrimaryActionOnPressStart.current = hasPrimaryAction;
      if (allowsSelection && (e.pointerType === "mouse" && !hasPrimaryAction || e.pointerType === "keyboard" && (!allowsActions || $f6ba6936bfd098a0$var$isSelectionKey(e.key)))) onSelect(e);
    };
    itemPressProps.onPress = (e) => {
      if (e.pointerType === "touch" || e.pointerType === "pen" || e.pointerType === "virtual" || e.pointerType === "keyboard" && hasAction && $f6ba6936bfd098a0$var$isActionKey(e.key) || e.pointerType === "mouse" && hadPrimaryActionOnPressStart.current) {
        if (hasAction) performAction(e);
        else if (allowsSelection) onSelect(e);
      }
    };
  }
  itemProps["data-collection"] = $22bbea12c2567021$export$6aeb1680a0ae8741(manager.collection);
  itemProps["data-key"] = key;
  itemPressProps.preventFocusOnPress = shouldUseVirtualFocus;
  if (shouldUseVirtualFocus) itemPressProps = $bbaa08b3cd72f041$export$9d1611c77c2fe928(itemPressProps, {
    onPressStart(e) {
      if (e.pointerType !== "touch") {
        manager.setFocused(true);
        manager.setFocusedKey(key);
      }
    },
    onPress(e) {
      if (e.pointerType === "touch") {
        manager.setFocused(true);
        manager.setFocusedKey(key);
      }
    }
  });
  if (collectionItemProps) {
    for (let key2 of [
      "onPressStart",
      "onPressEnd",
      "onPressChange",
      "onPress",
      "onPressUp",
      "onClick"
    ]) if (collectionItemProps[key2]) itemPressProps[key2] = $a4e76a5424781910$export$e08e3b67e392101e(itemPressProps[key2], collectionItemProps[key2]);
  }
  let { pressProps, isPressed } = $d27d541f9569d26d$export$45712eceda6fad21(itemPressProps);
  let onDoubleClick = hasSecondaryAction ? (e) => {
    if (modality.current === "mouse") {
      e.stopPropagation();
      e.preventDefault();
      performAction(e);
    }
  } : void 0;
  let { longPressProps } = $7b01448eaad0fe7c$export$c24ed0104d07eab9({
    isDisabled: !longPressEnabled,
    onLongPress(e) {
      if (e.pointerType === "touch") {
        onSelect(e);
        manager.setSelectionBehavior("toggle");
      }
    }
  });
  let onDragStartCapture = (e) => {
    if (modality.current === "touch" && longPressEnabledOnPressStart.current) e.preventDefault();
  };
  let onClick = linkBehavior !== "none" && manager.isLink(key) ? (e) => {
    if (!$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening) e.preventDefault();
  } : void 0;
  return {
    itemProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(
      itemProps,
      allowsSelection || hasPrimaryAction || shouldUseVirtualFocus && !isDisabled ? pressProps : {},
      longPressEnabled ? longPressProps : {},
      {
        onDoubleClick,
        onDragStartCapture,
        onClick,
        id
      },
      // Prevent DOM focus from moving on mouse down when using virtual focus
      shouldUseVirtualFocus ? {
        onMouseDown: (e) => e.preventDefault()
      } : void 0
    ),
    isPressed,
    isSelected: manager.isSelected(key),
    isFocused: manager.isFocused && manager.focusedKey === key,
    isDisabled,
    allowsSelection,
    hasAction
  };
}
function $f6ba6936bfd098a0$var$isActionKey(key) {
  return key === "Enter";
}
function $f6ba6936bfd098a0$var$isSelectionKey(key) {
  return key === " ";
}
class $a83747cc3f035330$export$8f5ed9ff9f511381 {
  constructor(ref) {
    this.ref = ref;
  }
  getItemRect(key) {
    let container = this.ref.current;
    if (!container) return null;
    let item = key != null ? $22bbea12c2567021$export$c3d8340acf92597f(this.ref, key) : null;
    if (!item) return null;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    return {
      x: itemRect.left - containerRect.left - container.clientLeft + container.scrollLeft,
      y: itemRect.top - containerRect.top - container.clientTop + container.scrollTop,
      width: itemRect.width,
      height: itemRect.height
    };
  }
  getContentSize() {
    let container = this.ref.current;
    return {
      width: container?.scrollWidth ?? 0,
      height: container?.scrollHeight ?? 0
    };
  }
  getVisibleRect() {
    let container = this.ref.current;
    return {
      x: container?.scrollLeft ?? 0,
      y: container?.scrollTop ?? 0,
      width: container?.clientWidth ?? 0,
      height: container?.clientHeight ?? 0
    };
  }
}
class $ae8f8d98b2b18f2f$export$a05409b8bb224a5a {
  constructor(...args) {
    if (args.length === 1) {
      let opts = args[0];
      this.collection = opts.collection;
      this.ref = opts.ref;
      this.collator = opts.collator;
      this.disabledKeys = opts.disabledKeys || /* @__PURE__ */ new Set();
      this.disabledBehavior = opts.disabledBehavior || "all";
      this.orientation = opts.orientation || "vertical";
      this.direction = opts.direction;
      this.layout = opts.layout || "stack";
      this.layoutDelegate = opts.layoutDelegate || new $a83747cc3f035330$export$8f5ed9ff9f511381(opts.ref);
    } else {
      this.collection = args[0];
      this.disabledKeys = args[1];
      this.ref = args[2];
      this.collator = args[3];
      this.layout = "stack";
      this.orientation = "vertical";
      this.disabledBehavior = "all";
      this.layoutDelegate = new $a83747cc3f035330$export$8f5ed9ff9f511381(this.ref);
    }
    if (this.layout === "stack" && this.orientation === "vertical") {
      this.getKeyLeftOf = void 0;
      this.getKeyRightOf = void 0;
    }
  }
  isDisabled(item) {
    return this.disabledBehavior === "all" && (item.props?.isDisabled || this.disabledKeys.has(item.key)) && item.props?.disabledBehavior !== "selection";
  }
  findNextNonDisabled(key, getNext, includeDisabled = false) {
    let nextKey = key;
    while (nextKey != null) {
      let item = this.collection.getItem(nextKey);
      if (item?.type === "item" && (includeDisabled || !this.isDisabled(item))) return nextKey;
      nextKey = getNext(nextKey);
    }
    return null;
  }
  getNextKey(key, options) {
    let nextKey = key;
    nextKey = this.collection.getKeyAfter(nextKey);
    return this.findNextNonDisabled(nextKey, (key2) => this.collection.getKeyAfter(key2), options?.includeDisabled);
  }
  getPreviousKey(key, options) {
    let nextKey = key;
    nextKey = this.collection.getKeyBefore(nextKey);
    return this.findNextNonDisabled(nextKey, (key2) => this.collection.getKeyBefore(key2), options?.includeDisabled);
  }
  findKey(key, nextKey, shouldSkip) {
    let tempKey = key;
    let itemRect = this.layoutDelegate.getItemRect(tempKey);
    if (!itemRect || tempKey == null) return null;
    let prevRect = itemRect;
    do {
      tempKey = nextKey(tempKey);
      if (tempKey == null) break;
      itemRect = this.layoutDelegate.getItemRect(tempKey);
    } while (itemRect && shouldSkip(prevRect, itemRect) && tempKey != null);
    return tempKey;
  }
  isSameRow(prevRect, itemRect) {
    return prevRect.y === itemRect.y || prevRect.x !== itemRect.x;
  }
  isSameColumn(prevRect, itemRect) {
    return prevRect.x === itemRect.x || prevRect.y !== itemRect.y;
  }
  getKeyBelow(key, options) {
    if (this.layout === "grid" && this.orientation === "vertical") return this.findKey(key, (key2) => this.getNextKey(key2, options), this.isSameRow);
    else return this.getNextKey(key, options);
  }
  getKeyAbove(key, options) {
    if (this.layout === "grid" && this.orientation === "vertical") return this.findKey(key, (key2) => this.getPreviousKey(key2, options), this.isSameRow);
    else return this.getPreviousKey(key, options);
  }
  getNextColumn(key, right, options) {
    return right ? this.getPreviousKey(key, options) : this.getNextKey(key, options);
  }
  getKeyRightOf(key, options) {
    let layoutDelegateMethod = this.direction === "ltr" ? "getKeyRightOf" : "getKeyLeftOf";
    if (this.layoutDelegate[layoutDelegateMethod]) {
      key = this.layoutDelegate[layoutDelegateMethod](key);
      return this.findNextNonDisabled(key, (key2) => this.layoutDelegate[layoutDelegateMethod](key2), options?.includeDisabled);
    }
    if (this.layout === "grid") {
      if (this.orientation === "vertical") return this.getNextColumn(key, this.direction === "rtl", options);
      else return this.findKey(key, (key2) => this.getNextColumn(key2, this.direction === "rtl", options), this.isSameColumn);
    } else if (this.orientation === "horizontal") return this.getNextColumn(key, this.direction === "rtl", options);
    return null;
  }
  getKeyLeftOf(key, options) {
    let layoutDelegateMethod = this.direction === "ltr" ? "getKeyLeftOf" : "getKeyRightOf";
    if (this.layoutDelegate[layoutDelegateMethod]) {
      key = this.layoutDelegate[layoutDelegateMethod](key);
      return this.findNextNonDisabled(key, (key2) => this.layoutDelegate[layoutDelegateMethod](key2), options?.includeDisabled);
    }
    if (this.layout === "grid") {
      if (this.orientation === "vertical") return this.getNextColumn(key, this.direction === "ltr", options);
      else return this.findKey(key, (key2) => this.getNextColumn(key2, this.direction === "ltr", options), this.isSameColumn);
    } else if (this.orientation === "horizontal") return this.getNextColumn(key, this.direction === "ltr", options);
    return null;
  }
  getFirstKey() {
    let key = this.collection.getFirstKey();
    return this.findNextNonDisabled(key, (key2) => this.collection.getKeyAfter(key2));
  }
  getLastKey() {
    let key = this.collection.getLastKey();
    return this.findNextNonDisabled(key, (key2) => this.collection.getKeyBefore(key2));
  }
  getKeyPageAbove(key) {
    let menu2 = this.ref.current;
    let itemRect = this.layoutDelegate.getItemRect(key);
    if (!itemRect) return null;
    if (menu2 && !$901761b40e390936$export$2bb74740c4e19def(menu2)) return this.getFirstKey();
    let nextKey = key;
    if (this.orientation === "horizontal") {
      let pageX = Math.max(0, itemRect.x + itemRect.width - this.layoutDelegate.getVisibleRect().width);
      while (itemRect && itemRect.x > pageX && nextKey != null) {
        nextKey = this.getKeyAbove(nextKey);
        itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
      }
    } else {
      let pageY = Math.max(0, itemRect.y + itemRect.height - this.layoutDelegate.getVisibleRect().height);
      while (itemRect && itemRect.y > pageY && nextKey != null) {
        nextKey = this.getKeyAbove(nextKey);
        itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
      }
    }
    return nextKey ?? this.getFirstKey();
  }
  getKeyPageBelow(key) {
    let menu2 = this.ref.current;
    let itemRect = this.layoutDelegate.getItemRect(key);
    if (!itemRect) return null;
    if (menu2 && !$901761b40e390936$export$2bb74740c4e19def(menu2)) return this.getLastKey();
    let nextKey = key;
    if (this.orientation === "horizontal") {
      let pageX = Math.min(this.layoutDelegate.getContentSize().width, itemRect.x - itemRect.width + this.layoutDelegate.getVisibleRect().width);
      while (itemRect && itemRect.x < pageX && nextKey != null) {
        nextKey = this.getKeyBelow(nextKey);
        itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
      }
    } else {
      let pageY = Math.min(this.layoutDelegate.getContentSize().height, itemRect.y - itemRect.height + this.layoutDelegate.getVisibleRect().height);
      while (itemRect && itemRect.y < pageY && nextKey != null) {
        nextKey = this.getKeyBelow(nextKey);
        itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
      }
    }
    return nextKey ?? this.getLastKey();
  }
  getKeyForSearch(search, fromKey) {
    if (!this.collator) return null;
    let collection = this.collection;
    let key = fromKey || this.getFirstKey();
    while (key != null) {
      let item = collection.getItem(key);
      if (!item) return null;
      let substring = item.textValue.slice(0, search.length);
      if (item.textValue && this.collator.compare(substring, search) === 0) return key;
      key = this.getNextKey(key);
    }
    return null;
  }
}
function $64903b4b31b6bb2a$export$b95089534ab7c1fd(props) {
  let { selectionManager, collection, disabledKeys, ref, keyboardDelegate, layoutDelegate, orientation } = props;
  let collator = $673d46fce3e5717d$export$a16aca283550c30d({
    usage: "search",
    sensitivity: "base"
  });
  let disabledBehavior = selectionManager.disabledBehavior;
  let delegate = reactExports.useMemo(() => keyboardDelegate || new $ae8f8d98b2b18f2f$export$a05409b8bb224a5a({
    collection,
    disabledKeys,
    disabledBehavior,
    ref,
    collator,
    layoutDelegate,
    orientation
  }), [
    keyboardDelegate,
    layoutDelegate,
    collection,
    disabledKeys,
    ref,
    collator,
    disabledBehavior,
    orientation
  ]);
  let { collectionProps } = $d667c2af82d35a98$export$d6daf82dcd84e87c({
    ...props,
    ref,
    selectionManager,
    keyboardDelegate: delegate
  });
  return {
    listProps: collectionProps
  };
}
function $a28c903ee9ad8dc5$export$79fefeb1c2091ac3(props) {
  let overlayTriggerState = $f11fb0bcf1b2687a$export$61c6a8c84e605fb6(props);
  let [focusStrategy, setFocusStrategy] = reactExports.useState(null);
  let [expandedKeysStack, setExpandedKeysStack] = reactExports.useState([]);
  let closeAll = () => {
    setExpandedKeysStack([]);
    overlayTriggerState.close();
  };
  let openSubmenu = (triggerKey, level) => {
    setExpandedKeysStack((oldStack) => {
      if (level > oldStack.length) return oldStack;
      return [
        ...oldStack.slice(0, level),
        triggerKey
      ];
    });
  };
  let closeSubmenu = (triggerKey, level) => {
    setExpandedKeysStack((oldStack) => {
      let key = oldStack[level];
      if (key === triggerKey) return oldStack.slice(0, level);
      else return oldStack;
    });
  };
  return {
    focusStrategy,
    ...overlayTriggerState,
    open(focusStrategy2 = null) {
      setFocusStrategy(focusStrategy2);
      overlayTriggerState.open();
    },
    toggle(focusStrategy2 = null) {
      setFocusStrategy(focusStrategy2);
      overlayTriggerState.toggle();
    },
    close() {
      closeAll();
    },
    expandedKeysStack,
    openSubmenu,
    closeSubmenu
  };
}
function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  return () => {
    var _a, _b, _c, _d;
    let depTime;
    if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts))) depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts))) resultTime = Date.now();
    result = fn(...newDeps);
    if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(
        `%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
    return result;
  };
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${""}`);
  } else {
    return value;
  }
}
const approxEqual = (a, b) => Math.abs(a - b) < 1;
const debounce = (targetWindow, fn, ms) => {
  let timeoutId;
  return function(...args) {
    targetWindow.clearTimeout(timeoutId);
    timeoutId = targetWindow.setTimeout(() => fn.apply(this, args), ms);
  };
};
const defaultKeyExtractor = (index) => index;
const defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};
const observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(element.getBoundingClientRect());
  if (!targetWindow.ResizeObserver) {
    return () => {
    };
  }
  const observer = new targetWindow.ResizeObserver((entries) => {
    const entry = entries[0];
    if (entry == null ? void 0 : entry.borderBoxSize) {
      const box = entry.borderBoxSize[0];
      if (box) {
        handler({ width: box.inlineSize, height: box.blockSize });
        return;
      }
    }
    handler(element.getBoundingClientRect());
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
const addEventListenerOptions = {
  passive: true
};
const supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
const observeElementOffset = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  let offset = 0;
  const fallback = instance.options.useScrollendEvent && supportsScrollend ? () => void 0 : debounce(
    targetWindow,
    () => {
      cb(offset, false);
    },
    instance.options.isScrollingResetDelay
  );
  const createHandler = (isScrolling) => () => {
    const { horizontal, isRtl } = instance.options;
    offset = horizontal ? element["scrollLeft"] * (isRtl && -1 || 1) : element["scrollTop"];
    fallback();
    cb(offset, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  endHandler();
  element.addEventListener("scroll", handler, addEventListenerOptions);
  element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  return () => {
    element.removeEventListener("scroll", handler);
    element.removeEventListener("scrollend", endHandler);
  };
};
const measureElement = (element, entry, instance) => {
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size;
    }
  }
  return Math.round(
    element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]
  );
};
const elementScroll = (offset, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset + adjustments;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
};
class Virtualizer {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.targetWindow = null;
    this.isScrolling = false;
    this.scrollToIndexTimeoutId = null;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollRect = null;
    this.scrollOffset = null;
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.elementsCache = /* @__PURE__ */ new Map();
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        }
        if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
          return null;
        }
        return _ro = new this.targetWindow.ResizeObserver((entries) => {
          entries.forEach((entry) => {
            this._measureElement(entry.target, entry);
          });
        });
      };
      return {
        disconnect: () => {
          var _a;
          (_a = get()) == null ? void 0 : _a.disconnect();
          _ro = null;
        },
        observe: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      Object.entries(opts2).forEach(([key, value]) => {
        if (typeof value === "undefined") delete opts2[key];
      });
      this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        useScrollendEvent: true,
        ...opts2
      };
    };
    this.notify = (sync) => {
      var _a, _b;
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
    };
    this.maybeNotify = memo(
      () => {
        this.calculateRange();
        return [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ];
      },
      (isScrolling) => {
        this.notify(isScrolling);
      },
      {
        key: false,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    );
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d) => d());
      this.unsubs = [];
      this.observer.disconnect();
      this.scrollElement = null;
      this.targetWindow = null;
    };
    this._didMount = () => {
      return () => {
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      var _a;
      const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        if (!scrollElement) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = scrollElement;
        if (this.scrollElement && "ownerDocument" in this.scrollElement) {
          this.targetWindow = this.scrollElement.ownerDocument.defaultView;
        } else {
          this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
        }
        this.elementsCache.forEach((cached) => {
          this.observer.observe(cached);
        });
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.maybeNotify();
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset, isScrolling) => {
            this.scrollAdjustments = 0;
            this.scrollDirection = isScrolling ? this.getScrollOffset() < offset ? "forward" : "backward" : null;
            this.scrollOffset = offset;
            this.isScrolling = isScrolling;
            this.maybeNotify();
          })
        );
      }
    };
    this.getSize = () => {
      if (!this.options.enabled) {
        this.scrollRect = null;
        return 0;
      }
      this.scrollRect = this.scrollRect ?? this.options.initialRect;
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getScrollOffset = () => {
      if (!this.options.enabled) {
        this.scrollOffset = null;
        return 0;
      }
      this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
      return this.scrollOffset;
    };
    this.getFurthestMeasurement = (measurements, index) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m2 = index - 1; m2 >= 0; m2--) {
        const measurement = measurements[m2];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a, b) => {
        if (a.end === b.end) {
          return a.index - b.index;
        }
        return a.end - b.end;
      })[0] : void 0;
    };
    this.getMeasurementOptions = memo(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (count, paddingStart, scrollMargin, getItemKey, enabled) => {
        this.pendingMeasuredCacheIndexes = [];
        return {
          count,
          paddingStart,
          scrollMargin,
          getItemKey,
          enabled
        };
      },
      {
        key: false
      }
    );
    this.getMeasurements = memo(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count, paddingStart, scrollMargin, getItemKey, enabled }, itemSizeCache) => {
        if (!enabled) {
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          return [];
        }
        if (this.measurementsCache.length === 0) {
          this.measurementsCache = this.options.initialMeasurementsCache;
          this.measurementsCache.forEach((item) => {
            this.itemSizeCache.set(item.key, item.size);
          });
        }
        const min = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const measurements = this.measurementsCache.slice(0, min);
        for (let i = min; i < count; i++) {
          const key = getItemKey(i);
          const furthestMeasurement = this.options.lanes === 1 ? measurements[i - 1] : this.getFurthestMeasurement(measurements, i);
          const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
          const measuredSize = itemSizeCache.get(key);
          const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
          const end = start + size;
          const lane = furthestMeasurement ? furthestMeasurement.lane : i % this.options.lanes;
          measurements[i] = {
            index: i,
            start,
            size,
            end,
            key,
            lane
          };
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (measurements, outerSize, scrollOffset) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset
        }) : null;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.getIndexes = memo(
      () => {
        let startIndex = null;
        let endIndex = null;
        const range = this.calculateRange();
        if (range) {
          startIndex = range.startIndex;
          endIndex = range.endIndex;
        }
        return [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          startIndex,
          endIndex
        ];
      },
      (rangeExtractor, overscan, count, startIndex, endIndex) => {
        return startIndex === null || endIndex === null ? [] : rangeExtractor({
          startIndex,
          endIndex,
          overscan,
          count
        });
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = (node, entry) => {
      const index = this.indexFromElement(node);
      const item = this.measurementsCache[index];
      if (!item) {
        return;
      }
      const key = item.key;
      const prevNode = this.elementsCache.get(key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.elementsCache.set(key, node);
      }
      if (node.isConnected) {
        this.resizeItem(index, this.options.measureElement(node, entry, this));
      }
    };
    this.resizeItem = (index, size) => {
      const item = this.measurementsCache[index];
      if (!item) {
        return;
      }
      const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
      const delta = size - itemSize;
      if (delta !== 0) {
        if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments) {
          this._scrollToOffset(this.getScrollOffset(), {
            adjustments: this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        this.pendingMeasuredCacheIndexes.push(item.index);
        this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size));
        this.notify(false);
      }
    };
    this.measureElement = (node) => {
      if (!node) {
        this.elementsCache.forEach((cached, key) => {
          if (!cached.isConnected) {
            this.observer.unobserve(cached);
            this.elementsCache.delete(key);
          }
        });
        return;
      }
      this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo(
      () => [this.getIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k = 0, len = indexes.length; k < len; k++) {
          const i = indexes[k];
          const measurement = measurements[i];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset) => {
      const measurements = this.getMeasurements();
      if (measurements.length === 0) {
        return void 0;
      }
      return notUndefined(
        measurements[findNearestBinarySearch(
          0,
          measurements.length - 1,
          (index) => notUndefined(measurements[index]).start,
          offset
        )]
      );
    };
    this.getOffsetForAlignment = (toOffset, align) => {
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (toOffset >= scrollOffset + size) {
          align = "end";
        }
      }
      if (align === "end") {
        toOffset -= size;
      }
      const scrollSizeProp = this.options.horizontal ? "scrollWidth" : "scrollHeight";
      const scrollSize = this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[scrollSizeProp] : this.scrollElement[scrollSizeProp] : 0;
      const maxOffset = scrollSize - size;
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index, align = "auto") => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      const item = this.measurementsCache[index];
      if (!item) {
        return void 0;
      }
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (item.end >= scrollOffset + size - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [scrollOffset, align];
        }
      }
      const centerOffset = item.start - this.options.scrollPaddingStart + (item.size - size) / 2;
      switch (align) {
        case "center":
          return [this.getOffsetForAlignment(centerOffset, align), align];
        case "end":
          return [
            this.getOffsetForAlignment(
              item.end + this.options.scrollPaddingEnd,
              align
            ),
            align
          ];
        default:
          return [
            this.getOffsetForAlignment(
              item.start - this.options.scrollPaddingStart,
              align
            ),
            align
          ];
      }
    };
    this.isDynamicMode = () => this.elementsCache.size > 0;
    this.cancelScrollToIndex = () => {
      if (this.scrollToIndexTimeoutId !== null && this.targetWindow) {
        this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId);
        this.scrollToIndexTimeoutId = null;
      }
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = (index, { align: initialAlign = "auto", behavior } = {}) => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      const offsetAndAlign = this.getOffsetForIndex(index, initialAlign);
      if (!offsetAndAlign) return;
      const [offset, align] = offsetAndAlign;
      this._scrollToOffset(offset, { adjustments: void 0, behavior });
      if (behavior !== "smooth" && this.isDynamicMode() && this.targetWindow) {
        this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
          this.scrollToIndexTimeoutId = null;
          const elementInDOM = this.elementsCache.has(
            this.options.getItemKey(index)
          );
          if (elementInDOM) {
            const [latestOffset] = notUndefined(
              this.getOffsetForIndex(index, align)
            );
            if (!approxEqual(latestOffset, this.getScrollOffset())) {
              this.scrollToIndex(index, { align, behavior });
            }
          } else {
            this.scrollToIndex(index, { align, behavior });
          }
        });
      }
    };
    this.scrollBy = (delta, { behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getScrollOffset() + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else {
        end = this.options.lanes === 1 ? ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0 : Math.max(
          ...measurements.slice(-this.options.lanes).map((m2) => m2.end)
        );
      }
      return Math.max(
        end - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    };
    this._scrollToOffset = (offset, {
      adjustments,
      behavior
    }) => {
      this.options.scrollToFn(offset, { behavior, adjustments }, this);
    };
    this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map();
      this.notify(false);
    };
    this.setOptions(opts);
  }
}
const findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset
}) {
  const count = measurements.length - 1;
  const getOffset = (index) => measurements[index].start;
  const startIndex = findNearestBinarySearch(0, count, getOffset, scrollOffset);
  let endIndex = startIndex;
  while (endIndex < count && measurements[endIndex].end < scrollOffset + outerSize) {
    endIndex++;
  }
  return { startIndex, endIndex };
}
const useIsomorphicLayoutEffect = typeof document !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
function useVirtualizerBase(options) {
  const rerender = reactExports.useReducer(() => ({}), {})[1];
  const resolvedOptions = {
    ...options,
    onChange: (instance2, sync) => {
      var _a;
      if (sync) {
        reactDomExports.flushSync(rerender);
      } else {
        rerender();
      }
      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
    }
  };
  const [instance] = reactExports.useState(
    () => new Virtualizer(resolvedOptions)
  );
  instance.setOptions(resolvedOptions);
  useIsomorphicLayoutEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options
  });
}
function useDataScrollOverflow$1(props = {}) {
  const {
    domRef,
    isEnabled = true,
    overflowCheck = "vertical",
    visibility = "auto",
    offset = 0,
    onVisibilityChange,
    updateDeps = []
  } = props;
  const visibleRef = reactExports.useRef(visibility);
  reactExports.useEffect(() => {
    const el = domRef == null ? void 0 : domRef.current;
    if (!el || !isEnabled) return;
    const setAttributes = (direction, hasBefore, hasAfter, prefix, suffix) => {
      if (visibility === "auto") {
        const both = `${prefix}${capitalize(suffix)}Scroll`;
        if (hasBefore && hasAfter) {
          el.dataset[both] = "true";
          el.removeAttribute(`data-${prefix}-scroll`);
          el.removeAttribute(`data-${suffix}-scroll`);
        } else {
          el.dataset[`${prefix}Scroll`] = hasBefore.toString();
          el.dataset[`${suffix}Scroll`] = hasAfter.toString();
          el.removeAttribute(`data-${prefix}-${suffix}-scroll`);
        }
      } else {
        const next = hasBefore && hasAfter ? "both" : hasBefore ? prefix : hasAfter ? suffix : "none";
        if (next !== visibleRef.current) {
          onVisibilityChange == null ? void 0 : onVisibilityChange(next);
          visibleRef.current = next;
        }
      }
    };
    const checkOverflow = () => {
      var _a, _b;
      const directions = [
        { type: "vertical", prefix: "top", suffix: "bottom" },
        { type: "horizontal", prefix: "left", suffix: "right" }
      ];
      const listbox = el.querySelector('ul[data-slot="list"]');
      const scrollHeight = +((_a = listbox == null ? void 0 : listbox.getAttribute("data-virtual-scroll-height")) != null ? _a : el.scrollHeight);
      const scrollTop = +((_b = listbox == null ? void 0 : listbox.getAttribute("data-virtual-scroll-top")) != null ? _b : el.scrollTop);
      for (const { type, prefix, suffix } of directions) {
        if (overflowCheck === type || overflowCheck === "both") {
          const hasBefore = type === "vertical" ? scrollTop > offset : el.scrollLeft > offset;
          const hasAfter = type === "vertical" ? scrollTop + el.clientHeight + offset < scrollHeight : el.scrollLeft + el.clientWidth + offset < el.scrollWidth;
          setAttributes(type, hasBefore, hasAfter, prefix, suffix);
        }
      }
    };
    const clearOverflow = () => {
      ["top", "bottom", "top-bottom", "left", "right", "left-right"].forEach((attr) => {
        el.removeAttribute(`data-${attr}-scroll`);
      });
    };
    checkOverflow();
    el.addEventListener("scroll", checkOverflow, true);
    if (visibility !== "auto") {
      clearOverflow();
      if (visibility === "both") {
        el.dataset.topBottomScroll = String(overflowCheck === "vertical");
        el.dataset.leftRightScroll = String(overflowCheck === "horizontal");
      } else {
        el.dataset.topBottomScroll = "false";
        el.dataset.leftRightScroll = "false";
        ["top", "bottom", "left", "right"].forEach((attr) => {
          el.dataset[`${attr}Scroll`] = String(visibility === attr);
        });
      }
    }
    return () => {
      el.removeEventListener("scroll", checkOverflow, true);
      clearOverflow();
    };
  }, [...updateDeps, isEnabled, visibility, overflowCheck, onVisibilityChange, domRef]);
}
function useScrollShadow$1(originalProps) {
  var _a;
  const [props, variantProps] = mapPropsVariants(originalProps, scrollShadow.variantKeys);
  const {
    ref,
    as,
    children,
    className,
    style,
    size = 40,
    offset = 0,
    visibility = "auto",
    isEnabled = true,
    onVisibilityChange,
    ...otherProps
  } = props;
  const Component = as || "div";
  const domRef = useDOMRef(ref);
  useDataScrollOverflow$1({
    domRef,
    offset,
    visibility,
    isEnabled,
    onVisibilityChange,
    updateDeps: [children],
    overflowCheck: (_a = originalProps.orientation) != null ? _a : "vertical"
  });
  const styles = reactExports.useMemo(
    () => scrollShadow({
      ...variantProps,
      className
    }),
    [objectToDeps(variantProps), className]
  );
  const getBaseProps = (props2 = {}) => {
    var _a2;
    return {
      ref: domRef,
      className: styles,
      "data-orientation": (_a2 = originalProps.orientation) != null ? _a2 : "vertical",
      style: {
        "--scroll-shadow-size": `${size}px`,
        ...style,
        ...props2.style
      },
      ...otherProps,
      ...props2
    };
  };
  return { Component, styles, domRef, children, getBaseProps };
}
var ScrollShadow = forwardRef((props, ref) => {
  const { Component, children, getBaseProps } = useScrollShadow$1({ ...props, ref });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ...getBaseProps(), children });
});
ScrollShadow.displayName = "HeroUI.ScrollShadow";
var scroll_shadow_default = ScrollShadow;
class $a02d57049d202695$export$d085fb9e920b5ca7 {
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
    var _node_prevKey;
    return node ? (_node_prevKey = node.prevKey) !== null && _node_prevKey !== void 0 ? _node_prevKey : null : null;
  }
  getKeyAfter(key) {
    let node = this.keyMap.get(key);
    var _node_nextKey;
    return node ? (_node_nextKey = node.nextKey) !== null && _node_nextKey !== void 0 ? _node_nextKey : null : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(key) {
    var _this_keyMap_get;
    return (_this_keyMap_get = this.keyMap.get(key)) !== null && _this_keyMap_get !== void 0 ? _this_keyMap_get : null;
  }
  at(idx) {
    const keys = [
      ...this.getKeys()
    ];
    return this.getItem(keys[idx]);
  }
  getChildren(key) {
    let node = this.keyMap.get(key);
    return (node === null || node === void 0 ? void 0 : node.childNodes) || [];
  }
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
    var _last_key;
    this.lastKey = (_last_key = last === null || last === void 0 ? void 0 : last.key) !== null && _last_key !== void 0 ? _last_key : null;
  }
}
function $e72dd72e1c76a225$export$2f645645f7bca764(props) {
  let { filter, layoutDelegate } = props;
  let selectionState = $60f19cefd567a3e4$export$253fe78d46329472(props);
  let disabledKeys = reactExports.useMemo(() => props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set(), [
    props.disabledKeys
  ]);
  let factory = reactExports.useCallback((nodes) => filter ? new $a02d57049d202695$export$d085fb9e920b5ca7(filter(nodes)) : new $a02d57049d202695$export$d085fb9e920b5ca7(nodes), [
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
  $e72dd72e1c76a225$var$useFocusedKeyReset(collection, selectionManager);
  return {
    collection,
    disabledKeys,
    selectionManager
  };
}
function $e72dd72e1c76a225$var$useFocusedKeyReset(collection, selectionManager) {
  const cachedCollection = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (selectionManager.focusedKey != null && !collection.getItem(selectionManager.focusedKey) && cachedCollection.current) {
      const startItem = cachedCollection.current.getItem(selectionManager.focusedKey);
      const cachedItemNodes = [
        ...cachedCollection.current.getKeys()
      ].map((key) => {
        const itemNode = cachedCollection.current.getItem(key);
        return (itemNode === null || itemNode === void 0 ? void 0 : itemNode.type) === "item" ? itemNode : null;
      }).filter((node) => node !== null);
      const itemNodes = [
        ...collection.getKeys()
      ].map((key) => {
        const itemNode = collection.getItem(key);
        return (itemNode === null || itemNode === void 0 ? void 0 : itemNode.type) === "item" ? itemNode : null;
      }).filter((node) => node !== null);
      var _cachedItemNodes_length, _itemNodes_length;
      const diff = ((_cachedItemNodes_length = cachedItemNodes === null || cachedItemNodes === void 0 ? void 0 : cachedItemNodes.length) !== null && _cachedItemNodes_length !== void 0 ? _cachedItemNodes_length : 0) - ((_itemNodes_length = itemNodes === null || itemNodes === void 0 ? void 0 : itemNodes.length) !== null && _itemNodes_length !== void 0 ? _itemNodes_length : 0);
      var _startItem_index, _startItem_index1, _itemNodes_length1;
      let index = Math.min(diff > 1 ? Math.max(((_startItem_index = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index !== void 0 ? _startItem_index : 0) - diff + 1, 0) : (_startItem_index1 = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index1 !== void 0 ? _startItem_index1 : 0, ((_itemNodes_length1 = itemNodes === null || itemNodes === void 0 ? void 0 : itemNodes.length) !== null && _itemNodes_length1 !== void 0 ? _itemNodes_length1 : 0) - 1);
      let newNode = null;
      let isReverseSearching = false;
      while (index >= 0) {
        if (!selectionManager.isDisabled(itemNodes[index].key)) {
          newNode = itemNodes[index];
          break;
        }
        if (index < itemNodes.length - 1 && !isReverseSearching) index++;
        else {
          isReverseSearching = true;
          var _startItem_index2, _startItem_index3;
          if (index > ((_startItem_index2 = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index2 !== void 0 ? _startItem_index2 : 0)) index = (_startItem_index3 = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index3 !== void 0 ? _startItem_index3 : 0;
          index--;
        }
      }
      selectionManager.setFocusedKey(newNode ? newNode.key : null);
    }
    cachedCollection.current = collection;
  }, [
    collection,
    selectionManager
  ]);
}
function useMultiSelectListState(props) {
  const {
    collection,
    disabledKeys,
    selectionManager,
    selectionManager: { setSelectedKeys, selectedKeys, selectionMode }
  } = $e72dd72e1c76a225$export$2f645645f7bca764(props);
  const missingKeys = reactExports.useMemo(() => {
    if (!props.isLoading && selectedKeys.size !== 0) {
      return Array.from(selectedKeys).filter(Boolean).filter((key) => !collection.getItem(key));
    }
    return [];
  }, [selectedKeys, collection]);
  const selectedItems = selectedKeys.size !== 0 ? Array.from(selectedKeys).map((key) => {
    return collection.getItem(key);
  }).filter(Boolean) : null;
  if (missingKeys.length) {
    console.warn(
      `Select: Keys "${missingKeys.join(
        ", "
      )}" passed to "selectedKeys" are not present in the collection.`
    );
  }
  return {
    collection,
    disabledKeys,
    selectionManager,
    selectionMode,
    selectedKeys,
    setSelectedKeys: setSelectedKeys.bind(selectionManager),
    selectedItems
  };
}
function useMultiSelectState({
  validate,
  validationBehavior,
  ...props
}) {
  const [isFocused, setFocused] = reactExports.useState(false);
  const [focusStrategy, setFocusStrategy] = reactExports.useState(null);
  const triggerState = $a28c903ee9ad8dc5$export$79fefeb1c2091ac3(props);
  const listState = useMultiSelectListState({
    ...props,
    onSelectionChange: (keys) => {
      if (props.onSelectionChange != null) {
        if (keys === "all") {
          props.onSelectionChange(new Set(listState.collection.getKeys()));
        } else {
          props.onSelectionChange(keys);
        }
      }
      if (props.selectionMode === "single") {
        triggerState.close();
      }
    }
  });
  const validationState = $e5be200c675c3b3a$export$fc1a364ae1f3ff10({
    ...props,
    validationBehavior,
    validate: (value) => {
      if (!validate) return;
      const keys = Array.from(value);
      return validate(props.selectionMode === "single" ? keys[0] : keys);
    },
    // @ts-ignore
    value: listState.selectedKeys
  });
  const shouldHideContent = listState.collection.size === 0 && props.hideEmptyContent;
  return {
    ...validationState,
    ...listState,
    ...triggerState,
    focusStrategy,
    close() {
      triggerState.close();
    },
    open(focusStrategy2 = null) {
      if (shouldHideContent) return;
      setFocusStrategy(focusStrategy2);
      triggerState.open();
    },
    toggle(focusStrategy2 = null) {
      if (shouldHideContent) return;
      setFocusStrategy(focusStrategy2);
      triggerState.toggle();
    },
    isFocused,
    setFocused
  };
}
function $d191a55c9702f145$export$8467354a121f1b9f(props) {
  let { id, label, "aria-labelledby": ariaLabelledby, "aria-label": ariaLabel, labelElementType = "label" } = props;
  id = $bdb11010cef70236$export$f680877a34711e37(id);
  let labelId = $bdb11010cef70236$export$f680877a34711e37();
  let labelProps = {};
  if (label) {
    ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
    labelProps = {
      id: labelId,
      htmlFor: labelElementType === "label" ? id : void 0
    };
  }
  let fieldProps = $313b98861ee5dd6c$export$d6875122194c7b44({
    id,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby
  });
  return {
    labelProps,
    fieldProps
  };
}
function $2baaea4c71418dea$export$294aa081a6c6f55d(props) {
  let { description, errorMessage, isInvalid, validationState } = props;
  let { labelProps, fieldProps } = $d191a55c9702f145$export$8467354a121f1b9f(props);
  let descriptionId = $bdb11010cef70236$export$b4cc09c592e8fdb8([
    Boolean(description),
    Boolean(errorMessage),
    isInvalid,
    validationState
  ]);
  let errorMessageId = $bdb11010cef70236$export$b4cc09c592e8fdb8([
    Boolean(description),
    Boolean(errorMessage),
    isInvalid,
    validationState
  ]);
  fieldProps = $3ef42575df84b30b$export$9d1611c77c2fe928(fieldProps, {
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
function useMultiSelect(props, state, ref) {
  const { disallowEmptySelection, isDisabled } = props;
  const collator = $325a3faab7a68acd$export$a16aca283550c30d({ usage: "search", sensitivity: "base" });
  const delegate = reactExports.useMemo(
    () => new $2a25aae57d74318e$export$a05409b8bb224a5a(state.collection, state.disabledKeys, null, collator),
    [state.collection, state.disabledKeys, collator]
  );
  const { menuTriggerProps, menuProps } = $168583247155ddda$export$dc9c12ed27dd1b49(
    {
      isDisabled,
      type: "listbox"
    },
    state,
    ref
  );
  const triggerOnKeyDown = (e) => {
    if (state.selectionMode === "single") {
      switch (e.key) {
        case "ArrowLeft": {
          e.preventDefault();
          const key = state.selectedKeys.size > 0 ? delegate.getKeyAbove(state.selectedKeys.values().next().value) : delegate.getFirstKey();
          if (key) {
            state.setSelectedKeys([key]);
          }
          break;
        }
        case "ArrowRight": {
          e.preventDefault();
          const key = state.selectedKeys.size > 0 ? delegate.getKeyBelow(state.selectedKeys.values().next().value) : delegate.getFirstKey();
          if (key) {
            state.setSelectedKeys([key]);
          }
          break;
        }
      }
    }
  };
  const { typeSelectProps } = $fb3050f43d946246$export$e32c88dfddc6e1d8({
    keyboardDelegate: delegate,
    selectionManager: state.selectionManager,
    onTypeSelect(key) {
      state.setSelectedKeys([key]);
    }
  });
  const { isInvalid, validationErrors, validationDetails } = state.displayValidation;
  const { labelProps, fieldProps, descriptionProps, errorMessageProps } = $2baaea4c71418dea$export$294aa081a6c6f55d({
    ...props,
    labelElementType: "span",
    isInvalid,
    errorMessage: props.errorMessage || validationErrors
  });
  typeSelectProps.onKeyDown = typeSelectProps.onKeyDownCapture;
  delete typeSelectProps.onKeyDownCapture;
  menuTriggerProps.onPressStart = (e) => {
    if (e.pointerType !== "touch" && e.pointerType !== "keyboard" && !isDisabled) {
      state.toggle(e.pointerType === "virtual" ? "first" : null);
    }
  };
  const domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, { labelable: true });
  const triggerProps = $3ef42575df84b30b$export$9d1611c77c2fe928(typeSelectProps, menuTriggerProps, fieldProps);
  const valueId = $bdb11010cef70236$export$f680877a34711e37();
  return {
    labelProps: {
      ...labelProps,
      onClick: () => {
        var _a;
        if (!props.isDisabled) {
          (_a = ref.current) == null ? void 0 : _a.focus();
          $507fabe10e71c6fb$export$8397ddfc504fdb9a("keyboard");
        }
      }
    },
    triggerProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, {
      ...triggerProps,
      onKeyDown: $ff5963eb1fccf552$export$e08e3b67e392101e(triggerProps.onKeyDown, triggerOnKeyDown, props.onKeyDown),
      onKeyUp: props.onKeyUp,
      "aria-labelledby": [
        valueId,
        triggerProps["aria-labelledby"],
        triggerProps["aria-label"] && !triggerProps["aria-labelledby"] ? triggerProps.id : null
      ].join(" "),
      onFocus(e) {
        if (state.isFocused) {
          return;
        }
        if (props.onFocus) {
          props.onFocus(e);
        }
        state.setFocused(true);
      },
      onBlur(e) {
        if (state.isOpen) {
          return;
        }
        if (props.onBlur) {
          props.onBlur(e);
        }
        state.setFocused(false);
      }
    }),
    valueProps: {
      id: valueId
    },
    menuProps: {
      ...menuProps,
      disallowEmptySelection,
      autoFocus: state.focusStrategy || true,
      shouldSelectOnPressUp: true,
      shouldFocusOnHover: true,
      onBlur: (e) => {
        if (e.currentTarget.contains(e.relatedTarget)) {
          return;
        }
        if (props.onBlur) {
          props.onBlur(e);
        }
        state.setFocused(false);
      },
      // @ts-ignore
      onFocus: menuProps == null ? void 0 : menuProps.onFocus,
      "aria-labelledby": [
        fieldProps["aria-labelledby"],
        triggerProps["aria-label"] && !fieldProps["aria-labelledby"] ? triggerProps.id : null
      ].filter(Boolean).join(" ")
    },
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
    validationDetails
  };
}
var selectData = /* @__PURE__ */ new WeakMap();
function useSelect(originalProps) {
  var _a, _b, _c, _d, _e, _f;
  const globalContext = useProviderContext();
  const { validationBehavior: formValidationBehavior } = useSlottedContext(FormContext) || {};
  const [props, variantProps] = mapPropsVariants(originalProps, select.variantKeys);
  const disableAnimation = (_b = (_a = originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const {
    ref,
    as,
    label,
    name,
    isLoading,
    selectorIcon,
    isOpen,
    defaultOpen,
    onOpenChange,
    startContent,
    endContent,
    description,
    renderValue,
    onSelectionChange,
    placeholder,
    isVirtualized,
    itemHeight = 36,
    maxListboxHeight = 256,
    children,
    disallowEmptySelection = false,
    selectionMode = "single",
    spinnerRef,
    scrollRef: scrollRefProp,
    popoverProps = {},
    scrollShadowProps = {},
    listboxProps = {},
    spinnerProps = {},
    validationState,
    onChange,
    onClose,
    className,
    classNames,
    validationBehavior = (_c = formValidationBehavior != null ? formValidationBehavior : globalContext == null ? void 0 : globalContext.validationBehavior) != null ? _c : "native",
    hideEmptyContent = false,
    onClear,
    ...otherProps
  } = props;
  const scrollShadowRef = useDOMRef(scrollRefProp);
  const slotsProps = {
    popoverProps: mergeProps(
      {
        placement: "bottom",
        triggerScaleOnOpen: false,
        offset: 5,
        disableAnimation
      },
      popoverProps
    ),
    scrollShadowProps: mergeProps(
      {
        ref: scrollShadowRef,
        isEnabled: (_d = originalProps.showScrollIndicators) != null ? _d : true,
        hideScrollBar: true,
        offset: 15
      },
      scrollShadowProps
    ),
    listboxProps: mergeProps(
      {
        disableAnimation
      },
      listboxProps
    )
  };
  const Component = as || "button";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const triggerRef = reactExports.useRef(null);
  const listBoxRef = reactExports.useRef(null);
  const popoverRef = reactExports.useRef(null);
  let state = useMultiSelectState({
    ...props,
    isOpen,
    selectionMode,
    disallowEmptySelection,
    validationBehavior,
    children,
    isRequired: originalProps.isRequired,
    isDisabled: originalProps.isDisabled,
    isInvalid: originalProps.isInvalid,
    defaultOpen,
    hideEmptyContent,
    onOpenChange: (open) => {
      onOpenChange == null ? void 0 : onOpenChange(open);
      if (!open) {
        onClose == null ? void 0 : onClose();
      }
    },
    onSelectionChange: (keys) => {
      onSelectionChange == null ? void 0 : onSelectionChange(keys);
      if (onChange && typeof onChange === "function") {
        onChange({
          target: {
            ...domRef.current && {
              ...domRef.current,
              name: domRef.current.name
            },
            value: Array.from(keys).join(",")
          }
        });
      }
      state.commitValidation();
    }
  });
  state = {
    ...state,
    ...originalProps.isDisabled && {
      disabledKeys: /* @__PURE__ */ new Set([...state.collection.getKeys()])
    }
  };
  useSafeLayoutEffect(() => {
    var _a2;
    if (!((_a2 = domRef.current) == null ? void 0 : _a2.value)) return;
    state.setSelectedKeys(/* @__PURE__ */ new Set([...state.selectedKeys, domRef.current.value]));
  }, [domRef.current]);
  const {
    labelProps,
    triggerProps,
    valueProps,
    menuProps,
    descriptionProps,
    errorMessageProps,
    isInvalid: isAriaInvalid,
    validationErrors,
    validationDetails
  } = useMultiSelect(
    { ...props, disallowEmptySelection, isDisabled: originalProps.isDisabled },
    state,
    triggerRef
  );
  const handleClear = reactExports.useCallback(() => {
    var _a2;
    state.setSelectedKeys(/* @__PURE__ */ new Set([]));
    onClear == null ? void 0 : onClear();
    (_a2 = triggerRef.current) == null ? void 0 : _a2.focus();
  }, [onClear, state]);
  const { pressProps: clearPressProps } = $f6c31cce2adf654f$export$45712eceda6fad21({
    isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled),
    onPress: handleClear
  });
  const isInvalid = originalProps.isInvalid || validationState === "invalid" || isAriaInvalid;
  const { isPressed, buttonProps } = useAriaButton(triggerProps, triggerRef);
  const { focusProps, isFocused, isFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const { focusProps: clearFocusProps, isFocusVisible: isClearButtonFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: originalProps.isDisabled });
  const labelPlacement = useLabelPlacement({
    labelPlacement: originalProps.labelPlacement,
    label
  });
  const hasPlaceholder = !!placeholder;
  const shouldLabelBeOutside = labelPlacement === "outside-left" || labelPlacement === "outside" || labelPlacement === "outside-top";
  const shouldLabelBeInside = labelPlacement === "inside";
  const isOutsideLeft = labelPlacement === "outside-left";
  const isClearable = originalProps.isClearable;
  const isFilled = state.isOpen || hasPlaceholder || !!((_e = state.selectedItems) == null ? void 0 : _e.length) || !!startContent || !!endContent || !!originalProps.isMultiline;
  const hasValue = !!((_f = state.selectedItems) == null ? void 0 : _f.length);
  const hasLabel = !!label;
  const hasLabelOutside = hasLabel && (isOutsideLeft || shouldLabelBeOutside && hasPlaceholder);
  const baseStyles = cn(classNames == null ? void 0 : classNames.base, className);
  const slots = reactExports.useMemo(
    () => select({
      ...variantProps,
      isInvalid,
      isClearable,
      labelPlacement,
      disableAnimation
    }),
    [objectToDeps(variantProps), isInvalid, labelPlacement, disableAnimation]
  );
  $49c51c25361d4cd2$export$ee0f7cc6afcd1c18({
    isDisabled: !state.isOpen
  });
  const errorMessage = typeof props.errorMessage === "function" ? props.errorMessage({ isInvalid, validationErrors, validationDetails }) : props.errorMessage || (validationErrors == null ? void 0 : validationErrors.join(" "));
  const hasHelper = !!description || !!errorMessage;
  const hasEndContent = !!endContent;
  reactExports.useEffect(() => {
    if (state.isOpen && popoverRef.current && triggerRef.current) {
      let selectRect = triggerRef.current.getBoundingClientRect();
      let popover2 = popoverRef.current;
      popover2.style.width = selectRect.width + "px";
    }
  }, [state.isOpen]);
  reactExports.useEffect(() => {
    if (state.isOpen && popoverRef.current && listBoxRef.current) {
      let selectedItem = listBoxRef.current.querySelector("[aria-selected=true] [data-label=true]");
      let scrollShadow2 = scrollShadowRef.current;
      if (selectedItem && scrollShadow2 && selectedItem.parentElement) {
        let scrollShadowRect = scrollShadow2.getBoundingClientRect();
        let scrollShadowHeight = scrollShadowRect.height;
        scrollShadow2.scrollTop = selectedItem.parentElement.offsetTop - scrollShadowHeight / 2 + selectedItem.parentElement.clientHeight / 2;
      }
    }
  }, [state.isOpen, disableAnimation]);
  const getBaseProps = reactExports.useCallback(
    (props2 = {}) => ({
      "data-slot": "base",
      "data-filled": dataAttr(isFilled),
      "data-has-value": dataAttr(hasValue),
      "data-has-label": dataAttr(hasLabel),
      "data-has-helper": dataAttr(hasHelper),
      "data-has-end-content": dataAttr(hasEndContent),
      "data-invalid": dataAttr(isInvalid),
      "data-has-label-outside": dataAttr(hasLabelOutside),
      className: slots.base({
        class: cn(baseStyles, props2.className)
      }),
      ...props2
    }),
    [slots, hasHelper, hasValue, hasLabel, hasLabelOutside, isFilled, baseStyles]
  );
  const getTriggerProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        ref: triggerRef,
        "data-slot": "trigger",
        "data-open": dataAttr(state.isOpen),
        "data-disabled": dataAttr(originalProps == null ? void 0 : originalProps.isDisabled),
        "data-focus": dataAttr(isFocused),
        "data-pressed": dataAttr(isPressed),
        "data-focus-visible": dataAttr(isFocusVisible),
        "data-hover": dataAttr(isHovered),
        className: slots.trigger({ class: classNames == null ? void 0 : classNames.trigger }),
        ...mergeProps(
          buttonProps,
          focusProps,
          hoverProps,
          filterDOMProps(otherProps, {
            enabled: shouldFilterDOMProps
          }),
          filterDOMProps(props2)
        )
      };
    },
    [
      slots,
      triggerRef,
      state.isOpen,
      classNames == null ? void 0 : classNames.trigger,
      originalProps == null ? void 0 : originalProps.isDisabled,
      isFocused,
      isPressed,
      isFocusVisible,
      isHovered,
      buttonProps,
      focusProps,
      hoverProps,
      otherProps,
      shouldFilterDOMProps
    ]
  );
  const getHiddenSelectProps = reactExports.useCallback(
    (props2 = {}) => ({
      state,
      triggerRef,
      selectRef: domRef,
      selectionMode,
      label: originalProps == null ? void 0 : originalProps.label,
      name: originalProps == null ? void 0 : originalProps.name,
      isRequired: originalProps == null ? void 0 : originalProps.isRequired,
      autoComplete: originalProps == null ? void 0 : originalProps.autoComplete,
      isDisabled: originalProps == null ? void 0 : originalProps.isDisabled,
      form: originalProps == null ? void 0 : originalProps.form,
      onChange,
      ...props2
    }),
    [
      state,
      selectionMode,
      originalProps == null ? void 0 : originalProps.label,
      originalProps == null ? void 0 : originalProps.autoComplete,
      originalProps == null ? void 0 : originalProps.name,
      originalProps == null ? void 0 : originalProps.isDisabled,
      triggerRef
    ]
  );
  const getLabelProps = reactExports.useCallback(
    (props2 = {}) => ({
      "data-slot": "label",
      className: slots.label({
        class: cn(classNames == null ? void 0 : classNames.label, props2.className)
      }),
      ...labelProps,
      ...props2
    }),
    [slots, classNames == null ? void 0 : classNames.label, labelProps]
  );
  const getValueProps = reactExports.useCallback(
    (props2 = {}) => ({
      "data-slot": "value",
      className: slots.value({
        class: cn(classNames == null ? void 0 : classNames.value, props2.className)
      }),
      ...valueProps,
      ...props2
    }),
    [slots, classNames == null ? void 0 : classNames.value, valueProps]
  );
  const getListboxWrapperProps = reactExports.useCallback(
    (props2 = {}) => ({
      "data-slot": "listboxWrapper",
      className: slots.listboxWrapper({
        class: cn(classNames == null ? void 0 : classNames.listboxWrapper, props2 == null ? void 0 : props2.className)
      }),
      style: {
        maxHeight: maxListboxHeight != null ? maxListboxHeight : 256,
        ...props2.style
      },
      ...mergeProps(slotsProps.scrollShadowProps, props2)
    }),
    [
      slots.listboxWrapper,
      classNames == null ? void 0 : classNames.listboxWrapper,
      slotsProps.scrollShadowProps,
      maxListboxHeight
    ]
  );
  const getListboxProps = (props2 = {}) => {
    const shouldVirtualize = isVirtualized != null ? isVirtualized : state.collection.size > 50;
    return {
      state,
      ref: listBoxRef,
      isVirtualized: shouldVirtualize,
      virtualization: shouldVirtualize ? {
        maxListboxHeight,
        itemHeight
      } : void 0,
      "data-slot": "listbox",
      className: slots.listbox({
        class: cn(classNames == null ? void 0 : classNames.listbox, props2 == null ? void 0 : props2.className)
      }),
      scrollShadowProps: slotsProps.scrollShadowProps,
      ...mergeProps(slotsProps.listboxProps, props2, menuProps)
    };
  };
  const getPopoverProps = reactExports.useCallback(
    (props2 = {}) => {
      var _a2, _b2;
      const popoverProps2 = mergeProps(slotsProps.popoverProps, props2);
      return {
        state,
        triggerRef,
        ref: popoverRef,
        "data-slot": "popover",
        scrollRef: listBoxRef,
        triggerType: "listbox",
        classNames: {
          content: slots.popoverContent({
            class: cn(classNames == null ? void 0 : classNames.popoverContent, props2.className)
          })
        },
        ...popoverProps2,
        offset: state.selectedItems && state.selectedItems.length > 0 ? (
          // forces the popover to update its position when the selected items change
          state.selectedItems.length * 1e-8 + (((_a2 = slotsProps.popoverProps) == null ? void 0 : _a2.offset) || 0)
        ) : (_b2 = slotsProps.popoverProps) == null ? void 0 : _b2.offset
      };
    },
    [
      slots,
      classNames == null ? void 0 : classNames.popoverContent,
      slotsProps.popoverProps,
      triggerRef,
      state,
      state.selectedItems
    ]
  );
  const getSelectorIconProps = reactExports.useCallback(
    () => ({
      "data-slot": "selectorIcon",
      "aria-hidden": dataAttr(true),
      "data-open": dataAttr(state.isOpen),
      className: slots.selectorIcon({ class: classNames == null ? void 0 : classNames.selectorIcon })
    }),
    [slots, classNames == null ? void 0 : classNames.selectorIcon, state.isOpen]
  );
  const getInnerWrapperProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        ...props2,
        "data-slot": "innerWrapper",
        className: slots.innerWrapper({
          class: cn(classNames == null ? void 0 : classNames.innerWrapper, props2 == null ? void 0 : props2.className)
        })
      };
    },
    [slots, classNames == null ? void 0 : classNames.innerWrapper]
  );
  const getHelperWrapperProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        ...props2,
        "data-slot": "helperWrapper",
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
  const getMainWrapperProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        ...props2,
        "data-slot": "mainWrapper",
        className: slots.mainWrapper({
          class: cn(classNames == null ? void 0 : classNames.mainWrapper, props2 == null ? void 0 : props2.className)
        })
      };
    },
    [slots, classNames == null ? void 0 : classNames.mainWrapper]
  );
  const getEndWrapperProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        ...props2,
        "data-slot": "end-wrapper",
        className: slots.endWrapper({
          class: cn(classNames == null ? void 0 : classNames.endWrapper, props2 == null ? void 0 : props2.className)
        })
      };
    },
    [slots, classNames == null ? void 0 : classNames.endWrapper]
  );
  const getEndContentProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        ...props2,
        "data-slot": "end-content",
        className: slots.endContent({
          class: cn(classNames == null ? void 0 : classNames.endContent, props2 == null ? void 0 : props2.className)
        })
      };
    },
    [slots, classNames == null ? void 0 : classNames.endContent]
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
  const getSpinnerProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        "aria-hidden": dataAttr(true),
        "data-slot": "spinner",
        color: "current",
        size: "sm",
        ...spinnerProps,
        ...props2,
        ref: spinnerRef,
        className: slots.spinner({ class: cn(classNames == null ? void 0 : classNames.spinner, props2 == null ? void 0 : props2.className) })
      };
    },
    [slots, spinnerRef, spinnerProps, classNames == null ? void 0 : classNames.spinner]
  );
  const getClearButtonProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        ...props2,
        type: "button",
        tabIndex: -1,
        "aria-label": "clear selection",
        "data-slot": "clear-button",
        "data-focus-visible": dataAttr(isClearButtonFocusVisible),
        className: slots.clearButton({ class: cn(classNames == null ? void 0 : classNames.clearButton, props2 == null ? void 0 : props2.className) }),
        ...mergeProps(clearPressProps, clearFocusProps)
      };
    },
    [slots, isClearButtonFocusVisible, clearPressProps, clearFocusProps, classNames == null ? void 0 : classNames.clearButton]
  );
  selectData.set(state, {
    isDisabled: originalProps == null ? void 0 : originalProps.isDisabled,
    isRequired: originalProps == null ? void 0 : originalProps.isRequired,
    name: originalProps == null ? void 0 : originalProps.name,
    isInvalid,
    validationBehavior
  });
  return {
    Component,
    domRef,
    state,
    label,
    name,
    triggerRef,
    isLoading,
    placeholder,
    startContent,
    endContent,
    description,
    selectorIcon,
    hasHelper,
    labelPlacement,
    hasPlaceholder,
    renderValue,
    selectionMode,
    disableAnimation,
    isOutsideLeft,
    shouldLabelBeOutside,
    shouldLabelBeInside,
    isInvalid,
    errorMessage,
    isClearable,
    getClearButtonProps,
    getBaseProps,
    getTriggerProps,
    getLabelProps,
    getValueProps,
    getListboxProps,
    getPopoverProps,
    getSpinnerProps,
    getMainWrapperProps,
    getListboxWrapperProps,
    getHiddenSelectProps,
    getInnerWrapperProps,
    getHelperWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getSelectorIconProps,
    getEndWrapperProps,
    getEndContentProps
  };
}
var useLayoutEffect = typeof document !== "undefined" ? $4d1jn$react.useLayoutEffect : () => {
};
function useEffectEvent(fn) {
  const ref = reactExports.useRef(null);
  useLayoutEffect(() => {
    ref.current = fn;
  }, [fn]);
  return reactExports.useCallback((...args) => {
    const f = ref.current;
    return f == null ? void 0 : f(...args);
  }, []);
}
function useFormReset(ref, initialValue, onReset) {
  let resetValue = reactExports.useRef(initialValue);
  let handleReset = useEffectEvent(() => {
    if (onReset) {
      onReset(resetValue.current);
    }
  });
  reactExports.useEffect(() => {
    var _a;
    let form2 = (_a = ref == null ? void 0 : ref.current) == null ? void 0 : _a.form;
    form2 == null ? void 0 : form2.addEventListener("reset", handleReset);
    return () => {
      form2 == null ? void 0 : form2.removeEventListener("reset", handleReset);
    };
  }, [ref, handleReset]);
}
function $e93e671b31057976$export$b8473d3665f3a75a(props, state, ref) {
  let { validationBehavior, focus } = props;
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    if (validationBehavior === "native" && (ref === null || ref === void 0 ? void 0 : ref.current) && !ref.current.disabled) {
      let errorMessage = state.realtimeValidation.isInvalid ? state.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      ref.current.setCustomValidity(errorMessage);
      if (!ref.current.hasAttribute("title")) ref.current.title = "";
      if (!state.realtimeValidation.isInvalid) state.updateValidation($e93e671b31057976$var$getNativeValidity(ref.current));
    }
  });
  let isIgnoredReset = reactExports.useRef(false);
  let onReset = $fe16bffc7a557bf0$export$7f54fc3180508a52(() => {
    if (!isIgnoredReset.current) state.resetValidation();
  });
  let onInvalid = $fe16bffc7a557bf0$export$7f54fc3180508a52((e) => {
    var _ref_current;
    if (!state.displayValidation.isInvalid) state.commitValidation();
    let form2 = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
    if (!e.defaultPrevented && ref && form2 && $e93e671b31057976$var$getFirstInvalidInput(form2) === ref.current) {
      var _ref_current1;
      if (focus) focus();
      else (_ref_current1 = ref.current) === null || _ref_current1 === void 0 ? void 0 : _ref_current1.focus();
      $8f5a2122b0992be3$export$8397ddfc504fdb9a("keyboard");
    }
    e.preventDefault();
  });
  let onChange = $fe16bffc7a557bf0$export$7f54fc3180508a52(() => {
    state.commitValidation();
  });
  reactExports.useEffect(() => {
    let input = ref === null || ref === void 0 ? void 0 : ref.current;
    if (!input) return;
    let form2 = input.form;
    let reset = form2 === null || form2 === void 0 ? void 0 : form2.reset;
    if (form2)
      form2.reset = () => {
        isIgnoredReset.current = !window.event || window.event.type === "message" && $23f2114a1b82827e$export$e58f029f0fbfdb29(window.event) instanceof MessagePort;
        reset === null || reset === void 0 ? void 0 : reset.call(form2);
        isIgnoredReset.current = false;
      };
    input.addEventListener("invalid", onInvalid);
    input.addEventListener("change", onChange);
    form2 === null || form2 === void 0 ? void 0 : form2.addEventListener("reset", onReset);
    return () => {
      input.removeEventListener("invalid", onInvalid);
      input.removeEventListener("change", onChange);
      form2 === null || form2 === void 0 ? void 0 : form2.removeEventListener("reset", onReset);
      if (form2)
        form2.reset = reset;
    };
  }, [
    ref,
    validationBehavior
  ]);
}
function $e93e671b31057976$var$getValidity(input) {
  let validity = input.validity;
  return {
    badInput: validity.badInput,
    customError: validity.customError,
    patternMismatch: validity.patternMismatch,
    rangeOverflow: validity.rangeOverflow,
    rangeUnderflow: validity.rangeUnderflow,
    stepMismatch: validity.stepMismatch,
    tooLong: validity.tooLong,
    tooShort: validity.tooShort,
    typeMismatch: validity.typeMismatch,
    valueMissing: validity.valueMissing,
    valid: validity.valid
  };
}
function $e93e671b31057976$var$getNativeValidity(input) {
  return {
    isInvalid: !input.validity.valid,
    validationDetails: $e93e671b31057976$var$getValidity(input),
    validationErrors: input.validationMessage ? [
      input.validationMessage
    ] : []
  };
}
function $e93e671b31057976$var$getFirstInvalidInput(form2) {
  for (let i = 0; i < form2.elements.length; i++) {
    var _element_validity;
    let element = form2.elements[i];
    if (((_element_validity = element.validity) === null || _element_validity === void 0 ? void 0 : _element_validity.valid) === false) return element;
  }
  return null;
}
function useHiddenSelect(props, state, triggerRef) {
  var _a;
  let data = selectData.get(state) || {};
  let {
    autoComplete,
    name = data.name,
    isDisabled = data.isDisabled,
    selectionMode,
    onChange,
    form: form2
  } = props;
  let { validationBehavior, isRequired, isInvalid } = data;
  let { visuallyHiddenProps } = $5c3e21d68f1c4674$export$a966af930f325cab();
  useFormReset(props.selectRef, state.selectedKeys, state.setSelectedKeys);
  $e93e671b31057976$export$b8473d3665f3a75a(
    {
      validationBehavior,
      focus: () => {
        var _a2;
        return (_a2 = triggerRef.current) == null ? void 0 : _a2.focus();
      }
    },
    state,
    props.selectRef
  );
  return {
    containerProps: {
      ...visuallyHiddenProps,
      "aria-hidden": true,
      ["data-a11y-ignore"]: "aria-hidden-focus"
    },
    inputProps: {
      style: { display: "none" }
    },
    selectProps: {
      form: form2,
      autoComplete,
      disabled: isDisabled,
      "aria-invalid": isInvalid || void 0,
      "aria-required": isRequired && validationBehavior === "aria" || void 0,
      required: isRequired && validationBehavior === "native",
      name,
      tabIndex: -1,
      value: selectionMode === "multiple" ? [...state.selectedKeys].map((k) => String(k)) : (_a = [...state.selectedKeys][0]) != null ? _a : "",
      multiple: selectionMode === "multiple",
      onChange: (e) => {
        state.setSelectedKeys(e.target.value);
        onChange == null ? void 0 : onChange(e);
      }
    }
  };
}
function HiddenSelect(props) {
  var _a;
  let { state, triggerRef, selectRef, label, name, isDisabled, form: form2 } = props;
  let { containerProps, selectProps } = useHiddenSelect({ ...props, selectRef }, state, triggerRef);
  if (state.collection.size <= 300) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...containerProps, "data-testid": "hidden-select-container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
      label,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { ...selectProps, ref: selectRef, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", {}),
        [...state.collection.getKeys()].map((key) => {
          let item = state.collection.getItem(key);
          if ((item == null ? void 0 : item.type) === "item") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item.key, children: item.textValue }, item.key);
          }
        })
      ] })
    ] }) });
  } else if (name) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        autoComplete: selectProps.autoComplete,
        disabled: isDisabled,
        form: form2,
        name,
        type: "hidden",
        value: (_a = [...state.selectedKeys].join(",")) != null ? _a : ""
      }
    );
  }
  return null;
}
var ListboxItemBase = $c1d7fb2ec91bae71$export$6d08773d2e66f8f2;
var listbox_item_base_default = ListboxItemBase;
const $b1f0cad8af73213b$export$3585ede4d035bf14 = /* @__PURE__ */ new WeakMap();
function $b1f0cad8af73213b$var$normalizeKey(key) {
  if (typeof key === "string") return key.replace(/\s*/g, "");
  return "" + key;
}
function $b1f0cad8af73213b$export$9145995848b05025(state, itemKey) {
  let data = $b1f0cad8af73213b$export$3585ede4d035bf14.get(state);
  if (!data) throw new Error("Unknown list");
  return `${data.id}-option-${$b1f0cad8af73213b$var$normalizeKey(itemKey)}`;
}
function $c132121280ec012d$export$50eacbbf140a3141(props, state, ref) {
  let domProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, {
    labelable: true
  });
  let selectionBehavior = props.selectionBehavior || "toggle";
  let linkBehavior = props.linkBehavior || (selectionBehavior === "replace" ? "action" : "override");
  if (selectionBehavior === "toggle" && linkBehavior === "action")
    linkBehavior = "override";
  let { listProps } = $64903b4b31b6bb2a$export$b95089534ab7c1fd({
    ...props,
    ref,
    selectionManager: state.selectionManager,
    collection: state.collection,
    disabledKeys: state.disabledKeys,
    linkBehavior
  });
  let { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
    onFocusWithin: props.onFocus,
    onBlurWithin: props.onBlur,
    onFocusWithinChange: props.onFocusChange
  });
  let id = $390e54f620492c70$export$f680877a34711e37(props.id);
  $b1f0cad8af73213b$export$3585ede4d035bf14.set(state, {
    id,
    shouldUseVirtualFocus: props.shouldUseVirtualFocus,
    shouldSelectOnPressUp: props.shouldSelectOnPressUp,
    shouldFocusOnHover: props.shouldFocusOnHover,
    isVirtualized: props.isVirtualized,
    onAction: props.onAction,
    linkBehavior,
    // @ts-ignore
    UNSTABLE_itemBehavior: props["UNSTABLE_itemBehavior"]
  });
  let { labelProps, fieldProps } = $0beb20c9744a2065$export$8467354a121f1b9f({
    ...props,
    id,
    // listbox is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span"
  });
  return {
    labelProps,
    listBoxProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(domProps, focusWithinProps, state.selectionManager.selectionMode === "multiple" ? {
      "aria-multiselectable": "true"
    } : {}, {
      role: "listbox",
      ...$bbaa08b3cd72f041$export$9d1611c77c2fe928(fieldProps, listProps)
    })
  };
}
function $293f70390ea03370$export$497855f14858aa34(props, state, ref) {
  var _item_props, _item_props1;
  let { key } = props;
  let data = $b1f0cad8af73213b$export$3585ede4d035bf14.get(state);
  var _props_isDisabled;
  let isDisabled = (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : state.selectionManager.isDisabled(key);
  var _props_isSelected;
  let isSelected = (_props_isSelected = props.isSelected) !== null && _props_isSelected !== void 0 ? _props_isSelected : state.selectionManager.isSelected(key);
  var _props_shouldSelectOnPressUp;
  let shouldSelectOnPressUp = (_props_shouldSelectOnPressUp = props.shouldSelectOnPressUp) !== null && _props_shouldSelectOnPressUp !== void 0 ? _props_shouldSelectOnPressUp : data === null || data === void 0 ? void 0 : data.shouldSelectOnPressUp;
  var _props_shouldFocusOnHover;
  let shouldFocusOnHover = (_props_shouldFocusOnHover = props.shouldFocusOnHover) !== null && _props_shouldFocusOnHover !== void 0 ? _props_shouldFocusOnHover : data === null || data === void 0 ? void 0 : data.shouldFocusOnHover;
  var _props_shouldUseVirtualFocus;
  let shouldUseVirtualFocus = (_props_shouldUseVirtualFocus = props.shouldUseVirtualFocus) !== null && _props_shouldUseVirtualFocus !== void 0 ? _props_shouldUseVirtualFocus : data === null || data === void 0 ? void 0 : data.shouldUseVirtualFocus;
  var _props_isVirtualized;
  let isVirtualized = (_props_isVirtualized = props.isVirtualized) !== null && _props_isVirtualized !== void 0 ? _props_isVirtualized : data === null || data === void 0 ? void 0 : data.isVirtualized;
  let labelId = $390e54f620492c70$export$b4cc09c592e8fdb8();
  let descriptionId = $390e54f620492c70$export$b4cc09c592e8fdb8();
  let optionProps = {
    role: "option",
    "aria-disabled": isDisabled || void 0,
    "aria-selected": state.selectionManager.selectionMode !== "none" ? isSelected : void 0
  };
  if (!($2add3ce32c6007eb$export$9ac100e40613ea10() && $2add3ce32c6007eb$export$78551043582a6a98())) {
    optionProps["aria-label"] = props["aria-label"];
    optionProps["aria-labelledby"] = labelId;
    optionProps["aria-describedby"] = descriptionId;
  }
  let item = state.collection.getItem(key);
  if (isVirtualized) {
    let index = Number(item === null || item === void 0 ? void 0 : item.index);
    optionProps["aria-posinset"] = Number.isNaN(index) ? void 0 : index + 1;
    optionProps["aria-setsize"] = $2efe10d3f1f9e31e$export$77d5aafae4e095b2(state.collection);
  }
  let onAction = (data === null || data === void 0 ? void 0 : data.onAction) ? () => {
    var _data_onAction;
    return data === null || data === void 0 ? void 0 : (_data_onAction = data.onAction) === null || _data_onAction === void 0 ? void 0 : _data_onAction.call(data, key);
  } : void 0;
  let id = $b1f0cad8af73213b$export$9145995848b05025(state, key);
  let { itemProps, isPressed, isFocused, hasAction, allowsSelection } = $f6ba6936bfd098a0$export$ecf600387e221c37({
    selectionManager: state.selectionManager,
    key,
    ref,
    shouldSelectOnPressUp,
    allowsDifferentPressOrigin: shouldSelectOnPressUp && shouldFocusOnHover,
    isVirtualized,
    shouldUseVirtualFocus,
    isDisabled,
    onAction: onAction || (item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.onAction) ? $a4e76a5424781910$export$e08e3b67e392101e(item === null || item === void 0 ? void 0 : (_item_props1 = item.props) === null || _item_props1 === void 0 ? void 0 : _item_props1.onAction, onAction) : void 0,
    linkBehavior: data === null || data === void 0 ? void 0 : data.linkBehavior,
    // @ts-ignore
    UNSTABLE_itemBehavior: data === null || data === void 0 ? void 0 : data["UNSTABLE_itemBehavior"],
    id
  });
  let { hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({
    isDisabled: isDisabled || !shouldFocusOnHover,
    onHoverStart() {
      if (!$507fabe10e71c6fb$export$b9b3dfddab17db27()) {
        state.selectionManager.setFocused(true);
        state.selectionManager.setFocusedKey(key);
      }
    }
  });
  let domProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(item === null || item === void 0 ? void 0 : item.props);
  delete domProps.id;
  let linkProps = $caaf0dd3060ed57c$export$7e924b3091a3bd18(item === null || item === void 0 ? void 0 : item.props);
  return {
    optionProps: {
      ...optionProps,
      ...$bbaa08b3cd72f041$export$9d1611c77c2fe928(domProps, itemProps, hoverProps, linkProps),
      id
    },
    labelProps: {
      id: labelId
    },
    descriptionProps: {
      id: descriptionId
    },
    isFocused,
    isFocusVisible: isFocused && state.selectionManager.isFocused && $507fabe10e71c6fb$export$b9b3dfddab17db27(),
    isSelected,
    isDisabled,
    isPressed,
    allowsSelection,
    hasAction
  };
}
function $af383d3bef1cfdc9$export$c3f9f39876e4bc7(props) {
  let { heading, "aria-label": ariaLabel } = props;
  let headingId = $390e54f620492c70$export$f680877a34711e37();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: heading ? {
      // Technically, listbox cannot contain headings according to ARIA.
      // We hide the heading from assistive technology, using role="presentation",
      // and only use it as a visual label for the nested group.
      id: headingId,
      role: "presentation",
      onMouseDown: (e) => {
        e.preventDefault();
      }
    } : {},
    groupProps: {
      role: "group",
      "aria-label": ariaLabel,
      "aria-labelledby": heading ? headingId : void 0
    }
  };
}
function useListbox(props) {
  var _a;
  const globalContext = useProviderContext();
  const {
    ref,
    as,
    state: propState,
    variant,
    color,
    onAction,
    children,
    onSelectionChange,
    disableAnimation = (_a = globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _a : false,
    itemClasses,
    className,
    topContent,
    bottomContent,
    emptyContent = "No items.",
    hideSelectedIcon = false,
    hideEmptyContent = false,
    shouldHighlightOnFocus = false,
    classNames,
    ...otherProps
  } = props;
  const Component = as || "ul";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const innerState = $e72dd72e1c76a225$export$2f645645f7bca764({ ...props, children, onSelectionChange });
  const state = propState || innerState;
  const { listBoxProps } = $c132121280ec012d$export$50eacbbf140a3141({ ...props, onAction }, state, domRef);
  const slots = reactExports.useMemo(() => menu(), []);
  const baseStyles = cn(classNames == null ? void 0 : classNames.base, className);
  const getBaseProps = (props2 = {}) => {
    return {
      ref: domRef,
      "data-slot": "base",
      className: slots.base({ class: baseStyles }),
      ...filterDOMProps(otherProps, {
        enabled: shouldFilterDOMProps
      }),
      ...props2
    };
  };
  const getListProps = (props2 = {}) => {
    return {
      "data-slot": "list",
      className: slots.list({ class: classNames == null ? void 0 : classNames.list }),
      ...listBoxProps,
      ...props2
    };
  };
  const getEmptyContentProps = (props2 = {}) => {
    return {
      "data-slot": "empty-content",
      children: emptyContent,
      className: slots.emptyContent({ class: classNames == null ? void 0 : classNames.emptyContent }),
      ...props2
    };
  };
  return {
    Component,
    state,
    variant,
    color,
    slots,
    classNames,
    topContent,
    bottomContent,
    emptyContent,
    hideEmptyContent,
    shouldHighlightOnFocus,
    hideSelectedIcon,
    disableAnimation,
    className,
    itemClasses,
    getBaseProps,
    getListProps,
    getEmptyContentProps
  };
}
function ListboxSelectedIcon(props) {
  const { isSelected, disableAnimation, ...otherProps } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      "aria-hidden": "true",
      "data-selected": isSelected,
      role: "presentation",
      viewBox: "0 0 17 18",
      ...otherProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "polyline",
        {
          fill: "none",
          points: "1 9 7 14 15 4",
          stroke: "currentColor",
          strokeDasharray: 22,
          strokeDashoffset: isSelected ? 44 : 66,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          style: !disableAnimation ? {
            transition: "stroke-dashoffset 200ms ease"
          } : {}
        }
      )
    }
  );
}
function useListboxItem(originalProps) {
  var _a, _b;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, menuItem.variantKeys);
  const {
    as,
    item,
    state,
    description,
    startContent,
    endContent,
    isVirtualized,
    selectedIcon,
    className,
    classNames,
    autoFocus,
    onPress,
    onPressUp,
    onPressStart,
    onPressEnd,
    onPressChange,
    onClick,
    shouldHighlightOnFocus,
    hideSelectedIcon = false,
    isReadOnly = false,
    ...otherProps
  } = props;
  const disableAnimation = (_b = (_a = originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const domRef = reactExports.useRef(null);
  const Component = as || (originalProps.href ? "a" : "li");
  const shouldFilterDOMProps = typeof Component === "string";
  const { rendered, key } = item;
  const isDisabled = state.disabledKeys.has(key) || originalProps.isDisabled;
  const isSelectable = state.selectionManager.selectionMode !== "none";
  const isMobile = useIsMobile();
  const { pressProps, isPressed } = $f6c31cce2adf654f$export$45712eceda6fad21({
    ref: domRef,
    isDisabled,
    onClick,
    onPress,
    onPressUp,
    onPressStart,
    onPressEnd,
    onPressChange
  });
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({
    isDisabled
  });
  const { isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f({
    autoFocus
  });
  const { isFocused, isSelected, optionProps, labelProps, descriptionProps } = $293f70390ea03370$export$497855f14858aa34(
    {
      key,
      isDisabled,
      "aria-label": props["aria-label"],
      isVirtualized
    },
    state,
    domRef
  );
  let itemProps = optionProps;
  const slots = reactExports.useMemo(
    () => menuItem({
      ...variantProps,
      isDisabled,
      disableAnimation,
      hasTitleTextChild: typeof rendered === "string",
      hasDescriptionTextChild: typeof description === "string"
    }),
    [objectToDeps(variantProps), isDisabled, disableAnimation, rendered, description]
  );
  const baseStyles = cn(classNames == null ? void 0 : classNames.base, className);
  if (isReadOnly) {
    itemProps = removeEvents(itemProps);
  }
  const isHighlighted = shouldHighlightOnFocus && isFocused || (isMobile ? isHovered || isPressed : isHovered || isFocused && !isFocusVisible);
  const handleFocusCapture = (e) => {
    const target = e.target;
    const isBlockBubbled = target.closest("[data-slot='startContent']") || target.closest("[data-slot='endContent']");
    if (isBlockBubbled) {
      e.stopPropagation();
    }
  };
  const getItemProps = (props2 = {}) => ({
    ref: domRef,
    onFocusCapture: handleFocusCapture,
    ...mergeProps(
      itemProps,
      isReadOnly ? {} : mergeProps(focusProps, pressProps),
      hoverProps,
      filterDOMProps(otherProps, {
        enabled: shouldFilterDOMProps
      }),
      props2
    ),
    "data-selectable": dataAttr(isSelectable),
    "data-focus": dataAttr(isFocused),
    "data-hover": dataAttr(isHighlighted),
    "data-disabled": dataAttr(isDisabled),
    "data-selected": dataAttr(isSelected),
    "data-pressed": dataAttr(isPressed),
    "data-focus-visible": dataAttr(isFocusVisible),
    className: slots.base({ class: cn(baseStyles, props2.className) })
  });
  const getLabelProps = (props2 = {}) => ({
    ...mergeProps(labelProps, props2),
    "data-label": dataAttr(true),
    className: slots.title({ class: classNames == null ? void 0 : classNames.title })
  });
  const getDescriptionProps = (props2 = {}) => ({
    ...mergeProps(descriptionProps, props2),
    className: slots.description({ class: classNames == null ? void 0 : classNames.description })
  });
  const getWrapperProps = (props2 = {}) => ({
    ...mergeProps(props2),
    className: slots.wrapper({ class: classNames == null ? void 0 : classNames.wrapper })
  });
  const getSelectedIconProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        "aria-hidden": dataAttr(true),
        "data-disabled": dataAttr(isDisabled),
        className: slots.selectedIcon({ class: classNames == null ? void 0 : classNames.selectedIcon }),
        ...props2
      };
    },
    [isDisabled, slots, classNames]
  );
  return {
    Component,
    domRef,
    slots,
    classNames,
    isSelectable,
    isSelected,
    isDisabled,
    rendered,
    description,
    startContent,
    endContent,
    selectedIcon,
    hideSelectedIcon,
    disableAnimation,
    getItemProps,
    getLabelProps,
    getWrapperProps,
    getDescriptionProps,
    getSelectedIconProps
  };
}
var ListboxItem = (props) => {
  const {
    Component,
    rendered,
    description,
    isSelectable,
    isSelected,
    isDisabled,
    selectedIcon,
    startContent,
    endContent,
    hideSelectedIcon,
    disableAnimation,
    getItemProps,
    getLabelProps,
    getWrapperProps,
    getDescriptionProps,
    getSelectedIconProps
  } = useListboxItem(props);
  const selectedContent = reactExports.useMemo(() => {
    const defaultIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(ListboxSelectedIcon, { disableAnimation, isSelected });
    if (typeof selectedIcon === "function") {
      return selectedIcon({ icon: defaultIcon, isSelected, isDisabled });
    }
    if (selectedIcon) return selectedIcon;
    return defaultIcon;
  }, [selectedIcon, isSelected, isDisabled, disableAnimation]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { ...getItemProps(), children: [
    startContent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-slot": "startContent", children: startContent }),
    description ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getWrapperProps(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getLabelProps(), children: rendered }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getDescriptionProps(), children: description })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getLabelProps(), children: rendered }),
    isSelectable && !hideSelectedIcon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getSelectedIconProps(), children: selectedContent }),
    endContent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-slot": "endContent", children: endContent })
  ] });
};
ListboxItem.displayName = "HeroUI.ListboxItem";
var listbox_item_default = ListboxItem;
var ListboxSection = forwardRef(
  ({
    item,
    state,
    as,
    variant,
    color,
    disableAnimation,
    className,
    classNames,
    hideSelectedIcon,
    showDivider = false,
    dividerProps = {},
    itemClasses,
    // removed title from props to avoid browsers showing a tooltip on hover
    // the title props is already inside the rendered prop
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    title,
    // removed items from props to avoid show in html element
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    items,
    ...otherProps
  }, _) => {
    const Component = as || "li";
    const slots = reactExports.useMemo(() => menuSection(), []);
    const baseStyles = cn(classNames == null ? void 0 : classNames.base, className);
    const dividerStyles = cn(classNames == null ? void 0 : classNames.divider, dividerProps == null ? void 0 : dividerProps.className);
    const { itemProps, headingProps, groupProps } = $af383d3bef1cfdc9$export$c3f9f39876e4bc7({
      heading: item.rendered,
      "aria-label": item["aria-label"]
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Component,
      {
        "data-slot": "base",
        ...mergeProps(itemProps, otherProps),
        className: slots.base({ class: baseStyles }),
        children: [
          item.rendered && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              ...headingProps,
              className: slots.heading({ class: classNames == null ? void 0 : classNames.heading }),
              "data-slot": "heading",
              children: item.rendered
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "ul",
            {
              ...groupProps,
              className: slots.group({ class: classNames == null ? void 0 : classNames.group }),
              "data-has-title": !!item.rendered,
              "data-slot": "group",
              children: [
                [...item.childNodes].map((node) => {
                  const { key: nodeKey, props: nodeProps } = node;
                  let listboxItem = /* @__PURE__ */ jsxRuntimeExports.jsx(
                    listbox_item_default,
                    {
                      classNames: itemClasses,
                      color,
                      disableAnimation,
                      hideSelectedIcon,
                      item: node,
                      state,
                      variant,
                      ...nodeProps
                    },
                    nodeKey
                  );
                  if (node.wrapper) {
                    listboxItem = node.wrapper(listboxItem);
                  }
                  return listboxItem;
                }),
                showDivider && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  divider_default,
                  {
                    as: "li",
                    className: slots.divider({
                      class: dividerStyles
                    }),
                    ...dividerProps
                  }
                )
              ]
            }
          )
        ]
      },
      item.key
    );
  }
);
ListboxSection.displayName = "HeroUI.ListboxSection";
var listbox_section_default = ListboxSection;
function useDataScrollOverflow(props = {}) {
  const {
    domRef,
    isEnabled = true,
    overflowCheck = "vertical",
    visibility = "auto",
    offset = 0,
    onVisibilityChange,
    updateDeps = []
  } = props;
  const visibleRef = reactExports.useRef(visibility);
  reactExports.useEffect(() => {
    const el = domRef == null ? void 0 : domRef.current;
    if (!el || !isEnabled) return;
    const setAttributes = (direction, hasBefore, hasAfter, prefix, suffix) => {
      if (visibility === "auto") {
        const both = `${prefix}${capitalize(suffix)}Scroll`;
        if (hasBefore && hasAfter) {
          el.dataset[both] = "true";
          el.removeAttribute(`data-${prefix}-scroll`);
          el.removeAttribute(`data-${suffix}-scroll`);
        } else {
          el.dataset[`${prefix}Scroll`] = hasBefore.toString();
          el.dataset[`${suffix}Scroll`] = hasAfter.toString();
          el.removeAttribute(`data-${prefix}-${suffix}-scroll`);
        }
      } else {
        const next = hasBefore && hasAfter ? "both" : hasBefore ? prefix : hasAfter ? suffix : "none";
        if (next !== visibleRef.current) {
          onVisibilityChange == null ? void 0 : onVisibilityChange(next);
          visibleRef.current = next;
        }
      }
    };
    const checkOverflow = () => {
      var _a, _b;
      const directions = [
        { type: "vertical", prefix: "top", suffix: "bottom" },
        { type: "horizontal", prefix: "left", suffix: "right" }
      ];
      const listbox = el.querySelector('ul[data-slot="list"]');
      const scrollHeight = +((_a = listbox == null ? void 0 : listbox.getAttribute("data-virtual-scroll-height")) != null ? _a : el.scrollHeight);
      const scrollTop = +((_b = listbox == null ? void 0 : listbox.getAttribute("data-virtual-scroll-top")) != null ? _b : el.scrollTop);
      for (const { type, prefix, suffix } of directions) {
        if (overflowCheck === type || overflowCheck === "both") {
          const hasBefore = type === "vertical" ? scrollTop > offset : el.scrollLeft > offset;
          const hasAfter = type === "vertical" ? scrollTop + el.clientHeight + offset < scrollHeight : el.scrollLeft + el.clientWidth + offset < el.scrollWidth;
          setAttributes(type, hasBefore, hasAfter, prefix, suffix);
        }
      }
    };
    const clearOverflow = () => {
      ["top", "bottom", "top-bottom", "left", "right", "left-right"].forEach((attr) => {
        el.removeAttribute(`data-${attr}-scroll`);
      });
    };
    checkOverflow();
    el.addEventListener("scroll", checkOverflow, true);
    if (visibility !== "auto") {
      clearOverflow();
      if (visibility === "both") {
        el.dataset.topBottomScroll = String(overflowCheck === "vertical");
        el.dataset.leftRightScroll = String(overflowCheck === "horizontal");
      } else {
        el.dataset.topBottomScroll = "false";
        el.dataset.leftRightScroll = "false";
        ["top", "bottom", "left", "right"].forEach((attr) => {
          el.dataset[`${attr}Scroll`] = String(visibility === attr);
        });
      }
    }
    return () => {
      el.removeEventListener("scroll", checkOverflow, true);
      clearOverflow();
    };
  }, [...updateDeps, isEnabled, visibility, overflowCheck, onVisibilityChange, domRef]);
}
function useScrollShadow(originalProps) {
  var _a;
  const [props, variantProps] = mapPropsVariants(originalProps, scrollShadow.variantKeys);
  const {
    ref,
    as,
    children,
    className,
    style,
    size = 40,
    offset = 0,
    visibility = "auto",
    isEnabled = true,
    onVisibilityChange,
    ...otherProps
  } = props;
  const Component = as || "div";
  const domRef = useDOMRef(ref);
  useDataScrollOverflow({
    domRef,
    offset,
    visibility,
    isEnabled,
    onVisibilityChange,
    updateDeps: [children],
    overflowCheck: (_a = originalProps.orientation) != null ? _a : "vertical"
  });
  const styles = reactExports.useMemo(
    () => scrollShadow({
      ...variantProps,
      className
    }),
    [objectToDeps(variantProps), className]
  );
  const getBaseProps = (props2 = {}) => {
    var _a2;
    return {
      ref: domRef,
      className: styles,
      "data-orientation": (_a2 = originalProps.orientation) != null ? _a2 : "vertical",
      style: {
        "--scroll-shadow-size": `${size}px`,
        ...style,
        ...props2.style
      },
      ...otherProps,
      ...props2
    };
  };
  return { Component, styles, domRef, children, getBaseProps };
}
var getItemSizesForCollection = (collection, itemHeight) => {
  const sizes = [];
  for (const item of collection) {
    if (item.type === "section") {
      sizes.push(([...item.childNodes].length + 1) * itemHeight);
    } else {
      sizes.push(itemHeight);
    }
  }
  return sizes;
};
var getScrollState = (element) => {
  if (!element || element.scrollTop === void 0 || element.clientHeight === void 0 || element.scrollHeight === void 0) {
    return {
      isTop: false,
      isBottom: false,
      isMiddle: false
    };
  }
  const isAtTop = element.scrollTop === 0;
  const isAtBottom = Math.ceil(element.scrollTop + element.clientHeight) >= element.scrollHeight;
  const isInMiddle = !isAtTop && !isAtBottom;
  return {
    isTop: isAtTop,
    isBottom: isAtBottom,
    isMiddle: isInMiddle
  };
};
var VirtualizedListbox = (props) => {
  var _a;
  const {
    Component,
    state,
    color,
    variant,
    itemClasses,
    getBaseProps,
    topContent,
    bottomContent,
    hideEmptyContent,
    hideSelectedIcon,
    shouldHighlightOnFocus,
    disableAnimation,
    getEmptyContentProps,
    getListProps,
    scrollShadowProps
  } = props;
  const { virtualization } = props;
  if (!virtualization || !isEmpty(virtualization) && !virtualization.maxListboxHeight && !virtualization.itemHeight) {
    throw new Error(
      "You are using a virtualized listbox. VirtualizedListbox requires 'virtualization' props with 'maxListboxHeight' and 'itemHeight' properties. This error might have originated from autocomplete components that use VirtualizedListbox. Please provide these props to use the virtualized listbox."
    );
  }
  const { maxListboxHeight, itemHeight } = virtualization;
  const listHeight = Math.min(maxListboxHeight, itemHeight * state.collection.size);
  const parentRef = reactExports.useRef(null);
  const itemSizes = reactExports.useMemo(
    () => getItemSizesForCollection([...state.collection], itemHeight),
    [state.collection, itemHeight]
  );
  const rowVirtualizer = useVirtualizer({
    count: [...state.collection].length,
    getScrollElement: () => parentRef.current,
    estimateSize: (i) => itemSizes[i]
  });
  const virtualItems = rowVirtualizer.getVirtualItems();
  const virtualScrollHeight = rowVirtualizer.getTotalSize();
  const { getBaseProps: getBasePropsScrollShadow } = useScrollShadow({ ...scrollShadowProps });
  const renderRow = (virtualItem) => {
    var _a2;
    const item = [...state.collection][virtualItem.index];
    if (!item) {
      return null;
    }
    const itemProps = {
      color,
      item,
      state,
      variant,
      disableAnimation,
      hideSelectedIcon,
      ...item.props
    };
    const virtualizerStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: `${virtualItem.size}px`,
      transform: `translateY(${virtualItem.start}px)`
    };
    if (item.type === "section") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        listbox_section_default,
        {
          ...itemProps,
          itemClasses,
          style: { ...virtualizerStyle, ...itemProps.style }
        },
        item.key
      );
    }
    let listboxItem = /* @__PURE__ */ jsxRuntimeExports.jsx(
      listbox_item_default,
      {
        ...itemProps,
        classNames: mergeProps(itemClasses, (_a2 = item.props) == null ? void 0 : _a2.classNames),
        shouldHighlightOnFocus,
        style: { ...virtualizerStyle, ...itemProps.style }
      },
      item.key
    );
    if (item.wrapper) {
      listboxItem = item.wrapper(listboxItem);
    }
    return listboxItem;
  };
  const [scrollState, setScrollState] = reactExports.useState({
    isTop: false,
    isBottom: true,
    isMiddle: false
  });
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Component,
    {
      ...getListProps(),
      "data-virtual-scroll-height": virtualScrollHeight,
      "data-virtual-scroll-top": (_a = parentRef == null ? void 0 : parentRef.current) == null ? void 0 : _a.scrollTop,
      children: [
        !state.collection.size && !hideEmptyContent && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...getEmptyContentProps() }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ...filterDOMProps(getBasePropsScrollShadow()),
            ref: parentRef,
            style: {
              height: maxListboxHeight,
              overflow: "auto"
            },
            onScroll: (e) => {
              setScrollState(getScrollState(e.target));
            },
            children: listHeight > 0 && itemHeight > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  height: `${virtualScrollHeight}px`,
                  width: "100%",
                  position: "relative"
                },
                children: virtualItems.map((virtualItem) => renderRow(virtualItem))
              }
            )
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getBaseProps(), children: [
    topContent,
    content,
    bottomContent
  ] });
};
var virtualized_listbox_default = VirtualizedListbox;
var Listbox = forwardRef(function Listbox2(props, ref) {
  const { isVirtualized, ...restProps } = props;
  const useListboxProps = useListbox({ ...restProps, ref });
  const {
    Component,
    state,
    color,
    variant,
    itemClasses,
    getBaseProps,
    topContent,
    bottomContent,
    hideEmptyContent,
    hideSelectedIcon,
    shouldHighlightOnFocus,
    disableAnimation,
    getEmptyContentProps,
    getListProps
  } = useListboxProps;
  if (isVirtualized) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(virtualized_listbox_default, { ...props, ...useListboxProps });
  }
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { ...getListProps(), children: [
    !state.collection.size && !hideEmptyContent && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...getEmptyContentProps() }) }),
    [...state.collection].map((item) => {
      var _a;
      const itemProps = {
        color,
        item,
        state,
        variant,
        disableAnimation,
        hideSelectedIcon,
        ...item.props
      };
      if (item.type === "section") {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(listbox_section_default, { ...itemProps, itemClasses }, item.key);
      }
      let listboxItem = /* @__PURE__ */ jsxRuntimeExports.jsx(
        listbox_item_default,
        {
          ...itemProps,
          classNames: mergeProps(itemClasses, (_a = item.props) == null ? void 0 : _a.classNames),
          shouldHighlightOnFocus
        },
        item.key
      );
      if (item.wrapper) {
        listboxItem = item.wrapper(listboxItem);
      }
      return listboxItem;
    })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getBaseProps(), children: [
    topContent,
    content,
    bottomContent
  ] });
});
var listbox_default = Listbox;
var Select = forwardRef(function Select2(props, ref) {
  var _a;
  const {
    Component,
    state,
    label,
    hasHelper,
    isLoading,
    triggerRef,
    selectorIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDownIcon, {}),
    description,
    errorMessage,
    isInvalid,
    startContent,
    endContent,
    placeholder,
    renderValue,
    shouldLabelBeOutside,
    disableAnimation,
    getBaseProps,
    getLabelProps,
    getTriggerProps,
    getValueProps,
    getListboxProps,
    getPopoverProps,
    getSpinnerProps,
    getMainWrapperProps,
    getInnerWrapperProps,
    getHiddenSelectProps,
    getHelperWrapperProps,
    getListboxWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getSelectorIconProps,
    isClearable,
    getClearButtonProps,
    getEndWrapperProps,
    getEndContentProps
  } = useSelect({ ...props, ref });
  const labelContent = label ? /* @__PURE__ */ jsxRuntimeExports.jsx("label", { ...getLabelProps(), children: label }) : null;
  const clonedIcon = reactExports.cloneElement(selectorIcon, getSelectorIconProps());
  const clearButton = reactExports.useMemo(() => {
    var _a2;
    if (isClearable && ((_a2 = state.selectedItems) == null ? void 0 : _a2.length)) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getClearButtonProps(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloseFilledIcon, {}) });
    }
    return null;
  }, [isClearable, getClearButtonProps, (_a = state.selectedItems) == null ? void 0 : _a.length]);
  const end = reactExports.useMemo(() => {
    if (clearButton) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getEndWrapperProps(), children: [
        clearButton,
        endContent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getEndContentProps(), children: endContent })
      ] });
    }
    return endContent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getEndContentProps(), children: endContent });
  }, [clearButton, endContent, getEndWrapperProps, getEndContentProps]);
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
  const renderSelectedItem = reactExports.useMemo(() => {
    var _a2;
    if (!((_a2 = state.selectedItems) == null ? void 0 : _a2.length)) return placeholder;
    if (renderValue && typeof renderValue === "function") {
      const mappedItems = [...state.selectedItems].map((item) => ({
        key: item.key,
        data: item.value,
        type: item.type,
        props: item.props,
        textValue: item.textValue,
        rendered: item.rendered,
        "aria-label": item["aria-label"]
      }));
      return renderValue(mappedItems);
    }
    return state.selectedItems.map((item) => item.textValue).join(", ");
  }, [state.selectedItems, renderValue, placeholder]);
  const renderIndicator = reactExports.useMemo(() => {
    if (isLoading) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(spinner_default, { ...getSpinnerProps() });
    }
    return clonedIcon;
  }, [isLoading, clonedIcon, getSpinnerProps]);
  const popoverContent = reactExports.useMemo(
    () => state.isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(free_solo_popover_default, { ...getPopoverProps(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(scroll_shadow_default, { ...getListboxWrapperProps(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(listbox_default, { ...getListboxProps() }) }) }) : null,
    [state.isOpen, getPopoverProps, state, triggerRef, getListboxWrapperProps, getListboxProps]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getBaseProps(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HiddenSelect, { ...getHiddenSelectProps() }),
    shouldLabelBeOutside ? labelContent : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getMainWrapperProps(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { ...getTriggerProps(), children: [
        !shouldLabelBeOutside ? labelContent : null,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getInnerWrapperProps(), children: [
          startContent,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getValueProps(), children: renderSelectedItem }),
          endContent && state.selectedItems && /* @__PURE__ */ jsxRuntimeExports.jsx($5c3e21d68f1c4674$export$439d29a4e110a164, { elementType: "span", children: "," }),
          end
        ] }),
        renderIndicator
      ] }),
      helperWrapper
    ] }),
    disableAnimation ? popoverContent : /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: popoverContent })
  ] });
});
var select_default = Select;
export {
  $9bf71ea28793e738$export$2d6ec8fc375ceafa as $,
  FormContext as F,
  TRANSITION_VARIANTS as T,
  $f6ba6936bfd098a0$export$ecf600387e221c37 as a,
  $d667c2af82d35a98$export$d6daf82dcd84e87c as b,
  $60f19cefd567a3e4$export$253fe78d46329472 as c,
  $d03379b88399b8c5$export$6cd28814d92fa9c9 as d,
  $4a07ac835f260f78$export$6c8a5aaad13c9852 as e,
  $3e6197669829fe11$export$40bfa8c7b0832715 as f,
  $c1d7fb2ec91bae71$export$6d08773d2e66f8f2 as g,
  switch_default as h,
  $f11fb0bcf1b2687a$export$61c6a8c84e605fb6 as i,
  $d1116acdf220c2da$export$4c014de7c8940b4c as j,
  $8f5a2122b0992be3$export$630ff653c5ada6a9 as k,
  listbox_item_base_default as l,
  mergeRefs as m,
  $8f5a2122b0992be3$export$b9b3dfddab17db27 as n,
  $2a41e45df1593e64$export$d39e1813b3bdd0e1 as o,
  useAriaOverlay as p,
  getArrowPlacement as q,
  getTransformOrigins as r,
  select_default as s,
  toReactAriaPlacement as t,
  useSafeLayoutEffect as u,
  $3274bf1495747a7b$export$5add1d006293d136 as v,
  $860f7da480e22816$export$b8473d3665f3a75a as w,
  useSlottedContext as x,
  useLabelPlacement as y,
  $5c3e21d68f1c4674$export$439d29a4e110a164 as z
};
