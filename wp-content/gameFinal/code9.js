gdjs.game_95compCode = {};
gdjs.game_95compCode.GDpauseObjects1= [];
gdjs.game_95compCode.GDpauseObjects2= [];
gdjs.game_95compCode.GDpause_95lObjects1= [];
gdjs.game_95compCode.GDpause_95lObjects2= [];
gdjs.game_95compCode.GDexit2Objects1= [];
gdjs.game_95compCode.GDexit2Objects2= [];
gdjs.game_95compCode.GDexitObjects1= [];
gdjs.game_95compCode.GDexitObjects2= [];
gdjs.game_95compCode.GDplayObjects1= [];
gdjs.game_95compCode.GDplayObjects2= [];
gdjs.game_95compCode.GDpau_95tObjects1= [];
gdjs.game_95compCode.GDpau_95tObjects2= [];
gdjs.game_95compCode.GDresumeObjects1= [];
gdjs.game_95compCode.GDresumeObjects2= [];
gdjs.game_95compCode.GDExitObjects1= [];
gdjs.game_95compCode.GDExitObjects2= [];
gdjs.game_95compCode.GDscoreObjects1= [];
gdjs.game_95compCode.GDscoreObjects2= [];
gdjs.game_95compCode.GDlivesObjects1= [];
gdjs.game_95compCode.GDlivesObjects2= [];
gdjs.game_95compCode.GDcoachObjects1= [];
gdjs.game_95compCode.GDcoachObjects2= [];
gdjs.game_95compCode.GDpop_95upObjects1= [];
gdjs.game_95compCode.GDpop_95upObjects2= [];
gdjs.game_95compCode.GDlvl3_95iObjects1= [];
gdjs.game_95compCode.GDlvl3_95iObjects2= [];
gdjs.game_95compCode.GDcenObjects1= [];
gdjs.game_95compCode.GDcenObjects2= [];
gdjs.game_95compCode.GDbg_951Objects1= [];
gdjs.game_95compCode.GDbg_951Objects2= [];
gdjs.game_95compCode.GDrestartObjects1= [];
gdjs.game_95compCode.GDrestartObjects2= [];
gdjs.game_95compCode.GDcongObjects1= [];
gdjs.game_95compCode.GDcongObjects2= [];
gdjs.game_95compCode.GDtrophyObjects1= [];
gdjs.game_95compCode.GDtrophyObjects2= [];
gdjs.game_95compCode.GDNewObjectObjects1= [];
gdjs.game_95compCode.GDNewObjectObjects2= [];

gdjs.game_95compCode.conditionTrue_0 = {val:false};
gdjs.game_95compCode.condition0IsTrue_0 = {val:false};
gdjs.game_95compCode.condition1IsTrue_0 = {val:false};


gdjs.game_95compCode.mapOfGDgdjs_46game_9595compCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.game_95compCode.GDrestartObjects1});gdjs.game_95compCode.eventsList0 = function(runtimeScene) {

{


gdjs.game_95compCode.condition0IsTrue_0.val = false;
{
gdjs.game_95compCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.game_95compCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.game_95compCode.mapOfGDgdjs_46game_9595compCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.game_95compCode.GDrestartObjects1});gdjs.game_95compCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.game_95compCode.GDcenObjects1.createFrom(runtimeScene.getObjects("cen"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.game_95compCode.GDcenObjects1.length !== 0 ? gdjs.game_95compCode.GDcenObjects1[0] : null), true, "", 0);
}}

}


