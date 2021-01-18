gdjs.exit_95screenCode = {};
gdjs.exit_95screenCode.GDpauseObjects1= [];
gdjs.exit_95screenCode.GDpauseObjects2= [];
gdjs.exit_95screenCode.GDpause_95lObjects1= [];
gdjs.exit_95screenCode.GDpause_95lObjects2= [];
gdjs.exit_95screenCode.GDexit2Objects1= [];
gdjs.exit_95screenCode.GDexit2Objects2= [];
gdjs.exit_95screenCode.GDexitObjects1= [];
gdjs.exit_95screenCode.GDexitObjects2= [];
gdjs.exit_95screenCode.GDplayObjects1= [];
gdjs.exit_95screenCode.GDplayObjects2= [];
gdjs.exit_95screenCode.GDpau_95tObjects1= [];
gdjs.exit_95screenCode.GDpau_95tObjects2= [];
gdjs.exit_95screenCode.GDresumeObjects1= [];
gdjs.exit_95screenCode.GDresumeObjects2= [];
gdjs.exit_95screenCode.GDExitObjects1= [];
gdjs.exit_95screenCode.GDExitObjects2= [];
gdjs.exit_95screenCode.GDscoreObjects1= [];
gdjs.exit_95screenCode.GDscoreObjects2= [];
gdjs.exit_95screenCode.GDlivesObjects1= [];
gdjs.exit_95screenCode.GDlivesObjects2= [];
gdjs.exit_95screenCode.GDcoachObjects1= [];
gdjs.exit_95screenCode.GDcoachObjects2= [];
gdjs.exit_95screenCode.GDpop_95upObjects1= [];
gdjs.exit_95screenCode.GDpop_95upObjects2= [];
gdjs.exit_95screenCode.GDlvl3_95iObjects1= [];
gdjs.exit_95screenCode.GDlvl3_95iObjects2= [];
gdjs.exit_95screenCode.GDcenObjects1= [];
gdjs.exit_95screenCode.GDcenObjects2= [];
gdjs.exit_95screenCode.GDbg_951Objects1= [];
gdjs.exit_95screenCode.GDbg_951Objects2= [];
gdjs.exit_95screenCode.GDrestartObjects1= [];
gdjs.exit_95screenCode.GDrestartObjects2= [];

gdjs.exit_95screenCode.conditionTrue_0 = {val:false};
gdjs.exit_95screenCode.condition0IsTrue_0 = {val:false};
gdjs.exit_95screenCode.condition1IsTrue_0 = {val:false};


gdjs.exit_95screenCode.mapOfGDgdjs_46exit_9595screenCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.exit_95screenCode.GDrestartObjects1});gdjs.exit_95screenCode.eventsList0 = function(runtimeScene) {

{


gdjs.exit_95screenCode.condition0IsTrue_0.val = false;
{
gdjs.exit_95screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.exit_95screenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


};gdjs.exit_95screenCode.mapOfGDgdjs_46exit_9595screenCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.exit_95screenCode.GDrestartObjects1});gdjs.exit_95screenCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.exit_95screenCode.GDcenObjects1.createFrom(runtimeScene.getObjects("cen"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.exit_95screenCode.GDcenObjects1.length !== 0 ? gdjs.exit_95screenCode.GDcenObjects1[0] : null), true, "", 0);
}}

}


{


{
gdjs.exit_95screenCode.GDlivesObjects1.createFrom(runtimeScene.getObjects("lives"));
gdjs.exit_95screenCode.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.exit_95screenCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.exit_95screenCode.GDscoreObjects1[i].setString("Total Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.exit_95screenCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.exit_95screenCode.GDlivesObjects1[i].setString("Total Times Hit By Monster: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.exit_95screenCode.GDrestartObjects1.createFrom(runtimeScene.getObjects("restart"));

gdjs.exit_95screenCode.condition0IsTrue_0.val = false;
{
gdjs.exit_95screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.exit_95screenCode.mapOfGDgdjs_46exit_9595screenCode_46GDrestartObjects1Objects, runtimeScene, true, false);
}if (gdjs.exit_95screenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.exit_95screenCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.exit_95screenCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.exit_95screenCode.GDrestartObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.exit_95screenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.exit_95screenCode.GDrestartObjects1.createFrom(runtimeScene.getObjects("restart"));

gdjs.exit_95screenCode.condition0IsTrue_0.val = false;
{
gdjs.exit_95screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.exit_95screenCode.mapOfGDgdjs_46exit_9595screenCode_46GDrestartObjects1Objects, runtimeScene, true, true);
}if (gdjs.exit_95screenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.exit_95screenCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.exit_95screenCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.exit_95screenCode.GDrestartObjects1[i].setAnimation(1);
}
}}

}


{


{
}

}


};

gdjs.exit_95screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.exit_95screenCode.GDpauseObjects1.length = 0;
gdjs.exit_95screenCode.GDpauseObjects2.length = 0;
gdjs.exit_95screenCode.GDpause_95lObjects1.length = 0;
gdjs.exit_95screenCode.GDpause_95lObjects2.length = 0;
gdjs.exit_95screenCode.GDexit2Objects1.length = 0;
gdjs.exit_95screenCode.GDexit2Objects2.length = 0;
gdjs.exit_95screenCode.GDexitObjects1.length = 0;
gdjs.exit_95screenCode.GDexitObjects2.length = 0;
gdjs.exit_95screenCode.GDplayObjects1.length = 0;
gdjs.exit_95screenCode.GDplayObjects2.length = 0;
gdjs.exit_95screenCode.GDpau_95tObjects1.length = 0;
gdjs.exit_95screenCode.GDpau_95tObjects2.length = 0;
gdjs.exit_95screenCode.GDresumeObjects1.length = 0;
gdjs.exit_95screenCode.GDresumeObjects2.length = 0;
gdjs.exit_95screenCode.GDExitObjects1.length = 0;
gdjs.exit_95screenCode.GDExitObjects2.length = 0;
gdjs.exit_95screenCode.GDscoreObjects1.length = 0;
gdjs.exit_95screenCode.GDscoreObjects2.length = 0;
gdjs.exit_95screenCode.GDlivesObjects1.length = 0;
gdjs.exit_95screenCode.GDlivesObjects2.length = 0;
gdjs.exit_95screenCode.GDcoachObjects1.length = 0;
gdjs.exit_95screenCode.GDcoachObjects2.length = 0;
gdjs.exit_95screenCode.GDpop_95upObjects1.length = 0;
gdjs.exit_95screenCode.GDpop_95upObjects2.length = 0;
gdjs.exit_95screenCode.GDlvl3_95iObjects1.length = 0;
gdjs.exit_95screenCode.GDlvl3_95iObjects2.length = 0;
gdjs.exit_95screenCode.GDcenObjects1.length = 0;
gdjs.exit_95screenCode.GDcenObjects2.length = 0;
gdjs.exit_95screenCode.GDbg_951Objects1.length = 0;
gdjs.exit_95screenCode.GDbg_951Objects2.length = 0;
gdjs.exit_95screenCode.GDrestartObjects1.length = 0;
gdjs.exit_95screenCode.GDrestartObjects2.length = 0;

gdjs.exit_95screenCode.eventsList1(runtimeScene);
return;

}

gdjs['exit_95screenCode'] = gdjs.exit_95screenCode;
