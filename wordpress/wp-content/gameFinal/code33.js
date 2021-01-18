gdjs.q4Code = {};
gdjs.q4Code.GDpauseObjects1= [];
gdjs.q4Code.GDpauseObjects2= [];
gdjs.q4Code.GDpause_95lObjects1= [];
gdjs.q4Code.GDpause_95lObjects2= [];
gdjs.q4Code.GDexit2Objects1= [];
gdjs.q4Code.GDexit2Objects2= [];
gdjs.q4Code.GDexitObjects1= [];
gdjs.q4Code.GDexitObjects2= [];
gdjs.q4Code.GDplayObjects1= [];
gdjs.q4Code.GDplayObjects2= [];
gdjs.q4Code.GDpau_95tObjects1= [];
gdjs.q4Code.GDpau_95tObjects2= [];
gdjs.q4Code.GDresumeObjects1= [];
gdjs.q4Code.GDresumeObjects2= [];
gdjs.q4Code.GDExitObjects1= [];
gdjs.q4Code.GDExitObjects2= [];
gdjs.q4Code.GDscoreObjects1= [];
gdjs.q4Code.GDscoreObjects2= [];
gdjs.q4Code.GDlivesObjects1= [];
gdjs.q4Code.GDlivesObjects2= [];
gdjs.q4Code.GDcoachObjects1= [];
gdjs.q4Code.GDcoachObjects2= [];
gdjs.q4Code.GDpop_95upObjects1= [];
gdjs.q4Code.GDpop_95upObjects2= [];
gdjs.q4Code.GDlvl3_95iObjects1= [];
gdjs.q4Code.GDlvl3_95iObjects2= [];
gdjs.q4Code.GDbg222Objects1= [];
gdjs.q4Code.GDbg222Objects2= [];
gdjs.q4Code.GDcentreObjects1= [];
gdjs.q4Code.GDcentreObjects2= [];
gdjs.q4Code.GDq12Objects1= [];
gdjs.q4Code.GDq12Objects2= [];
gdjs.q4Code.GDwrongObjects1= [];
gdjs.q4Code.GDwrongObjects2= [];
gdjs.q4Code.GDcorrectObjects1= [];
gdjs.q4Code.GDcorrectObjects2= [];
gdjs.q4Code.GDpop_95upObjects1= [];
gdjs.q4Code.GDpop_95upObjects2= [];
gdjs.q4Code.GDcoachObjects1= [];
gdjs.q4Code.GDcoachObjects2= [];
gdjs.q4Code.GDnqObjects1= [];
gdjs.q4Code.GDnqObjects2= [];
gdjs.q4Code.GDnumber2Objects1= [];
gdjs.q4Code.GDnumber2Objects2= [];
gdjs.q4Code.GDscoreObjects1= [];
gdjs.q4Code.GDscoreObjects2= [];
gdjs.q4Code.GDcor_95mObjects1= [];
gdjs.q4Code.GDcor_95mObjects2= [];
gdjs.q4Code.GDwro_95mObjects1= [];
gdjs.q4Code.GDwro_95mObjects2= [];

gdjs.q4Code.conditionTrue_0 = {val:false};
gdjs.q4Code.condition0IsTrue_0 = {val:false};
gdjs.q4Code.condition1IsTrue_0 = {val:false};


