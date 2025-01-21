document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(SplitText)

  // animation for client logo
  horizontalLoop("#box", {
    center: true,
    repeat: -1
  });

  // only run in desktop
  if (window.innerWidth > 768) {
    // animation navigation
    let hero = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        scrub: 1,
      }
    });

    hero.addLabel('spin1')
      .from('#navigation', { width: "48%", duration: 1, ease: 'none' })
      .addLabel('spin2')
      .fromTo('#navigation-menu-desktop', { width: "0%", duration: 1, ease: 'none' }, { width: "100%", duration: 1, ease: 'none' }, "spin1")
      .addLabel('spin3')
      .fromTo('#navigation-menu-desktop', { opacity: 0, duration: 1, ease: 'none' }, { opacity: 1, duration: 1, ease: 'none' }, "spin1+=.5")
  }

  let hero2 = gsap.timeline({
    scrollTrigger: {
      trigger: '#hero',
      start: '-=100% top',
    }
  });

  hero2.addLabel('text-appear')
    .from('#hero-text', { opacity: 0, y: 100, duration: 1, ease: 'power1.inOut' })
    .addLabel('image-appear')
    .from('#hero-image', { opacity: 0, y: 100, duration: 1, ease: 'power1.inOut' }, "text-appear-=.1")

  // animation client feed
  let clientFeedText = gsap.timeline({
    scrollTrigger: {
      trigger: '#client-feed',
      start: '-=100% top',
    }
  });

  clientFeedText.addLabel('text-appear')
    .from('#client-feed-text', { opacity: 0, duration: 1, ease: 'power1.inOut' })

  let clientFeed = gsap.timeline({
    scrollTrigger: {
      trigger: '#client-feed',
      start: '-=120% top',
      end: '+=30% bottom',
      scrub: 1,
    }
  });

  clientFeed
    .from('#client-feed-1', { opacity: 0, x: '50%', y: "100%", duration: .5, ease: 'power1.inOut' }, "client-feed-1")
    .from('#client-feed-2', { opacity: 0, x: '-50%', y: "100%", duration: .5, ease: 'power1.inOut' }, "client-feed-1")
    .from('#client-feed-3', { opacity: 0, x: '50%', y: "-100%", duration: .5, ease: 'power1.inOut' }, "client-feed-1")
    .from('#client-feed-4', { opacity: 0, x: '-50%', y: "-100%", duration: .5, ease: 'power1.inOut' }, "client-feed-1")

  // animation number count title appear
  let numberCount = gsap.timeline({
    scrollTrigger: {
      trigger: '#number-count',
      start: '-=200% top',
    }
  });

  numberCount
    .from('#number-count-text', { opacity: 0, duration: 1, ease: 'power1.inOut' })
    .from("#number-count-list", { opacity: 0, duration: .5, ease: 'power1.inOut' })

  // animation number count on scroll
  const panels = gsap.utils.toArray('#number-count-list > div');
  const buttons = gsap.utils.toArray('#number-count-list > div > a');
  const texts = gsap.utils.toArray('#number-count-list > div > p');
  const panelHeight = document.querySelector('#number-count-list > div').clientHeight;
  const buttonHeight = document.querySelector('#number-count-list > div > a').clientHeight + 20;
  gsap.set(buttons, { position: "absolute", left: "10px", right: "10px", bottom: "10px" })
  gsap.set(panels, { height: buttonHeight })
  gsap.set(texts, { display: "none", opacity: 0 })
  let numberCountScroll = gsap.timeline({
    scrollTrigger: {
      trigger: '#number-count',
      start: '-=30% top',
      end: '+=50% bottom',
      scrub: 1,
    }
  })

  panels.forEach((item, index) => {
    numberCountScroll
      .addLabel(`ncs-item-${index}`)
      .to(item, { height: panelHeight, duration: 1, ease: 'power1.inOut' })
      .to(texts[index], { display: "block", opacity: 1, duration: .5, ease: 'power1.inOut' }, `ncs-item-${index}`)
  })

  // animation price
  const priceTexts = gsap.utils.toArray('#price-text > p');
  let price = gsap.timeline({
    scrollTrigger: {
      trigger: '#price',
      start: '-=200% top',
      end: '+=40% bottom',
    }
  });

  priceTexts.forEach(item => {
    price.from(item, { opacity: 0, duration: 1, ease: 'power1.inOut' })
  })

  // animation devices title appear
  let devices = gsap.timeline({
    scrollTrigger: {
      trigger: '#devices',
      start: 'top center',
    }
  });

  devices
    .from('#device-text', { opacity: 0, duration: 1, ease: 'power1.inOut' })
    .from("#device-list", { opacity: 0, duration: .5, ease: 'power1.inOut' })

  // animation devices scroll
  const deviceScroll = document.querySelectorAll('#device-list > div');
  const deviceWrapper = document.querySelector('#device-wrapper')
  const dividedBy = deviceWrapper.clientWidth > ((deviceScroll[0].clientWidth * 2)) ? 2 : 1;
  const deviceScrollWidth = ((deviceScroll.length - dividedBy) * deviceScroll[0].clientWidth) + ((deviceScroll.length - dividedBy) * 20);
  let deviceList = gsap.timeline({
    scrollTrigger: {
      trigger: '#devices',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
    }
  });

  deviceList
    .addLabel("device scroll")
    .to("#device-list", { x: `-${deviceScrollWidth}px`, duration: 1, ease: 'power1.inOut' })
    .to('#device-progress', { width: "100%", duration: 1, ease: 'power1.inOut' }, "device scroll")

  // animation benefit
  let benefitPanel = gsap.timeline({
    scrollTrigger: {
      trigger: '#benefit',
      start: 'top center',
    }
  });

  benefitPanel
    .from('#benefit-text', { opacity: 0, duration: 1, ease: 'power1.inOut' })
    .from("#benefit-list", { opacity: 0, duration: .5, ease: 'power1.inOut' })

  // animation benefit
  const benefitCard = gsap.utils.toArray("#benefit-list > div");
  benefitCard.forEach((item) => {
    const benefitIcon = item.querySelector('svg');
    const benefitContent = item.querySelector('#benefit-content')
    const benefit = gsap.timeline({ paused: true })
      .to(benefitIcon, { color: "#6FD2C0", duration: .5, ease: 'power1.inOut' })
      .from(benefitContent.children[1], { height: 0, marginTop: 0, opacity: 0, duration: .5, ease: 'power1.inOut' }, ">")
      .fromTo(item, { background: "linear-gradient(180deg, #FFF 0%, #FFF 60%, #FFF 100%" }, { background: "linear-gradient(180deg, #E6EFEF 0%, rgba(237, 237, 237, 0.30) 60%, rgba(255, 255, 255, 0.00) 100%)", duration: 1, ease: 'power1.inOut' }, ">")

    item.addEventListener("mouseenter", function () {
      benefit.timeScale(4).play();
    });

    item.addEventListener("mouseleave", function () {
      benefit.timeScale(4).reverse();
    });
  });

  // animation meet
  // let meetPanel = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '#meet',
  //     start: 'top center',
  //   }
  // });

  // meetPanel
  //   .from('#meet-text', { opacity: 0, duration: 1, ease: 'power1.inOut' })
  //   .from("#meet-list", { opacity: 0, duration: .5, ease: 'power1.inOut' }, "<")

  // animation how-works
  let howWorkPanel = gsap.timeline({
    scrollTrigger: {
      trigger: '#how-works',
      start: 'top center',
    }
  });

  howWorkPanel
    .from('#how-work-text', { opacity: 0, duration: 1, ease: 'power1.inOut' })
    .from("#how-work-list", { opacity: 0, duration: .5, ease: 'power1.inOut' })

  // animation how-works list
  let howWorkList = gsap.timeline({
    scrollTrigger: {
      trigger: '#how-works',
      start: 'top top',
      scrub: 1,
    }
  });

  let howWorkListItems = gsap.utils.toArray("#how-work-list > div");
  let howWorkListSVG = gsap.utils.toArray("#how-work-list > svg");
  howWorkListItems.forEach((block, index) => {
    if (index != 0) {
      const paddingPanel = (block.clientHeight + (51 * 3) + (24 * 3));
      const howWorkListItemEffect = gsap.timeline({
        scrollTrigger: {
          trigger: block,
          start: `top+=${paddingPanel}px top`,
          end: "bottom bottom",
          scrub: 1,
          toggleActions: "play reverse",
        },
      });

      howWorkListItemEffect
        .fromTo(block, {
          opacity: .4,
          background: "linear-gradient(180deg, #FFF 0%, #E6EFEF 100%)"
        }, {
          opacity: 1,
          background: "linear-gradient(180deg, #E6EFEF 0%, #E6EFEF 100%)",
          duration: 1,
          ease: 'power1.inOut'
        }).fromTo(howWorkListSVG[index], { opacity:.4 }, { opacity: 1, duration: 1, ease: 'power1.inOut' }, ">")
    }
  });

  howWorkList
    .addLabel("how-work-list")
    .to("#how-work-list", { y: "-100%", duration: 1, ease: 'power1.inOut' })

  // animation faq appear
  let faqPanel = gsap.timeline({
    scrollTrigger: {
      trigger: '#faq',
      start: 'top center',
    }
  });

  faqPanel
    .from('#faq-text', { opacity: 0, duration: 1, ease: 'power1.inOut' })
    .from("#faq-list", { opacity: 0, duration: .5, ease: 'power1.inOut' })

  let faqTriggerPanel = gsap.utils.toArray("#faq-list > div");
  let faqTriggerButton = gsap.utils.toArray("#faq-list > div > div");
  let faqTriggerContent = gsap.utils.toArray("#faq-list > div > p");
  let faqTriggerIcon = gsap.utils.toArray("#faq-list > div #faq-icon");
  faqTriggerPanel.forEach((item, index) => {
    
    const animationFaq = gsap.timeline({ paused: true })
    .fromTo(
      faqTriggerContent[index],
      { opacity: 0, height: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0 },
      { opacity: 1, height: faqTriggerContent[index].clientHeight, paddingLeft: 20, paddingRight: 20, paddingBottom: 20, duration: .3, ease: 'power1.inOut' }
    )

    faqTriggerButton[index].addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.dataset.open == 'false') {
        animationFaq.play()
        e.target.dataset.open = 'true'
        faqTriggerIcon[index].style.transform = 'rotate(90deg)'
      } else {
        animationFaq.reverse()
        e.target.dataset.open = 'false'
        faqTriggerIcon[index].style.transform = 'rotate(0deg)'
      }
    })
  })

  // animation bridge
  const bridgeWord = new SplitText('#bridge-text', { type: 'chars,words', })
  let bridge = gsap.timeline({
    scrollTrigger: {
      trigger: '#bridge',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
    }
  });

  bridge.to(bridgeWord.chars, {
    duration: 1,
    stagger: 0.1,
    color: "white",
    ease: 'power1.inOut'
  })

  // animation footer
  let footer = gsap.timeline({
    scrollTrigger: {
      trigger: '#footer',
      start: 'top center',
      end: '-=100% bottom',
      scrub: 1,
    }
  });

  footer
    .fromTo('#footer', { background: "linear-gradient(180deg, #FFF 12.56%, #fff 38.79%, #fff 100%)" }, { background: "linear-gradient(180deg, #FFF 12.56%, #EDEDED 38.79%, #6FD2C0 100%)", duration: 1, ease: 'power1.inOut' })
});

