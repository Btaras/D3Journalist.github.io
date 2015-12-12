




            function pathPrepare ($el) {
              var lineLength = $el[0].getTotalLength();
              $el.css("stroke-dasharray", lineLength);
              $el.css("stroke-dashoffset", lineLength);
            }

            var $word = $("path#word");
            var $dot = $("path#dot");

            // prepare SVG
            pathPrepare($word);
            pathPrepare($dot);

            // init controller
            var controller = new ScrollMagic.Controller();

            // build tween
            var tween = new TimelineMax()
              .add(TweenMax.to($word, 2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
              .add(TweenMax.to($dot, 2, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
              .add(TweenMax.to("path#dot", 0, {stroke: "black", ease:Linear.easeNone}), 1)     // change color during the whole thing
              .add(TweenMax.to("path#word", 0, {stroke: "grey", ease:Linear.easeNone}), 1);     // change color during the whole thing


            // build scene
            var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 15000, tweenChanges: true})
                    .setTween(tween)
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);


            var scene = new ScrollMagic.Scene({
                triggerElement: "#pinned-trigger1", duration: 15000,
                triggerHook: -100})
                .setPin("#pinned-element1")
                // .addIndicators({name: "1 (duration: 1000)"}) // add indicators (requires plugin)
                .addTo(controller)

['#9e0142','#d53e4f','#f46d43','#fdae61','#fee08b','#ffffbf','#e6f598','#abdda4','#66c2a5','#3288bd','#5e4fa2']


            var scene1 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 0,
                triggerHook: 0})
                                .setTween(".test1", 1, {fill: "#5e4fa2", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "text text text jjjjjjjjjjj"}) // add indicators (requires plugin)
                                .addTo(controller);

            var scene2 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 110,
                triggerHook: 0})
                                .setTween(".test2", 1, {fill: "#5e4fa2", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "hook"}) // add indicators (requires plugin)
                                .addTo(controller);

            var scene3 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 350,
                triggerHook: 0})
                                .setTween(".test3", 1, {fill: "#5e4fa2", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

            var scene4 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 700,
                triggerHook: 0})
                                .setTween(".test4", 1, {fill: "#3288bd", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

            var scene5 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 900,
                triggerHook: 0})
                                .setTween(".test5", 1, {fill: "#3288bd", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

             var scene6 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 1200,
                triggerHook: 0})
                                .setTween(".test6", 1, {fill: "#66c2a5", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

            var scene7 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 1500,
                triggerHook: 0})
                                .setTween(".test7", 1, {fill: "#66c2a5", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

            var scene8 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 1700,
                triggerHook: 0})
                                .setTween(".test8", 1, {fill: "#66c2a5", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

            var scene9 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 2000,
                triggerHook: 0})
                                .setTween(".test9", 1, {fill: "#abdda4", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

             var scene10 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 2100,
                triggerHook: 0})
                                .setTween(".test10", 1, {fill: "#abdda4", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

            var scene11 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 2200,
                triggerHook: 0})
                                .setTween(".test11", 1, {fill: "#e6f598", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

            var scene12 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 2500,
                triggerHook: 0})
                                .setTween(".test12", 1, {fill: "#e6f598", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

            var scene13 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 2800,
                triggerHook: 0})
                                .setTween(".test13", 1, {fill: "#ffffbf", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

             var scene14 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 3100,
                triggerHook: 0})
                                .setTween(".test14", 1, {fill: "#ffffbf", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "text text text jjjjjjjjjjj"}) // add indicators (requires plugin)
                                .addTo(controller);

            var scene15 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 3500,
                triggerHook: 0})
                                .setTween(".test15", 1, {fill: "#fee08b", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

            var scene16 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 3900,
                triggerHook: 0})
                                .setTween(".test16", 1, {fill: "#fee08b", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

            var scene17 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 4200,
                triggerHook: 0})
                                .setTween(".test17", 1, {fill: "#fdae61", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

             var scene18 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 4500,
                triggerHook: 0})
                                .setTween(".test18", 1, {fill: "#fdae61", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

            var scene19 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 5000,
                triggerHook: 0})
                                .setTween(".test19", 1, {fill: "#f46d43", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

            var scene20 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 5300,
                triggerHook: 0})
                                .setTween(".test20", 1, {fill: "#d53e4f", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

            var scene21 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 5800,
                triggerHook: 0})
                                .setTween(".test21", 1, {fill: "#d53e4f", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

            var scene22 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 6300,
                triggerHook: 0})
                                .setTween(".test22", 1, {fill: "#9e0142", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

            var scene23 = new ScrollMagic.Scene({
                                    triggerElement: "#trigger1", duration: 50, offset: 7000,
                triggerHook: 0})
                                .setTween(".test23", 1, {fill: "#9e0142", scale: 1}) // trigger a TweenMax.to tween
                                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);








    var images = [
        "img/example/1.png",
        "img/example/2.png",
        "img/example/3.png",
        "img/example/4.png",
        "img/example/5.png",
        "img/example/6.png",
        "img/example/7.png",
        "img/example/8.png",
        "img/example/9.png",
        "img/example/10.png",
        "img/example/11.png",
        "img/example/12.png",
        "img/example/13.png",
        "img/example/14.png",
        "img/example/15.png",
        "img/example/16.png",
        "img/example/17.png",
        "img/example/18.png",
        "img/example/19.png"
        
    ];

    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var obj = {curImg: 0};

    // create tween
    var tween2 = TweenMax.to(obj, 0.5,
        {
            curImg: images.length - 1,  // animate propery curImg to number of images
            roundProps: "curImg",               // only integers so it can be used as an array index
            repeat: 3,                                  // repeat 3 times
            immediateRender: true,          // load first image automatically
            ease: Linear.easeNone,          // show every image the same ammount of time
            onUpdate: function () {
              $("#myimg").attr("src", images[obj.curImg]); // set the image source
            }
        }
    );

    // init controller

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: -300})
                    .setTween(tween2)
                    // .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);

    // handle form change
    $("form.move input[name=duration]:radio").change(function () {
        scene.duration($(this).val());
    });

