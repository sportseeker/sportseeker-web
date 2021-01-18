gdjs.q8Code = {};
gdjs.q8Code.GDpauseObjects1= [];
gdjs.q8Code.GDpauseObjects2= [];
gdjs.q8Code.GDpause_95lObjects1= [];
gdjs.q8Code.GDpause_95lObjects2= [];
gdjs.q8Code.GDexit2Objects1= [];
gdjs.q8Code.GDexit2Objects2= [];
gdjs.q8Code.GDexitObjects1= [];
gdjs.q8Code.GDexitObjects2= [];
gdjs.q8Code.GDplayObjects1= [];
gdjs.q8Code.GDplayObjects2= [];
gdjs.q8Code.GDpau_95tObjects1= [];
gdjs.q8Code.GDpau_95tObjects2= [];
gdjs.q8Code.GDresumeObjects1= [];
gdjs.q8Code.GDresumeObjects2= [];
gdjs.q8Code.GDExitObjects1= [];
gdjs.q8Code.GDExitObjects2= [];
gdjs.q8Code.GDscoreObjects1= [];
gdjs.q8Code.GDscoreObjects2= [];
gdjs.q8Code.GDlivesObjects1= [];
gdjs.q8Code.GDlivesObjects2= [];
gdjs.q8Code.GDcoachObjects1= [];
gdjs.q8Code.GDcoachObjects2= [];
gdjs.q8Code.GDpop_95upObjects1= [];
gdjs.q8Code.GDpop_95upObjects2= [];
gdjs.q8Code.GDlvl3_95iObjects1= [];
gdjs.q8Code.GDlvl3_95iObjects2= [];
gdjs.q8Code.GDbg222Objects1= [];
gdjs.q8Code.GDbg222Objects2= [];
gdjs.q8Code.GDcentreObjects1= [];
gdjs.q8Code.GDcentreObjects2= [];
gdjs.q8Code.GDq12Objects1= [];
gdjs.q8Code.GDq12Objects2= [];
gdjs.q8Code.GDwrongObjects1= [];
gdjs.q8Code.GDwrongObjects2= [];
gdjs.q8Code.GDcorrectObjects1= [];
gdjs.q8Code.GDcorrectObjects2= [];
gdjs.q8Code.GDpop_95upObjects1= [];
gdjs.q8Code.GDpop_95upObjects2= [];
gdjs.q8Code.GDcoachObjects1= [];
gdjs.q8Code.GDcoachObjects2= [];
gdjs.q8Code.GDnqObjects1= [];
gdjs.q8Code.GDnqObjects2= [];
gdjs.q8Code.GDnumber2Objects1= [];
gdjs.q8Code.GDnumber2Objects2= [];
gdjs.q8Code.GDscoreObjects1= [];
gdjs.q8Code.GDscoreObjects2= [];
gdjs.q8Code.GDcor_95mObjects1= [];
gdjs.q8Code.GDcor_95mObjects2= [];
gdjs.q8Code.GDwro_95mObjects1= [];
gdjs.q8Code.GDwro_95mObjects2= [];

gdjs.q8Code.conditionTrue_0 = {val:false};
gdjs.q8Code.condition0IsTrue_0 = {val:false};
gdjs.q8Code.condition1IsTrue_0 = {val:false};


