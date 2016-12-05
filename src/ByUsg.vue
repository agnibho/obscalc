<!--
***********************************************************************
 * Title: ObsCalc
 * Description: An Obstetric Calculator
 * Author: Agnibho Mondal
 * Website: http://code.agnibho.com
 **********************************************************************
   Copyright (c) 2016 Agnibho Mondal
   All rights reserved
 **********************************************************************
   This file is part of ObsCalc.
   
   ObsCalc is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.
   
   ObsCalc is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.
   
   You should have received a copy of the GNU General Public License
   along with Obscalc. If not, see <http://www.gnu.org/licenses/>.
***********************************************************************
-->
<template>
    <div class="panel panel-default tab-pane" id="panel-usg">
	<div class="panel-heading">
	    <p><strong>Calculate by U.S.G.</strong></p>
	</div>
	<div class="panel-body">
	    <form data-toggle="validator">
		<div class="form-group">
		    <label>Enter U.S.G. date:</label>
		    <div v-show="settings.dstyle=='cal'">
			<div class="form-group"><input class="form-control datepicker" type="date" v-model="usgDt" placeholder="YYYY-MM-DD" autocomplete="off" v-on:input="updt"><div class="help-block with-errors"></div></div>
		    </div>
		    <div v-show="settings.dstyle=='txt'">
			<div class="row">
			    <div class="col-md-4 form-group"><input class="form-control jump-focus" type="number" min="1" max="31" maxlength="2" v-model.number="usgDD" placeholder="DD" required autocomplete="off" v-on:input="updt"><div class="help-block with-errors"></div></div>
			    <div class="col-md-4 form-group"><input class="form-control jump-focus" type="number" min="1" max="12" maxlength="2" v-model.number="usgMM" placeholder="MM" required autocomplete="off" v-on:input="updt"><div class="help-block with-errors"></div></div>
			    <div class="col-md-4 form-group"><input class="form-control jump-focus" type="number" min="0" max="99" maxlength="2" v-model.number="usgYY" placeholder="YY" required autocomplete="off" v-on:input="updt"><div class="help-block with-errors"></div></div>
			</div>
			<div><p class="text-danger text-center">{{err}}</p></div>
		    </div>
		</div>
		<div class="form-group">
		    <label>Enter U.S.G. Maturation:</label>
		    <div class="row">
			<div class="col-md-6 form-group"><input class="form-control jump-focus" type="number" min="0" max="52" maxlength="2" v-model.number="usgWk" placeholder="Weeks" required autocomplete="off"><div class="help-block with-errors"></div></div>
			<div class="col-md-6 form-group"><input class="form-control stop-focus" type="number" min="0" max="6" maxlength="1" v-model.number="usgDy" placeholder="Days" required autocomplete="off" data-ref="#usgmat"><div class="help-block with-errors"></div></div>
		    </div>
		</div>
		<input type="reset" class="btn btn-default">
	    </form>
	    <br>
	    <div id="usgmat">
		<table class="table" v-if="usgMat">
		    <tbody>
			<tr><th class="active">Maturation by U.S.G. at present</th><th>{{usgMat}}</th></tr>
		    </tbody>
		</table>
	    </div>
	</div>
    </div>
</template>

<script>
 import moment from "moment";
 export default {
     name:'ByUsg',
     props:['settings'],
     data:function(){
	 return{
	     usgDt:"",usgWk:"",usgDy:""
	 }
     },
     computed:{
	 usgMat:function(){
	     var dt=moment(this.usgDt, "YYYY-MM-DD", true);
	     if(dt.isValid()){
		 if(this.usgWk !=="" && this.usgWk>=0 && this.usgWk<=52 && this.usgDy!=="" && this.usgDy>=0 && this.usgDy<=6){
		     var today=moment();
		     var diff=today.diff(dt, "days");
		     var days=this.usgWk*7+this.usgDy+diff;
		     return Math.floor(days/7)+" weeks "+days%7+" days";
		 }
	     }
	 }
     },
     methods:{
	 updt:function(){
	     this.err="";
	     if(this.settings.dstyle=="txt"){
		 if(this.usgYY>9){
		     var strYY=""+this.usgYY;
		 }
		 else{
		     var strYY="0"+this.usgYY;
		 }
		 var dt=moment(this.usgDD+"-"+this.usgMM+"-"+strYY, "D-M-YY", true);
	     }
	     else{
		 var dt=moment(this.usgDt, "YYYY-MM-DD", true);
	     }
	     if(dt.isValid()){
		 if(this.settings.dstyle=="txt"){
		     this.usgDt=dt.format("YYYY-MM-DD");
		 }
		 else{
		     this.usgDD=dt.format("DD");
		     this.usgMM=dt.format("MM");
		     this.usgYY=dt.format("YY");
		 }
	     }
	     else{
		 if(this.settings.dstyle=="txt" && this.usgDD && this.usgMM && this.usgYY){
		     this.usgDt=null;
		     this.err="The date you have entered is invalid.";
		 }
	     }
	 }
     }
 }
</script>
