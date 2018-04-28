var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./neuron-net", "./neuron"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const neuron_net_1 = __importDefault(require("./neuron-net"));
    exports.NeuronNet = neuron_net_1.default;
    const neuron_1 = __importDefault(require("./neuron"));
    exports.Neuron = neuron_1.default;
});
