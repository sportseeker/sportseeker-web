gdjs.level_951Code = {};
gdjs.level_951Code.GDpauseObjects1= [];
gdjs.level_951Code.GDpauseObjects2= [];
gdjs.level_951Code.GDpauseObjects3= [];
gdjs.level_951Code.GDpause_95lObjects1= [];
gdjs.level_951Code.GDpause_95lObjects2= [];
gdjs.level_951Code.GDpause_95lObjects3= [];
gdjs.level_951Code.GDexit2Objects1= [];
gdjs.level_951Code.GDexit2Objects2= [];
gdjs.level_951Code.GDexit2Objects3= [];
gdjs.level_951Code.GDexitObjects1= [];
gdjs.level_951Code.GDexitObjects2= [];
gdjs.level_951Code.GDexitObjects3= [];
gdjs.level_951Code.GDplayObjects1= [];
gdjs.level_951Code.GDplayObjects2= [];
gdjs.level_951Code.GDplayObjects3= [];
gdjs.level_951Code.GDpau_95tObjects1= [];
gdjs.level_951Code.GDpau_95tObjects2= [];
gdjs.level_951Code.GDpau_95tObjects3= [];
gdjs.level_951Code.GDresumeObjects1= [];
gdjs.level_951Code.GDresumeObjects2= [];
gdjs.level_951Code.GDresumeObjects3= [];
gdjs.level_951Code.GDExitObjects1= [];
gdjs.level_951Code.GDExitObjects2= [];
gdjs.level_951Code.GDExitObjects3= [];
gdjs.level_951Code.GDscoreObjects1= [];
gdjs.level_951Code.GDscoreObjects2= [];
gdjs.level_951Code.GDscoreObjects3= [];
gdjs.level_951Code.GDlivesObjects1= [];
gdjs.level_951Code.GDlivesObjects2= [];
gdjs.level_951Code.GDlivesObjects3= [];
gdjs.level_951Code.GDcoachObjects1= [];
gdjs.level_951Code.GDcoachObjects2= [];
gdjs.level_951Code.GDcoachObjects3= [];
gdjs.level_951Code.GDpop_95upObjects1= [];
gdjs.level_951Code.GDpop_95upObjects2= [];
gdjs.level_951Code.GDpop_95upObjects3= [];
gdjs.level_951Code.GDlvl3_95iObjects1= [];
gdjs.level_951Code.GDlvl3_95iObjects2= [];
gdjs.level_951Code.GDlvl3_95iObjects3= [];
gdjs.level_951Code.GDsmall_95platformObjects1= [];
gdjs.level_951Code.GDsmall_95platformObjects2= [];
gdjs.level_951Code.GDsmall_95platformObjects3= [];
gdjs.level_951Code.GDplatformObjects1= [];
gdjs.level_951Code.GDplatformObjects2= [];
gdjs.level_951Code.GDplatformObjects3= [];
gdjs.level_951Code.GDcharacterObjects1= [];
gdjs.level_951Code.GDcharacterObjects2= [];
gdjs.level_951Code.GDcharacterObjects3= [];
gdjs.level_951Code.GDpoint_951Objects1= [];
gdjs.level_951Code.GDpoint_951Objects2= [];
gdjs.level_951Code.GDpoint_951Objects3= [];
gdjs.level_951Code.GDpoint_952Objects1= [];
gdjs.level_951Code.GDpoint_952Objects2= [];
gdjs.level_951Code.GDpoint_952Objects3= [];
gdjs.level_951Code.GDpoint_953Objects1= [];
gdjs.level_951Code.GDpoint_953Objects2= [];
gdjs.level_951Code.GDpoint_953Objects3= [];
gdjs.level_951Code.GDpoint_954Objects1= [];
gdjs.level_951Code.GDpoint_954Objects2= [];
gdjs.level_951Code.GDpoint_954Objects3= [];
gdjs.level_951Code.GDpoint_955Objects1= [];
gdjs.level_951Code.GDpoint_955Objects2= [];
gdjs.level_951Code.GDpoint_955Objects3= [];
gdjs.level_951Code.GDflagObjects1= [];
gdjs.level_951Code.GDflagObjects2= [];
gdjs.level_951Code.GDflagObjects3= [];
gdjs.level_951Code.GDenemyObjects1= [];
gdjs.level_951Code.GDenemyObjects2= [];
gdjs.level_951Code.GDenemyObjects3= [];
gdjs.level_951Code.GDleftObjects1= [];
gdjs.level_951Code.GDleftObjects2= [];
gdjs.level_951Code.GDleftObjects3= [];
gdjs.level_951Code.GDrightObjects1= [];
gdjs.level_951Code.GDrightObjects2= [];
gdjs.level_951Code.GDrightObjects3= [];
gdjs.level_951Code.GDsupeObjects1= [];
gdjs.level_951Code.GDsupeObjects2= [];
gdjs.level_951Code.GDsupeObjects3= [];
gdjs.level_951Code.GDsupe_95symObjects1= [];
gdjs.level_951Code.GDsupe_95symObjects2= [];
gdjs.level_951Code.GDsupe_95symObjects3= [];
gdjs.level_951Code.GDscoreObjects1= [];
gdjs.level_951Code.GDscoreObjects2= [];
gdjs.level_951Code.GDscoreObjects3= [];

