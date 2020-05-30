jQuery(document).ready(function ($) {
  console.log("from test.js", $)
  $(
    "#slider-36-231.ct_unique_slider_7459 .oxygen-unslider-container:not(.unslider-horizontal,.unslider-fade)"
  ).unslider({
    autoplay: false,
    delay: 3000,
    animation: "horizontal",
    speed: 750,
    arrows: true,
    nav: true,
    infinite: false,
  })
})
/*! This file is auto-generated */
!(function (e, t) {
  if ("function" == typeof define && define.amd)
    define("hoverintent", ["module"], t)
  else if ("undefined" != typeof exports) t(module)
  else {
    var n = { exports: {} }
    t(n), (e.hoverintent = n.exports)
  }
})(this, function (e) {
  "use strict"
  var t =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var o in n)
          Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
      }
      return e
    }
  e.exports = function (e, n, o) {
    function i(e, t) {
      return y && (y = clearTimeout(y)), (b = 0), p ? void 0 : o.call(e, t)
    }
    function r(e) {
      ;(m = e.clientX), (d = e.clientY)
    }
    function u(e, t) {
      if (
        (y && (y = clearTimeout(y)),
        Math.abs(h - m) + Math.abs(E - d) < x.sensitivity)
      )
        return (b = 1), p ? void 0 : n.call(e, t)
      ;(h = m),
        (E = d),
        (y = setTimeout(function () {
          u(e, t)
        }, x.interval))
    }
    function s(t) {
      return (
        (L = !0),
        y && (y = clearTimeout(y)),
        e.removeEventListener("mousemove", r, !1),
        1 !== b &&
          ((h = t.clientX),
          (E = t.clientY),
          e.addEventListener("mousemove", r, !1),
          (y = setTimeout(function () {
            u(e, t)
          }, x.interval))),
        this
      )
    }
    function c(t) {
      return (
        (L = !1),
        y && (y = clearTimeout(y)),
        e.removeEventListener("mousemove", r, !1),
        1 === b &&
          (y = setTimeout(function () {
            i(e, t)
          }, x.timeout)),
        this
      )
    }
    function v(t) {
      L || ((p = !0), n.call(e, t))
    }
    function a(t) {
      !L && p && ((p = !1), o.call(e, t))
    }
    function f() {
      e.addEventListener("focus", v, !1), e.addEventListener("blur", a, !1)
    }
    function l() {
      e.removeEventListener("focus", v, !1),
        e.removeEventListener("blur", a, !1)
    }
    var m,
      d,
      h,
      E,
      L = !1,
      p = !1,
      T = {},
      b = 0,
      y = 0,
      x = { sensitivity: 7, interval: 100, timeout: 0, handleFocus: !1 }
    return (
      (T.options = function (e) {
        var n = e.handleFocus !== x.handleFocus
        return (x = t({}, x, e)), n && (x.handleFocus ? f() : l()), T
      }),
      (T.remove = function () {
        e &&
          (e.removeEventListener("mouseover", s, !1),
          e.removeEventListener("mouseout", c, !1),
          l())
      }),
      e &&
        (e.addEventListener("mouseover", s, !1),
        e.addEventListener("mouseout", c, !1)),
      T
    )
  }
})
jQuery(document).ready(function () {
  var percentage = jQuery(
    "#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar"
  ).attr("percentage")
  var rotate = percentage * 1.8
  jQuery(
    "#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .mask.full, #wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .fill"
  ).css({
    "-webkit-transform": "rotate(" + rotate + "deg)",
    "-ms-transform": "rotate(" + rotate + "deg)",
    transform: "rotate(" + rotate + "deg)",
  })
  jQuery(
    "#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .inset"
  ).css(
    "background-color",
    jQuery("#wp-admin-bar-autoptimize .ab-sub-wrapper").css("background-color")
  )
  jQuery("#wp-admin-bar-autoptimize-delete-cache .ab-item").css(
    "background-color",
    jQuery("#wpadminbar").css("background-color")
  )
  jQuery("#wp-admin-bar-autoptimize-default li").click(function (e) {
    var id =
      typeof e.target.id != "undefined" && e.target.id
        ? e.target.id
        : jQuery(e.target).parent("li").attr("id")
    var action = ""
    if (id == "wp-admin-bar-autoptimize-delete-cache") {
      action = "autoptimize_delete_cache"
    } else {
      return
    }
    jQuery("#wp-admin-bar-autoptimize").removeClass("hover")
    var modal_loading = jQuery('<div class="autoptimize-loading"></div>')
      .appendTo("body")
      .show()
    var success = function () {
      jQuery("#wp-admin-bar-autoptimize-cache-info .size")
        .attr("class", "size green")
        .html("0.00 B")
      jQuery("#wp-admin-bar-autoptimize-cache-info .files").html("0")
      jQuery("#wp-admin-bar-autoptimize-cache-info .percentage .numbers")
        .attr("class", "numbers green")
        .html("0%")
      jQuery(
        "#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .fill"
      ).attr("class", "fill bg-green")
      jQuery("#wp-admin-bar-autoptimize").attr("class", "menupop bullet-green")
      jQuery(
        "#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .mask.full, #wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .fill"
      ).css({
        "-webkit-transform": "rotate(0deg)",
        "-ms-transform": "rotate(0deg)",
        transform: "rotate(0deg)",
      })
    }
    var notice = function () {
      jQuery(
        '<div id="ao-delete-cache-timeout" class="notice notice-error is-dismissible"><p><strong><span style="display:block;clear:both;">' +
          autoptimize_ajax_object.error_msg +
          '</span></strong></p><button type="button" class="notice-dismiss"><span class="screen-reader-text">' +
          autoptimize_ajax_object.dismiss_msg +
          "</span></button></div><br>"
      )
        .insertAfter("#wpbody .wrap h1:first-of-type")
        .show()
    }
    jQuery.ajax({
      type: "GET",
      url: autoptimize_ajax_object.ajaxurl,
      data: { action: action, nonce: autoptimize_ajax_object.nonce },
      dataType: "json",
      cache: false,
      timeout: 9000,
      success: function (cleared) {
        modal_loading.remove()
        if (cleared) {
          success()
        } else {
          notice()
        }
      },
      error: function (jqXHR, textStatus) {
        modal_loading.remove()
        notice()
      },
    })
  })
})
!(function ($) {
  return $
    ? (($.Unslider = function (t, n) {
        var e = this
        return (
          (e._ = "unslider"),
          (e.defaults = {
            autoplay: !1,
            delay: 3e3,
            speed: 750,
            easing: "swing",
            keys: { prev: 37, next: 39 },
            nav: !0,
            arrows: {
              prev: '<a class="' + e._ + '-arrow prev">Prev</a>',
              next: '<a class="' + e._ + '-arrow next">Next</a>',
            },
            animation: "horizontal",
            selectors: { container: "ul:first", slides: "li" },
            animateHeight: !1,
            activeClass: e._ + "-active",
            swipe: !0,
            swipeThreshold: 0.2,
          }),
          (e.$context = t),
          (e.options = {}),
          (e.$parent = null),
          (e.$container = null),
          (e.$slides = null),
          (e.$nav = null),
          (e.$arrows = []),
          (e.total = 0),
          (e.current = 0),
          (e.prefix = e._ + "-"),
          (e.eventSuffix = "." + e.prefix + ~~(2e3 * Math.random())),
          (e.interval = null),
          (e.init = function (t) {
            return (
              (e.options = $.extend({}, e.defaults, t)),
              (e.$container = e.$context
                .find(e.options.selectors.container)
                .addClass(e.prefix + "wrap")),
              (e.$slides = e.$container.children(e.options.selectors.slides)),
              e.setup(),
              $.each(["nav", "arrows", "keys", "infinite"], function (t, n) {
                e.options[n] && e["init" + $._ucfirst(n)]()
              }),
              jQuery.event.special.swipe && e.options.swipe && e.initSwipe(),
              e.options.autoplay && e.start(),
              e.calculateSlides(),
              e.$context.trigger(e._ + ".ready"),
              e.animate(e.options.index || e.current, "init")
            )
          }),
          (e.setup = function () {
            e.$context
              .addClass(e.prefix + e.options.animation)
              .wrap('<div class="' + e._ + '" />'),
              (e.$parent = e.$context.parent("." + e._))
            var t = e.$context.css("position")
            "static" === t && e.$context.css("position", "relative"),
              e.$context.css("overflow", "hidden")
          }),
          (e.calculateSlides = function () {
            if (
              ((e.total = e.$slides.length), "fade" !== e.options.animation)
            ) {
              var t = "width"
              "vertical" === e.options.animation && (t = "height"),
                e.$container
                  .css(t, 100 * e.total + "%")
                  .addClass(e.prefix + "carousel"),
                e.$slides.css(t, 100 / e.total + "%")
            }
          }),
          (e.start = function () {
            return (
              (e.interval = setTimeout(function () {
                e.next()
              }, e.options.delay)),
              e
            )
          }),
          (e.stop = function () {
            return clearTimeout(e.interval), e
          }),
          (e.initNav = function () {
            var t = $('<nav class="' + e.prefix + 'nav"><ol /></nav>')
            e.$slides.each(function (n) {
              var i = this.getAttribute("data-nav") || n + 1
              $.isFunction(e.options.nav) &&
                (i = e.options.nav.call(e.$slides.eq(n), n, i)),
                t
                  .children("ol")
                  .append('<li data-slide="' + n + '">' + i + "</li>")
            }),
              (e.$nav = t.insertAfter(e.$context)),
              e.$nav.find("li").on("click" + e.eventSuffix, function () {
                var t = $(this).addClass(e.options.activeClass)
                t.siblings().removeClass(e.options.activeClass),
                  e.animate(t.attr("data-slide"))
              })
          }),
          (e.initArrows = function () {
            e.options.arrows === !0 && (e.options.arrows = e.defaults.arrows),
              $.each(e.options.arrows, function (t, n) {
                e.$arrows.push(
                  $(n)
                    .insertAfter(e.$context)
                    .on("click" + e.eventSuffix, e[t])
                )
              })
          }),
          (e.initKeys = function () {
            e.options.keys === !0 && (e.options.keys = e.defaults.keys),
              $(document).on("keyup" + e.eventSuffix, function (t) {
                $.each(e.options.keys, function (n, i) {
                  t.which === i && $.isFunction(e[n]) && e[n].call(e)
                })
              })
          }),
          (e.initSwipe = function () {
            var t = e.$slides.width()
            "fade" !== e.options.animation &&
              e.$container.on({
                movestart: function (t) {
                  return (t.distX > t.distY && t.distX < -t.distY) ||
                    (t.distX < t.distY && t.distX > -t.distY)
                    ? !!t.preventDefault()
                    : void e.$container.css("position", "relative")
                },
                move: function (n) {
                  e.$container.css(
                    "left",
                    -(100 * e.current) + (100 * n.distX) / t + "%"
                  )
                },
                moveend: function (n) {
                  Math.abs(n.distX) / t > e.options.swipeThreshold
                    ? e[n.distX < 0 ? "next" : "prev"]()
                    : e.$container.animate(
                        { left: -(100 * e.current) + "%" },
                        e.options.speed / 2
                      )
                },
              })
          }),
          (e.initInfinite = function () {
            var t = ["first", "last"]
            $.each(t, function (n, i) {
              e.$slides.push.apply(
                e.$slides,
                e.$slides
                  .filter(':not(".' + e._ + '-clone")')
                  [i]()
                  .clone()
                  .addClass(e._ + "-clone")
                  ["insert" + (0 === n ? "After" : "Before")](
                    e.$slides[t[~~!n]]()
                  )
              )
            })
          }),
          (e.destroyArrows = function () {
            $.each(e.$arrows, function (t, n) {
              n.remove()
            })
          }),
          (e.destroySwipe = function () {
            e.$container.off("movestart move moveend")
          }),
          (e.destroyKeys = function () {
            $(document).off("keyup" + e.eventSuffix)
          }),
          (e.setIndex = function (t) {
            return (
              0 > t && (t = e.total - 1),
              (e.current = Math.min(Math.max(0, t), e.total - 1)),
              e.options.nav &&
                e.$nav
                  .find('[data-slide="' + e.current + '"]')
                  ._active(e.options.activeClass),
              e.$slides.eq(e.current)._active(e.options.activeClass),
              e
            )
          }),
          (e.animate = function (t, n) {
            if (
              ("first" === t && (t = 0),
              "last" === t && (t = e.total),
              isNaN(t))
            )
              return e
            e.options.autoplay && e.stop().start(),
              e.setIndex(t),
              e.$context.trigger(e._ + ".change", [t, e.$slides.eq(t)])
            var i = "animate" + $._ucfirst(e.options.animation)
            return $.isFunction(e[i]) && e[i](e.current, n), e
          }),
          (e.next = function () {
            var t = e.current + 1
            return t >= e.total && (t = 0), e.animate(t, "next")
          }),
          (e.prev = function () {
            return e.animate(e.current - 1, "prev")
          }),
          (e.animateHorizontal = function (t) {
            var n = "left"
            return (
              "rtl" === e.$context.attr("dir") && (n = "right"),
              e.options.infinite && e.$container.css("margin-" + n, "-100%"),
              e.slide(n, t)
            )
          }),
          (e.animateVertical = function (t) {
            return (
              (e.options.animateHeight = !0),
              e.options.infinite &&
                e.$container.css("margin-top", -e.$slides.outerHeight()),
              e.slide("top", t)
            )
          }),
          (e.slide = function (t, n) {
            if (
              (e.options.animateHeight &&
                e._move(
                  e.$context,
                  { height: e.$slides.eq(n).outerHeight() },
                  !1
                ),
              e.options.infinite)
            ) {
              var i
              n === e.total - 1 && ((i = e.total - 3), (n = -1)),
                n === e.total - 2 && ((i = 0), (n = e.total - 2)),
                "number" == typeof i &&
                  (e.setIndex(i),
                  e.$context.on(e._ + ".moved", function () {
                    e.current === i &&
                      e.$container.css(t, -(100 * i) + "%").off(e._ + ".moved")
                  }))
            }
            var o = {}
            return (o[t] = -(100 * n) + "%"), e._move(e.$container, o)
          }),
          (e.animateFade = function (t) {
            var n = e.$slides.eq(t).addClass(e.options.activeClass)
            e._move(n.siblings().removeClass(e.options.activeClass), {
              opacity: 0,
            }),
              e._move(n, { opacity: 1 }, !1)
          }),
          (e._move = function (t, n, i, o) {
            return (
              i !== !1 &&
                (i = function () {
                  e.$context.trigger(e._ + ".moved")
                }),
              t._move(n, o || e.options.speed, e.options.easing, i)
            )
          }),
          e.init(n)
        )
      }),
      ($.fn._active = function (t) {
        return this.addClass(t).siblings().removeClass(t)
      }),
      ($._ucfirst = function (t) {
        return (t + "").toLowerCase().replace(/^./, function (t) {
          return t.toUpperCase()
        })
      }),
      ($.fn._move = function () {
        return (
          this.stop(!0, !0),
          $.fn[$.fn.velocity ? "velocity" : "animate"].apply(this, arguments)
        )
      }),
      void ($.fn.unslider = function (t) {
        return this.each(function () {
          var n = $(this)
          if ("string" == typeof t && n.data("unslider")) {
            t = t.split(":")
            var e = n.data("unslider")[t[0]]
            if ($.isFunction(e))
              return e.apply(n, t[1] ? t[1].split(",") : null)
          }
          return n.data("unslider", new $.Unslider(n, t))
        })
      }))
    : console.warn("Unslider needs jQuery")
})(window.jQuery)
;(function (fn) {
  if (typeof define === "function" && define.amd) {
    define([], fn)
  } else if (
    typeof module !== "undefined" &&
    module !== null &&
    module.exports
  ) {
    module.exports = fn
  } else {
    fn()
  }
})(function () {
  var assign = Object.assign || (window.jQuery && jQuery.extend)
  var threshold = 8
  var requestFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (fn, element) {
        return window.setTimeout(function () {
          fn()
        }, 25)
      }
    )
  })()
  var ignoreTags = { textarea: true, input: true, select: true, button: true }
  var mouseevents = {
    move: "mousemove",
    cancel: "mouseup dragstart",
    end: "mouseup",
  }
  var touchevents = { move: "touchmove", cancel: "touchend", end: "touchend" }
  var rspaces = /\s+/
  var eventOptions = { bubbles: true, cancelable: true }
  var eventsSymbol = Symbol("events")
  function createEvent(type) {
    return new CustomEvent(type, eventOptions)
  }
  function getEvents(node) {
    return node[eventsSymbol] || (node[eventsSymbol] = {})
  }
  function on(node, types, fn, data, selector) {
    types = types.split(rspaces)
    var events = getEvents(node)
    var i = types.length
    var handlers, type
    function handler(e) {
      fn(e, data)
    }
    while (i--) {
      type = types[i]
      handlers = events[type] || (events[type] = [])
      handlers.push([fn, handler])
      node.addEventListener(type, handler)
    }
  }
  function off(node, types, fn, selector) {
    types = types.split(rspaces)
    var events = getEvents(node)
    var i = types.length
    var type, handlers, k
    if (!events) {
      return
    }
    while (i--) {
      type = types[i]
      handlers = events[type]
      if (!handlers) {
        continue
      }
      k = handlers.length
      while (k--) {
        if (handlers[k][0] === fn) {
          node.removeEventListener(type, handlers[k][1])
          handlers.splice(k, 1)
        }
      }
    }
  }
  function trigger(node, type, properties) {
    var event = createEvent(type)
    if (properties) {
      assign(event, properties)
    }
    node.dispatchEvent(event)
  }
  function Timer(fn) {
    var callback = fn,
      active = false,
      running = false
    function trigger(time) {
      if (active) {
        callback()
        requestFrame(trigger)
        running = true
        active = false
      } else {
        running = false
      }
    }
    this.kick = function (fn) {
      active = true
      if (!running) {
        trigger()
      }
    }
    this.end = function (fn) {
      var cb = callback
      if (!fn) {
        return
      }
      if (!running) {
        fn()
      } else {
        callback = active
          ? function () {
              cb()
              fn()
            }
          : fn
        active = true
      }
    }
  }
  function noop() {}
  function preventDefault(e) {
    e.preventDefault()
  }
  function isIgnoreTag(e) {
    return !!ignoreTags[e.target.tagName.toLowerCase()]
  }
  function isPrimaryButton(e) {
    return e.which === 1 && !e.ctrlKey && !e.altKey
  }
  function identifiedTouch(touchList, id) {
    var i, l
    if (touchList.identifiedTouch) {
      return touchList.identifiedTouch(id)
    }
    i = -1
    l = touchList.length
    while (++i < l) {
      if (touchList[i].identifier === id) {
        return touchList[i]
      }
    }
  }
  function changedTouch(e, data) {
    var touch = identifiedTouch(e.changedTouches, data.identifier)
    if (!touch) {
      return
    }
    if (touch.pageX === data.pageX && touch.pageY === data.pageY) {
      return
    }
    return touch
  }
  function mousedown(e) {
    if (!isPrimaryButton(e)) {
      return
    }
    if (isIgnoreTag(e)) {
      return
    }
    on(document, mouseevents.move, mousemove, e)
    on(document, mouseevents.cancel, mouseend, e)
  }
  function mousemove(e, data) {
    checkThreshold(e, data, e, removeMouse)
  }
  function mouseend(e, data) {
    removeMouse()
  }
  function removeMouse() {
    off(document, mouseevents.move, mousemove)
    off(document, mouseevents.cancel, mouseend)
  }
  function touchstart(e) {
    if (ignoreTags[e.target.tagName.toLowerCase()]) {
      return
    }
    var touch = e.changedTouches[0]
    var data = {
      target: touch.target,
      pageX: touch.pageX,
      pageY: touch.pageY,
      identifier: touch.identifier,
      touchmove: function (e, data) {
        touchmove(e, data)
      },
      touchend: function (e, data) {
        touchend(e, data)
      },
    }
    on(document, touchevents.move, data.touchmove, data)
    on(document, touchevents.cancel, data.touchend, data)
  }
  function touchmove(e, data) {
    var touch = changedTouch(e, data)
    if (!touch) {
      return
    }
    checkThreshold(e, data, touch, removeTouch)
  }
  function touchend(e, data) {
    var touch = identifiedTouch(e.changedTouches, data.identifier)
    if (!touch) {
      return
    }
    removeTouch(data)
  }
  function removeTouch(data) {
    off(document, touchevents.move, data.touchmove)
    off(document, touchevents.cancel, data.touchend)
  }
  function checkThreshold(e, data, touch, fn) {
    var distX = touch.pageX - data.pageX
    var distY = touch.pageY - data.pageY
    if (distX * distX + distY * distY < threshold * threshold) {
      return
    }
    triggerStart(e, data, touch, distX, distY, fn)
  }
  function triggerStart(e, data, touch, distX, distY, fn) {
    var touches = e.targetTouches
    var time = e.timeStamp - data.timeStamp
    var template = {
      altKey: e.altKey,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      startX: data.pageX,
      startY: data.pageY,
      distX: distX,
      distY: distY,
      deltaX: distX,
      deltaY: distY,
      pageX: touch.pageX,
      pageY: touch.pageY,
      velocityX: distX / time,
      velocityY: distY / time,
      identifier: data.identifier,
      targetTouches: touches,
      finger: touches ? touches.length : 1,
      enableMove: function () {
        this.moveEnabled = true
        this.enableMove = noop
        e.preventDefault()
      },
    }
    trigger(data.target, "movestart", template)
    fn(data)
  }
  function activeMousemove(e, data) {
    var timer = data.timer
    data.touch = e
    data.timeStamp = e.timeStamp
    timer.kick()
  }
  function activeMouseend(e, data) {
    var target = data.target
    var event = data.event
    var timer = data.timer
    removeActiveMouse()
    endEvent(target, event, timer, function () {
      setTimeout(function () {
        off(target, "click", preventDefault)
      }, 0)
    })
  }
  function removeActiveMouse() {
    off(document, mouseevents.move, activeMousemove)
    off(document, mouseevents.end, activeMouseend)
  }
  function activeTouchmove(e, data) {
    var event = data.event
    var timer = data.timer
    var touch = changedTouch(e, event)
    if (!touch) {
      return
    }
    e.preventDefault()
    event.targetTouches = e.targetTouches
    data.touch = touch
    data.timeStamp = e.timeStamp
    timer.kick()
  }
  function activeTouchend(e, data) {
    var target = data.target
    var event = data.event
    var timer = data.timer
    var touch = identifiedTouch(e.changedTouches, event.identifier)
    if (!touch) {
      return
    }
    removeActiveTouch(data)
    endEvent(target, event, timer)
  }
  function removeActiveTouch(data) {
    off(document, touchevents.move, data.activeTouchmove)
    off(document, touchevents.end, data.activeTouchend)
  }
  function updateEvent(event, touch, timeStamp) {
    var time = timeStamp - event.timeStamp
    event.distX = touch.pageX - event.startX
    event.distY = touch.pageY - event.startY
    event.deltaX = touch.pageX - event.pageX
    event.deltaY = touch.pageY - event.pageY
    event.velocityX = 0.3 * event.velocityX + (0.7 * event.deltaX) / time
    event.velocityY = 0.3 * event.velocityY + (0.7 * event.deltaY) / time
    event.pageX = touch.pageX
    event.pageY = touch.pageY
  }
  function endEvent(target, event, timer, fn) {
    timer.end(function () {
      trigger(target, "moveend", event)
      return fn && fn()
    })
  }
  function movestart(e) {
    if (e.defaultPrevented) {
      return
    }
    if (!e.moveEnabled) {
      return
    }
    var event = {
      startX: e.startX,
      startY: e.startY,
      pageX: e.pageX,
      pageY: e.pageY,
      distX: e.distX,
      distY: e.distY,
      deltaX: e.deltaX,
      deltaY: e.deltaY,
      velocityX: e.velocityX,
      velocityY: e.velocityY,
      identifier: e.identifier,
      targetTouches: e.targetTouches,
      finger: e.finger,
    }
    var data = {
      target: e.target,
      event: event,
      timer: new Timer(update),
      touch: undefined,
      timeStamp: e.timeStamp,
    }
    function update(time) {
      updateEvent(event, data.touch, data.timeStamp)
      trigger(data.target, "move", event)
    }
    if (e.identifier === undefined) {
      on(e.target, "click", preventDefault)
      on(document, mouseevents.move, activeMousemove, data)
      on(document, mouseevents.end, activeMouseend, data)
    } else {
      data.activeTouchmove = function (e, data) {
        activeTouchmove(e, data)
      }
      data.activeTouchend = function (e, data) {
        activeTouchend(e, data)
      }
      on(document, touchevents.move, data.activeTouchmove, data)
      on(document, touchevents.end, data.activeTouchend, data)
    }
  }
  on(document, "mousedown", mousedown)
  on(document, "touchstart", touchstart)
  on(document, "movestart", movestart)
  if (!window.jQuery) {
    return
  }
  var properties = "startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(
    " "
  )
  function enableMove1(e) {
    e.enableMove()
  }
  function enableMove2(e) {
    e.enableMove()
  }
  function enableMove3(e) {
    e.enableMove()
  }
  function add(handleObj) {
    var handler = handleObj.handler
    handleObj.handler = function (e) {
      var i = properties.length
      var property
      while (i--) {
        property = properties[i]
        e[property] = e.originalEvent[property]
      }
      handler.apply(this, arguments)
    }
  }
  jQuery.event.special.movestart = {
    setup: function () {
      on(this, "movestart", enableMove1)
      return false
    },
    teardown: function () {
      off(this, "movestart", enableMove1)
      return false
    },
    add: add,
  }
  jQuery.event.special.move = {
    setup: function () {
      on(this, "movestart", enableMove2)
      return false
    },
    teardown: function () {
      off(this, "movestart", enableMove2)
      return false
    },
    add: add,
  }
  jQuery.event.special.moveend = {
    setup: function () {
      on(this, "movestart", enableMove3)
      return false
    },
    teardown: function () {
      off(this, "movestart", enableMove3)
      return false
    },
    add: add,
  }
})
;(function (thisModule) {
  if (typeof define === "function" && define.amd) {
    define(["jquery", undefined, "jquery.event.move"], thisModule)
  } else if (
    typeof module !== "undefined" &&
    module !== null &&
    module.exports
  ) {
    module.exports = thisModule
  } else {
    thisModule(jQuery)
  }
})(function (jQuery, undefined) {
  var add = jQuery.event.add,
    remove = jQuery.event.remove,
    trigger = function (node, type, data) {
      jQuery.event.trigger(type, data, node)
    },
    settings = { threshold: 0.4, sensitivity: 6 }
  function moveend(e) {
    var w, h, event
    w = e.currentTarget.offsetWidth
    h = e.currentTarget.offsetHeight
    event = {
      distX: e.distX,
      distY: e.distY,
      velocityX: e.velocityX,
      velocityY: e.velocityY,
      finger: e.finger,
    }
    if (e.distX > e.distY) {
      if (e.distX > -e.distY) {
        if (
          e.distX / w > settings.threshold ||
          ((e.velocityX * e.distX) / w) * settings.sensitivity > 1
        ) {
          event.type = "swiperight"
          trigger(e.currentTarget, event)
        }
      } else {
        if (
          -e.distY / h > settings.threshold ||
          ((e.velocityY * e.distY) / w) * settings.sensitivity > 1
        ) {
          event.type = "swipeup"
          trigger(e.currentTarget, event)
        }
      }
    } else {
      if (e.distX > -e.distY) {
        if (
          e.distY / h > settings.threshold ||
          ((e.velocityY * e.distY) / w) * settings.sensitivity > 1
        ) {
          event.type = "swipedown"
          trigger(e.currentTarget, event)
        }
      } else {
        if (
          -e.distX / w > settings.threshold ||
          ((e.velocityX * e.distX) / w) * settings.sensitivity > 1
        ) {
          event.type = "swipeleft"
          trigger(e.currentTarget, event)
        }
      }
    }
  }
  function getData(node) {
    var data = jQuery.data(node, "event_swipe")
    if (!data) {
      data = { count: 0 }
      jQuery.data(node, "event_swipe", data)
    }
    return data
  }
  jQuery.event.special.swipe = jQuery.event.special.swipeleft = jQuery.event.special.swiperight = jQuery.event.special.swipeup = jQuery.event.special.swipedown = {
    setup: function (data, namespaces, eventHandle) {
      var data = getData(this)
      if (data.count++ > 0) {
        return
      }
      add(this, "moveend", moveend)
      return true
    },
    teardown: function () {
      var data = getData(this)
      if (--data.count > 0) {
        return
      }
      remove(this, "moveend", moveend)
      return true
    },
    settings: settings,
  }
})
