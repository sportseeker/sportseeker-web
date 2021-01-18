gdjs.q6Code = {};
gdjs.q6Code.GDpauseObjects1= [];
gdjs.q6Code.GDpauseObjects2= [];
gdjs.q6Code.GDpause_95lObjects1= [];
gdjs.q6Code.GDpause_95lObjects2= [];
gdjs.q6Code.GDexit2Objects1= [];
gdjs.q6Code.GDexit2Objects2= [];
gdjs.q6Code.GDexitObjects1= [];
gdjs.q6Code.GDexitObjects2= [];
gdjs.q6Code.GDplayObjects1= [];
gdjs.q6Code.GDplayObjects2= [];
gdjs.q6Code.GDpau_95tObjects1= [];
gdjs.q6Code.GDpau_95tObjects2= [];
gdjs.q6Code.GDresumeObjects1= [];
gdjs.q6Code.GDresumeObjects2= [];
gdjs.q6Code.GDExitObjects1= [];
gdjs.q6Code.GDExitObjects2= [];
gdjs.q6Code.GDscoreObjects1= [];
gdjs.q6Code.GDscoreObjects2= [];
gdjs.q6Code.GDlivesObjects1= [];
gdjs.q6Code.GDlivesObjects2= [];
gdjs.q6Code.GDcoachObjects1= [];
gdjs.q6Code.GDcoachObjects2= [];
gdjs.q6Code.GDpop_95upObjects1= [];
gdjs.q6Code.GDpop_95upObjects2= [];
gdjs.q6Code.GDlvl3_95iObjects1= [];
gdjs.q6Code.GDlvl3_95iObjects2= [];
gdjs.q6Code.GDbg2Objects1= [];
gdjs.q6Code.GDbg2Objects2= [];
gdjs.q6Code.GDcentreObjects1= [];
gdjs.q6Code.GDcentreObjects2= [];
gdjs.q6Code.GDq1Objects1= [];
gdjs.q6Code.GDq1Objects2= [];
gdjs.q6Code.GDwrongObjects1= [];
gdjs.q6Code.GDwrongObjects2= [];
gdjs.q6Code.GDcorrectObjects1= [];
gdjs.q6Code.GDcorrectObjects2= [];
gdjs.q6Code.GDpop_95upObjects1= [];
gdjs.q6Code.GDpop_95upObjects2= [];
gdjs.q6Code.GDcoachObjects1= [];
gdjs.q6Code.GDcoachObjects2= [];
gdjs.q6Code.GDnqObjects1= [];
gdjs.q6Code.GDnqObjects2= [];
gdjs.q6Code.GDnumberObjects1= [];
gdjs.q6Code.GDnumberObjects2= [];
gdjs.q6Code.GDscoreObjects1= [];
gdjs.q6Code.GDscoreObjects2= [];
gdjs.q6Code.GDcor_95mObjects1= [];
gdjs.q6Code.GDcor_95mObjects2= [];
gdjs.q6Code.GDwro_95mObjects1= [];
gdjs.q6Code.GDwro_95mObjects2= [];

gdjs.q6Code.conditionTrue_0 = {val:false};
gdjs.q6Code.condition0IsTrue_0 = {val:false};
gdjs.q6Code.condition1IsTrue_0 = {val:false};


