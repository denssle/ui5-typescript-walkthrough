"use strict";sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],function(e,t){"use strict";const o=e.extend("ui5.walkthrough.controller.HelloPanel",{onShowHello:function e(){const o=this.getView()?.getModel()?.getProperty("/recipient/name");const n=this.getView()?.getModel("i18n")?.getResourceBundle();const s=n.getText("helloMsg",[o])||"no text defined";t.show(s)}});return o});
//# sourceMappingURL=HelloPanel.controller.js.map