// XEN LABS — sys_time readout (progressive enhancement, non-critical)
(function () {
    var el = document.getElementById('sysTime');
    if (!el) return;

    function tick() {
        var now = new Date();
        var pad = function (n) { return String(n).padStart(2, '0'); };
        el.textContent = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
    }

    tick();
    setInterval(tick, 1000);
})();
