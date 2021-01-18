gdjs.select_32playerCode = {};
gdjs.select_32playerCode.GDpauseObjects1= [];
gdjs.select_32playerCode.GDpauseObjects2= [];
gdjs.select_32playerCode.GDpause_95lObjects1= [];
gdjs.select_32playerCode.GDpause_95lObjects2= [];
gdjs.select_32playerCode.GDexit2Objects1= [];
gdjs.select_32playerCode.GDexit2Objects2= [];
gdjs.select_32playerCode.GDexitObjects1= [];
gdjs.select_32playerCode.GDexitObjects2= [];
gdjs.select_32playerCode.GDplayObjects1= [];
gdjs.select_32playerCode.GDplayObjects2= [];
gdjs.select_32playerCode.GDpau_95tObjects1= [];
gdjs.select_32playerCode.GDpau_95tObjects2= [];
gdjs.select_32playerCode.GDresumeObjects1= [];
gdjs.select_32playerCode.GDresumeObjects2= [];
gdjs.select_32playerCode.GDExitObjects1= [];
gdjs.select_32playerCode.GDExitObjects2= [];
gdjs.select_32playerCode.GDscoreObjects1= [];
gdjs.select_32playerCode.GDscoreObjects2= [];
gdjs.select_32playerCode.GDlivesObjects1= [];
gdjs.select_32playerCode.GDlivesObjects2= [];
gdjs.select_32playerCode.GDcoachObjects1= [];
gdjs.select_32playerCode.GDcoachObjects2= [];
gdjs.select_32playerCode.GDpop_95upObjects1= [];
gdjs.select_32playerCode.GDpop_95upObjects2= [];
gdjs.select_32playerCode.GDlvl3_95iObjects1= [];
gdjs.select_32playerCode.GDlvl3_95iObjects2= [];
gdjs.select_32playerCode.GDplayer1Objects1= [];
gdjs.select_32playerCode.GDplayer1Objects2= [];
gdjs.select_32playerCode.GDplayer2Objects1= [];
gdjs.select_32playerCode.GDplayer2Objects2= [];
gdjs.select_32playerCode.GDbgObjects1= [];
gdjs.select_32playerCode.GDbgObjects2= [];
gdjs.select_32playerCode.GDplObjects1= [];
gdjs.select_32playerCode.GDplObjects2= [];
gdjs.select_32playerCode.GDcentreObjects1= [];
gdjs.select_32playerCode.GDcentreObjects2= [];
gdjs.select_32playerCode.GDheadingObjects1= [];
gdjs.select_32playerCode.GDheadingObjects2= [];
gdjs.select_32playerCode.GDbg1Objects1= [];
gdjs.select_32playerCode.GDbg1Objects2= [];

gdjs.select_32playerCode.conditionTrue_0 = {val:false};
gdjs.select_32playerCode.condition0IsTrue_0 = {val:false};
gdjs.select_32playerCode.condition1IsTrue_0 = {val:false};
gdjs.select_32playerCode.condition2IsTrue_0 = {val:false};


