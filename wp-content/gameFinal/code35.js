gdjs.q5_95nCode = {};
gdjs.q5_95nCode.GDpauseObjects1= [];
gdjs.q5_95nCode.GDpauseObjects2= [];
gdjs.q5_95nCode.GDpause_95lObjects1= [];
gdjs.q5_95nCode.GDpause_95lObjects2= [];
gdjs.q5_95nCode.GDexit2Objects1= [];
gdjs.q5_95nCode.GDexit2Objects2= [];
gdjs.q5_95nCode.GDexitObjects1= [];
gdjs.q5_95nCode.GDexitObjects2= [];
gdjs.q5_95nCode.GDplayObjects1= [];
gdjs.q5_95nCode.GDplayObjects2= [];
gdjs.q5_95nCode.GDpau_95tObjects1= [];
gdjs.q5_95nCode.GDpau_95tObjects2= [];
gdjs.q5_95nCode.GDresumeObjects1= [];
gdjs.q5_95nCode.GDresumeObjects2= [];
gdjs.q5_95nCode.GDExitObjects1= [];
gdjs.q5_95nCode.GDExitObjects2= [];
gdjs.q5_95nCode.GDscoreObjects1= [];
gdjs.q5_95nCode.GDscoreObjects2= [];
gdjs.q5_95nCode.GDlivesObjects1= [];
gdjs.q5_95nCode.GDlivesObjects2= [];
gdjs.q5_95nCode.GDcoachObjects1= [];
gdjs.q5_95nCode.GDcoachObjects2= [];
gdjs.q5_95nCode.GDpop_95upObjects1= [];
gdjs.q5_95nCode.GDpop_95upObjects2= [];
gdjs.q5_95nCode.GDlvl3_95iObjects1= [];
gdjs.q5_95nCode.GDlvl3_95iObjects2= [];
gdjs.q5_95nCode.GDbg2222Objects1= [];
gdjs.q5_95nCode.GDbg2222Objects2= [];
gdjs.q5_95nCode.GDcentreObjects1= [];
gdjs.q5_95nCode.GDcentreObjects2= [];
gdjs.q5_95nCode.GDq12Objects1= [];
gdjs.q5_95nCode.GDq12Objects2= [];
gdjs.q5_95nCode.GDwrongObjects1= [];
gdjs.q5_95nCode.GDwrongObjects2= [];
gdjs.q5_95nCode.GDcorrectObjects1= [];
gdjs.q5_95nCode.GDcorrectObjects2= [];
gdjs.q5_95nCode.GDpop_95upObjects1= [];
gdjs.q5_95nCode.GDpop_95upObjects2= [];
gdjs.q5_95nCode.GDcoachObjects1= [];
gdjs.q5_95nCode.GDcoachObjects2= [];
gdjs.q5_95nCode.GDnumber2Objects1= [];
gdjs.q5_95nCode.GDnumber2Objects2= [];
gdjs.q5_95nCode.GDscoreObjects1= [];
gdjs.q5_95nCode.GDscoreObjects2= [];
gdjs.q5_95nCode.GDcor_95mObjects1= [];
gdjs.q5_95nCode.GDcor_95mObjects2= [];
gdjs.q5_95nCode.GDwro_95mObjects1= [];
gdjs.q5_95nCode.GDwro_95mObjects2= [];
gdjs.q5_95nCode.GDlvl2Objects1= [];
gdjs.q5_95nCode.GDlvl2Objects2= [];

gdjs.q5_95nCode.conditionTrue_0 = {val:false};
gdjs.q5_95nCode.condition0IsTrue_0 = {val:false};
gdjs.q5_95nCode.condition1IsTrue_0 = {val:false};