gdjs.q6Code.mapOfGDgdjs_46q6Code_46GDwrongObjects1Objects = Hashtable.newFrom({"wrong": gdjs.q6Code.GDwrongObjects1});gdjs.q6Code.mapOfGDgdjs_46q6Code_46GDnqObjects1Objects = Hashtable.newFrom({"nq": gdjs.q6Code.GDnqObjects1});gdjs.q6Code.eventsList0 = function(runtimeScene) {

{


gdjs.q6Code.condition0IsTrue_0.val = false;
{
gdjs.q6Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q6Code.condition0IsTrue_0.val) {
gdjs.q6Code.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q6Code.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));
gdjs.q6Code.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q6Code.GDwro_95mObjects1.createFrom(runtimeScene.getObjects("wro_m"));
/* Reuse gdjs.q6Code.GDwrongObjects1 */
gdjs.q6Code.GDnqObjects1.length = 0;

{for(var i = 0, len = gdjs.q6Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDwrongObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q6Code.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDcorrectObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q6Code.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDpop_95upObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q6Code.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDcoachObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q6Code.GDwro_95mObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDwro_95mObjects1[i].hide(false);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.q6Code.mapOfGDgdjs_46q6Code_46GDnqObjects1Objects, 677, 440, "");
}}

}


};gdjs.q6Code.mapOfGDgdjs_46q6Code_46GDcorrectObjects1Objects = Hashtable.newFrom({"correct": gdjs.q6Code.GDcorrectObjects1});gdjs.q6Code.mapOfGDgdjs_46q6Code_46GDnqObjects1Objects = Hashtable.newFrom({"nq": gdjs.q6Code.GDnqObjects1});gdjs.q6Code.eventsList1 = function(runtimeScene) {

{


gdjs.q6Code.condition0IsTrue_0.val = false;
{
gdjs.q6Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q6Code.condition0IsTrue_0.val) {
gdjs.q6Code.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q6Code.GDcor_95mObjects1.createFrom(runtimeScene.getObjects("cor_m"));
/* Reuse gdjs.q6Code.GDcorrectObjects1 */
gdjs.q6Code.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q6Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
gdjs.q6Code.GDnqObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.q6Code.mapOfGDgdjs_46q6Code_46GDnqObjects1Objects, 677, 440, "");
}{for(var i = 0, len = gdjs.q6Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDwrongObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q6Code.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDcorrectObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q6Code.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDpop_95upObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q6Code.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDcoachObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}{for(var i = 0, len = gdjs.q6Code.GDcor_95mObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDcor_95mObjects1[i].hide(false);
}
}}

}


};gdjs.q6Code.mapOfGDgdjs_46q6Code_46GDnqObjects1Objects = Hashtable.newFrom({"nq": gdjs.q6Code.GDnqObjects1});gdjs.q6Code.eventsList2 = function(runtimeScene) {

{


gdjs.q6Code.condition0IsTrue_0.val = false;
{
gdjs.q6Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q6Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "q7", false);
}}

}


};gdjs.q6Code.mapOfGDgdjs_46q6Code_46GDwrongObjects1Objects = Hashtable.newFrom({"wrong": gdjs.q6Code.GDwrongObjects1});gdjs.q6Code.mapOfGDgdjs_46q6Code_46GDnqObjects1Objects = Hashtable.newFrom({"nq": gdjs.q6Code.GDnqObjects1});gdjs.q6Code.mapOfGDgdjs_46q6Code_46GDcorrectObjects1Objects = Hashtable.newFrom({"correct": gdjs.q6Code.GDcorrectObjects1});gdjs.q6Code.eventsList3 = function(runtimeScene) {

{


{
gdjs.q6Code.GDcentreObjects1.createFrom(runtimeScene.getObjects("centre"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.q6Code.GDcentreObjects1.length !== 0 ? gdjs.q6Code.GDcentreObjects1[0] : null), true, "", 0);
}}

}


{


{
gdjs.q6Code.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.q6Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDscoreObjects1[i].setString("Total Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.q6Code.condition0IsTrue_0.val = false;
{
gdjs.q6Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.q6Code.condition0IsTrue_0.val) {
gdjs.q6Code.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q6Code.GDcor_95mObjects1.createFrom(runtimeScene.getObjects("cor_m"));
gdjs.q6Code.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q6Code.GDwro_95mObjects1.createFrom(runtimeScene.getObjects("wro_m"));
{for(var i = 0, len = gdjs.q6Code.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDpop_95upObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q6Code.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDcoachObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q6Code.GDcor_95mObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDcor_95mObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q6Code.GDwro_95mObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDwro_95mObjects1[i].hide();
}
}}

}


{

gdjs.q6Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));

gdjs.q6Code.condition0IsTrue_0.val = false;
{
gdjs.q6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q6Code.mapOfGDgdjs_46q6Code_46GDwrongObjects1Objects, runtimeScene, true, false);
}if (gdjs.q6Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q6Code.GDwrongObjects1 */
{for(var i = 0, len = gdjs.q6Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDwrongObjects1[i].setColor("0;0;0");
}
}
{ //Subevents
gdjs.q6Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.q6Code.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));

gdjs.q6Code.condition0IsTrue_0.val = false;
{
gdjs.q6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q6Code.mapOfGDgdjs_46q6Code_46GDcorrectObjects1Objects, runtimeScene, true, false);
}if (gdjs.q6Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q6Code.GDcorrectObjects1 */
{for(var i = 0, len = gdjs.q6Code.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDcorrectObjects1[i].setColor("0;0;0");
}
}
{ //Subevents
gdjs.q6Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.q6Code.GDnqObjects1.createFrom(runtimeScene.getObjects("nq"));

gdjs.q6Code.condition0IsTrue_0.val = false;
{
gdjs.q6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q6Code.mapOfGDgdjs_46q6Code_46GDnqObjects1Objects, runtimeScene, true, false);
}if (gdjs.q6Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q6Code.GDnqObjects1 */
{for(var i = 0, len = gdjs.q6Code.GDnqObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDnqObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.q6Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.q6Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));

gdjs.q6Code.condition0IsTrue_0.val = false;
{
gdjs.q6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q6Code.mapOfGDgdjs_46q6Code_46GDwrongObjects1Objects, runtimeScene, true, true);
}if (gdjs.q6Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q6Code.GDwrongObjects1 */
{for(var i = 0, len = gdjs.q6Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDwrongObjects1[i].setColor("248;231;28");
}
}}

}


