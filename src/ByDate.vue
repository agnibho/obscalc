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
    <div class="panel panel-default">
	<div class="panel-heading">
	    <p><strong>Calculate by Date</strong></p>
	</div>
	<div class="panel panel-body">
	    <ul class="nav nav-tabs">
		<li class="active"><a href="#panel-lmp" aria-controls="panel-lmp" data-toggle="tab">Enter L.M.P.</a></li>
		<li><a href="#panel-edd" aria-controls="panel-edd" data-toggle="tab">Enter E.D.D.</a></li>
	    </ul>
	    <div class="tab-content">
		<div class="panel panel-default tab-pane active" id="panel-lmp">
		    <div class="panel-body">
			<form data-toggle="validator">
			    <div class="form-group">
				<label>Enter L.M.P.:</label>
				<div class="row">
				    <div class="col-sm-8">
					<div v-show="settings.dstyle=='cal'">
					    <div class="form-group"><input class="form-control datepicker" type="date" v-model="lmpDt" placeholder="YYYY-MM-DD" autocomplete="off" v-on:input="eddUpdt"><div class="help-block with-errors"></div></div>
					</div>
					<div v-show="settings.dstyle=='txt'">
					    <div class="row">
						<div class="col-md-4 form-group"><input class="form-control jump-focus" type="number" min="1" max="31" maxlength="2" v-model.number="lmpDD" placeholder="DD" required autocomplete="off" v-on:input="eddUpdt"><div class="help-block with-errors"></div></div>
						<div class="col-md-4 form-group"><input class="form-control jump-focus" type="number" min="1" max="12" maxlength="2" v-model.number="lmpMM" placeholder="MM" required autocomplete="off" v-on:input="eddUpdt"><div class="help-block with-errors"></div></div>
						<div class="col-md-4 form-group"><input class="form-control stop-focus" type="number" min="0" max="99" maxlength="2" v-model.number="lmpYY" placeholder="YY" required autocomplete="off" v-on:input="eddUpdt" data-ref="#datemat"><div class="help-block with-errors"></div></div>
					    </div>
					    <div><p class="text-danger text-center">{{lmpErr}}</p></div>
					</div>
				    </div>
				    <div class="col-sm-4">
					<input type="reset" class="btn btn-default">
				    </div>
				</div>
			    </div>
			</form>
		    </div><!-- body -->
		</div><!-- panel -->
		<div class="panel panel-default tab-pane" id="panel-edd">
		    <div class="panel-body">
			<form data-toggle="validator">
			    <div class="form-group">
				<label>Enter E.D.D.:</label>
				<div class="row">
				    <div class="col-sm-8">
					<div v-show="settings.dstyle=='cal'">
					    <div class="form-group"><input class="form-control datepicker" type="date" v-model="eddDt" placeholder="YYYY-MM-DD" autocomplete="off" v-on:input="lmpUpdt"><div class="help-block with-errors"></div></div>
					</div>
					<div v-show="settings.dstyle=='txt'">
					    <div class="row">
						<div class="col-md-4 form-group"><input class="form-control jump-focus" type="number" min="1" max="31" maxlength="2" v-model.number="eddDD" placeholder="DD" required autocomplete="off" v-on:input="lmpUpdt"><div class="help-block with-errors"></div></div>
						<div class="col-md-4 form-group"><input class="form-control jump-focus" type="number" min="1" max="12" maxlength="2" v-model.number="eddMM" placeholder="MM" required autocomplete="off" v-on:input="lmpUpdt"><div class="help-block with-errors"></div></div>
						<div class="col-md-4 form-group"><input class="form-control stop-focus" type="number" min="0" max="99" maxlength="2" v-model.number="eddYY" placeholder="YY" required autocomplete="off" v-on:input="lmpUpdt" data-ref="#datemat"><div class="help-block with-errors"></div></div>
					    </div>
					    <div><p class="text-danger text-center">{{eddErr}}</p></div>
					</div>
				    </div>
				    <div class="col-sm-4">
					<input type="reset" class="btn">
				    </div>
				</div>
			    </div>
			</form>
		    </div><!-- body -->
		</div><!-- panel -->
	    </div><!-- tab -->
	    <div id="datemat">
		<table class="table table-bordered" v-if="lmpVal">
		    <tbody>
			<tr class="active"><th>L.M.P.</th><th>E.D.D.</th></tr>
			<tr><th vbind="lmpDt">{{lmpVal}}</th><th>{{eddVal}}</th></tr>
		    </tbody>
		</table>
		<hr>
		<table class="table" v-if="dateMat">
		    <tbody>
			<tr><th class="active">Maturation by Date at present</th><th>{{dateMat}}</th></tr>
		    </tbody>
		</table>
	    </div>
	</div>
    </div>