gdjs.select_32playerCode.mapOfGDgdjs_46select_9532playerCode_46GDplayer1Objects1Objects = Hashtable.newFrom({"player1": gdjs.select_32playerCode.GDplayer1Objects1});gdjs.select_32playerCode.mapOfGDgdjs_46select_9532playerCode_46GDplayer2Objects1Objects = Hashtable.newFrom({"player2": gdjs.select_32playerCode.GDplayer2Objects1});gdjs.select_32playerCode.mapOfGDgdjs_46select_9532playerCode_46GDplayer1Objects1Objects = Hashtable.newFrom({"player1": gdjs.select_32playerCode.GDplayer1Objects1});gdjs.select_32playerCode.mapOfGDgdjs_46select_9532playerCode_46GDplayer2Objects1Objects = Hashtable.newFrom({"player2": gdjs.select_32playerCode.GDplayer2Objects1});gdjs.select_32playerCode.mapOfGDgdjs_46select_9532playerCode_46GDplayer1Objects1Objects = Hashtable.newFrom({"player1": gdjs.select_32playerCode.GDplayer1Objects1});gdjs.select_32playerCode.mapOfGDgdjs_46select_9532playerCode_46GDplayer2Objects1Objects = Hashtable.newFrom({"player2": gdjs.select_32playerCode.GDplayer2Objects1});gdjs.select_32playerCode.eventsList0 = function(runtimeScene) {

{

gdjs.select_32playerCode.GDplayer1Objects1.createFrom(runtimeScene.getObjects("player1"));

gdjs.select_32playerCode.condition0IsTrue_0.val = false;
{
gdjs.select_32playerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.select_32playerCode.mapOfGDgdjs_46select_9532playerCode_46GDplayer1Objects1Objects, runtimeScene, true, false);
}if (gdjs.select_32playerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.select_32playerCode.GDplayer1Objects1 */
{for(var i = 0, len = gdjs.select_32playerCode.GDplayer1Objects1.length ;i < len;++i) {
    gdjs.select_32playerCode.GDplayer1Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.select_32playerCode.GDplayer2Objects1.createFrom(runtimeScene.getObjects("player2"));

gdjs.select_32playerCode.condition0IsTrue_0.val = false;
{
gdjs.select_32playerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.select_32playerCode.mapOfGDgdjs_46select_9532playerCode_46GDplayer2Objects1Objects, runtimeScene, true, false);
}if (gdjs.select_32playerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.select_32playerCode.GDplayer2Objects1 */
{for(var i = 0, len = gdjs.select_32playerCode.GDplayer2Objects1.length ;i < len;++i) {
    gdjs.select_32playerCode.GDplayer2Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.select_32playerCode.GDplayer1Objects1.createFrom(runtimeScene.getObjects("player1"));

gdjs.select_32playerCode.condition0IsTrue_0.val = false;
{
gdjs.select_32playerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.select_32playerCode.mapOfGDgdjs_46select_9532playerCode_46GDplayer1Objects1Objects, runtimeScene, true, true);
}if (gdjs.select_32playerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.select_32playerCode.GDplayer1Objects1 */
{for(var i = 0, len = gdjs.select_32playerCode.GDplayer1Objects1.length ;i < len;++i) {
    gdjs.select_32playerCode.GDplayer1Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.select_32playerCode.GDplayer2Objects1.createFrom(runtimeScene.getObjects("player2"));

gdjs.select_32playerCode.condition0IsTrue_0.val = false;
{
gdjs.select_32playerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.select_32playerCode.mapOfGDgdjs_46select_9532playerCode_46GDplayer2Objects1Objects, runtimeScene, true, true);
}if (gdjs.select_32playerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.select_32playerCode.GDplayer2Objects1 */
{for(var i = 0, len = gdjs.select_32playerCode.GDplayer2Objects1.length ;i < len;++i) {
    gdjs.select_32playerCode.GDplayer2Objects1[i].setAnimation(0);
}
}}

}


{


{
gdjs.select_32playerCode.GDcentreObjects1.createFrom(runtimeScene.getObjects("centre"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.select_32playerCode.GDcentreObjects1.length !== 0 ? gdjs.select_32playerCode.GDcentreObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.select_32playerCode.GDplayer1Objects1.createFrom(runtimeScene.getObjects("player1"));

gdjs.select_32playerCode.condition0IsTrue_0.val = false;
gdjs.select_32playerCode.condition1IsTrue_0.val = false;
{
gdjs.select_32playerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.select_32playerCode.mapOfGDgdjs_46select_9532playerCode_46GDplayer1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.select_32playerCode.condition0IsTrue_0.val ) {
{
gdjs.select_32playerCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.select_32playerCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "instructions", false);
}}

}


{

gdjs.select_32playerCode.GDplayer2Objects1.createFrom(runtimeScene.getObjects("player2"));

gdjs.select_32playerCode.condition0IsTrue_0.val = false;
gdjs.select_32playerCode.condition1IsTrue_0.val = false;
{
gdjs.select_32playerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.select_32playerCode.mapOfGDgdjs_46select_9532playerCode_46GDplayer2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.select_32playerCode.condition0IsTrue_0.val ) {
{
gdjs.select_32playerCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.select_32playerCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "instructions2", false);
}}

}


{


{
}

}


};

gdjs.select_32playerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.select_32playerCode.GDpauseObjects1.length = 0;
gdjs.select_32playerCode.GDpauseObjects2.length = 0;
gdjs.select_32playerCode.GDpause_95lObjects1.length = 0;
gdjs.select_32playerCode.GDpause_95lObjects2.length = 0;
gdjs.select_32playerCode.GDexit2Objects1.length = 0;
gdjs.select_32playerCode.GDexit2Objects2.length = 0;
gdjs.select_32playerCode.GDexitObjects1.length = 0;
gdjs.select_32playerCode.GDexitObjects2.length = 0;
gdjs.select_32playerCode.GDplayObjects1.length = 0;
gdjs.select_32playerCode.GDplayObjects2.length = 0;
gdjs.select_32playerCode.GDpau_95tObjects1.length = 0;
gdjs.select_32playerCode.GDpau_95tObjects2.length = 0;
gdjs.select_32playerCode.GDresumeObjects1.length = 0;
gdjs.select_32playerCode.GDresumeObjects2.length = 0;
gdjs.select_32playerCode.GDExitObjects1.length = 0;
gdjs.select_32playerCode.GDExitObjects2.length = 0;
gdjs.select_32playerCode.GDscoreObjects1.length = 0;
gdjs.select_32playerCode.GDscoreObjects2.length = 0;
gdjs.select_32playerCode.GDlivesObjects1.length = 0;
gdjs.select_32playerCode.GDlivesObjects2.length = 0;
gdjs.select_32playerCode.GDcoachObjects1.length = 0;
gdjs.select_32playerCode.GDcoachObjects2.length = 0;
gdjs.select_32playerCode.GDpop_95upObjects1.length = 0;
gdjs.select_32playerCode.GDpop_95upObjects2.length = 0;
gdjs.select_32playerCode.GDlvl3_95iObjects1.length = 0;
gdjs.select_32playerCode.GDlvl3_95iObjects2.length = 0;
gdjs.select_32playerCode.GDplayer1Objects1.length = 0;
gdjs.select_32playerCode.GDplayer1Objects2.length = 0;
gdjs.select_32playerCode.GDplayer2Objects1.length = 0;
gdjs.select_32playerCode.GDplayer2Objects2.length = 0;
gdjs.select_32playerCode.GDbgObjects1.length = 0;
gdjs.select_32playerCode.GDbgObjects2.length = 0;
gdjs.select_32playerCode.GDplObjects1.length = 0;
gdjs.select_32playerCode.GDplObjects2.length = 0;
gdjs.select_32playerCode.GDcentreObjects1.length = 0;
gdjs.select_32playerCode.GDcentreObjects2.length = 0;
gdjs.select_32playerCode.GDheadingObjects1.length = 0;
gdjs.select_32playerCode.GDheadingObjects2.length = 0;
gdjs.select_32playerCode.GDbg1Objects1.length = 0;
gdjs.select_32playerCode.GDbg1Objects2.length = 0;

gdjs.select_32playerCode.eventsList0(runtimeScene);
return;

}

gdjs['select_32playerCode'] = gdjs.select_32playerCode;
