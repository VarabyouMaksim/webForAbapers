sap.ui.define(["sap/ui/test/opaQunit","com/myorg/myUI5App/test/integration/pages/App"],function(e){"use strict";e("should show correct number of nested pages",function(e,t,p){e.iStartMyApp();p.onTheAppPage.iShouldSeePageCount(1);p.iTeardownMyApp()})});