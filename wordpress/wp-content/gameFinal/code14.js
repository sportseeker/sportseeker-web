gdjs.lvl_952_95comCode = {};
gdjs.lvl_952_95comCode.GDpauseObjects1= [];
gdjs.lvl_952_95comCode.GDpauseObjects2= [];
gdjs.lvl_952_95comCode.GDpause_95lObjects1= [];
gdjs.lvl_952_95comCode.GDpause_95lObjects2= [];
gdjs.lvl_952_95comCode.GDexit2Objects1= [];
gdjs.lvl_952_95comCode.GDexit2Objects2= [];
gdjs.lvl_952_95comCode.GDexitObjects1= [];
gdjs.lvl_952_95comCode.GDexitObjects2= [];
gdjs.lvl_952_95comCode.GDplayObjects1= [];
gdjs.lvl_952_95comCode.GDplayObjects2= [];
gdjs.lvl_952_95comCode.GDpau_95tObjects1= [];
gdjs.lvl_952_95comCode.GDpau_95tObjects2= [];
gdjs.lvl_952_95comCode.GDresumeObjects1= [];
gdjs.lvl_952_95comCode.GDresumeObjects2= [];
gdjs.lvl_952_95comCode.GDExitObjects1= [];
gdjs.lvl_952_95comCode.GDExitObjects2= [];
gdjs.lvl_952_95comCode.GDscoreObjects1= [];
gdjs.lvl_952_95comCode.GDscoreObjects2= [];
gdjs.lvl_952_95comCode.GDlivesObjects1= [];
gdjs.lvl_952_95comCode.GDlivesObjects2= [];
gdjs.lvl_952_95comCode.GDcoachObjects1= [];
gdjs.lvl_952_95comCode.GDcoachObjects2= [];
gdjs.lvl_952_95comCode.GDpop_95upObjects1= [];
gdjs.lvl_952_95comCode.GDpop_95upObjects2= [];
gdjs.lvl_952_95comCode.GDlvl3_95iObjects1= [];
gdjs.lvl_952_95comCode.GDlvl3_95iObjects2= [];
gdjs.lvl_952_95comCode.GDcentreObjects1= [];
gdjs.lvl_952_95comCode.GDcentreObjects2= [];
gdjs.lvl_952_95comCode.GDquizObjects1= [];
gdjs.lvl_952_95comCode.GDquizObjects2= [];
gdjs.lvl_952_95comCode.GDscoreObjects1= [];
gdjs.lvl_952_95comCode.GDscoreObjects2= [];
gdjs.lvl_952_95comCode.GDbg1Objects1= [];
gdjs.lvl_952_95comCode.GDbg1Objects2= [];

gdjs.lvl_952_95comCode.conditionTrue_0 = {val:false};
gdjs.lvl_952_95comCode.condition0IsTrue_0 = {val:false};
gdjs.lvl_952_95comCode.condition1IsTrue_0 = {val:false};


