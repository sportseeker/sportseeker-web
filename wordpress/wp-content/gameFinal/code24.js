gdjs.q10Code = {};
gdjs.q10Code.GDpauseObjects1= [];
gdjs.q10Code.GDpauseObjects2= [];
gdjs.q10Code.GDpause_95lObjects1= [];
gdjs.q10Code.GDpause_95lObjects2= [];
gdjs.q10Code.GDexit2Objects1= [];
gdjs.q10Code.GDexit2Objects2= [];
gdjs.q10Code.GDexitObjects1= [];
gdjs.q10Code.GDexitObjects2= [];
gdjs.q10Code.GDplayObjects1= [];
gdjs.q10Code.GDplayObjects2= [];
gdjs.q10Code.GDpau_95tObjects1= [];
gdjs.q10Code.GDpau_95tObjects2= [];
gdjs.q10Code.GDresumeObjects1= [];
gdjs.q10Code.GDresumeObjects2= [];
gdjs.q10Code.GDExitObjects1= [];
gdjs.q10Code.GDExitObjects2= [];
gdjs.q10Code.GDscoreObjects1= [];
gdjs.q10Code.GDscoreObjects2= [];
gdjs.q10Code.GDlivesObjects1= [];
gdjs.q10Code.GDlivesObjects2= [];
gdjs.q10Code.GDcoachObjects1= [];
gdjs.q10Code.GDcoachObjects2= [];
gdjs.q10Code.GDpop_95upObjects1= [];
gdjs.q10Code.GDpop_95upObjects2= [];
gdjs.q10Code.GDlvl3_95iObjects1= [];
gdjs.q10Code.GDlvl3_95iObjects2= [];
gdjs.q10Code.GDbg22Objects1= [];
gdjs.q10Code.GDbg22Objects2= [];
gdjs.q10Code.GDcentreObjects1= [];
gdjs.q10Code.GDcentreObjects2= [];
gdjs.q10Code.GDq12Objects1= [];
gdjs.q10Code.GDq12Objects2= [];
gdjs.q10Code.GDwrongObjects1= [];
gdjs.q10Code.GDwrongObjects2= [];
gdjs.q10Code.GDcorrectObjects1= [];
gdjs.q10Code.GDcorrectObjects2= [];
gdjs.q10Code.GDpop_95upObjects1= [];
gdjs.q10Code.GDpop_95upObjects2= [];
gdjs.q10Code.GDcoachObjects1= [];
gdjs.q10Code.GDcoachObjects2= [];
gdjs.q10Code.GDnumber2Objects1= [];
gdjs.q10Code.GDnumber2Objects2= [];
gdjs.q10Code.GDscoreObjects1= [];
gdjs.q10Code.GDscoreObjects2= [];
gdjs.q10Code.GDcor_95mObjects1= [];
gdjs.q10Code.GDcor_95mObjects2= [];
gdjs.q10Code.GDwro_95mObjects1= [];
gdjs.q10Code.GDwro_95mObjects2= [];
gdjs.q10Code.GDwrong1Objects1= [];
gdjs.q10Code.GDwrong1Objects2= [];
gdjs.q10Code.GDlvl_95upObjects1= [];
gdjs.q10Code.GDlvl_95upObjects2= [];

gdjs.q10Code.conditionTrue_0 = {val:false};
gdjs.q10Code.condition0IsTrue_0 = {val:false};
gdjs.q10Code.condition1IsTrue_0 = {val:false};


gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDwrongObjects1Objects = Hashtable.newFrom({"wrong": gdjs.q10Code.GDwrongObjects1});gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDlvl_9595upObjects1Objects = Hashtable.newFrom({"lvl_up": gdjs.q10Code.GDlvl_95upObjects1});gdjs.q10Code.eventsList0 = function(runtimeScene) {

{


gdjs.q10Code.condition0IsTrue_0.val = false;
{
gdjs.q10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q10Code.condition0IsTrue_0.val) {
gdjs.q10Code.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q10Code.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));
gdjs.q10Code.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q10Code.GDwro_95mObjects1.createFrom(runtimeScene.getObjects("wro_m"));
/* Reuse gdjs.q10Code.GDwrongObjects1 */
gdjs.q10Code.GDwrong1Objects1.createFrom(runtimeScene.getObjects("wrong1"));
gdjs.q10Code.GDlvl_95upObjects1.length = 0;

{for(var i = 0, len = gdjs.q10Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDwrongObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q10Code.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDcorrectObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q10Code.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDpop_95upObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q10Code.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDcoachObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q10Code.GDwro_95mObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDwro_95mObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q10Code.GDwrong1Objects1.length ;i < len;++i) {
    gdjs.q10Code.GDwrong1Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDlvl_9595upObjects1Objects, 611, 408, "");
}}

}


};gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDwrong1Objects1Objects = Hashtable.newFrom({"wrong1": gdjs.q10Code.GDwrong1Objects1});gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDlvl_9595upObjects1Objects = Hashtable.newFrom({"lvl_up": gdjs.q10Code.GDlvl_95upObjects1});gdjs.q10Code.eventsList1 = function(runtimeScene) {

{


gdjs.q10Code.condition0IsTrue_0.val = false;
{
gdjs.q10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q10Code.condition0IsTrue_0.val) {
gdjs.q10Code.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q10Code.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));
gdjs.q10Code.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q10Code.GDwro_95mObjects1.createFrom(runtimeScene.getObjects("wro_m"));
gdjs.q10Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
/* Reuse gdjs.q10Code.GDwrong1Objects1 */
gdjs.q10Code.GDlvl_95upObjects1.length = 0;

{for(var i = 0, len = gdjs.q10Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDwrongObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q10Code.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDcorrectObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q10Code.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDpop_95upObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q10Code.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDcoachObjects1[i].hide(false);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDlvl_9595upObjects1Objects, 611, 408, "");
}{for(var i = 0, len = gdjs.q10Code.GDwro_95mObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDwro_95mObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q10Code.GDwrong1Objects1.length ;i < len;++i) {
    gdjs.q10Code.GDwrong1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDcorrectObjects1Objects = Hashtable.newFrom({"correct": gdjs.q10Code.GDcorrectObjects1});gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDlvl_9595upObjects1Objects = Hashtable.newFrom({"lvl_up": gdjs.q10Code.GDlvl_95upObjects1});gdjs.q10Code.eventsList2 = function(runtimeScene) {

{


gdjs.q10Code.condition0IsTrue_0.val = false;
{
gdjs.q10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q10Code.condition0IsTrue_0.val) {
gdjs.q10Code.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q10Code.GDcor_95mObjects1.createFrom(runtimeScene.getObjects("cor_m"));
/* Reuse gdjs.q10Code.GDcorrectObjects1 */
gdjs.q10Code.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q10Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
gdjs.q10Code.GDwrong1Objects1.createFrom(runtimeScene.getObjects("wrong1"));
gdjs.q10Code.GDlvl_95upObjects1.length = 0;

{for(var i = 0, len = gdjs.q10Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDwrongObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q10Code.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDcorrectObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDlvl_9595upObjects1Objects, 611, 408, "");
}{for(var i = 0, len = gdjs.q10Code.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDpop_95upObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q10Code.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDcoachObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}{for(var i = 0, len = gdjs.q10Code.GDcor_95mObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDcor_95mObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q10Code.GDwrong1Objects1.length ;i < len;++i) {
    gdjs.q10Code.GDwrong1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDlvl_9595upObjects1Objects = Hashtable.newFrom({"lvl_up": gdjs.q10Code.GDlvl_95upObjects1});gdjs.q10Code.eventsList3 = function(runtimeScene) {

{


gdjs.q10Code.condition0IsTrue_0.val = false;
{
gdjs.q10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level_3", false);
}}

}


};gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDwrongObjects1Objects = Hashtable.newFrom({"wrong": gdjs.q10Code.GDwrongObjects1});gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDwrong1Objects1Objects = Hashtable.newFrom({"wrong1": gdjs.q10Code.GDwrong1Objects1});gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDlvl_9595upObjects1Objects = Hashtable.newFrom({"lvl_up": gdjs.q10Code.GDlvl_95upObjects1});gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDcorrectObjects1Objects = Hashtable.newFrom({"correct": gdjs.q10Code.GDcorrectObjects1});gdjs.q10Code.eventsList4 = function(runtimeScene) {

{


{
gdjs.q10Code.GDcentreObjects1.createFrom(runtimeScene.getObjects("centre"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.q10Code.GDcentreObjects1.length !== 0 ? gdjs.q10Code.GDcentreObjects1[0] : null), true, "", 0);
}}

}


{


{
gdjs.q10Code.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.q10Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDscoreObjects1[i].setString("Total Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.q10Code.condition0IsTrue_0.val = false;
{
gdjs.q10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.q10Code.condition0IsTrue_0.val) {
gdjs.q10Code.GDbg22Objects1.createFrom(runtimeScene.getObjects("bg22"));
gdjs.q10Code.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q10Code.GDcor_95mObjects1.createFrom(runtimeScene.getObjects("cor_m"));
gdjs.q10Code.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q10Code.GDwro_95mObjects1.createFrom(runtimeScene.getObjects("wro_m"));
{for(var i = 0, len = gdjs.q10Code.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDpop_95upObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q10Code.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDcoachObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q10Code.GDcor_95mObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDcor_95mObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q10Code.GDwro_95mObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDwro_95mObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q10Code.GDbg22Objects1.length ;i < len;++i) {
    gdjs.q10Code.GDbg22Objects1[i].setOpacity(150);
}
}}

}


{

gdjs.q10Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));

gdjs.q10Code.condition0IsTrue_0.val = false;
{
gdjs.q10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDwrongObjects1Objects, runtimeScene, true, false);
}if (gdjs.q10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q10Code.GDwrongObjects1 */
{for(var i = 0, len = gdjs.q10Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDwrongObjects1[i].setColor("0;0;0");
}
}
{ //Subevents
gdjs.q10Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.q10Code.GDwrong1Objects1.createFrom(runtimeScene.getObjects("wrong1"));

gdjs.q10Code.condition0IsTrue_0.val = false;
{
gdjs.q10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDwrong1Objects1Objects, runtimeScene, true, false);
}if (gdjs.q10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q10Code.GDwrong1Objects1 */
{for(var i = 0, len = gdjs.q10Code.GDwrong1Objects1.length ;i < len;++i) {
    gdjs.q10Code.GDwrong1Objects1[i].setColor("0;0;0");
}
}
{ //Subevents
gdjs.q10Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.q10Code.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));

gdjs.q10Code.condition0IsTrue_0.val = false;
{
gdjs.q10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDcorrectObjects1Objects, runtimeScene, true, false);
}if (gdjs.q10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q10Code.GDcorrectObjects1 */
{for(var i = 0, len = gdjs.q10Code.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDcorrectObjects1[i].setColor("0;0;0");
}
}
{ //Subevents
gdjs.q10Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.q10Code.GDlvl_95upObjects1.createFrom(runtimeScene.getObjects("lvl_up"));

gdjs.q10Code.condition0IsTrue_0.val = false;
{
gdjs.q10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDlvl_9595upObjects1Objects, runtimeScene, true, false);
}if (gdjs.q10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q10Code.GDlvl_95upObjects1 */
{for(var i = 0, len = gdjs.q10Code.GDlvl_95upObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDlvl_95upObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.q10Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.q10Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));

gdjs.q10Code.condition0IsTrue_0.val = false;
{
gdjs.q10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDwrongObjects1Objects, runtimeScene, true, true);
}if (gdjs.q10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q10Code.GDwrongObjects1 */
{for(var i = 0, len = gdjs.q10Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDwrongObjects1[i].setColor("248;231;28");
}
}}

}


{

gdjs.q10Code.GDwrong1Objects1.createFrom(runtimeScene.getObjects("wrong1"));

gdjs.q10Code.condition0IsTrue_0.val = false;
{
gdjs.q10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDwrong1Objects1Objects, runtimeScene, true, true);
}if (gdjs.q10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q10Code.GDwrong1Objects1 */
{for(var i = 0, len = gdjs.q10Code.GDwrong1Objects1.length ;i < len;++i) {
    gdjs.q10Code.GDwrong1Objects1[i].setColor("248;231;28");
}
}}

}


{

gdjs.q10Code.GDlvl_95upObjects1.createFrom(runtimeScene.getObjects("lvl_up"));

gdjs.q10Code.condition0IsTrue_0.val = false;
{
gdjs.q10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDlvl_9595upObjects1Objects, runtimeScene, true, true);
}if (gdjs.q10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q10Code.GDlvl_95upObjects1 */
{for(var i = 0, len = gdjs.q10Code.GDlvl_95upObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDlvl_95upObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.q10Code.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));

gdjs.q10Code.condition0IsTrue_0.val = false;
{
gdjs.q10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q10Code.mapOfGDgdjs_46q10Code_46GDcorrectObjects1Objects, runtimeScene, true, true);
}if (gdjs.q10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q10Code.GDcorrectObjects1 */
{for(var i = 0, len = gdjs.q10Code.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q10Code.GDcorrectObjects1[i].setColor("248;231;28");
}
}}

}


{


{
}

}


};

gdjs.q10Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.q10Code.GDpauseObjects1.length = 0;
gdjs.q10Code.GDpauseObjects2.length = 0;
gdjs.q10Code.GDpause_95lObjects1.length = 0;
gdjs.q10Code.GDpause_95lObjects2.length = 0;
gdjs.q10Code.GDexit2Objects1.length = 0;
gdjs.q10Code.GDexit2Objects2.length = 0;
gdjs.q10Code.GDexitObjects1.length = 0;
gdjs.q10Code.GDexitObjects2.length = 0;
gdjs.q10Code.GDplayObjects1.length = 0;
gdjs.q10Code.GDplayObjects2.length = 0;
gdjs.q10Code.GDpau_95tObjects1.length = 0;
gdjs.q10Code.GDpau_95tObjects2.length = 0;
gdjs.q10Code.GDresumeObjects1.length = 0;
gdjs.q10Code.GDresumeObjects2.length = 0;
gdjs.q10Code.GDExitObjects1.length = 0;
gdjs.q10Code.GDExitObjects2.length = 0;
gdjs.q10Code.GDscoreObjects1.length = 0;
gdjs.q10Code.GDscoreObjects2.length = 0;
gdjs.q10Code.GDlivesObjects1.length = 0;
gdjs.q10Code.GDlivesObjects2.length = 0;
gdjs.q10Code.GDcoachObjects1.length = 0;
gdjs.q10Code.GDcoachObjects2.length = 0;
gdjs.q10Code.GDpop_95upObjects1.length = 0;
gdjs.q10Code.GDpop_95upObjects2.length = 0;
gdjs.q10Code.GDlvl3_95iObjects1.length = 0;
gdjs.q10Code.GDlvl3_95iObjects2.length = 0;
gdjs.q10Code.GDbg22Objects1.length = 0;
gdjs.q10Code.GDbg22Objects2.length = 0;
gdjs.q10Code.GDcentreObjects1.length = 0;
gdjs.q10Code.GDcentreObjects2.length = 0;
gdjs.q10Code.GDq12Objects1.length = 0;
gdjs.q10Code.GDq12Objects2.length = 0;
gdjs.q10Code.GDwrongObjects1.length = 0;
gdjs.q10Code.GDwrongObjects2.length = 0;
gdjs.q10Code.GDcorrectObjects1.length = 0;
gdjs.q10Code.GDcorrectObjects2.length = 0;
gdjs.q10Code.GDpop_95upObjects1.length = 0;
gdjs.q10Code.GDpop_95upObjects2.length = 0;
gdjs.q10Code.GDcoachObjects1.length = 0;
gdjs.q10Code.GDcoachObjects2.length = 0;
gdjs.q10Code.GDnumber2Objects1.length = 0;
gdjs.q10Code.GDnumber2Objects2.length = 0;
gdjs.q10Code.GDscoreObjects1.length = 0;
gdjs.q10Code.GDscoreObjects2.length = 0;
gdjs.q10Code.GDcor_95mObjects1.length = 0;
gdjs.q10Code.GDcor_95mObjects2.length = 0;
gdjs.q10Code.GDwro_95mObjects1.length = 0;
gdjs.q10Code.GDwro_95mObjects2.length = 0;
gdjs.q10Code.GDwrong1Objects1.length = 0;
gdjs.q10Code.GDwrong1Objects2.length = 0;
gdjs.q10Code.GDlvl_95upObjects1.length = 0;
gdjs.q10Code.GDlvl_95upObjects2.length = 0;

gdjs.q10Code.eventsList4(runtimeScene);
return;

}

gdjs['q10Code'] = gdjs.q10Code;
