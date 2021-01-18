gdjs.q2_95wCode = {};
gdjs.q2_95wCode.GDpauseObjects1= [];
gdjs.q2_95wCode.GDpauseObjects2= [];
gdjs.q2_95wCode.GDpause_95lObjects1= [];
gdjs.q2_95wCode.GDpause_95lObjects2= [];
gdjs.q2_95wCode.GDexit2Objects1= [];
gdjs.q2_95wCode.GDexit2Objects2= [];
gdjs.q2_95wCode.GDexitObjects1= [];
gdjs.q2_95wCode.GDexitObjects2= [];
gdjs.q2_95wCode.GDplayObjects1= [];
gdjs.q2_95wCode.GDplayObjects2= [];
gdjs.q2_95wCode.GDpau_95tObjects1= [];
gdjs.q2_95wCode.GDpau_95tObjects2= [];
gdjs.q2_95wCode.GDresumeObjects1= [];
gdjs.q2_95wCode.GDresumeObjects2= [];
gdjs.q2_95wCode.GDExitObjects1= [];
gdjs.q2_95wCode.GDExitObjects2= [];
gdjs.q2_95wCode.GDscoreObjects1= [];
gdjs.q2_95wCode.GDscoreObjects2= [];
gdjs.q2_95wCode.GDlivesObjects1= [];
gdjs.q2_95wCode.GDlivesObjects2= [];
gdjs.q2_95wCode.GDcoachObjects1= [];
gdjs.q2_95wCode.GDcoachObjects2= [];
gdjs.q2_95wCode.GDpop_95upObjects1= [];
gdjs.q2_95wCode.GDpop_95upObjects2= [];
gdjs.q2_95wCode.GDlvl3_95iObjects1= [];
gdjs.q2_95wCode.GDlvl3_95iObjects2= [];
gdjs.q2_95wCode.GDbg2Objects1= [];
gdjs.q2_95wCode.GDbg2Objects2= [];
gdjs.q2_95wCode.GDcentreObjects1= [];
gdjs.q2_95wCode.GDcentreObjects2= [];
gdjs.q2_95wCode.GDq12Objects1= [];
gdjs.q2_95wCode.GDq12Objects2= [];
gdjs.q2_95wCode.GDwrongObjects1= [];
gdjs.q2_95wCode.GDwrongObjects2= [];
gdjs.q2_95wCode.GDcorrectObjects1= [];
gdjs.q2_95wCode.GDcorrectObjects2= [];
gdjs.q2_95wCode.GDpop_95upObjects1= [];
gdjs.q2_95wCode.GDpop_95upObjects2= [];
gdjs.q2_95wCode.GDcoachObjects1= [];
gdjs.q2_95wCode.GDcoachObjects2= [];
gdjs.q2_95wCode.GDnqObjects1= [];
gdjs.q2_95wCode.GDnqObjects2= [];
gdjs.q2_95wCode.GDnumber2Objects1= [];
gdjs.q2_95wCode.GDnumber2Objects2= [];
gdjs.q2_95wCode.GDscoreObjects1= [];
gdjs.q2_95wCode.GDscoreObjects2= [];
gdjs.q2_95wCode.GDcor_95mObjects1= [];
gdjs.q2_95wCode.GDcor_95mObjects2= [];
gdjs.q2_95wCode.GDwro_95mObjects1= [];
gdjs.q2_95wCode.GDwro_95mObjects2= [];
gdjs.q2_95wCode.GDwrong1Objects1= [];
gdjs.q2_95wCode.GDwrong1Objects2= [];

gdjs.q2_95wCode.conditionTrue_0 = {val:false};
gdjs.q2_95wCode.condition0IsTrue_0 = {val:false};
gdjs.q2_95wCode.condition1IsTrue_0 = {val:false};


gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDwrongObjects1Objects = Hashtable.newFrom({"wrong": gdjs.q2_95wCode.GDwrongObjects1});gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDnqObjects1Objects = Hashtable.newFrom({"nq": gdjs.q2_95wCode.GDnqObjects1});gdjs.q2_95wCode.eventsList0 = function(runtimeScene) {

{


gdjs.q2_95wCode.condition0IsTrue_0.val = false;
{
gdjs.q2_95wCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q2_95wCode.condition0IsTrue_0.val) {
gdjs.q2_95wCode.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q2_95wCode.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));
gdjs.q2_95wCode.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q2_95wCode.GDwro_95mObjects1.createFrom(runtimeScene.getObjects("wro_m"));
/* Reuse gdjs.q2_95wCode.GDwrongObjects1 */
gdjs.q2_95wCode.GDwrong1Objects1.createFrom(runtimeScene.getObjects("wrong1"));
gdjs.q2_95wCode.GDnqObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDnqObjects1Objects, 677, 440, "");
}{for(var i = 0, len = gdjs.q2_95wCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDwrongObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q2_95wCode.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDcorrectObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q2_95wCode.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDpop_95upObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q2_95wCode.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDcoachObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q2_95wCode.GDwro_95mObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDwro_95mObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q2_95wCode.GDwrong1Objects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDwrong1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDwrong1Objects1Objects = Hashtable.newFrom({"wrong1": gdjs.q2_95wCode.GDwrong1Objects1});gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDnqObjects1Objects = Hashtable.newFrom({"nq": gdjs.q2_95wCode.GDnqObjects1});gdjs.q2_95wCode.eventsList1 = function(runtimeScene) {

{


gdjs.q2_95wCode.condition0IsTrue_0.val = false;
{
gdjs.q2_95wCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q2_95wCode.condition0IsTrue_0.val) {
gdjs.q2_95wCode.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q2_95wCode.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));
gdjs.q2_95wCode.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q2_95wCode.GDwro_95mObjects1.createFrom(runtimeScene.getObjects("wro_m"));
gdjs.q2_95wCode.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
/* Reuse gdjs.q2_95wCode.GDwrong1Objects1 */
gdjs.q2_95wCode.GDnqObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDnqObjects1Objects, 677, 440, "");
}{for(var i = 0, len = gdjs.q2_95wCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDwrongObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q2_95wCode.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDcorrectObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q2_95wCode.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDpop_95upObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q2_95wCode.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDcoachObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q2_95wCode.GDwro_95mObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDwro_95mObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q2_95wCode.GDwrong1Objects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDwrong1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDcorrectObjects1Objects = Hashtable.newFrom({"correct": gdjs.q2_95wCode.GDcorrectObjects1});gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDnqObjects1Objects = Hashtable.newFrom({"nq": gdjs.q2_95wCode.GDnqObjects1});gdjs.q2_95wCode.eventsList2 = function(runtimeScene) {

{


gdjs.q2_95wCode.condition0IsTrue_0.val = false;
{
gdjs.q2_95wCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q2_95wCode.condition0IsTrue_0.val) {
gdjs.q2_95wCode.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q2_95wCode.GDcor_95mObjects1.createFrom(runtimeScene.getObjects("cor_m"));
/* Reuse gdjs.q2_95wCode.GDcorrectObjects1 */
gdjs.q2_95wCode.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q2_95wCode.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
gdjs.q2_95wCode.GDwrong1Objects1.createFrom(runtimeScene.getObjects("wrong1"));
gdjs.q2_95wCode.GDnqObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDnqObjects1Objects, 677, 440, "");
}{for(var i = 0, len = gdjs.q2_95wCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDwrongObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q2_95wCode.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDcorrectObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q2_95wCode.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDpop_95upObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q2_95wCode.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDcoachObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}{for(var i = 0, len = gdjs.q2_95wCode.GDcor_95mObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDcor_95mObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q2_95wCode.GDwrong1Objects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDwrong1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDnqObjects1Objects = Hashtable.newFrom({"nq": gdjs.q2_95wCode.GDnqObjects1});gdjs.q2_95wCode.eventsList3 = function(runtimeScene) {

{


gdjs.q2_95wCode.condition0IsTrue_0.val = false;
{
gdjs.q2_95wCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q2_95wCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "q3_w", false);
}}

}


};gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDwrongObjects1Objects = Hashtable.newFrom({"wrong": gdjs.q2_95wCode.GDwrongObjects1});gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDwrong1Objects1Objects = Hashtable.newFrom({"wrong1": gdjs.q2_95wCode.GDwrong1Objects1});gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDnqObjects1Objects = Hashtable.newFrom({"nq": gdjs.q2_95wCode.GDnqObjects1});gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDcorrectObjects1Objects = Hashtable.newFrom({"correct": gdjs.q2_95wCode.GDcorrectObjects1});gdjs.q2_95wCode.eventsList4 = function(runtimeScene) {

{


{
gdjs.q2_95wCode.GDcentreObjects1.createFrom(runtimeScene.getObjects("centre"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.q2_95wCode.GDcentreObjects1.length !== 0 ? gdjs.q2_95wCode.GDcentreObjects1[0] : null), true, "", 0);
}}

}


{


{
gdjs.q2_95wCode.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.q2_95wCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDscoreObjects1[i].setString("Total Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.q2_95wCode.condition0IsTrue_0.val = false;
{
gdjs.q2_95wCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.q2_95wCode.condition0IsTrue_0.val) {
gdjs.q2_95wCode.GDbg2Objects1.createFrom(runtimeScene.getObjects("bg2"));
gdjs.q2_95wCode.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q2_95wCode.GDcor_95mObjects1.createFrom(runtimeScene.getObjects("cor_m"));
gdjs.q2_95wCode.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q2_95wCode.GDwro_95mObjects1.createFrom(runtimeScene.getObjects("wro_m"));
{for(var i = 0, len = gdjs.q2_95wCode.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDpop_95upObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q2_95wCode.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDcoachObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q2_95wCode.GDcor_95mObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDcor_95mObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q2_95wCode.GDwro_95mObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDwro_95mObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q2_95wCode.GDbg2Objects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDbg2Objects1[i].setOpacity(150);
}
}}

}


{

gdjs.q2_95wCode.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));

gdjs.q2_95wCode.condition0IsTrue_0.val = false;
{
gdjs.q2_95wCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDwrongObjects1Objects, runtimeScene, true, false);
}if (gdjs.q2_95wCode.condition0IsTrue_0.val) {
/* Reuse gdjs.q2_95wCode.GDwrongObjects1 */
{for(var i = 0, len = gdjs.q2_95wCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDwrongObjects1[i].setColor("0;0;0");
}
}
{ //Subevents
gdjs.q2_95wCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.q2_95wCode.GDwrong1Objects1.createFrom(runtimeScene.getObjects("wrong1"));

gdjs.q2_95wCode.condition0IsTrue_0.val = false;
{
gdjs.q2_95wCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDwrong1Objects1Objects, runtimeScene, true, false);
}if (gdjs.q2_95wCode.condition0IsTrue_0.val) {
/* Reuse gdjs.q2_95wCode.GDwrong1Objects1 */
{for(var i = 0, len = gdjs.q2_95wCode.GDwrong1Objects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDwrong1Objects1[i].setColor("0;0;0");
}
}
{ //Subevents
gdjs.q2_95wCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.q2_95wCode.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));

gdjs.q2_95wCode.condition0IsTrue_0.val = false;
{
gdjs.q2_95wCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDcorrectObjects1Objects, runtimeScene, true, false);
}if (gdjs.q2_95wCode.condition0IsTrue_0.val) {
/* Reuse gdjs.q2_95wCode.GDcorrectObjects1 */
{for(var i = 0, len = gdjs.q2_95wCode.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDcorrectObjects1[i].setColor("0;0;0");
}
}
{ //Subevents
gdjs.q2_95wCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.q2_95wCode.GDnqObjects1.createFrom(runtimeScene.getObjects("nq"));

gdjs.q2_95wCode.condition0IsTrue_0.val = false;
{
gdjs.q2_95wCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDnqObjects1Objects, runtimeScene, true, false);
}if (gdjs.q2_95wCode.condition0IsTrue_0.val) {
/* Reuse gdjs.q2_95wCode.GDnqObjects1 */
{for(var i = 0, len = gdjs.q2_95wCode.GDnqObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDnqObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.q2_95wCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.q2_95wCode.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));

gdjs.q2_95wCode.condition0IsTrue_0.val = false;
{
gdjs.q2_95wCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDwrongObjects1Objects, runtimeScene, true, true);
}if (gdjs.q2_95wCode.condition0IsTrue_0.val) {
/* Reuse gdjs.q2_95wCode.GDwrongObjects1 */
{for(var i = 0, len = gdjs.q2_95wCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDwrongObjects1[i].setColor("248;231;28");
}
}}

}


{

gdjs.q2_95wCode.GDwrong1Objects1.createFrom(runtimeScene.getObjects("wrong1"));

gdjs.q2_95wCode.condition0IsTrue_0.val = false;
{
gdjs.q2_95wCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDwrong1Objects1Objects, runtimeScene, true, true);
}if (gdjs.q2_95wCode.condition0IsTrue_0.val) {
/* Reuse gdjs.q2_95wCode.GDwrong1Objects1 */
{for(var i = 0, len = gdjs.q2_95wCode.GDwrong1Objects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDwrong1Objects1[i].setColor("248;231;28");
}
}}

}


{

gdjs.q2_95wCode.GDnqObjects1.createFrom(runtimeScene.getObjects("nq"));

gdjs.q2_95wCode.condition0IsTrue_0.val = false;
{
gdjs.q2_95wCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDnqObjects1Objects, runtimeScene, true, true);
}if (gdjs.q2_95wCode.condition0IsTrue_0.val) {
/* Reuse gdjs.q2_95wCode.GDnqObjects1 */
{for(var i = 0, len = gdjs.q2_95wCode.GDnqObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDnqObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.q2_95wCode.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));

gdjs.q2_95wCode.condition0IsTrue_0.val = false;
{
gdjs.q2_95wCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q2_95wCode.mapOfGDgdjs_46q2_9595wCode_46GDcorrectObjects1Objects, runtimeScene, true, true);
}if (gdjs.q2_95wCode.condition0IsTrue_0.val) {
/* Reuse gdjs.q2_95wCode.GDcorrectObjects1 */
{for(var i = 0, len = gdjs.q2_95wCode.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q2_95wCode.GDcorrectObjects1[i].setColor("248;231;28");
}
}}

}


{


{
}

}


};

gdjs.q2_95wCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.q2_95wCode.GDpauseObjects1.length = 0;
gdjs.q2_95wCode.GDpauseObjects2.length = 0;
gdjs.q2_95wCode.GDpause_95lObjects1.length = 0;
gdjs.q2_95wCode.GDpause_95lObjects2.length = 0;
gdjs.q2_95wCode.GDexit2Objects1.length = 0;
gdjs.q2_95wCode.GDexit2Objects2.length = 0;
gdjs.q2_95wCode.GDexitObjects1.length = 0;
gdjs.q2_95wCode.GDexitObjects2.length = 0;
gdjs.q2_95wCode.GDplayObjects1.length = 0;
gdjs.q2_95wCode.GDplayObjects2.length = 0;
gdjs.q2_95wCode.GDpau_95tObjects1.length = 0;
gdjs.q2_95wCode.GDpau_95tObjects2.length = 0;
gdjs.q2_95wCode.GDresumeObjects1.length = 0;
gdjs.q2_95wCode.GDresumeObjects2.length = 0;
gdjs.q2_95wCode.GDExitObjects1.length = 0;
gdjs.q2_95wCode.GDExitObjects2.length = 0;
gdjs.q2_95wCode.GDscoreObjects1.length = 0;
gdjs.q2_95wCode.GDscoreObjects2.length = 0;
gdjs.q2_95wCode.GDlivesObjects1.length = 0;
gdjs.q2_95wCode.GDlivesObjects2.length = 0;
gdjs.q2_95wCode.GDcoachObjects1.length = 0;
gdjs.q2_95wCode.GDcoachObjects2.length = 0;
gdjs.q2_95wCode.GDpop_95upObjects1.length = 0;
gdjs.q2_95wCode.GDpop_95upObjects2.length = 0;
gdjs.q2_95wCode.GDlvl3_95iObjects1.length = 0;
gdjs.q2_95wCode.GDlvl3_95iObjects2.length = 0;
gdjs.q2_95wCode.GDbg2Objects1.length = 0;
gdjs.q2_95wCode.GDbg2Objects2.length = 0;
gdjs.q2_95wCode.GDcentreObjects1.length = 0;
gdjs.q2_95wCode.GDcentreObjects2.length = 0;
gdjs.q2_95wCode.GDq12Objects1.length = 0;
gdjs.q2_95wCode.GDq12Objects2.length = 0;
gdjs.q2_95wCode.GDwrongObjects1.length = 0;
gdjs.q2_95wCode.GDwrongObjects2.length = 0;
gdjs.q2_95wCode.GDcorrectObjects1.length = 0;
gdjs.q2_95wCode.GDcorrectObjects2.length = 0;
gdjs.q2_95wCode.GDpop_95upObjects1.length = 0;
gdjs.q2_95wCode.GDpop_95upObjects2.length = 0;
gdjs.q2_95wCode.GDcoachObjects1.length = 0;
gdjs.q2_95wCode.GDcoachObjects2.length = 0;
gdjs.q2_95wCode.GDnqObjects1.length = 0;
gdjs.q2_95wCode.GDnqObjects2.length = 0;
gdjs.q2_95wCode.GDnumber2Objects1.length = 0;
gdjs.q2_95wCode.GDnumber2Objects2.length = 0;
gdjs.q2_95wCode.GDscoreObjects1.length = 0;
gdjs.q2_95wCode.GDscoreObjects2.length = 0;
gdjs.q2_95wCode.GDcor_95mObjects1.length = 0;
gdjs.q2_95wCode.GDcor_95mObjects2.length = 0;
gdjs.q2_95wCode.GDwro_95mObjects1.length = 0;
gdjs.q2_95wCode.GDwro_95mObjects2.length = 0;
gdjs.q2_95wCode.GDwrong1Objects1.length = 0;
gdjs.q2_95wCode.GDwrong1Objects2.length = 0;

gdjs.q2_95wCode.eventsList4(runtimeScene);
return;

}

gdjs['q2_95wCode'] = gdjs.q2_95wCode;