gdjs.level_951Code.conditionTrue_0 = {val:false};
gdjs.level_951Code.condition0IsTrue_0 = {val:false};
gdjs.level_951Code.condition1IsTrue_0 = {val:false};
gdjs.level_951Code.condition2IsTrue_0 = {val:false};


gdjs.level_951Code.eventsList0 = function(runtimeScene) {

{


{
gdjs.level_951Code.GDcharacterObjects2.createFrom(runtimeScene.getObjects("character"));
gdjs.level_951Code.GDexitObjects2.createFrom(runtimeScene.getObjects("exit"));
gdjs.level_951Code.GDsupeObjects2.createFrom(runtimeScene.getObjects("supe"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.level_951Code.GDcharacterObjects2.length !== 0 ? gdjs.level_951Code.GDcharacterObjects2[0] : null), true, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.level_951Code.GDsupeObjects2.length !== 0 ? gdjs.level_951Code.GDsupeObjects2[0] : null), true, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.level_951Code.GDexitObjects2.length !== 0 ? gdjs.level_951Code.GDexitObjects2[0] : null), true, "Layer1", 0);
}}

}


{


gdjs.level_951Code.condition0IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.level_951Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Layer1");
}}

}


{

gdjs.level_951Code.GDcharacterObjects2.createFrom(runtimeScene.getObjects("character"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
gdjs.level_951Code.condition1IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.level_951Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.level_951Code.GDcharacterObjects2.length;i<l;++i) {
    if ( gdjs.level_951Code.GDcharacterObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.level_951Code.condition1IsTrue_0.val = true;
        gdjs.level_951Code.GDcharacterObjects2[k] = gdjs.level_951Code.GDcharacterObjects2[i];
        ++k;
    }
}
gdjs.level_951Code.GDcharacterObjects2.length = k;}}
if (gdjs.level_951Code.condition1IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDcharacterObjects2 */
{for(var i = 0, len = gdjs.level_951Code.GDcharacterObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDcharacterObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.level_951Code.GDcharacterObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDcharacterObjects2[i].flipX(false);
}
}}

}


{

gdjs.level_951Code.GDcharacterObjects2.createFrom(runtimeScene.getObjects("character"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
gdjs.level_951Code.condition1IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.level_951Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.level_951Code.GDcharacterObjects2.length;i<l;++i) {
    if ( gdjs.level_951Code.GDcharacterObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.level_951Code.condition1IsTrue_0.val = true;
        gdjs.level_951Code.GDcharacterObjects2[k] = gdjs.level_951Code.GDcharacterObjects2[i];
        ++k;
    }
}
gdjs.level_951Code.GDcharacterObjects2.length = k;}}
if (gdjs.level_951Code.condition1IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDcharacterObjects2 */
{for(var i = 0, len = gdjs.level_951Code.GDcharacterObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDcharacterObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.level_951Code.GDcharacterObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDcharacterObjects2[i].flipX(true);
}
}}

}


