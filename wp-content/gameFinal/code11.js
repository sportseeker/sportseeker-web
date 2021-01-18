gdjs.instructionsCode = {};
gdjs.instructionsCode.GDpauseObjects1= [];
gdjs.instructionsCode.GDpauseObjects2= [];
gdjs.instructionsCode.GDpause_95lObjects1= [];
gdjs.instructionsCode.GDpause_95lObjects2= [];
gdjs.instructionsCode.GDexit2Objects1= [];
gdjs.instructionsCode.GDexit2Objects2= [];
gdjs.instructionsCode.GDexitObjects1= [];
gdjs.instructionsCode.GDexitObjects2= [];
gdjs.instructionsCode.GDplayObjects1= [];
gdjs.instructionsCode.GDplayObjects2= [];
gdjs.instructionsCode.GDpau_95tObjects1= [];
gdjs.instructionsCode.GDpau_95tObjects2= [];
gdjs.instructionsCode.GDresumeObjects1= [];
gdjs.instructionsCode.GDresumeObjects2= [];
gdjs.instructionsCode.GDExitObjects1= [];
gdjs.instructionsCode.GDExitObjects2= [];
gdjs.instructionsCode.GDscoreObjects1= [];
gdjs.instructionsCode.GDscoreObjects2= [];
gdjs.instructionsCode.GDlivesObjects1= [];
gdjs.instructionsCode.GDlivesObjects2= [];
gdjs.instructionsCode.GDcoachObjects1= [];
gdjs.instructionsCode.GDcoachObjects2= [];
gdjs.instructionsCode.GDpop_95upObjects1= [];
gdjs.instructionsCode.GDpop_95upObjects2= [];
gdjs.instructionsCode.GDlvl3_95iObjects1= [];
gdjs.instructionsCode.GDlvl3_95iObjects2= [];
gdjs.instructionsCode.GDbgObjects1= [];
gdjs.instructionsCode.GDbgObjects2= [];
gdjs.instructionsCode.GDcenObjects1= [];
gdjs.instructionsCode.GDcenObjects2= [];
gdjs.instructionsCode.GDs_95bObjects1= [];
gdjs.instructionsCode.GDs_95bObjects2= [];

gdjs.instructionsCode.conditionTrue_0 = {val:false};
gdjs.instructionsCode.condition0IsTrue_0 = {val:false};
gdjs.instructionsCode.condition1IsTrue_0 = {val:false};


gdjs.instructionsCode.mapOfGDgdjs_46instructionsCode_46GDs_9595bObjects1Objects = Hashtable.newFrom({"s_b": gdjs.instructionsCode.GDs_95bObjects1});gdjs.instructionsCode.eventsList0 = function(runtimeScene) {

{


gdjs.instructionsCode.condition0IsTrue_0.val = false;
{
gdjs.instructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.instructionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level_1", false);
}}

}


};gdjs.instructionsCode.mapOfGDgdjs_46instructionsCode_46GDs_9595bObjects1Objects = Hashtable.newFrom({"s_b": gdjs.instructionsCode.GDs_95bObjects1});gdjs.instructionsCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.instructionsCode.GDcenObjects1.createFrom(runtimeScene.getObjects("cen"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.instructionsCode.GDcenObjects1.length !== 0 ? gdjs.instructionsCode.GDcenObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.instructionsCode.GDs_95bObjects1.createFrom(runtimeScene.getObjects("s_b"));

gdjs.instructionsCode.condition0IsTrue_0.val = false;
{
gdjs.instructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.instructionsCode.mapOfGDgdjs_46instructionsCode_46GDs_9595bObjects1Objects, runtimeScene, true, false);
}if (gdjs.instructionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.instructionsCode.GDs_95bObjects1 */
{for(var i = 0, len = gdjs.instructionsCode.GDs_95bObjects1.length ;i < len;++i) {
    gdjs.instructionsCode.GDs_95bObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.instructionsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.instructionsCode.GDs_95bObjects1.createFrom(runtimeScene.getObjects("s_b"));

gdjs.instructionsCode.condition0IsTrue_0.val = false;
{
gdjs.instructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.instructionsCode.mapOfGDgdjs_46instructionsCode_46GDs_9595bObjects1Objects, runtimeScene, true, true);
}if (gdjs.instructionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.instructionsCode.GDs_95bObjects1 */
{for(var i = 0, len = gdjs.instructionsCode.GDs_95bObjects1.length ;i < len;++i) {
    gdjs.instructionsCode.GDs_95bObjects1[i].setAnimation(0);
}
}}

}


{


{
}

}


};

gdjs.instructionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.instructionsCode.GDpauseObjects1.length = 0;
gdjs.instructionsCode.GDpauseObjects2.length = 0;
gdjs.instructionsCode.GDpause_95lObjects1.length = 0;
gdjs.instructionsCode.GDpause_95lObjects2.length = 0;
gdjs.instructionsCode.GDexit2Objects1.length = 0;
gdjs.instructionsCode.GDexit2Objects2.length = 0;
gdjs.instructionsCode.GDexitObjects1.length = 0;
gdjs.instructionsCode.GDexitObjects2.length = 0;
gdjs.instructionsCode.GDplayObjects1.length = 0;
gdjs.instructionsCode.GDplayObjects2.length = 0;
gdjs.instructionsCode.GDpau_95tObjects1.length = 0;
gdjs.instructionsCode.GDpau_95tObjects2.length = 0;
gdjs.instructionsCode.GDresumeObjects1.length = 0;
gdjs.instructionsCode.GDresumeObjects2.length = 0;
gdjs.instructionsCode.GDExitObjects1.length = 0;
gdjs.instructionsCode.GDExitObjects2.length = 0;
gdjs.instructionsCode.GDscoreObjects1.length = 0;
gdjs.instructionsCode.GDscoreObjects2.length = 0;
gdjs.instructionsCode.GDlivesObjects1.length = 0;
gdjs.instructionsCode.GDlivesObjects2.length = 0;
gdjs.instructionsCode.GDcoachObjects1.length = 0;
gdjs.instructionsCode.GDcoachObjects2.length = 0;
gdjs.instructionsCode.GDpop_95upObjects1.length = 0;
gdjs.instructionsCode.GDpop_95upObjects2.length = 0;
gdjs.instructionsCode.GDlvl3_95iObjects1.length = 0;
gdjs.instructionsCode.GDlvl3_95iObjects2.length = 0;
gdjs.instructionsCode.GDbgObjects1.length = 0;
gdjs.instructionsCode.GDbgObjects2.length = 0;
gdjs.instructionsCode.GDcenObjects1.length = 0;
gdjs.instructionsCode.GDcenObjects2.length = 0;
gdjs.instructionsCode.GDs_95bObjects1.length = 0;
gdjs.instructionsCode.GDs_95bObjects2.length = 0;

gdjs.instructionsCode.eventsList1(runtimeScene);
return;

}

gdjs['instructionsCode'] = gdjs.instructionsCode;