// Text


$(function () { // wait for document ready
                // build scene

    var tween30 = TweenMax.to(".animate30", 2, {left: 200}, {left: 200, ease: Back.easeOut, ease: Back.easeIn}, 0);
                var scene1 = new ScrollMagic.Scene({triggerElement: "#pin30", duration: 300})
                                .setPin("#pin30")
                                .setClassToggle("#pin30", "black")
                                .setTween(tween30)
                                // .addIndicators({name: ""}) // add indicators (requires plugin)
                                .addTo(controller);

                       
                var tween31 = TweenMax.to(".animate31", 5, {
    backgroundColor: 'green',
   opacity: 1,
    left: 150,
    scale: 1.5,
    rotation: 0
} );
                var scene2 = new ScrollMagic.Scene({triggerElement: "#pin31", duration: 300})
                                .setPin("#pin31")
                                .setClassToggle("#pin31", "black")
                                .setTween(tween31)
                                // .addIndicators({name: ""}) // add indicators (requires plugin)
                                .addTo(controller);

                var tween32 = TweenMax.to(".animate32", 5, {
    backgroundColor: 'rgb(255, 39, 46)',
   opacity: 1,
    left: 150,
    scale: 1.5,
    rotation: 0
} );
                var scene3 = new ScrollMagic.Scene({triggerElement: "#pin32", duration: 300})
                                .setPin("#pin32")
                                .setClassToggle("#pin32", "black")
                                .setTween(tween32)
                                // .addIndicators({name: ""}) // add indicators (requires plugin)
                                .addTo(controller);

                var tween33 = TweenMax.to(".animate33", 5, {
    backgroundColor: 'rgb(255, 39, 46)',
   opacity: 1,
    left: 150,
    scale: 1.5,
    rotation: 0
} );
                var scene4 = new ScrollMagic.Scene({triggerElement: "#pin33", duration: 300})
                                .setPin("#pin33")
                                .setClassToggle("#pin33", "black")
                                .setTween(tween33)
                                // .addIndicators({name: ""}) // add indicators (requires plugin)
                                .addTo(controller);

                var tween34 = TweenMax.to(".animate34", 5, {
    backgroundColor: 'rgb(255, 39, 46)',
   opacity: 1,
    left: 150,
    scale: 1.5,
    rotation: 0
} );
                var scene5 = new ScrollMagic.Scene({triggerElement: "#pin34", duration: 300})
                                .setPin("#pin34")
                                .setClassToggle("#pin34", "black")
                                .setTween(tween34)
                                // .addIndicators({name: ""}) // add indicators (requires plugin)
                                .addTo(controller);

                var tween35 = TweenMax.to(".animate35", 5, {
    backgroundColor: 'rgb(255, 39, 46)',
   opacity: 1,
    left: 150,
    scale: 1.5,
    rotation: 0
} );
                var scene6 = new ScrollMagic.Scene({triggerElement: "#pin35", duration: 300})
                                .setPin("#pin35")
                                .setClassToggle("#pin35", "black")
                                .setTween(tween35)
                                // .addIndicators({name: ""}) // add indicators (requires plugin)
                                .addTo(controller);
                
                var tween36 = TweenMax.to(".animate36", 5, {
    backgroundColor: 'rgb(255, 39, 46)',
    opacity: 1,
    left: 150,
    scale: 1.5,
    rotation: 0
} );
                var scene7 = new ScrollMagic.Scene({triggerElement: "#pin36", duration: 300})
                                .setPin("#pin36")
                                .setClassToggle("#pin36", "black")
                                .setTween(tween36)
                                // .addIndicators({name: ""}) // add indicators (requires plugin)
                                .addTo(controller);
              
            });