gdjs.lvl_952_95comCode.mapOfGDgdjs_46lvl_95952_9595comCode_46GDquizObjects1Objects = Hashtable.newFrom({"quiz": gdjs.lvl_952_95comCode.GDquizObjects1});gdjs.lvl_952_95comCode.eventsList0 = function(runtimeScene) {

{


gdjs.lvl_952_95comCode.condition0IsTrue_0.val = false;
{
gdjs.lvl_952_95comCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.lvl_952_95comCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "q6", false);
}}

}


};gdjs.lvl_952_95comCode.mapOfGDgdjs_46lvl_95952_9595comCode_46GDquizObjects1Objects = Hashtable.newFrom({"quiz": gdjs.lvl_952_95comCode.GDquizObjects1});gdjs.lvl_952_95comCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.lvl_952_95comCode.GDcentreObjects1.createFrom(runtimeScene.getObjects("centre"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.lvl_952_95comCode.GDcentreObjects1.length !== 0 ? gdjs.lvl_952_95comCode.GDcentreObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.lvl_952_95comCode.GDquizObjects1.createFrom(runtimeScene.getObjects("quiz"));

gdjs.lvl_952_95comCode.condition0IsTrue_0.val = false;
{
gdjs.lvl_952_95comCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.lvl_952_95comCode.mapOfGDgdjs_46lvl_95952_9595comCode_46GDquizObjects1Objects, runtimeScene, true, false);
}if (gdjs.lvl_952_95comCode.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_952_95comCode.GDquizObjects1 */
{for(var i = 0, len = gdjs.lvl_952_95comCode.GDquizObjects1.length ;i < len;++i) {
    gdjs.lvl_952_95comCode.GDquizObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.lvl_952_95comCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.lvl_952_95comCode.GDquizObjects1.createFrom(runtimeScene.getObjects("quiz"));

gdjs.lvl_952_95comCode.condition0IsTrue_0.val = false;
{
gdjs.lvl_952_95comCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.lvl_952_95comCode.mapOfGDgdjs_46lvl_95952_9595comCode_46GDquizObjects1Objects, runtimeScene, true, true);
}if (gdjs.lvl_952_95comCode.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_952_95comCode.GDquizObjects1 */
{for(var i = 0, len = gdjs.lvl_952_95comCode.GDquizObjects1.length ;i < len;++i) {
    gdjs.lvl_952_95comCode.GDquizObjects1[i].setAnimation(0);
}
}}

}


{


{
gdjs.lvl_952_95comCode.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.lvl_952_95comCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.lvl_952_95comCode.GDscoreObjects1[i].setString("Total Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


};

gdjs.lvl_952_95comCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lvl_952_95comCode.GDpauseObjects1.length = 0;
gdjs.lvl_952_95comCode.GDpauseObjects2.length = 0;
gdjs.lvl_952_95comCode.GDpause_95lObjects1.length = 0;
gdjs.lvl_952_95comCode.GDpause_95lObjects2.length = 0;
gdjs.lvl_952_95comCode.GDexit2Objects1.length = 0;
gdjs.lvl_952_95comCode.GDexit2Objects2.length = 0;
gdjs.lvl_952_95comCode.GDexitObjects1.length = 0;
gdjs.lvl_952_95comCode.GDexitObjects2.length = 0;
gdjs.lvl_952_95comCode.GDplayObjects1.length = 0;
gdjs.lvl_952_95comCode.GDplayObjects2.length = 0;
gdjs.lvl_952_95comCode.GDpau_95tObjects1.length = 0;
gdjs.lvl_952_95comCode.GDpau_95tObjects2.length = 0;
gdjs.lvl_952_95comCode.GDresumeObjects1.length = 0;
gdjs.lvl_952_95comCode.GDresumeObjects2.length = 0;
gdjs.lvl_952_95comCode.GDExitObjects1.length = 0;
gdjs.lvl_952_95comCode.GDExitObjects2.length = 0;
gdjs.lvl_952_95comCode.GDscoreObjects1.length = 0;
gdjs.lvl_952_95comCode.GDscoreObjects2.length = 0;
gdjs.lvl_952_95comCode.GDlivesObjects1.length = 0;
gdjs.lvl_952_95comCode.GDlivesObjects2.length = 0;
gdjs.lvl_952_95comCode.GDcoachObjects1.length = 0;
gdjs.lvl_952_95comCode.GDcoachObjects2.length = 0;
gdjs.lvl_952_95comCode.GDpop_95upObjects1.length = 0;
gdjs.lvl_952_95comCode.GDpop_95upObjects2.length = 0;
gdjs.lvl_952_95comCode.GDlvl3_95iObjects1.length = 0;
gdjs.lvl_952_95comCode.GDlvl3_95iObjects2.length = 0;
gdjs.lvl_952_95comCode.GDcentreObjects1.length = 0;
gdjs.lvl_952_95comCode.GDcentreObjects2.length = 0;
gdjs.lvl_952_95comCode.GDquizObjects1.length = 0;
gdjs.lvl_952_95comCode.GDquizObjects2.length = 0;
gdjs.lvl_952_95comCode.GDscoreObjects1.length = 0;
gdjs.lvl_952_95comCode.GDscoreObjects2.length = 0;
gdjs.lvl_952_95comCode.GDbg1Objects1.length = 0;
gdjs.lvl_952_95comCode.GDbg1Objects2.length = 0;

gdjs.lvl_952_95comCode.eventsList1(runtimeScene);
return;

}

gdjs['lvl_952_95comCode'] = gdjs.lvl_952_95comCode;
