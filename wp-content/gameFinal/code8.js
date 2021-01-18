gdjs.instructions2Code = {};
gdjs.instructions2Code.GDpauseObjects1= [];
gdjs.instructions2Code.GDpauseObjects2= [];
gdjs.instructions2Code.GDpause_95lObjects1= [];
gdjs.instructions2Code.GDpause_95lObjects2= [];
gdjs.instructions2Code.GDexit2Objects1= [];
gdjs.instructions2Code.GDexit2Objects2= [];
gdjs.instructions2Code.GDexitObjects1= [];
gdjs.instructions2Code.GDexitObjects2= [];
gdjs.instructions2Code.GDplayObjects1= [];
gdjs.instructions2Code.GDplayObjects2= [];
gdjs.instructions2Code.GDpau_95tObjects1= [];
gdjs.instructions2Code.GDpau_95tObjects2= [];
gdjs.instructions2Code.GDresumeObjects1= [];
gdjs.instructions2Code.GDresumeObjects2= [];
gdjs.instructions2Code.GDExitObjects1= [];
gdjs.instructions2Code.GDExitObjects2= [];
gdjs.instructions2Code.GDscoreObjects1= [];
gdjs.instructions2Code.GDscoreObjects2= [];
gdjs.instructions2Code.GDlivesObjects1= [];
gdjs.instructions2Code.GDlivesObjects2= [];
gdjs.instructions2Code.GDcoachObjects1= [];
gdjs.instructions2Code.GDcoachObjects2= [];
gdjs.instructions2Code.GDpop_95upObjects1= [];
gdjs.instructions2Code.GDpop_95upObjects2= [];
gdjs.instructions2Code.GDlvl3_95iObjects1= [];
gdjs.instructions2Code.GDlvl3_95iObjects2= [];
gdjs.instructions2Code.GDbgObjects1= [];
gdjs.instructions2Code.GDbgObjects2= [];
gdjs.instructions2Code.GDcenObjects1= [];
gdjs.instructions2Code.GDcenObjects2= [];
gdjs.instructions2Code.GDs_95bObjects1= [];
gdjs.instructions2Code.GDs_95bObjects2= [];

gdjs.instructions2Code.conditionTrue_0 = {val:false};
gdjs.instructions2Code.condition0IsTrue_0 = {val:false};
gdjs.instructions2Code.condition1IsTrue_0 = {val:false};


gdjs.instructions2Code.mapOfGDgdjs_46instructions2Code_46GDs_9595bObjects1Objects = Hashtable.newFrom({"s_b": gdjs.instructions2Code.GDs_95bObjects1});gdjs.instructions2Code.eventsList0 = function(runtimeScene) {

{


gdjs.instructions2Code.condition0IsTrue_0.val = false;
{
gdjs.instructions2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.instructions2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level_1_w", false);
}}

}


};gdjs.instructions2Code.mapOfGDgdjs_46instructions2Code_46GDs_9595bObjects1Objects = Hashtable.newFrom({"s_b": gdjs.instructions2Code.GDs_95bObjects1});gdjs.instructions2Code.eventsList1 = function(runtimeScene) {

{


{
gdjs.instructions2Code.GDcenObjects1.createFrom(runtimeScene.getObjects("cen"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.instructions2Code.GDcenObjects1.length !== 0 ? gdjs.instructions2Code.GDcenObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.instructions2Code.GDs_95bObjects1.createFrom(runtimeScene.getObjects("s_b"));

gdjs.instructions2Code.condition0IsTrue_0.val = false;
{
gdjs.instructions2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.instructions2Code.mapOfGDgdjs_46instructions2Code_46GDs_9595bObjects1Objects, runtimeScene, true, false);
}if (gdjs.instructions2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.instructions2Code.GDs_95bObjects1 */
{for(var i = 0, len = gdjs.instructions2Code.GDs_95bObjects1.length ;i < len;++i) {
    gdjs.instructions2Code.GDs_95bObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.instructions2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.instructions2Code.GDs_95bObjects1.createFrom(runtimeScene.getObjects("s_b"));

gdjs.instructions2Code.condition0IsTrue_0.val = false;
{
gdjs.instructions2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.instructions2Code.mapOfGDgdjs_46instructions2Code_46GDs_9595bObjects1Objects, runtimeScene, true, true);
}if (gdjs.instructions2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.instructions2Code.GDs_95bObjects1 */
{for(var i = 0, len = gdjs.instructions2Code.GDs_95bObjects1.length ;i < len;++i) {
    gdjs.instructions2Code.GDs_95bObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.instructions2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.instructions2Code.GDpauseObjects1.length = 0;
gdjs.instructions2Code.GDpauseObjects2.length = 0;
gdjs.instructions2Code.GDpause_95lObjects1.length = 0;
gdjs.instructions2Code.GDpause_95lObjects2.length = 0;
gdjs.instructions2Code.GDexit2Objects1.length = 0;
gdjs.instructions2Code.GDexit2Objects2.length = 0;
gdjs.instructions2Code.GDexitObjects1.length = 0;
gdjs.instructions2Code.GDexitObjects2.length = 0;
gdjs.instructions2Code.GDplayObjects1.length = 0;
gdjs.instructions2Code.GDplayObjects2.length = 0;
gdjs.instructions2Code.GDpau_95tObjects1.length = 0;
gdjs.instructions2Code.GDpau_95tObjects2.length = 0;
gdjs.instructions2Code.GDresumeObjects1.length = 0;
gdjs.instructions2Code.GDresumeObjects2.length = 0;
gdjs.instructions2Code.GDExitObjects1.length = 0;
gdjs.instructions2Code.GDExitObjects2.length = 0;
gdjs.instructions2Code.GDscoreObjects1.length = 0;
gdjs.instructions2Code.GDscoreObjects2.length = 0;
gdjs.instructions2Code.GDlivesObjects1.length = 0;
gdjs.instructions2Code.GDlivesObjects2.length = 0;
gdjs.instructions2Code.GDcoachObjects1.length = 0;
gdjs.instructions2Code.GDcoachObjects2.length = 0;
gdjs.instructions2Code.GDpop_95upObjects1.length = 0;
gdjs.instructions2Code.GDpop_95upObjects2.length = 0;
gdjs.instructions2Code.GDlvl3_95iObjects1.length = 0;
gdjs.instructions2Code.GDlvl3_95iObjects2.length = 0;
gdjs.instructions2Code.GDbgObjects1.length = 0;
gdjs.instructions2Code.GDbgObjects2.length = 0;
gdjs.instructions2Code.GDcenObjects1.length = 0;
gdjs.instructions2Code.GDcenObjects2.length = 0;
gdjs.instructions2Code.GDs_95bObjects1.length = 0;
gdjs.instructions2Code.GDs_95bObjects2.length = 0;

gdjs.instructions2Code.eventsList1(runtimeScene);
return;

}

gdjs['instructions2Code'] = gdjs.instructions2Code;
