var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameramode, filter) {
        this.cameramode = cameramode;
        this.filter = filter;
        this.cameramode = cameramode;
        this.filter = filter;
    }
    TakePhoto.prototype.getRealTime = function () {
        return 10;
    };
    return TakePhoto;
}());
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(cameramode, filter, burst) {
        var _this = _super.call(this, cameramode, filter) || this;
        _this.cameramode = cameramode;
        _this.filter = filter;
        _this.burst = burst;
        return _this;
    }
    Instagram.prototype.getSepia = function () {
        console.log("sepia");
    };
    return Instagram;
}(TakePhoto));
var me = new Instagram('bright', "test", 20);
me.getSepia();
me.getRealTime();
