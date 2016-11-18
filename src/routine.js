/**********************************************************************
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
 **********************************************************************/

$(document).ready(function(){

    //Remove loader
    $(".loader").remove();
    $(".container").fadeIn();

    //Update copyright
    if(new Date().getFullYear()>2016){
	$("#copyright").text("-"+new Date().getFullYear());
    }

    //Emit input on form reset
    $("input[type='reset']").on("click", function(e){
	this.form.reset();
	$(this.form).find("input, select, textarea").each(function(){
	    this.dispatchEvent(new Event("input"));
	});
    });

    //Use custom datepicker if Firefox
    if(navigator.userAgent.indexOf("Firefox")!=-1){
	$(".datepicker").datepicker({
	    format:"yyyy-mm-dd",
	    autoclose:true
	}).on("changeDate", function(){
	    this.dispatchEvent(new Event("input"));
	});
    }
    
});