</template>

<script>
 import moment from "moment";
 export default {
     name: 'ByDate',
     data:function(){
	 return{
	     lmpDt:"",eddDt:"",lmpVal:"",eddVal:"",lmpUpdt:"",eddUpdt:"",usgDt:"",usgWk:"",usgDy:"",lmpErr:"",eddErr:"",usgErr:""
	 }
     },
     props:['settings'],
     computed:{
	 lmpVal:function(){
	     var dt=moment(this.lmpDt, "YYYY-MM-DD", true);
	     if(dt.isValid()){
		 return dt.format("DD/MM/YYYY");
	     }
	 },
	 eddVal:function(){
	     var dt=moment(this.eddDt, "YYYY-MM-DD", true);
	     if(dt.isValid()){
		 return dt.format("DD/MM/YYYY");
	     }
	 },
	 dateMat:function(){
	     var dt=moment(this.lmpDt, "YYYY-MM-DD", true);
	     if(dt.isValid()){
		 var today=moment();
		 var days=today.diff(dt, "days");
		 if(days>0 && days<364){
		     return Math.floor(days/7)+" weeks "+days%7+" days";
		 }
	     }
	 }
     },
     methods:{
	 lmpUpdt:function(){
	     this.eddErr="";
	     if(this.settings.dstyle=="txt"){
		 if(this.eddYY>9){
		     var strYY=""+this.eddYY;
		 }
		 else{
		     var strYY="0"+this.eddYY;
		 }
		 var dt=moment(this.eddDD+"-"+this.eddMM+"-"+strYY, "D-M-YY", true);
	     }
	     else{
		 var dt=moment(this.eddDt, "YYYY-MM-DD", true);
	     }
	     if(dt.isValid()){
		 if(this.settings.dstyle=="txt"){
		     this.eddDt=dt.format("YYYY-MM-DD");
		 }
		 else{
		     this.eddDD=dt.format("DD");
		     this.eddMM=dt.format("MM");
		     this.eddYY=dt.format("YY");
		 }
		 dt.subtract(9, "months");
		 dt.subtract(7, "days");
		 this.lmpDt=dt.format("YYYY-MM-DD");
		 this.lmpDD=dt.format("DD");
		 this.lmpMM=dt.format("MM");
		 this.lmpYY=dt.format("YY");
	     }
	     else{
		 this.lmpDt=null;
		 this.lmpDD=null;
		 this.lmpMM=null;
		 this.lmpYY=null;
		 if(this.settings.dstyle=="txt" && this.eddDD && this.eddMM && this.eddYY){
		     this.eddDt=null;
		     this.eddErr="The date you have entered is invalid.";
		 }
	     }
	 },
	 eddUpdt:function(){
	     this.lmpErr="";
	     if(this.settings.dstyle=="txt"){
		 if(this.lmpYY>9){
		     var strYY=""+this.lmpYY;
		 }
		 else{
		     var strYY="0"+this.lmpYY;
		 }
		 var dt=moment(this.lmpDD+"-"+this.lmpMM+"-"+strYY, "D-M-YY", true);
	     }
	     else{
		 var dt=moment(this.lmpDt, "YYYY-MM-DD", true);
	     }
	     if(dt.isValid()){
		 if(this.settings.dstyle=="txt"){
		     this.lmpDt=dt.format("YYYY-MM-DD");
		 }
		 else{
		     this.lmpDD=dt.format("DD");
		     this.lmpMM=dt.format("MM");
		     this.lmpYY=dt.format("YY");
		 }
		 dt.add(9, "months");
		 dt.add(7, "days");
		 this.eddDt=dt.format("YYYY-MM-DD");
		 this.eddDD=dt.format("DD");
		 this.eddMM=dt.format("MM");
		 this.eddYY=dt.format("YY");
	     }
	     else{
		 this.eddDt=null;
		 this.eddDD=null;
		 this.eddMM=null;
		 this.eddYY=null;
		 if(this.settings.dstyle=="txt" && this.lmpDD && this.lmpMM && this.lmpYY){
		     this.lmpDt=null;
		     this.lmpErr="The date you have entered is invalid.";
		 }
	     }
	 }
     }
 }
</script>
