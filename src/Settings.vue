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
    <div>
	<button class="btn-fab" title="Settings" data-toggle="modal" data-target="#settings-modal"><span class="glyphicon glyphicon-cog glyphicon-center" aria-hidden="true"></span></button>
	<div class="modal fade" id="settings-modal" tabindex="-1">
	    <div class="modal-dialog">
		<div class="modal-content">
		    <div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
		    </div>
		    <div class="modal-body">
			<div class="panel panel-default">
			    <div class="panel-heading">
				<h4>Settings</h4>
			    </div>
			    <div class="panel-body">
				<form>
				    <div class="">
					<div class="row">
					    <div class="col-sm-4 col-sm-offset-2">
						<label>Date input style:</label>
					    </div>
					    <div class="col-sm-6">
						<div class="radio"><label><input type="radio" name="date-style" value="cal" v-model="settings.dstyle"><strong>Calendar</strong></label></div>
						<div class="radio"><label><input type="radio" name="date-style" value="txt" v-model="settings.dstyle"><strong>Textbox</strong></label></div>
					    </div>
					</div>
				    </div>
				</form>
			    </div>
			</div>
			<div class="panel panel-default">
			    <div class="panel-heading">
				<h4><a data-toggle="collapse" href="#about-text" style="text-decoration:none;color:inherit">About</a></h4>
			    </div>
			    <div id="about-text" class="panel-collapse collapse">
				<div class="panel-body">
				    <p><strong>ObsCalc <span class="version"></span></strong></p>
				    <p>ObsCalc is a free and open source software published under GPL v3. It has been developed by Agnibho Mondal &lt;mail@agnibho.com&gt;.</p>
				    <p><a href="https://code.agnibho.com/obscalc/">https://code.agnibho.com/obscalc/</a></p>
				    <p>Copyright &copy; <span class="copyright" data-start="2016">2016</span> Agnibho Mondal</p>
				</div>
			    </div>
			</div>
		    </div>
		    <div class="modal-footer">
			<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		    </div>
		</div>
	    </div>
	</div>
    </div>
</template>

<script>
 export default {
     name:'Settings',
     props:['settings'],
     watch:{
	 'settings':{
	     handler:function(){
		 localStorage.setItem("settings", JSON.stringify(this.settings));
	     },
	     deep:true
	 }
     }
 }
</script>

<style>
 .btn-fab{
     position:fixed;
     top:10px;
     left:10px;
     background-color:#5bc0de;
     width:40px;
     height:40px;
     border-radius:100%;
     background:#5bc0de;
     border:none;
     outline:none;
     color:white;
     font-size:30px;
     box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
     -webkit-tap-highlight-color:rgba(0,0,0,0);
 }
 .glyphicon-center{
     margin-top:5px;
 }
</style>