{


{
gdjs.game_95compCode.GDlivesObjects1.createFrom(runtimeScene.getObjects("lives"));
gdjs.game_95compCode.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.game_95compCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.game_95compCode.GDscoreObjects1[i].setString("Total Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.game_95compCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.game_95compCode.GDlivesObjects1[i].setString("Total Times Hit By Monster: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.game_95compCode.GDrestartObjects1.createFrom(runtimeScene.getObjects("restart"));

gdjs.game_95compCode.condition0IsTrue_0.val = false;
{
gdjs.game_95compCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_95compCode.mapOfGDgdjs_46game_9595compCode_46GDrestartObjects1Objects, runtimeScene, true, false);
}if (gdjs.game_95compCode.condition0IsTrue_0.val) {
/* Reuse gdjs.game_95compCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.game_95compCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.game_95compCode.GDrestartObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.game_95compCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.game_95compCode.GDrestartObjects1.createFrom(runtimeScene.getObjects("restart"));

gdjs.game_95compCode.condition0IsTrue_0.val = false;
{
gdjs.game_95compCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_95compCode.mapOfGDgdjs_46game_9595compCode_46GDrestartObjects1Objects, runtimeScene, true, true);
}if (gdjs.game_95compCode.condition0IsTrue_0.val) {
/* Reuse gdjs.game_95compCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.game_95compCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.game_95compCode.GDrestartObjects1[i].setAnimation(1);
}
}}

}


{


{
}

}


};

gdjs.game_95compCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_95compCode.GDpauseObjects1.length = 0;
gdjs.game_95compCode.GDpauseObjects2.length = 0;
gdjs.game_95compCode.GDpause_95lObjects1.length = 0;
gdjs.game_95compCode.GDpause_95lObjects2.length = 0;
gdjs.game_95compCode.GDexit2Objects1.length = 0;
gdjs.game_95compCode.GDexit2Objects2.length = 0;
gdjs.game_95compCode.GDexitObjects1.length = 0;
gdjs.game_95compCode.GDexitObjects2.length = 0;
gdjs.game_95compCode.GDplayObjects1.length = 0;
gdjs.game_95compCode.GDplayObjects2.length = 0;
gdjs.game_95compCode.GDpau_95tObjects1.length = 0;
gdjs.game_95compCode.GDpau_95tObjects2.length = 0;
gdjs.game_95compCode.GDresumeObjects1.length = 0;
gdjs.game_95compCode.GDresumeObjects2.length = 0;
gdjs.game_95compCode.GDExitObjects1.length = 0;
gdjs.game_95compCode.GDExitObjects2.length = 0;
gdjs.game_95compCode.GDscoreObjects1.length = 0;
gdjs.game_95compCode.GDscoreObjects2.length = 0;
gdjs.game_95compCode.GDlivesObjects1.length = 0;
gdjs.game_95compCode.GDlivesObjects2.length = 0;
gdjs.game_95compCode.GDcoachObjects1.length = 0;
gdjs.game_95compCode.GDcoachObjects2.length = 0;
gdjs.game_95compCode.GDpop_95upObjects1.length = 0;
gdjs.game_95compCode.GDpop_95upObjects2.length = 0;
gdjs.game_95compCode.GDlvl3_95iObjects1.length = 0;
gdjs.game_95compCode.GDlvl3_95iObjects2.length = 0;
gdjs.game_95compCode.GDcenObjects1.length = 0;
gdjs.game_95compCode.GDcenObjects2.length = 0;
gdjs.game_95compCode.GDbg_951Objects1.length = 0;
gdjs.game_95compCode.GDbg_951Objects2.length = 0;
gdjs.game_95compCode.GDrestartObjects1.length = 0;
gdjs.game_95compCode.GDrestartObjects2.length = 0;
gdjs.game_95compCode.GDcongObjects1.length = 0;
gdjs.game_95compCode.GDcongObjects2.length = 0;
gdjs.game_95compCode.GDtrophyObjects1.length = 0;
gdjs.game_95compCode.GDtrophyObjects2.length = 0;
gdjs.game_95compCode.GDNewObjectObjects1.length = 0;
gdjs.game_95compCode.GDNewObjectObjects2.length = 0;

gdjs.game_95compCode.eventsList1(runtimeScene);
return;

}

gdjs['game_95compCode'] = gdjs.game_95compCode;