gdjs.q5_95nCode.mapOfGDgdjs_46q5_9595nCode_46GDwrongObjects1Objects = Hashtable.newFrom({"wrong": gdjs.q5_95nCode.GDwrongObjects1});gdjs.q5_95nCode.mapOfGDgdjs_46q5_9595nCode_46GDlvl2Objects1Objects = Hashtable.newFrom({"lvl2": gdjs.q5_95nCode.GDlvl2Objects1});gdjs.q5_95nCode.eventsList0 = function(runtimeScene) {

{


gdjs.q5_95nCode.condition0IsTrue_0.val = false;
{
gdjs.q5_95nCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q5_95nCode.condition0IsTrue_0.val) {
gdjs.q5_95nCode.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q5_95nCode.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));
gdjs.q5_95nCode.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q5_95nCode.GDwro_95mObjects1.createFrom(runtimeScene.getObjects("wro_m"));
/* Reuse gdjs.q5_95nCode.GDwrongObjects1 */
gdjs.q5_95nCode.GDlvl2Objects1.length = 0;

{for(var i = 0, len = gdjs.q5_95nCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDwrongObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q5_95nCode.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDcorrectObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q5_95nCode.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDpop_95upObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q5_95nCode.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDcoachObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q5_95nCode.GDwro_95mObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDwro_95mObjects1[i].hide(false);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.q5_95nCode.mapOfGDgdjs_46q5_9595nCode_46GDlvl2Objects1Objects, 630, 426, "");
}}

}


};gdjs.q5_95nCode.mapOfGDgdjs_46q5_9595nCode_46GDcorrectObjects1Objects = Hashtable.newFrom({"correct": gdjs.q5_95nCode.GDcorrectObjects1});gdjs.q5_95nCode.mapOfGDgdjs_46q5_9595nCode_46GDlvl2Objects1Objects = Hashtable.newFrom({"lvl2": gdjs.q5_95nCode.GDlvl2Objects1});gdjs.q5_95nCode.eventsList1 = function(runtimeScene) {

{


gdjs.q5_95nCode.condition0IsTrue_0.val = false;
{
gdjs.q5_95nCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q5_95nCode.condition0IsTrue_0.val) {
gdjs.q5_95nCode.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q5_95nCode.GDcor_95mObjects1.createFrom(runtimeScene.getObjects("cor_m"));
/* Reuse gdjs.q5_95nCode.GDcorrectObjects1 */
gdjs.q5_95nCode.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q5_95nCode.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
gdjs.q5_95nCode.GDlvl2Objects1.length = 0;

{for(var i = 0, len = gdjs.q5_95nCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDwrongObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q5_95nCode.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDcorrectObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q5_95nCode.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDpop_95upObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q5_95nCode.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDcoachObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}{for(var i = 0, len = gdjs.q5_95nCode.GDcor_95mObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDcor_95mObjects1[i].hide(false);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.q5_95nCode.mapOfGDgdjs_46q5_9595nCode_46GDlvl2Objects1Objects, 630, 426, "");
}}

}


};gdjs.q5_95nCode.eventsList2 = function(runtimeScene) {

{


{
}

}


};gdjs.q5_95nCode.mapOfGDgdjs_46q5_9595nCode_46GDwrongObjects1Objects = Hashtable.newFrom({"wrong": gdjs.q5_95nCode.GDwrongObjects1});gdjs.q5_95nCode.mapOfGDgdjs_46q5_9595nCode_46GDlvl2Objects1Objects = Hashtable.newFrom({"lvl2": gdjs.q5_95nCode.GDlvl2Objects1});gdjs.q5_95nCode.eventsList3 = function(runtimeScene) {

{


gdjs.q5_95nCode.condition0IsTrue_0.val = false;
{
gdjs.q5_95nCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q5_95nCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level_2", false);
}}

}


};gdjs.q5_95nCode.mapOfGDgdjs_46q5_9595nCode_46GDlvl2Objects1Objects = Hashtable.newFrom({"lvl2": gdjs.q5_95nCode.GDlvl2Objects1});gdjs.q5_95nCode.mapOfGDgdjs_46q5_9595nCode_46GDcorrectObjects1Objects = Hashtable.newFrom({"correct": gdjs.q5_95nCode.GDcorrectObjects1});gdjs.q5_95nCode.eventsList4 = function(runtimeScene) {

{


{
gdjs.q5_95nCode.GDcentreObjects1.createFrom(runtimeScene.getObjects("centre"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.q5_95nCode.GDcentreObjects1.length !== 0 ? gdjs.q5_95nCode.GDcentreObjects1[0] : null), true, "", 0);
}}

}