gdjs.q8Code.mapOfGDgdjs_46q8Code_46GDwrongObjects1Objects = Hashtable.newFrom({"wrong": gdjs.q8Code.GDwrongObjects1});gdjs.q8Code.mapOfGDgdjs_46q8Code_46GDnqObjects1Objects = Hashtable.newFrom({"nq": gdjs.q8Code.GDnqObjects1});gdjs.q8Code.eventsList0 = function(runtimeScene) {

{


gdjs.q8Code.condition0IsTrue_0.val = false;
{
gdjs.q8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q8Code.condition0IsTrue_0.val) {
gdjs.q8Code.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q8Code.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));
gdjs.q8Code.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q8Code.GDwro_95mObjects1.createFrom(runtimeScene.getObjects("wro_m"));
/* Reuse gdjs.q8Code.GDwrongObjects1 */
gdjs.q8Code.GDnqObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.q8Code.mapOfGDgdjs_46q8Code_46GDnqObjects1Objects, 677, 440, "");
}{for(var i = 0, len = gdjs.q8Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDwrongObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q8Code.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDcorrectObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q8Code.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDpop_95upObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q8Code.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDcoachObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q8Code.GDwro_95mObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDwro_95mObjects1[i].hide(false);
}
}}

}


};gdjs.q8Code.mapOfGDgdjs_46q8Code_46GDcorrectObjects1Objects = Hashtable.newFrom({"correct": gdjs.q8Code.GDcorrectObjects1});gdjs.q8Code.mapOfGDgdjs_46q8Code_46GDnqObjects1Objects = Hashtable.newFrom({"nq": gdjs.q8Code.GDnqObjects1});gdjs.q8Code.eventsList1 = function(runtimeScene) {

{


gdjs.q8Code.condition0IsTrue_0.val = false;
{
gdjs.q8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q8Code.condition0IsTrue_0.val) {
gdjs.q8Code.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q8Code.GDcor_95mObjects1.createFrom(runtimeScene.getObjects("cor_m"));
/* Reuse gdjs.q8Code.GDcorrectObjects1 */
gdjs.q8Code.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q8Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
gdjs.q8Code.GDnqObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.q8Code.mapOfGDgdjs_46q8Code_46GDnqObjects1Objects, 677, 440, "");
}{for(var i = 0, len = gdjs.q8Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDwrongObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q8Code.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDcorrectObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q8Code.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDpop_95upObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q8Code.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDcoachObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}{for(var i = 0, len = gdjs.q8Code.GDcor_95mObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDcor_95mObjects1[i].hide(false);
}
}}

}


};gdjs.q8Code.mapOfGDgdjs_46q8Code_46GDnqObjects1Objects = Hashtable.newFrom({"nq": gdjs.q8Code.GDnqObjects1});gdjs.q8Code.eventsList2 = function(runtimeScene) {

{


gdjs.q8Code.condition0IsTrue_0.val = false;
{
gdjs.q8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q8Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "q9", false);
}}

}


};gdjs.q8Code.mapOfGDgdjs_46q8Code_46GDwrongObjects1Objects = Hashtable.newFrom({"wrong": gdjs.q8Code.GDwrongObjects1});gdjs.q8Code.mapOfGDgdjs_46q8Code_46GDnqObjects1Objects = Hashtable.newFrom({"nq": gdjs.q8Code.GDnqObjects1});gdjs.q8Code.mapOfGDgdjs_46q8Code_46GDcorrectObjects1Objects = Hashtable.newFrom({"correct": gdjs.q8Code.GDcorrectObjects1});gdjs.q8Code.eventsList3 = function(runtimeScene) {

{


{
gdjs.q8Code.GDcentreObjects1.createFrom(runtimeScene.getObjects("centre"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.q8Code.GDcentreObjects1.length !== 0 ? gdjs.q8Code.GDcentreObjects1[0] : null), true, "", 0);
}}

}


{


{
gdjs.q8Code.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.q8Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDscoreObjects1[i].setString("Total Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.q8Code.condition0IsTrue_0.val = false;
{
gdjs.q8Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.q8Code.condition0IsTrue_0.val) {
gdjs.q8Code.GDbg222Objects1.createFrom(runtimeScene.getObjects("bg222"));
gdjs.q8Code.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q8Code.GDcor_95mObjects1.createFrom(runtimeScene.getObjects("cor_m"));
gdjs.q8Code.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q8Code.GDwro_95mObjects1.createFrom(runtimeScene.getObjects("wro_m"));
{for(var i = 0, len = gdjs.q8Code.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDpop_95upObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q8Code.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDcoachObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q8Code.GDcor_95mObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDcor_95mObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q8Code.GDwro_95mObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDwro_95mObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q8Code.GDbg222Objects1.length ;i < len;++i) {
    gdjs.q8Code.GDbg222Objects1[i].setOpacity(150);
}
}}

}


{

gdjs.q8Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));

gdjs.q8Code.condition0IsTrue_0.val = false;
{
gdjs.q8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q8Code.mapOfGDgdjs_46q8Code_46GDwrongObjects1Objects, runtimeScene, true, false);
}if (gdjs.q8Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q8Code.GDwrongObjects1 */
{for(var i = 0, len = gdjs.q8Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDwrongObjects1[i].setColor("0;0;0");
}
}
{ //Subevents
gdjs.q8Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


{

gdjs.q8Code.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));

gdjs.q8Code.condition0IsTrue_0.val = false;
{
gdjs.q8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q8Code.mapOfGDgdjs_46q8Code_46GDcorrectObjects1Objects, runtimeScene, true, false);
}if (gdjs.q8Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q8Code.GDcorrectObjects1 */
{for(var i = 0, len = gdjs.q8Code.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDcorrectObjects1[i].setColor("0;0;0");
}
}
{ //Subevents
gdjs.q8Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.q8Code.GDnqObjects1.createFrom(runtimeScene.getObjects("nq"));

gdjs.q8Code.condition0IsTrue_0.val = false;
{
gdjs.q8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q8Code.mapOfGDgdjs_46q8Code_46GDnqObjects1Objects, runtimeScene, true, false);
}if (gdjs.q8Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q8Code.GDnqObjects1 */
{for(var i = 0, len = gdjs.q8Code.GDnqObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDnqObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.q8Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.q8Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));

gdjs.q8Code.condition0IsTrue_0.val = false;
{
gdjs.q8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q8Code.mapOfGDgdjs_46q8Code_46GDwrongObjects1Objects, runtimeScene, true, true);
}if (gdjs.q8Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q8Code.GDwrongObjects1 */
{for(var i = 0, len = gdjs.q8Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDwrongObjects1[i].setColor("248;231;28");
}
}}

}


