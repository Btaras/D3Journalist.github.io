// function pathPrepare ($el) {
//               var lineLength = $el[0].getTotalLength();
//               $el.css("stroke-dasharray", lineLength);
//               $el.css("stroke-dashoffset", lineLength);
//             }

            var $word2 = $("path#word2");
            var $dot2 = $("path#dot2");

            // prepare SVG
            pathPrepare($word2);
            pathPrepare($dot2);

            // init controller
            var controller = new ScrollMagic.Controller();

            // build tween
            var tween = new TimelineMax()
              .add(TweenMax.to($word, 2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
              .add(TweenMax.to($dot, 2, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
              .add(TweenMax.to("path#dot2", 1, {stroke: "green", ease:Linear.easeNone}), 0)     // change color during the whole thing
              .add(TweenMax.to("path#word2", 1, {stroke: "red", ease:Linear.easeNone}), 0);     // change color during the whole thing


            // build scene
            var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 10000, tweenChanges: true})
                    .setTween(tween)
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);

            // var scene1 = new ScrollMagic.Scene({
            //       triggerElement: "#pinned-trigger1", // point of execution
            //       duration: $(window).height() - 100, // pin element for the window height - 1
            //       triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
            //       reverse: true // allows the effect to trigger when scrolled in the reverse direction
            //     })
            //     .setPin("#pinned-element1") // the element we want to pin
            //     .addTo(controller);


            var scene = new ScrollMagic.Scene({
                triggerElement: "#pinned-trigger2", duration: 1000,
                triggerHook: 1000})
                .setPin("#pinned-element2")
                .addIndicators({name: "1 (f,dgnsdflbnvldfznb: 1000)"}) // add indicators (requires plugin)
                .addTo(controller)