{


{
gdjs.q5_95nCode.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.q5_95nCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDscoreObjects1[i].setString("Total Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.q5_95nCode.condition0IsTrue_0.val = false;
{
gdjs.q5_95nCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.q5_95nCode.condition0IsTrue_0.val) {
gdjs.q5_95nCode.GDbg2222Objects1.createFrom(runtimeScene.getObjects("bg2222"));
gdjs.q5_95nCode.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q5_95nCode.GDcor_95mObjects1.createFrom(runtimeScene.getObjects("cor_m"));
gdjs.q5_95nCode.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q5_95nCode.GDwro_95mObjects1.createFrom(runtimeScene.getObjects("wro_m"));
{for(var i = 0, len = gdjs.q5_95nCode.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDpop_95upObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q5_95nCode.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDcoachObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q5_95nCode.GDcor_95mObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDcor_95mObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q5_95nCode.GDwro_95mObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDwro_95mObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q5_95nCode.GDbg2222Objects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDbg2222Objects1[i].setOpacity(150);
}
}}

}


{

gdjs.q5_95nCode.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));

gdjs.q5_95nCode.condition0IsTrue_0.val = false;
{
gdjs.q5_95nCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q5_95nCode.mapOfGDgdjs_46q5_9595nCode_46GDwrongObjects1Objects, runtimeScene, true, false);
}if (gdjs.q5_95nCode.condition0IsTrue_0.val) {
/* Reuse gdjs.q5_95nCode.GDwrongObjects1 */
{for(var i = 0, len = gdjs.q5_95nCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDwrongObjects1[i].setColor("0;0;0");
}
}
{ //Subevents
gdjs.q5_95nCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


{

gdjs.q5_95nCode.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));

gdjs.q5_95nCode.condition0IsTrue_0.val = false;
{
gdjs.q5_95nCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q5_95nCode.mapOfGDgdjs_46q5_9595nCode_46GDcorrectObjects1Objects, runtimeScene, true, false);
}if (gdjs.q5_95nCode.condition0IsTrue_0.val) {
/* Reuse gdjs.q5_95nCode.GDcorrectObjects1 */
{for(var i = 0, len = gdjs.q5_95nCode.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDcorrectObjects1[i].setColor("0;0;0");
}
}
{ //Subevents
gdjs.q5_95nCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


{

{ //Subevents
gdjs.q5_95nCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.q5_95nCode.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));

gdjs.q5_95nCode.condition0IsTrue_0.val = false;
{
gdjs.q5_95nCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q5_95nCode.mapOfGDgdjs_46q5_9595nCode_46GDwrongObjects1Objects, runtimeScene, true, true);
}if (gdjs.q5_95nCode.condition0IsTrue_0.val) {
/* Reuse gdjs.q5_95nCode.GDwrongObjects1 */
{for(var i = 0, len = gdjs.q5_95nCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDwrongObjects1[i].setColor("248;231;28");
}
}}

}


{

gdjs.q5_95nCode.GDlvl2Objects1.createFrom(runtimeScene.getObjects("lvl2"));

gdjs.q5_95nCode.condition0IsTrue_0.val = false;
{
gdjs.q5_95nCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q5_95nCode.mapOfGDgdjs_46q5_9595nCode_46GDlvl2Objects1Objects, runtimeScene, true, false);
}if (gdjs.q5_95nCode.condition0IsTrue_0.val) {
/* Reuse gdjs.q5_95nCode.GDlvl2Objects1 */
{for(var i = 0, len = gdjs.q5_95nCode.GDlvl2Objects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDlvl2Objects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.q5_95nCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.q5_95nCode.GDlvl2Objects1.createFrom(runtimeScene.getObjects("lvl2"));

gdjs.q5_95nCode.condition0IsTrue_0.val = false;
{
gdjs.q5_95nCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q5_95nCode.mapOfGDgdjs_46q5_9595nCode_46GDlvl2Objects1Objects, runtimeScene, true, true);
}if (gdjs.q5_95nCode.condition0IsTrue_0.val) {
/* Reuse gdjs.q5_95nCode.GDlvl2Objects1 */
{for(var i = 0, len = gdjs.q5_95nCode.GDlvl2Objects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDlvl2Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.q5_95nCode.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));

gdjs.q5_95nCode.condition0IsTrue_0.val = false;
{
gdjs.q5_95nCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q5_95nCode.mapOfGDgdjs_46q5_9595nCode_46GDcorrectObjects1Objects, runtimeScene, true, true);
}if (gdjs.q5_95nCode.condition0IsTrue_0.val) {
/* Reuse gdjs.q5_95nCode.GDcorrectObjects1 */
{for(var i = 0, len = gdjs.q5_95nCode.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q5_95nCode.GDcorrectObjects1[i].setColor("248;231;28");
}
}}

}


{


{
}

}


};