function horizontalLoop(items, config) {
  let timeline;
  items = gsap.utils.toArray(items);
  config = config || {};
  gsap.context(() => {
    let onChange = config.onChange,
      lastIndex = 0,
      tl = gsap.timeline({
        repeat: config.repeat, onUpdate: onChange && function () {
          let i = tl.closestIndex();
          if (lastIndex !== i) {
            lastIndex = i;
            onChange(items[i], i);
          }
        }, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      spaceBefore = [],
      xPercents = [],
      curIndex = 0,
      indexIsDirty = false,
      center = config.center,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
      timeOffset = 0,
      container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
      totalWidth,
      getTotalWidth = () => items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + spaceBefore[0] + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0),
      populateWidths = () => {
        let b1 = container.getBoundingClientRect(), b2;
        items.forEach((el, i) => {
          widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
          xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 + gsap.getProperty(el, "xPercent"));
          b2 = el.getBoundingClientRect();
          spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
          b1 = b2;
        });
        gsap.set(items, {
          xPercent: i => xPercents[i]
        });
        totalWidth = getTotalWidth();
      },
      timeWrap,
      populateOffsets = () => {
        timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
        center && times.forEach((t, i) => {
          times[i] = timeWrap(tl.labels["label" + i] + tl.duration() * widths[i] / 2 / totalWidth - timeOffset);
        });
      },
      getClosest = (values, value, wrap) => {
        let i = values.length,
          closest = 1e10,
          index = 0, d;
        while (i--) {
          d = Math.abs(values[i] - value);
          if (d > wrap / 2) {
            d = wrap - d;
          }
          if (d < closest) {
            closest = d;
            index = i;
          }
        }
        return index;
      },
      populateTimeline = () => {
        let i, item, curX, distanceToStart, distanceToLoop;
        tl.clear();
        for (i = 0; i < length; i++) {
          item = items[i];
          curX = xPercents[i] / 100 * widths[i];
          distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
          distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
          tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
            .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
            .add("label" + i, distanceToStart / pixelsPerSecond);
          times[i] = distanceToStart / pixelsPerSecond;
        }
        timeWrap = gsap.utils.wrap(0, tl.duration());
      },
      refresh = (deep) => {
        let progress = tl.progress();
        tl.progress(0, true);
        populateWidths();
        deep && populateTimeline();
        populateOffsets();
        deep && tl.draggable ? tl.time(times[curIndex], true) : tl.progress(progress, true);
      },
      onResize = () => refresh(true),
      proxy;
    gsap.set(items, { x: 0 });
    populateWidths();
    populateTimeline();
    populateOffsets();
    window.addEventListener("resize", onResize);
    function toIndex(index, vars) {
      vars = vars || {};
      (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex && index !== curIndex) {
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      if (time < 0 || time > tl.duration()) {
        vars.modifiers = { time: timeWrap };
      }
      curIndex = newIndex;
      vars.overwrite = true;
      gsap.killTweensOf(proxy);
      return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
    }
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.closestIndex = setCurrent => {
      let index = getClosest(times, tl.time(), tl.duration());
      if (setCurrent) {
        curIndex = index;
        indexIsDirty = false;
      }
      return index;
    };
    tl.current = () => indexIsDirty ? tl.closestIndex(true) : curIndex;
    tl.next = vars => toIndex(tl.current() + 1, vars);
    tl.previous = vars => toIndex(tl.current() - 1, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true);
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    if (config.draggable && typeof (Draggable) === "function") {
      proxy = document.createElement("div")
      let wrap = gsap.utils.wrap(0, 1),
        ratio, startProgress, draggable, dragSnap, lastSnap, initChangeX, wasPlaying,
        align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
        syncIndex = () => tl.closestIndex(true);
      typeof (InertiaPlugin) === "undefined" && console.warn("InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club");
      draggable = Draggable.create(proxy, {
        trigger: items[0].parentNode,
        type: "x",
        onPressInit() {
          let x = this.x;
          gsap.killTweensOf(tl);
          wasPlaying = !tl.paused();
          tl.pause();
          startProgress = tl.progress();
          refresh();
          ratio = 1 / totalWidth;
          initChangeX = (startProgress / -ratio) - x;
          gsap.set(proxy, { x: startProgress / -ratio });
        },
        onDrag: align,
        onThrowUpdate: align,
        overshootTolerance: 0,
        inertia: true,
        snap(value) {
          if (Math.abs(startProgress / -ratio - this.x) < 10) {
            return lastSnap + initChangeX
          }
          let time = -(value * ratio) * tl.duration(),
            wrappedTime = timeWrap(time),
            snapTime = times[getClosest(times, wrappedTime, tl.duration())],
            dif = snapTime - wrappedTime;
          Math.abs(dif) > tl.duration() / 2 && (dif += dif < 0 ? tl.duration() : -tl.duration());
          lastSnap = (time + dif) / tl.duration() / -ratio;
          return lastSnap;
        },
        onRelease() {
          syncIndex();
          draggable.isThrowing && (indexIsDirty = true);
        },
        onThrowComplete: () => {
          syncIndex();
          wasPlaying && tl.play();
        }
      })[0];
      tl.draggable = draggable;
    }
    tl.closestIndex(true);
    lastIndex = curIndex;
    onChange && onChange(items[curIndex], curIndex);
    timeline = tl;
    return () => window.removeEventListener("resize", onResize); // cleanup
  });
  return timeline;
}