gdjs.q4Code.mapOfGDgdjs_46q4Code_46GDwrongObjects1Objects = Hashtable.newFrom({"wrong": gdjs.q4Code.GDwrongObjects1});gdjs.q4Code.mapOfGDgdjs_46q4Code_46GDnqObjects1Objects = Hashtable.newFrom({"nq": gdjs.q4Code.GDnqObjects1});gdjs.q4Code.eventsList0 = function(runtimeScene) {

{


gdjs.q4Code.condition0IsTrue_0.val = false;
{
gdjs.q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q4Code.condition0IsTrue_0.val) {
gdjs.q4Code.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q4Code.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));
gdjs.q4Code.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q4Code.GDwro_95mObjects1.createFrom(runtimeScene.getObjects("wro_m"));
/* Reuse gdjs.q4Code.GDwrongObjects1 */
gdjs.q4Code.GDnqObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.q4Code.mapOfGDgdjs_46q4Code_46GDnqObjects1Objects, 677, 440, "");
}{for(var i = 0, len = gdjs.q4Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDwrongObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q4Code.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDcorrectObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q4Code.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDpop_95upObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q4Code.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDcoachObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q4Code.GDwro_95mObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDwro_95mObjects1[i].hide(false);
}
}}

}


};gdjs.q4Code.mapOfGDgdjs_46q4Code_46GDcorrectObjects1Objects = Hashtable.newFrom({"correct": gdjs.q4Code.GDcorrectObjects1});gdjs.q4Code.mapOfGDgdjs_46q4Code_46GDnqObjects1Objects = Hashtable.newFrom({"nq": gdjs.q4Code.GDnqObjects1});gdjs.q4Code.eventsList1 = function(runtimeScene) {

{


gdjs.q4Code.condition0IsTrue_0.val = false;
{
gdjs.q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q4Code.condition0IsTrue_0.val) {
gdjs.q4Code.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q4Code.GDcor_95mObjects1.createFrom(runtimeScene.getObjects("cor_m"));
/* Reuse gdjs.q4Code.GDcorrectObjects1 */
gdjs.q4Code.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q4Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
gdjs.q4Code.GDnqObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.q4Code.mapOfGDgdjs_46q4Code_46GDnqObjects1Objects, 677, 440, "");
}{for(var i = 0, len = gdjs.q4Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDwrongObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q4Code.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDcorrectObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.q4Code.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDpop_95upObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.q4Code.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDcoachObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}{for(var i = 0, len = gdjs.q4Code.GDcor_95mObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDcor_95mObjects1[i].hide(false);
}
}}

}


};gdjs.q4Code.mapOfGDgdjs_46q4Code_46GDnqObjects1Objects = Hashtable.newFrom({"nq": gdjs.q4Code.GDnqObjects1});gdjs.q4Code.eventsList2 = function(runtimeScene) {

{


gdjs.q4Code.condition0IsTrue_0.val = false;
{
gdjs.q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.q4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "q5_n", false);
}}

}


};gdjs.q4Code.mapOfGDgdjs_46q4Code_46GDwrongObjects1Objects = Hashtable.newFrom({"wrong": gdjs.q4Code.GDwrongObjects1});gdjs.q4Code.mapOfGDgdjs_46q4Code_46GDnqObjects1Objects = Hashtable.newFrom({"nq": gdjs.q4Code.GDnqObjects1});gdjs.q4Code.mapOfGDgdjs_46q4Code_46GDcorrectObjects1Objects = Hashtable.newFrom({"correct": gdjs.q4Code.GDcorrectObjects1});gdjs.q4Code.eventsList3 = function(runtimeScene) {

{


{
gdjs.q4Code.GDcentreObjects1.createFrom(runtimeScene.getObjects("centre"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.q4Code.GDcentreObjects1.length !== 0 ? gdjs.q4Code.GDcentreObjects1[0] : null), true, "", 0);
}}

}


{


{
gdjs.q4Code.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.q4Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDscoreObjects1[i].setString("Total Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.q4Code.condition0IsTrue_0.val = false;
{
gdjs.q4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.q4Code.condition0IsTrue_0.val) {
gdjs.q4Code.GDbg222Objects1.createFrom(runtimeScene.getObjects("bg222"));
gdjs.q4Code.GDcoachObjects1.createFrom(runtimeScene.getObjects("coach"));
gdjs.q4Code.GDcor_95mObjects1.createFrom(runtimeScene.getObjects("cor_m"));
gdjs.q4Code.GDpop_95upObjects1.createFrom(runtimeScene.getObjects("pop_up"));
gdjs.q4Code.GDwro_95mObjects1.createFrom(runtimeScene.getObjects("wro_m"));
{for(var i = 0, len = gdjs.q4Code.GDpop_95upObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDpop_95upObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q4Code.GDcoachObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDcoachObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q4Code.GDcor_95mObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDcor_95mObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q4Code.GDwro_95mObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDwro_95mObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.q4Code.GDbg222Objects1.length ;i < len;++i) {
    gdjs.q4Code.GDbg222Objects1[i].setOpacity(150);
}
}}

}


{

gdjs.q4Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));

gdjs.q4Code.condition0IsTrue_0.val = false;
{
gdjs.q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q4Code.mapOfGDgdjs_46q4Code_46GDwrongObjects1Objects, runtimeScene, true, false);
}if (gdjs.q4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q4Code.GDwrongObjects1 */
{for(var i = 0, len = gdjs.q4Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDwrongObjects1[i].setColor("0;0;0");
}
}
{ //Subevents
gdjs.q4Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


{

gdjs.q4Code.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));

gdjs.q4Code.condition0IsTrue_0.val = false;
{
gdjs.q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q4Code.mapOfGDgdjs_46q4Code_46GDcorrectObjects1Objects, runtimeScene, true, false);
}if (gdjs.q4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q4Code.GDcorrectObjects1 */
{for(var i = 0, len = gdjs.q4Code.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDcorrectObjects1[i].setColor("0;0;0");
}
}
{ //Subevents
gdjs.q4Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.q4Code.GDnqObjects1.createFrom(runtimeScene.getObjects("nq"));

gdjs.q4Code.condition0IsTrue_0.val = false;
{
gdjs.q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q4Code.mapOfGDgdjs_46q4Code_46GDnqObjects1Objects, runtimeScene, true, false);
}if (gdjs.q4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q4Code.GDnqObjects1 */
{for(var i = 0, len = gdjs.q4Code.GDnqObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDnqObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.q4Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.q4Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));

gdjs.q4Code.condition0IsTrue_0.val = false;
{
gdjs.q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q4Code.mapOfGDgdjs_46q4Code_46GDwrongObjects1Objects, runtimeScene, true, true);
}if (gdjs.q4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q4Code.GDwrongObjects1 */
{for(var i = 0, len = gdjs.q4Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDwrongObjects1[i].setColor("248;231;28");
}
}}

}


