"use strict";sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","../model/formatter","sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(t,e,o,n,i){"use strict";function r(t){return t&&t.__esModule&&typeof t.default!=="undefined"?t.default:t}const s=r(o);const c=t.extend("ui5.walkthrough.controller.App",{constructor:function e(){t.prototype.constructor.apply(this,arguments);this.formatter=s},onInit:function t(){const o=new e({currency:"EUR"});this.getView()?.setModel(o,"view")},onFilterInvoices:function t(e){const o=[];const r=e.getParameter("query");if(r){o.push(new n("ProductName",i.Contains,r))}const s=this.byId("invoiceList");const c=s?.getBinding("items");c?.filter(o)},onPress:function t(){const e=this.getOwnerComponent().getRouter();e.navTo("detail")}});return c});
//# sourceMappingURL=InvoiceList.controller.js.map