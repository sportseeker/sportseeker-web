gdjs.lvl_951_95com_95wCode = {};
gdjs.lvl_951_95com_95wCode.GDpauseObjects1= [];
gdjs.lvl_951_95com_95wCode.GDpauseObjects2= [];
gdjs.lvl_951_95com_95wCode.GDpause_95lObjects1= [];
gdjs.lvl_951_95com_95wCode.GDpause_95lObjects2= [];
gdjs.lvl_951_95com_95wCode.GDexit2Objects1= [];
gdjs.lvl_951_95com_95wCode.GDexit2Objects2= [];
gdjs.lvl_951_95com_95wCode.GDexitObjects1= [];
gdjs.lvl_951_95com_95wCode.GDexitObjects2= [];
gdjs.lvl_951_95com_95wCode.GDplayObjects1= [];
gdjs.lvl_951_95com_95wCode.GDplayObjects2= [];
gdjs.lvl_951_95com_95wCode.GDpau_95tObjects1= [];
gdjs.lvl_951_95com_95wCode.GDpau_95tObjects2= [];
gdjs.lvl_951_95com_95wCode.GDresumeObjects1= [];
gdjs.lvl_951_95com_95wCode.GDresumeObjects2= [];
gdjs.lvl_951_95com_95wCode.GDExitObjects1= [];
gdjs.lvl_951_95com_95wCode.GDExitObjects2= [];
gdjs.lvl_951_95com_95wCode.GDscoreObjects1= [];
gdjs.lvl_951_95com_95wCode.GDscoreObjects2= [];
gdjs.lvl_951_95com_95wCode.GDlivesObjects1= [];
gdjs.lvl_951_95com_95wCode.GDlivesObjects2= [];
gdjs.lvl_951_95com_95wCode.GDcoachObjects1= [];
gdjs.lvl_951_95com_95wCode.GDcoachObjects2= [];
gdjs.lvl_951_95com_95wCode.GDpop_95upObjects1= [];
gdjs.lvl_951_95com_95wCode.GDpop_95upObjects2= [];
gdjs.lvl_951_95com_95wCode.GDlvl3_95iObjects1= [];
gdjs.lvl_951_95com_95wCode.GDlvl3_95iObjects2= [];
gdjs.lvl_951_95com_95wCode.GDbgObjects1= [];
gdjs.lvl_951_95com_95wCode.GDbgObjects2= [];
gdjs.lvl_951_95com_95wCode.GDcentreObjects1= [];
gdjs.lvl_951_95com_95wCode.GDcentreObjects2= [];
gdjs.lvl_951_95com_95wCode.GDquizObjects1= [];
gdjs.lvl_951_95com_95wCode.GDquizObjects2= [];
gdjs.lvl_951_95com_95wCode.GDscoreObjects1= [];
gdjs.lvl_951_95com_95wCode.GDscoreObjects2= [];

gdjs.lvl_951_95com_95wCode.conditionTrue_0 = {val:false};
gdjs.lvl_951_95com_95wCode.condition0IsTrue_0 = {val:false};
gdjs.lvl_951_95com_95wCode.condition1IsTrue_0 = {val:false};


