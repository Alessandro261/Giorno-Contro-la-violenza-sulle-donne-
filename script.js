var bigVedio = function() {
                // initialize BigVideo
                var BV = new $.BigVideo({
                        container: $('.video-wrap'),
                        forceAutoplay: isTouch
                    }),
                    V = $('.video-wrap').attr('data-video-wrap'),
                    img = $('.video-wrap').attr('data-img-wrap');
                if (typeof V != typeof undefined) {
                    if (!isTouch) {
                        BV.init();
                        BV.show(V, {
                            ambient: true,
                            doLoop: true
                        });
                    } else {
                        BV.init();
                        BV.show(img);
                    }
                }
            };