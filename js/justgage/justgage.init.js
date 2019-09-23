document.addEventListener("DOMContentLoaded", function (e) {
    var t, n, a, i, o, m, l, d, d2, d3,
        t = new JustGage({
            id: "g1",
            value: getRandomInt(0, 100),
            min: 0,
            max: 100,
            title: "Custom Width",
            label: "miles traveled",
            gaugeWidthScale: .2
        }),
        n = new JustGage({
            id: "g2",
            value: getRandomInt(0, 100),
            min: 0,
            max: 100,
            title: "Custom Shadow",
            label: "",
            shadowOpacity: 1,
            shadowSize: 10,
            shadowVerticalOffset: 5
        }),
        a = new JustGage({
            id: "g3",
            value: getRandomInt(0, 100),
            min: 0,
            max: 100,
            title: "Custom Colors",
            label: "",
            levelColors: ["#6ed3cf", "#F5A3E3", "#9068be"]
        }),
        i = new JustGage({
            id: "g4",
            value: getRandomInt(0, 100),
            min: 0,
            max: 100,
            title: "Hide Labels",
            hideMinMax: !0
        }),
        o = new JustGage({
            id: "g5",
            value: getRandomInt(0, 100),
            min: 0,
            max: 100,
            title: "Animation Type",
            label: "",
            startAnimationTime: 2e3,
            startAnimationType: ">",
            refreshAnimationTime: 1e3,
            refreshAnimationType: "bounce"
        }),
        m = new JustGage({
            id: "g6",
            value: getRandomInt(0, 100),
            min: 0,
            max: 100,
            title: "Minimal",
            label: "",
            hideMinMax: !0,
            gaugeColor: "#fff",
            levelColors: ["#000"],
            hideInnerShadow: !0,
            startAnimationTime: 1,
            startAnimationType: "linear",
            refreshAnimationTime: 1,
            refreshAnimationType: "linear"
        }),
        l = new JustGage({
            id: "g7",
            value: 72,
            min: 0,
            max: 100,
            donut: !0,
            gaugeWidthScale: .6,
            counter: !0,
            hideInnerShadow: !0
        }),
        d = new JustGage({
            id: "g8",
            value: 72.00,
            min: 0,
            max: 100,
            decimals: 2,
            gaugeWidthScale: .7,
            customSectors: [{color: "#00bce1", lo: 0, hi: 60}, {color: "#f4762d", lo: 60, hi: 100}],
            counter: !0
        }),
        d2 = new JustGage({
            id: "g8_02",
            value: 40.00,
            min: 0,
            max: 100,
            decimals: 2,
            gaugeWidthScale: .7,
            customSectors: [{color: "#54FEBE", lo: 0, hi: 70}, {color: "#e2583e", lo: 70, hi: 100}],
            counter: !0
        }),
        d3 = new JustGage({
            id: "g8_03",
            value: 47.00,
            min: 0,
            max: 100,
            decimals: 2,
            gaugeWidthScale: .7,
            customSectors: [{color: "#53b0ae", lo: 0, hi: 60}, {color: "#F0c05a", lo: 60, hi: 100}],
            counter: !0
        })
    document.getElementById("g8_refresh").addEventListener("click", function () {
        d.refresh(getRandomInt(d.config.value, 100))
    }), document.getElementById("g8_02_refresh").addEventListener("click", function () {
        d2.refresh(getRandomInt(d2.config.value, 100))
    }), document.getElementById("g8_03_refresh").addEventListener("click", function () {
        d3.refresh(getRandomInt(d3.config.value, 100))
    }), document.getElementById("g8_reset").addEventListener("click", function () {
        d.refresh(0)
    }), document.getElementById("g8_02_reset").addEventListener("click", function () {
        d2.refresh(0)
    }), document.getElementById("g8_03_reset").addEventListener("click", function () {
        d3.refresh(0)
    }), setInterval(function () {
        t.refresh(getRandomInt(0, 100)), n.refresh(getRandomInt(0, 100)), a.refresh(getRandomInt(0, 100)), i.refresh(getRandomInt(0, 100)), o.refresh(getRandomInt(0, 100)), m.refresh(getRandomInt(0, 100)), l.refresh(getRandomInt(0, 100))
    }, 2500)

})