{

gdjs.level_951Code.GDcharacterObjects2.createFrom(runtimeScene.getObjects("character"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.level_951Code.GDcharacterObjects2.length;i<l;++i) {
    if ( !(gdjs.level_951Code.GDcharacterObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.level_951Code.condition0IsTrue_0.val = true;
        gdjs.level_951Code.GDcharacterObjects2[k] = gdjs.level_951Code.GDcharacterObjects2[i];
        ++k;
    }
}
gdjs.level_951Code.GDcharacterObjects2.length = k;}if (gdjs.level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDcharacterObjects2 */
{for(var i = 0, len = gdjs.level_951Code.GDcharacterObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDcharacterObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.level_951Code.GDsupeObjects2.createFrom(runtimeScene.getObjects("supe"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
gdjs.level_951Code.condition1IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.level_951Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.level_951Code.GDsupeObjects2.length;i<l;++i) {
    if ( gdjs.level_951Code.GDsupeObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.level_951Code.condition1IsTrue_0.val = true;
        gdjs.level_951Code.GDsupeObjects2[k] = gdjs.level_951Code.GDsupeObjects2[i];
        ++k;
    }
}
gdjs.level_951Code.GDsupeObjects2.length = k;}}
if (gdjs.level_951Code.condition1IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDsupeObjects2 */
{for(var i = 0, len = gdjs.level_951Code.GDsupeObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDsupeObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.level_951Code.GDsupeObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDsupeObjects2[i].flipX(false);
}
}}

}


{

gdjs.level_951Code.GDsupeObjects2.createFrom(runtimeScene.getObjects("supe"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
gdjs.level_951Code.condition1IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.level_951Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.level_951Code.GDsupeObjects2.length;i<l;++i) {
    if ( gdjs.level_951Code.GDsupeObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.level_951Code.condition1IsTrue_0.val = true;
        gdjs.level_951Code.GDsupeObjects2[k] = gdjs.level_951Code.GDsupeObjects2[i];
        ++k;
    }
}
gdjs.level_951Code.GDsupeObjects2.length = k;}}
if (gdjs.level_951Code.condition1IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDsupeObjects2 */
{for(var i = 0, len = gdjs.level_951Code.GDsupeObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDsupeObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.level_951Code.GDsupeObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDsupeObjects2[i].flipX(true);
}
}}

}


{

gdjs.level_951Code.GDsupeObjects2.createFrom(runtimeScene.getObjects("supe"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.level_951Code.GDsupeObjects2.length;i<l;++i) {
    if ( !(gdjs.level_951Code.GDsupeObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.level_951Code.condition0IsTrue_0.val = true;
        gdjs.level_951Code.GDsupeObjects2[k] = gdjs.level_951Code.GDsupeObjects2[i];
        ++k;
    }
}
gdjs.level_951Code.GDsupeObjects2.length = k;}if (gdjs.level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDsupeObjects2 */
{for(var i = 0, len = gdjs.level_951Code.GDsupeObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDsupeObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.level_951Code.GDsupeObjects1.createFrom(runtimeScene.getObjects("supe"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.level_951Code.GDsupeObjects1.length;i<l;++i) {
    if ( gdjs.level_951Code.GDsupeObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.level_951Code.condition0IsTrue_0.val = true;
        gdjs.level_951Code.GDsupeObjects1[k] = gdjs.level_951Code.GDsupeObjects1[i];
        ++k;
    }
}
gdjs.level_951Code.GDsupeObjects1.length = k;}if (gdjs.level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDsupeObjects1 */
{for(var i = 0, len = gdjs.level_951Code.GDsupeObjects1.length ;i < len;++i) {
    gdjs.level_951Code.GDsupeObjects1[i].setAnimation(2);
}
}}

}


};gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.level_951Code.GDenemyObjects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDleftObjects2Objects = Hashtable.newFrom({"left": gdjs.level_951Code.GDleftObjects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.level_951Code.GDenemyObjects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDrightObjects2Objects = Hashtable.newFrom({"right": gdjs.level_951Code.GDrightObjects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDcharacterObjects2Objects = Hashtable.newFrom({"character": gdjs.level_951Code.GDcharacterObjects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupe_9595symObjects2Objects = Hashtable.newFrom({"supe_sym": gdjs.level_951Code.GDsupe_95symObjects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupeObjects2Objects = Hashtable.newFrom({"supe": gdjs.level_951Code.GDsupeObjects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupeObjects2Objects = Hashtable.newFrom({"supe": gdjs.level_951Code.GDsupeObjects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.level_951Code.GDenemyObjects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupeObjects2Objects = Hashtable.newFrom({"supe": gdjs.level_951Code.GDsupeObjects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.level_951Code.GDenemyObjects2});gdjs.level_951Code.eventsList1 = function(runtimeScene) {

{

gdjs.level_951Code.GDenemyObjects2.createFrom(runtimeScene.getObjects("enemy"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.level_951Code.GDenemyObjects2.length;i<l;++i) {
    if ( gdjs.level_951Code.GDenemyObjects2[i].getVariableString(gdjs.level_951Code.GDenemyObjects2[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.level_951Code.condition0IsTrue_0.val = true;
        gdjs.level_951Code.GDenemyObjects2[k] = gdjs.level_951Code.GDenemyObjects2[i];
        ++k;
    }
}
gdjs.level_951Code.GDenemyObjects2.length = k;}if (gdjs.level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDenemyObjects2 */
{for(var i = 0, len = gdjs.level_951Code.GDenemyObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDenemyObjects2[i].addForce(80, 0, 0);
}
}}

}


{

gdjs.level_951Code.GDenemyObjects2.createFrom(runtimeScene.getObjects("enemy"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.level_951Code.GDenemyObjects2.length;i<l;++i) {
    if ( gdjs.level_951Code.GDenemyObjects2[i].getVariableString(gdjs.level_951Code.GDenemyObjects2[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.level_951Code.condition0IsTrue_0.val = true;
        gdjs.level_951Code.GDenemyObjects2[k] = gdjs.level_951Code.GDenemyObjects2[i];
        ++k;
    }
}
gdjs.level_951Code.GDenemyObjects2.length = k;}if (gdjs.level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDenemyObjects2 */
{for(var i = 0, len = gdjs.level_951Code.GDenemyObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDenemyObjects2[i].addForce(-(80), 0, 0);
}
}}

}


{

gdjs.level_951Code.GDenemyObjects2.createFrom(runtimeScene.getObjects("enemy"));
gdjs.level_951Code.GDleftObjects2.createFrom(runtimeScene.getObjects("left"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDenemyObjects2Objects, gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDleftObjects2Objects, false, runtimeScene, false);
}if (gdjs.level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDenemyObjects2 */
{for(var i = 0, len = gdjs.level_951Code.GDenemyObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDenemyObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.level_951Code.GDenemyObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDenemyObjects2[i].returnVariable(gdjs.level_951Code.GDenemyObjects2[i].getVariables().getFromIndex(0)).setString("left");
}
}}

}


{

gdjs.level_951Code.GDenemyObjects2.createFrom(runtimeScene.getObjects("enemy"));
gdjs.level_951Code.GDrightObjects2.createFrom(runtimeScene.getObjects("right"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDenemyObjects2Objects, gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDrightObjects2Objects, false, runtimeScene, false);
}if (gdjs.level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDenemyObjects2 */
{for(var i = 0, len = gdjs.level_951Code.GDenemyObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDenemyObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.level_951Code.GDenemyObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDenemyObjects2[i].returnVariable(gdjs.level_951Code.GDenemyObjects2[i].getVariables().getFromIndex(0)).setString("right");
}
}}

}


{

gdjs.level_951Code.GDcharacterObjects2.createFrom(runtimeScene.getObjects("character"));
gdjs.level_951Code.GDsupe_95symObjects2.createFrom(runtimeScene.getObjects("supe_sym"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDcharacterObjects2Objects, gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupe_9595symObjects2Objects, false, runtimeScene, false);
}if (gdjs.level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDcharacterObjects2 */
/* Reuse gdjs.level_951Code.GDsupe_95symObjects2 */
gdjs.level_951Code.GDsupeObjects2.length = 0;

{for(var i = 0, len = gdjs.level_951Code.GDcharacterObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDcharacterObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupeObjects2Objects, -(703), 180, "");
}{for(var i = 0, len = gdjs.level_951Code.GDsupe_95symObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDsupe_95symObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.level_951Code.GDenemyObjects2.createFrom(runtimeScene.getObjects("enemy"));
gdjs.level_951Code.GDsupeObjects2.createFrom(runtimeScene.getObjects("supe"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
gdjs.level_951Code.condition1IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupeObjects2Objects, gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDenemyObjects2Objects, false, runtimeScene, false);
}if ( gdjs.level_951Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.level_951Code.GDsupeObjects2.length;i<l;++i) {
    if ( gdjs.level_951Code.GDsupeObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.level_951Code.condition1IsTrue_0.val = true;
        gdjs.level_951Code.GDsupeObjects2[k] = gdjs.level_951Code.GDsupeObjects2[i];
        ++k;
    }
}
gdjs.level_951Code.GDsupeObjects2.length = k;}}
if (gdjs.level_951Code.condition1IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDsupeObjects2 */
{for(var i = 0, len = gdjs.level_951Code.GDsupeObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDsupeObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level_1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.level_951Code.GDenemyObjects2.createFrom(runtimeScene.getObjects("enemy"));
gdjs.level_951Code.GDsupeObjects2.createFrom(runtimeScene.getObjects("supe"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
gdjs.level_951Code.condition1IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupeObjects2Objects, gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDenemyObjects2Objects, false, runtimeScene, false);
}if ( gdjs.level_951Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.level_951Code.GDsupeObjects2.length;i<l;++i) {
    if ( gdjs.level_951Code.GDsupeObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.level_951Code.condition1IsTrue_0.val = true;
        gdjs.level_951Code.GDsupeObjects2[k] = gdjs.level_951Code.GDsupeObjects2[i];
        ++k;
    }
}
gdjs.level_951Code.GDsupeObjects2.length = k;}}
if (gdjs.level_951Code.condition1IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDenemyObjects2 */
{for(var i = 0, len = gdjs.level_951Code.GDenemyObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDenemyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
}

}


};gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupeObjects2Objects = Hashtable.newFrom({"supe": gdjs.level_951Code.GDsupeObjects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDpoint_95951Objects2Objects = Hashtable.newFrom({"point_1": gdjs.level_951Code.GDpoint_951Objects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupeObjects2Objects = Hashtable.newFrom({"supe": gdjs.level_951Code.GDsupeObjects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDpoint_95952Objects2Objects = Hashtable.newFrom({"point_2": gdjs.level_951Code.GDpoint_952Objects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupeObjects2Objects = Hashtable.newFrom({"supe": gdjs.level_951Code.GDsupeObjects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDpoint_95953Objects2Objects = Hashtable.newFrom({"point_3": gdjs.level_951Code.GDpoint_953Objects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupeObjects2Objects = Hashtable.newFrom({"supe": gdjs.level_951Code.GDsupeObjects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDpoint_95954Objects2Objects = Hashtable.newFrom({"point_4": gdjs.level_951Code.GDpoint_954Objects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupeObjects2Objects = Hashtable.newFrom({"supe": gdjs.level_951Code.GDsupeObjects2});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDpoint_95955Objects2Objects = Hashtable.newFrom({"point_5": gdjs.level_951Code.GDpoint_955Objects2});gdjs.level_951Code.eventsList2 = function(runtimeScene) {

{


{
gdjs.level_951Code.GDscoreObjects2.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.level_951Code.GDscoreObjects2.length ;i < len;++i) {
    gdjs.level_951Code.GDscoreObjects2[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.level_951Code.GDpoint_951Objects2.createFrom(runtimeScene.getObjects("point_1"));
gdjs.level_951Code.GDsupeObjects2.createFrom(runtimeScene.getObjects("supe"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupeObjects2Objects, gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDpoint_95951Objects2Objects, false, runtimeScene, false);
}if (gdjs.level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDpoint_951Objects2 */
{for(var i = 0, len = gdjs.level_951Code.GDpoint_951Objects2.length ;i < len;++i) {
    gdjs.level_951Code.GDpoint_951Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}}

}


{

gdjs.level_951Code.GDpoint_952Objects2.createFrom(runtimeScene.getObjects("point_2"));
gdjs.level_951Code.GDsupeObjects2.createFrom(runtimeScene.getObjects("supe"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupeObjects2Objects, gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDpoint_95952Objects2Objects, false, runtimeScene, false);
}if (gdjs.level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDpoint_952Objects2 */
{for(var i = 0, len = gdjs.level_951Code.GDpoint_952Objects2.length ;i < len;++i) {
    gdjs.level_951Code.GDpoint_952Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}}

}


{

gdjs.level_951Code.GDpoint_953Objects2.createFrom(runtimeScene.getObjects("point_3"));
gdjs.level_951Code.GDsupeObjects2.createFrom(runtimeScene.getObjects("supe"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupeObjects2Objects, gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDpoint_95953Objects2Objects, false, runtimeScene, false);
}if (gdjs.level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDpoint_953Objects2 */
{for(var i = 0, len = gdjs.level_951Code.GDpoint_953Objects2.length ;i < len;++i) {
    gdjs.level_951Code.GDpoint_953Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}}

}


{

gdjs.level_951Code.GDpoint_954Objects2.createFrom(runtimeScene.getObjects("point_4"));
gdjs.level_951Code.GDsupeObjects2.createFrom(runtimeScene.getObjects("supe"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupeObjects2Objects, gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDpoint_95954Objects2Objects, false, runtimeScene, false);
}if (gdjs.level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDpoint_954Objects2 */
{for(var i = 0, len = gdjs.level_951Code.GDpoint_954Objects2.length ;i < len;++i) {
    gdjs.level_951Code.GDpoint_954Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}}

}


{

gdjs.level_951Code.GDpoint_955Objects2.createFrom(runtimeScene.getObjects("point_5"));
gdjs.level_951Code.GDsupeObjects2.createFrom(runtimeScene.getObjects("supe"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupeObjects2Objects, gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDpoint_95955Objects2Objects, false, runtimeScene, false);
}if (gdjs.level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.level_951Code.GDpoint_955Objects2 */
{for(var i = 0, len = gdjs.level_951Code.GDpoint_955Objects2.length ;i < len;++i) {
    gdjs.level_951Code.GDpoint_955Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}}

}


{


{
gdjs.level_951Code.GDleftObjects1.createFrom(runtimeScene.getObjects("left"));
gdjs.level_951Code.GDrightObjects1.createFrom(runtimeScene.getObjects("right"));
{for(var i = 0, len = gdjs.level_951Code.GDleftObjects1.length ;i < len;++i) {
    gdjs.level_951Code.GDleftObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.level_951Code.GDrightObjects1.length ;i < len;++i) {
    gdjs.level_951Code.GDrightObjects1[i].setOpacity(0);
}
}}

}


};gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupeObjects1Objects = Hashtable.newFrom({"supe": gdjs.level_951Code.GDsupeObjects1});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDflagObjects1Objects = Hashtable.newFrom({"flag": gdjs.level_951Code.GDflagObjects1});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDpauseObjects1Objects = Hashtable.newFrom({"pause": gdjs.level_951Code.GDpauseObjects1});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.level_951Code.GDplayObjects1});gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.level_951Code.GDexitObjects1});gdjs.level_951Code.eventsList3 = function(runtimeScene) {

{


gdjs.level_951Code.eventsList0(runtimeScene);
}


{


gdjs.level_951Code.eventsList1(runtimeScene);
}


{


gdjs.level_951Code.eventsList2(runtimeScene);
}


{

gdjs.level_951Code.GDflagObjects1.createFrom(runtimeScene.getObjects("flag"));
gdjs.level_951Code.GDsupeObjects1.createFrom(runtimeScene.getObjects("supe"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDsupeObjects1Objects, gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDflagObjects1Objects, false, runtimeScene, false);
}if (gdjs.level_951Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lvl_1_com", false);
}}

}


{

gdjs.level_951Code.GDpauseObjects1.createFrom(runtimeScene.getObjects("pause"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
gdjs.level_951Code.condition1IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDpauseObjects1Objects, runtimeScene, true, false);
}if ( gdjs.level_951Code.condition0IsTrue_0.val ) {
{
gdjs.level_951Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.level_951Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Layer1");
}}

}


{

gdjs.level_951Code.GDplayObjects1.createFrom(runtimeScene.getObjects("play"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
gdjs.level_951Code.condition1IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDplayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.level_951Code.condition0IsTrue_0.val ) {
{
gdjs.level_951Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.level_951Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Layer1");
}}

}


{

gdjs.level_951Code.GDexitObjects1.createFrom(runtimeScene.getObjects("exit"));

gdjs.level_951Code.condition0IsTrue_0.val = false;
gdjs.level_951Code.condition1IsTrue_0.val = false;
{
gdjs.level_951Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.level_951Code.mapOfGDgdjs_46level_95951Code_46GDexitObjects1Objects, runtimeScene, true, false);
}if ( gdjs.level_951Code.condition0IsTrue_0.val ) {
{
gdjs.level_951Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.level_951Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "exit_screen", false);
}}

}


};

gdjs.level_951Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level_951Code.GDpauseObjects1.length = 0;
gdjs.level_951Code.GDpauseObjects2.length = 0;
gdjs.level_951Code.GDpauseObjects3.length = 0;
gdjs.level_951Code.GDpause_95lObjects1.length = 0;
gdjs.level_951Code.GDpause_95lObjects2.length = 0;
gdjs.level_951Code.GDpause_95lObjects3.length = 0;
gdjs.level_951Code.GDexit2Objects1.length = 0;
gdjs.level_951Code.GDexit2Objects2.length = 0;
gdjs.level_951Code.GDexit2Objects3.length = 0;
gdjs.level_951Code.GDexitObjects1.length = 0;
gdjs.level_951Code.GDexitObjects2.length = 0;
gdjs.level_951Code.GDexitObjects3.length = 0;
gdjs.level_951Code.GDplayObjects1.length = 0;
gdjs.level_951Code.GDplayObjects2.length = 0;
gdjs.level_951Code.GDplayObjects3.length = 0;
gdjs.level_951Code.GDpau_95tObjects1.length = 0;
gdjs.level_951Code.GDpau_95tObjects2.length = 0;
gdjs.level_951Code.GDpau_95tObjects3.length = 0;
gdjs.level_951Code.GDresumeObjects1.length = 0;
gdjs.level_951Code.GDresumeObjects2.length = 0;
gdjs.level_951Code.GDresumeObjects3.length = 0;
gdjs.level_951Code.GDExitObjects1.length = 0;
gdjs.level_951Code.GDExitObjects2.length = 0;
gdjs.level_951Code.GDExitObjects3.length = 0;
gdjs.level_951Code.GDscoreObjects1.length = 0;
gdjs.level_951Code.GDscoreObjects2.length = 0;
gdjs.level_951Code.GDscoreObjects3.length = 0;
gdjs.level_951Code.GDlivesObjects1.length = 0;
gdjs.level_951Code.GDlivesObjects2.length = 0;
gdjs.level_951Code.GDlivesObjects3.length = 0;
gdjs.level_951Code.GDcoachObjects1.length = 0;
gdjs.level_951Code.GDcoachObjects2.length = 0;
gdjs.level_951Code.GDcoachObjects3.length = 0;
gdjs.level_951Code.GDpop_95upObjects1.length = 0;
gdjs.level_951Code.GDpop_95upObjects2.length = 0;
gdjs.level_951Code.GDpop_95upObjects3.length = 0;
gdjs.level_951Code.GDlvl3_95iObjects1.length = 0;
gdjs.level_951Code.GDlvl3_95iObjects2.length = 0;
gdjs.level_951Code.GDlvl3_95iObjects3.length = 0;
gdjs.level_951Code.GDsmall_95platformObjects1.length = 0;
gdjs.level_951Code.GDsmall_95platformObjects2.length = 0;
gdjs.level_951Code.GDsmall_95platformObjects3.length = 0;
gdjs.level_951Code.GDplatformObjects1.length = 0;
gdjs.level_951Code.GDplatformObjects2.length = 0;
gdjs.level_951Code.GDplatformObjects3.length = 0;
gdjs.level_951Code.GDcharacterObjects1.length = 0;
gdjs.level_951Code.GDcharacterObjects2.length = 0;
gdjs.level_951Code.GDcharacterObjects3.length = 0;
gdjs.level_951Code.GDpoint_951Objects1.length = 0;
gdjs.level_951Code.GDpoint_951Objects2.length = 0;
gdjs.level_951Code.GDpoint_951Objects3.length = 0;
gdjs.level_951Code.GDpoint_952Objects1.length = 0;
gdjs.level_951Code.GDpoint_952Objects2.length = 0;
gdjs.level_951Code.GDpoint_952Objects3.length = 0;
gdjs.level_951Code.GDpoint_953Objects1.length = 0;
gdjs.level_951Code.GDpoint_953Objects2.length = 0;
gdjs.level_951Code.GDpoint_953Objects3.length = 0;
gdjs.level_951Code.GDpoint_954Objects1.length = 0;
gdjs.level_951Code.GDpoint_954Objects2.length = 0;
gdjs.level_951Code.GDpoint_954Objects3.length = 0;
gdjs.level_951Code.GDpoint_955Objects1.length = 0;
gdjs.level_951Code.GDpoint_955Objects2.length = 0;
gdjs.level_951Code.GDpoint_955Objects3.length = 0;
gdjs.level_951Code.GDflagObjects1.length = 0;
gdjs.level_951Code.GDflagObjects2.length = 0;
gdjs.level_951Code.GDflagObjects3.length = 0;
gdjs.level_951Code.GDenemyObjects1.length = 0;
gdjs.level_951Code.GDenemyObjects2.length = 0;
gdjs.level_951Code.GDenemyObjects3.length = 0;
gdjs.level_951Code.GDleftObjects1.length = 0;
gdjs.level_951Code.GDleftObjects2.length = 0;
gdjs.level_951Code.GDleftObjects3.length = 0;
gdjs.level_951Code.GDrightObjects1.length = 0;
gdjs.level_951Code.GDrightObjects2.length = 0;
gdjs.level_951Code.GDrightObjects3.length = 0;
gdjs.level_951Code.GDsupeObjects1.length = 0;
gdjs.level_951Code.GDsupeObjects2.length = 0;
gdjs.level_951Code.GDsupeObjects3.length = 0;
gdjs.level_951Code.GDsupe_95symObjects1.length = 0;
gdjs.level_951Code.GDsupe_95symObjects2.length = 0;
gdjs.level_951Code.GDsupe_95symObjects3.length = 0;
gdjs.level_951Code.GDscoreObjects1.length = 0;
gdjs.level_951Code.GDscoreObjects2.length = 0;
gdjs.level_951Code.GDscoreObjects3.length = 0;

gdjs.level_951Code.eventsList3(runtimeScene);
return;

}

gdjs['level_951Code'] = gdjs.level_951Code;