{

gdjs.q6Code.GDnqObjects1.createFrom(runtimeScene.getObjects("nq"));

gdjs.q6Code.condition0IsTrue_0.val = false;
{
gdjs.q6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q6Code.mapOfGDgdjs_46q6Code_46GDnqObjects1Objects, runtimeScene, true, true);
}if (gdjs.q6Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q6Code.GDnqObjects1 */
{for(var i = 0, len = gdjs.q6Code.GDnqObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDnqObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.q6Code.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));

gdjs.q6Code.condition0IsTrue_0.val = false;
{
gdjs.q6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q6Code.mapOfGDgdjs_46q6Code_46GDcorrectObjects1Objects, runtimeScene, true, true);
}if (gdjs.q6Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q6Code.GDcorrectObjects1 */
{for(var i = 0, len = gdjs.q6Code.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q6Code.GDcorrectObjects1[i].setColor("248;231;28");
}
}}

}


{


{
}

}


};

gdjs.q6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.q6Code.GDpauseObjects1.length = 0;
gdjs.q6Code.GDpauseObjects2.length = 0;
gdjs.q6Code.GDpause_95lObjects1.length = 0;
gdjs.q6Code.GDpause_95lObjects2.length = 0;
gdjs.q6Code.GDexit2Objects1.length = 0;
gdjs.q6Code.GDexit2Objects2.length = 0;
gdjs.q6Code.GDexitObjects1.length = 0;
gdjs.q6Code.GDexitObjects2.length = 0;
gdjs.q6Code.GDplayObjects1.length = 0;
gdjs.q6Code.GDplayObjects2.length = 0;
gdjs.q6Code.GDpau_95tObjects1.length = 0;
gdjs.q6Code.GDpau_95tObjects2.length = 0;
gdjs.q6Code.GDresumeObjects1.length = 0;
gdjs.q6Code.GDresumeObjects2.length = 0;
gdjs.q6Code.GDExitObjects1.length = 0;
gdjs.q6Code.GDExitObjects2.length = 0;
gdjs.q6Code.GDscoreObjects1.length = 0;
gdjs.q6Code.GDscoreObjects2.length = 0;
gdjs.q6Code.GDlivesObjects1.length = 0;
gdjs.q6Code.GDlivesObjects2.length = 0;
gdjs.q6Code.GDcoachObjects1.length = 0;
gdjs.q6Code.GDcoachObjects2.length = 0;
gdjs.q6Code.GDpop_95upObjects1.length = 0;
gdjs.q6Code.GDpop_95upObjects2.length = 0;
gdjs.q6Code.GDlvl3_95iObjects1.length = 0;
gdjs.q6Code.GDlvl3_95iObjects2.length = 0;
gdjs.q6Code.GDbg2Objects1.length = 0;
gdjs.q6Code.GDbg2Objects2.length = 0;
gdjs.q6Code.GDcentreObjects1.length = 0;
gdjs.q6Code.GDcentreObjects2.length = 0;
gdjs.q6Code.GDq1Objects1.length = 0;
gdjs.q6Code.GDq1Objects2.length = 0;
gdjs.q6Code.GDwrongObjects1.length = 0;
gdjs.q6Code.GDwrongObjects2.length = 0;
gdjs.q6Code.GDcorrectObjects1.length = 0;
gdjs.q6Code.GDcorrectObjects2.length = 0;
gdjs.q6Code.GDpop_95upObjects1.length = 0;
gdjs.q6Code.GDpop_95upObjects2.length = 0;
gdjs.q6Code.GDcoachObjects1.length = 0;
gdjs.q6Code.GDcoachObjects2.length = 0;
gdjs.q6Code.GDnqObjects1.length = 0;
gdjs.q6Code.GDnqObjects2.length = 0;
gdjs.q6Code.GDnumberObjects1.length = 0;
gdjs.q6Code.GDnumberObjects2.length = 0;
gdjs.q6Code.GDscoreObjects1.length = 0;
gdjs.q6Code.GDscoreObjects2.length = 0;
gdjs.q6Code.GDcor_95mObjects1.length = 0;
gdjs.q6Code.GDcor_95mObjects2.length = 0;
gdjs.q6Code.GDwro_95mObjects1.length = 0;
gdjs.q6Code.GDwro_95mObjects2.length = 0;

gdjs.q6Code.eventsList3(runtimeScene);
return;

}

gdjs['q6Code'] = gdjs.q6Code;