gdjs.lvl_951_95com_95wCode.mapOfGDgdjs_46lvl_95951_9595com_9595wCode_46GDquizObjects1Objects = Hashtable.newFrom({"quiz": gdjs.lvl_951_95com_95wCode.GDquizObjects1});gdjs.lvl_951_95com_95wCode.eventsList0 = function(runtimeScene) {

{


gdjs.lvl_951_95com_95wCode.condition0IsTrue_0.val = false;
{
gdjs.lvl_951_95com_95wCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.lvl_951_95com_95wCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "q1_w", false);
}}

}


};gdjs.lvl_951_95com_95wCode.mapOfGDgdjs_46lvl_95951_9595com_9595wCode_46GDquizObjects1Objects = Hashtable.newFrom({"quiz": gdjs.lvl_951_95com_95wCode.GDquizObjects1});gdjs.lvl_951_95com_95wCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.lvl_951_95com_95wCode.GDcentreObjects1.createFrom(runtimeScene.getObjects("centre"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.lvl_951_95com_95wCode.GDcentreObjects1.length !== 0 ? gdjs.lvl_951_95com_95wCode.GDcentreObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.lvl_951_95com_95wCode.GDquizObjects1.createFrom(runtimeScene.getObjects("quiz"));

gdjs.lvl_951_95com_95wCode.condition0IsTrue_0.val = false;
{
gdjs.lvl_951_95com_95wCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.lvl_951_95com_95wCode.mapOfGDgdjs_46lvl_95951_9595com_9595wCode_46GDquizObjects1Objects, runtimeScene, true, false);
}if (gdjs.lvl_951_95com_95wCode.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_951_95com_95wCode.GDquizObjects1 */
{for(var i = 0, len = gdjs.lvl_951_95com_95wCode.GDquizObjects1.length ;i < len;++i) {
    gdjs.lvl_951_95com_95wCode.GDquizObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.lvl_951_95com_95wCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.lvl_951_95com_95wCode.GDquizObjects1.createFrom(runtimeScene.getObjects("quiz"));

gdjs.lvl_951_95com_95wCode.condition0IsTrue_0.val = false;
{
gdjs.lvl_951_95com_95wCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.lvl_951_95com_95wCode.mapOfGDgdjs_46lvl_95951_9595com_9595wCode_46GDquizObjects1Objects, runtimeScene, true, true);
}if (gdjs.lvl_951_95com_95wCode.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_951_95com_95wCode.GDquizObjects1 */
{for(var i = 0, len = gdjs.lvl_951_95com_95wCode.GDquizObjects1.length ;i < len;++i) {
    gdjs.lvl_951_95com_95wCode.GDquizObjects1[i].setAnimation(0);
}
}}

}


{


{
gdjs.lvl_951_95com_95wCode.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.lvl_951_95com_95wCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.lvl_951_95com_95wCode.GDscoreObjects1[i].setString("Total Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


};

gdjs.lvl_951_95com_95wCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lvl_951_95com_95wCode.GDpauseObjects1.length = 0;
gdjs.lvl_951_95com_95wCode.GDpauseObjects2.length = 0;
gdjs.lvl_951_95com_95wCode.GDpause_95lObjects1.length = 0;
gdjs.lvl_951_95com_95wCode.GDpause_95lObjects2.length = 0;
gdjs.lvl_951_95com_95wCode.GDexit2Objects1.length = 0;
gdjs.lvl_951_95com_95wCode.GDexit2Objects2.length = 0;
gdjs.lvl_951_95com_95wCode.GDexitObjects1.length = 0;
gdjs.lvl_951_95com_95wCode.GDexitObjects2.length = 0;
gdjs.lvl_951_95com_95wCode.GDplayObjects1.length = 0;
gdjs.lvl_951_95com_95wCode.GDplayObjects2.length = 0;
gdjs.lvl_951_95com_95wCode.GDpau_95tObjects1.length = 0;
gdjs.lvl_951_95com_95wCode.GDpau_95tObjects2.length = 0;
gdjs.lvl_951_95com_95wCode.GDresumeObjects1.length = 0;
gdjs.lvl_951_95com_95wCode.GDresumeObjects2.length = 0;
gdjs.lvl_951_95com_95wCode.GDExitObjects1.length = 0;
gdjs.lvl_951_95com_95wCode.GDExitObjects2.length = 0;
gdjs.lvl_951_95com_95wCode.GDscoreObjects1.length = 0;
gdjs.lvl_951_95com_95wCode.GDscoreObjects2.length = 0;
gdjs.lvl_951_95com_95wCode.GDlivesObjects1.length = 0;
gdjs.lvl_951_95com_95wCode.GDlivesObjects2.length = 0;
gdjs.lvl_951_95com_95wCode.GDcoachObjects1.length = 0;
gdjs.lvl_951_95com_95wCode.GDcoachObjects2.length = 0;
gdjs.lvl_951_95com_95wCode.GDpop_95upObjects1.length = 0;
gdjs.lvl_951_95com_95wCode.GDpop_95upObjects2.length = 0;
gdjs.lvl_951_95com_95wCode.GDlvl3_95iObjects1.length = 0;
gdjs.lvl_951_95com_95wCode.GDlvl3_95iObjects2.length = 0;
gdjs.lvl_951_95com_95wCode.GDbgObjects1.length = 0;
gdjs.lvl_951_95com_95wCode.GDbgObjects2.length = 0;
gdjs.lvl_951_95com_95wCode.GDcentreObjects1.length = 0;
gdjs.lvl_951_95com_95wCode.GDcentreObjects2.length = 0;
gdjs.lvl_951_95com_95wCode.GDquizObjects1.length = 0;
gdjs.lvl_951_95com_95wCode.GDquizObjects2.length = 0;
gdjs.lvl_951_95com_95wCode.GDscoreObjects1.length = 0;
gdjs.lvl_951_95com_95wCode.GDscoreObjects2.length = 0;

gdjs.lvl_951_95com_95wCode.eventsList1(runtimeScene);
return;

}

gdjs['lvl_951_95com_95wCode'] = gdjs.lvl_951_95com_95wCode;