{


{
}

}


{

gdjs.q8Code.GDnqObjects1.createFrom(runtimeScene.getObjects("nq"));

gdjs.q8Code.condition0IsTrue_0.val = false;
{
gdjs.q8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q8Code.mapOfGDgdjs_46q8Code_46GDnqObjects1Objects, runtimeScene, true, true);
}if (gdjs.q8Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q8Code.GDnqObjects1 */
{for(var i = 0, len = gdjs.q8Code.GDnqObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDnqObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.q8Code.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));

gdjs.q8Code.condition0IsTrue_0.val = false;
{
gdjs.q8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q8Code.mapOfGDgdjs_46q8Code_46GDcorrectObjects1Objects, runtimeScene, true, true);
}if (gdjs.q8Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q8Code.GDcorrectObjects1 */
{for(var i = 0, len = gdjs.q8Code.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q8Code.GDcorrectObjects1[i].setColor("248;231;28");
}
}}

}


{


{
}

}


};

gdjs.q8Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.q8Code.GDpauseObjects1.length = 0;
gdjs.q8Code.GDpauseObjects2.length = 0;
gdjs.q8Code.GDpause_95lObjects1.length = 0;
gdjs.q8Code.GDpause_95lObjects2.length = 0;
gdjs.q8Code.GDexit2Objects1.length = 0;
gdjs.q8Code.GDexit2Objects2.length = 0;
gdjs.q8Code.GDexitObjects1.length = 0;
gdjs.q8Code.GDexitObjects2.length = 0;
gdjs.q8Code.GDplayObjects1.length = 0;
gdjs.q8Code.GDplayObjects2.length = 0;
gdjs.q8Code.GDpau_95tObjects1.length = 0;
gdjs.q8Code.GDpau_95tObjects2.length = 0;
gdjs.q8Code.GDresumeObjects1.length = 0;
gdjs.q8Code.GDresumeObjects2.length = 0;
gdjs.q8Code.GDExitObjects1.length = 0;
gdjs.q8Code.GDExitObjects2.length = 0;
gdjs.q8Code.GDscoreObjects1.length = 0;
gdjs.q8Code.GDscoreObjects2.length = 0;
gdjs.q8Code.GDlivesObjects1.length = 0;
gdjs.q8Code.GDlivesObjects2.length = 0;
gdjs.q8Code.GDcoachObjects1.length = 0;
gdjs.q8Code.GDcoachObjects2.length = 0;
gdjs.q8Code.GDpop_95upObjects1.length = 0;
gdjs.q8Code.GDpop_95upObjects2.length = 0;
gdjs.q8Code.GDlvl3_95iObjects1.length = 0;
gdjs.q8Code.GDlvl3_95iObjects2.length = 0;
gdjs.q8Code.GDbg222Objects1.length = 0;
gdjs.q8Code.GDbg222Objects2.length = 0;
gdjs.q8Code.GDcentreObjects1.length = 0;
gdjs.q8Code.GDcentreObjects2.length = 0;
gdjs.q8Code.GDq12Objects1.length = 0;
gdjs.q8Code.GDq12Objects2.length = 0;
gdjs.q8Code.GDwrongObjects1.length = 0;
gdjs.q8Code.GDwrongObjects2.length = 0;
gdjs.q8Code.GDcorrectObjects1.length = 0;
gdjs.q8Code.GDcorrectObjects2.length = 0;
gdjs.q8Code.GDpop_95upObjects1.length = 0;
gdjs.q8Code.GDpop_95upObjects2.length = 0;
gdjs.q8Code.GDcoachObjects1.length = 0;
gdjs.q8Code.GDcoachObjects2.length = 0;
gdjs.q8Code.GDnqObjects1.length = 0;
gdjs.q8Code.GDnqObjects2.length = 0;
gdjs.q8Code.GDnumber2Objects1.length = 0;
gdjs.q8Code.GDnumber2Objects2.length = 0;
gdjs.q8Code.GDscoreObjects1.length = 0;
gdjs.q8Code.GDscoreObjects2.length = 0;
gdjs.q8Code.GDcor_95mObjects1.length = 0;
gdjs.q8Code.GDcor_95mObjects2.length = 0;
gdjs.q8Code.GDwro_95mObjects1.length = 0;
gdjs.q8Code.GDwro_95mObjects2.length = 0;

gdjs.q8Code.eventsList3(runtimeScene);
return;

}

gdjs['q8Code'] = gdjs.q8Code;