{


{
}

}


{

gdjs.q4Code.GDnqObjects1.createFrom(runtimeScene.getObjects("nq"));

gdjs.q4Code.condition0IsTrue_0.val = false;
{
gdjs.q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q4Code.mapOfGDgdjs_46q4Code_46GDnqObjects1Objects, runtimeScene, true, true);
}if (gdjs.q4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q4Code.GDnqObjects1 */
{for(var i = 0, len = gdjs.q4Code.GDnqObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDnqObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.q4Code.GDcorrectObjects1.createFrom(runtimeScene.getObjects("correct"));

gdjs.q4Code.condition0IsTrue_0.val = false;
{
gdjs.q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.q4Code.mapOfGDgdjs_46q4Code_46GDcorrectObjects1Objects, runtimeScene, true, true);
}if (gdjs.q4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.q4Code.GDcorrectObjects1 */
{for(var i = 0, len = gdjs.q4Code.GDcorrectObjects1.length ;i < len;++i) {
    gdjs.q4Code.GDcorrectObjects1[i].setColor("248;231;28");
}
}}

}


{


{
}

}


};

gdjs.q4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.q4Code.GDpauseObjects1.length = 0;
gdjs.q4Code.GDpauseObjects2.length = 0;
gdjs.q4Code.GDpause_95lObjects1.length = 0;
gdjs.q4Code.GDpause_95lObjects2.length = 0;
gdjs.q4Code.GDexit2Objects1.length = 0;
gdjs.q4Code.GDexit2Objects2.length = 0;
gdjs.q4Code.GDexitObjects1.length = 0;
gdjs.q4Code.GDexitObjects2.length = 0;
gdjs.q4Code.GDplayObjects1.length = 0;
gdjs.q4Code.GDplayObjects2.length = 0;
gdjs.q4Code.GDpau_95tObjects1.length = 0;
gdjs.q4Code.GDpau_95tObjects2.length = 0;
gdjs.q4Code.GDresumeObjects1.length = 0;
gdjs.q4Code.GDresumeObjects2.length = 0;
gdjs.q4Code.GDExitObjects1.length = 0;
gdjs.q4Code.GDExitObjects2.length = 0;
gdjs.q4Code.GDscoreObjects1.length = 0;
gdjs.q4Code.GDscoreObjects2.length = 0;
gdjs.q4Code.GDlivesObjects1.length = 0;
gdjs.q4Code.GDlivesObjects2.length = 0;
gdjs.q4Code.GDcoachObjects1.length = 0;
gdjs.q4Code.GDcoachObjects2.length = 0;
gdjs.q4Code.GDpop_95upObjects1.length = 0;
gdjs.q4Code.GDpop_95upObjects2.length = 0;
gdjs.q4Code.GDlvl3_95iObjects1.length = 0;
gdjs.q4Code.GDlvl3_95iObjects2.length = 0;
gdjs.q4Code.GDbg222Objects1.length = 0;
gdjs.q4Code.GDbg222Objects2.length = 0;
gdjs.q4Code.GDcentreObjects1.length = 0;
gdjs.q4Code.GDcentreObjects2.length = 0;
gdjs.q4Code.GDq12Objects1.length = 0;
gdjs.q4Code.GDq12Objects2.length = 0;
gdjs.q4Code.GDwrongObjects1.length = 0;
gdjs.q4Code.GDwrongObjects2.length = 0;
gdjs.q4Code.GDcorrectObjects1.length = 0;
gdjs.q4Code.GDcorrectObjects2.length = 0;
gdjs.q4Code.GDpop_95upObjects1.length = 0;
gdjs.q4Code.GDpop_95upObjects2.length = 0;
gdjs.q4Code.GDcoachObjects1.length = 0;
gdjs.q4Code.GDcoachObjects2.length = 0;
gdjs.q4Code.GDnqObjects1.length = 0;
gdjs.q4Code.GDnqObjects2.length = 0;
gdjs.q4Code.GDnumber2Objects1.length = 0;
gdjs.q4Code.GDnumber2Objects2.length = 0;
gdjs.q4Code.GDscoreObjects1.length = 0;
gdjs.q4Code.GDscoreObjects2.length = 0;
gdjs.q4Code.GDcor_95mObjects1.length = 0;
gdjs.q4Code.GDcor_95mObjects2.length = 0;
gdjs.q4Code.GDwro_95mObjects1.length = 0;
gdjs.q4Code.GDwro_95mObjects2.length = 0;

gdjs.q4Code.eventsList3(runtimeScene);
return;

}

gdjs['q4Code'] = gdjs.q4Code;