gdjs.q5_95nCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.q5_95nCode.GDpauseObjects1.length = 0;
gdjs.q5_95nCode.GDpauseObjects2.length = 0;
gdjs.q5_95nCode.GDpause_95lObjects1.length = 0;
gdjs.q5_95nCode.GDpause_95lObjects2.length = 0;
gdjs.q5_95nCode.GDexit2Objects1.length = 0;
gdjs.q5_95nCode.GDexit2Objects2.length = 0;
gdjs.q5_95nCode.GDexitObjects1.length = 0;
gdjs.q5_95nCode.GDexitObjects2.length = 0;
gdjs.q5_95nCode.GDplayObjects1.length = 0;
gdjs.q5_95nCode.GDplayObjects2.length = 0;
gdjs.q5_95nCode.GDpau_95tObjects1.length = 0;
gdjs.q5_95nCode.GDpau_95tObjects2.length = 0;
gdjs.q5_95nCode.GDresumeObjects1.length = 0;
gdjs.q5_95nCode.GDresumeObjects2.length = 0;
gdjs.q5_95nCode.GDExitObjects1.length = 0;
gdjs.q5_95nCode.GDExitObjects2.length = 0;
gdjs.q5_95nCode.GDscoreObjects1.length = 0;
gdjs.q5_95nCode.GDscoreObjects2.length = 0;
gdjs.q5_95nCode.GDlivesObjects1.length = 0;
gdjs.q5_95nCode.GDlivesObjects2.length = 0;
gdjs.q5_95nCode.GDcoachObjects1.length = 0;
gdjs.q5_95nCode.GDcoachObjects2.length = 0;
gdjs.q5_95nCode.GDpop_95upObjects1.length = 0;
gdjs.q5_95nCode.GDpop_95upObjects2.length = 0;
gdjs.q5_95nCode.GDlvl3_95iObjects1.length = 0;
gdjs.q5_95nCode.GDlvl3_95iObjects2.length = 0;
gdjs.q5_95nCode.GDbg2222Objects1.length = 0;
gdjs.q5_95nCode.GDbg2222Objects2.length = 0;
gdjs.q5_95nCode.GDcentreObjects1.length = 0;
gdjs.q5_95nCode.GDcentreObjects2.length = 0;
gdjs.q5_95nCode.GDq12Objects1.length = 0;
gdjs.q5_95nCode.GDq12Objects2.length = 0;
gdjs.q5_95nCode.GDwrongObjects1.length = 0;
gdjs.q5_95nCode.GDwrongObjects2.length = 0;
gdjs.q5_95nCode.GDcorrectObjects1.length = 0;
gdjs.q5_95nCode.GDcorrectObjects2.length = 0;
gdjs.q5_95nCode.GDpop_95upObjects1.length = 0;
gdjs.q5_95nCode.GDpop_95upObjects2.length = 0;
gdjs.q5_95nCode.GDcoachObjects1.length = 0;
gdjs.q5_95nCode.GDcoachObjects2.length = 0;
gdjs.q5_95nCode.GDnumber2Objects1.length = 0;
gdjs.q5_95nCode.GDnumber2Objects2.length = 0;
gdjs.q5_95nCode.GDscoreObjects1.length = 0;
gdjs.q5_95nCode.GDscoreObjects2.length = 0;
gdjs.q5_95nCode.GDcor_95mObjects1.length = 0;
gdjs.q5_95nCode.GDcor_95mObjects2.length = 0;
gdjs.q5_95nCode.GDwro_95mObjects1.length = 0;
gdjs.q5_95nCode.GDwro_95mObjects2.length = 0;
gdjs.q5_95nCode.GDlvl2Objects1.length = 0;
gdjs.q5_95nCode.GDlvl2Objects2.length = 0;

gdjs.q5_95nCode.eventsList4(runtimeScene);
return;

}

gdjs['q5_95nCode'] = gdjs.q5_95nCode;
