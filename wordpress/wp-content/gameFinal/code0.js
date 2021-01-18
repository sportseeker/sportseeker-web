gdjs.homeCode = {};
gdjs.homeCode.GDpauseObjects1= [];
gdjs.homeCode.GDpauseObjects2= [];
gdjs.homeCode.GDpause_95lObjects1= [];
gdjs.homeCode.GDpause_95lObjects2= [];
gdjs.homeCode.GDexit2Objects1= [];
gdjs.homeCode.GDexit2Objects2= [];
gdjs.homeCode.GDexitObjects1= [];
gdjs.homeCode.GDexitObjects2= [];
gdjs.homeCode.GDplayObjects1= [];
gdjs.homeCode.GDplayObjects2= [];
gdjs.homeCode.GDpau_95tObjects1= [];
gdjs.homeCode.GDpau_95tObjects2= [];
gdjs.homeCode.GDresumeObjects1= [];
gdjs.homeCode.GDresumeObjects2= [];
gdjs.homeCode.GDExitObjects1= [];
gdjs.homeCode.GDExitObjects2= [];
gdjs.homeCode.GDscoreObjects1= [];
gdjs.homeCode.GDscoreObjects2= [];
gdjs.homeCode.GDlivesObjects1= [];
gdjs.homeCode.GDlivesObjects2= [];
gdjs.homeCode.GDcoachObjects1= [];
gdjs.homeCode.GDcoachObjects2= [];
gdjs.homeCode.GDpop_95upObjects1= [];
gdjs.homeCode.GDpop_95upObjects2= [];
gdjs.homeCode.GDlvl3_95iObjects1= [];
gdjs.homeCode.GDlvl3_95iObjects2= [];
gdjs.homeCode.GDlogoObjects1= [];
gdjs.homeCode.GDlogoObjects2= [];
gdjs.homeCode.GDbgObjects1= [];
gdjs.homeCode.GDbgObjects2= [];
gdjs.homeCode.GDplay_95bgObjects1= [];
gdjs.homeCode.GDplay_95bgObjects2= [];
gdjs.homeCode.GDbg_951Objects1= [];
gdjs.homeCode.GDbg_951Objects2= [];
gdjs.homeCode.GDcentreObjects1= [];
gdjs.homeCode.GDcentreObjects2= [];
gdjs.homeCode.GDplayObjects1= [];
gdjs.homeCode.GDplayObjects2= [];

gdjs.homeCode.conditionTrue_0 = {val:false};
gdjs.homeCode.condition0IsTrue_0 = {val:false};
gdjs.homeCode.condition1IsTrue_0 = {val:false};


gdjs.homeCode.mapOfGDgdjs_46homeCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.homeCode.GDplayObjects1});gdjs.homeCode.eventsList0 = function(runtimeScene) {

{


gdjs.homeCode.condition0IsTrue_0.val = false;
{
gdjs.homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.homeCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "select player", false);
}}

}


};gdjs.homeCode.mapOfGDgdjs_46homeCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.homeCode.GDplayObjects1});gdjs.homeCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.homeCode.GDcentreObjects1.createFrom(runtimeScene.getObjects("centre"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.homeCode.GDcentreObjects1.length !== 0 ? gdjs.homeCode.GDcentreObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.homeCode.GDplayObjects1.createFrom(runtimeScene.getObjects("play"));

gdjs.homeCode.condition0IsTrue_0.val = false;
{
gdjs.homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.homeCode.mapOfGDgdjs_46homeCode_46GDplayObjects1Objects, runtimeScene, true, false);
}if (gdjs.homeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.homeCode.GDplayObjects1 */
{for(var i = 0, len = gdjs.homeCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.homeCode.GDplayObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.homeCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.homeCode.GDplayObjects1.createFrom(runtimeScene.getObjects("play"));

gdjs.homeCode.condition0IsTrue_0.val = false;
{
gdjs.homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.homeCode.mapOfGDgdjs_46homeCode_46GDplayObjects1Objects, runtimeScene, true, true);
}if (gdjs.homeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.homeCode.GDplayObjects1 */
{for(var i = 0, len = gdjs.homeCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.homeCode.GDplayObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.homeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.homeCode.GDpauseObjects1.length = 0;
gdjs.homeCode.GDpauseObjects2.length = 0;
gdjs.homeCode.GDpause_95lObjects1.length = 0;
gdjs.homeCode.GDpause_95lObjects2.length = 0;
gdjs.homeCode.GDexit2Objects1.length = 0;
gdjs.homeCode.GDexit2Objects2.length = 0;
gdjs.homeCode.GDexitObjects1.length = 0;
gdjs.homeCode.GDexitObjects2.length = 0;
gdjs.homeCode.GDplayObjects1.length = 0;
gdjs.homeCode.GDplayObjects2.length = 0;
gdjs.homeCode.GDpau_95tObjects1.length = 0;
gdjs.homeCode.GDpau_95tObjects2.length = 0;
gdjs.homeCode.GDresumeObjects1.length = 0;
gdjs.homeCode.GDresumeObjects2.length = 0;
gdjs.homeCode.GDExitObjects1.length = 0;
gdjs.homeCode.GDExitObjects2.length = 0;
gdjs.homeCode.GDscoreObjects1.length = 0;
gdjs.homeCode.GDscoreObjects2.length = 0;
gdjs.homeCode.GDlivesObjects1.length = 0;
gdjs.homeCode.GDlivesObjects2.length = 0;
gdjs.homeCode.GDcoachObjects1.length = 0;
gdjs.homeCode.GDcoachObjects2.length = 0;
gdjs.homeCode.GDpop_95upObjects1.length = 0;
gdjs.homeCode.GDpop_95upObjects2.length = 0;
gdjs.homeCode.GDlvl3_95iObjects1.length = 0;
gdjs.homeCode.GDlvl3_95iObjects2.length = 0;
gdjs.homeCode.GDlogoObjects1.length = 0;
gdjs.homeCode.GDlogoObjects2.length = 0;
gdjs.homeCode.GDbgObjects1.length = 0;
gdjs.homeCode.GDbgObjects2.length = 0;
gdjs.homeCode.GDplay_95bgObjects1.length = 0;
gdjs.homeCode.GDplay_95bgObjects2.length = 0;
gdjs.homeCode.GDbg_951Objects1.length = 0;
gdjs.homeCode.GDbg_951Objects2.length = 0;
gdjs.homeCode.GDcentreObjects1.length = 0;
gdjs.homeCode.GDcentreObjects2.length = 0;
gdjs.homeCode.GDplayObjects1.length = 0;
gdjs.homeCode.GDplayObjects2.length = 0;

gdjs.homeCode.eventsList1(runtimeScene);
return;

}

gdjs['homeCode'] = gdjs.homeCode;
